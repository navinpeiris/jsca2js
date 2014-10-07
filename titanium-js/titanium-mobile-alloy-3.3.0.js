/**
 * @namespace <p>Top-level module for Alloy functions.</p>

<p>Alloy is an application framework built on top of the Titanium SDK designed to help rapidly
develop high quality applications and reduce maintenance.</p>

<p>Alloy uses the model-view-controller architecture to separate the application into three
components:</p>

<ul>
<li><p><strong>Models</strong> provide the data of the application. Alloy utilizes <strong>Backbone Model and Collection</strong>
 objects for this functionality.</p></li>
<li><p><strong>Views</strong> provide the UI components to interact with the application, written using <strong>XML markup</strong>
and <strong>Titanium Stylesheets (TSS)</strong>, which abstracts the UI components of the Titanium API.</p></li>
<li><p><strong>Controllers</strong> provide the glue layer between the Model and View components as well as
additional application logic using the <strong>Alloy API</strong> and <strong>Titanium API</strong>.</p></li>
</ul>


<p>The API documentation provided here is used with Alloy Controllers and Widget Controllers to
interact with the View and Model components of the application or widget.</p>

<p>For guides on using Alloy, see
{@link http://docs.appcelerator.com/titanium/latest/#!/guide/Alloy_Framework}.</p>

 */
var Alloy = {

    /**
     * @type Object
     */
    CFG:null,

    /**
     * @type Object
     */
    Collections:null,

    /**
     * @type Object
     */
    Globals:null,

    /**
     * @type Object
     */
    Models:null,

    /**
     * @type Boolean
     */
    isHandheld:null,

    /**
     * @type Boolean
     */
    isTablet:null,


    /**
     * @param {String} name <p>Name of model to hold in this collection.</p>


     * @param {Object} args <p>Arguments to pass to the collection.</p>


     * @returns Backbone.Collection <p>Backbone collection object.</p>


     */
    createCollection:function(name, args) {
    },

    /**
     * @param {String} name <p>Name of controller to instantiate.</p>


     * @param {Object} args <p>Arguments to pass to the controller.</p>


     * @returns Alloy.Controller <p>Alloy controller object.</p>


     */
    createController:function(name, args) {
    },

    /**
     * @param {String} name <p>Name of model to instantiate.</p>


     * @param {Object} args <p>Arguments to pass to the model.</p>


     * @returns Backbone.Model <p>Backbone model object.</p>


     */
    createModel:function(name, args) {
    },

    /**
     * @param {String} id <p>Id of widget to instantiate.</p>


     * @param {String} name <p>Name of the view within the widget to instantiate ('widget' by default)</p>


     * @param {Object} args <p>Arguments to pass to the widget.</p>


     * @returns Alloy.Controller <p>Alloy widget controller object.</p>


     */
    createWidget:function(id, name, args) {
    }
};

/**
 * @namespace <p>Class to access or create collections.</p>

<p>Collections can either be created in markup or programmatically in the controller.</p>

<p>To create collections in markup, see the 'Collection Element' section in the
{@link #!/guide/Alloy_XML_Markup}.</p>

<p>In the controller code:</p>

<ul>
<li> To create a local instance, use the {@link #!/api/Alloy} method.</li>
<li> To create a global singleton instance, use the {@link #!/api/Alloy.Collections} method.</li>
</ul>


<p>Previously created collections through markup or using the <code>instance</code> method
are directly accessed as properties of the <code>{@link #!/api/Alloy.Collections" rel="Alloy.Collections" class="docClass}</code> namespace,
using either the name of the model JavaScript file for singletons
or the ID name for local instances.</p>

 */
Alloy.Collections = {


    /**
     * @param {String} name <p>the name of the base model for the collection</p>

     * @returns Backbone.Collection <p>An Alloy Collection object singleton</p>

     */
    instance:function(name) {
    }
};

/**
 * @namespace <p>The base class for Alloy controllers.</p>

<p>Each controller is associated with a UI hierarchy, defined in an XML file in the
<code>views</code> folder. Each element in the view hierarchy is either a Titanium View
or another Alloy controller or widget. Each Alloy controller or widget can additionally contain
Titanium Views and/or more controllers and widgets.</p>

 */
Alloy.Controller = {


    /**
     * @param {Object} proxy <p>View object to which to add class(es).</p>

     * @param {Array<String>/String} classes <p>Array or space-separated list of classes to apply.</p>

     * @param {Dictionary} opts <p>Dictionary of properties to apply after classes have been added.</p>

     */
    addClass:function(proxy, classes, opts) {
    },

    /**
     * @param {AlloyStyleDict} opts <p>Dictionary of styles to apply.</p>

     * @returns Dictionary 

     */
    createStyle:function(opts) {
    },

    /**
     */
    destroy:function() {
    },

    /**
     * @returns Array.<(Ti.UI.View|Alloy.Controller)> 

     */
    getTopLevelViews:function() {
    },

    /**
     * @param {String} id <p>ID of the view to return.</p>

     * @returns Ti.UI.View/Alloy.Controller 

     */
    getView:function(id) {
    },

    /**
     * @returns Array.<(Ti.UI.View|Alloy.Controller)> 

     */
    getViews:function() {
    },

    /**
     * @param {Object} proxy <p>View object from which to remove class(es).</p>

     * @param {Array<String>/String} classes <p>Array or space-separated list of classes to remove.</p>

     * @param {Dictionary} opts <p>Dictionary of properties to apply after the class removal.</p>

     */
    removeClass:function(proxy, classes, opts) {
    },

    /**
     * @param {Object} proxy <p>View object to reset.</p>

     * @param {Array<String>/String} classes <p>Array or space-separated list of classes to apply after the reset.</p>

     * @param {Dictionary} opts <p>Dictionary of properties to apply after the reset.</p>

     */
    resetClass:function(proxy, classes, opts) {
    },

    /**
     * @param {Object} args <p>An object whose keys are the IDs (in form '#id') of views to which the styles will be applied.</p>

     * @returns Alloy.Controller <p>this</p>

     */
    updateViews:function(args) {
    }
};

