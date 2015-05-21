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

<p>To import a widget in to a project:</p>

<ol>
<li>Copy the widget to the <code>app/widgets</code> folder.  The widget must be contained within its own folder.</li>
<li>Update the <code>dependencies</code> object in the <code>config.json</code> file by adding a key/value pair with the name of
the widget as the key and the version number as the value.</li>
<li><p>Add the widget to a view or create an instance of the widget in a controller:</p>

<ul>
<li>To add a widget to a view, add the <Widget> tag in the XML markup and
set the <code>src</code> attribute to the folder name of the widget.</Widget></li>
<li>To create an instance of a widget in a controller, use the {@link #!/api/Alloy} method.</li>
</ul>
</li>
</ol>


<p>You can optionally add the <code>id</code> and <code>name</code> attributes to the <code>Widget</code> element:</p>

<ul>
<li>The <code>id</code> attribute allows you to reference the widget in the controller code.  You can use this
reference to call methods exported by the widget.</li>
<li>The <code>name</code> attribute allows you to import a specific view-controller in the widget rather than the
default one (<code>widget.xml</code>/<code>widget.js</code>).  Specify the name of the view-controller minus the extension.</li>
</ul>


<p>For example, to import a widget called <code>mywidget</code> in to a project, copy <code>mywidget</code> to the
<code>app/widgets</code> folder, where its assets, controllers, views, etc. are contained in the
<code>app/widgets/mywidget</code> folder.</p>

<pre><code>app
 config.json
 controllers
    index.js
 views
    index.xml
 widgets
     mywidget
         controllers
            foo.js
            widget.js
         views
            foo.xml
            widget.xml
         widget.json
</code></pre>

<p>Next, add it as a dependency in your <code>config.json</code> file:</p>

<pre><code>...
"dependencies":{
    "mywidget":"1.0"
}
</code></pre>

<p>Finally, either add the widget in the XML markup of the view or create an instance of the widget in the controller.</p>

<p>To add the widget in the view, use the <code>Widget</code> tag, specifying the <code>src</code> attribute as the name of
the widget:</p>

<pre><code>&lt;Alloy&gt;
    &lt;Window id="win"&gt;
        &lt;Widget id="myWidget" src="mywidget" /&gt;
    &lt;/Window&gt;
&lt;/Alloy&gt;
</code></pre>

<p>Since the <code>id</code> attribute is defined, the widget can be referenced in the controller using
<code>$.myWidget</code>.</p>

<p>To add the widget in the controller, use the <code>{@link #!/api/Alloy}</code> method. The first required parameter is
the name of the widget. The second optional parameter can specify the view component to
instantiate and the last optional parameter can specify the arguments to instantiate the widget.
For example, the following controller code is equivalent to the previous view markup example.</p>

<pre><code>var myWidget = {@link #!/api/Alloy}("mywidget");
win.add(myWidget.getView());
</code></pre>

<p>A widget can also be added to other widgets.  Follow the same procedure as above except the widget
configuration file is called <code>widget.json</code> instead of <code>config.json</code>.</p>

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
 * @namespace <p>The sample widgets are no longer supplied or supported and have been removed from Alloy.</p>

<p>Maintained versions of the sample widgets are available at {@link http://gitt.io/}.</p>

<p>For information on using a widget in your project, see
{@link #!/api/Alloy.Widget" rel="Alloy.Widget" class="docClass}.</p>

 */
Alloy.widgets = {



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
