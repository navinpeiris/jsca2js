#!/usr/bin/python

import json
import re
from formatter import Formatter

METHOD_INDENTATION = 4

HTML_LINK_REGEX = '<a href=\"(.*?)\">(.*?)</a>'
HTML_TARGET_SUFFIX = '.html'

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


def sanitize(id):
    if id == 'default':
        return '_' + id
    return id


def decodeJsonFromFile(filePath):
    try:
        jsonFile = open(filePath, 'r')
    except IOError:
        raise Exception('Unable to find JSON API file in path: ' + filePath)

    return json.JSONDecoder().decode(jsonFile.read())


def generateNamespaceJSDoc(namespace):
    formatter = Formatter()
    formatter.addLine('/**')

    prefix = ' * '
    if namespace['notes']:
        formatter.addLine(prefix, 'Notes: ', namespace['notes'])

    formatter.addLine(prefix, 'platforms:', ', '.join(namespace['platforms']))
    formatter.addLine(prefix, '@namespace ', namespace['description'])
    formatter.addLine(prefix, '@since ', namespace['since'])

    for example in namespace['examples']:
        formatter.addLine(prefix)
        formatter.addLine(prefix, '@example ', example['description'])
        formatter.addLine(prefix, example['code'])

    formatter.addLine(' */')
    return convertLinks(formatter.getResult())


def generatePropertyJSDoc(property):
    formatter = Formatter(METHOD_INDENTATION)
    formatter.addLine('/**')

    prefix = ' * '

    formatter.addLine(prefix, property['value'])
    formatter.addLine(prefix, 'platforms:', ', '.join(property['platforms']))

    formatter.addLine(prefix, '@type ', property['type'])
    formatter.addLine(prefix, '@since ', property['since'])
    formatter.addLine(' */')

    return convertLinks(formatter.getResult())


def generateMethodJSDoc(method):
    formatter = Formatter(METHOD_INDENTATION)
    formatter.addLine('/**')

    prefix = ' * '

    formatter.addLine(prefix, method['value'])
    formatter.addLine(prefix, 'platforms:', ', '.join(method['platforms']))

    for param in method['parameters']:
        formatter.addLine(prefix, '@param {', param['type'], '} ', sanitize(param['name']), ' ', param['description'])

    if method['returntype'] != 'void':
        formatter.addLine(prefix, '@returns {', method['returntype'] + '}')

    formatter.addLine(' * ', '@since ', method['since'])
    formatter.addLine(' */')

    return convertLinks(formatter.getResult())


def formatParams(params):
    paramNames = [sanitize(param['name']) for param in params]
    return ', '.join(paramNames)


def formatProperties(namespace):
    formatter = Formatter(METHOD_INDENTATION)
    for property in namespace['properties']:
        formatter.add(generatePropertyJSDoc(property))
        formatter.addLine('this.', sanitize(property['name']), ' = null;')
        formatter.newLine()
    return formatter.getResult()


def formatMethods(namespace):
    formatter = Formatter(METHOD_INDENTATION)
    for method in namespace['methods']:
        formatter.add(generateMethodJSDoc(method))
        formatter.addLine('this.', sanitize(method['name']), ' = function(', formatParams(method['parameters']), ") {")
        formatter.addLine('};')
        formatter.newLine()
    return formatter.getResult()


def formatNamespace(namespace):
    namespaceName = sanitize(namespace[0])
    namespaceContent = namespace[1]

    formatter = Formatter()
    formatter.add(generateNamespaceJSDoc(namespaceContent))
    formatter.addLine(namespaceName, ' = (function() {').newLine()
    formatter.addLine(formatProperties(namespaceContent))
    formatter.addLine(formatMethods(namespaceContent))
    formatter.addLine('}());').newLine()
    return formatter.getResult()


def writeFile(string):
    filename = 'titanium.js'
    file = open(filename, 'w')
    file.write(string)
    file.close()


def main():
    fileName = './api.json'
    jsonApi = decodeJsonFromFile(fileName)

    javascript = ''
    for namespace in sorted(jsonApi.items()):
        javascript += formatNamespace(namespace)

    writeFile(javascript)

if __name__ == "__main__":
    main()
