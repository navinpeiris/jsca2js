jsca2js
=======

This project provides a set of utilities to convert APIs written in [Appcelerator's](http://www.appcelerator.com/) 
[JSCA](http://wiki.appcelerator.org/display/tis/JSCA+1.0+Specification) specification to JSDoc annotated 
JavaScript files.

A good use case for these utilities is to generate a JavaScript file for the 
[Titanium JSON API](http://developer.appcelerator.com/apidoc/mobile/1.8.0.1/api.json), which can then be used in 
IDE's such as [IntelliJ IDEA](http://www.jetbrains.com/idea/) or [Sublime Text 2](http://www.sublimetext.com/) 
(using [SublimeCodeIntel plugin](https://github.com/Kronuz/SublimeCodeIntel) for code completion and documentation 
lookup. 

If you drop this Javascript API in the root of your Titanium mobile project,
smart JS editors' code completion will help you write this kind of stuff easily:

    var win = Ti.UI.createWindow(options);
    win.<completion for Window proxy object>

Converting JSCA JSON to JavaScript
----------------------------------

The main function used to convert JSCA JSON to JavaScript is named `convertJsca2Js` and is provided through 
the `jsca2js.py` script. This function expects a JSON object containing the API in the JSCA specification 
and produces a string containing the converted JavaScript.

Creating the Titanium JavaScript file
-------------------------------------

The `titanium-mobile.py` script can be used to create a JavaScript file for Titanium Mobile API. This script 
will automatically fetch the `api.json` file from the Titanium Developer site (and cache it locally) and produce 
the corresponding JavaScript file.

### Usage:

    titanium-mobile.py <titanium-version>

### Output

The script will produce the JavaScript file in the current directory with a name that follows the following format:

    titanium-mobile-<titanium-version>.js
