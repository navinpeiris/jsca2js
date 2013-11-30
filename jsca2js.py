#!/usr/bin/env python

__author__ = "Navin Peiris"
__copyright__ = "Copyright 2011, Navin Peiris. All rights reserved."
__email__ = "navinpeiris@gmail.com"
__status__ = "Development"

import re
from formatter import Formatter

METHOD_INDENTATION = 4

HTML_LINK_REGEX = '<a href=\"(.*?)\">(.*?)</a>'
HTML_TARGET_SUFFIX = '.html'
KEYS = {}


def htmlToJsDocTarget(htmlTarget):
    if '-' in htmlTarget:
        return htmlTarget.partition('-')[0]
    if htmlTarget.endswith(HTML_TARGET_SUFFIX):
        return htmlTarget[0:-len(HTML_TARGET_SUFFIX)]
    return htmlTarget


def createJsDocLink(target):
    return '{@link ' + target + '}'


def convertLinks(jsDoc):
    result = jsDoc
    for linkMatcher in re.finditer(HTML_LINK_REGEX, jsDoc):
        htmlLink = linkMatcher.group(0)
        htmlTarget = linkMatcher.group(1)

        jsDocTarget = htmlToJsDocTarget(htmlTarget)
        jsDocLink = createJsDocLink(jsDocTarget)

        result = result.replace(htmlLink, jsDocLink)
    return result


def convertIds(id):
    """ Converts invalid JavaScript identifiers to acceptable versions."""
    if id == 'default' or id == 'function':
        return '_' + id
    elif id.find('-') > 0:
        return id.replace('-', '_')
    return id


def convertKey(id):
    """ Converts invalid JavaScript hash key to acceptable versions."""
    if id == 'default' or id.find('-') > 0:
        return '"' + id + '"'
    return id


def getPlatforms(platforms):
    res = list()
    for platform in platforms:
        if type(platform) is dict:
            res.append(platform['pretty_name'])
        else:
            res.append(platform)
    return res


def formatReturn(returns):
    typ = returns['type']
    if 'summary' in returns:
        return typ + ' ' + returns['summary']
    return typ


def formatType(typeDef):
    if type(typeDef) is list:
        typ = '|'.join(typeDef)
    else:
        typ = typeDef
    return typ


def formatSince(decl):
    if 'since' in decl:
        return decl['since']
    res = list()
    if 'platforms' in decl:
        for platform in decl['platforms']:
            res.append(platform['since'] + ' (' + platform['pretty_name'] + ')')
    else:
        return False
    return ', '.join(res)


def generatePropertyJSDoc(property):
    formatter = Formatter(METHOD_INDENTATION)
    formatter.addLine('/**')

    prefix = ' * '

    if KEYS['value'] in property:
        formatter.addLine(prefix, property[KEYS['value']])
    if 'since' in property:
        formatter.addLine(prefix, 'platforms: ', ', '.join(getPlatforms(property['platforms'])))
    formatter.addLine(prefix, '@type ', formatType(property['type']))

    sinceVer = formatSince(property)
    if sinceVer:
        formatter.addLine(prefix, '@since ', sinceVer)

    formatter.addLine(' */')

    return convertLinks(formatter.getResult())


def generateMethodJSDoc(method):
    formatter = Formatter(METHOD_INDENTATION)
    formatter.addLine('/**')

    prefix = ' * '

    if KEYS['value'] in method:
        formatter.addLine(prefix, method[KEYS['value']])

    if 'platforms' in method and 'since' in method:
        formatter.addLine(prefix, 'platforms: ', ', '.join(getPlatforms(method['platforms'])))

    for param in method['parameters']:
        formatter.addLine(prefix, '@param {', formatType(param['type']), '} ',
            convertIds(param['name']), ' ', (param[KEYS['description']] if KEYS['description'] in param else param['description'] ) or '')

    if 'returntype' in method and method['returntype'] == 'void':
        formatter.addLine(prefix, '@returns ', method['returntype'])
    elif 'returns' in method:
        returns = method['returns']
        if type(returns) is list:
            for ret in returns:
                if ret['type'] != 'void':
                    formatter.addLine(prefix, '@returns ', formatReturn(ret))
        elif returns['type'] != 'void':
            formatter.addLine(prefix, '@returns ', formatReturn(returns))

    sinceVer = formatSince(method)
    if sinceVer:
        formatter.addLine(prefix, '@since ', sinceVer)

    formatter.addLine(' */')

    return convertLinks(formatter.getResult())