/**
 * @namespace 

 */
Alloy.Controller.UI = {


    /**
     * @param {String} apiName <p>Name of the Titanium object to create. This can either be the full class
name, such as <code>Ti.UI.Button</code>, or the XML element, such as <code>Button</code>.</p>

     * @param {AlloyStyleDict} opts <p>Dictionary of styles to apply. <code>opts</code> may also contain any additional properties you would like to apply directly the created Titanium object.</p>

     * @returns Ti.UI.View/Alloy.Controller 

     */
    create:function(apiName, opts) {
    }
};

/**
 * @namespace <p>Class to access or create models.</p>

<p>Models can either be created in markup or programmatically in the controller.</p>

<p>To create models in markup, see the 'Model Element' section in the
{@link #!/guide/Alloy_XML_Markup}.</p>

<p>In the controller code:</p>

<ul>
<li> To create a local instance, use the {@link #!/api/Alloy} method.</li>
<li> To create a global singleton instance, use the {@link #!/api/Alloy.Models} method.</li>
</ul>


<p>Previously created models through markup or using the <code>instance</code> method
are directly accessed as properties of the <code>{@link #!/api/Alloy.Models" rel="Alloy.Models" class="docClass}</code> namespace,
using either the name of the model JavaScript file for singletons
or the ID name for local instances.</p>

 */
Alloy.Models = {


    /**
     * @param {String} name <p>the name of the base model for the model</p>

     * @returns Backbone.Model <p>An Alloy Model object singleton</p>

     */
    instance:function(name) {
    }
};

/**
 * @namespace <p>Widgets are self-contained components that can be easily dropped into an Alloy project.
They were conceived as a way to reuse code in multiple projects or to be used multiple
times in the same project.</p>

<p>Note that to use the methods list below, the correct namespace is <code>Widget.create*</code> not
<code>Alloy.Widget.create*</code>.</p>

<p>For more information on widgets, see {@link http://docs.appcelerator.com/titanium/latest/#!/guide/Alloy_Widgets}</p>

<h4>Creating a Widget</h4>

<p>Widgets are essentially miniature Alloy projects that contain their own models, views, controllers
and assets.  They are laid out the same way as an Alloy project.</p>

<p>Use <code>Widget.createController()</code>, <code>Widget.createWidget()</code>,  <code>Widget.createModel()</code> and
<code>Widget.createCollection()</code> rather than the <code>Alloy.create*</code> methods to create
components relative to the widget context rather than the Alloy project.</p>

<h4>Using a Widget</h4>

<p>To use a widget in your Alloy project, first add it as a dependency in your config.json file.
The name of the widget is the key and the version of the widget is the value.</p>

<pre><code>...
"dependencies":{
    "com.appcelerator.loading":"1.0"
} 
</code></pre>

<p>Next, either add the widget in the XML markup of the view or create an instance of the widget in the controller.</p>

<p>To add the widget in the view, use the <code>Widget</code> tag, specifying the <code>src</code> attribute as the name of
the widget:</p>

<pre><code>&lt;Alloy&gt;
    &lt;Window id="win"&gt;
        &lt;Widget id="loadIcon" src="com.appcelerator.loading" /&gt;
    &lt;/Window&gt;
&lt;/Alloy&gt;
</code></pre>

<p>Since the <code>id</code> attribute is defined, the widget can be referenced in the controller using
<code>$.loadIcon</code>.</p>

<p>To add the widget in the controller, use the <code>{@link #!/api/Alloy}</code> method. The first required parameter is
the name of the widget. The second optional parameter can specify the view component to
instantiate and the last optional parameter can specify the arguments to instantiate the widget.
For example, the following controller code is equivalent to the previous view markup example.</p>

<pre><code>var loadIcon = {@link #!/api/Alloy}("com.appcelerator.loading");
win.add(loadIcon.getView());
</code></pre>

<p>A widget can also be added to other widgets.  Follow the same procedure as above except the widget
configuration file is called widget.json instead of config.json.</p>

 */
Alloy.Widget = {


    /**
     * @param {String} name <p>Name of model to hold in this collection.</p>


     * @param {Object} args <p>Arguments to pass to the collection.</p>


     * @returns Backbone.Collection <p>Backbone collection object.</p>


     */
    createCollection:function(name, args) {
    },

    /**
     * @param {String} name <p>Name of controller to instantiate.</p>


     * @param {Object} args <p>Arguments to pass to the controller.</p>


     * @returns Alloy.Controller <p>Alloy controller object.</p>


     */
    createController:function(name, args) {
    },

    /**
     * @param {String} name <p>Name of model to instantiate.</p>


     * @param {Object} args <p>Arguments to pass to the model.</p>


     * @returns Backbone.Model <p>Backbone model object.</p>


     */
    createModel:function(name, args) {
    },

    /**
     * @param {String} id <p>Id of widget to instantiate.</p>


     * @param {String} name <p>Name of the view within the widget to instantiate ('widget' by default)</p>


     * @param {Object} args <p>Arguments to pass to the widget.</p>


     * @returns Alloy.Controller <p>Alloy widget controller object.</p>


     */
    createWidget:function(id, name, args) {
    }
};

