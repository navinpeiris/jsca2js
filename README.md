jsca2js
=======

This project provides a set of utilities to convert APIs written in [Appcelerator's](http://www.appcelerator.com/) 
[JSCA](http://wiki.appcelerator.org/display/tis/JSCA+1.0+Specification) specification to JSDoc annotated 
JavaScript files.

A good use case for these utilities is to generate a JavaScript file for the 
[Titanium JSON API](http://developer.appcelerator.com/apidoc/mobile/1.8.0.1/api.json), which can then be used in 
IDE's such as [IntelliJ IDEA](http://www.jetbrains.com/idea/), [NetBeans](http://www.netbeans.com/) or [Sublime Text 2](http://www.sublimetext.com/) 
(using [SublimeCodeIntel plugin](https://github.com/Kronuz/SublimeCodeIntel)) for code completion and documentation 
lookup.

If you drop this Javascript API in the root of your Titanium mobile project,
smart JS editors' code completion will help you write this kind of stuff easily:

    var win = Ti.UI.createWindow(options);
    win.<completion for Window proxy object>

Also, this project tries to find Alloy framework JSCA files and convert them too.

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

    titanium-mobile.py <titanium-version> (optional)<alloy-titanium-version>

### Output

The script will produce the JavaScript file in the current directory with a name that follows the following format:

    titanium-mobile-<titanium-version>.js

If the script would find Alloy JSCA file too, it will produce one more file with a name:

	titanium-mobile-alloy-<titanium-version>.js

### PS

Be aware that versions of Titanium and Alloy framework can be different. Check firstly [Appcelerator Portal](http://docs.appcelerator.com/titanium/latest/) in JSON SDK 
section to find the proper latest version of Alloy framework. The titanium version for alloy is in the URL for the alloy file (eg. the 1.3.x alloy json is at version 3.2.0 of titanium).