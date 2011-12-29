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
    if id == 'default':
        return '_' + id
    elif id.find('-') > 0:
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
    typ = returns['type'].replace('.', '_')
    if 'summary' in returns:
        return typ + ' ' + returns['summary']
    return typ

def formatType(typeDef):
    if type(typeDef) is list:
        typ = '(' + '|'.join(typeDef) + ')'
    else:
        typ = typeDef
    return typ.replace('.', '_')

def formatSince(decl):
    if 'since' in decl:
        return decl['since']
    res = list()
    for platform in decl['platforms']:
        res.append(platform['since'] + ' (' + platform['pretty_name'] + ')')
    return ', '.join(res)

def generatePropertyJSDoc(property):
    formatter = Formatter(METHOD_INDENTATION)
    formatter.addLine('/**')

    prefix = ' * '

    formatter.addLine(prefix, property[KEYS['value']])
    if 'since' in property:
        formatter.addLine(prefix, 'platforms: ', ', '.join(getPlatforms(property['platforms'])))
    formatter.addLine(prefix, '@type ', formatType(property['type']))
    formatter.addLine(prefix, '@since ', formatSince(property))

    formatter.addLine(' */')

    return convertLinks(formatter.getResult())

def generateMethodJSDoc(method):
    formatter = Formatter(METHOD_INDENTATION)
    formatter.addLine('/**')

    prefix = ' * '

    formatter.addLine(prefix, method[KEYS['value']])

    if 'since' in method: 
        formatter.addLine(prefix, 'platforms: ', ', '.join(getPlatforms(method['platforms'])))

    for param in method['parameters']:
        formatter.addLine(prefix, '@param ', formatType(param['type']), ' ', 
            convertIds(param['name']), ' ', param[KEYS['description']])

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

    formatter.addLine(prefix, '@since ', formatSince(method))

    formatter.addLine(' */')

    return convertLinks(formatter.getResult())


def generateNamespaceJSDoc(namespace):
    formatter = Formatter()
    formatter.addLine('/**')

    prefix = ' * '
    if 'notes' in namespace and namespace['notes']:
        formatter.addLine(prefix, 'Notes: ', namespace['notes'])

    formatter.addLine(prefix, 'platforms: ', ', '.join(getPlatforms(namespace['platforms'])))
    if namespace['description']:
        formatter.addLine(prefix, '@namespace ', namespace['description'])
    if 'since' in namespace:
        formatter.addLine(prefix, '@since ', namespace['since'])

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
        formatter.addLine(convertIds(property['name']), ':null,')
        formatter.newLine()
    return formatter.getResult()

def formatMethods(namespace):
    formatter = Formatter(METHOD_INDENTATION)
    for method in namespace['methods']:
        formatter.add(generateMethodJSDoc(method))
        formatter.addLine(convertIds(method['name']), ':function(', formatParams(method['parameters']), ") {")
        formatter.addLine('},')
        formatter.newLine()
    return formatter.getResult()

def formatNamespace(namespace):
    namespaceName = convertIds(namespace[0])
    namespaceContent = namespace[1]

    formatter = Formatter()
    formatter.add(generateNamespaceJSDoc(namespaceContent))
    if namespaceContent['subtype'] == 'proxy':
        name = namespaceName.replace('.', '_')
        formatter.addLine('function ', name, '() {').addLine('}')
        formatter.addLine(name, '.prototype = {').newLine()
    else:
        if namespaceName.find('.') < 0:
            formatter.add('var ')
        formatter.addLine(namespaceName, ' = {').newLine()
    formatter.addLine(formatProperties(namespaceContent))
    formatter.addLine(formatMethods(namespaceContent))
    formatter.addLine('}').newLine()

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
    
    javascript += "\nTi = Titanium;\n"

    return javascript.replace(",\n\n\n}", "\n}")