/**
 * @namespace <p>Alloy provides some additional utility libraries that simplify certain functions,
such as animations, string manipultation and display unit conversion.  These libraries
are referred to as "builtins."</p>

<p>To use a builtin library, require the library name, minus the '.js' extension,
with <code>alloy</code> as the root directory in your <code>require</code> call.
For example, to use the animation builtin:</p>

<pre><code>var animation = require('alloy/animation');
animation.crossFade(view1, view2, 500, finishCallback);
</code></pre>

<p>During the compilation process, Alloy determines which builtins are being used,
and adds them to the generated Titanium project.</p>

 */
Alloy.builtins = {



};

/**
 * @namespace <p>A collection of useful animation utilities. To use the animation builtin library,
all you need to do is require it with the <code>alloy</code> root directory in your
<code>require</code> call. For example:</p>

<pre><code>var animation = require('alloy/animation');
animation.crossFade(view1, view2, 500, finishCallback);
</code></pre>

 */
Alloy.builtins.animation = {

    /**
     * @type String
     */
    HORIZONTAL:null,

    /**
     * @type String
     */
    VERTICAL:null,


    /**
     * @param {Ti.UI.View} view <p>View to animate.</p>

     * @param {Ti.UI.Animation[]} animations <p>A set of animations to execute on <code>view</code> in sequence.</p>

     * @param {function()} finishCallback <p>Callback to invoke once the chain animation is complete.</p>

     */
    chainAnimate:function(view, animations, finishCallback) {
    },

    /**
     * @param {Ti.UI.View} from <p>View to fade out.</p>

     * @param {Ti.UI.View} to <p>View to fade in.</p>

     * @param {Number} duration <p>Fade duration in milliseconds.</p>

     * @param {function()} finishCallback <p>Callback function, invoked after the fade completes.</p>

     */
    crossFade:function(from, to, duration, finishCallback) {
    },

    /**
     * @param {Ti.UI.View} from <p>View to remove.</p>

     * @param {Number} duration <p>Fade duration in milliseconds.</p>

     * @param {Ti.UI.View} container <p>Parent container view.</p>

     * @param {function()} finishCallback <p>Callback function, invoked after the fadeAndRemove completes.</p>

     */
    fadeAndRemove:function(from, duration, container, finishCallback) {
    },

    /**
     * @param {Ti.UI.View} to <p>View to fade in.</p>

     * @param {Number} duration <p>Fade duration in milliseconds.</p>

     * @param {function()} finishCallback <p>Callback function, invoked after the fadeIn completes.</p>

     */
    fadeIn:function(to, duration, finishCallback) {
    },

    /**
     * @param {Ti.UI.View} to <p>View to fade out.</p>

     * @param {Number} duration <p>Fade duration in milliseconds.</p>

     * @param {function()} finishCallback <p>Callback function, invoked after the fadeOut completes.</p>

     */
    fadeOut:function(to, duration, finishCallback) {
    },

    /**
     * @param {Ti.UI.View} view <p>View to animate.</p>

     * @param {Number} delay <p>If specified, animation starts after <code>delay</code> milliseconds.</p>

     * @param {function()} finishCallback <p>Callback function, invoked after the flash completes.</p>

     */
    flash:function(view, delay, finishCallback) {
    },

    /**
     * @param {Ti.UI.View} from <p>View to fade out.</p>

     * @param {Ti.UI.View} to <p>View to fade in.</p>

     * @param {String} direction <p>direction ('horizontal' or 'vertical') to flip.</p>

     * @param {Number} duration <p>Fade duration in milliseconds.</p>

     * @param {function()} finishCallback <p>Callback function, invoked after the fade completes.</p>

     * @since 1.2.2 (iPhone), 1.2.2 (iPad)
     */
    flip:function(from, to, direction, duration, finishCallback) {
    },

    /**
     * @param {Ti.UI.View} from <p>View to fade out.</p>

     * @param {Ti.UI.View} to <p>View to fade in.</p>

     * @param {Number} duration <p>Fade duration in milliseconds.</p>

     * @param {function()} finishCallback <p>Callback function, invoked after the fade completes.</p>

     * @since 1.2.2 (iPhone), 1.2.2 (iPad)
     */
    flipHorizontal:function(from, to, duration, finishCallback) {
    },

    /**
     * @param {Ti.UI.View} from <p>View to fade out.</p>

     * @param {Ti.UI.View} to <p>View to fade in.</p>

     * @param {Number} duration <p>Fade duration in milliseconds.</p>

     * @param {function()} finishCallback <p>Callback function, invoked after the fade completes.</p>

     * @since 1.2.2 (iPhone), 1.2.2 (iPad)
     */
    flipVertical:function(from, to, duration, finishCallback) {
    },

    /**
     * @param {Ti.UI.View} view <p>View to animate.</p>

     * @param {function()} finishCallback <p>Callback function, invoked after the popIn completes.</p>

     */
    popIn:function(view, finishCallback) {
    },

    /**
     * @param {Ti.UI.View} view <p>View to animate.</p>

     * @param {Number} delay <p>If specified, animation starts after <code>delay</code> milliseconds.</p>

     * @param {function()} finishCallback <p>Callback function, invoked after the shake completes.</p>

     */
    shake:function(view, delay, finishCallback) {
    }
};

/**
 * @namespace <p>A collection of utilities for generating dialog boxes.
To use the dialogs builtin library,
require it with the <code>alloy</code> root directory in your <code>require</code> call. For example:</p>

<pre><code>var dialogs = require('alloy/dialogs');
dialogs.confirm({});
</code></pre>

 */
Alloy.builtins.dialogs = {

    /**
     * @type Array
     */
    buttonNames:null,

    /**
     * @type String
     */
    message:null,

    /**
     * @type String
     */
    title:null,


    /**
     * @param {...*} args <p>Dialog box parameters.</p>

     */
    confirm:function(args) {
    }
};