def generateNamespaceJSDoc(namespace):
    formatter = Formatter()
    formatter.addLine('/**')

    prefix = ' * '
    if 'notes' in namespace and namespace['notes']:
        formatter.addLine(prefix, 'Notes: ', namespace['notes'])

    if 'platforms' in namespace:
        formatter.addLine(prefix, 'platforms: ', ', '.join(getPlatforms(namespace['platforms'])))
    if namespace['description']:
        formatter.addLine(prefix, '@namespace ', namespace['description'])
    if 'since' in namespace:
        formatter.addLine(prefix, '@since ', namespace['since'])

    if 'examples' in namespace:
        for example in namespace['examples']:
            formatter.addLine(prefix)
            formatter.addLine(prefix, '@example ', example['description'])
            formatter.addLine(prefix, example['code'])

    formatter.addLine(' */')
    return convertLinks(formatter.getResult())


def formatParams(params):
    paramNames = [convertIds(param['name']) for param in params]
    return ', '.join(paramNames)


def formatProperties(namespace):
    formatter = Formatter(METHOD_INDENTATION)
    for property in namespace['properties']:
        formatter.add(generatePropertyJSDoc(property))
        formatter.addLine(convertKey(property['name']), ':null,')
        formatter.newLine()
    return formatter.getResult()


def formatMethods(namespace):
    formatter = Formatter(METHOD_INDENTATION)
    key = 'methods' if 'methods' in namespace else 'method'
    for method in namespace[key]:
        formatter.add(generateMethodJSDoc(method))
        formatter.addLine(convertKey(method['name']), ':function(', formatParams(method['parameters']), ") {")
        formatter.addLine('},')
        formatter.newLine()
    return formatter.getResult()


def formatGlobal(namespace):
    formatter = Formatter(METHOD_INDENTATION)

    for method in namespace['methods']:
        formatter.add(generateMethodJSDoc(method))
        formatter.addLine('function ', convertKey(method['name']), '(', formatParams(method['parameters']), ") {")
        formatter.addLine('}')
        formatter.newLine()
    return formatter.getResult()


def extendGlobal(name, namespace):
    formatter = Formatter(METHOD_INDENTATION)

    for method in namespace['methods']:
        formatter.add(generateMethodJSDoc(method))
        formatter.addLine(name, '.prototype.', convertKey(method['name']), ' = function(', formatParams(method['parameters']), ") {")
        formatter.addLine('};')
        formatter.newLine()
    return formatter.getResult()


def formatNamespace(namespace):
    namespaceName = convertIds(namespace[0])
    namespaceContent = namespace[1]

    formatter = Formatter()
    formatter.add(generateNamespaceJSDoc(namespaceContent))

    if namespaceName.find('.') < 0:
        if namespaceName == 'Global': # ie. Global.alert -> alert()
            formatter.add(formatGlobal(namespaceContent))
            return formatter.getResult();
            
        formatter.add('var ')
        if namespaceName == 'Titanium':
            namespaceName = 'Ti'

    elif namespaceName.startswith('Global.'): # ie. Global.String prototype extension
        formatter.add(extendGlobal(namespaceName[7:], namespaceContent))
        return formatter.getResult();

    if 'subtype' in namespaceContent and namespaceContent['subtype'] == 'proxy':
        formatter.addLine(namespaceName, ' = function() {').addLine('};')
        formatter.addLine(namespaceName, '.prototype = {').newLine()
    else:
        formatter.addLine(namespaceName, ' = {').newLine()
    formatter.addLine(formatProperties(namespaceContent))
    formatter.addLine(formatMethods(namespaceContent))
    formatter.addLine('};').newLine()

    return formatter.getResult()


def convertJsca2Js(jsca, version):
    version = '.'.join(version.split('.')[0:2])
    if float(version) >= 1.8:
        KEYS['value'] = 'summary'
        KEYS['description'] = 'summary'
    else:
        KEYS['value'] = 'value'
        KEYS['description'] = 'description'

    javascript = ''
    for namespace in sorted(jsca.items()):
        javascript += formatNamespace(namespace)

    javascript = javascript.replace('Titanium.', 'Ti.')
    javascript = javascript.replace('.2DMatrix', '.D2Matrix')
    javascript = javascript.replace('.3DMatrix', '.D3Matrix')
    javascript += "\nvar Titanium = Ti;\n"

    return javascript.replace(",\n\n\n}", "\n}")
