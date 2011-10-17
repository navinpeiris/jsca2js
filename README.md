jsca2js
=======

This project provides a set of utilities to convert APIs written in [Appcelerator's](http://www.appcelerator.com/) [JSCA](http://wiki.appcelerator.org/display/tis/JSCA+1.0+Specification) specification to JSDoc annotated JavaScript files.

Currently the only use case I've found for these utilities is to generate a JavaScript file for the [Titanium JSON API](http://developer.appcelerator.com/apidoc/mobile/1.7.2/api.json), which can then be used in IDE's such as [IntelliJ IDEA](http://www.jetbrains.com/idea/) for code completion and documentation lookup. Unfortunately not all identifiers used in the Titanium API convert to valid JavaScript, but nonetheless I found the produced file quite useful.

Converting JSCA JSON to JavaScript
----------------------------------

The main function used to convert JSCA JSON to JavaScript is named `convertJsca2Js` and is provided through the `jsca2js.py` script. This function expects a JSON object containing the API in the JSCA specification and produces a string containing the converted JavaScript.

Creating the Titanium JavaScript file
-------------------------------------

The `titanium-js.py` file expects the Titanium JSON API in a file names `api.json` in the current directory and produces a file named `titanium.js` that contains the resulting JavaScript. Both the input JSON file and the output JavaScript file are provided in the repository for convenience.