/**
 * @namespace <p>A collection of utilities for converting between different display units.
These functions are only useful on the Android platform to support devices with different
screen densities and resolutions.</p>

<p>To use the measurement builtin library,
require it with the <code>alloy</code> root directory in your <code>require</code> call. For example:</p>

<pre><code>var measurement = require('alloy/measurement');
var pointPX = {x:42, y:7};
var pointDP = measurement.pointPXToDP(pointPX);
</code></pre>

 */
Alloy.builtins.measurement = {


    /**
     * @param {Number} val <p>Value in density-independent pixels.</p>

     * @returns Number <p>Converted value in screen pixels.</p>

     */
    dpToPX:function(val) {
    },

    /**
     * @param {Number} val <p>Coordinate in screen pixels.</p>

     * @returns Number <p>Converted coordinate in density-independent pixels.</p>

     */
    pointPXToDP:function(val) {
    },

    /**
     * @param {Number} val <p>Value in screen pixels.</p>

     * @returns Number <p>Converted value in density-independent pixels.</p>

     */
    pxToDP:function(val) {
    }
};

/**
 * @namespace <p>Moment.js is a freely distributable, third-party JavaScript date library
for parsing, validating, manipulating, and formatting dates.</p>

<p>To use the moment.js library in Alloy,
require it with the <code>alloy</code> root directory in your <code>require</code> call. For example:</p>

<pre><code>var moment = require('alloy/moment');
var day = moment("12-25-1995", "MM-DD-YYYY");
Ti.API.info("Date:" + day.format("dddd, MMMM Do YYYY, h:mm:ss a")); // --&gt; Monday, December 25th 1995, 12:00:00 am
</code></pre>

<p>For documentation, usage examples and more information, see {@link http://momentjs.com}.</p>

 */
Alloy.builtins.moment = {



};

/**
 * @namespace <p>A collection of utilities for calculating SHA-1 or HMAC-SHA-1 values.
To use the sha1 builtin library,
require it with the <code>alloy</code> root directory in your <code>require</code> call. For example:</p>

<pre><code>var sha1 = require('alloy/sha1');
var sha1_digest = sha1.hex_sha1('The quick brown fox jumps over the lazy dog.');
</code></pre>

 */
Alloy.builtins.sha1 = {


    /**
     * @param {String} key <p>Key to use.</p>

     * @param {String} data <p>Data to use.</p>

     * @returns String <p>HMAC-SHA-1 value of the string in base-64.</p>

     */
    b64_hmac_sha1:function(key, data) {
    },

    /**
     * @param {String} s <p>String to use.</p>

     * @returns String <p>SHA-1 value of the string in base-64.</p>

     */
    b64_sha1:function(s) {
    },

    /**
     * @param {String} key <p>Key to use.</p>

     * @param {String} data <p>Data to use.</p>

     * @returns String <p>HMAC-SHA-1 value of the string in hexadecimal.</p>

     */
    hex_hmac_sha1:function(key, data) {
    },

    /**
     * @param {String} s <p>String to use.</p>

     * @returns String <p>SHA-1 value of the string in hexadecimal.</p>

     */
    hex_sha1:function(s) {
    },

    /**
     * @param {String} key <p>Key to use.</p>

     * @param {String} data <p>Data to use.</p>

     * @returns String <p>HMAC-SHA-1 value of the string as a string.</p>

     */
    str_hmac_sha1:function(key, data) {
    },

    /**
     * @param {String} s <p>String to use.</p>

     * @returns String <p>SHA-1 value of the string as a string.</p>

     */
    str_sha1:function(s) {
    }
};

/**
 * @namespace <p>A collection of useful social media provider utilities. Currently, this module only supports
Twitter and the following features:</p>

<ul>
<li>Logging into Twitter and authorizing the application through the OAuth protocol.</li>
<li>Posting tweets to the user's Twitter account.</li>
</ul>


<p>To use the social builtin library, require it with the <code>alloy</code> root
directory in your <code>require</code> call. For example:</p>

<pre><code>var social = require('alloy/social').create({
    consumerSecret: 'consumer-secret',
    consumerKey: 'consumer-key'
});
</code></pre>

<h2>Login and Authorization</h2>

<p>To use a social media provider, a user must log in and authorize the application to perform
certain actions, such as accessing profile information or posting messages.</p>

<p>Call <code>authorize</code> to prompt the user to login and authorize the application.  For Twitter, a
dialog box will appear asking the user for their permission and login credentials.</p>

<p>Before calling <code>authorize</code>, the application will need a consumer key and secret provided by the
social media service provider for the OAuth protocol, used when calling <code>create</code>.
For Twitter, these are provided when registering an application:
{@link https://dev.twitter.com/apps/new}</p>

<h2>Example</h2>

<p>This example authorizes the application, posts a message to the user's Twitter account, then
deauthorizes the application.</p>

<pre><code>// If not authorized, get authorization from the user
if(!social.isAuthorized()) {
    social.authorize();
}

// Post a message
 // Setup both callbacks for confirmation
 // Note: share() automatically calls authorize() so an explicit call as above is unnecessary
social.share({
    message: "Salut, Monde!",
    success: function(e) {alert('Success!')},
    error: function(e) {alert('Error!')}
});

// Deauthorize the application
social.deauthorize();
</code></pre>

 */
Alloy.builtins.social = {


    /**
     * @param {Function} callback <p>Callback function executed after successfully retrieving
an access token.</p>

     */
    authorize:function(callback) {
    },

    /**
     * @param {...*} settings <p>OAuth session settings.</p>

     * @returns Object <p>Instance of social to make subsequent API calls.</p>

     */
    create:function(settings) {
    },

    /**
     */
    deauthorize:function() {
    },

    /**
     * @returns Boolean <p>Returns 'true' if authorized else 'false'.</p>

     */
    isAuthorized:function() {
    },

    /**
     * @param {...*} options <p>Update parameters.</p>

     */
    share:function(options) {
    }
};

