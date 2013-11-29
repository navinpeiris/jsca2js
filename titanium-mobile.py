#!/usr/bin/env python

__author__ = "Navin Peiris"
__copyright__ = "Copyright 2011, Navin Peiris. All rights reserved."
__email__ = "navinpeiris@gmail.com"
__status__ = "Development"

import re
import sys
import urllib
import json
import os.path
from jsca2js import convertJsca2Js

DEFAULT_HTTP_TIMEOUT_SECS = 10

TITANIUM_VERSION_REGEX = re.compile('\d\.\d\.\d')

starts_with = ('3.','2.')

def retrieveJsca(version, module='titanium'):
    if version.startswith(starts_with):
        url = 'http://docs.appcelerator.com/titanium/data/' + version + '/'
    else:
        url = 'http://developer.appcelerator.com/apidoc/mobile/' + version + '/'

    url += 'api.json' if module == 'titanium' else module + '_api.json'

    cache = 'titanium-js/api-' + module.lower() + '-' + version + '.json'
    try:
        if not os.path.isfile(cache):
            def reporthook(blocknum, blocksize, totalsize):
                readsofar = blocknum * blocksize
                if totalsize > 0:
                    percent = readsofar * 1e2 / totalsize
                    s = "\r%5.1f%% %*d / %d" % (
                        percent, len(str(totalsize)), readsofar, totalsize)
                    sys.stderr.write(s)
                    if readsofar >= totalsize: # near the end
                        sys.stderr.write("\n")
                else: # total size is unknown
                    sys.stderr.write("read %d\n" % (readsofar,))

            urllib.urlretrieve(url, cache, reporthook)

        file    = open(cache, 'r')
        content = file.read()
        file.close()

        return json.JSONDecoder().decode(content)
    except Exception as e:
        if module == 'titanium':
            errStr = 'Unable to retrieve API for Titanium version ' + version
        else:
            errStr = module + ' was not found'

        raise Exception(errStr)


def writeJsFile(content, filepath):
    try:
        file = open(filepath, 'w')
        file.write(content)
        file.close()
    except IOError:
        raise Exception('Unable to write JavaScript to file: ' + TITANIUM_JS_FILE_PATH)


def errorExit(message=None):
    if message:
        sys.stderr.write(message + '\n')
    sys.exit(1)

#
# Function tries to find Alloy framework files with the same version which 
# Titanium have. If it finds - download it and convert it too
#
def tryFindAlloy(version):
    print 'Searching for Alloy Framework'

    try:
        jsca = retrieveJsca(version,'alloy')
    except Exception, e:
        errorExit('Not found for this version')

    print('Converting API to JavaScript')
    javascript = convertJsca2Js(jsca, version)

    outputFilePath = 'titanium-js/titanium-mobile-alloy-' + version + '.js'
    print('Writing JavaScript to file: ' + outputFilePath)
    writeJsFile(javascript, outputFilePath)

def main():
    if len(sys.argv) != 2:
        errorExit('USAGE: ' + sys.argv[0] + ' <titanium-version>')

    version = sys.argv[1]

    if not TITANIUM_VERSION_REGEX.match(version):
        errorExit('ERROR: Invalid titanium version specified. Must be in the format X.X.X')

    print('Retrieving Titanium JSCA API for version: ' + version)
    try:
        jsca = retrieveJsca(version)
    except Exception, e:
        errorExit(str(e))

    print('Converting API to JavaScript')
    javascript = convertJsca2Js(jsca, version)

    outputFilePath = 'titanium-js/titanium-mobile-' + version + '.js'
    print('Writing JavaScript to file: ' + outputFilePath)
    writeJsFile(javascript, outputFilePath)

    tryFindAlloy(version)

if __name__ == '__main__':
    #try:
        main()
        print 'Conversion completed successfully'
    #except Exception as e:
    #    print('ERROR: ' + e.message)
    #    sys.exit(1)

