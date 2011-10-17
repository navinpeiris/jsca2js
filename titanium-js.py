#!/usr/bin/env python

__author__ = "Navin Peiris"
__copyright__ = "Copyright 2011, Navin Peiris. All rights reserved."
__email__ = "navinpeiris@gmail.com"
__status__ = "Development"

import json
from jsca2js import convertJsca2Js

TITANIUM_JSCA_FILE_PATH = './api.json'
TITANIUM_JS_FILE_PATH = './titanium.js'

def getJsca():
    try:
        jscaFile = open(TITANIUM_JSCA_FILE_PATH, 'r')
        content = jscaFile.read()
        jscaFile.close()
    except IOError:
        raise Exception('Unable to find JSON API file in path: ' + TITANIUM_JSCA_FILE_PATH)

    return json.JSONDecoder().decode(content)


def writeJsFile(content):
    try:
        file = open(TITANIUM_JS_FILE_PATH, 'w')
        file.write(content)
        file.close()
    except IOError:
        raise Exception('Unable to write JavaScript to file: ' + TITANIUM_JS_FILE_PATH)


def main():
    jsca = getJsca()
    javascript = convertJsca2Js(jsca)
    writeJsFile(javascript)

if __name__ == '__main__':
    try:
        main()
        print 'Conversion completed successfully'
    except Exception as e:
        print 'ERROR: ' + e.message