/**
 * @namespace <p>A collection of utilities for manipulating strings.
To use the string builtin library,
require it with the <code>alloy</code> root directory in your <code>require</code> call. For example:</p>

<pre><code>var string = require('alloy/string');
var text = '     hola, mundo   ';
Ti.API.info(string.ucfirst(string.trim(text))); // --&gt; 'Hola, mundo'
</code></pre>

 */
Alloy.builtins.string = {


    /**
     * @param {String} amount <p>Amount to format.</p>

     * @returns String <p>Amount formatted as a currency value.</p>

     */
    formatCurrency:function(amount) {
    },

    /**
     * @param {String} text <p>String to lowercase.</p>

     * @returns String <p>String with first character lowercased.</p>

     */
    lcfirst:function(text) {
    },

    /**
     * @param {String} line <p>String to trim.</p>

     * @returns String <p>String without leading and trailing white space.</p>

     */
    trim:function(line) {
    },

    /**
     * @param {Object} num <p>Number to trim.</p>

     * @returns Number <p>Number without trailing zeroes.</p>

     */
    trimZeros:function(num) {
    },

    /**
     * @param {String} text <p>String to capitalize.</p>

     * @returns String <p>String with first character capitalized.</p>

     */
    ucfirst:function(text) {
    },

    /**
     * @param {String} url <p>String to process.</p>

     * @returns String <p>String with URL-encoded characters replaced with ASCII characters.</p>

     */
    urlDecode:function(url) {
    },

    /**
     * @param {String} url <p>URL to process.</p>

     * @returns Object <p>JSON-formatted URL data.</p>

     */
    urlToJson:function(url) {
    }
};

/**
 * @namespace <p>As of Release 1.4.0, the sample widgets are deprecated and no longer supported.  These widgets
will be removed in a future release of Alloy.</p>

<p>Maintained versions of the sample widgets are available at {@link http://gitt.io/}.</p>

<p>List of sample widgets in the Alloy project. For information on using a widget in your project, see
{@link #!/api/Alloy.Widget" rel="Alloy.Widget" class="docClass}.</p>

 */
Alloy.widgets = {



};

/**
 * @namespace <p>The bookSearchView widget sends a query to the Google Books API to retrieve book data and
presents the results in a table. Unlike the searchForBooks widget, this widget processes
and presents the search results.</p>

<h3>Usage</h3>

<p>To use the widget, first add it as a dependency in the <code>config.json</code> file:</p>

<pre><code>"dependencies": {
    "com.appcelerator.bookSearchView":"1.0"
}
</code></pre>

<p>Next, add it to a view in the project, using the Widget tag:</p>

<pre><code>&lt;Widget id="bsv" src="com.appcelerator.bookSearchView"/&gt;
</code></pre>

<p>Note: the <code>id</code> attribute is a unique identfier and can be anything. <code>bsv</code> is just an example.</p>

 */
Alloy.widgets.bookSearchView = {



};

/**
 * @namespace <p>The <strong>BouncyLogo</strong> widget provides a animated logo that is suitable for displaying when your application first starts.</p>

<h2>Manifest</h2>

<ul>
<li>Version: 1.0 (stable)</li>
<li>Github: https://www.github.com/appcelerator/alloy</li>
<li>License: {@link http://www.apache.org/licenses/LICENSE}</li>
<li>Author: Carl Orthlieb</li>
<li>Supported Platforms: iOS, Android, Mobile Web</li>
</ul>


<h2>Adding the BouncyLogo Widget to Your Alloy Project</h2>

<p>In your application's config.json file you will want to include the following line in your dependencies:</p>

<pre><code>"dependencies": {
    "com.appcelerator.bouncylogo":"1.0"
}
</code></pre>

<h3>Creating a Local Copy</h3>

<p>Normally, BouncyLogo can be accessed without copying because it is part of Alloy. Adding it
as a dependency to your project is enough. However, if you want to create a copy local to your
application so that you can further modify it, then you will need to:</p>

<ol>
<li>Create a widgets directory in your app directory if it does not already exist.</li>
<li>Copy the <code>com.appcelerator.bouncylogo</code> folder from the <code>Resources/alloy/widgets</code> directory into your <code>app/widgets</code> directory.</li>
</ol>


<h2>Adding the BouncyLogo to the View</h2>

<p>You can add a bouncy logo to a view by using the <em>Widget</em> tag to bring in the BouncyLogo widget.</p>

<pre><code>&lt;Widget src="com.appcelerator.bouncylogo" id="logo"/&gt;
</code></pre>

<p>Assign it an ID that you can use in your controller, for example, <code>id="logo"</code>. You can now access the
BouncyLogo via <code>$.logo</code> in your controller. Note that the containing view needs to have a
layout of "absolute", which is the default, and not "horizontal" or "vertical", in order
to have BouncyLogo work properly.</p>

<p>Note that the logo starts offscreen and hidden, you will need to initialize it after your window
is open. Change your window to register for the <code>open</code> event if it has not already done so:</p>

<pre><code>&lt;Window onOpen="IndexOpen"&gt;
</code></pre>

<h2>Initializing the BouncyLogo in the Controller</h2>

<p>Note that your logo starts offscreen and hidden, you will need to initialize it after your
window is open. During the open call you will want to call the BouncyLogo with the <code>init</code>
method. For example:</p>

<pre><code>function IndexOpen(e) {
    $.logo.init({ image: '/images/alloy.png', width: 216, height: 200 });
}
</code></pre>

 */
