jsca2js
=======

This project provides a set of utilities to convert APIs written in [Appcelerator's](http://www.appcelerator.com/) [JSCA](http://wiki.appcelerator.org/display/tis/JSCA+1.0+Specification) specification to JSDoc annotated JavaScript files.

Currently the only use case I've found for these utilities is to generate a JavaScript file for the [Titanium JSON API](http://developer.appcelerator.com/apidoc/mobile/1.7.3/api.json), which can then be used in IDE's such as [IntelliJ IDEA](http://www.jetbrains.com/idea/) for code completion and documentation lookup. Unfortunately not all identifiers used in the Titanium API convert to valid JavaScript, but nonetheless I found the produced file quite useful.

Converting JSCA JSON to JavaScript
----------------------------------

The main function used to convert JSCA JSON to JavaScript is named `convertJsca2Js` and is provided through the `jsca2js.py` script. This function expects a JSON object containing the API in the JSCA specification and produces a string containing the converted JavaScript.

Creating the Titanium JavaScript file
-------------------------------------

The `titanium-mobile.py` script can be used to create a JavaScript file for Titanium Mobile API. This script will automatically fetch the `api.json` file from the Titanium Developer site and produce the corresponding JavaScript file.

### Usage:

    titanium-mobile.py <titanium-version>

### Output

The script will produce the JavaScript file in the current directory with a name that follows the following format:

    titanium-mobile-<titanium-version>.js
