#!/usr/bin/env python

__author__ = "Navin Peiris"
__copyright__ = "Copyright 2011, Navin Peiris. All rights reserved."
__email__ = "navinpeiris@gmail.com"
__status__ = "Development"

import re
import sys
import urllib2
import json
import os.path
from jsca2js import convertJsca2Js

DEFAULT_HTTP_TIMEOUT_SECS = 10

TITANIUM_VERSION_REGEX = re.compile('\d\.\d\.\d')

def retrieveJsca(version):
    if version.startswith('2.'):
        url = 'http://docs.appcelerator.com/titanium/data/' + version + '/api.json'
    else:
        url = 'http://developer.appcelerator.com/apidoc/mobile/' + version + '/api.json'

    cache = 'titanium-js/api-' + version + '.json'
    try:
        if os.path.isfile(cache):
            file = open(cache, 'r')
            content = file.read()
            file.close()
        else:
            response = urllib2.urlopen(url, timeout=DEFAULT_HTTP_TIMEOUT_SECS)
            content = response.read()
            file = open(cache, 'w')
            file.write(content)
            file.close()
        return json.JSONDecoder().decode(content)
    except urllib2.HTTPError as e:
        raise Exception('Unable to retrieve API for Titanium version ' + version)


def writeJsFile(content, filepath):
    try:
        file = open(filepath, 'w')
        file.write(content)
        file.close()
    except IOError:
        raise Exception('Unable to write JavaScript to file: ' + TITANIUM_JS_FILE_PATH)


def errorExit(message=None):
    if message:
        sys.stderr.write(message)
    sys.exit(1)


def main():
    if len(sys.argv) != 2:
        errorExit('USAGE: ' + sys.argv[0] + ' <titanium-version>')

    version = sys.argv[1]

    if not TITANIUM_VERSION_REGEX.match(version):
        errorExit('ERROR: Invalid titanium version specified. Must be in the format X.X.X')

    print('Retrieving Titanium JSCA API for version: ' + version)
    jsca = retrieveJsca(version)

    print('Converting API to JavaScript')
    javascript = convertJsca2Js(jsca, version)

    outputFilePath = 'titanium-js/titanium-mobile-' + version + '.js'
    print('Writing JavaScript to file: ' + outputFilePath)
    writeJsFile(javascript, outputFilePath)

if __name__ == '__main__':
    #try:
        main()
        print 'Conversion completed successfully'
    #except Exception as e:
    #    print('ERROR: ' + e.message)
    #    sys.exit(1)