Alloy.widgets.bouncylogo = {


    /**
     */
    hide:function() {
    },

    /**
     * @param {String} image <p>The logo image resource.</p>

     * @param {Number} width <p>Width of the logo.</p>

     * @param {Number} height <p>Height of the logo.</p>

     * @param {Number} opacity <p>The final opacity of the logo once animation is complete.</p>

     * @param {Number} durationIn <p>The duration, in milliseconds, for the logo to slide onto the screeen.</p>

     * @param {Number} durationBounce <p>The duration, in milliseconds, for the logo to bounce before settling.</p>

     * @param {Number} durationFade <p>The duration, in milliseconds, for the logo to fade after it has settled.</p>

     * @param {Number} bounciness <p>The "bounciness" of the animation, where 0 is no bounce and 1 is a full logo height bounce.
@params {Function} [finishCallback] Callback to invoke once the logo has bounced in and animation is complete.</p>

     */
    init:function(image, width, height, opacity, durationIn, durationBounce, durationFade, bounciness) {
    },

    /**
     */
    relayout:function() {
    },

    /**
     */
    reset:function() {
    }
};

/**
 * @namespace <p>The <strong>ButtonGrid</strong> widget provides a cross-platform grid of buttons that automatically lay themselves out in the view similar to the iOS native Dashboard control.</p>

<h2>Manifest</h2>

<ul>
<li>Version: 1.0 (stable)</li>
<li>Github: https://www.github.com/appcelerator/alloy</li>
<li>License: {@link http://www.apache.org/licenses/LICENSE}</li>
<li>Author: Carl Orthlieb</li>
<li>Supported Platforms: iOS, Android, Mobile Web</li>
</ul>


<h2>Adding the ButtonGrid Widget to Your Alloy Project</h2>

<p>In your application's config.json file you will want to include the following line in your dependencies:</p>

<pre><code>"dependencies": {
    "com.appcelerator.buttongrid":"1.0"
}
</code></pre>

<h3>Creating a Local Copy</h3>

<p>Normally, ButtonGrid can be accessed without copying because it is part of Alloy.
Adding it as a dependency to your project is enough. However, if you want to create a copy
local to your application so that you can further modify it, then you will need to:</p>

<ol>
<li>Create a widgets directory in your app directory if it does not already exist.</li>
<li>Copy the com.appcelerator.buttongrid folder from the <code>Resources/alloy/widgets</code> directory into your <code>app/widgets</code> directory.</li>
</ol>


<h2>Create a ButtonGrid in the View</h2>

<p>You can add a ButtonGrid to a view by <em>requiring</em> the ButtonGrid widget.</p>

<pre><code>&lt;Widget id="buttongrid" src="com.appcelerator.buttongrid"/&gt;
</code></pre>

<p>Assign it an ID that you can use in your controller, for example, <code>id="buttongrid"</code>.
You can now access the ButtonGrid using <code>$.buttongrid</code> in your controller.</p>

<h2>Initializing the ButtonGrid in the Controller</h2>

<p>The buttongrid does not have any buttons in it until you initialize it in your controller.
Before you open your window, you will want to call the buttongrid with the <code>init</code> method. For example:</p>

<pre><code>$.buttongrid.init({
    buttons: [
        { id: 'Cloudy', title: "Cloudy", backgroundColor: gray, backgroundSelectedColor: lightgray },
        { id: 'Drizzle', title: "Drizzle" },
        { id: 'Haze', title: 'Haze' },
        { id: 'MostlyCloudy', title: "Mostly Cloudy" },
        { id: 'SlightDrizzle' },
        { id: 'Snow', title: 'Snow' },
        { id: 'Sunny', title: 'Sunny' },
        { id: 'Thunderstorms', title: 'Thunderstorms', click: function (e) { alert("Thunder!"); } }
    ],
    buttonWidth: {@link #!/api/Alloy} ? 200: 100,
    buttonHeight: {@link #!/api/Alloy} ? 200 : 100,
    backgroundColor: red,
    backgroundSelectedColor: brightred
});
</code></pre>

<h2>Binding</h2>

<p>Because you are passing in functions to be called when a button is clicked, be aware of your binding.
The <em>this</em> object is not the same when the <code>click()</code> and <code>enable()</code> callbacks are called as when
they are defined. There are many excellent articles that talk about this issue:</p>

<ul>
<li>{@link http://www.alistapart.com/articles/getoutbindingsituations/}</li>
<li>{@link http://fitzgeraldnick.com/weblog/26/}</li>
<li>{@link http://www.robertsosinski.com/2009/04/28/binding}</li>
</ul>


<p>It is recommended that you use the underscore library's {@link http://underscorejs.org/#bind} function to bind your callbacks when needed.</p>

<pre><code>$.buttongrid.init({
    buttons: [
        { id: 'Fancy', text: 'Fancy', click:
            _.bind(function FancyClick(e) { alert(this.one); }, this)
        }
    ]
});
</code></pre>

<h2>Relaying out the ButtonGrid</h2>

<p>If you ever have a need to relayout the ButtonGrid for a reason other than orientation (which is automatically supported), you can call the <code>relayout</code> method directly.</p>

<pre><code>$.buttongrid.relayout();
</code></pre>

<p>The grid will calculate a new gutter between the buttons and animate the buttons into place one at a time.
<strong>Note</strong>: If you use autoLayout="true" (default) then a Ti.Gesture event handler will be used to relayout
the widget based on orientation changes. To avoid any potential memory leaks associated with using these
global event handlers, you must call the <strong>destroy()</strong> function on the widget when you are done using it.
This will free all memory resources associated with the widget. If you have autoLayout="false", then you are
not required to call <strong>destroy()</strong> when you are done with the widget.</p>

 */
Alloy.widgets.buttongrid = {


    /**
     */
    destroy:function() {
    },

    /**
     * @param {Boolean} autoLayout <p>If true, the widget will automatically adjust the layout for orientation events, which requires you to execute destroy() when you are done. if false, the widget does not adjust its layout automatically, and you are not required to call destroy() when finished using it.</p>

     * @param {Array.<Object>} buttons <p>The buttons array is an array of button objects each of which  describes a button to create in the grid.</p>

     * @param {Number} buttonWidth <p>Width of a button in pixels.</p>

     * @param {Number} buttonHeight <p>Height of a button in pixels.</p>

     * @param {String} backgroundColor <p>RGB triplet or named color to use as the background for the button. This can be overridden by button definition itself.</p>

     * @param {String} backgroundSelectedColor <p>RGB triplet or named color to use as the background for the button when it is selected. This can be overridden by button definition itself.</p>

     * @param {Number} duration <p>Duration, in milliseconds, for the grid to animate when relaying out on orientation change.</p>

     * @param {Number/String} textSize <p>Size of the text label in the button.</p>

     * @param {String} textColor <p>RGB triplet or named color to use for the text label on the button.</p>

     * @param {String} textSelectedColor <p>RGB triplet or named color to use for the text label on the button when it is selected.</p>

     * @param {String} assetDir <p>Directory where assets for the button grid can be found.</p>

     * @param {function(Object)} click <p>The general callback to call when any button is clicked. The function has an event parameter similar to that used for Ti.UI.Button.click. Can be overridden by the individual button click callbacks.</p>

     */
    init:function(autoLayout, buttons, buttonWidth, buttonHeight, backgroundColor, backgroundSelectedColor, duration, textSize, textColor, textSelectedColor, assetDir, click) {
    },

    /**
     * @param {Object} e <p>Unused.</p>

     */
    relayout:function(e) {
    }
};

/**
 * @namespace <p>The <strong>Drawer</strong> widget provides a sliding panel of buttons to pull up from the bottom of the screen.
As an option, the drawer can automatically close after it has been used. On Android, the drawer
manifests itself as the activity menu, unless the developer wants to specifically override that
capability.</p>

<h2>Manifest</h2>

<ul>
<li>Version: 1.0 (stable)</li>
<li>Github: https://www.github.com/appcelerator/alloy</li>
<li>License: {@link http://www.apache.org/licenses/LICENSE}</li>
<li>Author: Carl Orthlieb</li>
<li>Supported Platforms: iOS, Android, Mobile Web</li>
</ul>


<h2>Adding the Drawer Widget to Your Alloy Project</h2>

<p>In your application's config.json file you will want to include the following line in your dependencies:</p>

<pre><code>"dependencies": {
    "com.appcelerator.drawer":"1.0"
}
</code></pre>

<ul>
<li>If the app/widgets directory does not exist in your app then create one.</li>
<li>Copy the drawer folder from the test app (widget_drawer/app/widgets) into your app/widgets directory.</li>
</ul>


<h2>Create a Drawer in the View</h2>

<p>You can add a drawer to a view by <em>requiring</em> the Drawer widget.</p>

<pre><code>&lt;Require type="widget" src="com.appcelerator.drawer" id="drawer"/&gt;
</code></pre>

<p>Assign it an ID that you can use in your controller, for example, <code>id="drawer"</code> You can now access the
drawer via <code>$.drawer</code> in your controller. Note that the containing view needs to have a layout of
"absolute", which is the default, and not "horizontal" or "vertical", in order to have the drawer
work properly.</p>

<h2>Initializing the Drawer in the Controller</h2>

<p>The drawer does not have any buttons in it until you initialize it in your controller. Before
you open your window, you will want to call the drawer with the <code>init</code> method. For example:</p>

<pre><code>$.drawer.init({
    mainWindow: $.index,
    buttons: [
        { id: 'One', title: 'One', click: function (e) { alert("One"); } },
        { id: 'Two', title: 'Two',  click: function (e) { alert("Two"); } },
        { id: 'Three', title: 'Three',  click: function (e) { alert("Three"); } }
    ],
    autoClose: true,
    gutter: 5
});
</code></pre>

<h2>Enabling and Disabling Buttons</h2>

<p>With Android, if <code>overrideMenu</code> is not true, the <code>enable()</code> callback is called automatically before
the menu is shown. In all other cases, you will need to explicitly call the drawer's
<code>checkEnabled()</code> method in order to get those callbacks to fire.</p>

<p>You should call this function whenever a state change could affect the enable state of buttons
in the drawer. For example, if your main window displays a web view and you want to enable some
forward/back buttons based on the properties of that web view after it has loaded, you might
create the following callback attached to the <code>onLoad</code> event:</p>

<pre><code>function webviewLoad(e) {
    $.index.title = $.webview.evalJS("document.title");
    $.drawer.checkEnabled();
};
</code></pre>

<h2>Binding</h2>

<p>Because you are passing in functions to be called when a button is clicked, be aware of your binding.
The <em>this</em> object is not the same when the <code>click()</code> and <code>enable()</code> callbacks are called as when
they are defined. There are many excellent articles that talk about this issue:</p>

<ul>
<li>{@link http://www.alistapart.com/articles/getoutbindingsituations/}</li>
<li>{@link http://fitzgeraldnick.com/weblog/26/}</li>
<li>{@link http://www.robertsosinski.com/2009/04/28/binding}</li>
</ul>


<p>It is recommended that you use the underscore library's {@link http://underscorejs.org/#bind}
function to bind your callbacks when needed.</p>

<pre><code>$.drawer.init({
    buttons: [
        { id: 'Fancy', text: 'Fancy', click:
            _.bind(function FancyClick(e) { alert(this.one); }, this)
        }
    ]
});
</code></pre>

 */
Alloy.widgets.drawer = {


    /**
     */
    checkEnabled:function() {
    },

    /**
     * @param {Ti.UI.Window} mainWindow <p>Window to add the menu items to on Android.</p>

     * @param {Array.<Object>} buttons <p>Array of button objects.</p>

     * @param {Boolean} autoClose <p>Automatically close the drawer after a button has been selected.</p>

     * @param {Number} iconSize <p>Size of the icon to be used in the drawer.</p>

     * @param {Number} openOpacity <p>Opacity of the drawer when it is open in the view.</p>

     * @param {Number} closeOpacity <p>Opacity of the drawer when it is closed in the view.</p>

     * @param {Number} animationDuration <p>Duration, in milliseconds, to close or open the drawer.</p>

     * @param {Number} gutter <p>Offset used to space buttons from each other.</p>

     * @param {String} overrideMenu <p>Overrides the use of the menu in Android and use a drawer like in iOS and Mobile Web.</p>

     * @param {Number} annoy <p>Jiggle the drawer up and down <annoy> times until the user opens it the first time. Setting annoy to -1 causes it to happen forever.</annoy></p>

     */
    init:function(mainWindow, buttons, autoClose, iconSize, openOpacity, closeOpacity, animationDuration, gutter, overrideMenu, annoy) {
    },

    /**
     */
    jiggle:function() {
    }
};

/**
 * @namespace <p>The loading widget displays an animated circular icon, which can be used to indicate that the
application is busy with a process or loading.</p>

<h3>Usage</h3>

<p>To use the widget, first add it as a dependency in the <code>config.json</code> file:</p>

<pre><code>"dependencies": {
    "com.appcelerator.loading":"1.0"
}
</code></pre>

<p>Next, add it to a view in the project, using the Require tag:</p>

<pre><code>&lt;Require id="loading" type="widget" src="com.appcelerator.loading"/&gt;
</code></pre>

<p>Note: the <code>id</code> attribute is a unique identfier and can be anything. <code>loading</code> is just an example.</p>

<p>In the controller, use the <code>setOpacity</code> method to hide or show the loading icon.</p>

<pre><code>// Show the loading icon.
$.loading.setOpacity(1.0);

// Load some content...

// Hide the loading icon.
$.loading.setOpacity(0.0);
</code></pre>

<h3>Accessing View Elements</h3>

<p>The following is a list of GUI elements in the widget's view.  These IDs can be used to
override or access the properties of these elements:</p>

<ul>
<li><code>loading</code>: Ti.UI.ImageView for the loading icon.</li>
</ul>


<p>Prefix the special variable <code>$</code> and the widget ID to the element ID, to access
that view element, for example, <code>$.loading.loading</code> will give you access to the ImageView.</p>

 */
Alloy.widgets.loading = {


    /**
     * @param {Number} opacity <p>Opacity from 0.0 (transparent) to 1.0 (opaque).</p>

     */
    setOpacity:function(opacity) {
    }
};

/**
 * @namespace <p>The searchForBooks widget sends a query to the Google Books API to retrieve book data.
In the view, it appears as a search bar with a textbox and a button icon.</p>

<h3>Usage</h3>

<p>To use the widget, first add it as a dependency in the <code>config.json</code> file:</p>

<pre><code>"dependencies": {
    "com.appcelerator.searchForBooks":"1.0"
}
</code></pre>

<p>Next, add it to a view in the project, using the Require tag:</p>

<pre><code>&lt;Require id="sfb" type="widget" src="com.appcelerator.searchForBooks"/&gt;
</code></pre>

<p>Note: the <code>id</code> attribute is a unique identfier and can be anything. <code>sfb</code> is just an example.</p>

<p>In the controller, use the <code>setHandlers</code> method to register a callback to process the retrieved data.</p>

<pre><code>function processData(books){
   var data = [];
   books.forEach(function(book){
       var label = book.title + ' by ' + book.authors;
       var row = Ti.UI.createTableViewRow({title:label});
       data.push(row)
   });
   // tableView is a Ti.UI.TableView object in the view
   $.tableView.setData(data);
}
$.sfb.setHandlers({
   success: processData
});
</code></pre>

<h3>Accessing View Elements</h3>

<p>The following is a list of GUI elements in the widget's view.  These IDs can be used to
override or access the properties of these elements:</p>

<ul>
<li><code>bar</code>: Ti.UI.View for the entire widget.</li>
<li><code>text</code>: Ti.UI.TextField for the search box.</li>
<li><code>searchView</code>: Ti.UI.View for the icons and acts as a button.</li>
<li><code>search</code>: Ti.UI.ImageView for the search icon.</li>
<li><code>loading</code>: {@link #!/api/Alloy.widgets.loading" rel="Alloy.widgets.loading" class="docClass} for the loading icon.</li>
</ul>


<p>Prefix the special variable <code>$</code> and the widget ID to the element ID, to access
that view element, for example, <code>$.sfb.text</code> will give you access to the TextField.</p>

 */
Alloy.widgets.searchForBooks = {


    /**
     * @param {Object} args <p>Callbacks to register.</p>

     */
    setHandlers:function(args) {
    }
};

/**
 * @namespace <p>@typestr Object
@pseudo
Simple JavaScript object of properties and TSS classes to apply to a Titanium UI object.</p>

<p>All properties are optional.</p>

<p>The <code>apiName</code> property is only specified with the <code>createStyle</code> method.</p>

<p>In addition to the properties defined below, you can also specify properties related to the
component.</p>

 */
var AlloyStyleDict = {

    /**
     * @type String
     */
    apiName:null,

    /**
     * @type Array<String>
     */
    classes:null,

    /**
     * @type String
     */
    id:null,



};


var Titanium = Ti;
