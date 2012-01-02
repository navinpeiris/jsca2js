/**
 * Notes: <p>Titanium provides a number of built-in objects in the Javascript that are not part of the Titanium namespace.  Specifically, the following are available.</p>
<h4 id="json">JSON</h4>
<p>Titanium has a built-in JSON parser with two main functions: <tt>parse</tt> and <tt>stringify</tt>.  <tt>JSON.parse</tt> will safely evaluate a string encoded as Javascript into a Javascript object.  <tt>JSON.stringify</tt> will encode a Javascript object into a string.</p>
<h4 id="timers">Timers</h4>
<p>Titanium has built-in support for one-shot and repeating timers with two main functions: <tt>setTimeout</tt> and <tt>setInterval</tt>.  <tt>setTimeout</tt> takes 2 arguments: function and timeout in milliseconds after which the function should be executed and returns a timer handle that can be used to cancel a pending timer with <tt>clearTimeout</tt>.  <tt>setInterval</tt> takes 2 arguments: function and timeout in milliseconds for how often the function should be executed until cancelled and returns a timer handle that can be used to cancel a timer with <tt>clearInterval</tt>.</p>
<h4 id="alert">Alert</h4>
<p>Titanium has a built-in convenience function <tt>alert</tt> which can be used as a shortcut to {@link Titanium.UI.createAlertDialog} for creating a message box.  Note that unlike a web browser-based version of <tt>alert</tt>, the method is asynchronous. However, only one alert dialog will be visible and modal at a time.</p>
<h4 id="locale">Locale</h4>
<p>The macro <tt>L</tt> can also be used which aliases the method {@link Titanium.Locale.getString}.</p>
<h4 id="string_formatting">String formatting</h4>
<p>The following are built-in functions available on the <tt>String</tt> class which are Titanium specific and will aid in formatting strings into a locale-specific string.</p>
<p><tt>String.format</tt>: format a generic string using the {@link http://www.opengroup.org/onlinepubs/009695399/functions/printf}.</p>
<p><tt>String.formatDate</tt>: format a date into a locale specific date format. Optionally pass a second argument (string) as either "short" (default), "medium" or "long" for controlling the date format.</p>
<p><tt>String.formatTime</tt>: format a date into a locale specific time format.</p>
<p><tt>String.formatDecimal</tt>: format a number into a locale specific decimal format.</p>
<p><tt>String.formatCurrency</tt>: format a number into a locale specific currency format.</p>
 * platforms: android, iphone, ipad
 * @namespace <p>The top level Titanium module.</p>
 * @since 0.1
 */
var Ti = {

    /**
     * <p>the user-agent string used by Titanium</p>
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.1
     */
    userAgent:null,

    /**
     * <p>the version of Titanium that is executing</p>
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.1
     */
    version:null,


    /**
     * add an event listener for the instance to receive view triggered events
     * platforms: android, iphone, ipad
     * @param {string} name name of the event
     * @param {function} callback callback function to invoke when the event is fired
     * @returns void
     * @since 0.1
     */
    addEventListener:function(name, callback) {
    },

    /**
     * create and return an instance of {@link Titanium.Blob}
     * platforms: android, iphone, ipad
     * @param {object} parameters (optional) a dictionary object properties defined in {@link Titanium.Blob}
     * @since 0.1
     */
    createBlob:function(parameters) {
    },

    /**
     * <p>creates a new buffer based on the params</p>
     * platforms: android, iphone, ipad
     * @param {object} params Key value pairs.  You can include: <tt>value</tt>, an optional initial value which will be encoded and placed in the buffer.  If value is a Number, <tt>type</tt> must also be set. This is simply a convenient way of calling {@link Titanium.Codec.encodeString} or {@link Titanium.Codec.encodeNumber} and placing the encoded value in the returned buffer.  <tt>length</tt>: the length of the buffer, with a default of 0 unless <tt>value</tt> is specified, in which case the length of the encoded <tt>value</tt>.  <tt>type</tt>, the type of data encoding to use with <tt>value</tt>, with {@link Titanium.Codec.CHARSET_UTF8} being the default if <tt>value</tt> is a String, else this argument is required in the case of <tt>value</tt> being a number.  <tt>byteOrder</tt>, the byte order of this buffer, with the default being the OS native byte order is used by default (see {@link Titanium.Codec.getNativeByteOrder}).
     * @since 0.1
     */
    createBuffer:function(params) {
    },

    /**
     * fire a synthesized event to the views listener
     * platforms: android, iphone, ipad
     * @param {string} name name of the event
     * @param {object} event event object
     * @returns void
     * @since 0.1
     */
    fireEvent:function(name, event) {
    },

    /**
     * <p>one or more filenames to include as if the Javascript code was written in place.  This is similar to a C <tt>#include</tt> function.</p>
     * platforms: android, iphone, ipad
     * @param {string} name filename to include
     * @returns void
     * @since 0.1
     */
    include:function(name) {
    },

    /**
     * remove a previously added event listener
     * platforms: android, iphone, ipad
     * @param {string} name name of the event
     * @param {function} callback callback function passed in addEventListener
     * @returns void
     * @since 0.1
     */
    removeEventListener:function(name, callback) {
    }
}

/**
 * platforms: android, iphone, ipad
 * @namespace <p>The top level API module.  The API module is mainly used for logging.</p>
 * @since 0.1
 */
Ti.API = {


    /**
     * add an event listener for the instance to receive view triggered events
     * platforms: android, iphone, ipad
     * @param {string} name name of the event
     * @param {function} callback callback function to invoke when the event is fired
     * @returns void
     * @since 0.1
     */
    addEventListener:function(name, callback) {
    },

    /**
     * <p>function for logging debug messages</p>
     * platforms: android, iphone, ipad
     * @param {string} message the message to log
     * @returns void
     * @since 0.1
     */
    debug:function(message) {
    },

    /**
     * <p>function for logging error messages</p>
     * platforms: android, iphone, ipad
     * @param {string} message the message to log
     * @returns void
     * @since 0.1
     */
    error:function(message) {
    },

    /**
     * fire a synthesized event to the views listener
     * platforms: android, iphone, ipad
     * @param {string} name name of the event
     * @param {object} event event object
     * @returns void
     * @since 0.1
     */
    fireEvent:function(name, event) {
    },

    /**
     * <p>function for logging informational messages</p>
     * platforms: android, iphone, ipad
     * @param {string} message the message to log
     * @returns void
     * @since 0.1
     */
    info:function(message) {
    },

    /**
     * <p>function for logging custom severity messages</p>
     * platforms: android, iphone, ipad
     * @param {string} level the log level
     * @param {string} message the message to log
     * @returns void
     * @since 0.1
     */
    log:function(level, message) {
    },

    /**
     * remove a previously added event listener
     * platforms: android, iphone, ipad
     * @param {string} name name of the event
     * @param {function} callback callback function passed in addEventListener
     * @returns void
     * @since 0.1
     */
    removeEventListener:function(name, callback) {
    },

    /**
     * <p>function for logging warning messages</p>
     * platforms: android, iphone, ipad
     * @param {string} message the message to log
     * @returns void
     * @since 0.1
     */
    warn:function(message) {
    }
}

/**
 * Notes: <p>You'll want to be selective about turning on and off the device accelerometer.  It's recommended you turn off the accelerometer when you're not using it.</p>
<p>You can turn off the accelerometer by simply removing your event listener function.  You can turn it back on by re-adding the same function with <tt>addEventListener</tt>.</p>
<pre><code>Titanium.Accelerometer.removeEventListener('update',myFunction);
</code></pre>
 * platforms: android, iphone, ipad
 * @namespace <p>The top level Accelerometer module.  The Accelerometer modules contains methods and properties for using the device accelerometer.</p>
 * @since 0.1
 * 
 * @example Basic Accelerometer Event
 * <p>Adds an accelerometer update event listener which prints out the x, y and z axis as the device is moved.  You should generally remove the event when not used to conserve device resources.  If you do not have an active event listener, the accelerometer is turned off to conserve device resources.</p>
<pre><code>Titanium.Accelerometer.addEventListener('update',function(e)
{
    Ti.API.debug("accelerometer - x:"+e.x+",y:"+e.y+",z:"+e.z);
});
</code></pre>
 */
Ti.Accelerometer = {


    /**
     * add an event listener for the instance to receive view triggered events
     * platforms: android, iphone, ipad
     * @param {string} name name of the event
     * @param {function} callback callback function to invoke when the event is fired
     * @returns void
     * @since 0.1
     */
    addEventListener:function(name, callback) {
    },

    /**
     * fire a synthesized event to the views listener
     * platforms: android, iphone, ipad
     * @param {string} name name of the event
     * @param {object} event event object
     * @returns void
     * @since 0.1
     */
    fireEvent:function(name, event) {
    },

    /**
     * remove a previously added event listener
     * platforms: android, iphone, ipad
     * @param {string} name name of the event
     * @param {function} callback callback function passed in addEventListener
     * @returns void
     * @since 0.1
     */
    removeEventListener:function(name, callback) {
    }
}

/**
 * platforms: android, iphone, ipad
 * @namespace <p>The top level Analytics module.  The Analytics module is used for transmitting developer-defined Analytics event for your application to the Appcelerator Analytics product. It can be used to augment additional context or application-specific information which can then be accessed during analysis using Analytics.</p>
 * @since 0.1
 * 
 * @example Custom Feature Event
 * <p>This examples shows how to send a featureEvent during an application session to indicate some feature was triggered/used by the user that you would like to track.</p>
<pre><code>Titanium.Analytics.featureEvent('app.feature.blah',{product:'killer'});
</code></pre>
 */
Ti.Analytics = {


    /**
     * <p>send a generic event for the application session</p>
     * platforms: android, iphone, ipad
     * @param {string} type the event type
     * @param {string} name the event name
     * @param {object} data event data or null if not specified. the object must be serializable as JSON
     * @returns void
     * @since 0.1
     */
    addEvent:function(type, name, data) {
    },

    /**
     * add an event listener for the instance to receive view triggered events
     * platforms: android, iphone, ipad
     * @param {string} name name of the event
     * @param {function} callback callback function to invoke when the event is fired
     * @returns void
     * @since 0.1
     */
    addEventListener:function(name, callback) {
    },

    /**
     * <p>send an analytics feature event for the application session</p>
     * platforms: android, iphone, ipad
     * @param {string} name the event name
     * @param {object} data event data or null if not specified. the object must be serializable as JSON
     * @returns void
     * @since 0.1
     */
    featureEvent:function(name, data) {
    },

    /**
     * fire a synthesized event to the views listener
     * platforms: android, iphone, ipad
     * @param {string} name name of the event
     * @param {object} event event object
     * @returns void
     * @since 0.1
     */
    fireEvent:function(name, event) {
    },

    /**
     * <p>send an analytics nav event for the application session</p>
     * platforms: android, iphone, ipad
     * @param {string} from the <tt>from</tt> location in the nav event
     * @param {string} to the <tt>to</tt> location in the nav event
     * @param {string} name the event name
     * @param {object} data event data or null if not specified. the object must be serializable as JSON
     * @returns void
     * @since 0.1
     */
    navEvent:function(from, to, name, data) {
    },

    /**
     * remove a previously added event listener
     * platforms: android, iphone, ipad
     * @param {string} name name of the event
     * @param {function} callback callback function passed in addEventListener
     * @returns void
     * @since 0.1
     */
    removeEventListener:function(name, callback) {
    },

    /**
     * <p>send a analytics settings event for the application session</p>
     * platforms: android, iphone, ipad
     * @param {string} name the event name
     * @param {object} data event data or null if not specified. the object must be serializable as JSON
     * @returns void
     * @since 0.1
     */
    settingsEvent:function(name, data) {
    },

    /**
     * <p>send an analytics timed event for the application session</p>
     * platforms: android, iphone, ipad
     * @param {string} name the event name
     * @param {date} start the event start as a Date object
     * @param {date} stop the event end as a Date object
     * @param {float} duration the event duration
     * @param {object} data event data or null if not specified. the object must be serializable as JSON
     * @returns void
     * @since 0.1
     */
    timedEvent:function(name, start, stop, duration, data) {
    },

    /**
     * <p>send an analytics user event for the application session</p>
     * platforms: android, iphone, ipad
     * @param {string} name the event name
     * @param {object} data event data or null if not specified. the object must be serializable as JSON
     * @returns void
     * @since 0.1
     */
    userEvent:function(name, data) {
    }
}

/**
 * Notes: <p>Several (almost all) of the constants you see above are directly taken from Android.  So if we've failed to document all of them, have a look online at the {@link http://developer.android.com/reference/android/app/Service}.</p>
<p>The most important page there will be the {@link http://developer.android.com/reference/android/content/Intent}, which will give you the meaning of those ACTION, EXTRA and CATEGORY constants.</p>
 * platforms: android
 * @namespace <p>The top level Android module. <tt>Ti.Android.currentActivity</tt> provides each context an Activity. This object cannot be created directly.</p>
 * @since 1.5
 */
Ti.Android = {

    /**
     * 
     * platforms: android
     * @type string
     * @since 1.5
     */
    ACTION_AIRPLANE_MODE_CHANGED:null,

    /**
     * 
     * platforms: android
     * @type string
     * @since 1.5
     */
    ACTION_ALL_APPS:null,

    /**
     * 
     * platforms: android
     * @type string
     * @since 1.5
     */
    ACTION_ANSWER:null,

    /**
     * 
     * platforms: android
     * @type string
     * @since 1.5
     */
    ACTION_ATTACH_DATA:null,

    /**
     * 
     * platforms: android
     * @type string
     * @since 1.5
     */
    ACTION_BATTERY_CHANGED:null,

    /**
     * 
     * platforms: android
     * @type string
     * @since 1.5
     */
    ACTION_BATTERY_LOW:null,

    /**
     * 
     * platforms: android
     * @type string
     * @since 1.5
     */
    ACTION_BATTERY_OKAY:null,

    /**
     * 
     * platforms: android
     * @type string
     * @since 1.5
     */
    ACTION_BOOT_COMPLETED:null,

    /**
     * 
     * platforms: android
     * @type string
     * @since 1.5
     */
    ACTION_BUG_REPORT:null,

    /**
     * 
     * platforms: android
     * @type string
     * @since 1.5
     */
    ACTION_CALL:null,

    /**
     * 
     * platforms: android
     * @type string
     * @since 1.5
     */
    ACTION_CALL_BUTTON:null,

    /**
     * 
     * platforms: android
     * @type string
     * @since 1.5
     */
    ACTION_CAMERA_BUTTON:null,

    /**
     * 
     * platforms: android
     * @type string
     * @since 1.5
     */
    ACTION_CHOOSER:null,

    /**
     * 
     * platforms: android
     * @type string
     * @since 1.5
     */
    ACTION_CLOSE_SYSTEM_DIALOGS:null,

    /**
     * 
     * platforms: android
     * @type string
     * @since 1.5
     */
    ACTION_CONFIGURATION_CHANGED:null,

    /**
     * 
     * platforms: android
     * @type string
     * @since 1.5
     */
    ACTION_CREATE_SHORTCUT:null,

    /**
     * 
     * platforms: android
     * @type string
     * @since 1.5
     */
    ACTION_DATE_CHANGED:null,

    /**
     * 
     * platforms: android
     * @type string
     * @since 1.5
     */
    ACTION_DEFAULT:null,

    /**
     * 
     * platforms: android
     * @type string
     * @since 1.5
     */
    ACTION_DELETE:null,

    /**
     * 
     * platforms: android
     * @type string
     * @since 1.5
     */
    ACTION_DEVICE_STORAGE_LOW:null,

    /**
     * 
     * platforms: android
     * @type string
     * @since 1.5
     */
    ACTION_DIAL:null,

    /**
     * 
     * platforms: android
     * @type string
     * @since 1.5
     */
    ACTION_EDIT:null,

    /**
     * 
     * platforms: android
     * @type string
     * @since 1.5
     */
    ACTION_GET_CONTENT:null,

    /**
     * 
     * platforms: android
     * @type string
     * @since 1.5
     */
    ACTION_GTALK_SERVICE_CONNECTED:null,

    /**
     * 
     * platforms: android
     * @type string
     * @since 1.5
     */
    ACTION_GTALK_SERVICE_DISCONNECTED:null,

    /**
     * 
     * platforms: android
     * @type string
     * @since 1.5
     */
    ACTION_HEADSET_PLUG:null,

    /**
     * 
     * platforms: android
     * @type string
     * @since 1.5
     */
    ACTION_INPUT_METHOD_CHANGED:null,

    /**
     * 
     * platforms: android
     * @type string
     * @since 1.5
     */
    ACTION_INSERT:null,

    /**
     * 
     * platforms: android
     * @type string
     * @since 1.5
     */
    ACTION_INSERT_OR_EDIT:null,

    /**
     * 
     * platforms: android
     * @type string
     * @since 1.5
     */
    ACTION_MAIN:null,

    /**
     * 
     * platforms: android
     * @type string
     * @since 1.5
     */
    ACTION_MANAGE_PACKAGE_STORAGE:null,

    /**
     * 
     * platforms: android
     * @type string
     * @since 1.5
     */
    ACTION_MEDIA_BAD_REMOVAL:null,

    /**
     * 
     * platforms: android
     * @type string
     * @since 1.5
     */
    ACTION_MEDIA_BUTTON:null,

    /**
     * 
     * platforms: android
     * @type string
     * @since 1.5
     */
    ACTION_MEDIA_CHECKING:null,

    /**
     * 
     * platforms: android
     * @type string
     * @since 1.5
     */
    ACTION_MEDIA_EJECT:null,

    /**
     * 
     * platforms: android
     * @type string
     * @since 1.5
     */
    ACTION_MEDIA_MOUNTED:null,

    /**
     * 
     * platforms: android
     * @type string
     * @since 1.5
     */
    ACTION_MEDIA_NOFS:null,

    /**
     * 
     * platforms: android
     * @type string
     * @since 1.5
     */
    ACTION_MEDIA_REMOVED:null,

    /**
     * 
     * platforms: android
     * @type string
     * @since 1.5
     */
    ACTION_MEDIA_SCANNER_FINISHED:null,

    /**
     * 
     * platforms: android
     * @type string
     * @since 1.5
     */
    ACTION_MEDIA_SCANNER_SCAN_FILE:null,

    /**
     * 
     * platforms: android
     * @type string
     * @since 1.5
     */
    ACTION_MEDIA_SCANNER_STARTED:null,

    /**
     * 
     * platforms: android
     * @type string
     * @since 1.5
     */
    ACTION_MEDIA_SHARED:null,

    /**
     * 
     * platforms: android
     * @type string
     * @since 1.5
     */
    ACTION_MEDIA_UNMOUNTABLE:null,

    /**
     * 
     * platforms: android
     * @type string
     * @since 1.5
     */
    ACTION_MEDIA_UNMOUNTED:null,

    /**
     * 
     * platforms: android
     * @type string
     * @since 1.5
     */
    ACTION_NEW_OUTGOING_CALL:null,

    /**
     * 
     * platforms: android
     * @type string
     * @since 1.5
     */
    ACTION_PACKAGE_ADDED:null,

    /**
     * 
     * platforms: android
     * @type string
     * @since 1.5
     */
    ACTION_PACKAGE_CHANGED:null,

    /**
     * 
     * platforms: android
     * @type string
     * @since 1.5
     */
    ACTION_PACKAGE_DATA_CLEARED:null,

    /**
     * 
     * platforms: android
     * @type string
     * @since 1.5
     */
    ACTION_PACKAGE_INSTALL:null,

    /**
     * 
     * platforms: android
     * @type string
     * @since 1.5
     */
    ACTION_PACKAGE_REMOVED:null,

    /**
     * 
     * platforms: android
     * @type string
     * @since 1.5
     */
    ACTION_PACKAGE_REPLACED:null,

    /**
     * 
     * platforms: android
     * @type string
     * @since 1.5
     */
    ACTION_PACKAGE_RESTARTED:null,

    /**
     * 
     * platforms: android
     * @type string
     * @since 1.5
     */
    ACTION_PICK:null,

    /**
     * 
     * platforms: android
     * @type string
     * @since 1.5
     */
    ACTION_PICK_ACTIVITY:null,

    /**
     * 
     * platforms: android
     * @type string
     * @since 1.5
     */
    ACTION_POWER_CONNECTED:null,

    /**
     * 
     * platforms: android
     * @type string
     * @since 1.5
     */
    ACTION_POWER_DISCONNECTED:null,

    /**
     * 
     * platforms: android
     * @type string
     * @since 1.5
     */
    ACTION_POWER_USAGE_SUMMARY:null,

    /**
     * 
     * platforms: android
     * @type string
     * @since 1.5
     */
    ACTION_PROVIDER_CHANGED:null,

    /**
     * 
     * platforms: android
     * @type string
     * @since 1.5
     */
    ACTION_REBOOT:null,

    /**
     * 
     * platforms: android
     * @type string
     * @since 1.5
     */
    ACTION_RUN:null,

    /**
     * 
     * platforms: android
     * @type string
     * @since 1.5
     */
    ACTION_SCREEN_OFF:null,

    /**
     * 
     * platforms: android
     * @type string
     * @since 1.5
     */
    ACTION_SCREEN_ON:null,

    /**
     * 
     * platforms: android
     * @type string
     * @since 1.5
     */
    ACTION_SEARCH:null,

    /**
     * 
     * platforms: android
     * @type string
     * @since 1.5
     */
    ACTION_SEARCH_LONG_PRESS:null,

    /**
     * 
     * platforms: android
     * @type string
     * @since 1.5
     */
    ACTION_SEND:null,

    /**
     * 
     * platforms: android
     * @type string
     * @since 1.5
     */
    ACTION_SENDTO:null,

    /**
     * 
     * platforms: android
     * @type string
     * @since 1.5
     */
    ACTION_SEND_MULTIPLE:null,

    /**
     * 
     * platforms: android
     * @type string
     * @since 1.5
     */
    ACTION_SET_WALLPAPER:null,

    /**
     * 
     * platforms: android
     * @type string
     * @since 1.5
     */
    ACTION_SHUTDOWN:null,

    /**
     * 
     * platforms: android
     * @type string
     * @since 1.5
     */
    ACTION_SYNC:null,

    /**
     * 
     * platforms: android
     * @type string
     * @since 1.5
     */
    ACTION_SYSTEM_TUTORIAL:null,

    /**
     * 
     * platforms: android
     * @type string
     * @since 1.5
     */
    ACTION_TIME_CHANGED:null,

    /**
     * 
     * platforms: android
     * @type string
     * @since 1.5
     */
    ACTION_TIME_TICK:null,

    /**
     * 
     * platforms: android
     * @type string
     * @since 1.5
     */
    ACTION_UID_REMOVED:null,

    /**
     * 
     * platforms: android
     * @type string
     * @since 1.5
     */
    ACTION_UMS_CONNECTED:null,

    /**
     * 
     * platforms: android
     * @type string
     * @since 1.5
     */
    ACTION_UMS_DISCONNECTED:null,

    /**
     * 
     * platforms: android
     * @type string
     * @since 1.5
     */
    ACTION_USER_PRESENT:null,

    /**
     * 
     * platforms: android
     * @type string
     * @since 1.5
     */
    ACTION_VIEW:null,

    /**
     * 
     * platforms: android
     * @type string
     * @since 1.5
     */
    ACTION_VOICE_COMMAND:null,

    /**
     * 
     * platforms: android
     * @type string
     * @since 1.5
     */
    ACTION_WALLPAPER_CHANGED:null,

    /**
     * 
     * platforms: android
     * @type string
     * @since 1.5
     */
    ACTION_WEB_SEARCH:null,

    /**
     * 
     * platforms: android
     * @type string
     * @since 1.5
     */
    CATEGORY_ALTERNATIVE:null,

    /**
     * 
     * platforms: android
     * @type string
     * @since 1.5
     */
    CATEGORY_BROWSABLE:null,

    /**
     * 
     * platforms: android
     * @type string
     * @since 1.5
     */
    CATEGORY_DEFAULT:null,

    /**
     * 
     * platforms: android
     * @type string
     * @since 1.5
     */
    CATEGORY_DEVELOPMENT_PREFERENCE:null,

    /**
     * 
     * platforms: android
     * @type string
     * @since 1.5
     */
    CATEGORY_EMBED:null,

    /**
     * 
     * platforms: android
     * @type string
     * @since 1.5
     */
    CATEGORY_FRAMEWORK_INSTRUMENTATION_TEST:null,

    /**
     * 
     * platforms: android
     * @type string
     * @since 1.5
     */
    CATEGORY_HOME:null,

    /**
     * 
     * platforms: android
     * @type string
     * @since 1.5
     */
    CATEGORY_INFO:null,

    /**
     * 
     * platforms: android
     * @type string
     * @since 1.5
     */
    CATEGORY_LAUNCHER:null,

    /**
     * 
     * platforms: android
     * @type string
     * @since 1.5
     */
    CATEGORY_MONKEY:null,

    /**
     * 
     * platforms: android
     * @type string
     * @since 1.5
     */
    CATEGORY_OPENABLE:null,

    /**
     * 
     * platforms: android
     * @type string
     * @since 1.5
     */
    CATEGORY_PREFERENCE:null,

    /**
     * 
     * platforms: android
     * @type string
     * @since 1.5
     */
    CATEGORY_SAMPLE_CODE:null,

    /**
     * 
     * platforms: android
     * @type string
     * @since 1.5
     */
    CATEGORY_SELECTED_ALTERNATIVE:null,

    /**
     * 
     * platforms: android
     * @type string
     * @since 1.5
     */
    CATEGORY_TAB:null,

    /**
     * 
     * platforms: android
     * @type string
     * @since 1.5
     */
    CATEGORY_TEST:null,

    /**
     * 
     * platforms: android
     * @type string
     * @since 1.5
     */
    CATEGORY_UNIT_TEST:null,

    /**
     * <p>Use all default values (where applicable).</p>
     * platforms: android
     * @type int
     * @since 1.5
     */
    DEFAULT_ALL:null,

    /**
     * <p>Use the default notification lights.</p>
     * platforms: android
     * @type int
     * @since 1.5
     */
    DEFAULT_LIGHTS:null,

    /**
     * <p>Use the default notification sound.</p>
     * platforms: android
     * @type int
     * @since 1.5
     */
    DEFAULT_SOUND:null,

    /**
     * <p>Use the default notification vibrate.</p>
     * platforms: android
     * @type int
     * @since 1.5
     */
    DEFAULT_VIBRATE:null,

    /**
     * 
     * platforms: android
     * @type string
     * @since 1.5
     */
    EXTRA_ALARM_COUNT:null,

    /**
     * 
     * platforms: android
     * @type string
     * @since 1.5
     */
    EXTRA_BCC:null,

    /**
     * 
     * platforms: android
     * @type string
     * @since 1.5
     */
    EXTRA_CC:null,

    /**
     * 
     * platforms: android
     * @type string
     * @since 1.5
     */
    EXTRA_DATA_REMOVED:null,

    /**
     * 
     * platforms: android
     * @type string
     * @since 1.5
     */
    EXTRA_DONT_KILL_APP:null,

    /**
     * 
     * platforms: android
     * @type string
     * @since 1.5
     */
    EXTRA_EMAIL:null,

    /**
     * 
     * platforms: android
     * @type string
     * @since 1.5
     */
    EXTRA_INTENT:null,

    /**
     * 
     * platforms: android
     * @type string
     * @since 1.5
     */
    EXTRA_KEY_EVENT:null,

    /**
     * 
     * platforms: android
     * @type string
     * @since 1.5
     */
    EXTRA_PHONE_NUMBER:null,

    /**
     * 
     * platforms: android
     * @type string
     * @since 1.5
     */
    EXTRA_REPLACING:null,

    /**
     * 
     * platforms: android
     * @type string
     * @since 1.5
     */
    EXTRA_SHORTCUT_ICON:null,

    /**
     * 
     * platforms: android
     * @type string
     * @since 1.5
     */
    EXTRA_SHORTCUT_ICON_RESOURCE:null,

    /**
     * 
     * platforms: android
     * @type string
     * @since 1.5
     */
    EXTRA_SHORTCUT_INTENT:null,

    /**
     * 
     * platforms: android
     * @type string
     * @since 1.5
     */
    EXTRA_SHORTCUT_NAME:null,

    /**
     * 
     * platforms: android
     * @type string
     * @since 1.5
     */
    EXTRA_STREAM:null,

    /**
     * 
     * platforms: android
     * @type string
     * @since 1.5
     */
    EXTRA_SUBJECT:null,

    /**
     * 
     * platforms: android
     * @type string
     * @since 1.5
     */
    EXTRA_TEMPLATE:null,

    /**
     * 
     * platforms: android
     * @type string
     * @since 1.5
     */
    EXTRA_TEXT:null,

    /**
     * 
     * platforms: android
     * @type string
     * @since 1.5
     */
    EXTRA_TITLE:null,

    /**
     * 
     * platforms: android
     * @type string
     * @since 1.5
     */
    EXTRA_UID:null,

    /**
     * 
     * platforms: android
     * @type int
     * @since 1.5
     */
    FILL_IN_ACTION:null,

    /**
     * 
     * platforms: android
     * @type int
     * @since 1.5
     */
    FILL_IN_CATEGORIES:null,

    /**
     * 
     * platforms: android
     * @type int
     * @since 1.5
     */
    FILL_IN_COMPONENT:null,

    /**
     * 
     * platforms: android
     * @type int
     * @since 1.5
     */
    FILL_IN_DATA:null,

    /**
     * 
     * platforms: android
     * @type int
     * @since 1.5
     */
    FILL_IN_PACKAGE:null,

    /**
     * 
     * platforms: android
     * @type int
     * @since 1.5
     */
    FLAG_ACTIVITY_BROUGHT_TO_FRONT:null,

    /**
     * 
     * platforms: android
     * @type int
     * @since 1.5
     */
    FLAG_ACTIVITY_CLEAR_TOP:null,

    /**
     * 
     * platforms: android
     * @type int
     * @since 1.5
     */
    FLAG_ACTIVITY_CLEAR_WHEN_TASK_RESET:null,

    /**
     * 
     * platforms: android
     * @type int
     * @since 1.5
     */
    FLAG_ACTIVITY_EXCLUDE_FROM_RECENTS:null,

    /**
     * 
     * platforms: android
     * @type int
     * @since 1.5
     */
    FLAG_ACTIVITY_FORWARD_RESULT:null,

    /**
     * 
     * platforms: android
     * @type int
     * @since 1.5
     */
    FLAG_ACTIVITY_LAUNCHED_FROM_HISTORY:null,

    /**
     * 
     * platforms: android
     * @type int
     * @since 1.5
     */
    FLAG_ACTIVITY_MULTIPLE_TASK:null,

    /**
     * 
     * platforms: android
     * @type int
     * @since 1.5
     */
    FLAG_ACTIVITY_NEW_TASK:null,

    /**
     * 
     * platforms: android
     * @type int
     * @since 1.5
     */
    FLAG_ACTIVITY_NO_ANIMATION:null,

    /**
     * 
     * platforms: android
     * @type int
     * @since 1.5
     */
    FLAG_ACTIVITY_NO_HISTORY:null,

    /**
     * 
     * platforms: android
     * @type int
     * @since 1.5
     */
    FLAG_ACTIVITY_NO_USER_ACTION:null,

    /**
     * 
     * platforms: android
     * @type int
     * @since 1.5
     */
    FLAG_ACTIVITY_PREVIOUS_IS_TOP:null,

    /**
     * 
     * platforms: android
     * @type int
     * @since 1.5
     */
    FLAG_ACTIVITY_REORDER_TO_FRONT:null,

    /**
     * 
     * platforms: android
     * @type int
     * @since 1.5
     */
    FLAG_ACTIVITY_RESET_TASK_IF_NEEDED:null,

    /**
     * 
     * platforms: android
     * @type int
     * @since 1.5
     */
    FLAG_ACTIVITY_SINGLE_TOP:null,

    /**
     * <p>Bit to be bitwise-ored into the flags field that should be set if the notification should be canceled when it is clicked by the user.</p>
     * platforms: android
     * @type int
     * @since 1.5
     */
    FLAG_AUTO_CANCEL:null,

    /**
     * 
     * platforms: android
     * @type int
     * @since 1.5
     */
    FLAG_CANCEL_CURRENT:null,

    /**
     * 
     * platforms: android
     * @type int
     * @since 1.5
     */
    FLAG_DEBUG_LOG_RESOLUTION:null,

    /**
     * 
     * platforms: android
     * @type int
     * @since 1.5
     */
    FLAG_FROM_BACKGROUND:null,

    /**
     * 
     * platforms: android
     * @type int
     * @since 1.5
     */
    FLAG_GRANT_READ_URI_PERMISSION:null,

    /**
     * 
     * platforms: android
     * @type int
     * @since 1.5
     */
    FLAG_GRANT_WRITE_URI_PERMISSION:null,

    /**
     * <p>Bit to be bitwise-ored into the flags field that if set, the audio will be repeated until the notification is cancelled or the notification window is opened.</p>
     * platforms: android
     * @type int
     * @since 1.5
     */
    FLAG_INSISTENT:null,

    /**
     * <p>Bit to be bitwise-ored into the flags field that should be set if the notification should not be canceled when the user clicks the Clear all button.</p>
     * platforms: android
     * @type int
     * @since 1.5
     */
    FLAG_NO_CLEAR:null,

    /**
     * 
     * platforms: android
     * @type int
     * @since 1.5
     */
    FLAG_NO_CREATE:null,

    /**
     * 
     * platforms: android
     * @type int
     * @since 1.5
     */
    FLAG_ONE_SHOT:null,

    /**
     * <p>Bit to be bitwise-ored into the flags field that should be set if this notification is in reference to something that is ongoing, like a phone call.</p>
     * platforms: android
     * @type int
     * @since 1.5
     */
    FLAG_ONGOING_EVENT:null,

    /**
     * <p>Bit to be bitwise-ored into the flags field that should be set if you want the sound and/or vibration play each time the notification is sent, even if it has not been canceled before that.</p>
     * platforms: android
     * @type int
     * @since 1.5
     */
    FLAG_ONLY_ALERT_ONCE:null,

    /**
     * 
     * platforms: android
     * @type int
     * @since 1.5
     */
    FLAG_RECEIVER_REGISTERED_ONLY:null,

    /**
     * <p>Bit to be bitwise-ored into the flags field that should be set if you want the LED on for this notification.</p>
     * platforms: android
     * @type int
     * @since 1.5
     */
    FLAG_SHOW_LIGHTS:null,

    /**
     * 
     * platforms: android
     * @type int
     * @since 1.5
     */
    FLAG_UPDATE_CURRENT:null,

    /**
     * 
     * platforms: android
     * @type int
     * @since 1.5
     */
    PENDING_INTENT_FOR_ACTIVITY:null,

    /**
     * 
     * platforms: android
     * @type int
     * @since 1.5
     */
    PENDING_INTENT_FOR_BROADCAST:null,

    /**
     * 
     * platforms: android
     * @type int
     * @since 1.5
     */
    PENDING_INTENT_FOR_SERVICE:null,

    /**
     * 
     * platforms: android
     * @type int
     * @since 1.5
     */
    PENDING_INTENT_MAX_VALUE:null,

    /**
     * <p>Accessor for android resources</p>
     * platforms: android
     * @type object
     * @since 1.5
     */
    R:null,

    /**
     * 
     * platforms: android
     * @type int
     * @since 1.5
     */
    RESULT_CANCELED:null,

    /**
     * 
     * platforms: android
     * @type int
     * @since 1.5
     */
    RESULT_FIRST_USER:null,

    /**
     * 
     * platforms: android
     * @type int
     * @since 1.5
     */
    RESULT_OK:null,

    /**
     * 
     * platforms: android
     * @type int
     * @since 1.5
     */
    SCREEN_ORIENTATION_BEHIND:null,

    /**
     * 
     * platforms: android
     * @type int
     * @since 1.5
     */
    SCREEN_ORIENTATION_LANDSCAPE:null,

    /**
     * 
     * platforms: android
     * @type int
     * @since 1.5
     */
    SCREEN_ORIENTATION_NOSENSOR:null,

    /**
     * 
     * platforms: android
     * @type int
     * @since 1.5
     */
    SCREEN_ORIENTATION_PORTRAIT:null,

    /**
     * 
     * platforms: android
     * @type int
     * @since 1.5
     */
    SCREEN_ORIENTATION_SENSOR:null,

    /**
     * 
     * platforms: android
     * @type int
     * @since 1.5
     */
    SCREEN_ORIENTATION_UNSPECIFIED:null,

    /**
     * 
     * platforms: android
     * @type int
     * @since 1.5
     */
    SCREEN_ORIENTATION_USER:null,

    /**
     * <p>Use this constant as the value for audioStreamType to request that the default stream type for notifications be used.</p>
     * platforms: android
     * @type int
     * @since 1.5
     */
    STREAM_DEFAULT:null,

    /**
     * 
     * platforms: android
     * @type int
     * @since 1.5
     */
    URI_INTENT_SCHEME:null,


    /**
     * add an event listener for the instance to receive view triggered events
     * platforms: android
     * @param {string} name name of the event
     * @param {function} callback callback function to invoke when the event is fired
     * @returns void
     * @since 1.5
     */
    addEventListener:function(name, callback) {
    },

    /**
     * <p>Create a {@link Titanium.Android.Intent} to be used to start a Broadcast.</p>
     * platforms: android
     * @since 1.5
     */
    createBroadcastIntent:function() {
    },

    /**
     * <p>Create a {@link Titanium.Android.Intent}. Used to start other Activities and for marshaling data.</p>
     * platforms: android
     * @since 1.5
     */
    createIntent:function() {
    },

    /**
     * <p>Display chooser interface to allow selection of desired target.</p>
     * platforms: android
     * @since 1.5
     */
    createIntentChooser:function() {
    },

    /**
     * <p>Crate a {@link Titanium.Android.Notification}. Used to notify the user of an event.</p>
     * platforms: android
     * @param {object} options Options dictionary
     * @since 1.5
     */
    createNotification:function(options) {
    },

    /**
     * <p>Create a {@link Titanium.Android.PendingIntent} to be used inside a {@link Titanium.Android.Notification}</p>
     * platforms: android
     * @param {{@link Titanium_Android_Intent_html}} intent The Intent that will be executed
     * @param {int} flags (optional, default: 0) Can be any of {@link Titanium.Android.FLAG_CANCEL_CURRENT}, {@link Titanium.Android.FLAG_NO_CREATE}, {@link Titanium.Android.FLAG_ONE_SHOT}, {@link Titanium.Android.FLAG_UPDATE_CURRENT}
     * @since 1.5
     */
    createPendingIntent:function(intent, flags) {
    },

    /**
     * <p>Create a {@link Titanium.Android.Service} so you can start/stop it and listen for events from it.</p>
     * platforms: android
     * @param {{@link Titanium_Android_Intent_html}} intent An Intent created with {@link Titanium.Android.createServiceIntent} which specifies the service to be instantiated.
     * @since 1.5
     */
    createService:function(intent) {
    },

    /**
     * <p>Create an {@link Titanium.Android.Intent} to be used to start a Service.</p>
     * platforms: android
     * @param {object} options Options dictionary -- pass in a <tt>url</tt> option to specify the path to a javascript-based service you create.
     * @since 1.5
     */
    createServiceIntent:function(options) {
    },

    /**
     * fire a synthesized event to the views listener
     * platforms: android
     * @param {string} name name of the event
     * @param {object} event event object
     * @returns void
     * @since 1.5
     */
    fireEvent:function(name, event) {
    },

    /**
     * <p>Check on state of Service.</p>
     * platforms: android
     * @param {{@link Titanium_Android_Intent_html}} intent An Intent created with {@link Titanium.Android.createServiceIntent} which specifies the service to check.
     * @since 1.5
     */
    isServiceRunning:function(intent) {
    },

    /**
     * remove a previously added event listener
     * platforms: android
     * @param {string} name name of the event
     * @param {function} callback callback function passed in addEventListener
     * @returns void
     * @since 1.5
     */
    removeEventListener:function(name, callback) {
    },

    /**
     * <p>Start a simple service</p>
     * platforms: android
     * @param {{@link Titanium_Android_Intent_html}} intent An Intent created with {@link Titanium.Android.createServiceIntent} which specifies the service to start.
     * @returns void
     * @since 1.5
     */
    startService:function(intent) {
    },

    /**
     * <p>Stop a simple service that was started with <tt>startService</tt>.</p>
     * platforms: android
     * @param {{@link Titanium_Android_Intent_html}} intent An Intent created with {@link Titanium.Android.createServiceIntent} which specifies the service to stop.
     * @returns void
     * @since 1.5
     */
    stopService:function(intent) {
    }
}

/**
 * platforms: android
 * @namespace <p>The Titanium binding of an {@link http://developer.android.com/reference/android/app/Activity}</p>
 * @since 1.5
 * 
 * @example Callback example
 * <pre><code>activity.startActivityForResult(intent, function(e) {
    // The request code used to start this Activity
    var requestCode = e.requestCode;
    // The result code returned from the Activity (http://developer.android.com/reference/android/app/Activity.html#StartingActivities)
    var resultCode = e.resultCode;
    // A Titanium.Android.Intent filled with data returned from the Activity
    var intent = e.intent;
    // The Activity the received the result
    var source = e.source;
});
</code></pre>
 */
Ti.Android.Activity = {

    /**
     * <p>The Intent that was used to start this Activity</p>
     * platforms: android
     * @type {@link Titanium_Android_Intent_html}
     * @since 1.5
     */
    intent:null,

    /**
     * <p>A callback function that is called to initially create an Android {@link http://developer.android.com/guide/topics/ui/menus.html#options} for this Activity when the user presses the Menu button. See the menu examples in {@link Titanium.Android.Menu}</p>
     * platforms: android
     * @type function
     * @since 1.5
     */
    onCreateOptionsMenu:null,

    /**
     * <p>A callback function that is called to prepare an {@link http://developer.android.com/guide/topics/ui/menus.html#options} for displaying on this Activity when the user presses the Menu button. See the menu examples in {@link Titanium.Android.Menu}</p>
     * platforms: android
     * @type function
     * @since 1.5
     */
    onPrepareOptionsMenu:null,

    /**
     * <p>The requested orientation of this Activity. See possible constant values that begin with SCREEN_ORIENTATION in the {@link Titanium.Android} module.</p>
     * platforms: android
     * @type int
     * @since 1.5
     */
    requestedOrientation:null,


    /**
     * <p>Called when the activity is done and should be closed. Also see Android's documentation for {@link http://developer.android.com/reference/android/app/Activity.html#finish()}</p>
     * platforms: android
     * @returns void
     * @since 1.5
     */
    finish:function() {
    },

    /**
     * <p>Returns the {@link Titanium.Android.Intent} that was used to start this Activity.</p>
     * platforms: android
     * @since 1.5
     */
    getIntent:function() {
    },

    /**
     * <p>Get an Android or Application string using the passed-in Resource ID and optional format arguments. Also see Android's documentation for {@link http://developer.android.com/reference/android/content/Context.html#getString(int)} and {@link http://developer.android.com/guide/topics/resources/string}</p>
     * platforms: android
     * @param {int} resourceId A Resource ID from the Application or Android.
     * @param {Array<Object>} format Optional format arguments for the String resource
     * @since 1.5
     */
    getString:function(resourceId, format) {
    },

    /**
     * <p>Set the requested Activity orientation. Also see Android's documentation for {@link http://developer.android.com/reference/android/app/Activity.html#setRequestedOrientation(int)}</p>
     * platforms: android
     * @param {int} orientation Can be one of {@link Titanium.Android.SCREEN_ORIENTATION_BEHIND}, {@link Titanium.Android.SCREEN_ORIENTATION_LANDSCAPE}, {@link Titanium.Android.SCREEN_ORIENTATION_NOSENSOR}, {@link Titanium.Android.SCREEN_ORIENTATION_PORTRAIT}, {@link Titanium.Android.SCREEN_ORIENTATION_SENSOR}, {@link Titanium.Android.SCREEN_ORIENTATION_UNSPECIFIED}, {@link Titanium.Android.SCREEN_ORIENTATION_USER}
     * @returns void
     * @since 1.5
     */
    setRequestedOrientation:function(orientation) {
    },

    /**
     * <p>Sets the result of this Activity using an Intent. This should be used in the case when the Activity responds to startActivityForResult. Also see Android's documentation for {@link http://developer.android.com/reference/android/app/Activity.html#setResult(int)}</p>
     * platforms: android
     * @param {int} resultCode The result code for this Activity. Must be one of {@link Titanium.Android.RESULT_OK}, {@link Titanium.Android.RESULT_CANCELED}, {@link Titanium.Android.RESULT_FIRST_USER}
     * @param {{@link Titanium_Android_Intent_html}} intent An optional {@link Titanium.Android.Intent} with extra result data
     * @returns void
     * @since 1.5
     */
    setResult:function(resultCode, intent) {
    },

    /**
     * <p>Starts a new Activity, using the passed in Intent as the description. Also see Android's documentation for {@link http://developer.android.com/reference/android/app/Activity.html#startActivity(android.content.Intent)}</p>
     * platforms: android
     * @param {{@link Titanium_Android_Intent_html}} intent Description of the Activity to start
     * @returns void
     * @since 1.5
     */
    startActivity:function(intent) {
    },

    /**
     * <p>The same as <tt>startActivity</tt>, but also accepts a callback function for handling the result of the started Activity. Also see Android's documentation for {@link http://developer.android.com/reference/android/app/Activity.html#startActivityForResult(android.content.Intent, int)}</p>
     * platforms: android
     * @param {{@link Titanium_Android_Intent_html}} intent Description of the Activity to start
     * @param {function} callback A callback function that is executed when the Activity has set it's result. See example in {@link Titanium.Android.Activity}.
     * @returns void
     * @since 1.5
     */
    startActivityForResult:function(intent, callback) {
    }
}

/**
 * Notes: <p>The API supports retrieving information about existing events and creating new events.  However, modifying or deleting existing events is not yet supported.  Additionally, recurring events are not yet supported.</p>
 * platforms: android
 * @namespace <p>The Android.Calendar module provides proxies and methods for accessing the native Android calendar functionality.</p>
 * @since 1.5
 * 
 * @example All Calendars vs Selectable Calendars
 * <p>Prints the names of all of your calendars known to Android, then prints the names of calendars that you have selected in the native Android calendar application.  The latter could be a subset, because (for example) Android -- via your Google account -- may know about more calendars that you have access to but that you have not selected inside the calendar app.</p>
<pre><code>function showCalendars(calendars) {
    for (var i = 0; i < calendars.length; i++) {
        Ti.API.info(calendars[i].name);
    }
}

Ti.API.info('ALL CALENDARS:');
showCalendars(Ti.Android.Calendar.allCalendars);
Ti.API.info('SELECTABLE CALENDARS:');
showCalendars(Ti.Android.Calendar.selectableCalendars);
</code></pre>
 * 
 * @example Events in a year
 * <p>This example will look at each event in a year for a given calendar.  Just set the desired calendar's id and the desired year to see it in action.  You can see calendar ids by running the example above.</p>
<pre><code>var win = Ti.UI.currentWindow;
var sv = Ti.UI.createScrollView();
win.add(sv);

var console = Ti.UI.createLabel({
    backgroundColor: 'white', color: 'black', text: 'generating info...'
});
sv.add(console);

var consoleString = '';

function print(s) {
    Ti.API.info(s);
    if (consoleString.length > 0) {
        consoleString = consoleString + '';
    }
    consoleString = consoleString + s;
}

// SHOW ALL EVENTS FOR 2010 FOR ONE CALENDAR
var YEAR = 2010;
var TEST_WITH_THIS_CAL_ID = 3;
var calendar = Ti.Android.Calendar.getCalendarById(TEST_WITH_THIS_CAL_ID);

function printReminder(r) {
    var typetext = '[method unknown]';
    if (r.method == Ti.Android.Calendar.METHOD_EMAIL) {
        typetext = 'Email';
    } else if (r.method == Ti.Android.Calendar.METHOD_SMS) {
        typetext = 'SMS';
    } else if (r.method == Ti.Android.Calendar.METHOD_ALERT) {
        typetext = 'Alert';
    } else if (r.method == Ti.Android.Calendar.METHOD_DEFAULT) {
        typetext = '[default reminder method]';
    }
    print(typetext + ' reminder to be sent ' + r.minutes + ' minutes before the event');
}

function printAlert(a) {
    print('Alert id ' + a.id + ' begin ' + a.begin + '; end ' + a.end + '; alarmTime ' + a.alarmTime + '; minutes ' + a.minutes);
}

function printEvent(event) {
    if (event.allDay) {
        print('Event: ' + event.title + '; ' + event.begin.toLocaleDateString() + ' (all day)');
    } else {
        print('Event: ' + event.title + '; ' + event.begin.toLocaleDateString() + ' ' + event.begin.toLocaleTimeString()+ '-' + event.end.toLocaleTimeString());
    }

    var reminders = event.reminders;
    if (reminders && reminders.length) {
        print('There is/are ' + reminders.length + ' reminder(s)');
        for (var i = 0; i < reminders.length; i++) {
            printReminder(reminders[i]);
        }
    }

    print('hasAlarm? ' + event.hasAlarm);
    var alerts = event.alerts;
    if (alerts && alerts.length) {
        for (i = 0; i < alerts.length; i++) {
            printAlert(alerts[i]);
        }
    }

    var status = event.status;
    if (status == Ti.Android.Calendar.STATUS_TENTATIVE) {
        print('This event is tentative');
    }
    if (status == Ti.Android.Calendar.STATUS_CONFIRMED) {
        print('This event is confirmed');
    }
    if (status == Ti.Android.Calendar.STATUS_CANCELED) {
        print('This event was canceled');
    }
}

var events = calendar.getEventsInYear(YEAR);
if (events && events.length) {
    print(events.length + ' event(s) in ' + YEAR);
    print('');
    for (var i = 0; i < events.length; i++) {
        printEvent(events[i]);
        print('');
    }
} else {
    print('No events on 2010-12-6');
}

console.text = consoleString;
</code></pre>
 * 
 * @example Create an Event and Reminder
 * <p>This example creates an event and adds an e-mail reminder for 10 minutes before the event.</p>
<pre><code>var CALENDAR_TO_USE = 3;
var calendar = Ti.Android.Calendar.getCalendarById(CALENDAR_TO_USE);

// Create the event
var eventBegins = new Date(2010, 11, 26, 12, 0, 0);
var eventEnds = new Date(2010, 11, 26, 14, 0, 0);
var details = {
    title: 'Do some stuff',
    description: "I'm going to do some stuff at this time.",
    begin: eventBegins,
    end: eventEnds
};

var event = calendar.createEvent(details);

// Now add a reminder via e-mail for 10 minutes before the event.
var reminderDetails = {
    minutes: 10,
    method: Ti.Android.Calendar.METHOD_EMAIL
};
event.createReminder(reminderDetails);
</code></pre>
 */
Ti.Android.Calendar = {

    /**
     * <p>constant for the {@link Titanium.Android.Calendar.Reminder} method property.</p>
     * platforms: android
     * @type int
     * @since 1.5
     */
    METHOD_ALERT:null,

    /**
     * <p>constant for the {@link Titanium.Android.Calendar.Reminder} method property.</p>
     * platforms: android
     * @type int
     * @since 1.5
     */
    METHOD_DEFAULT:null,

    /**
     * <p>constant for the {@link Titanium.Android.Calendar.Reminder} method property.</p>
     * platforms: android
     * @type int
     * @since 1.5
     */
    METHOD_EMAIL:null,

    /**
     * <p>constant for the {@link Titanium.Android.Calendar.Reminder} method property.</p>
     * platforms: android
     * @type int
     * @since 1.5
     */
    METHOD_SMS:null,

    /**
     * <p>constant for the {@link Titanium.Android.Calendar.Alert} state property.</p>
     * platforms: android
     * @type int
     * @since 1.5
     */
    STATE_DISMISSED:null,

    /**
     * <p>constant for the {@link Titanium.Android.Calendar.Alert} state property.</p>
     * platforms: android
     * @type int
     * @since 1.5
     */
    STATE_FIRED:null,

    /**
     * <p>constant for the {@link Titanium.Android.Calendar.Alert} state property.</p>
     * platforms: android
     * @type int
     * @since 1.5
     */
    STATE_SCHEDULED:null,

    /**
     * <p>constant for the {@link Titanium.Android.Calendar.Event} status property.</p>
     * platforms: android
     * @type int
     * @since 1.5
     */
    STATUS_CANCELED:null,

    /**
     * <p>constant for the {@link Titanium.Android.Calendar.Event} status property.</p>
     * platforms: android
     * @type int
     * @since 1.5
     */
    STATUS_CONFIRMED:null,

    /**
     * <p>constant for the {@link Titanium.Android.Calendar.Event} status property.</p>
     * platforms: android
     * @type int
     * @since 1.5
     */
    STATUS_TENTATIVE:null,

    /**
     * <p>constant for the {@link Titanium.Android.Calendar.Event} visibility property.</p>
     * platforms: android
     * @type int
     * @since 1.5
     */
    VISIBILITY_CONFIDENTIAL:null,

    /**
     * <p>constant for the {@link Titanium.Android.Calendar.Event} visibility property.</p>
     * platforms: android
     * @type int
     * @since 1.5
     */
    VISIBILITY_DEFAULT:null,

    /**
     * <p>constant for the {@link Titanium.Android.Calendar.Event} visibility property.</p>
     * platforms: android
     * @type int
     * @since 1.5
     */
    VISIBILITY_PRIVATE:null,

    /**
     * <p>constant for the {@link Titanium.Android.Calendar.Event} visibility property.</p>
     * platforms: android
     * @type int
     * @since 1.5
     */
    VISIBILITY_PUBLIC:null,

    /**
     * <p>Array of {@link Titanium.Android.Calendar.Alert} objects representing all alerts.</p>
     * platforms: android
     * @type array
     * @since 1.5
     */
    allAlerts:null,

    /**
     * <p>Array of {@link Titanium.Android.Calendar.Calendar} objects representing all the calendars known to the native calendar app.</p>
     * platforms: android
     * @type array
     * @since 1.5
     */
    allCalendars:null,

    /**
     * <p>Array of {@link Titanium.Android.Calendar.Calendar} objects representing calendars selected within the native calendar app. This may be a subset of allCalendars; for example, the native calendar application may know -- via your Gooogle account -- about calendars that you have access to but have not selected to be displayed in the native calendar app.</p>
     * platforms: android
     * @type array
     * @since 1.5
     */
    selectableCalendars:null,


    /**
     * add an event listener for the instance to receive view triggered events
     * platforms: android
     * @param {string} name name of the event
     * @param {function} callback callback function to invoke when the event is fired
     * @returns void
     * @since 1.5
     */
    addEventListener:function(name, callback) {
    },

    /**
     * create and return an instance of {@link Titanium.Android.Calendar.Alert}
     * platforms: android
     * @param {object} parameters (optional) a dictionary object properties defined in {@link Titanium.Android.Calendar.Alert}
     * @since 1.5
     */
    createAlert:function(parameters) {
    },

    /**
     * create and return an instance of {@link Titanium.Android.Calendar.Calendar}
     * platforms: android
     * @param {object} parameters (optional) a dictionary object properties defined in {@link Titanium.Android.Calendar.Calendar}
     * @since 1.5
     */
    createCalendar:function(parameters) {
    },

    /**
     * create and return an instance of {@link Titanium.Android.Calendar.Event}
     * platforms: android
     * @param {object} parameters (optional) a dictionary object properties defined in {@link Titanium.Android.Calendar.Event}
     * @since 1.5
     */
    createEvent:function(parameters) {
    },

    /**
     * create and return an instance of {@link Titanium.Android.Calendar.Reminder}
     * platforms: android
     * @param {object} parameters (optional) a dictionary object properties defined in {@link Titanium.Android.Calendar.Reminder}
     * @since 1.5
     */
    createReminder:function(parameters) {
    },

    /**
     * fire a synthesized event to the views listener
     * platforms: android
     * @param {string} name name of the event
     * @param {object} event event object
     * @returns void
     * @since 1.5
     */
    fireEvent:function(name, event) {
    },

    /**
     * <p>Returns the {@link Titanium.Android.Calendar.Calendar} object specified by the given integer id.</p>
     * platforms: android
     * @param {int} id The system id of the calendar to be retrieved.
     * @since 1.5
     */
    getCalendarById:function(id) {
    },

    /**
     * remove a previously added event listener
     * platforms: android
     * @param {string} name name of the event
     * @param {function} callback callback function passed in addEventListener
     * @returns void
     * @since 1.5
     */
    removeEventListener:function(name, callback) {
    }
}

/**
 * platforms: android
 * @namespace <p>An object which represents a single alert for an event in an Android calendar.</p>
 * @since 1.5
 */
Ti.Android.Calendar.Alert = {

    /**
     * <p>The date/time at which the alert's alarm is triggered.</p>
     * platforms: android
     * @type date
     * @since 1.5
     */
    alarmTime:null,

    /**
     * <p>The date/time at which the corresponding event begins.</p>
     * platforms: android
     * @type date
     * @since 1.5
     */
    begin:null,

    /**
     * <p>The date/time at which the corresponding event ends.</p>
     * platforms: android
     * @type date
     * @since 1.5
     */
    end:null,

    /**
     * <p>The integer id of the event for which the alert is set.</p>
     * platforms: android
     * @type int
     * @since 1.5
     */
    eventId:null,

    /**
     * <p>The id of the alert.</p>
     * platforms: android
     * @type string
     * @since 1.5
     */
    id:null,

    /**
     * <p>The minutes before the event when the alert should trigger.</p>
     * platforms: android
     * @type int
     * @since 1.5
     */
    minutes:null,

    /**
     * <p>The current state of the alert.  Possible values are the STATE_ constants in {@link Titanium.Android.Calendar}.</p>
     * platforms: android
     * @type int
     * @since 1.5
     */
    state:null,



}

/**
 * platforms: android
 * @namespace <p>An object which represents a single calendar in Android.</p>
 * @since 1.5
 * 
 * @example Events on December 5, 2015
 * <p>See {@link Titanium.Android.Calendar} for examples.</p>
 */
Ti.Android.Calendar.Calendar = {

    /**
     * <p>Whether the calendar is hidden.</p>
     * platforms: android
     * @type boolean
     * @since 1.5
     */
    hidden:null,

    /**
     * <p>The id of the calendar.</p>
     * platforms: android
     * @type string
     * @since 1.5
     */
    id:null,

    /**
     * <p>The display name of the calendar.</p>
     * platforms: android
     * @type string
     * @since 1.5
     */
    name:null,

    /**
     * <p>Whether the calendar is selected.</p>
     * platforms: android
     * @type boolean
     * @since 1.5
     */
    selected:null,


    /**
     * <p>Add an event to the calendar. Returns the created {@link Titanium.Android.Calendar.Event}.</p>
     * platforms: android
     * @param {object} properties An object defining the properties of the event.  These correspond to properties of {@link Titanium.Android.Calendar.Event}.
     * @since 1.5
     */
    createEvent:function(properties) {
    },

    /**
     * <p>Returns the {@link Titanium.Android.Calendar.Event} object for the event with the given integer id.</p>
     * platforms: android
     * @param {int} id The integer id of the event to return.
     * @since 1.5
     */
    getEventById:function(id) {
    },

    /**
     * <p>Returns an array of {@link Titanium.Android.Calendar.Event} objects with all events in the given date range.</p>
     * platforms: android
     * @param {date} date1 The start date.
     * @param {date} date2 The end date.
     * @since 1.5
     */
    getEventsBetweenDates:function(date1, date2) {
    },

    /**
     * <p>Returns an array of {@link Titanium.Android.Calendar.Event} objects with all events on the given date.</p>
     * platforms: android
     * @param {int} year The year of the desired date.
     * @param {int} month The month of the desired date.  The month is zero-based, therefore January is 0 and December is 11.
     * @param {int} day The day for which events should be returned.
     * @since 1.5
     */
    getEventsInDate:function(year, month, day) {
    },

    /**
     * <p>Returns an array of {@link Titanium.Android.Calendar.Event} objects with all events in the given month.</p>
     * platforms: android
     * @param {int} year The year of the desired month.
     * @param {int} month The month for which events should be returned.  The month is zero-based, therefore January is 0 and December is 11.
     * @since 1.5
     */
    getEventsInMonth:function(year, month) {
    },

    /**
     * <p>Returns an array of {@link Titanium.Android.Calendar.Event} objects with all events in the given year.</p>
     * platforms: android
     * @param {int} year The year for which all events should be returned.
     * @since 1.5
     */
    getEventsInYear:function(year) {
    }
}

/**
 * Notes: <p>The API supports retrieving information about existing events and creating new events.  However, modifying or deleting existing events is not yet supported.  Additionally, recurring events are not yet supported.</p>
 * platforms: android
 * @namespace <p>An object which represents a single event in an Android calendar.</p>
 * @since 1.5
 * 
 * @example Event API
 * <p>See {@link Titanium.Android.Calendar} for examples of retrieving event information and creating events.</p>
 */
Ti.Android.Calendar.Event = {

    /**
     * <p>An array of {@link Titanium.Android.Calendar.Alert} objects which are the alerts - if any - for this event.</p>
     * platforms: android
     * @type array
     * @since 1.5
     */
    alerts:null,

    /**
     * <p>Whether the event is all day.</p>
     * platforms: android
     * @type boolean
     * @since 1.5
     */
    allDay:null,

    /**
     * <p>The date/time at which the event begins.</p>
     * platforms: android
     * @type date
     * @since 1.5
     */
    begin:null,

    /**
     * <p>The event description.</p>
     * platforms: android
     * @type string
     * @since 1.5
     */
    description:null,

    /**
     * <p>The date/time at which the event ends.</p>
     * platforms: android
     * @type date
     * @since 1.5
     */
    end:null,

    /**
     * <p>An object containing extended properties of the event.</p>
     * platforms: android
     * @type object
     * @since 1.5
     */
    extendedProperties:null,

    /**
     * <p>Whether an alarm is scheduled for the event.</p>
     * platforms: android
     * @type boolean
     * @since 1.5
     */
    hasAlarm:null,

    /**
     * 
     * platforms: android
     * @type boolean
     * @since 1.5
     */
    hasExtendedProperties:null,

    /**
     * <p>The id of the event.</p>
     * platforms: android
     * @type string
     * @since 1.5
     */
    id:null,

    /**
     * <p>The event location.</p>
     * platforms: android
     * @type string
     * @since 1.5
     */
    location:null,

    /**
     * <p>An array of {@link Titanium.Android.Calendar.Reminder} objects which are the reminders - if any - for this event.</p>
     * platforms: android
     * @type array
     * @since 1.5
     */
    reminders:null,

    /**
     * <p>The status of the event.  Possible values are the STATUS constants in {@link Titanium.Android.Calendar}.</p>
     * platforms: android
     * @type int
     * @since 1.5
     */
    status:null,

    /**
     * <p>The title string for the event.</p>
     * platforms: android
     * @type string
     * @since 1.5
     */
    title:null,

    /**
     * <p>The event's visibility.  Possible values are the VISIBILITY constants in {@link Titanium.Android.Calendar}.</p>
     * platforms: android
     * @type int
     * @since 1.5
     */
    visibility:null,


    /**
     * <p>create an alert for this event.  Pass a dictionary object containing attributes corresponding to properties of {@link Titanium.Android.Calendar.Alert}.  Returns the created alert.</p>
     * platforms: android
     * @param {object} data Properties for the new alert, corresponding to properties of {@link Titanium.Android.Calendar.Alert}.
     * @since 1.5
     */
    createAlert:function(data) {
    },

    /**
     * <p>create a reminder for this event.  Pass a dictionary object containing attributes corresponding to properties of {@link Titanium.Android.Calendar.Reminder}.  Returns the created Reminder.</p>
     * platforms: android
     * @param {object} data Properties for the new reminder, corresponding to properties of {@link Titanium.Android.Calendar.Reminder}.
     * @since 1.5
     */
    createReminder:function(data) {
    },

    /**
     * <p>Returns the value of the given extended property key string.</p>
     * platforms: android
     * @param {string} name The name of the extended property whose value should be returned.
     * @since 1.5
     */
    getExtendedProperty:function(name) {
    },

    /**
     * <p>Set the value of the named extended property.</p>
     * platforms: android
     * @param {string} name The name of the extended property whose value should be set.
     * @param {string} value The value to which to set the named extended property.
     * @returns void
     * @since 1.5
     */
    setExtendedProperty:function(name, value) {
    }
}

/**
 * platforms: android
 * @namespace <p>An object which represents a single reminder for an event in an Android calendar.  Reminders should not be created directly, but rather by using the createReminder method of {@link Titanium.Android.Calendar.Event}.</p>
 * @since 1.5
 * 
 * @example Reminder API
 * <p>See {@link Titanium.Android.Calendar} for examples of retrieving reminder information and creating reminders for events.</p>
 */
Ti.Android.Calendar.Reminder = {

    /**
     * <p>The id of the reminder.</p>
     * platforms: android
     * @type string
     * @since 1.5
     */
    id:null,

    /**
     * <p>The reminder method.  Possible values are the METHOD constants in {@link Titanium.Android.Calendar}.</p>
     * platforms: android
     * @type int
     * @since 1.5
     */
    method:null,

    /**
     * <p>The minutes before the event when the reminder should occur.</p>
     * platforms: android
     * @type int
     * @since 1.5
     */
    minutes:null,



}

/**
 * platforms: android
 * @namespace <p>The Titanium binding of an {@link http://developer.android.com/reference/android/content/Intent}</p>
 * @since 1.5
 * 
 * @example Create an Intent for Launching an Activity
 * <pre><code>var intent = Ti.Android.createIntent({
    action: Ti.Android.ACTION_MAIN,
    url: 'activity1.js'
});
intent.addCategory(Ti.Android.CATEGORY_LAUNCHER);
Ti.Android.currentActivity.startActivity(intent);
</code></pre>
 * 
 * @example Create an Intent to get a Contact URI from the user's contacts
 * <pre><code>var intent = Ti.Android.createIntent({
    action: Ti.Android.ACTION_GET_CONTENT,
    type: "vnd.android.cursor.item/phone"
});
</code></pre>
 * 
 * @example Pick a Photo from the Photo Gallery
 * <pre><code>var intent = Ti.Android.createIntent({
    action: Ti.Android.ACTION_PICK,
    type: "image/*"
});
intent.addCategory(Ti.Android.CATEGORY_DEFAULT);
</code></pre>
 */
Ti.Android.Intent = {

    /**
     * <p>An action constant from {@link Titanium.Android}</p>
     * platforms: android
     * @type string
     * @since 1.5
     */
    action:null,

    /**
     * <p>The Java class name of the activity (packageName must also be set)</p>
     * platforms: android
     * @type string
     * @since 1.5
     */
    className:null,

    /**
     * <p>The Intent's Data URI. See also Android's {@link http://developer.android.com/reference/android/content/Intent.html#setData(android.net.Uri)}</p>
     * platforms: android
     * @type string
     * @since 1.5
     */
    data:null,

    /**
     * <p>Intent flags. See the flags constants in {@link Titanium.Android}.</p>
     * platforms: android
     * @type int
     * @since 1.5
     */
    flags:null,

    /**
     * <p>The fully-qualified Java package name of the activity</p>
     * platforms: android
     * @type string
     * @since 1.5
     */
    packageName:null,

    /**
     * <p>The mime type for this Intent. See also Android's {@link http://developer.android.com/reference/android/content/Intent.html#setType(java.lang.String)}</p>
     * platforms: android
     * @type string
     * @since 1.5
     */
    type:null,

    /**
     * <p>The URL to a Titanium Javascript Activity</p>
     * platforms: android
     * @type string
     * @since 1.5
     */
    url:null,


    /**
     * <p>Add a category to this Intent. See the category constants in {@link Titanium.Android}.</p>
     * platforms: android
     * @param {string} name The category name. See the category constants in {@link Titanium.Android}
     * @returns void
     * @since 1.5
     */
    addCategory:function(name) {
    },

    /**
     * <p>augment the existing flags on the Intent.</p>
     * platforms: android
     * @param {int} flags the flags to add to the existing set.
     * @returns void
     * @since 1.5
     */
    addFlags:function(flags) {
    },

    /**
     * <p>Get a boolean property from this Intent</p>
     * platforms: android
     * @param {string} name The boolean property to get
     * @since 1.5
     */
    getBooleanExtra:function(name) {
    },

    /**
     * <p>Get the Data URI from this Intent</p>
     * platforms: android
     * @returns void
     * @since 1.5
     */
    getData:function() {
    },

    /**
     * <p>Get a double property from this Intent</p>
     * platforms: android
     * @param {string} name The double property to get
     * @since 1.5
     */
    getDoubleExtra:function(name) {
    },

    /**
     * <p>Get a int property from this Intent</p>
     * platforms: android
     * @param {string} name The int property to get
     * @since 1.5
     */
    getIntExtra:function(name) {
    },

    /**
     * <p>Get a long property from this Intent</p>
     * platforms: android
     * @param {string} name The long property to get
     * @since 1.5
     */
    getLongExtra:function(name) {
    },

    /**
     * <p>Get a string property from this Intent</p>
     * platforms: android
     * @param {string} name The string property to get
     * @since 1.5
     */
    getStringExtra:function(name) {
    },

    /**
     * <p>Returns whether or not this Intent has a property</p>
     * platforms: android
     * @param {string} name The property name to check for
     * @since 1.5
     */
    hasExtra:function(name) {
    },

    /**
     * <p>Put an extra property on this Intent</p>
     * platforms: android
     * @param {string} name The property name
     * @param {object} value The property value
     * @returns void
     * @since 1.5
     */
    putExtra:function(name, value) {
    },

    /**
     * <p>Put a URI property on this Intent (useful for {@link Titanium.Android.EXTRA_STREAM})</p>
     * platforms: android
     * @param {string} name The property name
     * @param {string} value The URI string
     * @returns void
     * @since 1.5
     */
    putExtraUri:function(name, value) {
    }
}

/**
 * platforms: android
 * @namespace <p>The Titanium binding of an {@link http://developer.android.com/reference/android/view/Menu}</p>
 * @since 1.5
 * 
 * @example Simple menu create
 * <pre><code>activity.onCreateOptionsMenu = function(e) {
    var menu = e.menu;
    var menuItem = menu.add({ title: "Item 1" });
    menuItem.setIcon("item1.png");
    menuItem.addEventListener("click", function(e) {
        Ti.API.debug("I was clicked");
    });
};
</code></pre>
 * 
 * @example Dynamic menu create
 * <pre><code>var win = Ti.UI.createWindow({ fullscreen: true });

var LOGIN = 1, LOGOUT = 2;
var loggedIn = false;
activity.onCreateOptionsMenu = function(e) {
    var menu = e.menu;
    var login = menu.add({ title: "Login", itemId: LOGIN });
    login.setIcon("login.png");
    login.addEventListener("click", function(e) {
        loggedIn = true;
    });
    var logout = menu.add({ title: "Logout", itemId: LOGOUT });
    logout.setIcon("logout.png");
    logout.addEventListener("click", function(e) {
        loggedIn = false;
    });
};

activity.onPrepareOptionsMenu = function(e) {
    var menu = e.menu;
    menu.findItem(LOGIN).setVisible(!loggedIn);
    menu.findItem(LOGOUT).setVisible(loggedIn);
};
win.open();
</code></pre>
 */
Ti.Android.Menu = {

    /**
     * <p>array of {@link Titanium.Android.MenuItem}</p>
     * platforms: android
     * @type array
     * @since 1.5
     */
    items:null,


    /**
     * <p>creates a {@link Titanium.Android.MenuItem} from the passed creation options.</p>
     * platforms: android
     * @param {object} options creation options. Supported options are itemId, groupId, title, and order.
     * @since 1.5
     */
    add:function(options) {
    },

    /**
     * <p>clear all items from the menu. You should release all references you have retained to {@link Titanium.Android.MenuItem} previously created.</p>
     * platforms: android
     * @returns void
     * @since 1.5
     */
    clear:function() {
    },

    /**
     * <p>close the menu if visible</p>
     * platforms: android
     * @returns void
     * @since 1.5
     */
    close:function() {
    },

    /**
     * <p>locate a {@link Titanium.Android.MenuItem}</p>
     * platforms: android
     * @param {object} item integer itemId or {@link Titanium.Android.MenuItem}
     * @since 1.5
     */
    findItem:function(item) {
    },

    /**
     * <p>return the {@link Titanium.Android.MenuItem} at a specific index</p>
     * platforms: android
     * @param {int} index item at index where index < size()
     * @since 1.5
     */
    getItem:function(index) {
    },

    /**
     * <p>query for any visible menu items</p>
     * platforms: android
     * @since 1.5
     */
    hasVisibleItems:function() {
    },

    /**
     * <p>remove all {@link Titanium.Android.MenuItem} with the specified groupId</p>
     * platforms: android
     * @param {int} groupId groupId of items to remove.
     * @returns void
     * @since 1.5
     */
    removeGroup:function(groupId) {
    },

    /**
     * <p>remove a specific {@link Titanium.Android.MenuItem} by the specified itemId</p>
     * platforms: android
     * @param {int} itemId itemId of item to remove.
     * @returns void
     * @since 1.5
     */
    removeItem:function(itemId) {
    },

    /**
     * <p>enable or disable a group of {@link Titanium.Android.MenuItem} by groupId</p>
     * platforms: android
     * @param {int} groupId groupId to enable or disable
     * @param {boolean} enabled true to enable, false to disable.
     * @returns void
     * @since 1.5
     */
    setGroupEnabled:function(groupId, enabled) {
    },

    /**
     * <p>show or hide a group of {@link Titanium.Android.MenuItem} by groupId</p>
     * platforms: android
     * @param {int} groupId groupId to enable or disable
     * @param {boolean} visible true to show, false to hide
     * @returns void
     * @since 1.5
     */
    setGroupVisible:function(groupId, visible) {
    },

    /**
     * <p>number of {@link Titanium.Android.MenuItem} in this menu</p>
     * platforms: android
     * @since 1.5
     */
    size:function() {
    }
}

/**
 * platforms: android
 * @namespace <p>The Titanium binding of an {@link http://developer.android.com/reference/android/view/MenuItem}</p>
 * @since 1.5
 */
Ti.Android.MenuItem = {

    /**
     * <p>set the enabled state of the item</p>
     * platforms: android
     * @type boolean
     * @since 1.5
     */
    enabled:null,

    /**
     * <p>groupId for this item (Read-only)</p>
     * platforms: android
     * @type int
     * @since 1.5
     */
    groupId:null,

    /**
     * <p>itemId for this item (Read-only)</p>
     * platforms: android
     * @type int
     * @since 1.5
     */
    itemId:null,

    /**
     * <p>integer used for controlling sort order (Read-only)</p>
     * platforms: android
     * @type int
     * @since 1.5
     */
    order:null,

    /**
     * <p>item title</p>
     * platforms: android
     * @type string
     * @since 1.5
     */
    title:null,

    /**
     * <p>condensed item title</p>
     * platforms: android
     * @type string
     * @since 1.5
     */
    titleCondensed:null,

    /**
     * <p>set the visible state of the item</p>
     * platforms: android
     * @type boolean
     * @since 1.5
     */
    visible:null,


    /**
     * <p>retrieve the condensed title of the item</p>
     * platforms: android
     * @since 1.5
     */
    getCondensedTitle:function() {
    },

    /**
     * <p>retrieve the groupId for this item</p>
     * platforms: android
     * @since 1.5
     */
    getGroupId:function() {
    },

    /**
     * <p>retrieve the itemId for this item</p>
     * platforms: android
     * @since 1.5
     */
    getItemId:function() {
    },

    /**
     * <p>retrieve the sort order</p>
     * platforms: android
     * @since 1.5
     */
    getOrder:function() {
    },

    /**
     * <p>retrieve the title of the item</p>
     * platforms: android
     * @since 1.5
     */
    getTitle:function() {
    },

    /**
     * <p>retrieve the enabled state of the menu</p>
     * platforms: android
     * @since 1.5
     */
    isEnabled:function() {
    },

    /**
     * <p>retrieve the visible state of the menu</p>
     * platforms: android
     * @since 1.5
     */
    isVisible:function() {
    },

    /**
     * <p>set the condensed title for the item</p>
     * platforms: android
     * @param {string} condensedTitle new condensed title
     * @returns void
     * @since 1.5
     */
    setCondensedTitle:function(condensedTitle) {
    },

    /**
     * <p>set the enabled state of the item</p>
     * platforms: android
     * @param {boolean} enabled true to enable item, false to disable
     * @returns void
     * @since 1.5
     */
    setEnabled:function(enabled) {
    },

    /**
     * <p>set the icon for the item</p>
     * platforms: android
     * @param {object} icon icon to use with the item
     * @returns void
     * @since 1.5
     */
    setIcon:function(icon) {
    },

    /**
     * <p>set the title for the item</p>
     * platforms: android
     * @param {string} title new title
     * @returns void
     * @since 1.5
     */
    setTitle:function(title) {
    },

    /**
     * <p>set the visible state of the item</p>
     * platforms: android
     * @param {boolean} visible true to show the item, false to hide
     * @returns void
     * @since 1.5
     */
    setVisible:function(visible) {
    }
}

/**
 * Notes: <p>If you pass contentTitle and/or contentText into {@link Titanium.Android.createNotification}, then setLatestEventInfo will automatically be called with those properties (there's no need to call it separately unless you want to). You can also use a custom layout.xml wrapped in a {@link Titanium.Android.RemoteViews} object in the contentView property, which gives more fine grained control and customization to how the notification actually behaves.</p>
<p>Also see {@link http://developer.android.com/guide/topics/ui/notifiers/notifications}</p>
 * platforms: android
 * @namespace <p>The Titanium binding of an {@link http://developer.android.com/reference/android/app/Notification}. </p>
 * @since 1.5
 */
Ti.Android.Notification = {

    /**
     * <p>The audio stream type to use when playing the sound.</p>
     * platforms: android
     * @type int
     * @since 1.5
     */
    audioStreamType:null,

    /**
     * <p>The {@link Titanium.Android.PendingIntent} to execute when the expanded status entry is clicked.</p>
     * platforms: android
     * @type object
     * @since 1.5
     */
    contentIntent:null,

    /**
     * <p>Description text of the notification.</p>
     * platforms: android
     * @type string
     * @since 1.5
     */
    contentText:null,

    /**
     * <p>Title of the notification.</p>
     * platforms: android
     * @type string
     * @since 1.5
     */
    contentTitle:null,

    /**
     * <p>Specifies which values should be taken from the defaults.</p>
     * platforms: android
     * @type int
     * @since 1.5
     */
    defaults:null,

    /**
     * <p>The {@link Titanium.Android.PendingIntent} to execute when the status entry is deleted by the user with the "Clear All Notifications" button.</p>
     * platforms: android
     * @type object
     * @since 1.5
     */
    deleteIntent:null,

    /**
     * <p>Set of flags for the notification, defaults to {@link Titanium.Android.FLAG_AUTO_CANCEL}. Possible values: {@link Titanium.Android.FLAG_AUTO_CANCEL}, {@link Titanium.Android.FLAG_INSISTENT}, {@link Titanium.Android.FLAG_NO_CLEAR}, {@link Titanium.Android.FLAG_ONGOING_EVENT}, {@link Titanium.Android.FLAG_ONLY_ALERT_ONCE}, {@link Titanium.Android.FLAG_SHOW_LIGHTS}</p>
     * platforms: android
     * @type int
     * @since 1.5
     */
    flags:null,

    /**
     * <p>A resource id or URL to an icon (the URL must be an image located in Resources/android/images/<density> or an Android content URI)</p>
     * platforms: android
     * @type int, string
     * @since 1.5
     */
    icon:null,

    /**
     * <p>The color for the LED to blink</p>
     * platforms: android
     * @type int
     * @since 1.5
     */
    ledARGB:null,

    /**
     * <p>The number of milliseconds for the LED to be off while it's flashing.</p>
     * platforms: android
     * @type int
     * @since 1.5
     */
    ledOffMS:null,

    /**
     * <p>The number of milliseconds for the LED to be on while it's flashing.</p>
     * platforms: android
     * @type int
     * @since 1.5
     */
    ledOnMS:null,

    /**
     * <p>The number of events that this notification represents.</p>
     * platforms: android
     * @type int
     * @since 1.5
     */
    number:null,

    /**
     * <p>A URL to the sound to play (supports Android + Titanium URLs)</p>
     * platforms: android
     * @type string
     * @since 1.5
     */
    sound:null,

    /**
     * <p>Text to scroll across the screen when this item is added to the status bar.</p>
     * platforms: android
     * @type string
     * @since 1.5
     */
    tickerText:null,

    /**
     * <p>The timestamp for the notification (defaults to the current time)</p>
     * platforms: android
     * @type date, int
     * @since 1.5
     */
    when:null,


    /**
     * <p>Sets the latest event info using the builtin Notification View for this notification. See Android's documentation for {@link http://developer.android.com/reference/android/app/Notification.html#setLatestEventInfo(android.content.Context, java.lang.CharSequence, java.lang.CharSequence, android.app.PendingIntent)}</p>
     * platforms: android
     * @returns void
     * @since 1.5
     */
    setLatestEventInfo:function() {
    }
}

/**
 * Notes: <p>The constants above are taken from {@link http://developer.android.com/reference/android/app/Notification}.</p>
 * platforms: android
 * @namespace <p>Module to notify users of events that happen. It is a thin wrapper on {@link http://developer.android.com/reference/android/app/NotificationManager}.</p>
 * @since 1.5
 */
Ti.Android.NotificationManager = {

    /**
     * <p>Use all default values (where applicable).</p>
     * platforms: android
     * @type int
     * @since 1.5
     */
    DEFAULT_ALL:null,

    /**
     * <p>Use the default notification lights.</p>
     * platforms: android
     * @type int
     * @since 1.5
     */
    DEFAULT_LIGHTS:null,

    /**
     * <p>Use the default notification sound.</p>
     * platforms: android
     * @type int
     * @since 1.5
     */
    DEFAULT_SOUND:null,

    /**
     * <p>Use the default notification vibrate.</p>
     * platforms: android
     * @type int
     * @since 1.5
     */
    DEFAULT_VIBRATE:null,

    /**
     * <p>Bit to be bitwise-ored into the flags field that should be set if the notification should be canceled when it is clicked by the user.</p>
     * platforms: android
     * @type int
     * @since 1.5
     */
    FLAG_AUTO_CANCEL:null,

    /**
     * <p>Bit to be bitwise-ored into the flags field that if set, the audio will be repeated until the notification is cancelled or the notification window is opened.</p>
     * platforms: android
     * @type int
     * @since 1.5
     */
    FLAG_INSISTENT:null,

    /**
     * <p>Bit to be bitwise-ored into the flags field that should be set if the notification should not be canceled when the user clicks the Clear all button.</p>
     * platforms: android
     * @type int
     * @since 1.5
     */
    FLAG_NO_CLEAR:null,

    /**
     * <p>Bit to be bitwise-ored into the flags field that should be set if this notification is in reference to something that is ongoing, like a phone call.</p>
     * platforms: android
     * @type int
     * @since 1.5
     */
    FLAG_ONGOING_EVENT:null,

    /**
     * <p>Bit to be bitwise-ored into the flags field that should be set if you want the sound and/or vibration play each time the notification is sent, even if it has not been canceled before that.</p>
     * platforms: android
     * @type int
     * @since 1.5
     */
    FLAG_ONLY_ALERT_ONCE:null,

    /**
     * <p>Bit to be bitwise-ored into the flags field that should be set if you want the LED on for this notification.</p>
     * platforms: android
     * @type int
     * @since 1.5
     */
    FLAG_SHOW_LIGHTS:null,

    /**
     * <p>Use this constant as the value for audioStreamType to request that the default stream type for notifications be used.</p>
     * platforms: android
     * @type int
     * @since 1.5
     */
    STREAM_DEFAULT:null,


    /**
     * add an event listener for the instance to receive view triggered events
     * platforms: android
     * @param {string} name name of the event
     * @param {function} callback callback function to invoke when the event is fired
     * @returns void
     * @since 1.5
     */
    addEventListener:function(name, callback) {
    },

    /**
     * <p>Cancel a previously shown notification.</p>
     * platforms: android
     * @param {int} id The id you assigned to a notification.
     * @returns void
     * @since 1.5
     */
    cancel:function(id) {
    },

    /**
     * <p>Cancel all previously shown notifications.</p>
     * platforms: android
     * @returns void
     * @since 1.5
     */
    cancelAll:function() {
    },

    /**
     * fire a synthesized event to the views listener
     * platforms: android
     * @param {string} name name of the event
     * @param {object} event event object
     * @returns void
     * @since 1.5
     */
    fireEvent:function(name, event) {
    },

    /**
     * <p>Add a persistent notification to the status bar.</p>
     * platforms: android
     * @param {int} id An id that may be used to cancel a shown notification.
     * @param {{@link Titanium_Android_Notification}} notification An instance of {@link Titanium.Android.Notification} created with {@link Titanium.Android.createNotification}.
     * @returns void
     * @since 1.5
     */
    notify:function(id, notification) {
    },

    /**
     * remove a previously added event listener
     * platforms: android
     * @param {string} name name of the event
     * @param {function} callback callback function passed in addEventListener
     * @returns void
     * @since 1.5
     */
    removeEventListener:function(name, callback) {
    }
}

/**
 * Notes: <p>The type of Intent you choose will effect what kind of PendingIntent is created. Each type corresponds directly with a get method on Android's PendingIntent:</p>
<ul>
<li>{@link Titanium.Android.createIntent} uses {@link http://developer.android.com/reference/android/app/PendingIntent.html#getActivity(android.content.Context, int, android.content.Intent, int)}</li>
<li>{@link Titanium.Android.createBroadcastIntent} uses {@link http://developer.android.com/reference/android/app/PendingIntent.html#getBroadcast(android.content.Context, int, android.content.Intent, int)}</li>
<li>{@link Titanium.Android.createServiceIntent} uses {@link http://developer.android.com/reference/android/app/PendingIntent.html#getService(android.content.Context, int, android.content.Intent, int)}</li>
</ul>
 * platforms: android
 * @namespace <p>The Titanium binding of an {@link http://developer.android.com/reference/android/app/PendingIntent}</p>
 * @since 1.5
 */
Ti.Android.PendingIntent = {

    /**
     * <p>Flags used for creating the Pending Intent. Possible values are {@link Titanium.Android.FLAG_CANCEL_CURRENT}, {@link Titanium.Android.FLAG_NO_CREATE}, {@link Titanium.Android.FLAG_ONE_SHOT}, and {@link Titanium.Android.FLAG_UPDATE_CURRENT}.</p>
     * platforms: android
     * @type int
     * @since 1.5
     */
    flags:null,

    /**
     * <p>The intent data to pass to the Activity launched by this PendingIntent</p>
     * platforms: android
     * @type {@link Titanium_Android_Intent}
     * @since 1.5
     */
    intent:null,



}

/**
 * Notes: <p>These properties and sub-properties are queried directly against the <tt>android.R</tt> class, and should have the same syntax. For example, to retrieve the "OK" string in Android:</p>
<p><tt>Ti.Android.currentActivity.getString(Ti.Android.R.string.ok);</tt></p>
 * platforms: android
 * @namespace <p>The Titanium binding of {@link http://developer.android.com/reference/android/R}.  Note that this accesses Android system-wide resources, not your application's resources.  To access your application's resources, you want {@link Titanium.App.Android.R}.</p>
 * @since 1.5
 */
Ti.Android.R = {

    /**
     * <p>Animation resources, see {@link http://developer.android.com/reference/android/R.anim}</p>
     * platforms: android
     * @type object
     * @since 1.5
     */
    anim:null,

    /**
     * <p>Array resources, see {@link http://developer.android.com/reference/android/R.array}</p>
     * platforms: android
     * @type object
     * @since 1.5
     */
    array:null,

    /**
     * <p>Attribute resources, see {@link http://developer.android.com/reference/android/R.attr}</p>
     * platforms: android
     * @type object
     * @since 1.5
     */
    attr:null,

    /**
     * <p>Color resources, see {@link http://developer.android.com/reference/android/R.color}</p>
     * platforms: android
     * @type object
     * @since 1.5
     */
    color:null,

    /**
     * <p>Dimension resources, see {@link http://developer.android.com/reference/android/R.dimen}</p>
     * platforms: android
     * @type object
     * @since 1.5
     */
    dimen:null,

    /**
     * <p>Drawable resources, see {@link http://developer.android.com/reference/android/R.drawable}</p>
     * platforms: android
     * @type object
     * @since 1.5
     */
    drawable:null,

    /**
     * <p>ID resources, see {@link http://developer.android.com/reference/android/R.id}</p>
     * platforms: android
     * @type object
     * @since 1.5
     */
    id:null,

    /**
     * <p>Integer resources, see {@link http://developer.android.com/reference/android/R.integer}</p>
     * platforms: android
     * @type object
     * @since 1.5
     */
    integer:null,

    /**
     * <p>Layout resources, see {@link http://developer.android.com/reference/android/R.layout}</p>
     * platforms: android
     * @type object
     * @since 1.5
     */
    layout:null,

    /**
     * <p>String resources, see {@link http://developer.android.com/reference/android/R.string}</p>
     * platforms: android
     * @type object
     * @since 1.5
     */
    string:null,

    /**
     * <p>Style resources, see {@link http://developer.android.com/reference/android/R.style}</p>
     * platforms: android
     * @type object
     * @since 1.5
     */
    style:null,

    /**
     * <p>Styleable reosurces, see {@link http://developer.android.com/reference/android/R.styleable}</p>
     * platforms: android
     * @type object
     * @since 1.5
     */
    styleable:null,



}

/**
 * platforms: android
 * @namespace <p>The Titanium binding of {@link http://developer.android.com/reference/android/widget/RemoteViews}. RemoteViews are an API for referencing and updating views that live in another process (i.e. in a {@link Titanium.Android.Notification})</p>
 * @since 1.6
 * 
 * @example Create a RemoteViews based on a custom layout called "custom_layout.xml", and set a label's text.
 * <pre><code>var AppR = Ti.App.Android.R;
var customLayout = Ti.Android.createRemoteViews(AppR.layout.custom_layout);
customLayout.setTextViewText(AppR.id.custom_text, "Hello World");
</code></pre>
 */
Ti.Android.RemoteViews = {


    /**
     * <p>Call a method taking one boolean on a view in the layout for this RemoteViews. See Android's documentation for {@link http://developer.android.com/reference/android/widget/RemoteViews.html#setBoolean(int, java.lang.String, boolean)}</p>
     * platforms: android
     * @param {int} viewId The resource id of the View (also see {@link Titanium.App.Android.R})
     * @param {string} methodName The name of the method to call
     * @param {boolean} value The boolean to pass to the method
     * @returns void
     * @since 1.6
     */
    setBoolean:function(viewId, methodName, value) {
    },

    /**
     * <p>Sets a chronometer's base, format, and started flag. See Android's documentation for {@link http://developer.android.com/reference/android/widget/RemoteViews.html#setChronometer(int, long, java.lang.String, boolean)}</p>
     * platforms: android
     * @param {int} viewId The resource id of the Chronometer whose values will change (also see {@link Titanium.App.Android.R})
     * @param {date} base The time at which the timer would have read 0:00
     * @param {string} format The Chronometer format string, or null to simply display the timer value
     * @param {boolean} started True if you want the clock to be started, false if not
     * @returns void
     * @since 1.6
     */
    setChronometer:function(viewId, base, format, started) {
    },

    /**
     * <p>Call a method taking one double on a view in the layout for this RemoteViews. See Android's documentation for {@link http://developer.android.com/reference/android/widget/RemoteViews.html#setDouble(int, java.lang.String, double)}</p>
     * platforms: android
     * @param {int} viewId The resource id of the View (also see {@link Titanium.App.Android.R})
     * @param {string} methodName The name of the method to call
     * @param {double} value The double to pass to the method
     * @returns void
     * @since 1.6
     */
    setDouble:function(viewId, methodName, value) {
    },

    /**
     * <p>Sets an ImageView's source given a Resource ID. See Android's documentation for {@link http://developer.android.com/reference/android/widget/RemoteViews.html#setImageViewResource(int, int)}</p>
     * platforms: android
     * @param {int} viewId The resource id of the ImageView whose image should change (also see {@link Titanium.App.Android.R})
     * @param {int} srcId The resource id of the image
     * @returns void
     * @since 1.6
     */
    setImageViewResource:function(viewId, srcId) {
    },

    /**
     * <p>Sets an ImageView's source given a URI (supports both Android and Titanium URLs). See Android's documentation for {@link http://developer.android.com/reference/android/widget/RemoteViews.html#setImageViewUri(int, android.net.Uri)}</p>
     * platforms: android
     * @param {int} viewId The resource id of the ImageView whose image should change (also see {@link Titanium.App.Android.R})
     * @param {string} uri The URI of the image (both Android and Titanium URLs are supported)
     * @returns void
     * @since 1.6
     */
    setImageViewUri:function(viewId, uri) {
    },

    /**
     * <p>Call a method taking one int on a view in the layout for this RemoteViews. See Android's documentation for {@link http://developer.android.com/reference/android/widget/RemoteViews.html#setInt(int, java.lang.String, int)}</p>
     * platforms: android
     * @param {int} viewId The resource id of the View (also see {@link Titanium.App.Android.R})
     * @param {string} methodName The name of the method to call
     * @param {int} value The int to pass to the method
     * @returns void
     * @since 1.6
     */
    setInt:function(viewId, methodName, value) {
    },

    /**
     * <p>Launches a {@link Titanium.Android.PendingIntent} when the specified view is clicked. See Android's documentation for {@link http://developer.android.com/reference/android/widget/RemoteViews.html#setOnClickPendingIntent(int, android.app.PendingIntent)}</p>
     * platforms: android
     * @param {int} viewId The resource id of the View to add a click listener to (also see {@link Titanium.App.Android.R})
     * @param {<tt>Ti_Android_PendingIntent</tt>} pendingIntent The PendingIntent to execute when this view is clicked
     * @returns void
     * @since 1.6
     */
    setOnClickPendingIntent:function(viewId, pendingIntent) {
    },

    /**
     * <p>Sets the progress, max value, and indeterminate flag of a ProgressBar. See Android's documentation for {@link http://developer.android.com/reference/android/widget/RemoteViews.html#setProgressBar(int, int, int, boolean)}</p>
     * platforms: android
     * @param {int} viewId The resource id of the ProgressBar to change (also see {@link Titanium.App.Android.R})
     * @param {int} max The new max value of the ProgressBar
     * @param {int} progress The new progress value of the ProgressBar (from 0..max)
     * @param {boolean} indeterminate Whether or not the progress in indeterminate
     * @returns void
     * @since 1.6
     */
    setProgressBar:function(viewId, max, progress, indeterminate) {
    },

    /**
     * <p>Call a method taking one String on a view in the layout for this RemoteViews. See Android's documentation for {@link http://developer.android.com/reference/android/widget/RemoteViews.html#setString(int, java.lang.String, java.lang.String)}</p>
     * platforms: android
     * @param {int} viewId The resource id of the View (also see {@link Titanium.App.Android.R})
     * @param {string} methodName The name of the method to call
     * @param {string} value The String to pass to the method
     * @returns void
     * @since 1.6
     */
    setString:function(viewId, methodName, value) {
    },

    /**
     * <p>Sets the text color of a view. See Android's documentation for {@link http://developer.android.com/reference/android/widget/RemoteViews.html#setTextColor(int, int)}</p>
     * platforms: android
     * @param {int} viewId The resource id of the View whose text color will change (also see {@link Titanium.App.Android.R})
     * @param {int} color A color as an integer
     * @returns void
     * @since 1.6
     */
    setTextColor:function(viewId, color) {
    },

    /**
     * <p>Sets the text of a TextView. See Android's documentation for {@link http://developer.android.com/reference/android/widget/RemoteViews.html#setTextViewText(int, java.lang.CharSequence)}</p>
     * platforms: android
     * @param {int} viewId The resource id of the TextView whose text will change (also see {@link Titanium.App.Android.R})
     * @param {string} text The new text of the TextView
     * @returns void
     * @since 1.6
     */
    setTextViewText:function(viewId, text) {
    },

    /**
     * <p>Call a method taking one Uri on a view in the layout for this RemoteViews. See Android's documentation for {@link http://developer.android.com/reference/android/widget/RemoteViews.html#setUri(int, java.lang.String, android.net.Uri)}</p>
     * platforms: android
     * @param {int} viewId The resource id of the View (also see {@link Titanium.App.Android.R})
     * @param {string} methodName The name of the method to call
     * @param {string} value The URI (as a string) to pass to the method
     * @returns void
     * @since 1.6
     */
    setUri:function(viewId, methodName, value) {
    },

    /**
     * <p>Sets the visibility of a View. See Android's documentation for {@link http://developer.android.com/reference/android/widget/RemoteViews.html#setViewVisibility(int, int)}</p>
     * platforms: android
     * @param {int} viewId The resource id of the View whose visibility will change (also see {@link Titanium.App.Android.R})
     * @param {int} visibility The visibility, one of {@link Titanium.Android.VISIBLE}, {@link Titanium.Android.INVISIBLE}, or {@link Titanium.Android.GONE}
     * @returns void
     * @since 1.6
     */
    setViewVisibility:function(viewId, visibility) {
    }
}

/**
 * platforms: android
 * @namespace <p>The Titanium binding of an {@link http://developer.android.com/reference/android/app/Service}.  Can be used to start/stop the service directly and listen for service-specific events.  In the Javascript-based services you write, this can be referenced with {@link Titanium.Android.currentService}.  You can create an instance of the service with {@link Titanium.Android.createService}.</p>
 * @since 1.5
 * 
 * @example Hello World Service
 * <p>Your service code in its own Javascript file.  It reads the {@link Titanium.Android.Intent} which created it, to see what it should say besides "Hello World".</p>
<p>File: myservice.js:</p>
<pre><code>var service = Titanium.Android.currentService;
var intent = service.intent;
var message = intent.getStringExtra("message_to_echo");
Titanium.API.info("Hello World!  I am a Service.  I have this to say: " + message);
</code></pre>

<p>Register the service in tiapp.xml:</p>
<pre><code><android xmlns:android="http://schemas.android.com/apk/res/android">
    <services>
        <service url="myservice.js" type="interval"/>
    </services>
</android>
</code></pre>

<p>Code in "regular" Titanium file to launch the service and listen for pause/resume events.  Code also stops the service after its code runs 3 times.</p>
<pre><code>var intent = Titanium.Android.createServiceIntent( { url: 'myservice.js' } );
// Service should run its code every 2 seconds.
intent.putExtra('interval', 2000);
// A message that the service should 'echo'
intent.putExtra('message_to_echo', 'Titanium rocks!');

var service = Titanium.Android.createService(intent);
service.addEventListener('resume', function(e) {
    Titanium.API.info('Service code resumes, iteration ' + e.iteration);
});
service.addEventListener('pause', function(e) {
    Titanium.API.info('Service code pauses, iteration ' + e.iteration);
    if (e.iteration === 3) {
        Titanium.API.info('Service code has run 3 times, will now stop it.');
        service.stop();
    }
});
service.start();
</code></pre>

<p>Console Output:</p>
<pre><code>[INFO] [29,1942] Service code resumes, iteration 1
[INFO] [70,2029] Hello World! I am a Service. I have this to say: Titanium rocks!
[INFO] [3,2070] Service code pauses, iteration 1
[INFO] [2,3915] Service code resumes, iteration 2
[INFO] [31,3961] Hello World! I am a Service. I have this to say: Titanium rocks!
[INFO] [5,3968] Service code pauses, iteration 2
[INFO] [2,5917] Service code resumes, iteration 3
[INFO] [27,5961] Hello World! I am a Service. I have this to say: Titanium rocks!
[INFO] [16,5980] Service code pauses, iteration 3
[INFO] [1,5981] Service code has run 3 times, will now stop it.
</code></pre>
 */
Ti.Android.Service = {

    /**
     * <p>(read-only) The {@link Titanium.Android.Intent} used to start or bind to the Service.</p>
     * platforms: android
     * @type {@link Titanium_Android_Intent}
     * @since 1.5
     */
    intent:null,

    /**
     * <p>(read-only) A service can be started more than once -- this number (based on an incrementing integer) indicates which "start number" in the sequence the current service instance is.</p>
     * platforms: android
     * @type int
     * @since 1.5
     */
    serviceInstanceId:null,


    /**
     * <p>Start the Service.  Effective only if this instance of {@link Titanium.Android.Service} was created with {@link Titanium.Android.createService}.</p>
     * platforms: android
     * @returns void
     * @since 1.5
     */
    start:function() {
    },

    /**
     * <p>Stop this running instance of the Service.</p>
     * platforms: android
     * @returns void
     * @since 1.5
     */
    stop:function() {
    }
}

/**
 * platforms: android, iphone, ipad
 * @namespace <p>The top level App module.  The App module is mainly used for accessing information about the application at runtime.</p>
 * @since 0.1
 */
Ti.App = {

    /**
     * <p>the application's copyright</p>
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.1
     */
    copyright:null,

    /**
     * <p>the application's description</p>
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.1
     */
    description:null,

    /**
     * <p>the application's globally unique id (this is system generated and consistent through all versions)</p>
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.1
     */
    guid:null,

    /**
     * <p>the application's app id as specified in Titanium Developer</p>
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.1
     */
    id:null,

    /**
     * <p>property for controlling whether the phone screen will be locked on idle time. Can be set to true to disable the timer</p>
     * platforms: android, iphone, ipad
     * @type boolean
     * @since 0.1
     */
    idleTimerDisabled:null,

    /**
     * <p>the application's name</p>
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.1
     */
    name:null,

    /**
     * <p>a boolean to indicate whether proximity detection is enabled</p>
     * platforms: android, iphone, ipad
     * @type boolean
     * @since 0.1
     */
    proximityDetection:null,

    /**
     * <p>the state of the device's proximity detector</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.1
     */
    proximityState:null,

    /**
     * <p>the application's publisher</p>
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.1
     */
    publisher:null,

    /**
     * <p>the application url</p>
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.1
     */
    url:null,

    /**
     * <p>the application's version</p>
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.1
     */
    version:null,


    /**
     * add an event listener for the instance to receive view triggered events
     * platforms: android, iphone, ipad
     * @param {string} name name of the event
     * @param {function} callback callback function to invoke when the event is fired
     * @returns void
     * @since 0.1
     */
    addEventListener:function(name, callback) {
    },

    /**
     * fire a synthesized event to the views listener
     * platforms: android, iphone, ipad
     * @param {string} name the event name
     * @param {object} data optional data payload for the event. NOTE: you can only pass JSON serializable data since the data must be transportable between contexts.
     * @param {string} name name of the event
     * @param {object} event event object
     * @returns void
     * @since 0.1
     */
    fireEvent:function(name, data, name, event) {
    },

    /**
     * <p>return the arguments passed to the application on startup as a dictionary</p>
     * platforms: android, iphone, ipad
     * @since 0.1
     */
    getArguments:function() {
    },

    /**
     * remove a previously added event listener
     * platforms: android, iphone, ipad
     * @param {string} name name of the event
     * @param {function} callback callback function passed in addEventListener
     * @returns void
     * @since 0.1
     */
    removeEventListener:function(name, callback) {
    }
}

/**
 * platforms: android
 * @namespace <p>A module used to access the Android's {@link http://developer.android.com/guide/topics/resources/index}</p>
 * @since 1.5
 * 
 * @example Custom String Resource
 * <p>In Titanium, you can specify custom Android resources by placing them in <tt>platform/android</tt> under the top directory of your project. For example, to create a custom strings.xml, You could create and populate <tt>platform/android/res/values/mystrings.xml</tt> with the following data:</p>
<pre><code><?xml version="1.0" encoding="utf-8"?>
<resources>
    <string name="mystring">testing 1 2 3</string>
</resources>
</code></pre>

<p>And in Javascript, you could retrieve like this:</p>
<pre><code>var activity = Ti.Android.currentActivity;
var R = Ti.App.Android.R;

var mystring = activity.getString(R.string.mystring);
Ti.API.debug("mystring="+mystring);
</code></pre>
 */
Ti.App.Android = {

    /**
     * <p>The R namespace for Application Resources</p>
     * platforms: android
     * @type {@link Titanium_App_Android_R_html}
     * @since 1.5
     */
    R:null,


    /**
     * add an event listener for the instance to receive view triggered events
     * platforms: android
     * @param {string} name name of the event
     * @param {function} callback callback function to invoke when the event is fired
     * @returns void
     * @since 1.5
     */
    addEventListener:function(name, callback) {
    },

    /**
     * fire a synthesized event to the views listener
     * platforms: android
     * @param {string} name name of the event
     * @param {object} event event object
     * @returns void
     * @since 1.5
     */
    fireEvent:function(name, event) {
    },

    /**
     * remove a previously added event listener
     * platforms: android
     * @param {string} name name of the event
     * @param {function} callback callback function passed in addEventListener
     * @returns void
     * @since 1.5
     */
    removeEventListener:function(name, callback) {
    }
}

/**
 * Notes: <p>These properties and sub-properties are queried directly against your Application's <tt>R</tt> class, and should have the same syntax.  For example, if you have a file <tt>platform/android/res/drawable/icon.png</tt> in your project, you could then access its integer id like this:</p>
<pre><code>var resid = Titanium.App.Android.R.drawable.icon;
</code></pre>
 * platforms: android
 * @namespace <p>The Titanium binding of {@link http://developer.android.com/guide/topics/resources/index}.  This gives you access to resources you have packaged for your own application.  If you want to access the system-wide Android <tt>R</tt>, use {@link Titanium.Android.R}.</p>
 * @since 1.5
 */
Ti.App.Android.R = {



}

/**
 * platforms: iphone, android, ipad
 * @namespace <p>The App Properties module is used for storing application related property/value pairs which persist beyond application sessions.</p>
 * @since 0.5
 * 
 * @example store a property
 * <p>In this example, we store a string property:</p>
<pre><code>Titanium.App.Properties.setString("my_prop","cool");
</code></pre>
 * 
 * @example enumerate over saved properties
 * <p>In this example, we print out all the saved properties to the console:</p>
<pre><code>var props = Titanium.App.Properties.listProperties();
for (var c=0;c<props.length;c++)
{
    var value = Titanium.App.Properties.getString(props[c]);
    Titanium.API.info(props[c]+" = "+value);
}
</code></pre>
 */
Ti.App.Properties = {


    /**
     * add an event listener for the instance to receive view triggered events
     * platforms: iphone, android, ipad
     * @param {string} name name of the event
     * @param {function} callback callback function to invoke when the event is fired
     * @returns void
     * @since 0.5
     */
    addEventListener:function(name, callback) {
    },

    /**
     * fire a synthesized event to the views listener
     * platforms: iphone, android, ipad
     * @param {string} name name of the event
     * @param {object} event event object
     * @returns void
     * @since 0.5
     */
    fireEvent:function(name, event) {
    },

    /**
     * <p>return a boolean value</p>
     * platforms: iphone, android, ipad
     * @param {string} property return a boolean value for property
     * @param {boolean} _default optional default value if property is not found
     * @since 0.5
     */
    getBool:function(property, _default) {
    },

    /**
     * <p>return a double value</p>
     * platforms: iphone, android, ipad
     * @param {string} property return a double value for property
     * @param {double} _default optional default value if property is not found
     * @since 0.5
     */
    getDouble:function(property, _default) {
    },

    /**
     * <p>return an integer value</p>
     * platforms: iphone, android, ipad
     * @param {string} property return a integer value for property
     * @param {int} _default optional default value if property is not found
     * @since 0.5
     */
    getInt:function(property, _default) {
    },

    /**
     * <p>return a value as an array</p>
     * platforms: iphone, android, ipad
     * @param {string} property return an array value for property
     * @param {array} _default optional default value if property is not found
     * @since 0.5
     */
    getList:function(property, _default) {
    },

    /**
     * <p>return a string value</p>
     * platforms: iphone, android, ipad
     * @param {string} property return a string value for property
     * @param {string} _default optional default value if property is not found
     * @since 0.5
     */
    getString:function(property, _default) {
    },

    /**
     * <p>returns true if the property exists</p>
     * platforms: iphone, android, ipad
     * @param {string} property property name to check
     * @since 0.5
     */
    hasProperty:function(property) {
    },

    /**
     * <p>return an array of property propertys</p>
     * platforms: iphone, android, ipad
     * @since 0.5
     */
    listProperties:function() {
    },

    /**
     * remove a previously added event listener
     * platforms: iphone, android, ipad
     * @param {string} name name of the event
     * @param {function} callback callback function passed in addEventListener
     * @returns void
     * @since 0.5
     */
    removeEventListener:function(name, callback) {
    },

    /**
     * <p>remove an existing property</p>
     * platforms: iphone, android, ipad
     * @param {string} property property name to remove
     * @returns void
     * @since 0.5
     */
    removeProperty:function(property) {
    },

    /**
     * <p>set a property as a boolean value</p>
     * platforms: iphone, android, ipad
     * @param {string} property property name
     * @param {boolean} value value
     * @returns void
     * @since 0.5
     */
    setBool:function(property, value) {
    },

    /**
     * <p>set a property as a double value</p>
     * platforms: iphone, android, ipad
     * @param {string} property property name
     * @param {double} value value
     * @returns void
     * @since 0.5
     */
    setDouble:function(property, value) {
    },

    /**
     * <p>set a property as an integer value</p>
     * platforms: iphone, android, ipad
     * @param {string} property property name
     * @param {int} value value
     * @returns void
     * @since 0.5
     */
    setInt:function(property, value) {
    },

    /**
     * <p>set a property as an array value</p>
     * platforms: iphone, android, ipad
     * @param {string} property property name
     * @param {array} value value
     * @returns void
     * @since 0.5
     */
    setList:function(property, value) {
    },

    /**
     * <p>set a property as a string value</p>
     * platforms: iphone, android, ipad
     * @param {string} property property name
     * @param {string} value value
     * @returns void
     * @since 0.5
     */
    setString:function(property, value) {
    }
}

/**
 * platforms: iphone, ipad
 * @namespace <p>The top level App iOS module.  The App iOS module is only available on iOS based devices.</p>
 * @since 1.5
 */
Ti.App.iOS = {


    /**
     * add an event listener for the instance to receive view triggered events
     * platforms: iphone, ipad
     * @param {string} name name of the event
     * @param {function} callback callback function to invoke when the event is fired
     * @returns void
     * @since 1.5
     */
    addEventListener:function(name, callback) {
    },

    /**
     * <p>cancel all scheduled local notifications</p>
     * platforms: iphone, ipad
     * @returns void
     * @since 1.5
     */
    cancelAllLocalNotifications:function() {
    },

    /**
     * <p>cancel a specific local notification</p>
     * platforms: iphone, ipad
     * @returns void
     * @since 1.5
     */
    cancelLocalNotification:function() {
    },

    /**
     * create and return an instance of {@link Titanium.App.iOS.BackgroundService}
     * platforms: iphone, ipad
     * @param {object} parameters (optional) a dictionary object properties defined in {@link Titanium.App.iOS.BackgroundService}
     * @since 1.5
     */
    createBackgroundService:function(parameters) {
    },

    /**
     * create and return an instance of {@link Titanium.App.iOS.LocalNotification}
     * platforms: iphone, ipad
     * @param {object} parameters (optional) a dictionary object properties defined in {@link Titanium.App.iOS.LocalNotification}
     * @since 1.5
     */
    createLocalNotification:function(parameters) {
    },

    /**
     * fire a synthesized event to the views listener
     * platforms: iphone, ipad
     * @param {string} name name of the event
     * @param {object} event event object
     * @returns void
     * @since 1.5
     */
    fireEvent:function(name, event) {
    },

    /**
     * <p>register a background service to run when the app is backgrounded</p>
     * platforms: iphone, ipad
     * @param {object} params dictionary of key/values that are used to create the service. the <tt>url</tt> property should point to a local JavaScript url that will be executed when the app is backgrounded.
     * @since 1.5
     */
    registerBackgroundService:function(params) {
    },

    /**
     * remove a previously added event listener
     * platforms: iphone, ipad
     * @param {string} name name of the event
     * @param {function} callback callback function passed in addEventListener
     * @returns void
     * @since 1.5
     */
    removeEventListener:function(name, callback) {
    },

    /**
     * <p>schedule a local notification</p>
     * platforms: iphone, ipad
     * @param {object} params dictionary of key/values that are used to create the notification. the <tt>date</tt> property is when the notification should fire, <tt>repeat</tt> is an optional property of one of: <tt>weekly</tt>, <tt>daily</tt>, <tt>yearly,</tt> <tt>monthly</tt>, <tt>alertBody</tt> is an optional property that is the body of the alert when the notification is displayed, <tt>alertAction</tt> is an optional property that represents the alert button text or the 'slide to unlock...' slider in place of unlock, <tt>alertLaunchImage</tt> is an optional property that specifies the launch image to display instead of Default.png when launching the application, <tt>badge</tt> is the optional badge value for the application, <tt>sound</tt> is the optional property to specify the sound to play when the notification is triggered and <tt>userInfo</tt> is the optional property which specifies data passed to the application upon launch when the notification is triggered.
     * @since 1.5
     */
    scheduleLocalNotification:function(params) {
    }
}

/**
 * Notes: <p>The background service runs when the Application is placed in the background and will continue to run until the service is stopped with the <tt>stop</tt> method or the <tt>unregister</tt> method.</p>
<p>Stopping a running background service will converse resources while its running in the background. However, if the application is foregrounded and then backgrounded again, it will run again.  If you want to permanently stop running the background service, you must call <tt>unregister</tt>.</p>
 * platforms: iphone, ipad
 * @namespace <p>The BackgroundService is created by {@link Titanium.App.iOS.registerBackgroundService}.<br>
</p>
 * @since 1.5
 */
function Titanium_App_iOS_BackgroundService() {
}
Titanium_App_iOS_BackgroundService.prototype = {


    /**
     * add an event listener for the instance to receive view triggered events
     * platforms: iphone, ipad
     * @param {string} name name of the event
     * @param {function} callback callback function to invoke when the event is fired
     * @returns void
     * @since 1.5
     */
    addEventListener:function(name, callback) {
    },

    /**
     * fire a synthesized event to the views listener
     * platforms: iphone, ipad
     * @param {string} name name of the event
     * @param {object} event event object
     * @returns void
     * @since 1.5
     */
    fireEvent:function(name, event) {
    },

    /**
     * remove a previously added event listener
     * platforms: iphone, ipad
     * @param {string} name name of the event
     * @param {function} callback callback function passed in addEventListener
     * @returns void
     * @since 1.5
     */
    removeEventListener:function(name, callback) {
    },

    /**
     * <p>stop the service from the current background session to conserve resources</p>
     * platforms: iphone, ipad
     * @returns void
     * @since 1.5
     */
    stop:function() {
    },

    /**
     * <p>unregister the background service</p>
     * platforms: iphone, ipad
     * @returns void
     * @since 1.5
     */
    unregister:function() {
    }
}

/**
 * platforms: iphone, ipad
 * @namespace <p>The LocalNotification is created by {@link Titanium.App.iOS.scheduleLocalNotification}.<br>
</p>
 * @since 1.5
 */
function Titanium_App_iOS_LocalNotification() {
}
Titanium_App_iOS_LocalNotification.prototype = {


    /**
     * add an event listener for the instance to receive view triggered events
     * platforms: iphone, ipad
     * @param {string} name name of the event
     * @param {function} callback callback function to invoke when the event is fired
     * @returns void
     * @since 1.5
     */
    addEventListener:function(name, callback) {
    },

    /**
     * <p>cancel the pending notification</p>
     * platforms: iphone, ipad
     * @returns void
     * @since 1.5
     */
    cancel:function() {
    },

    /**
     * fire a synthesized event to the views listener
     * platforms: iphone, ipad
     * @param {string} name name of the event
     * @param {object} event event object
     * @returns void
     * @since 1.5
     */
    fireEvent:function(name, event) {
    },

    /**
     * remove a previously added event listener
     * platforms: iphone, ipad
     * @param {string} name name of the event
     * @param {function} callback callback function passed in addEventListener
     * @returns void
     * @since 1.5
     */
    removeEventListener:function(name, callback) {
    }
}

/**
 * platforms: android, iphone, ipad
 * @namespace <p>The blob is an abstract data type that represents binary information, often obtained through HTTPClient or via files. It often is used to store text or the actual data of an image.</p>
 * @since 0.9
 */
Ti.Blob = {


    /**
     * <p>Generate a thumbnail version of an image, optionally with a border and rounded corners (currently iPhone/iPad only)</p>
     * platforms: android, iphone, ipad
     * @param {int} size the size of the thumbnail, in either width or height
     * @param {int} borderSize the optional width of the thumbnail's border. The default is 1.
     * @param {int} cornerRadius the radius of the thumbnail's corners. The default is 0.
     * @since 0.9
     */
    imageAsThumbnail:function(size, borderSize, cornerRadius) {
    }
}

/**
 * platforms: iphone, android, ipad
 * @namespace <p>Wrapper around {@link Titanium.Blob} that implements the {@link Titanium.IOStream} interface</p>
 * @since 1.7
 */
Ti.BlobStream = {


    /**
     * <p>closes stream and throws exception on error</p>
     * platforms: iphone, android, ipad
     * @returns void
     * @since 1.7
     */
    close:function() {
    },

    /**
     * <p>reads true if stream is readable, false otherwise</p>
     * platforms: iphone, android, ipad
     * @since 1.7
     */
    isReadable:function() {
    },

    /**
     * <p>reads true if stream is writeable, false otherwise</p>
     * platforms: iphone, android, ipad
     * @since 1.7
     */
    isWriteable:function() {
    },

    /**
     * <p>reads data from stream into a buffer.  Optional offset and length arguments to specify position in buffer in whichto start writing the read data, and the amount of data to read.</p>
     * platforms: iphone, android, ipad
     * @param {{@link Titanium_Buffer_html}} buffer buffer to read stream data into
     * @param {Number} offset (Optional) offset to start reading buffer data from
     * @param {Number} length (Optional) length of data to read from buffer
     * @since 1.7
     */
    read:function(buffer, offset, length) {
    },

    /**
     * <p>writes data from buffer to stream. Optional offset and length arguments to specify position in buffer in which to start reading data that is written to the stream, and the length of the data to take from the buffer.</p>
     * platforms: iphone, android, ipad
     * @param {{@link Titanium_Buffer_html}} buffer buffer to write to stream
     * @param {Number} offset (Optional) offset to start writing buffer data from
     * @param {Number} length (Optional) length of data to write from buffer
     * @since 1.7
     */
    write:function(buffer, offset, length) {
    }
}

/**
 * platforms: iphone, android, ipad
 * @namespace <p>Buffer is a container for raw data. A buffer is created by the method {@link Titanium.createBuffer}.</p>
 * @since 1.7
 */
Ti.Buffer = {

    /**
     * <p>The byte order of this buffer. The OS native byte order is used by default.</p>
     * platforms: iphone, android, ipad
     * @type Number
     * @since 1.7
     */
    byteOrder:null,

    /**
     * <p>The length of the buffer in bytes. When <tt>length</tt> is modified the buffer will be re-sized while preserving existing data where possible. If the new buffer length is smaller than the length of the existing data then the existing data will be truncated down to the size of the new buffer.  Resizing the buffer via setting length should be used sparingly due to the associated overhead.</p>
     * platforms: iphone, android, ipad
     * @type Number
     * @since 1.7
     */
    length:null,

    /**
     * <p>The type of data encoding to use with <tt>value</tt>. Required when <tt>value</tt> is a Number. When <tt>value</tt> is a String, {@link Titanium.Codec.CHARSET_UTF8} is the default.</p>
     * platforms: iphone, android, ipad
     * @type String
     * @since 1.7
     */
    type:null,

    /**
     * <p>Data to be encoded. If <tt>value</tt> is a Number, <tt>type</tt> must also be set. (this is simply a convenient way of calling {@link Titanium.Codec.encodeString} or {@link Titanium.Codec.encodeNumber}).</p>
     * platforms: iphone, android, ipad
     * @type Number, String
     * @since 1.7
     */
    value:null,


    /**
     * <p>appends <tt>sourceBuffer</tt> to the current buffer.  Buffer is grown dynamically to accommodate the additional data if need be.  returns the number of bytes appended. Optional offset and length arguments to specify from where in -- and how much of -- source buffer to take.</p>
     * platforms: iphone, android, ipad
     * @param {{@link Titanium_Buffer}} sourceBuffer buffer to append to current buffer
     * @param {Number} sourceOffset (Optional) offset to start reading buffer data from
     * @param {Number} sourceLength (Optional) length of data to read from buffer
     * @since 1.7
     */
    append:function(sourceBuffer, sourceOffset, sourceLength) {
    },

    /**
     * <p>Clears buffer contents but does not change the size of the buffer</p>
     * platforms: iphone, android, ipad
     * @returns void
     * @since 1.7
     */
    clear:function() {
    },

    /**
     * <p>create new copy of the current buffer.  Optional offset and length arguments to specify from where in -- and how much of -- source buffer to take.</p>
     * platforms: iphone, android, ipad
     * @param {Number} offset (Optional) offset of buffer to start clone
     * @param {Number} length (Optional) length of buffer data starting at offset to clone
     * @since 1.7
     */
    clone:function(offset, length) {
    },

    /**
     * <p>copies the contents of <tt>sourceBuffer</tt> into the current buffer at <tt>offset</tt>.  will not expand buffer if there is not enough room in the current buffer to accomodate all the requested data from <tt>sourceBuffer</tt>.  returns the number of bytes copied.  Optional sourceOffset and length arguments to specify from where in -- and how much of -- source buffer to take.</p>
     * platforms: iphone, android, ipad
     * @param {{@link Titanium_Buffer}} sourceBuffer buffer to copy into current buffer
     * @param {Number} offset offset to copy new buffer at
     * @param {Number} sourceOffset (Optional) offset of sourceBuffer to copy data from
     * @param {Number} sourceLength (Optional) length of data from sourceBuffer to copy
     * @since 1.7
     */
    copy:function(sourceBuffer, offset, sourceOffset, sourceLength) {
    },

    /**
     * <p>fills buffer with <tt>fillByte</tt>.  Optional offset and length arguments to specify that filling should occur starting at particular offset and finish when <tt>length</tt> bytes have been written or the end of the buffer is reached.</p>
     * platforms: iphone, android, ipad
     * @param {Number} fillByte byte to fill buffer with
     * @param {Number} offset (Optional) offset of where to start fill
     * @param {Number} length (Optional) number of bytes to fill
     * @returns void
     * @since 1.7
     */
    fill:function(fillByte, offset, length) {
    },

    /**
     * <p>inserts <tt>sourceBuffer</tt> into the current buffer at <tt>offset</tt>.  Buffer is grown to accommodate the new data.  returns the number of bytes inserted.  Optional sourceOffset and length arguments to specify from where in -- and how much of -- source buffer to take.</p>
     * platforms: iphone, android, ipad
     * @param {{@link Titanium_Buffer}} sourceBuffer buffer to insert into current buffer
     * @param {Number} offset offset to insert new buffer at
     * @param {Number} sourceOffset (Optional) offset of sourceBuffer to insert data from
     * @param {Number} sourceLength (Optional) length of data from sourceBuffer to insert
     * @since 1.7
     */
    insert:function(sourceBuffer, offset, sourceOffset, sourceLength) {
    },

    /**
     * <p>Releases the space allocated to the buffer, sets length to 0.  This is effectively the same as <tt>buffer.length = 0</tt></p>
     * platforms: iphone, android, ipad
     * @returns void
     * @since 1.7
     */
    release:function() {
    },

    /**
     * <p>Converts this buffer to a {@link Titanium.Blob}</p>
     * platforms: iphone, android, ipad
     * @since 1.7
     */
    toBlob:function() {
    },

    /**
     * <p>Converts this buffer to a String</p>
     * platforms: iphone, android, ipad
     * @since 1.7
     */
    toString:function() {
    }
}

/**
 * platforms: iphone, android, ipad
 * @namespace <p>Wrapper around {@link Titanium.Buffer} that implements the {@link Titanium.IOStream} interface</p>
 * @since 1.7
 */
Ti.BufferStream = {


    /**
     * <p>closes stream and throws exception on error</p>
     * platforms: iphone, android, ipad
     * @returns void
     * @since 1.7
     */
    close:function() {
    },

    /**
     * <p>reads true if stream is readable, false otherwise</p>
     * platforms: iphone, android, ipad
     * @since 1.7
     */
    isReadable:function() {
    },

    /**
     * <p>reads true if stream is writeable, false otherwise</p>
     * platforms: iphone, android, ipad
     * @since 1.7
     */
    isWriteable:function() {
    },

    /**
     * <p>reads data from stream into a buffer.  Optional offset and length arguments to specify position in buffer in whichto start writing the read data, and the amount of data to read.</p>
     * platforms: iphone, android, ipad
     * @param {{@link Titanium_Buffer}} buffer buffer to read stream data into
     * @param {Number} offset (Optional) offset to start reading buffer data from
     * @param {Number} length (Optional) length of data to read from buffer
     * @since 1.7
     */
    read:function(buffer, offset, length) {
    },

    /**
     * <p>writes data from buffer to stream. Optional offset and length arguments to specify position in buffer in which to start reading data that is written to the stream, and the length of the data to take from the buffer.</p>
     * platforms: iphone, android, ipad
     * @param {{@link Titanium_Buffer}} buffer buffer to write to stream
     * @param {Number} offset (Optional) offset to start writing buffer data from
     * @param {Number} length (Optional) length of data to write from buffer
     * @since 1.7
     */
    write:function(buffer, offset, length) {
    }
}

/**
 * platforms: iphone, android, ipad
 * @namespace <p>A module for converting Numbers and Strings to and from a {@link Titanium.Buffer}.</p>
 * @since 1.7
 * 
 * @example Encoding Numbers
 * <p>Encode a double-precision floating point value in 8 bytes using the OS byte order</p>
<pre><code>var buffer = Ti.createBuffer({ length: 8 });
Ti.Codec.encodeNumber({
  source: 1.23456789,
  dest: buffer,
  type: Ti.Codec.TYPE_DOUBLE
});
</code></pre>

<p>Encode a 4 byte integer to position 10 using BIG_ENDIAN encoding</p>
<pre><code>var buffer = Ti.createBuffer({ length: 100 });
Ti.Codec.encodeNumber({
    source: 0x3456789a,
    dest: buffer,
    position: 10,
    type: Ti.Codec.TYPE_INT,
    byteOrder: Ti.Codec.BIG_ENDIAN
});
</code></pre>
 * 
 * @example Decoding Numbers
 * <p>Decode an 8 byte double-precision floating point number using the OS byte order</p>
<pre><code>var buffer = //...
var value = Ti.Codec.decodeNumber({
    source: buffer,
    type: Ti.Codec.TYPE_DOUBLE
});
</code></pre>

<p>Decode a 4 byte integer from position 10 using BIG_ENDIAN encoding</p>
<pre><code>var buffer = //...
var value = Ti.Codec.decodeNumber({
  source: buffer,
  position: 10,
  type: Ti.Codec.TYPE_INT,
  byteOrder: Ti.Codec.BIG_ENDIAN
});
</code></pre>
 * 
 * @example Encoding Strings
 * <p>Encode and trim a simple String using the UTF-8 (default) charset</p>
<pre><code>var buffer = Ti.createBuffer({ length: 1024 });
var length = Ti.Codec.encodeString({
    source: "hello world",
    dest: buffer
});
buffer.length = length;
</code></pre>

<p>Encode the first 10 characters of a String using the UTF-16 charset</p>
<pre><code>// (10 * 2) + BOM = 22
var buffer = Ti.createBuffer({ length: 22 });
Ti.Codec.encodeString({
    source: "jack jumped over the candle stick",
    sourceLength: 10,
    dest: buffer,
    charset: Ti.Codec.CHARSET_UTF16
});
</code></pre>
 * 
 * @example Decoding Strings
 * <p>Decode a String using the UTF-8 (default) charset</p>
<pre><code>var buffer = //...
var string = Ti.Codec.decodeString({ source: buffer });
</code></pre>

<p>Decode a string using the UTF-16 charset
var buffer = //...
var string = Ti.Codec.decodeString({
  source: buffer,
  charset: Ti.Codec.CHARSET_UTF16
});
~~~</p>
 */
Ti.Codec = {

    /**
     * <p>Big Endian (network) byte order, i.e. most significant byte first.</p>
     * platforms: iphone, android, ipad
     * @type Number
     * @since 1.7
     */
    BIG_ENDIAN:null,

    /**
     * <p>The {@link http://en.wikipedia.org/wiki/ASCII}</p>
     * platforms: iphone, android, ipad
     * @type String
     * @since 1.7
     */
    CHARSET_ASCII:null,

    /**
     * <p>The {@link http://en.wikipedia.org/wiki/ISO/IEC_8859}</p>
     * platforms: iphone, android, ipad
     * @type String
     * @since 1.7
     */
    CHARSET_ISO_LATIN1:null,

    /**
     * <p>The {@link http://en.wikipedia.org/wiki/UTF}</p>
     * platforms: iphone, android, ipad
     * @type String
     * @since 1.7
     */
    CHARSET_UTF16:null,

    /**
     * <p>The {@link http://en.wikipedia.org/wiki/UTF} with Big Endian byte order</p>
     * platforms: iphone, android, ipad
     * @type String
     * @since 1.7
     */
    CHARSET_UTF16BE:null,

    /**
     * <p>The {@link http://en.wikipedia.org/wiki/UTF} with Little Endian byte order</p>
     * platforms: iphone, android, ipad
     * @type String
     * @since 1.7
     */
    CHARSET_UTF16LE:null,

    /**
     * <p>The {@link http://en.wikipedia.org/wiki/UTF}</p>
     * platforms: iphone, android, ipad
     * @type String
     * @since 1.7
     */
    CHARSET_UTF8:null,

    /**
     * <p>Little Endian byte order, i.e. least significant byte first.</p>
     * platforms: iphone, android, ipad
     * @type Number
     * @since 1.7
     */
    LITTLE_ENDIAN:null,

    /**
     * <p>8 bit integer encoding type</p>
     * platforms: iphone, android, ipad
     * @type String
     * @since 1.7
     */
    TYPE_BYTE:null,

    /**
     * <p>64 bit double precision floating-point type</p>
     * platforms: iphone, android, ipad
     * @type String
     * @since 1.7
     */
    TYPE_DOUBLE:null,

    /**
     * <p>32 bit single precision floating-point type</p>
     * platforms: iphone, android, ipad
     * @type String
     * @since 1.7
     */
    TYPE_FLOAT:null,

    /**
     * <p>32 bit integer encoding type</p>
     * platforms: iphone, android, ipad
     * @type String
     * @since 1.7
     */
    TYPE_INT:null,

    /**
     * <p>64 bit integer encoding type</p>
     * platforms: iphone, android, ipad
     * @type String
     * @since 1.7
     */
    TYPE_LONG:null,

    /**
     * <p>16 bit integer encoding type</p>
     * platforms: iphone, android, ipad
     * @type String
     * @since 1.7
     */
    TYPE_SHORT:null,


    /**
     * add an event listener for the instance to receive view triggered events
     * platforms: iphone, android, ipad
     * @param {string} name name of the event
     * @param {function} callback callback function to invoke when the event is fired
     * @returns void
     * @since 1.7
     */
    addEventListener:function(name, callback) {
    },

    /**
     * <p>Decodes the <tt>source</tt> buffer (starting at the optional <tt>position</tt>) into a number using the passed in data <tt>type</tt>.  Throws an Exception if <tt>source</tt> is null, or <tt>position</tt> is greater than <tt>source.length</tt></p>
     * platforms: iphone, android, ipad
     * @param {Object} options decodeNumber named options.  These are: <tt>source</tt>, the {@link Titanium.Buffer} to decode.  <tt>type</tt>, the encoding type to use, which must be one of {@link Titanium.Codec.TYPE_BYTE}, {@link Titanium.Codec.TYPE_SHORT}, {@link Titanium.Codec.TYPE_INT}, {@link Titanium.Codec.TYPE_FLOAT}, {@link Titanium.Codec.TYPE_LONG}, or {@link Titanium.Codec.TYPE_DOUBLE}.  <tt>position</tt>, the position in <tt>source</tt> to start at (optional, default is 0).  <tt>byteOrder</tt>, the byte order to decode with (optional, default is {@link Titanium.Codec.getNativeByteOrder}).
     * @since 1.7
     */
    decodeNumber:function(options) {
    },

    /**
     * <p>Decodes the <tt>source</tt> buffer into a String starting at <tt>position</tt>, with <tt>length</tt> bytes, using the supplied character set <tt>charset</tt>. Throws an Exception if <tt>charset</tt> is not a valid character set, <tt>source</tt> is null, or either <tt>position</tt>, <tt>length</tt>, or <tt>position</tt>+<tt>length</tt> is greater than <tt>source.length</tt>.</p>
     * platforms: iphone, android, ipad
     * @param {Object} options decodeString named options.  These are: <tt>source</tt>, the {@link Titanium.Buffer} to decode.  <tt>position</tt>, the position to start decoding (optional, default is 0).  <tt>length</tt>, the number of bytes to decode (optional, default is the length of the source buffer).  <tt>charset</tt>, the character set to decode from (optional, default is {@link Titanium.Codec.CHARSET_UTF8}).
     * @since 1.7
     */
    decodeString:function(options) {
    },

    /**
     * <p>Encodes the Number <tt>source</tt> into <tt>dest</tt> using the passed in data <tt>type</tt>.  Returns the position after the encoded number in <tt>dest</tt>.'</p>
     * platforms: iphone, android, ipad
     * @param {Object} options encodeNumber named options.  These are: <tt>source</tt>, the number to be encoded.  <tt>dest</tt>, the destination {@link Titanium.Buffer} into which the encoded number will be written.  <tt>type</tt>, the encoding type to use, which must be one of {@link Titanium.Codec.TYPE_BYTE}, {@link Titanium.Codec.TYPE_SHORT}, {@link Titanium.Codec.TYPE_INT}, {@link Titanium.Codec.TYPE_FLOAT}, {@link Titanium.Codec.TYPE_LONG}, or {@link Titanium.Codec.TYPE_DOUBLE}.  <tt>position</tt>, the position in dest to set the encoded data (optional, default is 0).  <tt>byteOrder</tt>, the byte order to encode with (optional, default is {@link Titanium.Codec.getNativeByteOrder}).
     * @since 1.7
     */
    encodeNumber:function(options) {
    },

    /**
     * <p>Encodes the String <tt>source</tt> into <tt>dest</tt> using <tt>charset</tt>. Returns the position after the encoded String inside <tt>dest</tt>.' Throws an Exception if <tt>charset</tt> is not a valid character set, <tt>source</tt> is null, or either <tt>sourcePosition</tt>, <tt>sourceLength</tt>, or <tt>sourcePosition</tt>+<tt>sourceLength</tt> is greater than <tt>source.length</tt>.</p>
     * platforms: iphone, android, ipad
     * @param {Object} options encodeString named options.  These are: <tt>source</tt>, the source string to encode.  <tt>dest</tt>, the destination {@link Titanium.Buffer}.  <tt>destPosition</tt>, the position in <tt>dest</tt> to set the encoded string (optional, default is 0).  <tt>sourcePosition</tt>, the position in <tt>source</tt> to start encoding (optional, default is 0).  <tt>sourceLength</tt>, the number of characters in <tt>source</tt> to encode (optional, default is the length of the source).  <tt>charset</tt>, the character set to use when encoding this string to bytes (optional, default is {@link Titanium.Codec.CHARSET_UTF8}).
     * @since 1.7
     */
    encodeString:function(options) {
    },

    /**
     * fire a synthesized event to the views listener
     * platforms: iphone, android, ipad
     * @param {string} name name of the event
     * @param {object} event event object
     * @returns void
     * @since 1.7
     */
    fireEvent:function(name, event) {
    },

    /**
     * <p>Get the OS native byte order (either {@link Titanium.Codec.BIG_ENDIAN} or {@link Titanium.Codec.LITTLE_ENDIAN})</p>
     * platforms: iphone, android, ipad
     * @since 1.7
     */
    getNativeByteOrder:function() {
    },

    /**
     * remove a previously added event listener
     * platforms: iphone, android, ipad
     * @param {string} name name of the event
     * @param {function} callback callback function passed in addEventListener
     * @returns void
     * @since 1.7
     */
    removeEventListener:function(name, callback) {
    }
}

/**
 * Notes: <p>Contacts on Android are currently only read-only, so methods such as <tt>createPerson</tt>, <tt>removePerson</tt>, etc., are not supported.</p>
<p>{@link Titanium.Contacts.Person} objects which have been removed from the database are invalidated after a save operation, whether from creating a new contact or explicitly calling {@link Titanium.Contacts.save()}.  Using them may result in unpredictable beavhior, including crashes.</p>
 * platforms: iphone, ipad, android
 * @namespace <p>The top level Contacts module.  The Contacts module is used accessing the device Address Book.  (Read-only on Android.)</p>
 * @since 0.8
 */
Ti.Contacts = {

    /**
     * <p>constant for 'organization' kind property of Person object</p>
     * platforms: iphone, ipad, android
     * @type int
     * @since 0.8
     */
    CONTACTS_KIND_ORGANIZATION:null,

    /**
     * <p>constant for 'person' kind property of Person object</p>
     * platforms: iphone, ipad, android
     * @type int
     * @since 0.8
     */
    CONTACTS_KIND_PERSON:null,

    /**
     * <p>constant for sorting group members by first name</p>
     * platforms: iphone, ipad, android
     * @type int
     * @since 0.8
     */
    CONTACTS_SORT_FIRST_NAME:null,

    /**
     * <p>constant for sorting group members by last name</p>
     * platforms: iphone, ipad, android
     * @type int
     * @since 0.8
     */
    CONTACTS_SORT_LAST_NAME:null,


    /**
     * add an event listener for the instance to receive view triggered events
     * platforms: iphone, ipad, android
     * @param {string} name name of the event
     * @param {function} callback callback function to invoke when the event is fired
     * @returns void
     * @since 0.8
     */
    addEventListener:function(name, callback) {
    },

    /**
     * create and return an instance of {@link Titanium.Contacts.Group}
     * platforms: iphone, ipad, android
     * @param {object} parameters (optional) a dictionary object properties defined in {@link Titanium.Contacts.Group}
     * @since 0.8
     */
    createGroup:function(parameters) {
    },

    /**
     * create and return an instance of {@link Titanium.Contacts.Person}
     * platforms: iphone, ipad, android
     * @param {object} parameters (optional) a dictionary object properties defined in {@link Titanium.Contacts.Person}
     * @since 0.8
     */
    createPerson:function(parameters) {
    },

    /**
     * fire a synthesized event to the views listener
     * platforms: iphone, ipad, android
     * @param {string} name name of the event
     * @param {object} event event object
     * @returns void
     * @since 0.8
     */
    fireEvent:function(name, event) {
    },

    /**
     * <p>Returns an of all {@link Titanium.Contacts.Group} objects in the contacts database</p>
     * platforms: iphone, ipad, android
     * @returns void
     * @since 0.8
     */
    getAllGroups:function() {
    },

    /**
     * <p>Returns an array of all {@link Titanium.Contacts.Person} objects in the contacts database</p>
     * platforms: iphone, ipad, android
     * @returns void
     * @since 0.8
     */
    getAllPeople:function() {
    },

    /**
     * <p>Returns a {@link Titanium.Contacts.Group} object with the given ID</p>
     * platforms: iphone, ipad, android
     * @param {int} id The database ID of the group to retrieve
     * @since 0.8
     */
    getGroupByID:function(id) {
    },

    /**
     * <p>Returns an array of {@link Titanium.Contacts.Person} objects who have a name (first, last, middle, composite) which matches the given name</p>
     * platforms: iphone, ipad, android
     * @param {string} name The name to match in the database
     * @since 0.8
     */
    getPeopleWithName:function(name) {
    },

    /**
     * <p>Returns a {@link Titanium.Contacts.Person} object with the given ID</p>
     * platforms: iphone, ipad, android
     * @param {int} id The database ID of the person to retrieve
     * @since 0.8
     */
    getPersonByID:function(id) {
    },

    /**
     * remove a previously added event listener
     * platforms: iphone, ipad, android
     * @param {string} name name of the event
     * @param {function} callback callback function passed in addEventListener
     * @returns void
     * @since 0.8
     */
    removeEventListener:function(name, callback) {
    },

    /**
     * <p>Removes a group from the contacts database (NOTE: not supported on Android.)</p>
     * platforms: iphone, ipad, android
     * @param {object} group The {@link Titanium.Contacts.Group} object to remove from the database. (NOTE: not supported on Android.)
     * @returns void
     * @since 0.8
     */
    removeGroup:function(group) {
    },

    /**
     * <p>Removes a person from the contacts database. (NOTE: not supported on Android.)</p>
     * platforms: iphone, ipad, android
     * @param {object} person The {@link Titanium.Contacts.Person} object to remove from the database. (NOTE: not supported on Android.)
     * @returns void
     * @since 0.8
     */
    removePerson:function(person) {
    },

    /**
     * <p>Reverts all changes made to the previous save of the database (NOTE: not supported on Android.)</p>
     * platforms: iphone, ipad, android
     * @returns void
     * @since 0.8
     */
    revert:function() {
    },

    /**
     * <p>Saves all changes to contacts to the database (NOTE: not supported on Android.)</p>
     * platforms: iphone, ipad, android
     * @returns void
     * @since 0.8
     */
    save:function() {
    },

    /**
     * <p>Displays the contact picker</p>
     * platforms: iphone, ipad, android
     * @param {function} cancel The function to call when selection is cancelled
     * @param {function} selectedPerson The function to call when a person is selected.  Mutually exclusive with <tt>selectedProperty</tt>
     * @param {function} selectedProperty The function to call when a property is selected.  Mutally exclusive with <tt>selectedPerson</tt>
     * @param {boolean} animated Whether or not to animate the show/hide of the contacts picker
     * @param {array} fields A list of field names to show when selecting properties, default is to show all available
     * @returns void
     * @since 0.8
     */
    showContacts:function(cancel, selectedPerson, selectedProperty, animated, fields) {
    }
}

/**
 * platforms: iphone, ipad
 * @namespace <p>An object which represents a group in the contacts database.</p>
 * @since 1.4.0
 */
Ti.Contacts.Group = {

    /**
     * <p>The name of the group</p>
     * platforms: iphone, ipad
     * @type string
     * @since 1.4.0
     */
    name:null,


    /**
     * <p>Adds a person to the group</p>
     * platforms: iphone, ipad
     * @param {object} person {@link Titanium.Contacts.Person} object to remove from the group
     * @returns void
     * @since 1.4.0
     */
    add:function(person) {
    },

    /**
     * <p>The complete list of members of the group</p>
     * platforms: iphone, ipad
     * @returns void
     * @since 1.4.0
     */
    members:function() {
    },

    /**
     * <p>Removes a person from the group</p>
     * platforms: iphone, ipad
     * @param {object} person {@link Titanium.Contacts.Person} object to remove from the group
     * @returns void
     * @since 1.4.0
     */
    remove:function(person) {
    },

    /**
     * <p>A list of sorted members</p>
     * platforms: iphone, ipad
     * @param {int} sortBy Method for sorting.  Must be one of  {@link Titanium.Contacts.CONTACTS_SORT_FIRST_NAME} or {@link Titanium.Contacts.CONTACTS_SORT_LAST_NAME}
     * @returns void
     * @since 1.4.0
     */
    sortedMembers:function(sortBy) {
    }
}

/**
 * Notes: <p>There are two kinds of properties: single value and multivalue.  Single value properties are returned as a direct value, while mutlivalue properties are returned as dictionary objects with keys which represent labels of the property, with values that are arrays of all values in the property which correspond to that label (e.g. {"home" : [address1, address2]})</p>
 * platforms: iphone, ipad
 * @namespace <p>An object which represents a person in the contacts database.</p>
 * @since 0.8
 */
Ti.Contacts.Person = {

    /**
     * <p>URLs of webpages associated with the person.  Multi-value, valid labels are: <tt>home</tt>, <tt>work</tt>, <tt>other</tt>, <tt>homepage</tt>.  Values are strings.</p>
     * platforms: iphone, ipad
     * @type object
     * @since 0.8
     */
    URL:null,

    /**
     * <p>The addresses for the person.  Multi-value, valid labels are: <tt>home</tt>, <tt>work</tt>, <tt>other</tt>.  Values are dictionaries.</p>
     * platforms: iphone, ipad
     * @type object
     * @since 0.8
     */
    address:null,

    /**
     * <p>The birthday of the person.  Single value, format is "yyyy-MM-dd'T'HH:mm:ss'.'SSS+0000"</p>
     * platforms: iphone, ipad
     * @type string
     * @since 0.8
     */
    birthday:null,

    /**
     * <p>The date the person was created in the database.  Single value, format is "yyyy-MM-dd'T'HH:mm:ss'.'SSS+0000", read-only</p>
     * platforms: iphone, ipad
     * @type string
     * @since 0.8
     */
    created:null,

    /**
     * <p>Dates associated with the person.  Multi-value, valid labels are: <tt>anniversary</tt>.  Values are strings of format "yyyy-MM-dd'T'HH:mm:ss'.'SSS+0000"</p>
     * platforms: iphone, ipad
     * @type object
     * @since 0.8
     */
    date:null,

    /**
     * <p>The department of the person.  Single value</p>
     * platforms: iphone, ipad
     * @type string
     * @since 0.8
     */
    department:null,

    /**
     * <p>The email addresses for the person.  Multi-value, valid labels are: <tt>home</tt>, <tt>work</tt>, <tt>other</tt>.  Values are strings.</p>
     * platforms: iphone, ipad
     * @type object
     * @since 0.8
     */
    email:null,

    /**
     * <p>The first name of the person.  Single value</p>
     * platforms: iphone, ipad
     * @type string
     * @since 0.8
     */
    firstName:null,

    /**
     * <p>The phonetic first name of the person.  Single value</p>
     * platforms: iphone, ipad
     * @type string
     * @since 0.8
     */
    firstPhonetic:null,

    /**
     * <p>The localized full name of the person.  Single value, read-only</p>
     * platforms: iphone, ipad
     * @type string
     * @since 0.8
     */
    fullName:null,

    /**
     * <p>A blob object representing the image for the person.  Set to <tt>null</tt> to remove the image.  Single value</p>
     * platforms: iphone, ipad
     * @type object
     * @since 0.8
     */
    image:null,

    /**
     * <p>The instant messenger names for the person.  Multi-value, valid labels are: <tt>aim</tt>, <tt>icq</tt>, <tt>jabber</tt>, <tt>msn</tt>, <tt>yahoo</tt>.  Values are dictionaries.</p>
     * platforms: iphone, ipad
     * @type object
     * @since 0.8
     */
    instantMessage:null,

    /**
     * <p>The job title of the person.  Single value</p>
     * platforms: iphone, ipad
     * @type string
     * @since 0.8
     */
    jobTitle:null,

    /**
     * <p>The kind of person.  Single value, one of {@link Titanium.Contacts.CONTACTS_KIND_PERSON} or {@link Titanium.Contacts.CONTACTS_KIND_ORGANIZATION}</p>
     * platforms: iphone, ipad
     * @type int
     * @since 0.8
     */
    kind:null,

    /**
     * <p>The last name of the person.  Single value</p>
     * platforms: iphone, ipad
     * @type string
     * @since 0.8
     */
    lastName:null,

    /**
     * <p>The phonetic last name of the person.  Single value</p>
     * platforms: iphone, ipad
     * @type string
     * @since 0.8
     */
    lastPhonetic:null,

    /**
     * <p>The middle name of the person.  Single value</p>
     * platforms: iphone, ipad
     * @type string
     * @since 0.8
     */
    middleName:null,

    /**
     * <p>The phonetic middle name of the person.  Single value</p>
     * platforms: iphone, ipad
     * @type string
     * @since 0.8
     */
    middlePhonetic:null,

    /**
     * <p>The most recent date the person was modified.  Single value, format is "yyyy-MM-dd'T'HH:mm:ss'.'SSS+0000", read-only</p>
     * platforms: iphone, ipad
     * @type string
     * @since 0.8
     */
    modified:null,

    /**
     * <p>The nickname of the person.  Single value</p>
     * platforms: iphone, ipad
     * @type string
     * @since 0.8
     */
    nickname:null,

    /**
     * <p>Notes for the person.  Single value</p>
     * platforms: iphone, ipad
     * @type string
     * @since 0.8
     */
    note:null,

    /**
     * <p>The organization the person belongs to.  Single value</p>
     * platforms: iphone, ipad
     * @type string
     * @since 0.8
     */
    organization:null,

    /**
     * <p>The phone numbers for the person.  Multi-value, valid labels are: <tt>home</tt>, <tt>work</tt>, <tt>other</tt>, <tt>mobile</tt>, <tt>pager</tt>, <tt>workFax</tt>, <tt>homeFax</tt>, <tt>main</tt>, <tt>iPhone</tt>.  Values are strings.</p>
     * platforms: iphone, ipad
     * @type object
     * @since 0.8
     */
    phone:null,

    /**
     * <p>The prefix for the person.  Single value</p>
     * platforms: iphone, ipad
     * @type string
     * @since 0.8
     */
    prefix:null,

    /**
     * <p>The names of people the person is related to.  Multi-value, valid labels are: <tt>mother</tt>, <tt>father</tt>, <tt>parent</tt>, <tt>sister</tt>, <tt>brother</tt>, <tt>child</tt>, <tt>friend</tt>, <tt>spouse</tt>, <tt>partner</tt>, <tt>manager</tt>, <tt>assistant</tt>.  Values are strings.</p>
     * platforms: iphone, ipad
     * @type object
     * @since 0.8
     */
    relatedNames:null,

    /**
     * <p>The suffix for the person.  Single value</p>
     * platforms: iphone, ipad
     * @type string
     * @since 0.8
     */
    suffix:null,



}

/**
 * platforms: android, iphone, ipad
 * @namespace <p>The top level Database module.  The Database module is used for creating and accessing the in-application Database. </p>
 * @since 0.1
 */
Ti.Database = {

    /**
     * <p>constant for requesting a column's value returned in double form.</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.1
     */
    FIELD_TYPE_DOUBLE:null,

    /**
     * <p>constant for requesting a column's value returned in float form.</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.1
     */
    FIELD_TYPE_FLOAT:null,

    /**
     * <p>constant for requesting a column's value returned in integer form.</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.1
     */
    FIELD_TYPE_INT:null,

    /**
     * <p>constant for requesting a column's value returned in string form.</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.1
     */
    FIELD_TYPE_STRING:null,


    /**
     * add an event listener for the instance to receive view triggered events
     * platforms: android, iphone, ipad
     * @param {string} name name of the event
     * @param {function} callback callback function to invoke when the event is fired
     * @returns void
     * @since 0.1
     */
    addEventListener:function(name, callback) {
    },

    /**
     * fire a synthesized event to the views listener
     * platforms: android, iphone, ipad
     * @param {string} name name of the event
     * @param {object} event event object
     * @returns void
     * @since 0.1
     */
    fireEvent:function(name, event) {
    },

    /**
     * <p>install a database from the application Resources folder (at build time) and return a reference to the opened database. it is safe to call this method multiple times since this method will only install once if it doesn't already exist on the device.</p>
     * platforms: android, iphone, ipad
     * @param {string} path the path (relative to the main application Resources folder at build time) to the db to install. this file must be in the SQLite 3 file format.
     * @param {string} name the name of the database
     * @since 0.1
     */
    install:function(path, name) {
    },

    /**
     * <p>open a database. if it doesn't yet exist, create it.</p>
     * platforms: android, iphone, ipad
     * @param {string} name the name of the database
     * @since 0.1
     */
    open:function(name) {
    },

    /**
     * remove a previously added event listener
     * platforms: android, iphone, ipad
     * @param {string} name name of the event
     * @param {function} callback callback function passed in addEventListener
     * @returns void
     * @since 0.1
     */
    removeEventListener:function(name, callback) {
    }
}

/**
 * platforms: android, iphone, ipad
 * @namespace <p>The Database instance returned by {@link Titanium.Database.open} or {@link Titanium.Database.install}. </p>
 * @since 0.1
 */
Ti.Database.DB = {

    /**
     * <p>the last row identifier by the last INSERT query</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.1
     */
    lastInsertRowId:null,

    /**
     * <p>the name of the database</p>
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.1
     */
    name:null,

    /**
     * <p>the number of rows affected by the last query</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.1
     */
    rowsAffected:null,


    /**
     * <p>close the database and release resources from memory. once closed, this instance is no longer valid and must no longer be used.</p>
     * platforms: android, iphone, ipad
     * @returns void
     * @since 0.1
     */
    close:function() {
    },

    /**
     * <p>execute a SQL statement against the database and returns a ResultSet</p>
     * platforms: android, iphone, ipad
     * @param {string} sql the SQL to execute
     * @param {Array<Object>} vararg one or more optional variable arguments passed to this function or an array of objects to be replaced in the query using <tt>?</tt> substitution.
     * @since 0.1
     */
    execute:function(sql, vararg) {
    },

    /**
     * <p>remove the database files for this instance from disk. WARNING: this is a destructive operation and cannot be reversed. All data in the database will be lost upon calling this function. Use with caution.</p>
     * platforms: android, iphone, ipad
     * @returns void
     * @since 0.1
     */
    remove:function() {
    }
}

/**
 * platforms: android, iphone, ipad
 * @namespace <p>The ResultSet instance returned by invoking a database SQL <tt>execute</tt>.</p>
 * @since 0.1
 */
Ti.Database.ResultSet = {

    /**
     * <p>the number of rows in the result set</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.1
     */
    rowCount:null,

    /**
     * <p>returns true if the current row is still valid</p>
     * platforms: android, iphone, ipad
     * @type boolean
     * @since 0.1
     */
    validRow:null,


    /**
     * <p>close the result set and release resources. once closed, this result set must no longer be used</p>
     * platforms: android, iphone, ipad
     * @returns void
     * @since 0.1
     */
    close:function() {
    },

    /**
     * <p>retrieve a row value by field index</p>
     * platforms: android, iphone, ipad
     * @param {int} index column index (which is zero based)
     * @param {int} type [optional] one of ({@link Titanium.Database.FIELD_TYPE_STRING} | {@link Titanium.Database.FIELD_TYPE_INT} | {@link Titanium.Database.FIELD_TYPE_FLOAT} | {@link Titanium.Database.FIELD_TYPE_DOUBLE})
     * @since 0.1
     */
    field:function(index, type) {
    },

    /**
     * <p>retrieve a row value by field name</p>
     * platforms: android, iphone, ipad
     * @param {string} name column name from SQL query
     * @param {int} type [optional] one of ({@link Titanium.Database.FIELD_TYPE_STRING} | {@link Titanium.Database.FIELD_TYPE_INT} | {@link Titanium.Database.FIELD_TYPE_FLOAT} | {@link Titanium.Database.FIELD_TYPE_DOUBLE})
     * @since 0.1
     */
    fieldByName:function(name, type) {
    },

    /**
     * <p>return the number of columns in the result set</p>
     * platforms: android, iphone, ipad
     * @since 0.1
     */
    fieldCount:function() {
    },

    /**
     * <p>return the field name for field index</p>
     * platforms: android, iphone, ipad
     * @param {int} index field name column index (which is zero based)
     * @since 0.1
     */
    fieldName:function(index) {
    },

    /**
     * <p>return true if the row is a valid row</p>
     * platforms: android, iphone, ipad
     * @since 0.1
     */
    isValidRow:function() {
    },

    /**
     * <p>iterate to the next row in the result set. returns false if no more results are available</p>
     * platforms: android, iphone, ipad
     * @since 0.1
     */
    next:function() {
    }
}

/**
 * Notes: <p>Titanium Mobile SDK 1.6.0 marked a significant change for this module.  Older versions of the module were not compatible with the new Graph API.  Applications written for the pre-1.6.0 version of this module will <strong>not</strong> work with the 1.6.0 and higher versions.  Nor is the code shown in the examples here backwards-compatible with pre-1.6.0 Titanium Mobile SDK.</p>
 * platforms: android, iphone, ipad
 * @namespace <p>The top level Facebook module.  The Facebook module is used for connecting your application with 
Facebook through the {@link http://developers.facebook.com/docs/reference/api/} (see <tt>requestWithGraphPath</tt>) or the deprecated {@link http://developers.facebook.com/docs/reference/rest/} (see <tt>request</tt>).
Due to how the facebook login process works on iOS, your app will need to have the following in your tiapp.xml if you target those platforms:</p>
<property name="ti.facebook.appid">your_app_id_here</property>

<p>You must still set Ti.Facebook.appid within your app itself to use the facebook module.  This property is used only for configuring your app to interface with the facebook login process.</p>
 * @since 0.8
 * 
 * @example Authorize
 * <p>Shows official Facebook dialog for logging in the user and prompting the user to approve your requested permissions.  Listen for the module's "login" event to determine success/failure.</p>
<pre><code>Titanium.Facebook.appid = '[YOUR APPID]';
Titanium.Facebook.permissions = ['publish_stream']; // Permissions your app needs
Titanium.Facebook.addEventListener('login', function(e) {
    if (e.success) {
        alert('Logged In');
    } else if (e.error) {
        alert(e.error);
    } else if (e.cancelled) {
        alert("Cancelled");
    }
});
Titanium.Facebook.authorize();
</code></pre>
 * 
 * @example Logout
 * <p>Logout the user and forget the authorization token.  Listen for the module's "logout" event to determine when logout is finished.</p>
<pre><code>Titanium.Facebook.addEventListener('logout', function(e) {
    alert('Logged out');
});
Titanium.Facebook.logout();
</code></pre>
 * 
 * @example Authorize/Logout via the special LoginButton
 * <p>We've provided the Facebook-themed LoginButton which updates its state automatically depending on whether the user is logged-in or not.  I.e., when the user is logged-in, then the button will show "Logout", and vice-versa.</p>
<p>Note that you don't need to set a click listener or anything else on the button.  It "just works".  To listen for the actual login and logout events (which are part of the Titanium Facebook module and not specific to the login button), add listeners at the module level as in the example below.</p>
<pre><code>// Don't forget to set your appid and requested permissions, else the login button
// won't be effective.
Titanium.Facebook.appid = '[your appid]';
Titanium.Facebook.permissions = ['publish_stream'];
Titanium.Facebook.addEventListener('login', function(e) {
    if (e.success) {
        alert('Logged in');
    }
});
Titanium.Facebook.addEventListener('logout', function(e) {
    alert('Logged out');
});

// add the button.  Note that it doesn't need a click event or anything.
Titanium.UI.currentWindow.add(Titanium.Facebook.createLoginButton({ top: 50, style: 'wide' }));
</code></pre>

<p>The <tt>style:'wide'</tt> shows a wide version of the button that displays "Connect with Facebook" instead of just "Connect".</p>
 * 
 * @example Simple Graph API call
 * <p>This example makes a call to the "me" graph path and displays the results, which will be JSON from Facebook.  It assumes the user is already logged-in (you can check this with {@link Titanium.Facebook.loggedIn}.)</p>
<pre><code>Titanium.Facebook.requestWithGraphPath('me', {}, 'GET', function(e) {
    if (e.success) {
        alert(e.result);
    } else if (e.error) {
        alert(e.error);
    } else {
        alert('Unknown response');
    }
});
</code></pre>
 * 
 * @example Create an Event with Graph API
 * <p>This example uses the Graph API to {@link http://developers.facebook.com/docs/reference/api/event/} in the logged-on user's Facebook account.  This requires the "create_event" permission.</p>
<pre><code>// First make sure this permission exists
Titanium.Facebook.permissions = ['create_event'];
Titanium.Facebook.authorize();

// ...
// ...

// Now create the event after you've confirmed authorize() was successful.
var starttime = new Date(2011, 4, 31, 17, 0);
var endtime = new Date(2011, 4, 31, 19, 0);
var title = "Barry's Birthday Celebration";
var description = "Barry will have a great party";
var data = {
    start_time: JSON.stringify(starttime), // API expects a JSON stringified date
    end_time: JSON.stringify(endtime),
    description: description,
    name: title
};
Titanium.Facebook.requestWithGraphPath('me/events', data, 'POST', function(e) {
    if (e.success) {
        alert("Success! Returned from FB: " + e.result);
    } else {
        if (e.error) {
            alert(e.error);
        } else {
            alert("Unknown result");
        }
    }
});
</code></pre>
 * 
 * @example Set user's Facebook status with Graph API
 * <p>Use the Graph API to set the {@link http://developers.facebook.com/docs/reference/api/status/}.  Requires the "publish_stream" permissions.</p>
<pre><code>// First make sure this permission exists
Titanium.Facebook.permissions = ['publish_stream'];
Titanium.Facebook.authorize();

// ...
// ...

// Now create the status message after you've confirmed that authorize() succeeded
Titanium.Facebook.requestWithGraphPath('me/feed', {message: "Trying out FB Graph API and it's fun!"}, "POST", function(e) {
    if (e.success) {
        alert("Success!  From FB: " + e.result);
    } else {
        if (e.error) {
            alert(e.error);
        } else {
            alert("Unkown result");
        }
    }
});
</code></pre>
 * 
 * @example Post a photo using the Graph API
 * <p>This example {@link http://developers.facebook.com/docs/reference/api/photo/} using the Graph API.  Another example below shows how to do this with the REST API, if desired.  This requires the "publish_stream" permission.</p>
<pre><code>// First make sure this permission exists
Titanium.Facebook.permissions = ['publish_stream'];
Titanium.Facebook.authorize();

// ...
// ...

// Now post the photo after you've confirmed that authorize() succeeded
var f = Ti.Filesystem.getFile('pumpkin.jpg');
var blob = f.read();
var data = {
    message: 'This is a pumpkin',
    picture: blob
};
Titanium.Facebook.requestWithGraphPath('me/photos', data, 'POST', function(e){
    if (e.success) {
        alert("Success!  From FB: " + e.result);
    } else {
        if (e.error) {
            alert(e.error);
        } else {
            alert("Unkown result");
        }
    }
});
</code></pre>
 * 
 * @example Post a photo using the REST API
 * <p>This example {@link http://developers.facebook.com/docs/reference/rest/photos.upload/} using the REST API.  Another example above shows how to do this with the Graph API.  This requires the "publish_stream" permission.</p>
<pre><code>// First make sure this permission exists
Titanium.Facebook.permissions = ['publish_stream'];
Titanium.Facebook.authorize();

// ...
// ...

// Now post the photo after you've confirmed that authorize() succeeded
var f = Ti.Filesystem.getFile('pumpkin.jpg');
var blob = f.read();
var data = {
    caption: 'This is a pumpkin',
    picture: blob
};
Titanium.Facebook.request('photos.upload', data, function(e){
    if (e.success) {
        alert("Success!  From FB: " + e.result);
    } else {
        if (e.error) {
            alert(e.error);
        } else {
            alert("Unkown result");
        }
    }
});
</code></pre>
 * 
 * @example Show the Facebook Feed Dialog
 * <p>This example shows how to display the {@link http://developers.facebook.com/docs/reference/dialogs/feed/} for making a post to the user's feed.  In this example, we'll prefill some of the feed fields by passing a data dictionary to the dialog() method; this is not required.</p>
<pre><code>var data = {
    link: "http://www.appcelerator.com",
    name: "Appcelerator Titanium Mobile",
    message: "Checkout this cool open source project for creating mobile apps",
    caption: "Appcelerator Titanium Mobile",
    picture: "http://developer.appcelerator.com/assets/img/DEV_titmobile_image.png",
    description: "You've got the ideas, now you've got the power. Titanium translates your hard won web skills into native applications..."
};
Titanium.Facebook.dialog("feed", data, function(e) {
    if (e.success) {
        alert("Success!  From FB: " + e.result);
    } else {
        if (e.error) {
            alert(e.error);
        } else if (e.cancelled) {
            alert('Cancelled');
        } else {
            alert("Unkown result");
        }
    }
});
</code></pre>
 */
Ti.Facebook = {

    /**
     * <p>OAuth token set after a successful <tt>authorize</tt>.</p>
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    accessToken:null,

    /**
     * <p>your Facebook application id.  You need to set this for anything to work.</p>
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    appid:null,

    /**
     * <p>Time at which the <tt>accessToken</tt> expires.</p>
     * platforms: android, iphone, ipad
     * @type date
     * @since 0.8
     */
    expirationDate:null,

    /**
     * <p>Set to false to enable "Single-Sign-On" in cases where the official Facebook app is on the device.  Default is true, meaning the traditional, dialog-based authentication is used rather than Single-Sign-On.  See {@link http://developers.facebook.com/docs/guides/mobile} for details of their Single-Sign-On schem.</p>
     * platforms: android, iphone, ipad
     * @type boolean
     * @since 0.8
     */
    forceDialogAuth:null,

    /**
     * <p>returns true if the user has logged in</p>
     * platforms: android, iphone, ipad
     * @type boolean
     * @since 0.8
     */
    loggedIn:null,

    /**
     * <p>set/return an array of permissions to request for your app.  Be sure the permissions you want are set before calling <tt>authorize</tt>.</p>
     * platforms: android, iphone, ipad
     * @type object
     * @since 0.8
     */
    permissions:null,

    /**
     * <p>the unique user id returned from Facebook.</p>
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    uid:null,


    /**
     * add an event listener for the instance to receive view triggered events
     * platforms: android, iphone, ipad
     * @param {string} name name of the event
     * @param {function} callback callback function to invoke when the event is fired
     * @returns void
     * @since 0.8
     */
    addEventListener:function(name, callback) {
    },

    /**
     * <p>Login the user (if not already logged in) and authorize your application.  Be sure to set your desired <tt>permissions</tt> and your <tt>appid</tt> before calling this.</p>
     * platforms: android, iphone, ipad
     * @returns void
     * @since 0.8
     */
    authorize:function() {
    },

    /**
     * create and return an instance of {@link Titanium.Facebook.LoginButton}
     * platforms: android, iphone, ipad
     * @param {object} parameters (optional) a dictionary object properties defined in {@link Titanium.Facebook.LoginButton}
     * @since 0.8
     */
    createLoginButton:function(parameters) {
    },

    /**
     * <p>Open a supported Facebook {@link http://developers.facebook.com/docs/reference/dialogs/}.  "feed" is just about the only useful one.</p>
     * platforms: android, iphone, ipad
     * @param {string} action Specifies which dialog to show, such as "feed".
     * @param {object} params A dictionary object for pre-filling some of the dialog's fields.  See example.
     * @param {function} callback A callback for when dialog is completed/cancelled.  The callback should accept a single argument which will be filled with a dictionary object concerning call results: items in the dictionary can be "success" (boolean), "error" (string with the error message), "cancelled" (set to true if user cancelled) and "result" (the data returned by Facebook.)
     * @returns void
     * @since 0.8
     */
    dialog:function(action, params, callback) {
    },

    /**
     * fire a synthesized event to the views listener
     * platforms: android, iphone, ipad
     * @param {string} name name of the event
     * @param {object} event event object
     * @returns void
     * @since 0.8
     */
    fireEvent:function(name, event) {
    },

    /**
     * <p>Clear the OAuth <tt>accessToken</tt> and logout the user.</p>
     * platforms: android, iphone, ipad
     * @returns void
     * @since 0.8
     */
    logout:function() {
    },

    /**
     * remove a previously added event listener
     * platforms: android, iphone, ipad
     * @param {string} name name of the event
     * @param {function} callback callback function passed in addEventListener
     * @returns void
     * @since 0.8
     */
    removeEventListener:function(name, callback) {
    },

    /**
     * <p>Make a request to the deprecated {@link http://developers.facebook.com/docs/reference/rest/}.</p>
     * platforms: android, iphone, ipad
     * @param {string} method The REST API method to call.
     * @param {object} params A dictionary object for setting parameters required by the call, if any.  See examples.
     * @param {function} callback A callback for when call is completed.  The callback should accept a single argument which will be filled with a dictionary object concerning call results: items in the dictionary can be "success" (boolean), "error" (string with the error message), "method" (the REST method call you specified), "result" (the data returned by Facebook.)
     * @returns void
     * @since 0.8
     */
    request:function(method, params, callback) {
    },

    /**
     * <p>Make a {@link http://developers.facebook.com/docs/reference/api/} request.  If the request requires user authorization, be sure user is already logged-in and your app is authorized.  (You can check <tt>loggedIn</tt> for that.)</p>
     * platforms: android, iphone, ipad
     * @param {string} path The graph API path to request.  For example, "me" requests [information about the logged-in user](http://developers.facebook.com/docs/reference/api/user/).
     * @param {object} params A dictionary object for setting parameters required by the call, if any.  See examples.
     * @param {string} httpMethod The http method (GET/POST/DELETE) to use for the call.
     * @param {function} callback A callback for when call is completed.  The callback should accept a single argument which will be filled with a dictionary object concerning call results: items in the dictionary can be "success" (boolean), "error" (string with the error message), "path" (the graph call path you specified), "result" (the JSON returned by Facebook.)
     * @returns void
     * @since 0.8
     */
    requestWithGraphPath:function(path, params, httpMethod, callback) {
    }
}

/**
 * Notes: <p>See the examples in the {@link Titanium.Facebook} documentation.</p>
 * platforms: android, iphone, ipad
 * @namespace <p>The Login Button created by {@link Titanium.Facebook.createLoginButton}.  This is a Facebook-themed button that does not require a click event handler or any listeners.  It "just works" and changes its label to reflect the current state of the Facebook session.  For example, if the user is already logged in, this button will show "Logout".</p>
 * @since 0.8
 */
Ti.Facebook.LoginButton = {

    /**
     * a dictionary with properties x and y to indicate the anchor point value. anchor specifies the position by which animation should occur. center is 0.5, 0.5
     * platforms: android, iphone, ipad
     * @type object
     * @since 0.8
     */
    anchorPoint:null,

    /**
     * read-only object with x and y properties of where the view is during animation
     * platforms: android, iphone, ipad
     * @type object
     * @since 0.8
     */
    animatedCenterPoint:null,

    /**
     * the background color of the view
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    backgroundColor:null,

    /**
     * the disabled background color of the view. (Android)
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    backgroundDisabledColor:null,

    /**
     * the disabled background image url of the view. (Android)
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    backgroundDisabledImage:null,

    /**
     * the focused background color of the view. focusable must be true for normal views. (Android)
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    backgroundFocusedColor:null,

    /**
     * the focused background image url of the view. focusable must be true for normal views. (Android)
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    backgroundFocusedImage:null,

    /**
     * a background gradient for the view with the properties: type,startPoint,endPoint,startRadius,endRadius,backfillStart,backfillEnd,colors.
     * platforms: android, iphone, ipad
     * @type object
     * @since 0.8
     */
    backgroundGradient:null,

    /**
     * the background image url of the view
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    backgroundImage:null,

    /**
     * End caps specify the portion of an image that should not be resized when an image is stretched. This technique is used to implement buttons and other resizable image-based interface elements. When a button with end caps is resized, the resizing occurs only in the middle of the button, in the region between the end caps. The end caps themselves keep their original size and appearance. This property specifies the size of the left end cap. The middle (stretchable) portion is assumed to be 1 pixel wide. The right end cap is therefore computed by adding the size of the left end cap and the middle portion together and then subtracting that value from the width of the image
     * platforms: android, iphone, ipad
     * @type float
     * @since 0.8
     */
    backgroundLeftCap:null,

    /**
     * the selected background color of the view. focusable must be true for normal views. (Android)
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    backgroundSelectedColor:null,

    /**
     * the selected background image url of the view. focusable must be true for normal views. (Android)
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    backgroundSelectedImage:null,

    /**
     * End caps specify the portion of an image that should not be resized when an image is stretched. This technique is used to implement buttons and other resizable image-based interface elements. When a button with end caps is resized, the resizing occurs only in the middle of the button, in the region between the end caps. The end caps themselves keep their original size and appearance. This property specifies the size of the top end cap. The middle (stretchable) portion is assumed to be 1 pixel wide. The bottom end cap is therefore computed by adding the size of the top end cap and the middle portion together and then subtracting that value from the height of the image
     * platforms: android, iphone, ipad
     * @type float
     * @since 0.8
     */
    backgroundTopCap:null,

    /**
     * the border color of the view
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    borderColor:null,

    /**
     * the border radius of the view
     * platforms: android, iphone, ipad
     * @type float
     * @since 0.8
     */
    borderRadius:null,

    /**
     * the border width of the view
     * platforms: android, iphone, ipad
     * @type float
     * @since 0.8
     */
    borderWidth:null,

    /**
     * property for the view bottom position. This position is relative to the view's parent. Can be either a float value or a dimension string ie 'auto' (default).
     * platforms: android, iphone, ipad
     * @type float,string
     * @since 0.8
     */
    bottom:null,

    /**
     * a dictionary with properties x and y to indicate the center of the views position relative to the parent view
     * platforms: android, iphone, ipad
     * @type object
     * @since 0.8
     */
    center:null,

    /**
     * Set true if you want a view to be focusable when navigating with the trackball or D-Pad. Default: false. (Android Only)
     * platforms: android
     * @type boolean
     * @since 0.8
     */
    focusable:null,

    /**
     * the font family
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    "font-family":null,

    /**
     * the font size
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    "font-size":null,

    /**
     * the font style, either normal or italics
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    "font-style":null,

    /**
     * the font weight, either normal or bold
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    "font-weight":null,

    /**
     * property for the view height. Can be either a float value or a dimension string ie 'auto' (default).
     * platforms: android, iphone, ipad
     * @type float,string
     * @since 0.8
     */
    height:null,

    /**
     * property for the view left position. This position is relative to the view's parent. Can be either a float value or a dimension string ie 'auto' (default).
     * platforms: android, iphone, ipad
     * @type float,string
     * @since 0.8
     */
    left:null,

    /**
     * the opacity from 0.0-1.0
     * platforms: android, iphone, ipad
     * @type float
     * @since 0.8
     */
    opacity:null,

    /**
     * property for the view right position. This position is relative to the view's parent. Can be either a float value or a dimension string ie 'auto' (default).
     * platforms: android, iphone, ipad
     * @type float,string
     * @since 0.8
     */
    right:null,

    /**
     * the size of the view as a dictionary of width and height properties
     * platforms: android, iphone, ipad
     * @type object
     * @since 0.8
     */
    size:null,

    /**
     * One of Titanium.UI.Android.SOFT_KEYBOARD_DEFAULT_ON_FOCUS, Titanium.UI.Android.SOFT_KEYBOARD_HIDE_ON_FOCUS, or Titanium.UI.Android.SOFT_KEYBOARD_SHOW_ON_FOCUS. (Android only)
     * platforms: android
     * @type int
     * @since 0.8
     */
    softKeyboardOnFocus:null,

    /**
     * <p>set to "wide" to show a wider version of the button that displays "Connect with Facebook" instead of just "Connect".</p>
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    style:null,

    /**
     * property for the view top position. This position is relative to the view's parent. Can be either a float value or a dimension string ie 'auto' (default).
     * platforms: android, iphone, ipad
     * @type float,string
     * @since 0.8
     */
    top:null,

    /**
     * a boolean indicating if the view should receive touch events (true, default) or forward them to peers (false)
     * platforms: android, iphone, ipad
     * @type boolean
     * @since 0.8
     */
    touchEnabled:null,

    /**
     * the transformation matrix to apply to the view
     * platforms: android, iphone, ipad
     * @type object
     * @since 0.8
     */
    transform:null,

    /**
     * a boolean of the visibility of the view
     * platforms: android, iphone, ipad
     * @type boolean
     * @since 0.8
     */
    visible:null,

    /**
     * property for the view width. Can be either a float value or a dimension string ie 'auto' (default).
     * platforms: android, iphone, ipad
     * @type float,string
     * @since 0.8
     */
    width:null,

    /**
     * the z index position relative to other sibling views
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.8
     */
    zIndex:null,


    /**
     * add a child to the view hierarchy
     * platforms: android, iphone, ipad
     * @param {object} view the view to add to this views hiearchy
     * @returns void
     * @since 0.8
     */
    add:function(view) {
    },

    /**
     * add an event listener for the instance to receive view triggered events
     * platforms: android, iphone, ipad
     * @param {string} name name of the event
     * @param {function} callback callback function to invoke when the event is fired
     * @returns void
     * @since 0.8
     */
    addEventListener:function(name, callback) {
    },

    /**
     * animate the view
     * platforms: android, iphone, ipad
     * @param {object} obj either a dictionary of animation properties or an Animation object
     * @param {function} callback function to be invoked upon completion of the animation
     * @returns void
     * @since 0.8
     */
    animate:function(obj, callback) {
    },

    /**
     * fire a synthesized event to the views listener
     * platforms: android, iphone, ipad
     * @param {string} name name of the event
     * @param {object} event event object
     * @returns void
     * @since 0.8
     */
    fireEvent:function(name, event) {
    },

    /**
     * hide the view
     * platforms: android, iphone, ipad
     * @returns void
     * @since 0.8
     */
    hide:function() {
    },

    /**
     * remove a previously add view from the view hiearchy
     * platforms: android, iphone, ipad
     * @param {object} view the view to remove from this views hiearchy
     * @returns void
     * @since 0.8
     */
    remove:function(view) {
    },

    /**
     * remove a previously added event listener
     * platforms: android, iphone, ipad
     * @param {string} name name of the event
     * @param {function} callback callback function passed in addEventListener
     * @returns void
     * @since 0.8
     */
    removeEventListener:function(name, callback) {
    },

    /**
     * make the view visible
     * platforms: android, iphone, ipad
     * @returns void
     * @since 0.8
     */
    show:function() {
    },

    /**
     * return a Blob image of the rendered view
     * platforms: android, iphone, ipad
     * @param {function} f function to be invoked upon completion. if non-null, this method will be performed asynchronously. if null, it will be performed immediately
     * @since 0.8
     */
    toImage:function(f) {
    }
}

/**
 * platforms: android, iphone, ipad
 * @namespace <p>The top level Filesystem module.  The Filesystem module is used for reading and saving files and 
directories on the device.</p>
 * @since 0.1
 */
Ti.Filesystem = {

    /**
     * <p>constant for append mode for file operations</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.1
     */
    MODE_APPEND:null,

    /**
     * <p>constant for read mode for file operations</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.1
     */
    MODE_READ:null,

    /**
     * <p>constant for write mode for file operations</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.1
     */
    MODE_WRITE:null,

    /**
     * <p>readonly constant where your application data directory is located. this directory should be used to place applications-specific files. on iPhone, this directory is also backed up.</p>
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.1
     */
    applicationDataDirectory:null,

    /**
     * <p>readonly constant where your application is located</p>
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.1
     */
    applicationDirectory:null,

    /**
     * <p>readonly platform specific line ending constant</p>
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.1
     */
    lineEnding:null,

    /**
     * <p>readonly constant where your application resources are located</p>
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.1
     */
    resourcesDirectory:null,

    /**
     * <p>readonly path separator constant</p>
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.1
     */
    separator:null,

    /**
     * <p>readonly constant where your application can place temporary files</p>
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.1
     */
    tempDirectory:null,


    /**
     * add an event listener for the instance to receive view triggered events
     * platforms: android, iphone, ipad
     * @param {string} name name of the event
     * @param {function} callback callback function to invoke when the event is fired
     * @returns void
     * @since 0.1
     */
    addEventListener:function(name, callback) {
    },

    /**
     * create and return an instance of {@link Titanium.Filesystem.File}
     * platforms: android, iphone, ipad
     * @param {object} parameters (optional) a dictionary object properties defined in {@link Titanium.Filesystem.File}
     * @since 0.1
     */
    createFile:function(parameters) {
    },

    /**
     * <p>create temp file and return a {@link Titanium.Filesystem.File}</p>
     * platforms: android, iphone, ipad
     * @since 0.1
     */
    createTempDirectory:function() {
    },

    /**
     * <p>create a temp file and return a {@link Titanium.Filesystem.File}</p>
     * platforms: android, iphone, ipad
     * @since 0.1
     */
    createTempFile:function() {
    },

    /**
     * fire a synthesized event to the views listener
     * platforms: android, iphone, ipad
     * @param {string} name name of the event
     * @param {object} event event object
     * @returns void
     * @since 0.1
     */
    fireEvent:function(name, event) {
    },

    /**
     * <p>return a fully formed file path as a {@link Titanium.Filesystem.File} object</p>
     * platforms: android, iphone, ipad
     * @param {string} path one or more path arguments to form the full path joined together with the platform specific path separator. if a relative path is passed, the full path will be relative to the application resource folder.
     * @since 0.1
     */
    getFile:function(path) {
    },

    /**
     * <p>returns true if the android device supports external storage such as an SD card. Returns false on iOS.</p>
     * platforms: android, iphone, ipad
     * @since 0.1
     */
    isExternalStoragePresent:function() {
    },

    /**
     * remove a previously added event listener
     * platforms: android, iphone, ipad
     * @param {string} name name of the event
     * @param {function} callback callback function passed in addEventListener
     * @returns void
     * @since 0.1
     */
    removeEventListener:function(name, callback) {
    }
}

/**
 * platforms: android, iphone, ipad
 * @namespace <p>The File object which support various filesystem based operations.</p>
 * @since 0.1
 */
function Titanium_Filesystem_File() {
}
Titanium_Filesystem_File.prototype = {


    /**
     * add an event listener for the instance to receive view triggered events
     * platforms: android, iphone, ipad
     * @param {string} name name of the event
     * @param {function} callback callback function to invoke when the event is fired
     * @returns void
     * @since 0.1
     */
    addEventListener:function(name, callback) {
    },

    /**
     * <p>create a directory at the path for the file object</p>
     * platforms: android, iphone, ipad
     * @since 0.1
     */
    createDirectory:function() {
    },

    /**
     * <p>create a file path at the path for the file object</p>
     * platforms: android, iphone, ipad
     * @since 0.1
     */
    createFile:function() {
    },

    /**
     * <p>return the created timestamp for the file</p>
     * platforms: android, iphone, ipad
     * @since 0.1
     */
    createTimestamp:function() {
    },

    /**
     * <p>delete the file directory path</p>
     * platforms: android, iphone, ipad
     * @param {boolean} recursive pass true to recursively delete any contents. defaults to false
     * @since 0.1
     */
    deleteDirectory:function(recursive) {
    },

    /**
     * <p>delete the file</p>
     * platforms: android, iphone, ipad
     * @since 0.1
     */
    deleteFile:function() {
    },

    /**
     * <p>returns true if the file is executable</p>
     * platforms: android, iphone, ipad
     * @since 0.1
     */
    executable:function() {
    },

    /**
     * <p>returns true if the file or directory exists on the device</p>
     * platforms: android, iphone, ipad
     * @since 0.1
     */
    exists:function() {
    },

    /**
     * <p>return the file extension</p>
     * platforms: android, iphone, ipad
     * @since 0.1
     */
    extension:function() {
    },

    /**
     * fire a synthesized event to the views listener
     * platforms: android, iphone, ipad
     * @param {string} name name of the event
     * @param {object} event event object
     * @returns void
     * @since 0.1
     */
    fireEvent:function(name, event) {
    },

    /**
     * <p>return an array of paths in the directory of the file object</p>
     * platforms: android, iphone, ipad
     * @since 0.1
     */
    getDirectoryListing:function() {
    },

    /**
     * <p>return the file parent</p>
     * platforms: android, iphone, ipad
     * @since 0.1
     */
    getParent:function() {
    },

    /**
     * <p>returns true if the file is hidden</p>
     * platforms: android, iphone, ipad
     * @since 0.1
     */
    hidden:function() {
    },

    /**
     * <p>return the last modification timestamp for the file</p>
     * platforms: android, iphone, ipad
     * @since 0.1
     */
    modificationTimestamp:function() {
    },

    /**
     * <p>move the file to another path</p>
     * platforms: android, iphone, ipad
     * @param {string|object} newpath new location
     * @since 0.1
     */
    move:function(newpath) {
    },

    /**
     * <p>the name of the file</p>
     * platforms: android, iphone, ipad
     * @since 0.1
     */
    name:function() {
    },

    /**
     * <p>returns the fully resolved native path</p>
     * platforms: android, iphone, ipad
     * @since 0.1
     */
    nativePath:function() {
    },

    /**
     * <p>return the contents of file as blob</p>
     * platforms: android, iphone, ipad
     * @since 0.1
     */
    read:function() {
    },

    /**
     * <p>returns true if the file is readonly</p>
     * platforms: android, iphone, ipad
     * @since 0.1
     */
    readonly:function() {
    },

    /**
     * remove a previously added event listener
     * platforms: android, iphone, ipad
     * @param {string} name name of the event
     * @param {function} callback callback function passed in addEventListener
     * @returns void
     * @since 0.1
     */
    removeEventListener:function(name, callback) {
    },

    /**
     * <p>rename the file</p>
     * platforms: android, iphone, ipad
     * @param {string} newname new name
     * @since 0.1
     */
    rename:function(newname) {
    },

    /**
     * <p>make the file executable</p>
     * platforms: android, iphone, ipad
     * @returns void
     * @since 0.1
     */
    setExecutable:function() {
    },

    /**
     * <p>make the file hidden</p>
     * platforms: android, iphone, ipad
     * @returns void
     * @since 0.1
     */
    setHidden:function() {
    },

    /**
     * <p>make the file readonly</p>
     * platforms: android, iphone, ipad
     * @returns void
     * @since 0.1
     */
    setReadonly:function() {
    },

    /**
     * <p>return boolean to indicate if the path has space available for storage</p>
     * platforms: android, iphone, ipad
     * @since 0.1
     */
    spaceAvailable:function() {
    },

    /**
     * <p>returns true if the file points to a symbolic link</p>
     * platforms: android, iphone, ipad
     * @since 0.1
     */
    symbolicLink:function() {
    },

    /**
     * <p>write the contents to file.</p>
     * platforms: android, iphone, ipad
     * @param {string|object} contents write the contents of string, blob or [[Titanium.Filesystem.File]] to file
     * @param {boolean} append (optional) append the string to the end of the file.
     * @since 0.1
     */
    write:function(contents, append) {
    },

    /**
     * <p>returns true if the file is writeable</p>
     * platforms: android, iphone, ipad
     * @since 0.1
     */
    writeable:function() {
    }
}

/**
 * platforms: iphone, android, ipad
 * @namespace <p>Wrapper around {@link Titanium.Filesystem.File} that implements the {@link Titanium.IOStream} interface.</p>
 * @since 1.7
 * 
 * @example Write data to stream
 * <pre><code>var outBuffer = Ti.createBuffer({data: "write me"});
var outStream = // stream object could be socket, file, buffer or blob

var bytesWritten = outStream.write(outBuffer);  // writes entire buffer to stream
Ti.API.info("Bytes written:" + bytesWritten);  // should be 8

bytesWritten = outStream.write(outBuffer, 2, 5);  // only writes "ite m" to stream
Ti.API.info("Bytes written:" + bytesWritten);  // should be 5
</code></pre>
 * 
 * @example Read data from stream
 * <pre><code>var inBuffer = Ti.createBuffer({length: 1024});

// assume the inStream contains the string "hello world"
var inStream = // stream object could be socket, file, buffer or blob

var bytesRead = inStream.read(inBuffer);  // reads "hello world" from stream
Ti.API.info("Bytes read:" + bytesRead);  // should be 11

bytesRead = inStream.read(inBuffer, 2, 5);  // only reads "llo w" from stream
Ti.API.info("Bytes read:" + bytesRead);  // should be 5
</code></pre>
 */
Ti.Filesystem.FileStream = {


    /**
     * <p>closes stream and throws exception on error</p>
     * platforms: iphone, android, ipad
     * @returns void
     * @since 1.7
     */
    close:function() {
    },

    /**
     * <p>reads true if stream is readable, false otherwise</p>
     * platforms: iphone, android, ipad
     * @since 1.7
     */
    isReadable:function() {
    },

    /**
     * <p>reads true if stream is writeable, false otherwise</p>
     * platforms: iphone, android, ipad
     * @since 1.7
     */
    isWriteable:function() {
    },

    /**
     * <p>reads data from stream into a buffer.  Optional offset and length arguments to specify position in buffer in whichto start writing the read data, and the amount of data to read.</p>
     * platforms: iphone, android, ipad
     * @param {{@link Titanium_Buffer}} buffer buffer to read stream data into
     * @param {Number} offset (Optional) offset to start reading buffer data from
     * @param {Number} length (Optional) length of data to read from buffer
     * @since 1.7
     */
    read:function(buffer, offset, length) {
    },

    /**
     * <p>writes data from buffer to stream. Optional offset and length arguments to specify position in buffer in which to start reading data that is written to the stream, and the length of the data to take from the buffer.</p>
     * platforms: iphone, android, ipad
     * @param {{@link Titanium_Buffer}} buffer buffer to write to stream
     * @param {Number} offset (Optional) offset to start writing buffer data from
     * @param {Number} length (Optional) length of data to write from buffer
     * @since 1.7
     */
    write:function(buffer, offset, length) {
    }
}

/**
 * platforms: android, iphone, ipad
 * @namespace <p>The top level Geolocation module. The Geolocation module is used for accessing device location based information.</p>
 * @since 0.1
 */
Ti.Geolocation = {

    /**
     * <p>accuracy constant</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.1
     */
    ACCURACY_BEST:null,

    /**
     * <p>accuracy constant</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.1
     */
    ACCURACY_HUNDRED_METERS:null,

    /**
     * <p>accuracy constant</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.1
     */
    ACCURACY_KILOMETER:null,

    /**
     * <p>accuracy constant</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.1
     */
    ACCURACY_NEAREST_TEN_METERS:null,

    /**
     * <p>accuracy constant</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.1
     */
    ACCURACY_THREE_KILOMETERS:null,

    /**
     * <p>authorization constant</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.1
     */
    AUTHORIZATION_AUTHORIZED:null,

    /**
     * <p>authorization constant (user disabled authorization)</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.1
     */
    AUTHORIZATION_DENIED:null,

    /**
     * <p>authorization constant (system disabled authorization)</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.1
     */
    AUTHORIZATION_RESTRICTED:null,

    /**
     * <p>authorization constant</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.1
     */
    AUTHORIZATION_UNKNOWN:null,

    /**
     * <p>error constant (iOS only)</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.1
     */
    ERROR_DENIED:null,

    /**
     * <p>error constant (iOS only)</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.1
     */
    ERROR_HEADING_FAILURE:null,

    /**
     * <p>error constant (iOS only)</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.1
     */
    ERROR_LOCATION_UNKNOWN:null,

    /**
     * <p>error constant (iOS only)</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.1
     */
    ERROR_NETWORK:null,

    /**
     * <p>error constant (iOS 4.0+ only)</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.1
     */
    ERROR_REGION_MONITORING_DELAYED:null,

    /**
     * <p>error constant (iOS 4.0+ only)</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.1
     */
    ERROR_REGION_MONITORING_DENIED:null,

    /**
     * <p>error constant (iOS 4.0+ only)</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.1
     */
    ERROR_REGION_MONITORING_FAILURE:null,

    /**
     * <p>The GPS location provider</p>
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.1
     */
    PROVIDER_GPS:null,

    /**
     * <p>The Network location provider</p>
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.1
     */
    PROVIDER_NETWORK:null,

    /**
     * <p>The minimum change of position (in meters) before a 'location' event is fired. Default is 0, meaning that location events are continuously generated.</p>
     * platforms: android, iphone, ipad
     * @type double
     * @since 0.1
     */
    distanceFilter:null,

    /**
     * <p>The minium change of heading (in degrees) before a 'heading' event is fired. Default is 0, meaning that heading events are continuously generated.</p>
     * platforms: android, iphone, ipad
     * @type double
     * @since 0.1
     */
    headingFilter:null,

    /**
     * <p>(iOS 4.2+ only). Returns an authorization constant indicating if the application has access to location services. Always returns AUTHORIZATION_UNKNOWN on pre-4.2 devices. Attempting to re-authorize when AUTHORIZATION_RESTRICTED will lead to issues</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.1
     */
    locationServicesAuthorization:null,

    /**
     * <p>returns true if the user has enabled or disable location services for the device (not the application).</p>
     * platforms: android, iphone, ipad
     * @type boolean
     * @since 0.1
     */
    locationServicesEnabled:null,

    /**
     * <p>allows setting of the preferred location provider.  Returns undefined when the preferred provider is auto-detected</p>
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.1
     */
    preferredProvider:null,

    /**
     * <p>(iOS only). This property informs the end-user why location services are being requested by the application.  This string will be display in the permission dialog. This property is REQUIRED starting in 4.0.</p>
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.1
     */
    purpose:null,

    /**
     * <p>returns true if the calibration UI can show</p>
     * platforms: android, iphone, ipad
     * @type boolean
     * @since 0.1
     */
    showCalibration:null,


    /**
     * add an event listener for the instance to receive view triggered events
     * platforms: android, iphone, ipad
     * @param {string} name name of the event
     * @param {function} callback callback function to invoke when the event is fired
     * @returns void
     * @since 0.1
     */
    addEventListener:function(name, callback) {
    },

    /**
     * fire a synthesized event to the views listener
     * platforms: android, iphone, ipad
     * @param {string} name name of the event
     * @param {object} event event object
     * @returns void
     * @since 0.1
     */
    fireEvent:function(name, event) {
    },

    /**
     * <p>tries to resolve an address to a location.</p>
     * platforms: android, iphone, ipad
     * @param {string} address address to resolve.
     * @param {function} callback function to invoke on success or failure. The event object contains the properties described as the <tt>place</tt> dictionary in {@link Titanium.Geolocation.reverseGeocoder}.
     * @returns void
     * @since 0.1
     */
    forwardGeocoder:function(address, callback) {
    },

    /**
     * <p>retrieve the current compass heading.</p>
     * platforms: android, iphone, ipad
     * @param {function} callback function to invoke on success or failure of obtaining the current heading. See heading event in {@link Titanium.Geolocation}.
     * @returns void
     * @since 0.1
     */
    getCurrentHeading:function(callback) {
    },

    /**
     * <p>retrieve the last known location from the device. On Android, the radios are not turned on to update the location. On iOS the radios MAY be used if the location is too "old".</p>
     * platforms: android, iphone, ipad
     * @param {function} callback function to invoke on success or failure of obtaining the current location. See location event in {@link Titanium.Geolocation}.
     * @returns void
     * @since 0.1
     */
    getCurrentPosition:function(callback) {
    },

    /**
     * remove a previously added event listener
     * platforms: android, iphone, ipad
     * @param {string} name name of the event
     * @param {function} callback callback function passed in addEventListener
     * @returns void
     * @since 0.1
     */
    removeEventListener:function(name, callback) {
    },

    /**
     * <p>tries to resolve a location to an address.</p>
     * platforms: android, iphone, ipad
     * @param {double} latitude latitude to search
     * @param {double} longitude longitude to search
     * @param {function} callback function to invoke on success or failure. The event object passed contains a <tt>places</tt> array of zero or more place dictionaries. Each <tt>place</tt> dictionary contains the following properties: <tt>street</tt>, <tt>street1</tt>, <tt>city</tt>, <tt>region1</tt>, <tt>region2</tt>, <tt>postalCode</tt>, <tt>country</tt>, <tt>countryCode</tt>, <tt>longitude</tt>, <tt>latitude</tt>, <tt>displayAddress</tt>, <tt>address</tt>.
     * @returns void
     * @since 0.1
     */
    reverseGeocoder:function(latitude, longitude, callback) {
    },

    /**
     * <p>configure the calibration UI. set the false to disable the calibration display. (iOS only)</p>
     * platforms: android, iphone, ipad
     * @returns void
     * @since 0.1
     */
    setShowCalibration:function() {
    }
}

/**
 * platforms: android, iphone, ipad
 * @namespace <p>The top level Gestures module.  The Gesture module is responsible for high level device gestures that are device-wide.</p>
 * @since 0.8
 */
Ti.Gesture = {


    /**
     * add an event listener for the instance to receive view triggered events
     * platforms: android, iphone, ipad
     * @param {string} name name of the event
     * @param {function} callback callback function to invoke when the event is fired
     * @returns void
     * @since 0.8
     */
    addEventListener:function(name, callback) {
    },

    /**
     * fire a synthesized event to the views listener
     * platforms: android, iphone, ipad
     * @param {string} name name of the event
     * @param {object} event event object
     * @returns void
     * @since 0.8
     */
    fireEvent:function(name, event) {
    },

    /**
     * remove a previously added event listener
     * platforms: android, iphone, ipad
     * @param {string} name name of the event
     * @param {function} callback callback function passed in addEventListener
     * @returns void
     * @since 0.8
     */
    removeEventListener:function(name, callback) {
    }
}

/**
 * platforms: iphone, android, ipad
 * @namespace <p>IOStream is the interface that all stream types implement</p>
 * @since 1.7
 * 
 * @example Write data to stream
 * <pre><code>var outBuffer = Ti.createBuffer({data: "write me"});
var outStream = // stream object could be socket, file, buffer or blob

var bytesWritten = outStream.write(outBuffer);  // writes entire buffer to stream
Ti.API.info("Bytes written:" + bytesWritten);  // should be 8

bytesWritten = outStream.write(outBuffer, 2, 5);  // only writes "ite m" to stream
Ti.API.info("Bytes written:" + bytesWritten);  // should be 5
</code></pre>
 * 
 * @example Read data from stream
 * <pre><code>var inBuffer = Ti.createBuffer({length: 1024});

// assume the inStream contains the string "hello world"
var inStream = // stream object could be socket, file, buffer or blob

var bytesRead = inStream.read(inBuffer);  // reads "hello world" from stream
Ti.API.info("Bytes read:" + bytesRead);  // should be 11

bytesRead = inStream.read(inBuffer, 2, 5);  // only reads "llo w" from stream
Ti.API.info("Bytes read:" + bytesRead);  // should be 5
</code></pre>
 */
Ti.IOStream = {


    /**
     * <p>closes stream and throws exception on error</p>
     * platforms: iphone, android, ipad
     * @returns void
     * @since 1.7
     */
    close:function() {
    },

    /**
     * <p>reads true if stream is readable, false otherwise</p>
     * platforms: iphone, android, ipad
     * @since 1.7
     */
    isReadable:function() {
    },

    /**
     * <p>reads true if stream is writeable, false otherwise</p>
     * platforms: iphone, android, ipad
     * @since 1.7
     */
    isWriteable:function() {
    },

    /**
     * <p>reads data from stream into a buffer.  Optional offset and length arguments to specify position in buffer in whichto start writing the read data, and the amount of data to read.</p>
     * platforms: iphone, android, ipad
     * @param {{@link Titanium_Buffer}} buffer buffer to read stream data into
     * @param {Number} offset (Optional) offset to start reading buffer data from
     * @param {Number} length (Optional) length of data to read from buffer
     * @since 1.7
     */
    read:function(buffer, offset, length) {
    },

    /**
     * <p>writes data from buffer to stream. Optional offset and length arguments to specify position in buffer in which to start reading data that is written to the stream, and the length of the data to take from the buffer.</p>
     * platforms: iphone, android, ipad
     * @param {{@link Titanium_Buffer}} buffer buffer to write to stream
     * @param {Number} offset (Optional) offset to start writing buffer data from
     * @param {Number} length (Optional) length of data to write from buffer
     * @since 1.7
     */
    write:function(buffer, offset, length) {
    }
}

/**
 * Notes: <p>The macro <tt>L</tt> can also be used which aliases the method {@link Titanium.Locale.getString}.</p>
 * platforms: android, iphone, ipad
 * @namespace <p>The top level Locale module.  The Locale module works with localization files to which are generated during compilation into the operating system specific localization formats. The Locale module provides locale-specific strings which can be referenced at runtime.  Additionally, the module contains a few methods and properties for querying device locale information.</p>
 * @since 1.5
 */
Ti.Locale = {

    /**
     * <p>return the current (default) ISO 2-letter country code for the device.</p>
     * platforms: android, iphone, ipad
     * @type string
     * @since 1.5
     */
    currentCountry:null,

    /**
     * <p>return the current language for the device based on the user's settings (readonly)</p>
     * platforms: android, iphone, ipad
     * @type string
     * @since 1.5
     */
    currentLanguage:null,

    /**
     * <p>return the current locale string for the device based on the user's settings (e.g., en-US).  (readonly) (Android only)</p>
     * platforms: android, iphone, ipad
     * @type string
     * @since 1.5
     */
    currentLocale:null,


    /**
     * add an event listener for the instance to receive view triggered events
     * platforms: android, iphone, ipad
     * @param {string} name name of the event
     * @param {function} callback callback function to invoke when the event is fired
     * @returns void
     * @since 1.5
     */
    addEventListener:function(name, callback) {
    },

    /**
     * fire a synthesized event to the views listener
     * platforms: android, iphone, ipad
     * @param {string} name name of the event
     * @param {object} event event object
     * @returns void
     * @since 1.5
     */
    fireEvent:function(name, event) {
    },

    /**
     * <p>format a telephone number according to the current locale.</p>
     * platforms: android, iphone, ipad
     * @param {string} number the phone number to format
     * @since 1.5
     */
    formatTelephoneNumber:function(number) {
    },

    /**
     * <p>return a currency code for a given locale. (Android only)</p>
     * platforms: android, iphone, ipad
     * @param {string} locale the locale for which you want to the currency code, e.g. getCurrencyCode('en-US') -> 'USD'
     * @since 1.5
     */
    getCurrencyCode:function(locale) {
    },

    /**
     * <p>return a currency symbol for the given currency code. (Android only)</p>
     * platforms: android, iphone, ipad
     * @param {string} currencyCode the currency for which you want the symbol, e.g. getCurrencySymbol('USD') -> '$'
     * @since 1.5
     */
    getCurrencySymbol:function(currencyCode) {
    },

    /**
     * <p>return a currency symbol for the given locale. (Android only)</p>
     * platforms: android, iphone, ipad
     * @param {string} locale the locale whose currency symbol you want, e.g. getLocaleCurrencySymbol('en-US') -> '$'
     * @since 1.5
     */
    getLocaleCurrencySymbol:function(locale) {
    },

    /**
     * <p>return a localization string</p>
     * platforms: android, iphone, ipad
     * @param {string} key the key to use when mapping into the localization file
     * @param {string} hint the text to use if no key found in the localization file
     * @since 1.5
     */
    getString:function(key, hint) {
    },

    /**
     * remove a previously added event listener
     * platforms: android, iphone, ipad
     * @param {string} name name of the event
     * @param {function} callback callback function passed in addEventListener
     * @returns void
     * @since 1.5
     */
    removeEventListener:function(name, callback) {
    }
}

/**
 * platforms: android, iphone, ipad
 * @namespace <p>The top level Map module.  The Map module is used for creating in-application native maps.</p>
 * @since 0.8
 * 
 * @example Map Example
 * <p>This is a basic map example that uses a custom annotation on the map.</p>
<pre><code>var mountainView = Titanium.Map.createAnnotation({
    latitude:37.390749,
    longitude:-122.081651,
    title:"Appcelerator Headquarters",
    subtitle:'Mountain View, CA',
    pincolor:Titanium.Map.ANNOTATION_RED,
    animate:true,
    leftButton: '../images/appcelerator_small.png',
    myid:1 // CUSTOM ATTRIBUTE THAT IS PASSED INTO EVENT OBJECTS
});

var mapview = Titanium.Map.createView({
    mapType: Titanium.Map.STANDARD_TYPE,
    region: {latitude:33.74511, longitude:-84.38993, 
            latitudeDelta:0.01, longitudeDelta:0.01},
    animate:true,
    regionFit:true,
    userLocation:true,
    annotations:[mountainView]
});

win.add(mapview);
</code></pre>
 */
Ti.Map = {

    /**
     * <p>Displays a satellite image of the area with road and road name information layered on top.</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.8
     */
    HYBRID_TYPE:null,

    /**
     * <p>Displays satellite imagery of the area.</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.8
     */
    SATELLITE_TYPE:null,

    /**
     * <p>Displays a street map that shows the position of all roads and some road names.</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.8
     */
    STANDARD_TYPE:null,


    /**
     * add an event listener for the instance to receive view triggered events
     * platforms: android, iphone, ipad
     * @param {string} name name of the event
     * @param {function} callback callback function to invoke when the event is fired
     * @returns void
     * @since 0.8
     */
    addEventListener:function(name, callback) {
    },

    /**
     * create and return an instance of {@link Titanium.Map.Annotation}
     * platforms: android, iphone, ipad
     * @param {object} parameters (optional) a dictionary object properties defined in {@link Titanium.Map.Annotation}
     * @since 0.8
     */
    createAnnotation:function(parameters) {
    },

    /**
     * create and return an instance of {@link Titanium.Map.MapView}
     * platforms: android, iphone, ipad
     * @param {object} parameters (optional) a dictionary object properties defined in {@link Titanium.Map.MapView}
     * @since 0.8
     */
    createMapView:function(parameters) {
    },

    /**
     * fire a synthesized event to the views listener
     * platforms: android, iphone, ipad
     * @param {string} name name of the event
     * @param {object} event event object
     * @returns void
     * @since 0.8
     */
    fireEvent:function(name, event) {
    },

    /**
     * remove a previously added event listener
     * platforms: android, iphone, ipad
     * @param {string} name name of the event
     * @param {function} callback callback function passed in addEventListener
     * @returns void
     * @since 0.8
     */
    removeEventListener:function(name, callback) {
    }
}

/**
 * platforms: android, iphone, ipad
 * @namespace <p>An Annotation object that is created by the method {@link Titanium.Map.createAnnotation}. This object gives you low level control over annotations that can be added to a Map View.</p>
 * @since 0.9
 */
function Titanium_Map_Annotation() {
}
Titanium_Map_Annotation.prototype = {

    /**
     * <p>boolean to indicate whether the pin should animate when dropped</p>
     * platforms: android, iphone, ipad
     * @type boolean
     * @since 0.9
     */
    animate:null,

    /**
     * <p>image view for the pin instead of default image.</p>
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.9
     */
    image:null,

    /**
     * <p>the left button image on the annotation. must either be a button type constant or url</p>
     * platforms: android, iphone, ipad
     * @type int,string
     * @since 0.9
     */
    leftButton:null,

    /**
     * <p>a left view that is displayed on the annotation</p>
     * platforms: android, iphone, ipad
     * @type object
     * @since 0.9
     */
    leftView:null,

    /**
     * <p>Android only. <em>DEPRECATED</em> use {@link Titanium.Map.Annotation.image} property instead.</p>
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.9
     */
    pinImage:null,

    /**
     * <p>the pin color as one of {@link Titanium.Map.ANNOTATION_RED}, {@link Titanium.Map.ANNOTATION_GREEN} or {@link Titanium.Map.ANNOTATION_PURPLE}.</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.9
     */
    pincolor:null,

    /**
     * <p>the right button image on the annotation. must either be a button type constant or url</p>
     * platforms: android, iphone, ipad
     * @type int,string
     * @since 0.9
     */
    rightButton:null,

    /**
     * <p>a right view that is displayed on the annotation</p>
     * platforms: android, iphone, ipad
     * @type object
     * @since 0.9
     */
    rightView:null,

    /**
     * <p>the secondary title of the annotation view</p>
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.9
     */
    subtitle:null,

    /**
     * <p>the key in the locale file to use for the subtitle property</p>
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.9
     */
    subtitleid:null,

    /**
     * <p>the primary title of the annotation view</p>
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.9
     */
    title:null,

    /**
     * <p>the key in the locale file to use for the title property</p>
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.9
     */
    titleid:null,


    /**
     * add an event listener for the instance to receive view triggered events
     * platforms: android, iphone, ipad
     * @param {string} name name of the event
     * @param {function} callback callback function to invoke when the event is fired
     * @returns void
     * @since 0.9
     */
    addEventListener:function(name, callback) {
    },

    /**
     * fire a synthesized event to the views listener
     * platforms: android, iphone, ipad
     * @param {string} name name of the event
     * @param {object} event event object
     * @returns void
     * @since 0.9
     */
    fireEvent:function(name, event) {
    },

    /**
     * remove a previously added event listener
     * platforms: android, iphone, ipad
     * @param {string} name name of the event
     * @param {function} callback callback function passed in addEventListener
     * @returns void
     * @since 0.9
     */
    removeEventListener:function(name, callback) {
    }
}

/**
 * Notes: <p>For Android, you will need to {@link http://code.google.com/android/maps} to use maps in your application.  On iPhone, you cannot call any methods on a map view until it has been added to a view.</p>
 * platforms: android, iphone, ipad
 * @namespace <p>The MapView is an object created by {@link Titanium.Map.createView} and is used for embedding native mapping capabilities as a view in your application.  With native maps, you can control the mapping location, the type of map, the zoom level and you can add custom annotations directly to the map.</p>
 * @since 0.8
 */
Ti.Map.MapView = {

    /**
     * a dictionary with properties x and y to indicate the anchor point value. anchor specifies the position by which animation should occur. center is 0.5, 0.5
     * platforms: android, iphone, ipad
     * @type object
     * @since 0.8
     */
    anchorPoint:null,

    /**
     * <p>boolean is mapping actions should be animated</p>
     * platforms: android, iphone, ipad
     * @type boolean
     * @since 0.8
     */
    animate:null,

    /**
     * read-only object with x and y properties of where the view is during animation
     * platforms: android, iphone, ipad
     * @type object
     * @since 0.8
     */
    animatedCenterPoint:null,

    /**
     * <p>an array of annotations to add to the map</p>
     * platforms: android, iphone, ipad
     * @type array
     * @since 0.8
     */
    annotations:null,

    /**
     * the background color of the view
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    backgroundColor:null,

    /**
     * the disabled background color of the view. (Android)
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    backgroundDisabledColor:null,

    /**
     * the disabled background image url of the view. (Android)
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    backgroundDisabledImage:null,

    /**
     * the focused background color of the view. focusable must be true for normal views. (Android)
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    backgroundFocusedColor:null,

    /**
     * the focused background image url of the view. focusable must be true for normal views. (Android)
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    backgroundFocusedImage:null,

    /**
     * a background gradient for the view with the properties: type,startPoint,endPoint,startRadius,endRadius,backfillStart,backfillEnd,colors.
     * platforms: android, iphone, ipad
     * @type object
     * @since 0.8
     */
    backgroundGradient:null,

    /**
     * the background image url of the view
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    backgroundImage:null,

    /**
     * End caps specify the portion of an image that should not be resized when an image is stretched. This technique is used to implement buttons and other resizable image-based interface elements. When a button with end caps is resized, the resizing occurs only in the middle of the button, in the region between the end caps. The end caps themselves keep their original size and appearance. This property specifies the size of the left end cap. The middle (stretchable) portion is assumed to be 1 pixel wide. The right end cap is therefore computed by adding the size of the left end cap and the middle portion together and then subtracting that value from the width of the image
     * platforms: android, iphone, ipad
     * @type float
     * @since 0.8
     */
    backgroundLeftCap:null,

    /**
     * the selected background color of the view. focusable must be true for normal views. (Android)
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    backgroundSelectedColor:null,

    /**
     * the selected background image url of the view. focusable must be true for normal views. (Android)
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    backgroundSelectedImage:null,

    /**
     * End caps specify the portion of an image that should not be resized when an image is stretched. This technique is used to implement buttons and other resizable image-based interface elements. When a button with end caps is resized, the resizing occurs only in the middle of the button, in the region between the end caps. The end caps themselves keep their original size and appearance. This property specifies the size of the top end cap. The middle (stretchable) portion is assumed to be 1 pixel wide. The bottom end cap is therefore computed by adding the size of the top end cap and the middle portion together and then subtracting that value from the height of the image
     * platforms: android, iphone, ipad
     * @type float
     * @since 0.8
     */
    backgroundTopCap:null,

    /**
     * the border color of the view
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    borderColor:null,

    /**
     * the border radius of the view
     * platforms: android, iphone, ipad
     * @type float
     * @since 0.8
     */
    borderRadius:null,

    /**
     * the border width of the view
     * platforms: android, iphone, ipad
     * @type float
     * @since 0.8
     */
    borderWidth:null,

    /**
     * property for the view bottom position. This position is relative to the view's parent. Can be either a float value or a dimension string ie 'auto' (default).
     * platforms: android, iphone, ipad
     * @type float,string
     * @since 0.8
     */
    bottom:null,

    /**
     * a dictionary with properties x and y to indicate the center of the views position relative to the parent view
     * platforms: android, iphone, ipad
     * @type object
     * @since 0.8
     */
    center:null,

    /**
     * Set true if you want a view to be focusable when navigating with the trackball or D-Pad. Default: false. (Android Only)
     * platforms: android
     * @type boolean
     * @since 0.8
     */
    focusable:null,

    /**
     * the font family
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    "font-family":null,

    /**
     * the font size
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    "font-size":null,

    /**
     * the font style, either normal or italics
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    "font-style":null,

    /**
     * the font weight, either normal or bold
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    "font-weight":null,

    /**
     * property for the view height. Can be either a float value or a dimension string ie 'auto' (default).
     * platforms: android, iphone, ipad
     * @type float,string
     * @since 0.8
     */
    height:null,

    /**
     * property for the view left position. This position is relative to the view's parent. Can be either a float value or a dimension string ie 'auto' (default).
     * platforms: android, iphone, ipad
     * @type float,string
     * @since 0.8
     */
    left:null,

    /**
     * <p>a dictionary that specifies the following properties specifying the region location to set the map: <tt>latitudeDelta</tt>, <tt>longitudeDelta</tt>, <tt>latitude</tt>, <tt>longitude</tt>.</p>
     * platforms: android, iphone, ipad
     * @type object
     * @since 0.8
     */
    location:null,

    /**
     * <p>the map type constant of either {@link Titanium.Map.STANDARD_TYPE}, {@link Titanium.Map.SATELLITE_TYPE} or {@link Titanium.Map.HYBRID_TYPE}.</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.8
     */
    mapType:null,

    /**
     * the opacity from 0.0-1.0
     * platforms: android, iphone, ipad
     * @type float
     * @since 0.8
     */
    opacity:null,

    /**
     * <p>a dictionary that specifies the following properties specifying the region location to set the map: <tt>latitudeDelta</tt>, <tt>longitudeDelta</tt>, <tt>latitude</tt>, <tt>longitude</tt>.</p>
     * platforms: android, iphone, ipad
     * @type object
     * @since 0.8
     */
    region:null,

    /**
     * <p>boolean to indicate if the map should attempt to fit the map view into the region in the visible view</p>
     * platforms: android, iphone, ipad
     * @type boolean
     * @since 0.8
     */
    regionFit:null,

    /**
     * property for the view right position. This position is relative to the view's parent. Can be either a float value or a dimension string ie 'auto' (default).
     * platforms: android, iphone, ipad
     * @type float,string
     * @since 0.8
     */
    right:null,

    /**
     * the size of the view as a dictionary of width and height properties
     * platforms: android, iphone, ipad
     * @type object
     * @since 0.8
     */
    size:null,

    /**
     * One of Titanium.UI.Android.SOFT_KEYBOARD_DEFAULT_ON_FOCUS, Titanium.UI.Android.SOFT_KEYBOARD_HIDE_ON_FOCUS, or Titanium.UI.Android.SOFT_KEYBOARD_SHOW_ON_FOCUS. (Android only)
     * platforms: android
     * @type int
     * @since 0.8
     */
    softKeyboardOnFocus:null,

    /**
     * property for the view top position. This position is relative to the view's parent. Can be either a float value or a dimension string ie 'auto' (default).
     * platforms: android, iphone, ipad
     * @type float,string
     * @since 0.8
     */
    top:null,

    /**
     * a boolean indicating if the view should receive touch events (true, default) or forward them to peers (false)
     * platforms: android, iphone, ipad
     * @type boolean
     * @since 0.8
     */
    touchEnabled:null,

    /**
     * the transformation matrix to apply to the view
     * platforms: android, iphone, ipad
     * @type object
     * @since 0.8
     */
    transform:null,

    /**
     * <p>boolean to indicate if the map should show the user's current device location as a pin on the map</p>
     * platforms: android, iphone, ipad
     * @type boolean
     * @since 0.8
     */
    userLocation:null,

    /**
     * a boolean of the visibility of the view
     * platforms: android, iphone, ipad
     * @type boolean
     * @since 0.8
     */
    visible:null,

    /**
     * property for the view width. Can be either a float value or a dimension string ie 'auto' (default).
     * platforms: android, iphone, ipad
     * @type float,string
     * @since 0.8
     */
    width:null,

    /**
     * the z index position relative to other sibling views
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.8
     */
    zIndex:null,


    /**
     * add a child to the view hierarchy
     * platforms: android, iphone, ipad
     * @param {object} view the view to add to this views hiearchy
     * @returns void
     * @since 0.8
     */
    add:function(view) {
    },

    /**
     * <p>add a new annotation to the map</p>
     * platforms: android, iphone, ipad
     * @param {object} annotation either a dictionary of properties for the annotation or a [Titanium.Map.Annotation](Titanium.Map.Annotation) instance.
     * @returns void
     * @since 0.8
     */
    addAnnotation:function(annotation) {
    },

    /**
     * <p>add one or more new annotation to the map</p>
     * platforms: android, iphone, ipad
     * @param {array} annotations an array of either a dictionary of properties for the annotation or a [Titanium.Map.Annotation](Titanium.Map.Annotation) instance.
     * @returns void
     * @since 0.8
     */
    addAnnotations:function(annotations) {
    },

    /**
     * add an event listener for the instance to receive view triggered events
     * platforms: android, iphone, ipad
     * @param {string} name name of the event
     * @param {function} callback callback function to invoke when the event is fired
     * @returns void
     * @since 0.8
     */
    addEventListener:function(name, callback) {
    },

    /**
     * <p>add a route. currently only supported on iphone</p>
     * platforms: android, iphone, ipad
     * @param {object} route dictionary with the properties: <tt>name</tt> route name, <tt>points</tt> dictionary of values with longitude and latitude keys, <tt>color</tt> for the line color and <tt>width</tt> for the line width.
     * @returns void
     * @since 0.8
     */
    addRoute:function(route) {
    },

    /**
     * animate the view
     * platforms: android, iphone, ipad
     * @param {object} obj either a dictionary of animation properties or an Animation object
     * @param {function} callback function to be invoked upon completion of the animation
     * @returns void
     * @since 0.8
     */
    animate:function(obj, callback) {
    },

    /**
     * <p>cause the annotation to be deselected (hidden).</p>
     * platforms: android, iphone, ipad
     * @param {string,object} annotation either a string of the annotation title or a [Titanium.Map.Annotation](Titanium.Map.Annotation) reference.
     * @returns void
     * @since 0.8
     */
    deselectAnnotation:function(annotation) {
    },

    /**
     * fire a synthesized event to the views listener
     * platforms: android, iphone, ipad
     * @param {string} name name of the event
     * @param {object} event event object
     * @returns void
     * @since 0.8
     */
    fireEvent:function(name, event) {
    },

    /**
     * hide the view
     * platforms: android, iphone, ipad
     * @returns void
     * @since 0.8
     */
    hide:function() {
    },

    /**
     * remove a previously add view from the view hiearchy
     * platforms: android, iphone, ipad
     * @param {object} view the view to remove from this views hiearchy
     * @returns void
     * @since 0.8
     */
    remove:function(view) {
    },

    /**
     * <p>removes all annotations added to the map</p>
     * platforms: android, iphone, ipad
     * @returns void
     * @since 0.8
     */
    removeAllAnnotations:function() {
    },

    /**
     * <p>remove an existing annotation from the map</p>
     * platforms: android, iphone, ipad
     * @param {string,object} annotation either a string of the annotation title or a [Titanium.Map.Annotation](Titanium.Map.Annotation) reference.
     * @returns void
     * @since 0.8
     */
    removeAnnotation:function(annotation) {
    },

    /**
     * <p>remove one or more existing annotations from the map</p>
     * platforms: android, iphone, ipad
     * @param {array} annotation an array of either a string of the annotation title or a [Titanium.Map.Annotation](Titanium.Map.Annotation) reference.
     * @returns void
     * @since 0.8
     */
    removeAnnotations:function(annotation) {
    },

    /**
     * remove a previously added event listener
     * platforms: android, iphone, ipad
     * @param {string} name name of the event
     * @param {function} callback callback function passed in addEventListener
     * @returns void
     * @since 0.8
     */
    removeEventListener:function(name, callback) {
    },

    /**
     * <p>remove a previously added route. currently only supported on iphone</p>
     * platforms: android, iphone, ipad
     * @param {object} route same route object used during addRoute
     * @returns void
     * @since 0.8
     */
    removeRoute:function(route) {
    },

    /**
     * <p>cause the annotation to be selected (shown).</p>
     * platforms: android, iphone, ipad
     * @param {string,object} annotation either a string of the annotation title or a [Titanium.Map.Annotation](Titanium.Map.Annotation) reference.
     * @returns void
     * @since 0.8
     */
    selectAnnotation:function(annotation) {
    },

    /**
     * <p>set and center the map location.</p>
     * platforms: android, iphone, ipad
     * @param {object} location a dictionary that specifies the following properties specifying the location to set the map: <tt>latitudeDelta</tt>, <tt>longitudeDelta</tt>, <tt>latitude</tt>, <tt>longitude</tt>.
     * @returns void
     * @since 0.8
     */
    setLocation:function(location) {
    },

    /**
     * <p>set the type of map (satellite, hybrid, standard)</p>
     * platforms: android, iphone, ipad
     * @param {int} mapType the map type constant of either {@link Titanium.Map.STANDARD_TYPE}, {@link Titanium.Map.SATELLITE_TYPE} or {@link Titanium.Map.HYBRID_TYPE}.
     * @returns void
     * @since 0.8
     */
    setMapType:function(mapType) {
    },

    /**
     * make the view visible
     * platforms: android, iphone, ipad
     * @returns void
     * @since 0.8
     */
    show:function() {
    },

    /**
     * return a Blob image of the rendered view
     * platforms: android, iphone, ipad
     * @param {function} f function to be invoked upon completion. if non-null, this method will be performed asynchronously. if null, it will be performed immediately
     * @since 0.8
     */
    toImage:function(f) {
    },

    /**
     * <p>zoom in or out of the map</p>
     * platforms: android, iphone, ipad
     * @param {double} level zoom level (can be positive or negative)
     * @returns void
     * @since 0.8
     */
    zoom:function(level) {
    }
}

/**
 * platforms: android, iphone, ipad
 * @namespace <p>The top level Media module.  The Media module is used accessing the device's media related  functionality such as playing audio or recording video.</p>
 * @since 0.1
 */
Ti.Media = {

    /**
     * <p>audio file format 3GPP-2</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.1
     */
    AUDIO_FILEFORMAT_3GP2:null,

    /**
     * <p>audio file format 3GPP</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.1
     */
    AUDIO_FILEFORMAT_3GPP:null,

    /**
     * <p>audio file format AIFF</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.1
     */
    AUDIO_FILEFORMAT_AIFF:null,

    /**
     * <p>audio file format AMR</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.1
     */
    AUDIO_FILEFORMAT_AMR:null,

    /**
     * <p>audio file format Apple Compressed Audio Format (CAF)</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.1
     */
    AUDIO_FILEFORMAT_CAF:null,

    /**
     * <p>audio file format MP3</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.1
     */
    AUDIO_FILEFORMAT_MP3:null,

    /**
     * <p>audio file format MP4</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.1
     */
    AUDIO_FILEFORMAT_MP4:null,

    /**
     * <p>audio file format MP4A</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.1
     */
    AUDIO_FILEFORMAT_MP4A:null,

    /**
     * <p>audio file format WAVE</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.1
     */
    AUDIO_FILEFORMAT_WAVE:null,

    /**
     * <p>audio format MPEG4 AAC encoding</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.1
     */
    AUDIO_FORMAT_AAC:null,

    /**
     * <p>audio format 8-bit aLaw encoding</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.1
     */
    AUDIO_FORMAT_ALAW:null,

    /**
     * <p>audio format apple lossless encoding</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.1
     */
    AUDIO_FORMAT_APPLE_LOSSLESS:null,

    /**
     * <p>audio format iLBC encoding</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.1
     */
    AUDIO_FORMAT_ILBC:null,

    /**
     * <p>audio format Apple IMA4 encoding</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.1
     */
    AUDIO_FORMAT_IMA4:null,

    /**
     * <p>audio format Linear 16-bit, PCM encoding</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.1
     */
    AUDIO_FORMAT_LINEAR_PCM:null,

    /**
     * <p>audio format 8-bit muLaw encoding</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.1
     */
    AUDIO_FORMAT_ULAW:null,

    /**
     * <p>constant for line type headphones</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.1
     */
    AUDIO_HEADPHONES:null,

    /**
     * <p>constant line type headphones and microphone</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.1
     */
    AUDIO_HEADPHONES_AND_MIC:null,

    /**
     * <p>constant line type headset in/out</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.1
     */
    AUDIO_HEADSET_INOUT:null,

    /**
     * <p>constant line type line out</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.1
     */
    AUDIO_LINEOUT:null,

    /**
     * <p>constant line type microphone</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.1
     */
    AUDIO_MICROPHONE:null,

    /**
     * <p>constant line type muted switch is on</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.1
     */
    AUDIO_MUTED:null,

    /**
     * <p>constant line type receiver and microphone</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.1
     */
    AUDIO_RECEIVER_AND_MIC:null,

    /**
     * <p>For long-duration sounds such as rain, car engine noise, and so on. It is also for 'play along' style applications, such a virtual piano that a user plays over iPod audio.</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.1
     */
    AUDIO_SESSION_MODE_AMBIENT:null,

    /**
     * <p>For playing recorded music or other sounds that are central to the successful use of your application. When using this mode, your application audio continues with the Ring/Silent switch set to silent or when the screen locks. This property normally disallows iPod audio to mix with application audio</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.1
     */
    AUDIO_SESSION_MODE_PLAYBACK:null,

    /**
     * <p>Allows recording (input) and playback (output) of audio, such as for a VOIP (voice over IP) application. This category is appropriate for simultaneous recording and playback, and also for applications that record and play back but not simultaneously. If you want to ensure that sounds such as Messages alerts do not play while your application is recording, use  {@link Titanium.Media.AUDIO_SESSION_MODE_RECORD} instead. This category normally disallows iPod audio to mix with application audio.</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.1
     */
    AUDIO_SESSION_MODE_PLAY_AND_RECORD:null,

    /**
     * <p>For recording audio; it silences playback audio.</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.1
     */
    AUDIO_SESSION_MODE_RECORD:null,

    /**
     * <p>The solo ambient sound category is for long-duration sounds such as rain, car engine noise, and so on. When you use this category, audio from built-in applications, such as the iPod, is silenced. Your audio is silenced when the Ring/Silent switch is set to <tt>silent</tt> or when the screen locks.</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.1
     */
    AUDIO_SESSION_MODE_SOLO_AMBIENT:null,

    /**
     * <p>constant line type speaker</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.1
     */
    AUDIO_SPEAKER:null,

    /**
     * <p>constant line type unavailable</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.1
     */
    AUDIO_UNAVAILABLE:null,

    /**
     * <p>constant line type unknown or not determined</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.1
     */
    AUDIO_UNKNOWN:null,

    /**
     * <p>constant for media device busy error</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.1
     */
    DEVICE_BUSY:null,

    /**
     * <p>media type constant to signify photo</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.1
     */
    MEDIA_TYPE_PHOTO:null,

    /**
     * <p>media type constant to signify video</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.1
     */
    MEDIA_TYPE_VIDEO:null,

    /**
     * <p>media containing any content</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.1
     */
    MUSIC_MEDIA_TYPE_ALL:null,

    /**
     * <p>media containing any audio content</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.1
     */
    MUSIC_MEDIA_TYPE_ANY_AUDIO:null,

    /**
     * <p>media containing audiobook content</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.1
     */
    MUSIC_MEDIA_TYPE_AUDIOBOOK:null,

    /**
     * <p>media containing music content</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.1
     */
    MUSIC_MEDIA_TYPE_MUSIC:null,

    /**
     * <p>media containing podcast content</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.1
     */
    MUSIC_MEDIA_TYPE_PODCAST:null,

    /**
     * <p>constant for repeating all setting</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.1
     */
    MUSIC_PLAYER_REPEAT_ALL:null,

    /**
     * <p>constant for user default repeat setting</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.1
     */
    MUSIC_PLAYER_REPEAT_DEFAULT:null,

    /**
     * <p>constant for no repeat setting</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.1
     */
    MUSIC_PLAYER_REPEAT_NONE:null,

    /**
     * <p>constant for repeating one item setting</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.1
     */
    MUSIC_PLAYER_REPEAT_ONE:null,

    /**
     * <p>constant for shuffling complete albums setting</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.1
     */
    MUSIC_PLAYER_SHUFFLE_ALBUMS:null,

    /**
     * <p>constant for user default shuffle setting</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.1
     */
    MUSIC_PLAYER_SHUFFLE_DEFAULT:null,

    /**
     * <p>constant for no shuffle setting</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.1
     */
    MUSIC_PLAYER_SHUFFLE_NONE:null,

    /**
     * <p>constant for shuffling songs setting</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.1
     */
    MUSIC_PLAYER_SHUFFLE_SONGS:null,

    /**
     * <p>constant for interrupted state</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.1
     */
    MUSIC_PLAYER_STATE_INTERRUPTED:null,

    /**
     * <p>constant for paused state</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.1
     */
    MUSIC_PLAYER_STATE_PAUSED:null,

    /**
     * <p>constant for playing state</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.1
     */
    MUSIC_PLAYER_STATE_PLAYING:null,

    /**
     * <p>constant for backward seek state</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.1
     */
    MUSIC_PLAYER_STATE_SEEK_BACKWARD:null,

    /**
     * <p>constant for forward seek state</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.1
     */
    MUSIC_PLAYER_STATE_SKEEK_FORWARD:null,

    /**
     * <p>constant for stopped state</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.1
     */
    MUSIC_PLAYER_STATE_STOPPED:null,

    /**
     * <p>constant for media no camera error</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.1
     */
    NO_CAMERA:null,

    /**
     * <p>constant for media no video error</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.1
     */
    NO_VIDEO:null,

    /**
     * <p>media type constant to use high-quality video recording. Recorded files are suitable for on-device playback and for wired transfer to the Desktop using Image Capture; they are likely to be too large for transfer using Wi-Fi.</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.1
     */
    QUALITY_HIGH:null,

    /**
     * <p>media type constant to use use low-quality video recording. Recorded files can usually be transferred over the cellular network.</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.1
     */
    QUALITY_LOW:null,

    /**
     * <p>media type constant to use medium-quality video recording. Recorded files can usually be transferred using Wi-Fi. This is the default video quality setting.</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.1
     */
    QUALITY_MEDIUM:null,

    /**
     * <p>constant for unknown media error</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.1
     */
    UNKNOWN_ERROR:null,

    /**
     * <p>constant for video controls default</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.1
     */
    VIDEO_CONTROL_DEFAULT:null,

    /**
     * <p>Controls for an embedded view. Used in conjunction with movieControlStyle property of {@link Titanium.Media.VideoPlayer} in iPhone 3.2+</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.1
     */
    VIDEO_CONTROL_EMBEDDED:null,

    /**
     * <p>Controls for fullscreen. Used in conjunction with movieControlStyle property of {@link Titanium.Media.VideoPlayer} in iPhone 3.2+</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.1
     */
    VIDEO_CONTROL_FULLSCREEN:null,

    /**
     * <p>constant for video controls hidden</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.1
     */
    VIDEO_CONTROL_HIDDEN:null,

    /**
     * <p>No controls. Used in conjunction with movieControlStyle property of {@link Titanium.Media.VideoPlayer} in iPhone 3.2+</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.1
     */
    VIDEO_CONTROL_NONE:null,

    /**
     * <p>constant for video controls volume only</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.1
     */
    VIDEO_CONTROL_VOLUME_ONLY:null,

    /**
     * <p>the video playback ended normally</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.1
     */
    VIDEO_FINISH_REASON_PLAYBACK_ENDED:null,

    /**
     * <p>the video playback ended abnormally</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.1
     */
    VIDEO_FINISH_REASON_PLAYBACK_ERROR:null,

    /**
     * <p>the video playback ended by user action (such as clicking the <tt>Done</tt> button)</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.1
     */
    VIDEO_FINISH_REASON_USER_EXITED:null,

    /**
     * <p>the current media is playable</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.1
     */
    VIDEO_LOAD_STATE_PLAYABLE:null,

    /**
     * <p>playback will be automatically started in this state when <tt>autoplay</tt> is true</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.1
     */
    VIDEO_LOAD_STATE_PLAYTHROUGH_OK:null,

    /**
     * <p>playback will be automatically paused in this state, if started</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.1
     */
    VIDEO_LOAD_STATE_STALLED:null,

    /**
     * <p>the current load state is not known</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.1
     */
    VIDEO_LOAD_STATE_UNKNOWN:null,

    /**
     * <p>A audio type of media in the movie returned by {@link Titanium.Media.VideoPlayer} <tt>mediaTypes</tt> property</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.1
     */
    VIDEO_MEDIA_TYPE_AUDIO:null,

    /**
     * <p>An unknown type of media in the movie returned by {@link Titanium.Media.VideoPlayer} <tt>mediaTypes</tt> property.</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.1
     */
    VIDEO_MEDIA_TYPE_NONE:null,

    /**
     * <p>A video type of media in the movie returned by {@link Titanium.Media.VideoPlayer} <tt>mediaTypes</tt> property</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.1
     */
    VIDEO_MEDIA_TYPE_VIDEO:null,

    /**
     * <p>playback has been interrupted</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.1
     */
    VIDEO_PLAYBACK_STATE_INTERRUPTED:null,

    /**
     * <p>playback is paused</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.1
     */
    VIDEO_PLAYBACK_STATE_PAUSED:null,

    /**
     * <p>playback is playing</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.1
     */
    VIDEO_PLAYBACK_STATE_PLAYING:null,

    /**
     * <p>playback is rewinding</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.1
     */
    VIDEO_PLAYBACK_STATE_SEEKING_BACKWARD:null,

    /**
     * <p>playback is seeking forward</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.1
     */
    VIDEO_PLAYBACK_STATE_SEEKING_FORWARD:null,

    /**
     * <p>playback has stopped</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.1
     */
    VIDEO_PLAYBACK_STATE_STOPPED:null,

    /**
     * <p>the video will not repeat</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.1
     */
    VIDEO_REPEAT_MODE_NONE:null,

    /**
     * <p>the video will repeat once</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.1
     */
    VIDEO_REPEAT_MODE_ONE:null,

    /**
     * <p>constant for video aspect where the movie will be scaled until the movie fills the entire screen. Content at the edges of the larger of the two dimensions is clipped so that the other dimension fits the screen exactly. The aspect ratio of the movie is preserved.</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.1
     */
    VIDEO_SCALING_ASPECT_FILL:null,

    /**
     * <p>constant for video aspect fit where the movie will be scaled until one dimension fits on the screen exactly. In the other dimension, the region between the edge of the movie and the edge of the screen is filled with a black bar. The aspect ratio of the movie is preserved.</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.1
     */
    VIDEO_SCALING_ASPECT_FIT:null,

    /**
     * <p>constant for video aspect where the movie will be scaled until both dimensions fit the screen exactly. The aspect ratio of the movie is not preserved.</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.1
     */
    VIDEO_SCALING_MODE_FILL:null,

    /**
     * <p>constant for video scaling where the scaling is turn off. The movie will not be scaled.</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.1
     */
    VIDEO_SCALING_NONE:null,

    /**
     * <p>the video source type is a file. Related to the <tt>sourceType</tt> property of {@link Titanium.Media.VideoPlayer}</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.1
     */
    VIDEO_SOURCE_TYPE_FILE:null,

    /**
     * <p>the video source type is a remote stream. Related to the <tt>sourceType</tt> property of {@link Titanium.Media.VideoPlayer}</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.1
     */
    VIDEO_SOURCE_TYPE_STREAMING:null,

    /**
     * <p>the video source type is unknown. Related to the <tt>sourceType</tt> property of {@link Titanium.Media.VideoPlayer}</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.1
     */
    VIDEO_SOURCE_TYPE_UNKNOWN:null,

    /**
     * <p>use the exact time</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.1
     */
    VIDEO_TIME_OPTION_EXACT:null,

    /**
     * <p>use the closest keyframe in the time</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.1
     */
    VIDEO_TIME_OPTION_NEAREST_KEYFRAME:null,

    /**
     * <p>an instance of {@link Titanium.Media.MusicPlayer} representing the app-specific music player.  iPhone/iPad only</p>
     * platforms: android, iphone, ipad
     * @type object
     * @since 0.1
     */
    appMusicPlayer:null,

    /**
     * <p>returns the line type constant for the current line type</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.1
     */
    audioLineType:null,

    /**
     * <p>returns true if the device is playing audio</p>
     * platforms: android, iphone, ipad
     * @type boolean
     * @since 0.1
     */
    audioPlaying:null,

    /**
     * <p>a constant for the audio session mode to be used. Must be set while the audio session is inactive (no sounds are playing, no listeners for audio properties on the Media module, but the iPod may be active).</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.1
     */
    audioSessionMode:null,

    /**
     * <p>return an array of media type constants supported for the camera</p>
     * platforms: android, iphone, ipad
     * @type array
     * @since 0.1
     */
    availableCameraMediaTypes:null,

    /**
     * <p>return an array of media type constants supported for saving to the photo gallery</p>
     * platforms: android, iphone, ipad
     * @type array
     * @since 0.1
     */
    availablePhotoGalleryMediaTypes:null,

    /**
     * <p>return an array of media type constants supported for the photo</p>
     * platforms: android, iphone, ipad
     * @type array
     * @since 0.1
     */
    availablePhotoMediaTypes:null,

    /**
     * <p>return the current average microphone level in dB or -1 if microphone monitoring is disabled</p>
     * platforms: android, iphone, ipad
     * @type float
     * @since 0.1
     */
    averageMicrophonePower:null,

    /**
     * <p>returns true if the device has recording input device available</p>
     * platforms: android, iphone, ipad
     * @type boolean
     * @since 0.1
     */
    canRecord:null,

    /**
     * <p>returns true if the device has camera support</p>
     * platforms: android, iphone, ipad
     * @type boolean
     * @since 0.1
     */
    isCameraSupported:null,

    /**
     * <p>return the current microphone level peak power in dB or -1 if microphone monitoring is disabled</p>
     * platforms: android, iphone, ipad
     * @type float
     * @since 0.1
     */
    peakMicrophonePower:null,

    /**
     * <p>an instance of {@link Titanium.Media.MusicPlayer} representing the system-wide music player.  iPhone/iPad only</p>
     * platforms: android, iphone, ipad
     * @type object
     * @since 0.1
     */
    systemMusicPlayer:null,

    /**
     * <p>the current volume of the playback device</p>
     * platforms: android, iphone, ipad
     * @type float
     * @since 0.1
     */
    volume:null,


    /**
     * add an event listener for the instance to receive view triggered events
     * platforms: android, iphone, ipad
     * @param {string} name name of the event
     * @param {function} callback callback function to invoke when the event is fired
     * @returns void
     * @since 0.1
     */
    addEventListener:function(name, callback) {
    },

    /**
     * <p>play a device beep notification</p>
     * platforms: android, iphone, ipad
     * @returns void
     * @since 0.1
     */
    beep:function() {
    },

    /**
     * create and return an instance of {@link Titanium.Media.AudioPlayer}
     * platforms: android, iphone, ipad
     * @param {object} parameters (optional) a dictionary object properties defined in {@link Titanium.Media.AudioPlayer}
     * @since 0.1
     */
    createAudioPlayer:function(parameters) {
    },

    /**
     * create and return an instance of {@link Titanium.Media.AudioRecorder}
     * platforms: android, iphone, ipad
     * @param {object} parameters (optional) a dictionary object properties defined in {@link Titanium.Media.AudioRecorder}
     * @since 0.1
     */
    createAudioRecorder:function(parameters) {
    },

    /**
     * create and return an instance of {@link Titanium.Media.Item}
     * platforms: android, iphone, ipad
     * @param {object} parameters (optional) a dictionary object properties defined in {@link Titanium.Media.Item}
     * @since 0.1
     */
    createItem:function(parameters) {
    },

    /**
     * create and return an instance of {@link Titanium.Media.MusicPlayer}
     * platforms: android, iphone, ipad
     * @param {object} parameters (optional) a dictionary object properties defined in {@link Titanium.Media.MusicPlayer}
     * @since 0.1
     */
    createMusicPlayer:function(parameters) {
    },

    /**
     * create and return an instance of {@link Titanium.Media.Sound}
     * platforms: android, iphone, ipad
     * @param {object} parameters (optional) a dictionary object properties defined in {@link Titanium.Media.Sound}
     * @since 0.1
     */
    createSound:function(parameters) {
    },

    /**
     * create and return an instance of {@link Titanium.Media.VideoPlayer}
     * platforms: android, iphone, ipad
     * @param {object} parameters (optional) a dictionary object properties defined in {@link Titanium.Media.VideoPlayer}
     * @since 0.1
     */
    createVideoPlayer:function(parameters) {
    },

    /**
     * fire a synthesized event to the views listener
     * platforms: android, iphone, ipad
     * @param {string} name name of the event
     * @param {object} event event object
     * @returns void
     * @since 0.1
     */
    fireEvent:function(name, event) {
    },

    /**
     * <p>hide the device camera UI. this must be called after calling <tt>showCamera</tt> and only when <tt>autohide</tt> is set to false. this method will cause the media capture device be hidden.</p>
     * platforms: android, iphone, ipad
     * @returns void
     * @since 0.1
     */
    hideCamera:function() {
    },

    /**
     * <p>hide the music library.  This must be called after calling <tt>showMusicLibrary</tt> and only when <tt>autohide</tt> is set to false.  iPhone and iPad only.</p>
     * platforms: android, iphone, ipad
     * @returns void
     * @since 0.1
     */
    hideMusicLibrary:function() {
    },

    /**
     * <p>return boolean to indicate if the media type is supported</p>
     * platforms: android, iphone, ipad
     * @param {string} media media type as a string of either <tt>camera</tt>, <tt>photo</tt> or <tt>photogallery</tt>.
     * @param {string} type the type of media to check
     * @since 0.1
     */
    isMediaTypeSupported:function(media, type) {
    },

    /**
     * <p>open the photo gallery picker</p>
     * platforms: android, iphone, ipad
     * @param {object} options pass a dictionary with the following supported keys: <tt>success</tt> a function that will be called when the camera is completed, <tt>error</tt> a function that will be called upon receiving an error, <tt>cancel</tt> a function that will be called if the user presses the cancel button, <tt>autohide</tt> boolean if the camera should auto hide after the media capture is completed (defaults to true), <tt>animated</tt> boolean if the dialog should be animated (defaults to true) upon showing and hiding, <tt>saveToPhotoGallery</tt> boolean if the media should be saved to the photo gallery upon successful capture, <tt>allowEditing</tt> boolean if the media should be editable after capture in the UI interface, <tt>mediaTypes</tt> an array of media type constants supported by the capture device UI, <tt>showControls</tt> boolean to indicate if the built-in UI controls should be displayed, <tt>overlay</tt> view which is added as an overlay to the UI (on top), <tt>transform</tt> an transformation matrix that applies to the UI transform. For iPad, <tt>popoverView</tt> can be provided to position the photo gallery popover a specific view and <tt>arrowDirection</tt> can be provided to control the type of arrow and position of the gallery.
     * @returns void
     * @since 0.1
     */
    openPhotoGallery:function(options) {
    },

    /**
     * remove a previously added event listener
     * platforms: android, iphone, ipad
     * @param {string} name name of the event
     * @param {function} callback callback function passed in addEventListener
     * @returns void
     * @since 0.1
     */
    removeEventListener:function(name, callback) {
    },

    /**
     * <p>save media to photo gallery / camera roll</p>
     * platforms: android, iphone, ipad
     * @param {object} media save the media passed to the cameras photo roll/media gallery. must be one of Blob object or File object or an error will be generated.
     * @param {object} callbacks pass a dictionary with the following supported keys: <tt>success</tt> a function that will be called when the save succeeds, and <tt>error</tt> a function that will be called upon anreceiving an error
     * @returns void
     * @since 0.1
     */
    saveToPhotoGallery:function(media, callbacks) {
    },

    /**
     * <p>show the camera</p>
     * platforms: android, iphone, ipad
     * @param {object} options pass a dictionary with the following supported keys: <tt>success</tt> a function that will be called when the camera is completed, <tt>error</tt> a function that will be called upon receiving an error, <tt>cancel</tt> a function that will be called if the user presses the cancel button, <tt>autohide</tt> boolean if the camera should auto hide after the media capture is completed (defaults to true), <tt>animated</tt> boolean if the dialog should be animated (defaults to true) upon showing and hiding, <tt>saveToPhotoGallery</tt> boolean if the media should be saved to the photo gallery upon successful capture, <tt>allowEditing</tt> boolean if the media should be editable after capture in the UI interface, <tt>mediaTypes</tt> an array of media type constants supported by the capture device UI, <tt>videoMaximumDuration</tt> float duration on how long in milliseconds to allow capture before completing, <tt>videoQuality</tt> constant to indicate the video quality during capture, <tt>showControls</tt> boolean to indicate if the built-in UI controls should be displayed, <tt>overlay</tt> view which is added as an overlay to the camera UI (on top), <tt>transform</tt> an transformation matrix that applies to the camera UI transform.
     * @returns void
     * @since 0.1
     */
    showCamera:function(options) {
    },

    /**
     * <p>show the music library.  iPhone and iPad only.</p>
     * platforms: android, iphone, ipad
     * @param {object} options pass a dictionary with the following supported keys: <tt>success</tt> a function that will be called when the camera is completed, <tt>error</tt> a function that will be called upon receiving an error, <tt>cancel</tt> a function that will be called if the user presses the cancel button, <tt>autohide</tt> boolean if the library listing should auto hide after selection is completed (defaults to true), <tt>animated</tt> boolean if the dialog should be animated (defaults to true) upon showing and hiding, <tt>mediaTypes</tt> an array of media type constants defining selectable media (see MUSIC_MEDIA_TYPE_* properties below) as either an array or a bitwise-or single value, <tt>allowMultipleSelections</tt> boolean whether or not more than one media selection is allowed
     * @returns void
     * @since 0.1
     */
    showMusicLibrary:function(options) {
    },

    /**
     * <p>start the monitoring of microphone sound level</p>
     * platforms: android, iphone, ipad
     * @returns void
     * @since 0.1
     */
    startMicrophoneMonitor:function() {
    },

    /**
     * <p>stop the monitoring of microphone sound level</p>
     * platforms: android, iphone, ipad
     * @returns void
     * @since 0.1
     */
    stopMicrophoneMonitor:function() {
    },

    /**
     * <p>use the device camera to capture a photo. this must be called after calling <tt>showCamera</tt> and only when <tt>autohide</tt> is set to false. this method will cause the media capture device to capture a photo and call the <tt>success</tt> callback.</p>
     * platforms: android, iphone, ipad
     * @returns void
     * @since 0.1
     */
    takePicture:function() {
    },

    /**
     * <p>take a screen shot of the visible UI on the device</p>
     * platforms: android, iphone, ipad
     * @param {function} callback function that will be called upon capture. the event property <tt>media</tt> will contain an image Blob object of the screenshot
     * @returns void
     * @since 0.1
     */
    takeScreenshot:function(callback) {
    },

    /**
     * <p>play a device vibration</p>
     * platforms: android, iphone, ipad
     * @returns void
     * @since 0.1
     */
    vibrate:function() {
    }
}

/**
 * platforms: android
 * @namespace <p>Android-specific media-related functionality.</p>
 * @since 1.7.0
 */
Ti.Media.Android = {


    /**
     * add an event listener for the instance to receive view triggered events
     * platforms: android
     * @param {string} name name of the event
     * @param {function} callback callback function to invoke when the event is fired
     * @returns void
     * @since 1.7.0
     */
    addEventListener:function(name, callback) {
    },

    /**
     * fire a synthesized event to the views listener
     * platforms: android
     * @param {string} name name of the event
     * @param {object} event event object
     * @returns void
     * @since 1.7.0
     */
    fireEvent:function(name, event) {
    },

    /**
     * remove a previously added event listener
     * platforms: android
     * @param {string} name name of the event
     * @param {function} callback callback function passed in addEventListener
     * @returns void
     * @since 1.7.0
     */
    removeEventListener:function(name, callback) {
    },

    /**
     * <p>Use the {@link http://developer.android.com/reference/android/media/MediaScannerConnection} to request immediate scan of particular files so that they become available to the appropriate media providers (Gallery, etc.).</p>
     * platforms: android
     * @param {Array<String>} paths Array of paths to the files you want to be scanned.
     * @param {Array<String>} mimeTypes Array of mime types for the files in the paths parameter.  Can be null, in which case the mime type will be inferred at scan time.
     * @param {function} callback A function that will be called when each file is finished being scanned.  Check the callback argument's "path" and "uri" properties to see the path that was scanned and the resulting content uri.
     * @returns void
     * @since 1.7.0
     */
    scanMediaFiles:function(paths, mimeTypes, callback) {
    },

    /**
     * <p>(Android only) Set the system homescreen wallpaper</p>
     * platforms: android
     * @param {object} image Image blob such as what can be retrieved via callbacks for {@link Titanium.Media.openPhotoGallery} and {@link Titanium.Media.showCamera}, as well as from the return value of {@link Titanium.Filesystem.File.read}.
     * @param {boolean} scale Set to true if you want the image to be scaled with respect to the system wallpaper desired width, or false to leave it as-is.
     * @returns void
     * @since 1.7.0
     */
    setSystemWallpaper:function(image, scale) {
    }
}

/**
 * platforms: android, iphone, ipad
 * @namespace <p>The AudioPlayer object is returned by {@link Titanium.Media.createAudioPlayer} and is used for streaming audio to the device and low-level control of the audio playback.</p>
 * @since 0.9
 */
function Titanium_Media_AudioPlayer() {
}
Titanium_Media_AudioPlayer.prototype = {

    /**
     * <p>current playback is in the buffering from the network state</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.9
     */
    STATE_BUFFERING:null,

    /**
     * <p>current playback is in the initialization state</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.9
     */
    STATE_INITIALIZED:null,

    /**
     * <p>current playback is in the paused state</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.9
     */
    STATE_PAUSED:null,

    /**
     * <p>current playback is in the playing state</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.9
     */
    STATE_PLAYING:null,

    /**
     * <p>current playback is in the starting playback state</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.9
     */
    STATE_STARTING:null,

    /**
     * <p>current playback is in the stopped state</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.9
     */
    STATE_STOPPED:null,

    /**
     * <p>current playback is in the stopping state</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.9
     */
    STATE_STOPPING:null,

    /**
     * <p>current playback is in the waiting for audio data from the network state</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.9
     */
    STATE_WAITING_FOR_DATA:null,

    /**
     * <p>current playback is in the waiting for audio data to fill the queue state</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.9
     */
    STATE_WAITING_FOR_QUEUE:null,

    /**
     * <p>boolean to indicate if audio should continue playing even if Activity is paused (Android only as of 1.3.0)</p>
     * platforms: android, iphone, ipad
     * @type boolean
     * @since 0.9
     */
    allowBackground:null,

    /**
     * <p>bit rate of the current playback stream</p>
     * platforms: android, iphone, ipad
     * @type double
     * @since 0.9
     */
    bitRate:null,

    /**
     * <p>the buffer size used for streaming, in bytes. iOS only.</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.9
     */
    bufferSize:null,

    /**
     * <p>returns boolean indicating if the playback is idle</p>
     * platforms: android, iphone, ipad
     * @type boolean
     * @since 0.9
     */
    idle:null,

    /**
     * <p>returns boolean indicating if the playback is paused</p>
     * platforms: android, iphone, ipad
     * @type boolean
     * @since 0.9
     */
    paused:null,

    /**
     * <p>returns boolean indicating if the playback is streaming audio</p>
     * platforms: android, iphone, ipad
     * @type boolean
     * @since 0.9
     */
    playing:null,

    /**
     * <p>returns the current playback progress. Will return zero if sampleRate has not yet been detected</p>
     * platforms: android, iphone, ipad
     * @type double
     * @since 0.9
     */
    progress:null,

    /**
     * <p>returns int for the current state of playback</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.9
     */
    state:null,

    /**
     * <p>returns the url for the current playback</p>
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.9
     */
    url:null,

    /**
     * <p>returns boolean indicating if the playback is waiting for audio data from the network</p>
     * platforms: android, iphone, ipad
     * @type boolean
     * @since 0.9
     */
    waiting:null,


    /**
     * add an event listener for the instance to receive view triggered events
     * platforms: android, iphone, ipad
     * @param {string} name name of the event
     * @param {function} callback callback function to invoke when the event is fired
     * @returns void
     * @since 0.9
     */
    addEventListener:function(name, callback) {
    },

    /**
     * fire a synthesized event to the views listener
     * platforms: android, iphone, ipad
     * @param {string} name name of the event
     * @param {object} event event object
     * @returns void
     * @since 0.9
     */
    fireEvent:function(name, event) {
    },

    /**
     * <p>pause playback</p>
     * platforms: android, iphone, ipad
     * @returns void
     * @since 0.9
     */
    pause:function() {
    },

    /**
     * remove a previously added event listener
     * platforms: android, iphone, ipad
     * @param {string} name name of the event
     * @param {function} callback callback function passed in addEventListener
     * @returns void
     * @since 0.9
     */
    removeEventListener:function(name, callback) {
    },

    /**
     * <p>control the playback of the audio</p>
     * platforms: android, iphone, ipad
     * @param {boolean} paused pass true to pause the current playback temporarily, false to unpause it
     * @returns void
     * @since 0.9
     */
    setPaused:function(paused) {
    },

    /**
     * <p>change the url of the audio playback</p>
     * platforms: android, iphone, ipad
     * @param {string} url the new url
     * @returns void
     * @since 0.9
     */
    setUrl:function(url) {
    },

    /**
     * <p>start playback</p>
     * platforms: android, iphone, ipad
     * @returns void
     * @since 0.9
     */
    start:function() {
    },

    /**
     * <p>convert a state into a textual description suitable for display</p>
     * platforms: android, iphone, ipad
     * @since 0.9
     */
    stateDescription:function() {
    },

    /**
     * <p>stop playback</p>
     * platforms: android, iphone, ipad
     * @returns void
     * @since 0.9
     */
    stop:function() {
    }
}

/**
 * platforms: iphone, ipad
 * @namespace <p>The AudioRecorder object is returned by {@link Titanium.Media.createAudioRecorder} and is used for recording audio from the device microphone.</p>
 * @since 0.9
 */
function Titanium_Media_AudioRecorder() {
}
Titanium_Media_AudioRecorder.prototype = {

    /**
     * <p>audio compression constant to be used for the recording</p>
     * platforms: iphone, ipad
     * @type int
     * @since 0.9
     */
    compression:null,

    /**
     * <p>audio format constant for used for the recording</p>
     * platforms: iphone, ipad
     * @type int
     * @since 0.9
     */
    format:null,

    /**
     * <p>readonly property to indicate if paused</p>
     * platforms: iphone, ipad
     * @type boolean
     * @since 0.9
     */
    paused:null,

    /**
     * <p>readonly property to indicate if recording</p>
     * platforms: iphone, ipad
     * @type boolean
     * @since 0.9
     */
    recording:null,

    /**
     * <p>readonly property to indicate if stopped</p>
     * platforms: iphone, ipad
     * @type boolean
     * @since 0.9
     */
    stopped:null,


    /**
     * add an event listener for the instance to receive view triggered events
     * platforms: iphone, ipad
     * @param {string} name name of the event
     * @param {function} callback callback function to invoke when the event is fired
     * @returns void
     * @since 0.9
     */
    addEventListener:function(name, callback) {
    },

    /**
     * fire a synthesized event to the views listener
     * platforms: iphone, ipad
     * @param {string} name name of the event
     * @param {object} event event object
     * @returns void
     * @since 0.9
     */
    fireEvent:function(name, event) {
    },

    /**
     * <p>called to temporarily pause recording</p>
     * platforms: iphone, ipad
     * @returns void
     * @since 0.9
     */
    pause:function() {
    },

    /**
     * remove a previously added event listener
     * platforms: iphone, ipad
     * @param {string} name name of the event
     * @param {function} callback callback function passed in addEventListener
     * @returns void
     * @since 0.9
     */
    removeEventListener:function(name, callback) {
    },

    /**
     * <p>called to resume audio recording</p>
     * platforms: iphone, ipad
     * @returns void
     * @since 0.9
     */
    resume:function() {
    },

    /**
     * <p>called to start recording audio</p>
     * platforms: iphone, ipad
     * @returns void
     * @since 0.9
     */
    start:function() {
    },

    /**
     * <p>called to stop recording audio</p>
     * platforms: iphone, ipad
     * @returns void
     * @since 0.9
     */
    stop:function() {
    }
}

/**
 * platforms: iphone, ipad
 * @namespace <p>A representation of a media item returned by the music picker as part of the <tt>items</tt> array in the dictionary passed to its <tt>success</tt> function.</p>
 * @since 1.4.0
 */
Ti.Media.Item = {

    /**
     * <p>the artist for the album of the item</p>
     * platforms: iphone, ipad
     * @type string
     * @since 1.4.0
     */
    albumArtist:null,

    /**
     * <p>the album title of the item</p>
     * platforms: iphone, ipad
     * @type string
     * @since 1.4.0
     */
    albumTitle:null,

    /**
     * <p>the number of tracks for the album of the item</p>
     * platforms: iphone, ipad
     * @type int
     * @since 1.4.0
     */
    albumTrackCount:null,

    /**
     * <p>the track number of the item</p>
     * platforms: iphone, ipad
     * @type int
     * @since 1.4.0
     */
    albumTrackNumber:null,

    /**
     * <p>the artist of the item</p>
     * platforms: iphone, ipad
     * @type string
     * @since 1.4.0
     */
    artist:null,

    /**
     * <p>a blob object containing the image for the item's artwork, or null if none</p>
     * platforms: iphone, ipad
     * @type object
     * @since 1.4.0
     */
    artwork:null,

    /**
     * <p>the composer of the item</p>
     * platforms: iphone, ipad
     * @type string
     * @since 1.4.0
     */
    composer:null,

    /**
     * <p>the total number of discs of the item</p>
     * platforms: iphone, ipad
     * @type int
     * @since 1.4.0
     */
    discCount:null,

    /**
     * <p>the disc number of the item</p>
     * platforms: iphone, ipad
     * @type int
     * @since 1.4.0
     */
    discNumber:null,

    /**
     * <p>the genre of the item</p>
     * platforms: iphone, ipad
     * @type string
     * @since 1.4.0
     */
    genre:null,

    /**
     * <p>true if the item is part of a compilation album</p>
     * platforms: iphone, ipad
     * @type boolean
     * @since 1.4.0
     */
    isCompilation:null,

    /**
     * <p>the lyrics of the item</p>
     * platforms: iphone, ipad
     * @type string
     * @since 1.4.0
     */
    lyrics:null,

    /**
     * <p>the type of the item</p>
     * platforms: iphone, ipad
     * @type int
     * @since 1.4.0
     */
    mediaType:null,

    /**
     * <p>the number of times the item has been played</p>
     * platforms: iphone, ipad
     * @type int
     * @since 1.4.0
     */
    playCount:null,

    /**
     * <p>the length (in seconds) of the item</p>
     * platforms: iphone, ipad
     * @type double
     * @since 1.4.0
     */
    playbackDuration:null,

    /**
     * <p>the title of a podcast item.  Only for media types of {@link Titanium.Media.MUSIC_MEDIA_TYPE_PODCAST}.</p>
     * platforms: iphone, ipad
     * @type string
     * @since 1.4.0
     */
    podcastTitle:null,

    /**
     * <p>the rating of the item</p>
     * platforms: iphone, ipad
     * @type int
     * @since 1.4.0
     */
    rating:null,

    /**
     * <p>the number of times the item has been skipped</p>
     * platforms: iphone, ipad
     * @type int
     * @since 1.4.0
     */
    skipCount:null,

    /**
     * <p>the title of the item</p>
     * platforms: iphone, ipad
     * @type string
     * @since 1.4.0
     */
    title:null,



}

/**
 * platforms: iphone, ipad
 * @namespace <p>The MusicPlayer instance returned from {@link Titanium.Media.createMusicPlayer}.  This object represents a music controller.</p>
 * @since 1.4.0
 */
Ti.Media.MusicPlayer = {

    /**
     * <p>the current point in song playback</p>
     * platforms: iphone, ipad
     * @type double
     * @since 1.4.0
     */
    currentPlaybackTime:null,

    /**
     * <p>an Item object which indicates the currently playing media</p>
     * platforms: iphone, ipad
     * @type object
     * @since 1.4.0
     */
    nowPlaying:null,

    /**
     * <p>the playback state; one of {@link Titanium.Media.MUSIC_PLAYER_STATE_STOPPED}, {@link Titanium.Media.MUSIC_PLAYER_STATE_PLAYING}, {@link Titanium.Media.MUSIC_PLAYER_STATE_PAUSED}, {@link Titanium.Media.MUSIC_PLAYER_STATE_INTERRUPTED}, {@link Titanium.Media.MUSIC_PLAYER_STATE_SKEEK_FORWARD}, {@link Titanium.Media.MUSIC_PLAYER_STATE_SEEK_BACKWARD}</p>
     * platforms: iphone, ipad
     * @type int
     * @since 1.4.0
     */
    playbackState:null,

    /**
     * <p>the repeat setting; one of {@link Titanium.Media.MUSIC_PLAYER_REPEAT_DEFAULT}, {@link Titanium.Media.MUSIC_PLAYER_REPEAT_NONE}, {@link Titanium.Media.MUSIC_PLAYER_REPEAT_ONE}, {@link Titanium.Media.MUSIC_PLAYER_REPEAT_ALL}</p>
     * platforms: iphone, ipad
     * @type int
     * @since 1.4.0
     */
    repeatMode:null,

    /**
     * <p>the shuffle setting; one of {@link Titanium.Media.MUSIC_PLAYER_SHUFFLE_DEFAULT}, {@link Titanium.Media.MUSIC_PLAYER_SHUFFLE_NONE}, {@link Titanium.Media.MUSIC_PLAYER_SHUFFLE_SONGS}, {@link Titanium.Media.MUSIC_PLAYER_SHUFFLE_ALBUMS}</p>
     * platforms: iphone, ipad
     * @type int
     * @since 1.4.0
     */
    shuffleMode:null,

    /**
     * <p>a value between 0.0 and 1.0 indicating the volume level for the music player</p>
     * platforms: iphone, ipad
     * @type float
     * @since 1.4.0
     */
    volume:null,


    /**
     * <p>pause playback</p>
     * platforms: iphone, ipad
     * @returns void
     * @since 1.4.0
     */
    pause:function() {
    },

    /**
     * <p>begin playback</p>
     * platforms: iphone, ipad
     * @returns void
     * @since 1.4.0
     */
    play:function() {
    },

    /**
     * <p>seek backward in the currently playing media</p>
     * platforms: iphone, ipad
     * @returns void
     * @since 1.4.0
     */
    seekBackward:function() {
    },

    /**
     * <p>seek forward in the currently playing media</p>
     * platforms: iphone, ipad
     * @returns void
     * @since 1.4.0
     */
    seekForward:function() {
    },

    /**
     * <p>set the media queue</p>
     * platforms: iphone, ipad
     * @param {object} queue a queue representation to set the player queue to.  Can be any of: A dictionary with an <tt>items</tt> key that is an array of {@link Titanium.Media.Item} objects, an array of {@link Titanium.Media.Item} objects, or a single {@link Titanium.Media.Item} object.
     * @returns void
     * @since 1.4.0
     */
    setQueue:function(queue) {
    },

    /**
     * <p>skip to the beginning of the currently playing media</p>
     * platforms: iphone, ipad
     * @returns void
     * @since 1.4.0
     */
    skipToBeginning:function() {
    },

    /**
     * <p>skip to the next media in the queue</p>
     * platforms: iphone, ipad
     * @returns void
     * @since 1.4.0
     */
    skipToNext:function() {
    },

    /**
     * <p>skip to the previous media in the queue</p>
     * platforms: iphone, ipad
     * @returns void
     * @since 1.4.0
     */
    skipToPrevious:function() {
    },

    /**
     * <p>stop playback</p>
     * platforms: iphone, ipad
     * @returns void
     * @since 1.4.0
     */
    stop:function() {
    },

    /**
     * <p>end a seek operation</p>
     * platforms: iphone, ipad
     * @returns void
     * @since 1.4.0
     */
    stopSeeking:function() {
    }
}

/**
 * Notes: <p>You can pass the property <tt>preload</tt> in the constructor as an object property to cause the audio to be preloaded before <tt>play</tt> is invoked.  For larger audio files, this is recommended if you want the audio to begin immediately when invoking <tt>play</tt>.</p>
 * platforms: android, iphone, ipad
 * @namespace <p>The Sound object is returned by {@link Titanium.Media.createSound} and is useful for playing basic sounds. The Sound object loads the entire media resource in memory before playing.  If you need to support streaming, use the {@link Titanium.Media.createAudioPlayer} API.</p>
 * @since 0.8
 * 
 * @example Simple Example
 * <p>Simple example of playing a WAVE file from the Resources directory.</p>
<pre><code>var player = Ti.Media.createSound({url:"sound.wav"});
player.play();
</code></pre>
 */
function Titanium_Media_Sound() {
}
Titanium_Media_Sound.prototype = {

    /**
     * <p>boolean to indicate if audio should continue playing even if Activity is paused (Android only as of 1.3.0)</p>
     * platforms: android, iphone, ipad
     * @type boolean
     * @since 0.8
     */
    allowBackground:null,

    /**
     * <p>the duration of the audio.</p>
     * platforms: android, iphone, ipad
     * @type float
     * @since 0.8
     */
    duration:null,

    /**
     * <p>boolean to indicate if the audio should loop upon completion</p>
     * platforms: android, iphone, ipad
     * @type boolean
     * @since 0.8
     */
    looping:null,

    /**
     * <p>boolean to indicate if the audio is paused</p>
     * platforms: android, iphone, ipad
     * @type boolean
     * @since 0.8
     */
    paused:null,

    /**
     * <p>boolean to indicate if the audio is playing</p>
     * platforms: android, iphone, ipad
     * @type boolean
     * @since 0.8
     */
    playing:null,

    /**
     * <p>the time position of the audio.</p>
     * platforms: android, iphone, ipad
     * @type float
     * @since 0.8
     */
    time:null,

    /**
     * <p>url to the audio</p>
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    url:null,

    /**
     * <p>the volume of the audio. this volume only affects the media, not the device audio.</p>
     * platforms: android, iphone, ipad
     * @type float
     * @since 0.8
     */
    volume:null,


    /**
     * add an event listener for the instance to receive view triggered events
     * platforms: android, iphone, ipad
     * @param {string} name name of the event
     * @param {function} callback callback function to invoke when the event is fired
     * @returns void
     * @since 0.8
     */
    addEventListener:function(name, callback) {
    },

    /**
     * fire a synthesized event to the views listener
     * platforms: android, iphone, ipad
     * @param {string} name name of the event
     * @param {object} event event object
     * @returns void
     * @since 0.8
     */
    fireEvent:function(name, event) {
    },

    /**
     * <p>return the current time position of the audio</p>
     * platforms: android, iphone, ipad
     * @since 0.8
     */
    getTime:function() {
    },

    /**
     * <p>return the value of the audio</p>
     * platforms: android, iphone, ipad
     * @since 0.8
     */
    getVolume:function() {
    },

    /**
     * <p>returns true if the audio will loop</p>
     * platforms: android, iphone, ipad
     * @since 0.8
     */
    isLooping:function() {
    },

    /**
     * <p>returns true if the audio is paused</p>
     * platforms: android, iphone, ipad
     * @since 0.8
     */
    isPaused:function() {
    },

    /**
     * <p>returns true if the audio is playing</p>
     * platforms: android, iphone, ipad
     * @since 0.8
     */
    isPlaying:function() {
    },

    /**
     * <p>temporarily pause the audio. to resume, invoke <tt>play</tt>.</p>
     * platforms: android, iphone, ipad
     * @returns void
     * @since 0.8
     */
    pause:function() {
    },

    /**
     * <p>starting playing the source. if paused, will resume.</p>
     * platforms: android, iphone, ipad
     * @returns void
     * @since 0.8
     */
    play:function() {
    },

    /**
     * <p>release all internal resources. this is typically unnecessary but can be useful if you load a large audio file in <tt>app.js</tt> and play it only once and you would like to release all releases after your final play to reduce memory.</p>
     * platforms: android, iphone, ipad
     * @returns void
     * @since 0.8
     */
    release:function() {
    },

    /**
     * remove a previously added event listener
     * platforms: android, iphone, ipad
     * @param {string} name name of the event
     * @param {function} callback callback function passed in addEventListener
     * @returns void
     * @since 0.8
     */
    removeEventListener:function(name, callback) {
    },

    /**
     * <p>reset the audio to the beginning.</p>
     * platforms: android, iphone, ipad
     * @returns void
     * @since 0.8
     */
    reset:function() {
    },

    /**
     * <p>control whether the audio should loop</p>
     * platforms: android, iphone, ipad
     * @returns void
     * @since 0.8
     */
    setLooping:function() {
    },

    /**
     * <p>control whether the audio is paused</p>
     * platforms: android, iphone, ipad
     * @returns void
     * @since 0.8
     */
    setPaused:function() {
    },

    /**
     * <p>set the time position of the audio</p>
     * platforms: android, iphone, ipad
     * @returns void
     * @since 0.8
     */
    setTime:function() {
    },

    /**
     * <p>set the volume of the audio</p>
     * platforms: android, iphone, ipad
     * @returns void
     * @since 0.8
     */
    setVolume:function() {
    },

    /**
     * <p>stop playing the audio and reset it to the beginning.</p>
     * platforms: android, iphone, ipad
     * @returns void
     * @since 0.8
     */
    stop:function() {
    }
}

/**
 * Notes: <p>Starting in iPhone 3.2 SDK, the video player can be embedded in any normal view.  However, if you create multiple video players at one time, only the last one to have its URL set will display video content or behave as if it is a view for a video player.  Prior to 3.2, only fullscreen views were available on iPhone.</p>
 * platforms: android, iphone, ipad
 * @namespace <p>The VideoPlayer object is returned by {@link Titanium.Media.createVideoPlayer} and is useful for playing videos. </p>
 * @since 0.9
 */
Ti.Media.VideoPlayer = {

    /**
     * <p>Whether or not the movie can be played on a remote device.  iOS 4.3+ only.</p>
     * platforms: android, iphone, ipad
     * @type boolean
     * @since 0.9
     */
    allowsAirPlay:null,

    /**
     * a dictionary with properties x and y to indicate the anchor point value. anchor specifies the position by which animation should occur. center is 0.5, 0.5
     * platforms: android, iphone, ipad
     * @type object
     * @since 0.9
     */
    anchorPoint:null,

    /**
     * read-only object with x and y properties of where the view is during animation
     * platforms: android, iphone, ipad
     * @type object
     * @since 0.9
     */
    animatedCenterPoint:null,

    /**
     * <p>indicates if a movie should automatically start playback when it is likely to finish uninterrupted based on e.g. network conditions. Defaults to true.</p>
     * platforms: android, iphone, ipad
     * @type boolean
     * @since 0.9
     */
    autoplay:null,

    /**
     * the background color of the view
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.9
     */
    backgroundColor:null,

    /**
     * the disabled background color of the view. (Android)
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.9
     */
    backgroundDisabledColor:null,

    /**
     * the disabled background image url of the view. (Android)
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.9
     */
    backgroundDisabledImage:null,

    /**
     * the focused background color of the view. focusable must be true for normal views. (Android)
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.9
     */
    backgroundFocusedColor:null,

    /**
     * the focused background image url of the view. focusable must be true for normal views. (Android)
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.9
     */
    backgroundFocusedImage:null,

    /**
     * a background gradient for the view with the properties: type,startPoint,endPoint,startRadius,endRadius,backfillStart,backfillEnd,colors.
     * platforms: android, iphone, ipad
     * @type object
     * @since 0.9
     */
    backgroundGradient:null,

    /**
     * the background image url of the view
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.9
     */
    backgroundImage:null,

    /**
     * End caps specify the portion of an image that should not be resized when an image is stretched. This technique is used to implement buttons and other resizable image-based interface elements. When a button with end caps is resized, the resizing occurs only in the middle of the button, in the region between the end caps. The end caps themselves keep their original size and appearance. This property specifies the size of the left end cap. The middle (stretchable) portion is assumed to be 1 pixel wide. The right end cap is therefore computed by adding the size of the left end cap and the middle portion together and then subtracting that value from the width of the image
     * platforms: android, iphone, ipad
     * @type float
     * @since 0.9
     */
    backgroundLeftCap:null,

    /**
     * the selected background color of the view. focusable must be true for normal views. (Android)
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.9
     */
    backgroundSelectedColor:null,

    /**
     * the selected background image url of the view. focusable must be true for normal views. (Android)
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.9
     */
    backgroundSelectedImage:null,

    /**
     * End caps specify the portion of an image that should not be resized when an image is stretched. This technique is used to implement buttons and other resizable image-based interface elements. When a button with end caps is resized, the resizing occurs only in the middle of the button, in the region between the end caps. The end caps themselves keep their original size and appearance. This property specifies the size of the top end cap. The middle (stretchable) portion is assumed to be 1 pixel wide. The bottom end cap is therefore computed by adding the size of the top end cap and the middle portion together and then subtracting that value from the height of the image
     * platforms: android, iphone, ipad
     * @type float
     * @since 0.9
     */
    backgroundTopCap:null,

    /**
     * the border color of the view
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.9
     */
    borderColor:null,

    /**
     * the border radius of the view
     * platforms: android, iphone, ipad
     * @type float
     * @since 0.9
     */
    borderRadius:null,

    /**
     * the border width of the view
     * platforms: android, iphone, ipad
     * @type float
     * @since 0.9
     */
    borderWidth:null,

    /**
     * property for the view bottom position. This position is relative to the view's parent. Can be either a float value or a dimension string ie 'auto' (default).
     * platforms: android, iphone, ipad
     * @type float,string
     * @since 0.9
     */
    bottom:null,

    /**
     * a dictionary with properties x and y to indicate the center of the views position relative to the parent view
     * platforms: android, iphone, ipad
     * @type object
     * @since 0.9
     */
    center:null,

    /**
     * <p>deprecated. use url property instead.</p>
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.9
     */
    contentURL:null,

    /**
     * <p>The duration of the movie, or 0.0 if not known.</p>
     * platforms: android, iphone, ipad
     * @type double
     * @since 0.9
     */
    duration:null,

    /**
     * <p>The end time of movie playback. Defaults to NaN, which indicates natural end time of the movie.</p>
     * platforms: android, iphone, ipad
     * @type double
     * @since 0.9
     */
    endPlaybackTime:null,

    /**
     * Set true if you want a view to be focusable when navigating with the trackball or D-Pad. Default: false. (Android Only)
     * platforms: android
     * @type boolean
     * @since 0.9
     */
    focusable:null,

    /**
     * the font family
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.9
     */
    "font-family":null,

    /**
     * the font size
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.9
     */
    "font-size":null,

    /**
     * the font style, either normal or italics
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.9
     */
    "font-style":null,

    /**
     * the font weight, either normal or bold
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.9
     */
    "font-weight":null,

    /**
     * <p>Determines if the movie is presented in the entire screen (obscuring all other application content). Default is false. Setting this property to true before the movie player's view is visible will have no effect.</p>
     * platforms: android, iphone, ipad
     * @type boolean
     * @since 0.9
     */
    fullscreen:null,

    /**
     * property for the view height. Can be either a float value or a dimension string ie 'auto' (default).
     * platforms: android, iphone, ipad
     * @type float,string
     * @since 0.9
     */
    height:null,

    /**
     * <p>The start time of movie playback. Defaults to NaN, indicating the natural start time of the movie.</p>
     * platforms: android, iphone, ipad
     * @type double
     * @since 0.9
     */
    initialPlaybackTime:null,

    /**
     * property for the view left position. This position is relative to the view's parent. Can be either a float value or a dimension string ie 'auto' (default).
     * platforms: android, iphone, ipad
     * @type float,string
     * @since 0.9
     */
    left:null,

    /**
     * <p>Returns the network load state of the movie player.</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.9
     */
    loadState:null,

    /**
     * <p>the media object, either a File or Blob.</p>
     * platforms: android, iphone, ipad
     * @type object
     * @since 0.9
     */
    media:null,

    /**
     * <p>The style of the playback controls. Defaults to {@link Titanium.Media.VIDEO_CONTROL_DEFAULT}</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.9
     */
    mediaControlStyle:null,

    /**
     * <p>The types of media in the movie, or {@link Titanium.Media.VIDEO_MEDIA_TYPE_NONE} if not known.</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.9
     */
    mediaTypes:null,

    /**
     * <p>deprecated in 3.2+ of the iPhone SDK - use <tt>mediaControlStyle</tt>. Provides the ability to set the control mode of the movie player. Defaults to {@link Titanium.Media.VIDEO_CONTROL_DEFAULT}.</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.9
     */
    movieControlMode:null,

    /**
     * <p>returns a dictionary with properties <tt>width</tt> and <tt>height</tt>. Returns the natural size of the movie or 0 for both properties if not known or applicable.</p>
     * platforms: android, iphone, ipad
     * @type object
     * @since 0.9
     */
    naturalSize:null,

    /**
     * the opacity from 0.0-1.0
     * platforms: android, iphone, ipad
     * @type float
     * @since 0.9
     */
    opacity:null,

    /**
     * <p>The currently playable duration of the movie, for progressively downloaded network content.</p>
     * platforms: android, iphone, ipad
     * @type double
     * @since 0.9
     */
    playableDuration:null,

    /**
     * <p>Returns the current playback state of the music player</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.9
     */
    playbackState:null,

    /**
     * <p>Boolean to indicate if the player has started playing.</p>
     * platforms: android, iphone, ipad
     * @type boolean
     * @since 0.9
     */
    playing:null,

    /**
     * <p>Determines how the movie player repeats when reaching the end of playback. Defaults to {@link Titanium.Media.VIDEO_REPEAT_MODE_NONE}.</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.9
     */
    repeatMode:null,

    /**
     * property for the view right position. This position is relative to the view's parent. Can be either a float value or a dimension string ie 'auto' (default).
     * platforms: android, iphone, ipad
     * @type float,string
     * @since 0.9
     */
    right:null,

    /**
     * <p>Determines how the content scales to fit the view. Defaults to {@link Titanium.Media.VIDEO_SCALING_ASPECT_FIT}.</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.9
     */
    scalingMode:null,

    /**
     * the size of the view as a dictionary of width and height properties
     * platforms: android, iphone, ipad
     * @type object
     * @since 0.9
     */
    size:null,

    /**
     * One of Titanium.UI.Android.SOFT_KEYBOARD_DEFAULT_ON_FOCUS, Titanium.UI.Android.SOFT_KEYBOARD_HIDE_ON_FOCUS, or Titanium.UI.Android.SOFT_KEYBOARD_SHOW_ON_FOCUS. (Android only)
     * platforms: android
     * @type int
     * @since 0.9
     */
    softKeyboardOnFocus:null,

    /**
     * <p>The playback type of the movie. Defaults to {@link Titanium.Media.VIDEO_SOURCE_TYPE_UNKNOWN}. Specifying a playback type before playing the movie can result in faster load times.</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.9
     */
    sourceType:null,

    /**
     * property for the view top position. This position is relative to the view's parent. Can be either a float value or a dimension string ie 'auto' (default).
     * platforms: android, iphone, ipad
     * @type float,string
     * @since 0.9
     */
    top:null,

    /**
     * a boolean indicating if the view should receive touch events (true, default) or forward them to peers (false)
     * platforms: android, iphone, ipad
     * @type boolean
     * @since 0.9
     */
    touchEnabled:null,

    /**
     * the transformation matrix to apply to the view
     * platforms: android, iphone, ipad
     * @type object
     * @since 0.9
     */
    transform:null,

    /**
     * <p>url of the media.</p>
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.9
     */
    url:null,

    /**
     * <p>Indicates if the movie player should inherit the application's audio session instead of creating a new session (which would interrupt the application's session). Defaults to true. Setting this property during playback will not take effect until playback is stopped and started again.</p>
     * platforms: android, iphone, ipad
     * @type boolean
     * @since 0.9
     */
    useApplicationAudioSession:null,

    /**
     * a boolean of the visibility of the view
     * platforms: android, iphone, ipad
     * @type boolean
     * @since 0.9
     */
    visible:null,

    /**
     * property for the view width. Can be either a float value or a dimension string ie 'auto' (default).
     * platforms: android, iphone, ipad
     * @type float,string
     * @since 0.9
     */
    width:null,

    /**
     * the z index position relative to other sibling views
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.9
     */
    zIndex:null,


    /**
     * add a child to the view hierarchy
     * platforms: android, iphone, ipad
     * @param {object} view the view to add to this views hiearchy
     * @returns void
     * @since 0.9
     */
    add:function(view) {
    },

    /**
     * add an event listener for the instance to receive view triggered events
     * platforms: android, iphone, ipad
     * @param {string} name name of the event
     * @param {function} callback callback function to invoke when the event is fired
     * @returns void
     * @since 0.9
     */
    addEventListener:function(name, callback) {
    },

    /**
     * animate the view
     * platforms: android, iphone, ipad
     * @param {object} obj either a dictionary of animation properties or an Animation object
     * @param {function} callback function to be invoked upon completion of the animation
     * @returns void
     * @since 0.9
     */
    animate:function(obj, callback) {
    },

    /**
     * <p>Cancels all pending asynchronous thumbnail requests.</p>
     * platforms: android, iphone, ipad
     * @returns void
     * @since 0.9
     */
    cancelAllThumbnailImageRequests:function() {
    },

    /**
     * fire a synthesized event to the views listener
     * platforms: android, iphone, ipad
     * @param {string} name name of the event
     * @param {object} event event object
     * @returns void
     * @since 0.9
     */
    fireEvent:function(name, event) {
    },

    /**
     * hide the view
     * platforms: android, iphone, ipad
     * @returns void
     * @since 0.9
     */
    hide:function() {
    },

    /**
     * <p>pause playing the video. On iOS only available under 3.2 and later</p>
     * platforms: android, iphone, ipad
     * @returns void
     * @since 0.9
     */
    pause:function() {
    },

    /**
     * <p>start playing the video</p>
     * platforms: android, iphone, ipad
     * @returns void
     * @since 0.9
     */
    play:function() {
    },

    /**
     * <p>release the internal video resources immediately.  this is not usually necessary but can help if you no longer need to use the player after it is used to help converse memory.</p>
     * platforms: android, iphone, ipad
     * @returns void
     * @since 0.9
     */
    release:function() {
    },

    /**
     * remove a previously add view from the view hiearchy
     * platforms: android, iphone, ipad
     * @param {object} view the view to remove from this views hiearchy
     * @returns void
     * @since 0.9
     */
    remove:function(view) {
    },

    /**
     * remove a previously added event listener
     * platforms: android, iphone, ipad
     * @param {string} name name of the event
     * @param {function} callback callback function passed in addEventListener
     * @returns void
     * @since 0.9
     */
    removeEventListener:function(name, callback) {
    },

    /**
     * <p>Asynchronously request thumbnails for one or more times, provided as an array of numbers (double). Fires a <tt>thumbnail</tt> event on completion. Optionally invokes the callback function passed in the method.</p>
     * platforms: android, iphone, ipad
     * @param {array} times array of doubles for each time to request
     * @param {int} option either [[Titanium.Media.VIDEO_TIME_OPTION_NEAREST_KEYFRAME]] or [[Titanium.Media.VIDEO_TIME_OPTION_EXACT]].
     * @returns void
     * @since 0.9
     */
    requestThumbnailImagesAtTimes:function(times, option) {
    },

    /**
     * <p>A view for customization which is always displayed behind movie content.</p>
     * platforms: android, iphone, ipad
     * @param {object} view view to set
     * @returns void
     * @since 0.9
     */
    setBackgroundView:function(view) {
    },

    /**
     * <p>the a non-url based media to play, either a File or Blob.</p>
     * platforms: android, iphone, ipad
     * @param {object} media media to play
     * @returns void
     * @since 0.9
     */
    setMedia:function(media) {
    },

    /**
     * <p>the url to play</p>
     * platforms: android, iphone, ipad
     * @param {string} url the url to play
     * @returns void
     * @since 0.9
     */
    setUrl:function(url) {
    },

    /**
     * make the view visible
     * platforms: android, iphone, ipad
     * @returns void
     * @since 0.9
     */
    show:function() {
    },

    /**
     * <p>stop playing the video</p>
     * platforms: android, iphone, ipad
     * @returns void
     * @since 0.9
     */
    stop:function() {
    },

    /**
     * <p>Returns a thumbnail at the given time as a blob.</p>
     * platforms: android, iphone, ipad
     * @param {double} time playback time
     * @param {int} option either [[Titanium.Media.VIDEO_TIME_OPTION_NEAREST_KEYFRAME]] or [[Titanium.Media.VIDEO_TIME_OPTION_EXACT]]
     * @since 0.9
     */
    thumbnailImageAtTime:function(time, option) {
    },

    /**
     * return a Blob image of the rendered view
     * platforms: android, iphone, ipad
     * @param {function} f function to be invoked upon completion. if non-null, this method will be performed asynchronously. if null, it will be performed immediately
     * @since 0.9
     */
    toImage:function(f) {
    }
}

/**
 * platforms: android, iphone, ipad
 * @namespace <p>The top level Network module.  The Network module is used accessing Networking related functionality, including {@link Titanium.Network.Socket}</p>
 * @since 0.1
 */
Ti.Network = {

    /**
     * <p>constant value representing the ability for sockets to listen on any locally available network device</p>
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.1
     */
    INADDR_ANY:null,

    /**
     * <p>constant value to indicate that the network is LAN</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.1
     */
    NETWORK_LAN:null,

    /**
     * <p>constant value to indicate that the network is MOBILE</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.1
     */
    NETWORK_MOBILE:null,

    /**
     * <p>constant value to indicate that the network is not available</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.1
     */
    NETWORK_NONE:null,

    /**
     * <p>constant value to indicate that the network is not known</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.1
     */
    NETWORK_UNKNOWN:null,

    /**
     * <p>constant value to indicate that the network is WIFI</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.1
     */
    NETWORK_WIFI:null,

    /**
     * <p>constant value for the push notification alert type</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.1
     */
    NOTIFICATION_TYPE_ALERT:null,

    /**
     * <p>constant value for the push notification badge type</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.1
     */
    NOTIFICATION_TYPE_BADGE:null,

    /**
     * <p>constant value for the push notification sound type</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.1
     */
    NOTIFICATION_TYPE_SOUND:null,

    /**
     * <p>constant value specifying read-only mode for sockets</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.1
     */
    READ_MODE:null,

    /**
     * <p>constant value specifying read-write mode for sockets</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.1
     */
    READ_WRITE_MODE:null,

    /**
     * <p>constant value representing a socket in the CLOSED state</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.1
     */
    SOCKET_CLOSED:null,

    /**
     * <p>constant value representing a socket in the CONNECTED state</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.1
     */
    SOCKET_CONNECTED:null,

    /**
     * <p>constant value representing a socket in the ERROR state</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.1
     */
    SOCKET_ERROR:null,

    /**
     * <p>constant value representing a socket in the INITIALIZED state</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.1
     */
    SOCKET_INITIALIZED:null,

    /**
     * <p>constant value representing a socket in the LISTENING state</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.1
     */
    SOCKET_LISTENING:null,

    /**
     * <p>constant value specifying write-only mode for sockets</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.1
     */
    WRITE_MODE:null,

    /**
     * <p>the network type value as a constant.</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.1
     */
    networkType:null,

    /**
     * <p>the network type name constant. Returns one of <tt>NONE</tt>, <tt>WIFI</tt>, <tt>LAN</tt> or <tt>MOBILE</tt>.</p>
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.1
     */
    networkTypeName:null,

    /**
     * <p>readonly boolean value that indicates if the network is reachable to the Internet either via WIFI or Carrier network</p>
     * platforms: android, iphone, ipad
     * @type boolean
     * @since 0.1
     */
    online:null,

    /**
     * <p>the remote device UUID if the device was registered with the Apple Push Notification Service or null if not set. Only available on iPhone.</p>
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.1
     */
    remoteDeviceUUID:null,

    /**
     * <p>returns an array of network type constants enabled for the application. Only available on iPhone.</p>
     * platforms: android, iphone, ipad
     * @type array
     * @since 0.1
     */
    remoteNotificationTypes:null,

    /**
     * <p>returns true if remote notifications have been enabled. Only available on iPhone.</p>
     * platforms: android, iphone, ipad
     * @type boolean
     * @since 0.1
     */
    remoteNotificationsEnabled:null,


    /**
     * <p>adds a connectivity listener to listen for network changes. This method has been deprecated in favor of listening for a <tt>change</tt> event.</p>
     * platforms: android, iphone, ipad
     * @param {function} callback callback function to invoke upon network connectivity changes
     * @returns void
     * @since 0.1
     */
    addConnectivityListener:function(callback) {
    },

    /**
     * add an event listener for the instance to receive view triggered events
     * platforms: android, iphone, ipad
     * @param {string} name name of the event
     * @param {function} callback callback function to invoke when the event is fired
     * @returns void
     * @since 0.1
     */
    addEventListener:function(name, callback) {
    },

    /**
     * create and return an instance of {@link Titanium.Network.BonjourBrowser}
     * platforms: android, iphone, ipad
     * @param {string} serviceType service to search for, must include the protocol type suffix (._tcp)
     * @param {string} domain the Bonjour service domain to conduct the search in.  Default value is 'local.'
     * @param {object} parameters (optional) a dictionary object properties defined in {@link Titanium.Network.BonjourBrowser}
     * @since 0.1
     */
    createBonjourBrowser:function(serviceType, domain, parameters) {
    },

    /**
     * create and return an instance of {@link Titanium.Network.BonjourService}
     * platforms: android, iphone, ipad
     * @param {string} name the name of the service.  Must be a unique identifier for this service type and domain.
     * @param {string} type the type of service.  Must include the protocol identifier (._tcp)
     * @param {string} domain the domain to publish the service in.  Default value is 'local.'
     * @param {object} parameters (optional) a dictionary object properties defined in {@link Titanium.Network.BonjourService}
     * @since 0.1
     */
    createBonjourService:function(name, type, domain, parameters) {
    },

    /**
     * create and return an instance of {@link Titanium.Network.HTTPClient}
     * platforms: android, iphone, ipad
     * @param {object} parameters (optional) a dictionary object properties defined in {@link Titanium.Network.HTTPClient}
     * @since 0.1
     */
    createHTTPClient:function(parameters) {
    },

    /**
     * create and return an instance of {@link Titanium.Network.TCPSocket}
     * platforms: android, iphone, ipad
     * @param {string} hostName the host name to connect to/listen on
     * @param {int} port the port for the socket
     * @param {int} mode the socket's mode; one of {@link Titanium.Network.READ_MODE}, {@link Titanium.Network.WRITE_MODE}, {@link Titanium.Network.READ_WRITE_MODE}
     * @param {object} parameters (optional) a dictionary object properties defined in {@link Titanium.Network.TCPSocket}
     * @since 0.1
     */
    createTCPSocket:function(hostName, port, mode, parameters) {
    },

    /**
     * <p>decode a URI component part using URI encoding</p>
     * platforms: android, iphone, ipad
     * @param {string} value input value to be decoded
     * @since 0.1
     */
    decodeURIComponent:function(value) {
    },

    /**
     * <p>encode a URI component part using URI encoding</p>
     * platforms: android, iphone, ipad
     * @param {string} value input value to be encoded
     * @since 0.1
     */
    encodeURIComponent:function(value) {
    },

    /**
     * fire a synthesized event to the views listener
     * platforms: android, iphone, ipad
     * @param {string} name name of the event
     * @param {object} event event object
     * @returns void
     * @since 0.1
     */
    fireEvent:function(name, event) {
    },

    /**
     * <p>register for push notifications with the Apple Push Notification Service. Only available on iPhone.</p>
     * platforms: android, iphone, ipad
     * @param {object} config dictionary of the following: <tt>types</tt> is an array of type constants that the application would like to receive, <tt>success</tt> is a callback function that is called when the push registration is successfully completed, <tt>error</tt> is a callback function that is called when an error is received during registration and <tt>callback</tt> is a callback function that is invoked upon receiving a new push notification. This method should be called at application startup.
     * @returns void
     * @since 0.1
     */
    registerForPushNotifications:function(config) {
    },

    /**
     * <p>removes a connectivity listener. This method has been deprecated in favor of listening for a <tt>change</tt> event.</p>
     * platforms: android, iphone, ipad
     * @param {function} callback callback function to remove
     * @returns void
     * @since 0.1
     */
    removeConnectivityListener:function(callback) {
    },

    /**
     * remove a previously added event listener
     * platforms: android, iphone, ipad
     * @param {string} name name of the event
     * @param {function} callback callback function passed in addEventListener
     * @returns void
     * @since 0.1
     */
    removeEventListener:function(name, callback) {
    }
}

/**
 * Notes: <p>If your application publishes Bonjour services itself, that service will be discovered by the browser if necessary; be prepared to perform a check if you do not want to list local services as available.  Bonjour service browsing is an asynchronous operation, meaning that you should be extremely careful when caching values from the 'services' property returned by the updatedServices event.  In particular, if you maintain a local copy of available services and a user tries to connect to one, you should be prepared to handle failures gracefully; the next updatedServices event should provide the new services list, but you should not rely on it being delivered before user input.  When a window which uses Bonjour browsing is closed, if you do not want to continue searching, you must call the stop() method.</p>
 * platforms: iphone, ipad
 * @namespace <p>The BonjourBrowser instance returned from {@link Titanium.Network.createBonjourBrowser}.  This object is a browser for the discovery and retrieval of Bonjour services available on the network.<br>
</p>
 * @since 1.2.0
 */
Ti.Network.BonjourBrowser = {

    /**
     * <p>The domain the browser is searching in</p>
     * platforms: iphone, ipad
     * @type string
     * @since 1.2.0
     */
    domain:null,

    /**
     * <p>Whether or not the browser is currently searching</p>
     * platforms: iphone, ipad
     * @type boolean
     * @since 1.2.0
     */
    isSearching:null,

    /**
     * <p>The type of the service the browser searches for</p>
     * platforms: iphone, ipad
     * @type string
     * @since 1.2.0
     */
    serviceType:null,


    /**
     * <p>Conduct a search for Bonjour services matching the type and domain specified during creation</p>
     * platforms: iphone, ipad
     * @returns void
     * @since 1.2.0
     */
    search:function() {
    },

    /**
     * <p>Halt an ongoing search</p>
     * platforms: iphone, ipad
     * @returns void
     * @since 1.2.0
     */
    stopSearch:function() {
    }
}

/**
 * Notes: <p>You can only publish Bonjour services attached to a socket which is currently listening; you cannot publish a service for a remotely connected socket.  If you stop the Bonjour service and wish to close the socket it uses, it is strongly recommended that you stop the service first.  When a window which publishes a Bonjour service is closed, you must stop the service if the associated socket is also to be closed, or if it is no longer necessary to publish.  Unlike other network operations, Bonjour service resolution and publishing is synchronous, so be aware that your code may block while resolution is going on.  In particular, you may wish to display UI elements indicating background activity before beginning resolution.</p>
 * platforms: iphone, ipad
 * @namespace <p>The BonjourService instance returned either from {@link Titanium.Network.createBonjourService} or via the service list from a BonjourBrowser <tt>updatedServices</tt> event.  This object describes a service on the network which is published by Bonjour.</p>
 * @since 1.2.0
 */
Ti.Network.BonjourService = {

    /**
     * <p>the domain of the service</p>
     * platforms: iphone, ipad
     * @type string
     * @since 1.2.0
     */
    domain:null,

    /**
     * <p>whether or not the service is local to the device</p>
     * platforms: iphone, ipad
     * @type boolean
     * @since 1.2.0
     */
    isLocal:null,

    /**
     * <p>the name of the service</p>
     * platforms: iphone, ipad
     * @type string
     * @since 1.2.0
     */
    name:null,

    /**
     * <p>the TCPSocket object that is used to connect to the service</p>
     * platforms: iphone, ipad
     * @type object
     * @since 1.2.0
     */
    socket:null,

    /**
     * <p>the type of the service</p>
     * platforms: iphone, ipad
     * @type string
     * @since 1.2.0
     */
    type:null,


    /**
     * <p>Publish a Bonjour service to the network.  Only works if isLocal is TRUE</p>
     * platforms: iphone, ipad
     * @param {object} socket a TCPSocket object to associate with the Bonjour service.
     * @returns void
     * @since 1.2.0
     */
    publish:function(socket) {
    },

    /**
     * <p>Resolve a Bonjour service from the network.  Must be done before attempting to access the service's socket information, if a remote service.  You cannot resolve a locally published service.</p>
     * platforms: iphone, ipad
     * @param {double} timeout the timeout for service resolution, in seconds.  Optional, default is 120s.
     * @returns void
     * @since 1.2.0
     */
    resolve:function(timeout) {
    },

    /**
     * <p>Halts publication of a service.</p>
     * platforms: iphone, ipad
     * @returns void
     * @since 1.2.0
     */
    stop:function() {
    }
}

/**
 * platforms: android, iphone, ipad
 * @namespace <p>The HttpClient instance returned from {@link Titanium.Network.createHTTPClient}. This object (mostly) implements the XMLHttpRequest specification.</p>
 * @since 0.1
 */
Ti.Network.HTTPClient = {

    /**
     * <p>the DONE readyState constant</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.1
     */
    DONE:null,

    /**
     * <p>the HEADERS_RECEIVED readyState constant</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.1
     */
    HEADERS_RECEIVED:null,

    /**
     * <p>the LOADING readyState constant</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.1
     */
    LOADING:null,

    /**
     * <p>the OPENED readyState constant</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.1
     */
    OPENED:null,

    /**
     * <p>the UNSET readyState constant</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.1
     */
    UNSENT:null,

    /**
     * <p>boolean to indicate that the response was successful</p>
     * platforms: android, iphone, ipad
     * @type boolean
     * @since 0.1
     */
    connected:null,

    /**
     * <p>the connection type, normally either <tt>GET</tt> or <tt>POST</tt>.</p>
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.1
     */
    connectionType:null,

    /**
     * <p>file to download contents to.  Can only be set after calling open.  iOS only</p>
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.1
     */
    file:null,

    /**
     * <p>the absolute URL of the request</p>
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.1
     */
    location:null,

    /**
     * <p>set this to a function before calling open to cause the function to be called at regular intervals as the request data is being received. the <tt>progress</tt> property of the event will contain a value from 0.0-1.0 with the progress.</p>
     * platforms: android, iphone, ipad
     * @type function
     * @since 0.1
     */
    ondatastream:null,

    /**
     * <p>set this to a function before calling open to cause the function to be called upon a error response</p>
     * platforms: android, iphone, ipad
     * @type function
     * @since 0.1
     */
    onerror:null,

    /**
     * <p>set this to a function before calling open to cause the function to be called upon a successful response</p>
     * platforms: android, iphone, ipad
     * @type function
     * @since 0.1
     */
    onload:null,

    /**
     * <p>set this to a function before calling open to cause the function to be called for each readyState change</p>
     * platforms: android, iphone, ipad
     * @type function
     * @since 0.1
     */
    onreadystatechange:null,

    /**
     * <p>set this to a function before calling open to cause the function to be called at regular intervals as the request data is being transmitted. the <tt>progress</tt> property of the event will contain a value from 0.0-1.0 with the progress.</p>
     * platforms: android, iphone, ipad
     * @type function
     * @since 0.1
     */
    onsendstream:null,

    /**
     * <p>the readyState value</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.1
     */
    readyState:null,

    /**
     * <p>the response data as a Blob object.</p>
     * platforms: android, iphone, ipad
     * @type object
     * @since 0.1
     */
    responseData:null,

    /**
     * <p>the response as text or null if an error was received or no data was returned</p>
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.1
     */
    responseText:null,

    /**
     * <p>the response object as an XML DOMDocument object. returns null if the content type returned by the server was not XML or the content could not be parsed</p>
     * platforms: android, iphone, ipad
     * @type object
     * @since 0.1
     */
    responseXML:null,

    /**
     * <p>the response HTTP status code</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.1
     */
    status:null,

    /**
     * <p>timeout is milliseconds when the connection should be aborted</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.1
     */
    timeout:null,

    /**
     * <p>set this to control how SSL certification validation is performed on connection.  defaults to false if in simulator or device testing and true if release for distribution mode.</p>
     * platforms: android, iphone, ipad
     * @type boolean
     * @since 0.1
     */
    validatesSecureCertificate:null,


    /**
     * <p>abort a pending request</p>
     * platforms: android, iphone, ipad
     * @returns void
     * @since 0.1
     */
    abort:function() {
    },

    /**
     * <p>return the response header.</p>
     * platforms: android, iphone, ipad
     * @param {string} name the header name
     * @since 0.1
     */
    getResponseHeader:function(name) {
    },

    /**
     * <p>open the request and ready the connection</p>
     * platforms: android, iphone, ipad
     * @param {string} method the HTTP method
     * @param {string} url the URL for the request
     * @param {boolean} async optional property to indicate if asynchronous (default) or not
     * @returns void
     * @since 0.1
     */
    open:function(method, url, async) {
    },

    /**
     * <p>send the request (Only async is currently supported)</p>
     * platforms: android, iphone, ipad
     * @param {object} data the data to send in the request. can either be null, dictionary, string, File object or Blob.
     * @returns void
     * @since 0.1
     */
    send:function(data) {
    },

    /**
     * <p>set the request header. Must be called after <tt>open</tt> but before <tt>send</tt>.</p>
     * platforms: android, iphone, ipad
     * @param {string} name name of the header
     * @param {string} value value of the header. May be null to clearing out a property, such as X-Requested-With
     * @returns void
     * @since 0.1
     */
    setRequestHeader:function(name, value) {
    },

    /**
     * <p>set the request timeout</p>
     * platforms: android, iphone, ipad
     * @param {double} timeout the timeout in milliseconds
     * @returns void
     * @since 0.1
     */
    setTimeout:function(timeout) {
    }
}

/**
 * platforms: iphone, android, ipad
 * @namespace <p>Socket module</p>
 * @since 1.7
 */
Ti.Network.Socket = {

    /**
     * <p>state representing the closed state of a socket</p>
     * platforms: iphone, android, ipad
     * @type Number
     * @since 1.7
     */
    CLOSED:null,

    /**
     * <p>state representing the connected state of a socket</p>
     * platforms: iphone, android, ipad
     * @type Number
     * @since 1.7
     */
    CONNECTED:null,

    /**
     * <p>state representing the error state of a socket</p>
     * platforms: iphone, android, ipad
     * @type Number
     * @since 1.7
     */
    ERROR:null,

    /**
     * <p>state representing the initialized state of a socket</p>
     * platforms: iphone, android, ipad
     * @type Number
     * @since 1.7
     */
    INITIALIZED:null,

    /**
     * <p>state representing the listening state of a socket</p>
     * platforms: iphone, android, ipad
     * @type Number
     * @since 1.7
     */
    LISTENING:null,


    /**
     * add an event listener for the instance to receive view triggered events
     * platforms: iphone, android, ipad
     * @param {string} name name of the event
     * @param {function} callback callback function to invoke when the event is fired
     * @returns void
     * @since 1.7
     */
    addEventListener:function(name, callback) {
    },

    /**
     * <p>returns new TCP socket object, takes object containing properties list defined in {@link Titanium.Network.Socket.TCP}.  Some properties are only needed based on whether the socket will be a connecting socket or a listening socket.</p>
     * platforms: iphone, android, ipad
     * @param {Object} params creation parameters
     * @since 1.7
     */
    createTCP:function(params) {
    },

    /**
     * fire a synthesized event to the views listener
     * platforms: iphone, android, ipad
     * @param {string} name name of the event
     * @param {object} event event object
     * @returns void
     * @since 1.7
     */
    fireEvent:function(name, event) {
    },

    /**
     * remove a previously added event listener
     * platforms: iphone, android, ipad
     * @param {string} name name of the event
     * @param {function} callback callback function passed in addEventListener
     * @returns void
     * @since 1.7
     */
    removeEventListener:function(name, callback) {
    }
}

/**
 * platforms: iphone, android, ipad
 * @namespace <p>TCP socket that implements the {@link Titanium.IOStream} interface.  Created by {@link Titanium.Network.Socket.createTCP}</p>
 * @since 1.7
 */
Ti.Network.Socket.TCP = {

    /**
     * <p>The callback to be fired when a listener accepts a connection.  The callback parameter's <tt>socket</tt> member contains the socket that is receiving the connection, and its <tt>inbound</tt> member contains the connecting socket.</p>
     * platforms: iphone, android, ipad
     * @type Function
     * @since 1.7
     */
    accepted:null,

    /**
     * <p>The callback to be fired after the socket enters the "connected" state. Only invoked following a successful connect() call. The callback parameter's <tt>socket</tt> member contains the socket that connected.</p>
     * platforms: iphone, android, ipad
     * @type Function
     * @since 1.7
     */
    connected:null,

    /**
     * <p>The callback to be fired after the socket enters the ERROR state.  The callback parameter's <tt>socket</tt> member contains the erring socket, and its <tt>error</tt> (string) and <tt>errorCode</tt> (number) members contain error information.</p>
     * platforms: iphone, android, ipad
     * @type Function
     * @since 1.7
     */
    error:null,

    /**
     * <p>The host to connect to or listen on. Cannot be modified when not in the INITIALIZED state. Supports both IPv4 and IPv6</p>
     * platforms: iphone, android, ipad
     * @type String
     * @since 1.7
     */
    host:null,

    /**
     * <p>Max number of pending incoming connections to be allowed when listen() is called. Any incoming connections received while the max number of pending connections has been reached will be rejected.</p>
     * platforms: iphone, android, ipad
     * @type Number
     * @since 1.7
     */
    listenQueueSize:null,

    /**
     * <p>The port to connect to or listen on. Cannot be modified when not in the INITIALIZED state</p>
     * platforms: iphone, android, ipad
     * @type Number
     * @since 1.7
     */
    port:null,

    /**
     * <p>current state of the socket</p>
     * platforms: iphone, android, ipad
     * @type Number
     * @since 1.7
     */
    state:null,

    /**
     * <p>The timeout for connect() and all I/O write() operations. Cannot be modified when not in the INITIALIZED state</p>
     * platforms: iphone, android, ipad
     * @type Number
     * @since 1.7
     */
    timeout:null,


    /**
     * <p>Tells a LISTENING socket to accept a connection request at the top of a listener's request queue when one becomes available. Takes an argument, a box object which assigns callbacks to the created socket. Note that the connected callback is not called (the socket does not "transition to" the CONNECTED state - it's created in the CONNECTED state) on the newly created socket.  The accepted callback is called when a new connection is accepted as a result of calling accept().  If the socket is already flagged to accept the next connection, the existing accept options will be update to use the newly specified options object. Throws an exception if the socket is not in a LISTENING state</p>
     * platforms: iphone, android, ipad
     * @param {Object} params parameters that contain callbacks to be set on next accepted socket. The <tt>timeout</tt> member specifies timeout for connect and write operations.  The <tt>error</tt> member specifies a callback to be invoked if an error occurs.  See the <tt>error</tt> property for details of the callback.
     * @returns void
     * @since 1.7
     */
    accept:function(params) {
    },

    /**
     * <p>Closes a socket. Throws exception if the socket is not in a CONNECTED or LISTENING state. Blocking</p>
     * platforms: iphone, android, ipad
     * @returns void
     * @since 1.7
     */
    close:function() {
    },

    /**
     * <p>Attempts to connect the socket to its host/port. Throws exception if the socket is in a CONNECTED or LISTENING state. Throws exception if a valid host and port has not been set on the proxy. Nonblocking; connection attempts are asynchronous</p>
     * platforms: iphone, android, ipad
     * @returns void
     * @since 1.7
     */
    connect:function() {
    },

    /**
     * <p>Attempts to start listening on the socket's host/port. listen() call will attempt to listen on the specified host and/or port property for the socket if they are set. This function blocks execution and throws an exception on error (and sets the socket state to ERROR) but does not fire the error callback in this event. Throws exception if the socket is in a LISTENING or CONNECTED state</p>
     * platforms: iphone, android, ipad
     * @returns void
     * @since 1.7
     */
    listen:function() {
    }
}

/**
 * Notes: <p>Sockets are nontrivial; it is recommended that anyone using them be familiar with the basics of BSD sockets.  All sockets use TCP connections, and are asynchronous for read operations, so your program should be ready to receive 'read' events at any point.  Socket references cannot be transferred to socket objects, and vice-versa - socket references are an internal mechanism which is used only to determine which sockets to send data to and read data from.  For listening sockets, it is highly recommended that you use the {@link Titanium.Network.INADDR_ANY} constant as the host name.  If a window containing a socket is closed, the socket MUST be closed also unless you intend to continue to receive data, otherwise the socket will consume resources (and potentially cause conflicts with opening the window again, if a listener) until the program is restarted.  Be aware of the differences between the listen() and connect() functions; attempting to use one when you mean the other may result in errors, unpredictable behavior, or both.</p>
 * platforms: iphone, ipad
 * @namespace <p>DEPRECATED: USE {@link Titanium.Network.Socket.TCP} WHERE POSSIBLE.  The TCPSocket instance returned from {@link Titanium.Network.createTCPSocket}.  This object represents a socket which either listens locally on the device for connections, or connects to a remote machine.</p>
 * @since 1.2.0
 */
Ti.Network.TCPSocket = {

    /**
     * <p>the host name to connect to.  Must be {@link Titanium.Network.INADDR_ANY} or an identifier for the local device in order to listen</p>
     * platforms: iphone, ipad
     * @type string
     * @since 1.2.0
     */
    hostName:null,

    /**
     * <p>whether or not the socket is valid</p>
     * platforms: iphone, ipad
     * @type boolean
     * @since 1.2.0
     */
    isValid:null,

    /**
     * <p>the socket's mode</p>
     * platforms: iphone, ipad
     * @type int
     * @since 1.2.0
     */
    mode:null,

    /**
     * <p>the port to connect/listen on</p>
     * platforms: iphone, ipad
     * @type int
     * @since 1.2.0
     */
    port:null,

    /**
     * <p>strip terminating null character when sending string data; default is false</p>
     * platforms: iphone, ipad
     * @type boolean
     * @since 1.2.0
     */
    stripTerminator:null,


    /**
     * <p>close the socket</p>
     * platforms: iphone, ipad
     * @returns void
     * @since 1.2.0
     */
    close:function() {
    },

    /**
     * <p>connect the scocket to a TCP server</p>
     * platforms: iphone, ipad
     * @returns void
     * @since 1.2.0
     */
    connect:function() {
    },

    /**
     * <p>set up the socket to receive connections</p>
     * platforms: iphone, ipad
     * @returns void
     * @since 1.2.0
     */
    listen:function() {
    },

    /**
     * <p>write data to the socket, if the mode is WRITE_MODE or READ_WRITE_MODE</p>
     * platforms: iphone, ipad
     * @param {object,string} data either a string or blob object representing the data to be transferred
     * @param {int} sendTo the socket reference to send the data to.  Default is to send to all connected sockets
     * @returns void
     * @since 1.2.0
     */
    write:function(data, sendTo) {
    }
}

/**
 * platforms: android, iphone, ipad
 * @namespace <p>The top level Platform module.  The Platform module is used accessing the device's platform
related functionality.</p>
 * @since 0.1
 */
Ti.Platform = {

    /**
     * <p>the device is plugged in and currently being charged</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.1
     */
    BATTERY_STATE_CHARGING:null,

    /**
     * <p>the battery is fully charged</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.1
     */
    BATTERY_STATE_FULL:null,

    /**
     * <p>the battery state is unknown or not monitoring is not enabled</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.1
     */
    BATTERY_STATE_UNKNOWN:null,

    /**
     * <p>the device is unplugged</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.1
     */
    BATTERY_STATE_UNPLUGGED:null,

    /**
     * <p>the ip address that the device reports (only applicable on WIFI network)</p>
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.1
     */
    address:null,

    /**
     * <p>the processor architecture that the device reports</p>
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.1
     */
    architecture:null,

    /**
     * <p>return the amount of memory available on the device in bytes</p>
     * platforms: android, iphone, ipad
     * @type double
     * @since 0.1
     */
    availableMemory:null,

    /**
     * <p>the current device battery level. this property is only accessible if <tt>batteryMonitoring</tt> is enabled. on iPhone, this level only changes at 5% intervals.</p>
     * platforms: android, iphone, ipad
     * @type float
     * @since 0.1
     */
    batteryLevel:null,

    /**
     * <p>boolean to indicate if battery monitoring is enabled</p>
     * platforms: android, iphone, ipad
     * @type boolean
     * @since 0.1
     */
    batteryMonitoring:null,

    /**
     * <p>constant that represents the state of the battery. this property is only accessible if <tt>batteryMonitoring</tt> is enabled</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.1
     */
    batteryState:null,

    /**
     * <p>return the DisplayCaps object for platform</p>
     * platforms: android, iphone, ipad
     * @type object
     * @since 0.1
     */
    displayCaps:null,

    /**
     * <p>the unique id of the device</p>
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.1
     */
    id:null,

    /**
     * <p>the primary language of the device that the user has enabled</p>
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.1
     */
    locale:null,

    /**
     * <p>this property will return a unique identifier for the device</p>
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.1
     */
    macaddress:null,

    /**
     * <p>the model of the phone that the device reports</p>
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.1
     */
    model:null,

    /**
     * <p>the name of the platform returned by the device</p>
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.1
     */
    name:null,

    /**
     * <p>the network mask that the device reports (only applicable on WIFI network)</p>
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.1
     */
    netmask:null,

    /**
     * <p>the shortname of the operating system. for example, on an iPhone, will return <tt>iphone</tt>, iPad will return <tt>ipad</tt> and Android will return <tt>android</tt>.</p>
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.1
     */
    osname:null,

    /**
     * <p>the OS architecture, such as 32 bit</p>
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.1
     */
    ostype:null,

    /**
     * <p>the number of processors the device reports</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.1
     */
    processorCount:null,

    /**
     * <p>the username of the device, if set</p>
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.1
     */
    username:null,

    /**
     * <p>the version of the platform returned by the device</p>
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.1
     */
    version:null,


    /**
     * add an event listener for the instance to receive view triggered events
     * platforms: android, iphone, ipad
     * @param {string} name name of the event
     * @param {function} callback callback function to invoke when the event is fired
     * @returns void
     * @since 0.1
     */
    addEventListener:function(name, callback) {
    },

    /**
     * <p>returns whether or not a system URL can be opened. iOS only</p>
     * platforms: android, iphone, ipad
     * @param {string} url the url to check
     * @returns void
     * @since 0.1
     */
    canOpenURL:function(url) {
    },

    /**
     * <p>create a globally unique identifier</p>
     * platforms: android, iphone, ipad
     * @since 0.1
     */
    createUUID:function() {
    },

    /**
     * fire a synthesized event to the views listener
     * platforms: android, iphone, ipad
     * @param {string} name name of the event
     * @param {object} event event object
     * @returns void
     * @since 0.1
     */
    fireEvent:function(name, event) {
    },

    /**
     * <p>open a URL in the system default manner</p>
     * platforms: android, iphone, ipad
     * @param {string} url the url to open
     * @returns void
     * @since 0.1
     */
    openURL:function(url) {
    },

    /**
     * remove a previously added event listener
     * platforms: android, iphone, ipad
     * @param {string} name name of the event
     * @param {function} callback callback function passed in addEventListener
     * @returns void
     * @since 0.1
     */
    removeEventListener:function(name, callback) {
    }
}

/**
 * Notes: <p>On iPhone, the <tt>density</tt> property will return <tt>high</tt> for retina devices and <tt>medium</tt> otherwise, the <tt>dpi</tt> property will return <tt>160</tt>. For iPad, the <tt>density</tt> property will return <tt>medium</tt> and the <tt>dpi</tt> property will return <tt>130</tt>.  For Android, these values are device specific.</p>
 * platforms: android, iphone, ipad
 * @namespace <p>The Display Caps object returned by the {@link Titanium.Platform.displayCaps} property.</p>
 * @since 0.8
 */
Ti.Platform.DisplayCaps = {

    /**
     * <p>returns the density property of the display device.</p>
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    density:null,

    /**
     * <p>the DPI of the display device.</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.8
     */
    dpi:null,

    /**
     * <p>the height of the device screen</p>
     * platforms: android, iphone, ipad
     * @type float
     * @since 0.8
     */
    platformHeight:null,

    /**
     * <p>the width of the device screen</p>
     * platforms: android, iphone, ipad
     * @type float
     * @since 0.8
     */
    platformWidth:null,



}

/**
 * platforms: iphone, android, ipad
 * @namespace <p>Stream module containing stream utility methods</p>
 * @since 1.7
 */
Ti.Stream = {

    /**
     * <p>append mode value.</p>
     * platforms: iphone, android, ipad
     * @type Number
     * @since 1.7
     */
    MODE_APPEND:null,

    /**
     * <p>read only mode value</p>
     * platforms: iphone, android, ipad
     * @type Number
     * @since 1.7
     */
    MODE_READ:null,

    /**
     * <p>write mode value</p>
     * platforms: iphone, android, ipad
     * @type Number
     * @since 1.7
     */
    MODE_WRITE:null,


    /**
     * add an event listener for the instance to receive view triggered events
     * platforms: iphone, android, ipad
     * @param {string} name name of the event
     * @param {function} callback callback function to invoke when the event is fired
     * @returns void
     * @since 1.7
     */
    addEventListener:function(name, callback) {
    },

    /**
     * <p>Creates stream from specified container.  Returns {@link Titanium.BufferStream} or {@link Titanium.BlobStream} depending on whether a Buffer or Blob is provided as the 'source' property in params.  Write and append mode only applies to Buffer as Blob is read only.</p>
     * platforms: iphone, android, ipad
     * @param {Object} params creation arguments, which are: <tt>source</tt>, a {@link Titanium.Buffer} or {@link Titanium.Blob} on which to base the stream.  <tt>mode</tt>,  mode for the stream to be opened in, which can be {@link Titanium.Stream.MODE_READ},  {@link Titanium.Stream.MODE_WRITE} or {@link Titanium.Stream.MODE_APPEND}.
     * @since 1.7
     */
    createStream:function(params) {
    },

    /**
     * fire a synthesized event to the views listener
     * platforms: iphone, android, ipad
     * @param {string} name name of the event
     * @param {object} event event object
     * @returns void
     * @since 1.7
     */
    fireEvent:function(name, event) {
    },

    /**
     * <p>Pumps data from input stream to handler method</p>
     * platforms: iphone, android, ipad
     * @param {{@link Titanium_IOStream}} inputStream Stream to pump from
     * @param {Function} handler handler method that will receive the pumped data.  The function takes a single parameter, which in turn contains the following members: <tt>source</tt>, the stream being read from.  <tt>buffer</tt>, the {@link Titanium.Buffer} holding the data currently being pumped to the handler method (i.e., the current chunk).  <tt>bytesProcessed</tt>, the number of bytes in the current pump segment.  <tt>totalBytesProcessed</tt>, total number of bytes processed in the overall pump operation so far.  <tt>errorState</tt>, an error state if any.  <tt>errorDescription</tt>, an error description if any.
     * @param {Number} maxChunkSize max size of data to pump from inputStream to the handler method at once
     * @param {Boolean} isAsync true is pump operation should be async, false is not.  (Optional, default is false).
     * @returns void
     * @since 1.7
     */
    pump:function(inputStream, handler, maxChunkSize, isAsync) {
    },

    /**
     * <p>Async version of read on {@link Titanium.IOStream}</p>
     * platforms: iphone, android, ipad
     * @param {{@link Titanium_IOStream}} sourceStream Stream to read from
     * @param {{@link Titanium_Buffer}} buffer Buffer to read into
     * @param {Number} offset (optional) offset to start reading buffer data from.  Default = 0.
     * @param {Number} length (optional) length of data to read from buffer.  Default is buffer length.
     * @param {Function} resultsCallback called with result of the read operation.  Callback parameter has these members: <tt>source</tt>, the stream being read.  <tt>bytesProcessed</tt>, the number of bytes read.  <tt>errorState</tt>, an error state if any.  <tt>errorDescription</tt>, an error description if any.
     * @returns void
     * @since 1.7
     */
    read:function(sourceStream, buffer, offset, length, resultsCallback) {
    },

    /**
     * <p>reads all data from {@link Titanium.IOStream}.  If you pass a buffer and callback, the read will be asynchronous and <tt>readAll</tt> won't return anything.  If you don't pass a buffer and callback, the read will be synchronous and a {@link Titanium.Buffer} with the read data will be returned.</p>
     * platforms: iphone, android, ipad
     * @param {{@link Titanium_IOStream}} sourceStream Stream to read from
     * @param {{@link Titanium_Buffer}} buffer Buffer to read into.  OPTIONAL: use only if you want an asynchronous read.
     * @param {Function} resultsCallback called with result of the read operation.  OPTIONAL: use only if you want an asynchronous read.  Callback parameter has these members: <tt>source</tt>, the stream being read.  <tt>bytesProcessed</tt>, the number of bytes read.  <tt>errorState</tt>, an error state if any.  <tt>errorDescription</tt>, an error description if any.
     * @returns void
     * @since 1.7
     */
    readAll:function(sourceStream, buffer, resultsCallback) {
    },

    /**
     * remove a previously added event listener
     * platforms: iphone, android, ipad
     * @param {string} name name of the event
     * @param {function} callback callback function passed in addEventListener
     * @returns void
     * @since 1.7
     */
    removeEventListener:function(name, callback) {
    },

    /**
     * <p>Async version of write on {@link Titanium.IOStream} that takes offset and length</p>
     * platforms: iphone, android, ipad
     * @param {{@link Titanium_IOStream}} outputStream Stream to write to
     * @param {{@link Titanium_Buffer}} buffer Buffer to write from
     * @param {Number} offset offset to start writing buffer data from. (Optional, default is 0).
     * @param {Number} length length of data to write from buffer.  (Optional, default is buffer.length).
     * @param {Function} resultsCallback called with result of the write operation. Callback parameter has these members: <tt>source</tt>, the stream being written to.  <tt>bytesProcessed</tt>, the number of bytes written.  <tt>errorState</tt>, an error state if any.  <tt>errorDescription</tt>, an error description if any.
     * @returns void
     * @since 1.7
     */
    write:function(outputStream, buffer, offset, length, resultsCallback) {
    },

    /**
     * <p>Writes all data from input stream to output stream.  Pass a callback function as the final argument if you wish for the write operation to be asynchronous.  The synchronous version will return a number indicating the number of bytes written.</p>
     * platforms: iphone, android, ipad
     * @param {{@link Titanium_IOStream}} inputStream Stream to read from
     * @param {{@link Titanium_IOStream}} outputStream Stream to write to
     * @param {Number} maxChunkSize max size of data to write from inputStream to ouputStream at once
     * @param {Function} resultsCallback called with result of the writeStream operation.  (OPTIONAL: use only if you want the write operation to be asynchronous).  The callback parameter has these members: <tt>fromStream</tt>, the stream being read from.  <tt>toStream</tt>, the stream being written to.  <tt>bytesProcessed</tt>, the number of bytes read and written.  <tt>errorState</tt>, an error state if any.  <tt>errorDescription</tt>, an error description if any.
     * @returns void
     * @since 1.7
     */
    writeStream:function(inputStream, outputStream, maxChunkSize, resultsCallback) {
    }
}

/**
 * Notes: <h3 id="design">Design</h3>
<p>The UI module is broken down into 3 major area:</p>
<ul>
<li><strong>Views</strong> - {@link Titanium.UI.View} are containers that host visual elements such as controls or other views.  Views can have their properties customized, such as their border color and radius, can fire events such as swipe events or touches, and can optionally contain a hierarchy or other views as children. In Titanium, most views are specialized to perform both a visual function and set of interaction behaviors such as {@link Titanium.UI.TableView} or {@link Titanium.UI.CoverFlowView}.  Views are always named with the suffix <tt>View</tt>.</li>
<li><strong>Controls</strong> - controls, or sometimes referred as widgets, are visual elements such as {@link Titanium.UI.Slider}, {@link Titanium.UI.Button} and {@link Titanium.UI.Switch}. They provide a visual element which has a defined behavior and typical have special configuration and special events.  Controls themselves are views and also inherit a views properties, functions and events.</li>
<li><strong>Windows</strong> - {@link Titanium.UI.Window} are typically top-level visual constructs that are the main part of your interface. An application will always have at least one window and windows can take different shapes and sizes, can have display and interaction properties such as fullscreen or modal and can be customized, such as changing their opacity or background color. Windows themselves are views and also inherit a views properties, functions and events. There are a few specialization of Windows such as a {@link Titanium.UI.TabGroup} which offer additional behavior beyond the basic Window.</li>
</ul>
<p>Titanium uses the {@link http://en.wikipedia.org/wiki/Factory_method_pattern} for constructing objects and a general naming pattern for APIs.  For example, to construct a {@link Titanium.UI.AlertDialog}, you call the method {@link Titanium.UI.createAlertDialog}.  To create a {@link Titanium.UI.TextArea}, you call the method {@link Titanium.UI.createTextArea}.  Once an object is created, it will be available until it goes out of scope.</p>
<h3 id="optimizations">Optimizations</h3>
<p>UI objects are optimized by Titanium to not be realized into the drawing context and placed into the device UI surface until needed.  That means that you can create UI objects, set their properties and add them to their hierarchy without much worry about memory or performance.  When the native drawing surface needs to render a specific view or control, Titanium will automatically create the view as needed.  Additionally, Titanium is optimized to also release memory once the view is no longer needed, on screen or in low memory situations.  However, it's a good idea to help Titanium along in certain cases where you are no longer using objects.  For example, you should call <tt>close</tt> on a {@link Titanium.UI.Window} instance when you are no longer using it.  You can safely call <tt>open</tt> on the {@link Titanium.UI.Window} again to re-open it.<br>
</p>
<h3 id="global_context_and_threading">Global Context and Threading</h3>
<p>Be careful with the objects that are created in <tt>app.js</tt> but only used once.  Since the <tt>app.js</tt> context is global and generally is not garbage collected until the application exits, you should think about the design of your application as it relates to this fact.  {@link Titanium.UI.Window} objects that are opened up with the <tt>url</tt> property to another Javascript file contain a nice way to decompose your application into smaller units.  The other benefit is that when a {@link Titanium.UI.Window} is closed, its resources can be immediately cleaned up, saving resources such as memory and CPU.  Additionally, {@link Titanium.UI.Window} objects run in a separate Javascript context and Thread. While all UI processing is done on the main UI thread, other processing inside a Window or the <tt>app.js</tt> that does not have UI interaction will run in its own thread.</p>
<h3 id="portability">Portability</h3>
<p>Titanium components are designed to be portable across as many platforms as it supports.  However, there are cases where a device either does not support a specific feature or capability or where it support additional functionality.  For cases where the device OS supports capabilities that other platforms do not, we attempt to place those capabilities in a separate namespace, such as {@link Titanium.UI.iPhone}. However, in cases where the control is in a common namespace and support additional features, we continue to place that functionality directly on the object.</p>
 * platforms: android, iphone, ipad
 * @namespace <p>The main {@link Titanium.UI} module.  The UI module is responsible for native user-interface components and interaction inside Titanium.  The goal of the UI module is to provide a native experience along with native performance by compiling Javascript code into their native counterparts as part of the build process. </p>
 * @since 0.4
 */
Ti.UI = {

    /**
     * <p>animation curve constant</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.4
     */
    ANIMATION_CURVE_EASE_IN:null,

    /**
     * <p>animation curve constant</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.4
     */
    ANIMATION_CURVE_EASE_IN_OUT:null,

    /**
     * <p>animation curve constant</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.4
     */
    ANIMATION_CURVE_EASE_OUT:null,

    /**
     * <p>animation curve constant</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.4
     */
    ANIMATION_CURVE_LINEAR:null,

    /**
     * <p>text autodetection constant (iOS 4.0+)</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.4
     */
    AUTODETECT_ADDRESS:null,

    /**
     * <p>text autodetection constant (iOS)</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.4
     */
    AUTODETECT_ALL:null,

    /**
     * <p>text autodetection constant (iOS 4.0+)</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.4
     */
    AUTODETECT_CALENDAR:null,

    /**
     * <p>text autodetection constant (iOS)</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.4
     */
    AUTODETECT_LINK:null,

    /**
     * <p>text autodetection constant (iOS)</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.4
     */
    AUTODETECT_NONE:null,

    /**
     * <p>text autodetection constant (iOS)</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.4
     */
    AUTODETECT_PHONE:null,

    /**
     * <p>image mode constant</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.4
     */
    BLEND_MODE_CLEAR:null,

    /**
     * <p>image mode constant</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.4
     */
    BLEND_MODE_COLOR:null,

    /**
     * <p>image mode constant</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.4
     */
    BLEND_MODE_COLOR_BURN:null,

    /**
     * <p>image mode constant</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.4
     */
    BLEND_MODE_COLOR_DODGE:null,

    /**
     * <p>image mode constant</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.4
     */
    BLEND_MODE_COPY:null,

    /**
     * <p>image mode constant</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.4
     */
    BLEND_MODE_DARKEN:null,

    /**
     * <p>image mode constant</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.4
     */
    BLEND_MODE_DESTINATION_ATOP:null,

    /**
     * <p>image mode constant</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.4
     */
    BLEND_MODE_DESTINATION_IN:null,

    /**
     * <p>image mode constant</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.4
     */
    BLEND_MODE_DESTINATION_OUT:null,

    /**
     * <p>image mode constant</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.4
     */
    BLEND_MODE_DESTINATION_OVER:null,

    /**
     * <p>image mode constant</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.4
     */
    BLEND_MODE_DIFFERENCE:null,

    /**
     * <p>image mode constant</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.4
     */
    BLEND_MODE_EXCLUSION:null,

    /**
     * <p>image mode constant</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.4
     */
    BLEND_MODE_HARD_LIGHT:null,

    /**
     * <p>image mode constant</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.4
     */
    BLEND_MODE_HUE:null,

    /**
     * <p>image mode constant</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.4
     */
    BLEND_MODE_LIGHTEN:null,

    /**
     * <p>image mode constant</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.4
     */
    BLEND_MODE_LUMINOSITY:null,

    /**
     * <p>image mode constant</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.4
     */
    BLEND_MODE_MULTIPLY:null,

    /**
     * <p>image mode constant</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.4
     */
    BLEND_MODE_NORMAL:null,

    /**
     * <p>image mode constant</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.4
     */
    BLEND_MODE_OVERLAY:null,

    /**
     * <p>image mode constant</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.4
     */
    BLEND_MODE_PLUS_DARKER:null,

    /**
     * <p>image mode constant</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.4
     */
    BLEND_MODE_PLUS_LIGHTER:null,

    /**
     * <p>image mode constant</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.4
     */
    BLEND_MODE_SATURATION:null,

    /**
     * <p>image mode constant</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.4
     */
    BLEND_MODE_SCREEN:null,

    /**
     * <p>image mode constant</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.4
     */
    BLEND_MODE_SOFT_LIGHT:null,

    /**
     * <p>image mode constant</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.4
     */
    BLEND_MODE_SOURCE_ATOP:null,

    /**
     * <p>image mode constant</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.4
     */
    BLEND_MODE_SOURCE_IN:null,

    /**
     * <p>image mode constant</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.4
     */
    BLEND_MODE_SOURCE_OUT:null,

    /**
     * <p>image mode constant</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.4
     */
    BLEND_MODE_XOR:null,

    /**
     * <p>orientation constant</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.4
     */
    FACE_DOWN:null,

    /**
     * <p>orientation constant</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.4
     */
    FACE_UP:null,

    /**
     * <p>input border style constant</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.4
     */
    INPUT_BORDERSTYLE_BEZEL:null,

    /**
     * <p>input border style constant</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.4
     */
    INPUT_BORDERSTYLE_LINE:null,

    /**
     * <p>input border style constant</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.4
     */
    INPUT_BORDERSTYLE_NONE:null,

    /**
     * <p>input border style constant</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.4
     */
    INPUT_BORDERSTYLE_ROUNDED:null,

    /**
     * <p>input button mode constant</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.4
     */
    INPUT_BUTTONMODE_ALWAYS:null,

    /**
     * <p>input button mode constant</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.4
     */
    INPUT_BUTTONMODE_NEVER:null,

    /**
     * <p>input button mode constant</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.4
     */
    INPUT_BUTTONMODE_ONBLUR:null,

    /**
     * <p>input button mode constant</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.4
     */
    INPUT_BUTTONMODE_ONFOCUS:null,

    /**
     * <p>textfield keyboard appearance constant</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.4
     */
    KEYBOARD_APPEARANCE_ALERT:null,

    /**
     * <p>textfield keyboard appearance constant</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.4
     */
    KEYBOARD_APPEARANCE_DEFAULT:null,

    /**
     * <p>textfield keyboard constant</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.4
     */
    KEYBOARD_ASCII:null,

    /**
     * <p>textfield keyboard constant</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.4
     */
    KEYBOARD_DEFAULT:null,

    /**
     * <p>textfield keyboard constant</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.4
     */
    KEYBOARD_EMAIL:null,

    /**
     * <p>textfield keyboard constant</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.4
     */
    KEYBOARD_NAMEPHONE_PAD:null,

    /**
     * <p>textfield keyboard constant</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.4
     */
    KEYBOARD_NUMBERS_PUNCTUATION:null,

    /**
     * <p>textfield keyboard constant</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.4
     */
    KEYBOARD_NUMBER_PAD:null,

    /**
     * <p>textfield keyboard constant</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.4
     */
    KEYBOARD_PHONE_PAD:null,

    /**
     * <p>textfield keyboard constant</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.4
     */
    KEYBOARD_URL:null,

    /**
     * <p>orientation (home button on left) constant</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.4
     */
    LANDSCAPE_LEFT:null,

    /**
     * <p>orientation (home button on right) constant</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.4
     */
    LANDSCAPE_RIGHT:null,

    /**
     * <p>Duration of the notification</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.4
     */
    NOTIFICATION_DURATION_LONG:null,

    /**
     * <p>Duration of the notification</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.4
     */
    NOTIFICATION_DURATION_SHORT:null,

    /**
     * <p>picker type constant</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.4
     */
    PICKER_TYPE_COUNT_DOWN_TIMER:null,

    /**
     * <p>picker type constant</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.4
     */
    PICKER_TYPE_DATE:null,

    /**
     * <p>picker type constant</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.4
     */
    PICKER_TYPE_DATE_AND_TIME:null,

    /**
     * <p>picker type constant</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.4
     */
    PICKER_TYPE_PLAIN:null,

    /**
     * <p>picker type constant</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.4
     */
    PICKER_TYPE_TIME:null,

    /**
     * <p>orientation (home button on bottom) constant</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.4
     */
    PORTRAIT:null,

    /**
     * <p>textfield return key constant</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.4
     */
    RETURNKEY_DEFAULT:null,

    /**
     * <p>textfield return key constant</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.4
     */
    RETURNKEY_DONE:null,

    /**
     * <p>textfield return key constant</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.4
     */
    RETURNKEY_EMERGENCY_CALL:null,

    /**
     * <p>textfield return key constant</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.4
     */
    RETURNKEY_GO:null,

    /**
     * <p>textfield return key constant</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.4
     */
    RETURNKEY_GOOGLE:null,

    /**
     * <p>textfield return key constant</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.4
     */
    RETURNKEY_JOIN:null,

    /**
     * <p>textfield return key constant</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.4
     */
    RETURNKEY_NEXT:null,

    /**
     * <p>textfield return key constant</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.4
     */
    RETURNKEY_ROUTE:null,

    /**
     * <p>textfield return key constant</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.4
     */
    RETURNKEY_SEARCH:null,

    /**
     * <p>textfield return key constant</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.4
     */
    RETURNKEY_SEND:null,

    /**
     * <p>textfield return key constant</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.4
     */
    RETURNKEY_YAHOO:null,

    /**
     * <p>text align constant</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.4
     */
    TEXT_ALIGNMENT_CENTER:null,

    /**
     * <p>text align constant</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.4
     */
    TEXT_ALIGNMENT_LEFT:null,

    /**
     * <p>text align constant</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.4
     */
    TEXT_ALIGNMENT_RIGHT:null,

    /**
     * <p>text capitalization constant</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.4
     */
    TEXT_AUTOCAPITALIZATION_ALL:null,

    /**
     * <p>text capitalization constant</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.4
     */
    TEXT_AUTOCAPITALIZATION_NONE:null,

    /**
     * <p>text capitalization constant</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.4
     */
    TEXT_AUTOCAPITALIZATION_SENTENCES:null,

    /**
     * <p>text capitalization constant</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.4
     */
    TEXT_AUTOCAPITALIZATION_WORDS:null,

    /**
     * <p>text vertical align constant</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.4
     */
    TEXT_VERTICAL_ALIGNMENT_BOTTOM:null,

    /**
     * <p>text vertical align constant</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.4
     */
    TEXT_VERTICAL_ALIGNMENT_CENTER:null,

    /**
     * <p>text vertical align constant</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.4
     */
    TEXT_VERTICAL_ALIGNMENT_TOP:null,

    /**
     * <p>orientation constant</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.4
     */
    UNKNOWN:null,

    /**
     * <p>orientation (home button on top) constant</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.4
     */
    UPSIDE_PORTRAIT:null,

    /**
     * <p>this sets the background color of the master UIView (when there are no windows/tab groups on it)</p>
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.4
     */
    backgroundColor:null,

    /**
     * <p>path/url to an image file for setting a background for the master UIView (when there are no windows/tab groups on it).</p>
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.4
     */
    backgroundImage:null,

    /**
     * <p>The active window associated with the executing Javascript context.</p>
     * platforms: android, iphone, ipad
     * @type {@link Titanium_UI_Window_html}
     * @since 0.4
     */
    currentWindow:null,

    /**
     * <p>DEPRECATED.  To set an orientation, it is suggested to instead set {@link Titanium.Window.orientationModes} to the specific orientation desired.  When set, this will update the orientation of the current window to the specified orientation value</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.4
     */
    orientation:null,


    /**
     * add an event listener for the instance to receive view triggered events
     * platforms: android, iphone, ipad
     * @param {string} name name of the event
     * @param {function} callback callback function to invoke when the event is fired
     * @returns void
     * @since 0.4
     */
    addEventListener:function(name, callback) {
    },

    /**
     * create and return an instance of {@link Titanium.UI.2DMatrix}
     * platforms: android, iphone, ipad
     * @param {object} parameters (optional) a dictionary object properties defined in {@link Titanium.UI.2DMatrix}
     * @since 0.4
     */
    create2DMatrix:function(parameters) {
    },

    /**
     * create and return an instance of {@link Titanium.UI.3DMatrix}
     * platforms: android, iphone, ipad
     * @param {object} parameters (optional) a dictionary object properties defined in {@link Titanium.UI.3DMatrix}
     * @since 0.4
     */
    create3DMatrix:function(parameters) {
    },

    /**
     * create and return an instance of {@link Titanium.UI.ActivityIndicator}
     * platforms: android, iphone, ipad
     * @param {object} parameters (optional) a dictionary object properties defined in {@link Titanium.UI.ActivityIndicator}
     * @since 0.4
     */
    createActivityIndicator:function(parameters) {
    },

    /**
     * create and return an instance of {@link Titanium.UI.AlertDialog}
     * platforms: android, iphone, ipad
     * @param {object} parameters (optional) a dictionary object properties defined in {@link Titanium.UI.AlertDialog}
     * @since 0.4
     */
    createAlertDialog:function(parameters) {
    },

    /**
     * create and return an instance of {@link Titanium.UI.Animation}
     * platforms: android, iphone, ipad
     * @param {object} parameters (optional) a dictionary object properties defined in {@link Titanium.UI.Animation}
     * @since 0.4
     */
    createAnimation:function(parameters) {
    },

    /**
     * create and return an instance of {@link Titanium.UI.Button}
     * platforms: android, iphone, ipad
     * @param {object} parameters (optional) a dictionary object properties defined in {@link Titanium.UI.Button}
     * @since 0.4
     */
    createButton:function(parameters) {
    },

    /**
     * create and return an instance of {@link Titanium.UI.ButtonBar}
     * platforms: android, iphone, ipad
     * @param {object} parameters (optional) a dictionary object properties defined in {@link Titanium.UI.ButtonBar}
     * @since 0.4
     */
    createButtonBar:function(parameters) {
    },

    /**
     * create and return an instance of {@link Titanium.UI.CoverFlowView}
     * platforms: android, iphone, ipad
     * @param {object} parameters (optional) a dictionary object properties defined in {@link Titanium.UI.CoverFlowView}
     * @since 0.4
     */
    createCoverFlowView:function(parameters) {
    },

    /**
     * create and return an instance of {@link Titanium.UI.DashboardItem}
     * platforms: android, iphone, ipad
     * @param {object} parameters (optional) a dictionary object properties defined in {@link Titanium.UI.DashboardItem}
     * @since 0.4
     */
    createDashboardItem:function(parameters) {
    },

    /**
     * create and return an instance of {@link Titanium.UI.DashboardView}
     * platforms: android, iphone, ipad
     * @param {object} parameters (optional) a dictionary object properties defined in {@link Titanium.UI.DashboardView}
     * @since 0.4
     */
    createDashboardView:function(parameters) {
    },

    /**
     * create and return an instance of {@link Titanium.UI.EmailDialog}
     * platforms: android, iphone, ipad
     * @param {object} parameters (optional) a dictionary object properties defined in {@link Titanium.UI.EmailDialog}
     * @since 0.4
     */
    createEmailDialog:function(parameters) {
    },

    /**
     * create and return an instance of {@link Titanium.UI.ImageView}
     * platforms: android, iphone, ipad
     * @param {object} parameters (optional) a dictionary object properties defined in {@link Titanium.UI.ImageView}
     * @since 0.4
     */
    createImageView:function(parameters) {
    },

    /**
     * create and return an instance of {@link Titanium.UI.Label}
     * platforms: android, iphone, ipad
     * @param {object} parameters (optional) a dictionary object properties defined in {@link Titanium.UI.Label}
     * @since 0.4
     */
    createLabel:function(parameters) {
    },

    /**
     * create and return an instance of {@link Titanium.UI.OptionDialog}
     * platforms: android, iphone, ipad
     * @param {object} parameters (optional) a dictionary object properties defined in {@link Titanium.UI.OptionDialog}
     * @since 0.4
     */
    createOptionDialog:function(parameters) {
    },

    /**
     * create and return an instance of {@link Titanium.UI.Picker}
     * platforms: android, iphone, ipad
     * @param {object} parameters (optional) a dictionary object properties defined in {@link Titanium.UI.Picker}
     * @since 0.4
     */
    createPicker:function(parameters) {
    },

    /**
     * create and return an instance of {@link Titanium.UI.PickerColumn}
     * platforms: android, iphone, ipad
     * @param {object} parameters (optional) a dictionary object properties defined in {@link Titanium.UI.PickerColumn}
     * @since 0.4
     */
    createPickerColumn:function(parameters) {
    },

    /**
     * create and return an instance of {@link Titanium.UI.PickerRow}
     * platforms: android, iphone, ipad
     * @param {object} parameters (optional) a dictionary object properties defined in {@link Titanium.UI.PickerRow}
     * @since 0.4
     */
    createPickerRow:function(parameters) {
    },

    /**
     * create and return an instance of {@link Titanium.UI.ProgressBar}
     * platforms: android, iphone, ipad
     * @param {object} parameters (optional) a dictionary object properties defined in {@link Titanium.UI.ProgressBar}
     * @since 0.4
     */
    createProgressBar:function(parameters) {
    },

    /**
     * create and return an instance of {@link Titanium.UI.ScrollView}
     * platforms: android, iphone, ipad
     * @param {object} parameters (optional) a dictionary object properties defined in {@link Titanium.UI.ScrollView}
     * @since 0.4
     */
    createScrollView:function(parameters) {
    },

    /**
     * create and return an instance of {@link Titanium.UI.ScrollableView}
     * platforms: android, iphone, ipad
     * @param {object} parameters (optional) a dictionary object properties defined in {@link Titanium.UI.ScrollableView}
     * @since 0.4
     */
    createScrollableView:function(parameters) {
    },

    /**
     * create and return an instance of {@link Titanium.UI.SearchBar}
     * platforms: android, iphone, ipad
     * @param {object} parameters (optional) a dictionary object properties defined in {@link Titanium.UI.SearchBar}
     * @since 0.4
     */
    createSearchBar:function(parameters) {
    },

    /**
     * create and return an instance of {@link Titanium.UI.Slider}
     * platforms: android, iphone, ipad
     * @param {object} parameters (optional) a dictionary object properties defined in {@link Titanium.UI.Slider}
     * @since 0.4
     */
    createSlider:function(parameters) {
    },

    /**
     * create and return an instance of {@link Titanium.UI.Switch}
     * platforms: android, iphone, ipad
     * @param {object} parameters (optional) a dictionary object properties defined in {@link Titanium.UI.Switch}
     * @since 0.4
     */
    createSwitch:function(parameters) {
    },

    /**
     * create and return an instance of {@link Titanium.UI.Tab}
     * platforms: android, iphone, ipad
     * @param {object} parameters (optional) a dictionary object properties defined in {@link Titanium.UI.Tab}
     * @since 0.4
     */
    createTab:function(parameters) {
    },

    /**
     * create and return an instance of {@link Titanium.UI.TabGroup}
     * platforms: android, iphone, ipad
     * @param {object} parameters (optional) a dictionary object properties defined in {@link Titanium.UI.TabGroup}
     * @since 0.4
     */
    createTabGroup:function(parameters) {
    },

    /**
     * create and return an instance of {@link Titanium.UI.TabbedBar}
     * platforms: android, iphone, ipad
     * @param {object} parameters (optional) a dictionary object properties defined in {@link Titanium.UI.TabbedBar}
     * @since 0.4
     */
    createTabbedBar:function(parameters) {
    },

    /**
     * create and return an instance of {@link Titanium.UI.TableView}
     * platforms: android, iphone, ipad
     * @param {object} parameters (optional) a dictionary object properties defined in {@link Titanium.UI.TableView}
     * @since 0.4
     */
    createTableView:function(parameters) {
    },

    /**
     * create and return an instance of {@link Titanium.UI.TableViewRow}
     * platforms: android, iphone, ipad
     * @param {object} parameters (optional) a dictionary object properties defined in {@link Titanium.UI.TableViewRow}
     * @since 0.4
     */
    createTableViewRow:function(parameters) {
    },

    /**
     * create and return an instance of {@link Titanium.UI.TableViewSection}
     * platforms: android, iphone, ipad
     * @param {object} parameters (optional) a dictionary object properties defined in {@link Titanium.UI.TableViewSection}
     * @since 0.4
     */
    createTableViewSection:function(parameters) {
    },

    /**
     * create and return an instance of {@link Titanium.UI.TextArea}
     * platforms: android, iphone, ipad
     * @param {object} parameters (optional) a dictionary object properties defined in {@link Titanium.UI.TextArea}
     * @since 0.4
     */
    createTextArea:function(parameters) {
    },

    /**
     * create and return an instance of {@link Titanium.UI.TextField}
     * platforms: android, iphone, ipad
     * @param {object} parameters (optional) a dictionary object properties defined in {@link Titanium.UI.TextField}
     * @since 0.4
     */
    createTextField:function(parameters) {
    },

    /**
     * create and return an instance of {@link Titanium.UI.Toolbar}
     * platforms: android, iphone, ipad
     * @param {object} parameters (optional) a dictionary object properties defined in {@link Titanium.UI.Toolbar}
     * @since 0.4
     */
    createToolbar:function(parameters) {
    },

    /**
     * create and return an instance of {@link Titanium.UI.View}
     * platforms: android, iphone, ipad
     * @param {object} parameters (optional) a dictionary object properties defined in {@link Titanium.UI.View}
     * @since 0.4
     */
    createView:function(parameters) {
    },

    /**
     * create and return an instance of {@link Titanium.UI.WebView}
     * platforms: android, iphone, ipad
     * @param {object} parameters (optional) a dictionary object properties defined in {@link Titanium.UI.WebView}
     * @since 0.4
     */
    createWebView:function(parameters) {
    },

    /**
     * create and return an instance of {@link Titanium.UI.Window}
     * platforms: android, iphone, ipad
     * @param {object} parameters (optional) a dictionary object properties defined in {@link Titanium.UI.Window}
     * @since 0.4
     */
    createWindow:function(parameters) {
    },

    /**
     * fire a synthesized event to the views listener
     * platforms: android, iphone, ipad
     * @param {string} name name of the event
     * @param {object} event event object
     * @returns void
     * @since 0.4
     */
    fireEvent:function(name, event) {
    },

    /**
     * remove a previously added event listener
     * platforms: android, iphone, ipad
     * @param {string} name name of the event
     * @param {function} callback callback function passed in addEventListener
     * @returns void
     * @since 0.4
     */
    removeEventListener:function(name, callback) {
    }
}

/**
 * Notes: <p>You create an <tt>identity matrix</tt> by creating a 2D Matrix with an empty constructor.</p>
 * platforms: android, iphone, ipad
 * @namespace <p>The 2DMatrix is created by {@link Titanium.UI.create2DMatrix}.  The 2D Matrix is an object for holding values for an affine transformation matrix. A 2D matrix is used to rotate, scale, translate, or skew the objects in a two-dimensional space. A 2D matrix is represented by a 3 by 3 matrix. Because the third column is always (0,0,1), the data structure contains values for only the first two columns.</p>
 * @since 0.9
 */
function Titanium_UI_2DMatrix() {
}
Titanium_UI_2DMatrix.prototype = {


    /**
     * add an event listener for the instance to receive view triggered events
     * platforms: android, iphone, ipad
     * @param {string} name name of the event
     * @param {function} callback callback function to invoke when the event is fired
     * @returns void
     * @since 0.9
     */
    addEventListener:function(name, callback) {
    },

    /**
     * fire a synthesized event to the views listener
     * platforms: android, iphone, ipad
     * @param {string} name name of the event
     * @param {object} event event object
     * @returns void
     * @since 0.9
     */
    fireEvent:function(name, event) {
    },

    /**
     * <p>Returns a matrix constructed by inverting an existing matrix</p>
     * platforms: android, iphone, ipad
     * @returns void
     * @since 0.9
     */
    invert:function() {
    },

    /**
     * <p>Returns a matrix constructed by combining two existing matrix.</p>
     * platforms: android, iphone, ipad
     * @param {object} t2 The second matrix. This matrix is concatenated to the matrix instance against which the function is invoked.  The result of this function is the first matrix multiplied by the second matrix. You might perform several multiplications in order to create a single matrix that contains the cumulative effects of several transformations. Note that matrix operations are not commutative - the order in which you concatenate matrices is important. That is, the result of multiplying matrix t1 by matrix t2 does not necessarily equal the result of multiplying matrix t2 by matrix t1.
     * @since 0.9
     */
    multiply:function(t2) {
    },

    /**
     * remove a previously added event listener
     * platforms: android, iphone, ipad
     * @param {string} name name of the event
     * @param {function} callback callback function passed in addEventListener
     * @returns void
     * @since 0.9
     */
    removeEventListener:function(name, callback) {
    },

    /**
     * <p>Returns a matrix constructed by rotating an existing matrix</p>
     * platforms: android, iphone, ipad
     * @param {float} angle The angle, in degrees, by which to rotate the matrix. A positive value specifies counterclockwise rotation and a negative value specifies clockwise rotation.
     * @since 0.9
     */
    rotate:function(angle) {
    },

    /**
     * <p>Returns a matrix constructed by scaling an existing matrix</p>
     * platforms: android, iphone, ipad
     * @param {float} sx The value by which to scale x values of the matrix
     * @param {float} sy The value by which to scale y values of the matrix
     * @since 0.9
     */
    scale:function(sx, sy) {
    },

    /**
     * <p>Returns a matrix constructed by translating an existing matrix</p>
     * platforms: android, iphone, ipad
     * @param {float} tx The value by which to move x values with the matrix
     * @param {float} ty The value by which to move y values with the matrix
     * @since 0.9
     */
    translate:function(tx, ty) {
    }
}

/**
 * Notes: <p>You create an <tt>identity matrix</tt> by creating a 3D Matrix with an empty constructor.</p>
 * platforms: android, iphone, ipad
 * @namespace <p>The 3DMatrix is created by {@link Titanium.UI.create3DMatrix}.  The 3D Matrix is an object for holding values for an affine transformation matrix. A 3D matrix is used to rotate, scale, translate, or skew the objects in a three-dimensional space. A 3D matrix is represented by a 4 by 4 matrix. Because the forth column is always (0,0,1), the data structure contains values for only the first three columns.</p>
 * @since 0.9
 */
function Titanium_UI_3DMatrix() {
}
Titanium_UI_3DMatrix.prototype = {


    /**
     * add an event listener for the instance to receive view triggered events
     * platforms: android, iphone, ipad
     * @param {string} name name of the event
     * @param {function} callback callback function to invoke when the event is fired
     * @returns void
     * @since 0.9
     */
    addEventListener:function(name, callback) {
    },

    /**
     * fire a synthesized event to the views listener
     * platforms: android, iphone, ipad
     * @param {string} name name of the event
     * @param {object} event event object
     * @returns void
     * @since 0.9
     */
    fireEvent:function(name, event) {
    },

    /**
     * <p>Returns a matrix constructed by inverting an existing matrix</p>
     * platforms: android, iphone, ipad
     * @returns void
     * @since 0.9
     */
    invert:function() {
    },

    /**
     * <p>Returns a matrix constructed by combining two existing matrix.</p>
     * platforms: android, iphone, ipad
     * @param {object} t2 The second matrix. This matrix is concatenated to the matrix instance against which the function is invoked.  The result of this function is the first matrix multiplied by the second matrix. You might perform several multiplications in order to create a single matrix that contains the cumulative effects of several transformations. Note that matrix operations are not commutative - the order in which you concatenate matrices is important. That is, the result of multiplying matrix t1 by matrix t2 does not necessarily equal the result of multiplying matrix t2 by matrix t1.
     * @since 0.9
     */
    multiply:function(t2) {
    },

    /**
     * remove a previously added event listener
     * platforms: android, iphone, ipad
     * @param {string} name name of the event
     * @param {function} callback callback function passed in addEventListener
     * @returns void
     * @since 0.9
     */
    removeEventListener:function(name, callback) {
    },

    /**
     * <p>Returns a matrix constructed by rotating an existing matrix</p>
     * platforms: android, iphone, ipad
     * @param {float} angle The angle, in degrees, by which to rotate the matrix. A positive value specifies counterclockwise rotation and a negative value specifies clockwise rotation.
     * @param {float} x The x part of the vector about which to rotate
     * @param {float} y The y part of the vector about which to rotate
     * @param {float} z The z part of the vector about which to rotate
     * @since 0.9
     */
    rotate:function(angle, x, y, z) {
    },

    /**
     * <p>Returns a matrix constructed by scaling an existing matrix</p>
     * platforms: android, iphone, ipad
     * @param {float} sx The value by which to scale x values of the matrix
     * @param {float} sy The value by which to scale y values of the matrix
     * @param {float} sz The value by which to scale z values of the matrix
     * @since 0.9
     */
    scale:function(sx, sy, sz) {
    },

    /**
     * <p>Returns a matrix constructed by translating an existing matrix</p>
     * platforms: android, iphone, ipad
     * @param {float} tx The value by which to move x values with the matrix
     * @param {float} ty The value by which to move y values with the matrix
     * @param {float} tz The value by which to move z values with the matrix
     * @since 0.9
     */
    translate:function(tx, ty, tz) {
    }
}

/**
 * Notes: <p>For iPhone, the style can be set from the constants {@link Titanium.UI.iPhone.ActivityIndicatorStyle}.</p>
 * platforms: android, iphone, ipad
 * @namespace <p>An Activity Indicator is created by the method {@link Titanium.UI.createActivityIndicator}.  An activity indicator can be used to show the progress of an operation in the UI to let the user know some action is taking place.</p>
 * @since 0.8
 * 
 * @example Simple Activity Indicator
 * <p>In this example, we create a basic activity indicator and start it.</p>
<pre><code>var actInd = Titanium.UI.createActivityIndicator({
    height:50,
    width:10
});
actInd.show();
</code></pre>
 */
Ti.UI.ActivityIndicator = {

    /**
     * <p>the color of the message label</p>
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    color:null,

    /**
     * <p>the font object for the activity message label</p>
     * platforms: android, iphone, ipad
     * @type object
     * @since 0.8
     */
    font:null,

    /**
     * <p>the activity message label text</p>
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    message:null,

    /**
     * <p>the key in the locale file to use for the message property</p>
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    messageid:null,

    /**
     * <p>the style constant of the activity indicator</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.8
     */
    style:null,


    /**
     * <p>call hide to make the activity indicator hidden and stop spinning</p>
     * platforms: android, iphone, ipad
     * @returns void
     * @since 0.8
     */
    hide:function() {
    },

    /**
     * <p>call show to make the activity indicator visible and start spinning</p>
     * platforms: android, iphone, ipad
     * @returns void
     * @since 0.8
     */
    show:function() {
    }
}

/**
 * Notes: <p>the global method <tt>alert</tt> is aliased to this object and can be invoked with a single message. For example:</p>
<pre><code>alert("this is a message");
</code></pre>

<p>Note: you should be careful not to call alert more than once while a pending alert is visible.</p>
<p>On iOS 4, alert dialogs will automatically be cancelled upon application suspend.</p>
 * platforms: android, iphone, ipad
 * @namespace <p>The Alert Dialog is created by {@link Titanium.UI.createAlertDialog} and allows you to show a modal application dialog.</p>
 * @since 0.8
 * 
 * @example Simple Alert Dialog
 * <p>In this example, we show a simple alert dialog.</p>
<pre><code>var alertDialog = Titanium.UI.createAlertDialog({
    title: 'Hello',
    message: 'You got mail',
    buttonNames: ['OK','Doh!']
});
alertDialog.show();
</code></pre>
 */
function Titanium_UI_AlertDialog() {
}
Titanium_UI_AlertDialog.prototype = {

    /**
     * <p>array of button names as strings</p>
     * platforms: android, iphone, ipad
     * @type array
     * @since 0.8
     */
    buttonNames:null,

    /**
     * <p>an index to indicate which button should be the cancel button</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.8
     */
    cancel:null,

    /**
     * <p>the message of the dialog</p>
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    message:null,

    /**
     * <p>the key in the locale file to use for the message property</p>
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    messageid:null,

    /**
     * <p>the title of the dialog</p>
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    title:null,


    /**
     * add an event listener for the instance to receive view triggered events
     * platforms: android, iphone, ipad
     * @param {string} name name of the event
     * @param {function} callback callback function to invoke when the event is fired
     * @returns void
     * @since 0.8
     */
    addEventListener:function(name, callback) {
    },

    /**
     * fire a synthesized event to the views listener
     * platforms: android, iphone, ipad
     * @param {string} name name of the event
     * @param {object} event event object
     * @returns void
     * @since 0.8
     */
    fireEvent:function(name, event) {
    },

    /**
     * <p>cause the dialog to become hidden</p>
     * platforms: android, iphone, ipad
     * @returns void
     * @since 0.8
     */
    hide:function() {
    },

    /**
     * remove a previously added event listener
     * platforms: android, iphone, ipad
     * @param {string} name name of the event
     * @param {function} callback callback function passed in addEventListener
     * @returns void
     * @since 0.8
     */
    removeEventListener:function(name, callback) {
    },

    /**
     * <p>cause the dialog to become visible</p>
     * platforms: android, iphone, ipad
     * @returns void
     * @since 0.8
     */
    show:function() {
    }
}

/**
 * platforms: android
 * @namespace <p>The Android specific UI capabilities. All properties, methods and events in this namespace will only work on Android related devices.</p>
 * @since 1.0
 */
Ti.UI.Android = {

    /**
     * <p>Auto link all supported types.</p>
     * platforms: android
     * @type int
     * @since 1.0
     */
    LINKIFY_ALL:null,

    /**
     * <p>Auto link email addresses.</p>
     * platforms: android
     * @type int
     * @since 1.0
     */
    LINKIFY_EMAIL_ADDRESSES:null,

    /**
     * <p>Auto link physical addresses.</p>
     * platforms: android
     * @type int
     * @since 1.0
     */
    LINKIFY_MAP_ADDRESSES:null,

    /**
     * <p>Convert all street addresses to clickable links</p>
     * platforms: android
     * @type int
     * @since 1.0
     */
    LINKIFY_MAP_LINKS:null,

    /**
     * <p>Auto link phone numbers.</p>
     * platforms: android
     * @type int
     * @since 1.0
     */
    LINKIFY_PHONE_NUMBERS:null,

    /**
     * <p>Auto link web urls.</p>
     * platforms: android
     * @type int
     * @since 1.0
     */
    LINKIFY_WEB_URLS:null,

    /**
     * <p>Pan contents when soft keyboard is visible. Use on Activity ("heavy weight window") to suggest how the virtual keyboard should treat the window contents. Must be specified in creation options.</p>
     * platforms: android
     * @type int
     * @since 1.0
     */
    SOFT_INPUT_ADJUST_PAN:null,

    /**
     * <p>Resize contents when soft keyboard is visible. Use on Activity ("heavy weight window") to suggest how the virtual keyboard should treat the window contents. Must be specified in creation options.</p>
     * platforms: android
     * @type int
     * @since 1.0
     */
    SOFT_INPUT_ADJUST_RESIZE:null,

    /**
     * <p>(default) If set in the AndroidManifest.xml use that setting. Otherwise, let the keyboard decided. Must be specified in creation options.</p>
     * platforms: android
     * @type int
     * @since 1.0
     */
    SOFT_INPUT_ADJUST_UNSPECIFIED:null,

    /**
     * <p>Attempt to hide the soft keyboard when control receives keyboard focus.</p>
     * platforms: android
     * @type int
     * @since 1.0
     */
    SOFT_INPUT_STATE_HIDDEN:null,

    /**
     * <p>Use OS default behavior for keyboard focus.</p>
     * platforms: android
     * @type int
     * @since 1.0
     */
    SOFT_INPUT_STATE_UNSPECIFIED:null,

    /**
     * <p>Attempt to show the soft keyboard when control receives keyboard focus.</p>
     * platforms: android
     * @type int
     * @since 1.0
     */
    SOFT_INPUT_STATE_VISIBLE:null,

    /**
     * <p>Use Android default soft keyboard handling. Same as not specifying a value.</p>
     * platforms: android
     * @type int
     * @since 1.0
     */
    SOFT_KEYBOARD_DEFAULT_ON_FOCUS:null,

    /**
     * <p>Request hide soft keyboard on focus. Note: OS can override request.</p>
     * platforms: android
     * @type int
     * @since 1.0
     */
    SOFT_KEYBOARD_HIDE_ON_FOCUS:null,

    /**
     * <p>Request show soft keyboard on focus. Note: OS can override request.</p>
     * platforms: android
     * @type int
     * @since 1.0
     */
    SOFT_KEYBOARD_SHOW_ON_FOCUS:null,

    /**
     * <p>Display Switch as an Android Checkbox</p>
     * platforms: android
     * @type int
     * @since 1.0
     */
    SWITCH_STYLE_CHECKBOX:null,

    /**
     * <p>Display Switch as an Android Toggle Button (default)</p>
     * platforms: android
     * @type int
     * @since 1.0
     */
    SWITCH_STYLE_TOGGLEBUTTON:null,


    /**
     * add an event listener for the instance to receive view triggered events
     * platforms: android
     * @param {string} name name of the event
     * @param {function} callback callback function to invoke when the event is fired
     * @returns void
     * @since 1.0
     */
    addEventListener:function(name, callback) {
    },

    /**
     * fire a synthesized event to the views listener
     * platforms: android
     * @param {string} name name of the event
     * @param {object} event event object
     * @returns void
     * @since 1.0
     */
    fireEvent:function(name, event) {
    },

    /**
     * <p>request that the soft keyboard hide. Note: It is not currently possible in the native Android API to detect that the keyboard is already visible. Note: It is not possible to globally show the keyboard at this point.</p>
     * platforms: android
     * @returns void
     * @since 1.0
     */
    hideSoftKeyboard:function() {
    },

    /**
     * <p>open Android native preferences UI activity. You need to place your preferences.xml file in the platform/android/res/xml/ folder of your project. Documentation on the file format may be found in the Android documentation http://developer.android.com/resources/samples/ApiDemos/res/xml/preferences.html</p>
     * platforms: android
     * @returns void
     * @since 1.0
     */
    openPreferences:function() {
    },

    /**
     * remove a previously added event listener
     * platforms: android
     * @param {string} name name of the event
     * @param {function} callback callback function passed in addEventListener
     * @returns void
     * @since 1.0
     */
    removeEventListener:function(name, callback) {
    }
}

/**
 * platforms: android, iphone, ipad
 * @namespace <p>The Animation object is used for specifying lower-level animation properties and more low-level control of events during an animation. The Animation is created by the method {@link Titanium.UI.createAnimation}.</p>
 * @since 0.9
 * 
 * @example Animation applied to a view
 * <p>Create a simple animation and apply it to the view.  In this example, the view will animate from red to black to orange over 2 seconds.</p>
<pre><code>var view = Titanium.UI.createView({
   backgroundColor:'red'
});
var animation = Titanium.UI.createAnimation();
animation.backgroundColor = 'black';
animation.duration = 1000;
animation.addEventListener('complete',function()
{
   animation.removeEventListener('complete',this);
   animation.backgroundColor = 'orange';
   view.animate(animation);
});
view.animate(animation);
</code></pre>
 */
function Titanium_UI_Animation() {
}
Titanium_UI_Animation.prototype = {

    /**
     * <p>the property specifies if the animation should be replayed in reverse upon completion</p>
     * platforms: android, iphone, ipad
     * @type boolean
     * @since 0.9
     */
    autoreverse:null,

    /**
     * <p>value of the backgroundColor property to change during animation</p>
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.9
     */
    backgroundColor:null,

    /**
     * <p>value of the bottom property to change during animation</p>
     * platforms: android, iphone, ipad
     * @type float
     * @since 0.9
     */
    bottom:null,

    /**
     * <p>value of the center property to change during animation</p>
     * platforms: android, iphone, ipad
     * @type object
     * @since 0.9
     */
    center:null,

    /**
     * <p>value of the color property to change during animation</p>
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.9
     */
    color:null,

    /**
     * <p>the curve of the animation</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.9
     */
    curve:null,

    /**
     * <p>the duration of time in milliseconds before starting the animation</p>
     * platforms: android, iphone, ipad
     * @type float
     * @since 0.9
     */
    delay:null,

    /**
     * <p>the duration of time in milliseconds to perform the animation</p>
     * platforms: android, iphone, ipad
     * @type float
     * @since 0.9
     */
    duration:null,

    /**
     * <p>value of the height property to change during animation</p>
     * platforms: android, iphone, ipad
     * @type float
     * @since 0.9
     */
    height:null,

    /**
     * <p>value of the left property to change during animation</p>
     * platforms: android, iphone, ipad
     * @type float
     * @since 0.9
     */
    left:null,

    /**
     * <p>value of the opacity property to change during animation</p>
     * platforms: android, iphone, ipad
     * @type float
     * @since 0.9
     */
    opacity:null,

    /**
     * <p>value of the opaque property to change during animation</p>
     * platforms: android, iphone, ipad
     * @type boolean
     * @since 0.9
     */
    opaque:null,

    /**
     * <p>the number of times the animation should be performed</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.9
     */
    repeat:null,

    /**
     * <p>value of the right property to change during animation</p>
     * platforms: android, iphone, ipad
     * @type float
     * @since 0.9
     */
    right:null,

    /**
     * <p>value of the top property to change during animation</p>
     * platforms: android, iphone, ipad
     * @type float
     * @since 0.9
     */
    top:null,

    /**
     * <p>value of the transform property to change during animation</p>
     * platforms: android, iphone, ipad
     * @type object
     * @since 0.9
     */
    transform:null,

    /**
     * <p>during a transition animation, this is the constant to the type of transition to use</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.9
     */
    transition:null,

    /**
     * <p>value of the visible property to change during animation</p>
     * platforms: android, iphone, ipad
     * @type boolean
     * @since 0.9
     */
    visible:null,

    /**
     * <p>value of the width property to change during animation</p>
     * platforms: android, iphone, ipad
     * @type float
     * @since 0.9
     */
    width:null,

    /**
     * <p>value of the zIndex property to change during animation</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.9
     */
    zIndex:null,


    /**
     * add an event listener for the instance to receive view triggered events
     * platforms: android, iphone, ipad
     * @param {string} name name of the event
     * @param {function} callback callback function to invoke when the event is fired
     * @returns void
     * @since 0.9
     */
    addEventListener:function(name, callback) {
    },

    /**
     * fire a synthesized event to the views listener
     * platforms: android, iphone, ipad
     * @param {string} name name of the event
     * @param {object} event event object
     * @returns void
     * @since 0.9
     */
    fireEvent:function(name, event) {
    },

    /**
     * remove a previously added event listener
     * platforms: android, iphone, ipad
     * @param {string} name name of the event
     * @param {function} callback callback function passed in addEventListener
     * @returns void
     * @since 0.9
     */
    removeEventListener:function(name, callback) {
    }
}

/**
 * platforms: android, iphone, ipad
 * @namespace <p>A Button is created by the method {@link Titanium.UI.createButton}.</p>
 * @since 0.8
 * 
 * @example Simple Button Example
 * <pre><code>var button = Titanium.UI.createButton({
   title: 'Hello'
});
button.addEventListener('click',function(e)
{
   Titanium.API.info("You clicked the button");
});
</code></pre>
 */
Ti.UI.Button = {

    /**
     * a dictionary with properties x and y to indicate the anchor point value. anchor specifies the position by which animation should occur. center is 0.5, 0.5
     * platforms: android, iphone, ipad
     * @type object
     * @since 0.8
     */
    anchorPoint:null,

    /**
     * read-only object with x and y properties of where the view is during animation
     * platforms: android, iphone, ipad
     * @type object
     * @since 0.8
     */
    animatedCenterPoint:null,

    /**
     * the background color of the view
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    backgroundColor:null,

    /**
     * the disabled background color of the view. (Android)
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    backgroundDisabledColor:null,

    /**
     * the disabled background image url of the view. (Android)
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    backgroundDisabledImage:null,

    /**
     * the focused background color of the view. focusable must be true for normal views. (Android)
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    backgroundFocusedColor:null,

    /**
     * the focused background image url of the view. focusable must be true for normal views. (Android)
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    backgroundFocusedImage:null,

    /**
     * a background gradient for the view with the properties: type,startPoint,endPoint,startRadius,endRadius,backfillStart,backfillEnd,colors.
     * platforms: android, iphone, ipad
     * @type object
     * @since 0.8
     */
    backgroundGradient:null,

    /**
     * the background image url of the view
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    backgroundImage:null,

    /**
     * End caps specify the portion of an image that should not be resized when an image is stretched. This technique is used to implement buttons and other resizable image-based interface elements. When a button with end caps is resized, the resizing occurs only in the middle of the button, in the region between the end caps. The end caps themselves keep their original size and appearance. This property specifies the size of the left end cap. The middle (stretchable) portion is assumed to be 1 pixel wide. The right end cap is therefore computed by adding the size of the left end cap and the middle portion together and then subtracting that value from the width of the image
     * platforms: android, iphone, ipad
     * @type float
     * @since 0.8
     */
    backgroundLeftCap:null,

    /**
     * the selected background color of the view. focusable must be true for normal views. (Android)
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    backgroundSelectedColor:null,

    /**
     * the selected background image url of the view. focusable must be true for normal views. (Android)
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    backgroundSelectedImage:null,

    /**
     * End caps specify the portion of an image that should not be resized when an image is stretched. This technique is used to implement buttons and other resizable image-based interface elements. When a button with end caps is resized, the resizing occurs only in the middle of the button, in the region between the end caps. The end caps themselves keep their original size and appearance. This property specifies the size of the top end cap. The middle (stretchable) portion is assumed to be 1 pixel wide. The bottom end cap is therefore computed by adding the size of the top end cap and the middle portion together and then subtracting that value from the height of the image
     * platforms: android, iphone, ipad
     * @type float
     * @since 0.8
     */
    backgroundTopCap:null,

    /**
     * the border color of the view
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    borderColor:null,

    /**
     * the border radius of the view
     * platforms: android, iphone, ipad
     * @type float
     * @since 0.8
     */
    borderRadius:null,

    /**
     * the border width of the view
     * platforms: android, iphone, ipad
     * @type float
     * @since 0.8
     */
    borderWidth:null,

    /**
     * property for the view bottom position. This position is relative to the view's parent. Can be either a float value or a dimension string ie 'auto' (default).
     * platforms: android, iphone, ipad
     * @type float,string
     * @since 0.8
     */
    bottom:null,

    /**
     * a dictionary with properties x and y to indicate the center of the views position relative to the parent view
     * platforms: android, iphone, ipad
     * @type object
     * @since 0.8
     */
    center:null,

    /**
     * <p>the foreground color of the button text</p>
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    color:null,

    /**
     * <p>boolean that indicates if the button is enabled or not</p>
     * platforms: android, iphone, ipad
     * @type boolean
     * @since 0.8
     */
    enabled:null,

    /**
     * Set true if you want a view to be focusable when navigating with the trackball or D-Pad. Default: false. (Android Only)
     * platforms: android
     * @type boolean
     * @since 0.8
     */
    focusable:null,

    /**
     * <p>the font properties of the button</p>
     * platforms: android, iphone, ipad
     * @type object
     * @since 0.8
     */
    font:null,

    /**
     * the font family
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    "font-family":null,

    /**
     * the font size
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    "font-size":null,

    /**
     * the font style, either normal or italics
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    "font-style":null,

    /**
     * the font weight, either normal or bold
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    "font-weight":null,

    /**
     * property for the view height. Can be either a float value or a dimension string ie 'auto' (default).
     * platforms: android, iphone, ipad
     * @type float,string
     * @since 0.8
     */
    height:null,

    /**
     * <p>the image to display on the button to the left of the title</p>
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    image:null,

    /**
     * property for the view left position. This position is relative to the view's parent. Can be either a float value or a dimension string ie 'auto' (default).
     * platforms: android, iphone, ipad
     * @type float,string
     * @since 0.8
     */
    left:null,

    /**
     * the opacity from 0.0-1.0
     * platforms: android, iphone, ipad
     * @type float
     * @since 0.8
     */
    opacity:null,

    /**
     * property for the view right position. This position is relative to the view's parent. Can be either a float value or a dimension string ie 'auto' (default).
     * platforms: android, iphone, ipad
     * @type float,string
     * @since 0.8
     */
    right:null,

    /**
     * <p>the selected color of the button text when the button is in the selected state</p>
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    selectedColor:null,

    /**
     * the size of the view as a dictionary of width and height properties
     * platforms: android, iphone, ipad
     * @type object
     * @since 0.8
     */
    size:null,

    /**
     * One of Titanium.UI.Android.SOFT_KEYBOARD_DEFAULT_ON_FOCUS, Titanium.UI.Android.SOFT_KEYBOARD_HIDE_ON_FOCUS, or Titanium.UI.Android.SOFT_KEYBOARD_SHOW_ON_FOCUS. (Android only)
     * platforms: android
     * @type int
     * @since 0.8
     */
    softKeyboardOnFocus:null,

    /**
     * <p>style constant for the type of button</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.8
     */
    style:null,

    /**
     * <p>button title</p>
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    title:null,

    /**
     * <p>the key in the locale file to use for the title property</p>
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    titleid:null,

    /**
     * property for the view top position. This position is relative to the view's parent. Can be either a float value or a dimension string ie 'auto' (default).
     * platforms: android, iphone, ipad
     * @type float,string
     * @since 0.8
     */
    top:null,

    /**
     * a boolean indicating if the view should receive touch events (true, default) or forward them to peers (false)
     * platforms: android, iphone, ipad
     * @type boolean
     * @since 0.8
     */
    touchEnabled:null,

    /**
     * the transformation matrix to apply to the view
     * platforms: android, iphone, ipad
     * @type object
     * @since 0.8
     */
    transform:null,

    /**
     * a boolean of the visibility of the view
     * platforms: android, iphone, ipad
     * @type boolean
     * @since 0.8
     */
    visible:null,

    /**
     * property for the view width. Can be either a float value or a dimension string ie 'auto' (default).
     * platforms: android, iphone, ipad
     * @type float,string
     * @since 0.8
     */
    width:null,

    /**
     * the z index position relative to other sibling views
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.8
     */
    zIndex:null,


    /**
     * add a child to the view hierarchy
     * platforms: android, iphone, ipad
     * @param {object} view the view to add to this views hiearchy
     * @returns void
     * @since 0.8
     */
    add:function(view) {
    },

    /**
     * add an event listener for the instance to receive view triggered events
     * platforms: android, iphone, ipad
     * @param {string} name name of the event
     * @param {function} callback callback function to invoke when the event is fired
     * @returns void
     * @since 0.8
     */
    addEventListener:function(name, callback) {
    },

    /**
     * animate the view
     * platforms: android, iphone, ipad
     * @param {object} obj either a dictionary of animation properties or an Animation object
     * @param {function} callback function to be invoked upon completion of the animation
     * @returns void
     * @since 0.8
     */
    animate:function(obj, callback) {
    },

    /**
     * fire a synthesized event to the views listener
     * platforms: android, iphone, ipad
     * @param {string} name name of the event
     * @param {object} event event object
     * @returns void
     * @since 0.8
     */
    fireEvent:function(name, event) {
    },

    /**
     * hide the view
     * platforms: android, iphone, ipad
     * @returns void
     * @since 0.8
     */
    hide:function() {
    },

    /**
     * remove a previously add view from the view hiearchy
     * platforms: android, iphone, ipad
     * @param {object} view the view to remove from this views hiearchy
     * @returns void
     * @since 0.8
     */
    remove:function(view) {
    },

    /**
     * remove a previously added event listener
     * platforms: android, iphone, ipad
     * @param {string} name name of the event
     * @param {function} callback callback function passed in addEventListener
     * @returns void
     * @since 0.8
     */
    removeEventListener:function(name, callback) {
    },

    /**
     * make the view visible
     * platforms: android, iphone, ipad
     * @returns void
     * @since 0.8
     */
    show:function() {
    },

    /**
     * return a Blob image of the rendered view
     * platforms: android, iphone, ipad
     * @param {function} f function to be invoked upon completion. if non-null, this method will be performed asynchronously. if null, it will be performed immediately
     * @since 0.8
     */
    toImage:function(f) {
    }
}

/**
 * Notes: <p>For iPhone, the style constants are available in the constants defined in {@link Titanium.UI.iPhone.SystemButtonStyle}.</p>
 * platforms: iphone, ipad
 * @namespace <p>A Button Bar is created by the method {@link Titanium.UI.createButtonBar}.</p>
 * @since 0.8
 * 
 * @example Simple 3 button button bar
 * <pre><code>var bb1 = Titanium.UI.createButtonBar({
    labels:['One', 'Two', 'Three'],
    backgroundColor:'#336699',
    top:50,
    style:Titanium.UI.iPhone.SystemButtonStyle.BAR,
    height:25,
    width:200
});
win.add(bb1);
</code></pre>
 */
Ti.UI.ButtonBar = {

    /**
     * a dictionary with properties x and y to indicate the anchor point value. anchor specifies the position by which animation should occur. center is 0.5, 0.5
     * platforms: iphone, ipad
     * @type object
     * @since 0.8
     */
    anchorPoint:null,

    /**
     * read-only object with x and y properties of where the view is during animation
     * platforms: iphone, ipad
     * @type object
     * @since 0.8
     */
    animatedCenterPoint:null,

    /**
     * the background color of the view
     * platforms: iphone, ipad
     * @type string
     * @since 0.8
     */
    backgroundColor:null,

    /**
     * the disabled background color of the view. (Android)
     * platforms: iphone, ipad
     * @type string
     * @since 0.8
     */
    backgroundDisabledColor:null,

    /**
     * the disabled background image url of the view. (Android)
     * platforms: iphone, ipad
     * @type string
     * @since 0.8
     */
    backgroundDisabledImage:null,

    /**
     * the focused background color of the view. focusable must be true for normal views. (Android)
     * platforms: iphone, ipad
     * @type string
     * @since 0.8
     */
    backgroundFocusedColor:null,

    /**
     * the focused background image url of the view. focusable must be true for normal views. (Android)
     * platforms: iphone, ipad
     * @type string
     * @since 0.8
     */
    backgroundFocusedImage:null,

    /**
     * a background gradient for the view with the properties: type,startPoint,endPoint,startRadius,endRadius,backfillStart,backfillEnd,colors.
     * platforms: iphone, ipad
     * @type object
     * @since 0.8
     */
    backgroundGradient:null,

    /**
     * the background image url of the view
     * platforms: iphone, ipad
     * @type string
     * @since 0.8
     */
    backgroundImage:null,

    /**
     * End caps specify the portion of an image that should not be resized when an image is stretched. This technique is used to implement buttons and other resizable image-based interface elements. When a button with end caps is resized, the resizing occurs only in the middle of the button, in the region between the end caps. The end caps themselves keep their original size and appearance. This property specifies the size of the left end cap. The middle (stretchable) portion is assumed to be 1 pixel wide. The right end cap is therefore computed by adding the size of the left end cap and the middle portion together and then subtracting that value from the width of the image
     * platforms: iphone, ipad
     * @type float
     * @since 0.8
     */
    backgroundLeftCap:null,

    /**
     * the selected background color of the view. focusable must be true for normal views. (Android)
     * platforms: iphone, ipad
     * @type string
     * @since 0.8
     */
    backgroundSelectedColor:null,

    /**
     * the selected background image url of the view. focusable must be true for normal views. (Android)
     * platforms: iphone, ipad
     * @type string
     * @since 0.8
     */
    backgroundSelectedImage:null,

    /**
     * End caps specify the portion of an image that should not be resized when an image is stretched. This technique is used to implement buttons and other resizable image-based interface elements. When a button with end caps is resized, the resizing occurs only in the middle of the button, in the region between the end caps. The end caps themselves keep their original size and appearance. This property specifies the size of the top end cap. The middle (stretchable) portion is assumed to be 1 pixel wide. The bottom end cap is therefore computed by adding the size of the top end cap and the middle portion together and then subtracting that value from the height of the image
     * platforms: iphone, ipad
     * @type float
     * @since 0.8
     */
    backgroundTopCap:null,

    /**
     * the border color of the view
     * platforms: iphone, ipad
     * @type string
     * @since 0.8
     */
    borderColor:null,

    /**
     * the border radius of the view
     * platforms: iphone, ipad
     * @type float
     * @since 0.8
     */
    borderRadius:null,

    /**
     * the border width of the view
     * platforms: iphone, ipad
     * @type float
     * @since 0.8
     */
    borderWidth:null,

    /**
     * property for the view bottom position. This position is relative to the view's parent. Can be either a float value or a dimension string ie 'auto' (default).
     * platforms: iphone, ipad
     * @type float,string
     * @since 0.8
     */
    bottom:null,

    /**
     * a dictionary with properties x and y to indicate the center of the views position relative to the parent view
     * platforms: iphone, ipad
     * @type object
     * @since 0.8
     */
    center:null,

    /**
     * the font family
     * platforms: iphone, ipad
     * @type string
     * @since 0.8
     */
    "font-family":null,

    /**
     * the font size
     * platforms: iphone, ipad
     * @type string
     * @since 0.8
     */
    "font-size":null,

    /**
     * the font style, either normal or italics
     * platforms: iphone, ipad
     * @type string
     * @since 0.8
     */
    "font-style":null,

    /**
     * the font weight, either normal or bold
     * platforms: iphone, ipad
     * @type string
     * @since 0.8
     */
    "font-weight":null,

    /**
     * property for the view height. Can be either a float value or a dimension string ie 'auto' (default).
     * platforms: iphone, ipad
     * @type float,string
     * @since 0.8
     */
    height:null,

    /**
     * <p>the selected index</p>
     * platforms: iphone, ipad
     * @type int
     * @since 0.8
     */
    index:null,

    /**
     * <p>the array of labels for the button bar. each object should have the properties <tt>title</tt>, <tt>image</tt>, <tt>width</tt> and <tt>enabled</tt>.</p>
     * platforms: iphone, ipad
     * @type array
     * @since 0.8
     */
    labels:null,

    /**
     * property for the view left position. This position is relative to the view's parent. Can be either a float value or a dimension string ie 'auto' (default).
     * platforms: iphone, ipad
     * @type float,string
     * @since 0.8
     */
    left:null,

    /**
     * the opacity from 0.0-1.0
     * platforms: iphone, ipad
     * @type float
     * @since 0.8
     */
    opacity:null,

    /**
     * property for the view right position. This position is relative to the view's parent. Can be either a float value or a dimension string ie 'auto' (default).
     * platforms: iphone, ipad
     * @type float,string
     * @since 0.8
     */
    right:null,

    /**
     * the size of the view as a dictionary of width and height properties
     * platforms: iphone, ipad
     * @type object
     * @since 0.8
     */
    size:null,

    /**
     * <p>the style of the button bar</p>
     * platforms: iphone, ipad
     * @type int
     * @since 0.8
     */
    style:null,

    /**
     * property for the view top position. This position is relative to the view's parent. Can be either a float value or a dimension string ie 'auto' (default).
     * platforms: iphone, ipad
     * @type float,string
     * @since 0.8
     */
    top:null,

    /**
     * a boolean indicating if the view should receive touch events (true, default) or forward them to peers (false)
     * platforms: iphone, ipad
     * @type boolean
     * @since 0.8
     */
    touchEnabled:null,

    /**
     * the transformation matrix to apply to the view
     * platforms: iphone, ipad
     * @type object
     * @since 0.8
     */
    transform:null,

    /**
     * a boolean of the visibility of the view
     * platforms: iphone, ipad
     * @type boolean
     * @since 0.8
     */
    visible:null,

    /**
     * property for the view width. Can be either a float value or a dimension string ie 'auto' (default).
     * platforms: iphone, ipad
     * @type float,string
     * @since 0.8
     */
    width:null,

    /**
     * the z index position relative to other sibling views
     * platforms: iphone, ipad
     * @type int
     * @since 0.8
     */
    zIndex:null,


    /**
     * add a child to the view hierarchy
     * platforms: iphone, ipad
     * @param {object} view the view to add to this views hiearchy
     * @returns void
     * @since 0.8
     */
    add:function(view) {
    },

    /**
     * add an event listener for the instance to receive view triggered events
     * platforms: iphone, ipad
     * @param {string} name name of the event
     * @param {function} callback callback function to invoke when the event is fired
     * @returns void
     * @since 0.8
     */
    addEventListener:function(name, callback) {
    },

    /**
     * animate the view
     * platforms: iphone, ipad
     * @param {object} obj either a dictionary of animation properties or an Animation object
     * @param {function} callback function to be invoked upon completion of the animation
     * @returns void
     * @since 0.8
     */
    animate:function(obj, callback) {
    },

    /**
     * fire a synthesized event to the views listener
     * platforms: iphone, ipad
     * @param {string} name name of the event
     * @param {object} event event object
     * @returns void
     * @since 0.8
     */
    fireEvent:function(name, event) {
    },

    /**
     * hide the view
     * platforms: iphone, ipad
     * @returns void
     * @since 0.8
     */
    hide:function() {
    },

    /**
     * remove a previously add view from the view hiearchy
     * platforms: iphone, ipad
     * @param {object} view the view to remove from this views hiearchy
     * @returns void
     * @since 0.8
     */
    remove:function(view) {
    },

    /**
     * remove a previously added event listener
     * platforms: iphone, ipad
     * @param {string} name name of the event
     * @param {function} callback callback function passed in addEventListener
     * @returns void
     * @since 0.8
     */
    removeEventListener:function(name, callback) {
    },

    /**
     * make the view visible
     * platforms: iphone, ipad
     * @returns void
     * @since 0.8
     */
    show:function() {
    },

    /**
     * return a Blob image of the rendered view
     * platforms: iphone, ipad
     * @param {function} f function to be invoked upon completion. if non-null, this method will be performed asynchronously. if null, it will be performed immediately
     * @since 0.8
     */
    toImage:function(f) {
    }
}

/**
 * platforms: iphone, android, ipad
 * @namespace <p>A module used for accessing clipboard data.</p>
 * @since 1.5
 * 
 * @example Copying text to the clipboard
 * <pre><code>copyButton.addEventListener('click', function() {
    Ti.UI.Clipboard.setText(data.url);
});
</code></pre>
 * 
 * @example Pasting text from the clipboard
 * <pre><code>if (Ti.UI.Clipboard.hasText()) {
    doSomethingWith(Ti.UI.Clipboard.getText());
} else {
    alert('Hey there was no text.');
}
</code></pre>
 * 
 * @example Clipboard data types
 * <p>The <em>Text() functions are equivalent to calling </em>Data() with 'text' or 'text/plain' types, and work with plain Unicode strings.</p>
<p>On Android, only plain text is supported; other MIME types will be ignored.</p>
<p>On iOS, images will be returned as a {@link Titanium.Blob}; the special type 'image' or an explicit MIME type may be specified. URLs can be fetched with the special 'URL' or 'text/uri-list' types, and will return strings. Other data types may or may not be correctly mapped to clipboard types by the system, and will be retrieved as binary data in a {@link Titanium.Blob}.</p>
 */
Ti.UI.Clipboard = {


    /**
     * add an event listener for the instance to receive view triggered events
     * platforms: iphone, android, ipad
     * @param {string} name name of the event
     * @param {function} callback callback function to invoke when the event is fired
     * @returns void
     * @since 1.5
     */
    addEventListener:function(name, callback) {
    },

    /**
     * <p>Clear data of the given mime-type from the clipboard. If no mime-type is given, clear all data from the clipboard.</p>
     * platforms: iphone, android, ipad
     * @param {string} type (optional) The mime-type of the data to clear.
     * @returns void
     * @since 1.5
     */
    clearData:function(type) {
    },

    /**
     * <p>Clear the text portion of the clipboard.</p>
     * platforms: iphone, android, ipad
     * @returns void
     * @since 1.5
     */
    clearText:function() {
    },

    /**
     * fire a synthesized event to the views listener
     * platforms: iphone, android, ipad
     * @param {string} name name of the event
     * @param {object} event event object
     * @returns void
     * @since 1.5
     */
    fireEvent:function(name, event) {
    },

    /**
     * <p>Get the data on the clipboard from the portion which contains data of the given mime-type.</p>
     * platforms: iphone, android, ipad
     * @param {string} type The mime-type of the data to get.
     * @returns void
     * @since 1.5
     */
    getData:function(type) {
    },

    /**
     * <p>Get the current text on the clipboard.</p>
     * platforms: iphone, android, ipad
     * @returns void
     * @since 1.5
     */
    getText:function() {
    },

    /**
     * <p>Return true if there is any content of the given mime-type on the clipboard.</p>
     * platforms: iphone, android, ipad
     * @param {string} type (optional) The mime-type of the data to check.
     * @returns void
     * @since 1.5
     */
    hasData:function(type) {
    },

    /**
     * <p>Return true if there is any content in the text portion of the clipboard.</p>
     * platforms: iphone, android, ipad
     * @returns void
     * @since 1.5
     */
    hasText:function() {
    },

    /**
     * remove a previously added event listener
     * platforms: iphone, android, ipad
     * @param {string} name name of the event
     * @param {function} callback callback function passed in addEventListener
     * @returns void
     * @since 1.5
     */
    removeEventListener:function(name, callback) {
    },

    /**
     * <p>Set the data on the clipboard given a mime-type and the new data. This method will set data on the appropriate portion of the clipboard for the given mime-type.</p>
     * platforms: iphone, android, ipad
     * @param {string} type The mime-type of the data to set.
     * @param {object} data The new clipboard text.
     * @returns void
     * @since 1.5
     */
    setData:function(type, data) {
    },

    /**
     * <p>Set the text on the clipboard. This will overwrite the current contents of the clipboard.</p>
     * platforms: iphone, android, ipad
     * @param {string} text The new clipboard text. If the text is an empty string
     * @returns void
     * @since 1.5
     */
    setText:function(text) {
    }
}

/**
 * platforms: iphone, ipad
 * @namespace <p>The Cover Flow view is container for showing  animated, three dimensional images in a nice UI. The Cover Flow view is created by the method {@link Titanium.UI.createCoverFlowView}.</p>
 * @since 0.8
 * 
 * @example Simple 3 image cover flow example
 * <p>Create a rounded view.</p>
<pre><code>var view = Titanium.UI.createCoverFlowView({
    images:['a.png','b.png','c.png'],
    backgroundColor:'#000'
});
window.add(view);
</code></pre>
 */
Ti.UI.CoverFlowView = {

    /**
     * a dictionary with properties x and y to indicate the anchor point value. anchor specifies the position by which animation should occur. center is 0.5, 0.5
     * platforms: iphone, ipad
     * @type object
     * @since 0.8
     */
    anchorPoint:null,

    /**
     * read-only object with x and y properties of where the view is during animation
     * platforms: iphone, ipad
     * @type object
     * @since 0.8
     */
    animatedCenterPoint:null,

    /**
     * the background color of the view
     * platforms: iphone, ipad
     * @type string
     * @since 0.8
     */
    backgroundColor:null,

    /**
     * the disabled background color of the view. (Android)
     * platforms: iphone, ipad
     * @type string
     * @since 0.8
     */
    backgroundDisabledColor:null,

    /**
     * the disabled background image url of the view. (Android)
     * platforms: iphone, ipad
     * @type string
     * @since 0.8
     */
    backgroundDisabledImage:null,

    /**
     * the focused background color of the view. focusable must be true for normal views. (Android)
     * platforms: iphone, ipad
     * @type string
     * @since 0.8
     */
    backgroundFocusedColor:null,

    /**
     * the focused background image url of the view. focusable must be true for normal views. (Android)
     * platforms: iphone, ipad
     * @type string
     * @since 0.8
     */
    backgroundFocusedImage:null,

    /**
     * a background gradient for the view with the properties: type,startPoint,endPoint,startRadius,endRadius,backfillStart,backfillEnd,colors.
     * platforms: iphone, ipad
     * @type object
     * @since 0.8
     */
    backgroundGradient:null,

    /**
     * the background image url of the view
     * platforms: iphone, ipad
     * @type string
     * @since 0.8
     */
    backgroundImage:null,

    /**
     * End caps specify the portion of an image that should not be resized when an image is stretched. This technique is used to implement buttons and other resizable image-based interface elements. When a button with end caps is resized, the resizing occurs only in the middle of the button, in the region between the end caps. The end caps themselves keep their original size and appearance. This property specifies the size of the left end cap. The middle (stretchable) portion is assumed to be 1 pixel wide. The right end cap is therefore computed by adding the size of the left end cap and the middle portion together and then subtracting that value from the width of the image
     * platforms: iphone, ipad
     * @type float
     * @since 0.8
     */
    backgroundLeftCap:null,

    /**
     * the selected background color of the view. focusable must be true for normal views. (Android)
     * platforms: iphone, ipad
     * @type string
     * @since 0.8
     */
    backgroundSelectedColor:null,

    /**
     * the selected background image url of the view. focusable must be true for normal views. (Android)
     * platforms: iphone, ipad
     * @type string
     * @since 0.8
     */
    backgroundSelectedImage:null,

    /**
     * End caps specify the portion of an image that should not be resized when an image is stretched. This technique is used to implement buttons and other resizable image-based interface elements. When a button with end caps is resized, the resizing occurs only in the middle of the button, in the region between the end caps. The end caps themselves keep their original size and appearance. This property specifies the size of the top end cap. The middle (stretchable) portion is assumed to be 1 pixel wide. The bottom end cap is therefore computed by adding the size of the top end cap and the middle portion together and then subtracting that value from the height of the image
     * platforms: iphone, ipad
     * @type float
     * @since 0.8
     */
    backgroundTopCap:null,

    /**
     * the border color of the view
     * platforms: iphone, ipad
     * @type string
     * @since 0.8
     */
    borderColor:null,

    /**
     * the border radius of the view
     * platforms: iphone, ipad
     * @type float
     * @since 0.8
     */
    borderRadius:null,

    /**
     * the border width of the view
     * platforms: iphone, ipad
     * @type float
     * @since 0.8
     */
    borderWidth:null,

    /**
     * property for the view bottom position. This position is relative to the view's parent. Can be either a float value or a dimension string ie 'auto' (default).
     * platforms: iphone, ipad
     * @type float,string
     * @since 0.8
     */
    bottom:null,

    /**
     * a dictionary with properties x and y to indicate the center of the views position relative to the parent view
     * platforms: iphone, ipad
     * @type object
     * @since 0.8
     */
    center:null,

    /**
     * the font family
     * platforms: iphone, ipad
     * @type string
     * @since 0.8
     */
    "font-family":null,

    /**
     * the font size
     * platforms: iphone, ipad
     * @type string
     * @since 0.8
     */
    "font-size":null,

    /**
     * the font style, either normal or italics
     * platforms: iphone, ipad
     * @type string
     * @since 0.8
     */
    "font-style":null,

    /**
     * the font weight, either normal or bold
     * platforms: iphone, ipad
     * @type string
     * @since 0.8
     */
    "font-weight":null,

    /**
     * property for the view height. Can be either a float value or a dimension string ie 'auto' (default).
     * platforms: iphone, ipad
     * @type float,string
     * @since 0.8
     */
    height:null,

    /**
     * <p>array of images to display in the view</p>
     * platforms: iphone, ipad
     * @type array
     * @since 0.8
     */
    images:null,

    /**
     * property for the view left position. This position is relative to the view's parent. Can be either a float value or a dimension string ie 'auto' (default).
     * platforms: iphone, ipad
     * @type float,string
     * @since 0.8
     */
    left:null,

    /**
     * the opacity from 0.0-1.0
     * platforms: iphone, ipad
     * @type float
     * @since 0.8
     */
    opacity:null,

    /**
     * property for the view right position. This position is relative to the view's parent. Can be either a float value or a dimension string ie 'auto' (default).
     * platforms: iphone, ipad
     * @type float,string
     * @since 0.8
     */
    right:null,

    /**
     * <p>index to make selected</p>
     * platforms: iphone, ipad
     * @type int
     * @since 0.8
     */
    selected:null,

    /**
     * the size of the view as a dictionary of width and height properties
     * platforms: iphone, ipad
     * @type object
     * @since 0.8
     */
    size:null,

    /**
     * property for the view top position. This position is relative to the view's parent. Can be either a float value or a dimension string ie 'auto' (default).
     * platforms: iphone, ipad
     * @type float,string
     * @since 0.8
     */
    top:null,

    /**
     * a boolean indicating if the view should receive touch events (true, default) or forward them to peers (false)
     * platforms: iphone, ipad
     * @type boolean
     * @since 0.8
     */
    touchEnabled:null,

    /**
     * the transformation matrix to apply to the view
     * platforms: iphone, ipad
     * @type object
     * @since 0.8
     */
    transform:null,

    /**
     * a boolean of the visibility of the view
     * platforms: iphone, ipad
     * @type boolean
     * @since 0.8
     */
    visible:null,

    /**
     * property for the view width. Can be either a float value or a dimension string ie 'auto' (default).
     * platforms: iphone, ipad
     * @type float,string
     * @since 0.8
     */
    width:null,

    /**
     * the z index position relative to other sibling views
     * platforms: iphone, ipad
     * @type int
     * @since 0.8
     */
    zIndex:null,


    /**
     * add a child to the view hierarchy
     * platforms: iphone, ipad
     * @param {object} view the view to add to this views hiearchy
     * @returns void
     * @since 0.8
     */
    add:function(view) {
    },

    /**
     * add an event listener for the instance to receive view triggered events
     * platforms: iphone, ipad
     * @param {string} name name of the event
     * @param {function} callback callback function to invoke when the event is fired
     * @returns void
     * @since 0.8
     */
    addEventListener:function(name, callback) {
    },

    /**
     * animate the view
     * platforms: iphone, ipad
     * @param {object} obj either a dictionary of animation properties or an Animation object
     * @param {function} callback function to be invoked upon completion of the animation
     * @returns void
     * @since 0.8
     */
    animate:function(obj, callback) {
    },

    /**
     * fire a synthesized event to the views listener
     * platforms: iphone, ipad
     * @param {string} name name of the event
     * @param {object} event event object
     * @returns void
     * @since 0.8
     */
    fireEvent:function(name, event) {
    },

    /**
     * hide the view
     * platforms: iphone, ipad
     * @returns void
     * @since 0.8
     */
    hide:function() {
    },

    /**
     * remove a previously add view from the view hiearchy
     * platforms: iphone, ipad
     * @param {object} view the view to remove from this views hiearchy
     * @returns void
     * @since 0.8
     */
    remove:function(view) {
    },

    /**
     * remove a previously added event listener
     * platforms: iphone, ipad
     * @param {string} name name of the event
     * @param {function} callback callback function passed in addEventListener
     * @returns void
     * @since 0.8
     */
    removeEventListener:function(name, callback) {
    },

    /**
     * <p>change an image for a index</p>
     * platforms: iphone, ipad
     * @param {int} index index to change
     * @param {object} image the image to set the index to. May be a TiBlob, TiFile, URL, or dictionary with 'image' (may be any of TiBlob, TiFile, URL), 'width', 'height' keys.  'auto' is not allowed, only exact sizes (although a size may be omitted to keep the image at that size).  If passed as a TiFile or URL, will perform a check for '@2x' on Retina displays
     * @returns void
     * @since 0.8
     */
    setImage:function(index, image) {
    },

    /**
     * make the view visible
     * platforms: iphone, ipad
     * @returns void
     * @since 0.8
     */
    show:function() {
    },

    /**
     * return a Blob image of the rendered view
     * platforms: iphone, ipad
     * @param {function} f function to be invoked upon completion. if non-null, this method will be performed asynchronously. if null, it will be performed immediately
     * @since 0.8
     */
    toImage:function(f) {
    }
}

/**
 * platforms: iphone, ipad
 * @namespace <p>An item that represents a visual icon in the {@link Titanium.UI.DashboardView}. The Dashboard Item is created by the method {@link Titanium.UI.createDashboardItem}.</p>
 * @since 1.2
 */
function Titanium_UI_DashboardItem() {
}
Titanium_UI_DashboardItem.prototype = {

    /**
     * <p>the badge value or <tt>0</tt> to remove the badge</p>
     * platforms: iphone, ipad
     * @type int
     * @since 1.2
     */
    badge:null,

    /**
     * <p>a boolean to indicate if this item can be deleted when it edit mode</p>
     * platforms: iphone, ipad
     * @type boolean
     * @since 1.2
     */
    canDelete:null,

    /**
     * <p>the URL to the image</p>
     * platforms: iphone, ipad
     * @type string
     * @since 1.2
     */
    image:null,

    /**
     * <p>the URL to the image to display when the item is depressed (clicked)</p>
     * platforms: iphone, ipad
     * @type string
     * @since 1.2
     */
    selectedImage:null,


    /**
     * add an event listener for the instance to receive view triggered events
     * platforms: iphone, ipad
     * @param {string} name name of the event
     * @param {function} callback callback function to invoke when the event is fired
     * @returns void
     * @since 1.2
     */
    addEventListener:function(name, callback) {
    },

    /**
     * fire a synthesized event to the views listener
     * platforms: iphone, ipad
     * @param {string} name name of the event
     * @param {object} event event object
     * @returns void
     * @since 1.2
     */
    fireEvent:function(name, event) {
    },

    /**
     * remove a previously added event listener
     * platforms: iphone, ipad
     * @param {string} name name of the event
     * @param {function} callback callback function passed in addEventListener
     * @returns void
     * @since 1.2
     */
    removeEventListener:function(name, callback) {
    }
}

/**
 * platforms: iphone, ipad
 * @namespace <p>The Dashboard View provides a view that supports the ability to have Springboard-like view of icons which can be reordered by dragging and can contain multiple pages of icons in a scrollable view. The Dashboard View is created by the method {@link Titanium.UI.createDashboardView}.</p>
 * @since 1.2
 */
Ti.UI.DashboardView = {

    /**
     * a dictionary with properties x and y to indicate the anchor point value. anchor specifies the position by which animation should occur. center is 0.5, 0.5
     * platforms: iphone, ipad
     * @type object
     * @since 1.2
     */
    anchorPoint:null,

    /**
     * read-only object with x and y properties of where the view is during animation
     * platforms: iphone, ipad
     * @type object
     * @since 1.2
     */
    animatedCenterPoint:null,

    /**
     * the background color of the view
     * platforms: iphone, ipad
     * @type string
     * @since 1.2
     */
    backgroundColor:null,

    /**
     * the disabled background color of the view. (Android)
     * platforms: iphone, ipad
     * @type string
     * @since 1.2
     */
    backgroundDisabledColor:null,

    /**
     * the disabled background image url of the view. (Android)
     * platforms: iphone, ipad
     * @type string
     * @since 1.2
     */
    backgroundDisabledImage:null,

    /**
     * the focused background color of the view. focusable must be true for normal views. (Android)
     * platforms: iphone, ipad
     * @type string
     * @since 1.2
     */
    backgroundFocusedColor:null,

    /**
     * the focused background image url of the view. focusable must be true for normal views. (Android)
     * platforms: iphone, ipad
     * @type string
     * @since 1.2
     */
    backgroundFocusedImage:null,

    /**
     * a background gradient for the view with the properties: type,startPoint,endPoint,startRadius,endRadius,backfillStart,backfillEnd,colors.
     * platforms: iphone, ipad
     * @type object
     * @since 1.2
     */
    backgroundGradient:null,

    /**
     * the background image url of the view
     * platforms: iphone, ipad
     * @type string
     * @since 1.2
     */
    backgroundImage:null,

    /**
     * End caps specify the portion of an image that should not be resized when an image is stretched. This technique is used to implement buttons and other resizable image-based interface elements. When a button with end caps is resized, the resizing occurs only in the middle of the button, in the region between the end caps. The end caps themselves keep their original size and appearance. This property specifies the size of the left end cap. The middle (stretchable) portion is assumed to be 1 pixel wide. The right end cap is therefore computed by adding the size of the left end cap and the middle portion together and then subtracting that value from the width of the image
     * platforms: iphone, ipad
     * @type float
     * @since 1.2
     */
    backgroundLeftCap:null,

    /**
     * the selected background color of the view. focusable must be true for normal views. (Android)
     * platforms: iphone, ipad
     * @type string
     * @since 1.2
     */
    backgroundSelectedColor:null,

    /**
     * the selected background image url of the view. focusable must be true for normal views. (Android)
     * platforms: iphone, ipad
     * @type string
     * @since 1.2
     */
    backgroundSelectedImage:null,

    /**
     * End caps specify the portion of an image that should not be resized when an image is stretched. This technique is used to implement buttons and other resizable image-based interface elements. When a button with end caps is resized, the resizing occurs only in the middle of the button, in the region between the end caps. The end caps themselves keep their original size and appearance. This property specifies the size of the top end cap. The middle (stretchable) portion is assumed to be 1 pixel wide. The bottom end cap is therefore computed by adding the size of the top end cap and the middle portion together and then subtracting that value from the height of the image
     * platforms: iphone, ipad
     * @type float
     * @since 1.2
     */
    backgroundTopCap:null,

    /**
     * the border color of the view
     * platforms: iphone, ipad
     * @type string
     * @since 1.2
     */
    borderColor:null,

    /**
     * the border radius of the view
     * platforms: iphone, ipad
     * @type float
     * @since 1.2
     */
    borderRadius:null,

    /**
     * the border width of the view
     * platforms: iphone, ipad
     * @type float
     * @since 1.2
     */
    borderWidth:null,

    /**
     * property for the view bottom position. This position is relative to the view's parent. Can be either a float value or a dimension string ie 'auto' (default).
     * platforms: iphone, ipad
     * @type float,string
     * @since 1.2
     */
    bottom:null,

    /**
     * a dictionary with properties x and y to indicate the center of the views position relative to the parent view
     * platforms: iphone, ipad
     * @type object
     * @since 1.2
     */
    center:null,

    /**
     * <p>an array of {@link Titanium.UI.DashboardItem} objects to display in the view</p>
     * platforms: iphone, ipad
     * @type array
     * @since 1.2
     */
    data:null,

    /**
     * the font family
     * platforms: iphone, ipad
     * @type string
     * @since 1.2
     */
    "font-family":null,

    /**
     * the font size
     * platforms: iphone, ipad
     * @type string
     * @since 1.2
     */
    "font-size":null,

    /**
     * the font style, either normal or italics
     * platforms: iphone, ipad
     * @type string
     * @since 1.2
     */
    "font-style":null,

    /**
     * the font weight, either normal or bold
     * platforms: iphone, ipad
     * @type string
     * @since 1.2
     */
    "font-weight":null,

    /**
     * property for the view height. Can be either a float value or a dimension string ie 'auto' (default).
     * platforms: iphone, ipad
     * @type float,string
     * @since 1.2
     */
    height:null,

    /**
     * property for the view left position. This position is relative to the view's parent. Can be either a float value or a dimension string ie 'auto' (default).
     * platforms: iphone, ipad
     * @type float,string
     * @since 1.2
     */
    left:null,

    /**
     * the opacity from 0.0-1.0
     * platforms: iphone, ipad
     * @type float
     * @since 1.2
     */
    opacity:null,

    /**
     * property for the view right position. This position is relative to the view's parent. Can be either a float value or a dimension string ie 'auto' (default).
     * platforms: iphone, ipad
     * @type float,string
     * @since 1.2
     */
    right:null,

    /**
     * the size of the view as a dictionary of width and height properties
     * platforms: iphone, ipad
     * @type object
     * @since 1.2
     */
    size:null,

    /**
     * property for the view top position. This position is relative to the view's parent. Can be either a float value or a dimension string ie 'auto' (default).
     * platforms: iphone, ipad
     * @type float,string
     * @since 1.2
     */
    top:null,

    /**
     * a boolean indicating if the view should receive touch events (true, default) or forward them to peers (false)
     * platforms: iphone, ipad
     * @type boolean
     * @since 1.2
     */
    touchEnabled:null,

    /**
     * the transformation matrix to apply to the view
     * platforms: iphone, ipad
     * @type object
     * @since 1.2
     */
    transform:null,

    /**
     * a boolean of the visibility of the view
     * platforms: iphone, ipad
     * @type boolean
     * @since 1.2
     */
    visible:null,

    /**
     * property for the view width. Can be either a float value or a dimension string ie 'auto' (default).
     * platforms: iphone, ipad
     * @type float,string
     * @since 1.2
     */
    width:null,

    /**
     * <p>true (default) to wobble during edit, false to disable wobble effect</p>
     * platforms: iphone, ipad
     * @type boolean
     * @since 1.2
     */
    wobble:null,

    /**
     * the z index position relative to other sibling views
     * platforms: iphone, ipad
     * @type int
     * @since 1.2
     */
    zIndex:null,


    /**
     * add a child to the view hierarchy
     * platforms: iphone, ipad
     * @param {object} view the view to add to this views hiearchy
     * @returns void
     * @since 1.2
     */
    add:function(view) {
    },

    /**
     * add an event listener for the instance to receive view triggered events
     * platforms: iphone, ipad
     * @param {string} name name of the event
     * @param {function} callback callback function to invoke when the event is fired
     * @returns void
     * @since 1.2
     */
    addEventListener:function(name, callback) {
    },

    /**
     * animate the view
     * platforms: iphone, ipad
     * @param {object} obj either a dictionary of animation properties or an Animation object
     * @param {function} callback function to be invoked upon completion of the animation
     * @returns void
     * @since 1.2
     */
    animate:function(obj, callback) {
    },

    /**
     * fire a synthesized event to the views listener
     * platforms: iphone, ipad
     * @param {string} name name of the event
     * @param {object} event event object
     * @returns void
     * @since 1.2
     */
    fireEvent:function(name, event) {
    },

    /**
     * hide the view
     * platforms: iphone, ipad
     * @returns void
     * @since 1.2
     */
    hide:function() {
    },

    /**
     * remove a previously add view from the view hiearchy
     * platforms: iphone, ipad
     * @param {object} view the view to remove from this views hiearchy
     * @returns void
     * @since 1.2
     */
    remove:function(view) {
    },

    /**
     * remove a previously added event listener
     * platforms: iphone, ipad
     * @param {string} name name of the event
     * @param {function} callback callback function passed in addEventListener
     * @returns void
     * @since 1.2
     */
    removeEventListener:function(name, callback) {
    },

    /**
     * make the view visible
     * platforms: iphone, ipad
     * @returns void
     * @since 1.2
     */
    show:function() {
    },

    /**
     * <p>put the dashboard in edit mode</p>
     * platforms: iphone, ipad
     * @returns void
     * @since 1.2
     */
    startEditing:function() {
    },

    /**
     * <p>cancel editing</p>
     * platforms: iphone, ipad
     * @returns void
     * @since 1.2
     */
    stopEditing:function() {
    },

    /**
     * return a Blob image of the rendered view
     * platforms: iphone, ipad
     * @param {function} f function to be invoked upon completion. if non-null, this method will be performed asynchronously. if null, it will be performed immediately
     * @since 1.2
     */
    toImage:function(f) {
    }
}

/**
 * platforms: android, iphone, ipad
 * @namespace <p>The Email Dialog is created by {@link Titanium.UI.createEmailDialog} and allows you to send in application emails on behalf of the application user.</p>
 * @since 0.8
 * 
 * @example Simple Email Dialog with Attachment
 * <p>In this example, we send an email with a file attachment.</p>
<pre><code>var emailDialog = Titanium.UI.createEmailDialog()
emailDialog.subject = "Hello from Titanium";
emailDialog.toRecipients = ['foo@yahoo.com'];
emailDialog.messageBody = '<b>Appcelerator Titanium Rocks!</b>';
var f = Ti.Filesystem.getFile('cricket.wav');
emailDialog.addAttachment(f);
emailDialog.open();
</code></pre>
 */
function Titanium_UI_EmailDialog() {
}
Titanium_UI_EmailDialog.prototype = {

    /**
     * <p>constant for the CANCELLED status result</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.8
     */
    CANCELLED:null,

    /**
     * <p>constant for the FAILED status result</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.8
     */
    FAILED:null,

    /**
     * <p>constant for the SAVED status result</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.8
     */
    SAVED:null,

    /**
     * <p>constant for the SENT status result</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.8
     */
    SENT:null,

    /**
     * <p>the bar color of the email dialog window when opened</p>
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    barColor:null,

    /**
     * <p>array of email BCC: recipients</p>
     * platforms: android, iphone, ipad
     * @type array
     * @since 0.8
     */
    bccRecipients:null,

    /**
     * <p>array of email CC: recipients</p>
     * platforms: android, iphone, ipad
     * @type array
     * @since 0.8
     */
    ccRecipients:null,

    /**
     * <p>boolean to indicate whether the email messageBody should be sent as HTML content type. defaults to false. (Android note: you should not use html messages in 1.6: after that is okay.)</p>
     * platforms: android, iphone, ipad
     * @type boolean
     * @since 0.8
     */
    html:null,

    /**
     * <p>the email message body</p>
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    messageBody:null,

    /**
     * <p>the subject line for the email</p>
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    subject:null,

    /**
     * <p>array of email recipients</p>
     * platforms: android, iphone, ipad
     * @type array
     * @since 0.8
     */
    toRecipients:null,


    /**
     * <p>add an attachment to the email. the attachment can either be a Blob or File object. (Note: Android will only accept one attachment at this time.)</p>
     * platforms: android, iphone, ipad
     * @param {object} attachment attachment object as either a Blob or File object
     * @returns void
     * @since 0.8
     */
    addAttachment:function(attachment) {
    },

    /**
     * add an event listener for the instance to receive view triggered events
     * platforms: android, iphone, ipad
     * @param {string} name name of the event
     * @param {function} callback callback function to invoke when the event is fired
     * @returns void
     * @since 0.8
     */
    addEventListener:function(name, callback) {
    },

    /**
     * fire a synthesized event to the views listener
     * platforms: android, iphone, ipad
     * @param {string} name name of the event
     * @param {object} event event object
     * @returns void
     * @since 0.8
     */
    fireEvent:function(name, event) {
    },

    /**
     * <p>return whether or not sending email is supported</p>
     * platforms: android, iphone, ipad
     * @returns void
     * @since 0.8
     */
    isSupported:function() {
    },

    /**
     * <p>open the email dialog. the email dialog itself is a modal window</p>
     * platforms: android, iphone, ipad
     * @param {object} properties object of animation properties. pass <tt>animated</tt> property (as boolean) to indicate if the dialog should be animated on open.
     * @returns void
     * @since 0.8
     */
    open:function(properties) {
    },

    /**
     * remove a previously added event listener
     * platforms: android, iphone, ipad
     * @param {string} name name of the event
     * @param {function} callback callback function passed in addEventListener
     * @returns void
     * @since 0.8
     */
    removeEventListener:function(name, callback) {
    }
}

/**
 * Notes: <p>If you specify a <tt>width</tt> and/or <tt>height</tt> property on the image, the image will be scaled to fit into this space if the image is larger.</p>
 * platforms: android, iphone, ipad
 * @namespace <p>An Image View is used to display an image or a series of images in an animation. The Image View is created by the method {@link Titanium.UI.createImageView}.</p>
 * @since 0.9
 * 
 * @example Basic Image View
 * <p>In this example, we create a simple image view:</p>
<pre><code>var image = Titanium.UI.createImageView({url:'myimage.png'});
view.add(image);
</code></pre>
 */
Ti.UI.ImageView = {

    /**
     * a dictionary with properties x and y to indicate the anchor point value. anchor specifies the position by which animation should occur. center is 0.5, 0.5
     * platforms: android, iphone, ipad
     * @type object
     * @since 0.9
     */
    anchorPoint:null,

    /**
     * read-only object with x and y properties of where the view is during animation
     * platforms: android, iphone, ipad
     * @type object
     * @since 0.9
     */
    animatedCenterPoint:null,

    /**
     * <p>readonly boolean to indicate if the animation is animating</p>
     * platforms: android, iphone, ipad
     * @type boolean
     * @since 0.9
     */
    animating:null,

    /**
     * the background color of the view
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.9
     */
    backgroundColor:null,

    /**
     * the disabled background color of the view. (Android)
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.9
     */
    backgroundDisabledColor:null,

    /**
     * the disabled background image url of the view. (Android)
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.9
     */
    backgroundDisabledImage:null,

    /**
     * the focused background color of the view. focusable must be true for normal views. (Android)
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.9
     */
    backgroundFocusedColor:null,

    /**
     * the focused background image url of the view. focusable must be true for normal views. (Android)
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.9
     */
    backgroundFocusedImage:null,

    /**
     * a background gradient for the view with the properties: type,startPoint,endPoint,startRadius,endRadius,backfillStart,backfillEnd,colors.
     * platforms: android, iphone, ipad
     * @type object
     * @since 0.9
     */
    backgroundGradient:null,

    /**
     * the background image url of the view
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.9
     */
    backgroundImage:null,

    /**
     * End caps specify the portion of an image that should not be resized when an image is stretched. This technique is used to implement buttons and other resizable image-based interface elements. When a button with end caps is resized, the resizing occurs only in the middle of the button, in the region between the end caps. The end caps themselves keep their original size and appearance. This property specifies the size of the left end cap. The middle (stretchable) portion is assumed to be 1 pixel wide. The right end cap is therefore computed by adding the size of the left end cap and the middle portion together and then subtracting that value from the width of the image
     * platforms: android, iphone, ipad
     * @type float
     * @since 0.9
     */
    backgroundLeftCap:null,

    /**
     * the selected background color of the view. focusable must be true for normal views. (Android)
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.9
     */
    backgroundSelectedColor:null,

    /**
     * the selected background image url of the view. focusable must be true for normal views. (Android)
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.9
     */
    backgroundSelectedImage:null,

    /**
     * End caps specify the portion of an image that should not be resized when an image is stretched. This technique is used to implement buttons and other resizable image-based interface elements. When a button with end caps is resized, the resizing occurs only in the middle of the button, in the region between the end caps. The end caps themselves keep their original size and appearance. This property specifies the size of the top end cap. The middle (stretchable) portion is assumed to be 1 pixel wide. The bottom end cap is therefore computed by adding the size of the top end cap and the middle portion together and then subtracting that value from the height of the image
     * platforms: android, iphone, ipad
     * @type float
     * @since 0.9
     */
    backgroundTopCap:null,

    /**
     * the border color of the view
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.9
     */
    borderColor:null,

    /**
     * the border radius of the view
     * platforms: android, iphone, ipad
     * @type float
     * @since 0.9
     */
    borderRadius:null,

    /**
     * the border width of the view
     * platforms: android, iphone, ipad
     * @type float
     * @since 0.9
     */
    borderWidth:null,

    /**
     * property for the view bottom position. This position is relative to the view's parent. Can be either a float value or a dimension string ie 'auto' (default).
     * platforms: android, iphone, ipad
     * @type float,string
     * @since 0.9
     */
    bottom:null,

    /**
     * <p>allow image to scale (Android)</p>
     * platforms: android, iphone, ipad
     * @type boolean
     * @since 0.9
     */
    canScale:null,

    /**
     * a dictionary with properties x and y to indicate the center of the views position relative to the parent view
     * platforms: android, iphone, ipad
     * @type object
     * @since 0.9
     */
    center:null,

    /**
     * <p>number of times to retry decoding the bitmap at this URL (1.7.0 / Android only. default: 5)</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.9
     */
    decodeRetries:null,

    /**
     * <p>url to the default image to display while loading a remote image</p>
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.9
     */
    defaultImage:null,

    /**
     * <p>amount of time in milliseconds to animate one cycle</p>
     * platforms: android, iphone, ipad
     * @type float
     * @since 0.9
     */
    duration:null,

    /**
     * <p>enable zoom controls on Android. Default is true for backward compatibility. (1.3.0)</p>
     * platforms: android, iphone, ipad
     * @type boolean
     * @since 0.9
     */
    enableZoomControls:null,

    /**
     * Set true if you want a view to be focusable when navigating with the trackball or D-Pad. Default: false. (Android Only)
     * platforms: android
     * @type boolean
     * @since 0.9
     */
    focusable:null,

    /**
     * the font family
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.9
     */
    "font-family":null,

    /**
     * the font size
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.9
     */
    "font-size":null,

    /**
     * the font style, either normal or italics
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.9
     */
    "font-style":null,

    /**
     * the font weight, either normal or bold
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.9
     */
    "font-weight":null,

    /**
     * property for the view height. Can be either a float value or a dimension string ie 'auto' (default).
     * platforms: android, iphone, ipad
     * @type float,string
     * @since 0.9
     */
    height:null,

    /**
     * <p>indicates whether or not the source image is in 2x resolution for retina displays.  Use for remote images ONLY.  (iOS)</p>
     * platforms: android, iphone, ipad
     * @type boolean
     * @since 0.9
     */
    hires:null,

    /**
     * <p>image to display either as string url, Blob or File</p>
     * platforms: android, iphone, ipad
     * @type object
     * @since 0.9
     */
    image:null,

    /**
     * <p>array of images (either as string url, Blob or File) to display in an animation</p>
     * platforms: android, iphone, ipad
     * @type array
     * @since 0.9
     */
    images:null,

    /**
     * property for the view left position. This position is relative to the view's parent. Can be either a float value or a dimension string ie 'auto' (default).
     * platforms: android, iphone, ipad
     * @type float,string
     * @since 0.9
     */
    left:null,

    /**
     * the opacity from 0.0-1.0
     * platforms: android, iphone, ipad
     * @type float
     * @since 0.9
     */
    opacity:null,

    /**
     * <p>readonly boolean to indicate if the animation is paused</p>
     * platforms: android, iphone, ipad
     * @type boolean
     * @since 0.9
     */
    paused:null,

    /**
     * <p>boolean to indicate if the default image should be displaying while loading a remote image</p>
     * platforms: android, iphone, ipad
     * @type boolean
     * @since 0.9
     */
    preventDefaultImage:null,

    /**
     * <p>number of times to repeat the image animation</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.9
     */
    repeatCount:null,

    /**
     * <p>boolean to indicate if the animation should happen in reverse (from last to first)</p>
     * platforms: android, iphone, ipad
     * @type boolean
     * @since 0.9
     */
    reverse:null,

    /**
     * property for the view right position. This position is relative to the view's parent. Can be either a float value or a dimension string ie 'auto' (default).
     * platforms: android, iphone, ipad
     * @type float,string
     * @since 0.9
     */
    right:null,

    /**
     * the size of the view as a dictionary of width and height properties
     * platforms: android, iphone, ipad
     * @type object
     * @since 0.9
     */
    size:null,

    /**
     * One of Titanium.UI.Android.SOFT_KEYBOARD_DEFAULT_ON_FOCUS, Titanium.UI.Android.SOFT_KEYBOARD_HIDE_ON_FOCUS, or Titanium.UI.Android.SOFT_KEYBOARD_SHOW_ON_FOCUS. (Android only)
     * platforms: android
     * @type int
     * @since 0.9
     */
    softKeyboardOnFocus:null,

    /**
     * property for the view top position. This position is relative to the view's parent. Can be either a float value or a dimension string ie 'auto' (default).
     * platforms: android, iphone, ipad
     * @type float,string
     * @since 0.9
     */
    top:null,

    /**
     * a boolean indicating if the view should receive touch events (true, default) or forward them to peers (false)
     * platforms: android, iphone, ipad
     * @type boolean
     * @since 0.9
     */
    touchEnabled:null,

    /**
     * the transformation matrix to apply to the view
     * platforms: android, iphone, ipad
     * @type object
     * @since 0.9
     */
    transform:null,

    /**
     * <p>url to the image to display (NOTE: this property is deprecated. use image instead)</p>
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.9
     */
    url:null,

    /**
     * a boolean of the visibility of the view
     * platforms: android, iphone, ipad
     * @type boolean
     * @since 0.9
     */
    visible:null,

    /**
     * property for the view width. Can be either a float value or a dimension string ie 'auto' (default).
     * platforms: android, iphone, ipad
     * @type float,string
     * @since 0.9
     */
    width:null,

    /**
     * the z index position relative to other sibling views
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.9
     */
    zIndex:null,


    /**
     * add a child to the view hierarchy
     * platforms: android, iphone, ipad
     * @param {object} view the view to add to this views hiearchy
     * @returns void
     * @since 0.9
     */
    add:function(view) {
    },

    /**
     * add an event listener for the instance to receive view triggered events
     * platforms: android, iphone, ipad
     * @param {string} name name of the event
     * @param {function} callback callback function to invoke when the event is fired
     * @returns void
     * @since 0.9
     */
    addEventListener:function(name, callback) {
    },

    /**
     * animate the view
     * platforms: android, iphone, ipad
     * @param {object} obj either a dictionary of animation properties or an Animation object
     * @param {function} callback function to be invoked upon completion of the animation
     * @returns void
     * @since 0.9
     */
    animate:function(obj, callback) {
    },

    /**
     * fire a synthesized event to the views listener
     * platforms: android, iphone, ipad
     * @param {string} name name of the event
     * @param {object} event event object
     * @returns void
     * @since 0.9
     */
    fireEvent:function(name, event) {
    },

    /**
     * hide the view
     * platforms: android, iphone, ipad
     * @returns void
     * @since 0.9
     */
    hide:function() {
    },

    /**
     * <p>pause a started animation.</p>
     * platforms: android, iphone, ipad
     * @returns void
     * @since 0.9
     */
    pause:function() {
    },

    /**
     * remove a previously add view from the view hiearchy
     * platforms: android, iphone, ipad
     * @param {object} view the view to remove from this views hiearchy
     * @returns void
     * @since 0.9
     */
    remove:function(view) {
    },

    /**
     * remove a previously added event listener
     * platforms: android, iphone, ipad
     * @param {string} name name of the event
     * @param {function} callback callback function passed in addEventListener
     * @returns void
     * @since 0.9
     */
    removeEventListener:function(name, callback) {
    },

    /**
     * make the view visible
     * platforms: android, iphone, ipad
     * @returns void
     * @since 0.9
     */
    show:function() {
    },

    /**
     * <p>start the image animation. this method only works if you set multiple images</p>
     * platforms: android, iphone, ipad
     * @returns void
     * @since 0.9
     */
    start:function() {
    },

    /**
     * <p>stop a started animation and reset the index to the first image</p>
     * platforms: android, iphone, ipad
     * @returns void
     * @since 0.9
     */
    stop:function() {
    },

    /**
     * <p>return the image as a Blob object</p>
     * platforms: android, iphone, ipad
     * @returns void
     * @since 0.9
     */
    toBlob:function() {
    },

    /**
     * return a Blob image of the rendered view
     * platforms: android, iphone, ipad
     * @param {function} f function to be invoked upon completion. if non-null, this method will be performed asynchronously. if null, it will be performed immediately
     * @since 0.9
     */
    toImage:function(f) {
    }
}

/**
 * platforms: android, iphone, ipad
 * @namespace <p>A Label is created by the method {@link Titanium.UI.createLabel}.</p>
 * @since 0.8
 * 
 * @example Basic Label
 * <p>Create a label with a nice text shadow, 48px font that's aligned <tt>center</tt> and height <tt>auto</tt>.</p>
<pre><code>var l2 = Titanium.UI.createLabel({
    text:'Appcelerator',
    height:'auto',
    width:'auto',
    shadowColor:'#aaa',
    shadowOffset:{x:5,y:5},
    color:'#900',
    font:{fontSize:48},
    textAlign:'center'
});
</code></pre>
 */
Ti.UI.Label = {

    /**
     * a dictionary with properties x and y to indicate the anchor point value. anchor specifies the position by which animation should occur. center is 0.5, 0.5
     * platforms: android, iphone, ipad
     * @type object
     * @since 0.8
     */
    anchorPoint:null,

    /**
     * read-only object with x and y properties of where the view is during animation
     * platforms: android, iphone, ipad
     * @type object
     * @since 0.8
     */
    animatedCenterPoint:null,

    /**
     * <p>One of Ti.UI.Android.LINKIFY constants. Automatically create clickable links for the specified type. (Android Only)</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.8
     */
    autoLink:null,

    /**
     * the background color of the view
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    backgroundColor:null,

    /**
     * the disabled background color of the view. (Android)
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    backgroundDisabledColor:null,

    /**
     * the disabled background image url of the view. (Android)
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    backgroundDisabledImage:null,

    /**
     * the focused background color of the view. focusable must be true for normal views. (Android)
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    backgroundFocusedColor:null,

    /**
     * the focused background image url of the view. focusable must be true for normal views. (Android)
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    backgroundFocusedImage:null,

    /**
     * a background gradient for the view with the properties: type,startPoint,endPoint,startRadius,endRadius,backfillStart,backfillEnd,colors.
     * platforms: android, iphone, ipad
     * @type object
     * @since 0.8
     */
    backgroundGradient:null,

    /**
     * the background image url of the view
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    backgroundImage:null,

    /**
     * End caps specify the portion of an image that should not be resized when an image is stretched. This technique is used to implement buttons and other resizable image-based interface elements. When a button with end caps is resized, the resizing occurs only in the middle of the button, in the region between the end caps. The end caps themselves keep their original size and appearance. This property specifies the size of the left end cap. The middle (stretchable) portion is assumed to be 1 pixel wide. The right end cap is therefore computed by adding the size of the left end cap and the middle portion together and then subtracting that value from the width of the image
     * platforms: android, iphone, ipad
     * @type float
     * @since 0.8
     */
    backgroundLeftCap:null,

    /**
     * <p>the number of pixels to extend the background image past the label on the bottom</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.8
     */
    backgroundPaddingBottom:null,

    /**
     * <p>the number of pixels to extend the background image past the label on the left</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.8
     */
    backgroundPaddingLeft:null,

    /**
     * <p>the number of pixels to extend the background image past the label on the right</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.8
     */
    backgroundPaddingRight:null,

    /**
     * <p>the number of pixels to extend the background image past the label on the top</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.8
     */
    backgroundPaddingTop:null,

    /**
     * the selected background color of the view. focusable must be true for normal views. (Android)
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    backgroundSelectedColor:null,

    /**
     * the selected background image url of the view. focusable must be true for normal views. (Android)
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    backgroundSelectedImage:null,

    /**
     * End caps specify the portion of an image that should not be resized when an image is stretched. This technique is used to implement buttons and other resizable image-based interface elements. When a button with end caps is resized, the resizing occurs only in the middle of the button, in the region between the end caps. The end caps themselves keep their original size and appearance. This property specifies the size of the top end cap. The middle (stretchable) portion is assumed to be 1 pixel wide. The bottom end cap is therefore computed by adding the size of the top end cap and the middle portion together and then subtracting that value from the height of the image
     * platforms: android, iphone, ipad
     * @type float
     * @since 0.8
     */
    backgroundTopCap:null,

    /**
     * the border color of the view
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    borderColor:null,

    /**
     * the border radius of the view
     * platforms: android, iphone, ipad
     * @type float
     * @since 0.8
     */
    borderRadius:null,

    /**
     * the border width of the view
     * platforms: android, iphone, ipad
     * @type float
     * @since 0.8
     */
    borderWidth:null,

    /**
     * property for the view bottom position. This position is relative to the view's parent. Can be either a float value or a dimension string ie 'auto' (default).
     * platforms: android, iphone, ipad
     * @type float,string
     * @since 0.8
     */
    bottom:null,

    /**
     * a dictionary with properties x and y to indicate the center of the views position relative to the parent view
     * platforms: android, iphone, ipad
     * @type object
     * @since 0.8
     */
    center:null,

    /**
     * <p>the color of the label</p>
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    color:null,

    /**
     * <p>Turn on/off the addition of ellipses at the end of the label if the text is too large to fit. (Android Only, default false)</p>
     * platforms: android, iphone, ipad
     * @type bool
     * @since 0.8
     */
    ellipsize:null,

    /**
     * Set true if you want a view to be focusable when navigating with the trackball or D-Pad. Default: false. (Android Only)
     * platforms: android
     * @type boolean
     * @since 0.8
     */
    focusable:null,

    /**
     * <p>the label font object properties</p>
     * platforms: android, iphone, ipad
     * @type object
     * @since 0.8
     */
    font:null,

    /**
     * the font family
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    "font-family":null,

    /**
     * the font size
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    "font-size":null,

    /**
     * the font style, either normal or italics
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    "font-style":null,

    /**
     * the font weight, either normal or bold
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    "font-weight":null,

    /**
     * property for the view height. Can be either a float value or a dimension string ie 'auto' (default).
     * platforms: android, iphone, ipad
     * @type float,string
     * @since 0.8
     */
    height:null,

    /**
     * <p>the color of the label when in the highlighted state</p>
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    highlightedColor:null,

    /**
     * <p>simple html formatting. (Android Only)</p>
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    html:null,

    /**
     * property for the view left position. This position is relative to the view's parent. Can be either a float value or a dimension string ie 'auto' (default).
     * platforms: android, iphone, ipad
     * @type float,string
     * @since 0.8
     */
    left:null,

    /**
     * <p>the minimum size of the font when the font is sized based on the contents.  Enables font scaling to fit and forces the label content to be limited to a single line</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.8
     */
    minimumFontSize:null,

    /**
     * the opacity from 0.0-1.0
     * platforms: android, iphone, ipad
     * @type float
     * @since 0.8
     */
    opacity:null,

    /**
     * property for the view right position. This position is relative to the view's parent. Can be either a float value or a dimension string ie 'auto' (default).
     * platforms: android, iphone, ipad
     * @type float,string
     * @since 0.8
     */
    right:null,

    /**
     * <p>the text shadow color</p>
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    shadowColor:null,

    /**
     * <p>the shadow offset as a dictionary with the properties <tt>x</tt> and <tt>y</tt></p>
     * platforms: android, iphone, ipad
     * @type object
     * @since 0.8
     */
    shadowOffset:null,

    /**
     * the size of the view as a dictionary of width and height properties
     * platforms: android, iphone, ipad
     * @type object
     * @since 0.8
     */
    size:null,

    /**
     * One of Titanium.UI.Android.SOFT_KEYBOARD_DEFAULT_ON_FOCUS, Titanium.UI.Android.SOFT_KEYBOARD_HIDE_ON_FOCUS, or Titanium.UI.Android.SOFT_KEYBOARD_SHOW_ON_FOCUS. (Android only)
     * platforms: android
     * @type int
     * @since 0.8
     */
    softKeyboardOnFocus:null,

    /**
     * <p>the text of the label</p>
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    text:null,

    /**
     * <p>the alignment constant or string value such as <tt>left</tt>, <tt>center</tt> or <tt>right</tt></p>
     * platforms: android, iphone, ipad
     * @type string,int
     * @since 0.8
     */
    textAlign:null,

    /**
     * <p>the key in the locale file to use for the text property</p>
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    textid:null,

    /**
     * property for the view top position. This position is relative to the view's parent. Can be either a float value or a dimension string ie 'auto' (default).
     * platforms: android, iphone, ipad
     * @type float,string
     * @since 0.8
     */
    top:null,

    /**
     * a boolean indicating if the view should receive touch events (true, default) or forward them to peers (false)
     * platforms: android, iphone, ipad
     * @type boolean
     * @since 0.8
     */
    touchEnabled:null,

    /**
     * the transformation matrix to apply to the view
     * platforms: android, iphone, ipad
     * @type object
     * @since 0.8
     */
    transform:null,

    /**
     * a boolean of the visibility of the view
     * platforms: android, iphone, ipad
     * @type boolean
     * @since 0.8
     */
    visible:null,

    /**
     * property for the view width. Can be either a float value or a dimension string ie 'auto' (default).
     * platforms: android, iphone, ipad
     * @type float,string
     * @since 0.8
     */
    width:null,

    /**
     * <p>Turn on/off word wrapping in the label. (Android Only - default true)</p>
     * platforms: android, iphone, ipad
     * @type bool
     * @since 0.8
     */
    wordWrap:null,

    /**
     * the z index position relative to other sibling views
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.8
     */
    zIndex:null,


    /**
     * add a child to the view hierarchy
     * platforms: android, iphone, ipad
     * @param {object} view the view to add to this views hiearchy
     * @returns void
     * @since 0.8
     */
    add:function(view) {
    },

    /**
     * add an event listener for the instance to receive view triggered events
     * platforms: android, iphone, ipad
     * @param {string} name name of the event
     * @param {function} callback callback function to invoke when the event is fired
     * @returns void
     * @since 0.8
     */
    addEventListener:function(name, callback) {
    },

    /**
     * animate the view
     * platforms: android, iphone, ipad
     * @param {object} obj either a dictionary of animation properties or an Animation object
     * @param {function} callback function to be invoked upon completion of the animation
     * @returns void
     * @since 0.8
     */
    animate:function(obj, callback) {
    },

    /**
     * fire a synthesized event to the views listener
     * platforms: android, iphone, ipad
     * @param {string} name name of the event
     * @param {object} event event object
     * @returns void
     * @since 0.8
     */
    fireEvent:function(name, event) {
    },

    /**
     * hide the view
     * platforms: android, iphone, ipad
     * @returns void
     * @since 0.8
     */
    hide:function() {
    },

    /**
     * remove a previously add view from the view hiearchy
     * platforms: android, iphone, ipad
     * @param {object} view the view to remove from this views hiearchy
     * @returns void
     * @since 0.8
     */
    remove:function(view) {
    },

    /**
     * remove a previously added event listener
     * platforms: android, iphone, ipad
     * @param {string} name name of the event
     * @param {function} callback callback function passed in addEventListener
     * @returns void
     * @since 0.8
     */
    removeEventListener:function(name, callback) {
    },

    /**
     * make the view visible
     * platforms: android, iphone, ipad
     * @returns void
     * @since 0.8
     */
    show:function() {
    },

    /**
     * return a Blob image of the rendered view
     * platforms: android, iphone, ipad
     * @param {function} f function to be invoked upon completion. if non-null, this method will be performed asynchronously. if null, it will be performed immediately
     * @since 0.8
     */
    toImage:function(f) {
    }
}

/**
 * platforms: android, iphone, ipad
 * @namespace <p>The Option Dialog is created by {@link Titanium.UI.createOptionDialog} and allows you to show a modal dialog of one or more options to the user.</p>
 * @since 0.8
 * 
 * @example Simple Options Dialog with 2 Options
 * <p>In this example, we show a simple option dialog.</p>
<pre><code>var dialog = Titanium.UI.createOptionDialog({
    title: 'Hello',
    options: ['Option 1','Option 2'],
    cancel:1
});
dialog.show();
</code></pre>
 */
Ti.UI.OptionDialog = {

    /**
     * <p>A Titanium.UI.View. Allows for arbitrary contents inside a native dialog. Works for any dialog. (Android)</p>
     * platforms: android, iphone, ipad
     * @type object
     * @since 0.8
     */
    androidView:null,

    /**
     * <p>an index to indicate which button should be the cancel button. If no button should be the cancel button, use -1. If there is a cancel button, it MUST be the last button for use on iPad.</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.8
     */
    cancel:null,

    /**
     * <p>the destructive button (indicated by a visual clue in the UI)</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.8
     */
    destructive:null,

    /**
     * <p>array of button names as strings</p>
     * platforms: android, iphone, ipad
     * @type array
     * @since 0.8
     */
    options:null,

    /**
     * <p>set an initially selected option. Only valid when options has been specified. (Android only)</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.8
     */
    selectedIndex:null,

    /**
     * <p>the title of the dialog</p>
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    title:null,

    /**
     * <p>the key in the locale file to use for the title property</p>
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    titleid:null,


    /**
     * <p>cause the dialog to become visible</p>
     * platforms: android, iphone, ipad
     * @returns void
     * @since 0.8
     */
    show:function() {
    }
}

/**
 * Notes: <p>For Android, note the <tt>useSpinner</tt> property above.  By default, when you create a picker you will get Android's native picker control, which looks more like the classic "dropdown" widget.  If you'd prefer to use something that looks more like iOS's picker -- which looks like one or more spinning wheels --, you can set <tt>useSpinner: true</tt>.</p>
<p>Titanium's Android picker control (both the native and the <tt>useSpinner</tt> variety) does not support/display views that are added to picker rows.  Only the <tt>title</tt> of the row will be displayed within the control.
Titanium for Android does not support the DateTime or Count Down Timer picker type.</p>
 * platforms: android, iphone, ipad
 * @namespace <p>A Picker is created by the method {@link Titanium.UI.createPicker}.  A Picker can be used to select one or more fixed values.</p>
 * @since 0.8
 * 
 * @example Basic Single Column Picker
 * <p>In this basic picker example, we create a one column picker with 4 rows. </p>
<pre><code>var picker = Titanium.UI.createPicker();
var data = [];
data[0]=Titanium.UI.createPickerRow({title:'Bananas'});
data[1]=Titanium.UI.createPickerRow({title:'Strawberries'});
data[2]=Titanium.UI.createPickerRow({title:'Mangos'});
data[3]=Titanium.UI.createPickerRow({title:'Grapes'});
picker.add(data);
</code></pre>
 * 
 * @example Custom View for Row
 * <p>In this example, we use a custom label for each row in a column.</p>
<pre><code>var picker = Titanium.UI.createPicker();
var row = Titanium.UI.createPickerRow();
var label = Titanium.UI.createLabel({
    text:text,
    font:{fontSize:24,fontWeight:'bold'},
    color:text,
    width:'auto',
    height:'auto'
});
row.add(label);
picker.add(row);
</code></pre>
 */
function Titanium_UI_Picker() {
}
Titanium_UI_Picker.prototype = {

    /**
     * <p>array of column values</p>
     * platforms: android, iphone, ipad
     * @type array
     * @since 0.8
     */
    columns:null,

    /**
     * <p>the duration value in milliseconds for count down timer pickers. (Note that Titanium's Android implementation does not support the countdown timer.)</p>
     * platforms: android, iphone, ipad
     * @type double
     * @since 0.8
     */
    countDownDuration:null,

    /**
     * <p>(Android only, applicable only to the {@link Titanium.UI.PICKER_TYPE_TIME} picker.)  If true, a 24-hour cloc will be used, with hours 0 through 23.  If false, a 12-hour clock will be used, with hours 1 through 12 and am/pm controls.  For reasons of backward compatibility, the default value depends on the type of time picker being used.  For the native time picker (when "useSpinner" is either un-set or false), the default is false.  For the spinner-style time picker, the default is true.</p>
     * platforms: android, iphone, ipad
     * @type boolean
     * @since 0.8
     */
    format24:null,

    /**
     * <p>the locale used for displaying Date/Time pickers values</p>
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    locale:null,

    /**
     * <p>the minimum Date/Time for value for date pickers</p>
     * platforms: android, iphone, ipad
     * @type date
     * @since 0.8
     */
    minDate:null,

    /**
     * <p>property to set the interval displayed by the minutes wheel (for example, 15 minutes). The interval value must be evenly divided into 60; if it is not, the default value is used. The default and minimum values are 1; the maximum value is 30.  (Not currently supported on Android.)</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.8
     */
    minuteInterval:null,

    /**
     * <p>for basic picker, boolean value to indicate whether the visual selection style is shown. On the iPhone, this is a blue selected bar.</p>
     * platforms: android, iphone, ipad
     * @type boolean
     * @since 0.8
     */
    selectionIndicator:null,

    /**
     * <p>the type constant for the picker. One of {@link Titanium.UI.PICKER_TYPE_PLAIN} (default), {@link Titanium.UI.PICKER_TYPE_DATE_AND_TIME}, {@link Titanium.UI.PICKER_TYPE_DATE}, {@link Titanium.UI.PICKER_TYPE_TIME} or {@link Titanium.UI.PICKER_TYPE_COUNT_DOWN_TIMER}. (Note that Titanium's Android implementation does not support the countdown timer or date+time varieties.)</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.8
     */
    type:null,

    /**
     * <p>(Android only, default false.) An indicator that you wish to use a non-native Android control that looks and behaves more like the iOS picker in the sense that the user selects values by spinning a wheel.  (The native Android spinner is more like a conventional "dropdown".)  Note that this option works both plain pickers, date pickers and time pickers.  Set it preferably immediately when creating the picker, i.e., {@link Titanium.UI.createPicker({useSpinner:true});}, but definitely before <tt>.add()</tt>ing the picker to its parent.</p>
     * platforms: android, iphone, ipad
     * @type boolean
     * @since 0.8
     */
    useSpinner:null,

    /**
     * <p>the Date/Time value for date pickers</p>
     * platforms: android, iphone, ipad
     * @type date
     * @since 0.8
     */
    value:null,

    /**
     * <p>(Android only.)  This is relevant only if you set <tt>useSpinner</tt> to <tt>true</tt>, and it is relevant only for the plain picker (not date/time).  By default, the spinner-style Android picker will show 5 rows: the one in the middle which is selected, and then 2 above and below.  You can set this to allow more (use an odd number to be sure the selected row is in the middle.)</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.8
     */
    visibleItems:null,


    /**
     * <p>add an array of rows, a single row or a column to the picker</p>
     * platforms: android, iphone, ipad
     * @param {array,object} data add an array of rows, a single row or a column to the picker
     * @returns void
     * @since 0.8
     */
    add:function(data) {
    },

    /**
     * add an event listener for the instance to receive view triggered events
     * platforms: android, iphone, ipad
     * @param {string} name name of the event
     * @param {function} callback callback function to invoke when the event is fired
     * @returns void
     * @since 0.8
     */
    addEventListener:function(name, callback) {
    },

    /**
     * fire a synthesized event to the views listener
     * platforms: android, iphone, ipad
     * @param {string} name name of the event
     * @param {object} event event object
     * @returns void
     * @since 0.8
     */
    fireEvent:function(name, event) {
    },

    /**
     * <p>get the selected row object for column</p>
     * platforms: android, iphone, ipad
     * @param {int} index for the column index, return the row object or nil if not found
     * @since 0.8
     */
    getSelectedRow:function(index) {
    },

    /**
     * <p>causes the picker to reload the values from the new column.</p>
     * platforms: android, iphone, ipad
     * @param {object} column new column to load
     * @returns void
     * @since 0.8
     */
    reloadColumn:function(column) {
    },

    /**
     * remove a previously added event listener
     * platforms: android, iphone, ipad
     * @param {string} name name of the event
     * @param {function} callback callback function passed in addEventListener
     * @returns void
     * @since 0.8
     */
    removeEventListener:function(name, callback) {
    },

    /**
     * <p>set the column's row to the selected state</p>
     * platforms: android, iphone, ipad
     * @param {int} column the column index
     * @param {int} row the row index
     * @param {boolean} animated boolean to indicate if the selection should be animated (default) (optional)
     * @returns void
     * @since 0.8
     */
    setSelectedRow:function(column, row, animated) {
    }
}

/**
 * platforms: android, iphone, ipad
 * @namespace <p>The picker row object created by {@link Titanium.UI.createPickerColumn}.</p>
 * @since 0.9
 */
Ti.UI.PickerColumn = {

    /**
     * a dictionary with properties x and y to indicate the anchor point value. anchor specifies the position by which animation should occur. center is 0.5, 0.5
     * platforms: android, iphone, ipad
     * @type object
     * @since 0.9
     */
    anchorPoint:null,

    /**
     * read-only object with x and y properties of where the view is during animation
     * platforms: android, iphone, ipad
     * @type object
     * @since 0.9
     */
    animatedCenterPoint:null,

    /**
     * the background color of the view
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.9
     */
    backgroundColor:null,

    /**
     * the disabled background color of the view. (Android)
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.9
     */
    backgroundDisabledColor:null,

    /**
     * the disabled background image url of the view. (Android)
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.9
     */
    backgroundDisabledImage:null,

    /**
     * the focused background color of the view. focusable must be true for normal views. (Android)
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.9
     */
    backgroundFocusedColor:null,

    /**
     * the focused background image url of the view. focusable must be true for normal views. (Android)
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.9
     */
    backgroundFocusedImage:null,

    /**
     * a background gradient for the view with the properties: type,startPoint,endPoint,startRadius,endRadius,backfillStart,backfillEnd,colors.
     * platforms: android, iphone, ipad
     * @type object
     * @since 0.9
     */
    backgroundGradient:null,

    /**
     * the background image url of the view
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.9
     */
    backgroundImage:null,

    /**
     * End caps specify the portion of an image that should not be resized when an image is stretched. This technique is used to implement buttons and other resizable image-based interface elements. When a button with end caps is resized, the resizing occurs only in the middle of the button, in the region between the end caps. The end caps themselves keep their original size and appearance. This property specifies the size of the left end cap. The middle (stretchable) portion is assumed to be 1 pixel wide. The right end cap is therefore computed by adding the size of the left end cap and the middle portion together and then subtracting that value from the width of the image
     * platforms: android, iphone, ipad
     * @type float
     * @since 0.9
     */
    backgroundLeftCap:null,

    /**
     * the selected background color of the view. focusable must be true for normal views. (Android)
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.9
     */
    backgroundSelectedColor:null,

    /**
     * the selected background image url of the view. focusable must be true for normal views. (Android)
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.9
     */
    backgroundSelectedImage:null,

    /**
     * End caps specify the portion of an image that should not be resized when an image is stretched. This technique is used to implement buttons and other resizable image-based interface elements. When a button with end caps is resized, the resizing occurs only in the middle of the button, in the region between the end caps. The end caps themselves keep their original size and appearance. This property specifies the size of the top end cap. The middle (stretchable) portion is assumed to be 1 pixel wide. The bottom end cap is therefore computed by adding the size of the top end cap and the middle portion together and then subtracting that value from the height of the image
     * platforms: android, iphone, ipad
     * @type float
     * @since 0.9
     */
    backgroundTopCap:null,

    /**
     * the border color of the view
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.9
     */
    borderColor:null,

    /**
     * the border radius of the view
     * platforms: android, iphone, ipad
     * @type float
     * @since 0.9
     */
    borderRadius:null,

    /**
     * the border width of the view
     * platforms: android, iphone, ipad
     * @type float
     * @since 0.9
     */
    borderWidth:null,

    /**
     * property for the view bottom position. This position is relative to the view's parent. Can be either a float value or a dimension string ie 'auto' (default).
     * platforms: android, iphone, ipad
     * @type float,string
     * @since 0.9
     */
    bottom:null,

    /**
     * a dictionary with properties x and y to indicate the center of the views position relative to the parent view
     * platforms: android, iphone, ipad
     * @type object
     * @since 0.9
     */
    center:null,

    /**
     * Set true if you want a view to be focusable when navigating with the trackball or D-Pad. Default: false. (Android Only)
     * platforms: android
     * @type boolean
     * @since 0.9
     */
    focusable:null,

    /**
     * the font family
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.9
     */
    "font-family":null,

    /**
     * the font size
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.9
     */
    "font-size":null,

    /**
     * the font style, either normal or italics
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.9
     */
    "font-style":null,

    /**
     * the font weight, either normal or bold
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.9
     */
    "font-weight":null,

    /**
     * property for the view height. Can be either a float value or a dimension string ie 'auto' (default).
     * platforms: android, iphone, ipad
     * @type float,string
     * @since 0.9
     */
    height:null,

    /**
     * property for the view left position. This position is relative to the view's parent. Can be either a float value or a dimension string ie 'auto' (default).
     * platforms: android, iphone, ipad
     * @type float,string
     * @since 0.9
     */
    left:null,

    /**
     * the opacity from 0.0-1.0
     * platforms: android, iphone, ipad
     * @type float
     * @since 0.9
     */
    opacity:null,

    /**
     * property for the view right position. This position is relative to the view's parent. Can be either a float value or a dimension string ie 'auto' (default).
     * platforms: android, iphone, ipad
     * @type float,string
     * @since 0.9
     */
    right:null,

    /**
     * <p>number of rows in the column (readonly)</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.9
     */
    rowCount:null,

    /**
     * <p>an array of rows</p>
     * platforms: android, iphone, ipad
     * @type array
     * @since 0.9
     */
    rows:null,

    /**
     * the size of the view as a dictionary of width and height properties
     * platforms: android, iphone, ipad
     * @type object
     * @since 0.9
     */
    size:null,

    /**
     * One of Titanium.UI.Android.SOFT_KEYBOARD_DEFAULT_ON_FOCUS, Titanium.UI.Android.SOFT_KEYBOARD_HIDE_ON_FOCUS, or Titanium.UI.Android.SOFT_KEYBOARD_SHOW_ON_FOCUS. (Android only)
     * platforms: android
     * @type int
     * @since 0.9
     */
    softKeyboardOnFocus:null,

    /**
     * property for the view top position. This position is relative to the view's parent. Can be either a float value or a dimension string ie 'auto' (default).
     * platforms: android, iphone, ipad
     * @type float,string
     * @since 0.9
     */
    top:null,

    /**
     * a boolean indicating if the view should receive touch events (true, default) or forward them to peers (false)
     * platforms: android, iphone, ipad
     * @type boolean
     * @since 0.9
     */
    touchEnabled:null,

    /**
     * the transformation matrix to apply to the view
     * platforms: android, iphone, ipad
     * @type object
     * @since 0.9
     */
    transform:null,

    /**
     * a boolean of the visibility of the view
     * platforms: android, iphone, ipad
     * @type boolean
     * @since 0.9
     */
    visible:null,

    /**
     * property for the view width. Can be either a float value or a dimension string ie 'auto' (default).
     * platforms: android, iphone, ipad
     * @type float,string
     * @since 0.9
     */
    width:null,

    /**
     * the z index position relative to other sibling views
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.9
     */
    zIndex:null,


    /**
     * add a child to the view hierarchy
     * platforms: android, iphone, ipad
     * @param {object} view the view to add to this views hiearchy
     * @returns void
     * @since 0.9
     */
    add:function(view) {
    },

    /**
     * add an event listener for the instance to receive view triggered events
     * platforms: android, iphone, ipad
     * @param {string} name name of the event
     * @param {function} callback callback function to invoke when the event is fired
     * @returns void
     * @since 0.9
     */
    addEventListener:function(name, callback) {
    },

    /**
     * <p>add a row to the column.</p>
     * platforms: android, iphone, ipad
     * @param {{@link Titanium_UI_PickerRow_html}} row The row to add.
     * @returns void
     * @since 0.9
     */
    addRow:function(row) {
    },

    /**
     * animate the view
     * platforms: android, iphone, ipad
     * @param {object} obj either a dictionary of animation properties or an Animation object
     * @param {function} callback function to be invoked upon completion of the animation
     * @returns void
     * @since 0.9
     */
    animate:function(obj, callback) {
    },

    /**
     * fire a synthesized event to the views listener
     * platforms: android, iphone, ipad
     * @param {string} name name of the event
     * @param {object} event event object
     * @returns void
     * @since 0.9
     */
    fireEvent:function(name, event) {
    },

    /**
     * hide the view
     * platforms: android, iphone, ipad
     * @returns void
     * @since 0.9
     */
    hide:function() {
    },

    /**
     * remove a previously add view from the view hiearchy
     * platforms: android, iphone, ipad
     * @param {object} view the view to remove from this views hiearchy
     * @returns void
     * @since 0.9
     */
    remove:function(view) {
    },

    /**
     * remove a previously added event listener
     * platforms: android, iphone, ipad
     * @param {string} name name of the event
     * @param {function} callback callback function passed in addEventListener
     * @returns void
     * @since 0.9
     */
    removeEventListener:function(name, callback) {
    },

    /**
     * <p>remove a row from the column.</p>
     * platforms: android, iphone, ipad
     * @param {{@link Titanium_UI_PickerRow_html}} row The row to remove.
     * @returns void
     * @since 0.9
     */
    removeRow:function(row) {
    },

    /**
     * make the view visible
     * platforms: android, iphone, ipad
     * @returns void
     * @since 0.9
     */
    show:function() {
    },

    /**
     * return a Blob image of the rendered view
     * platforms: android, iphone, ipad
     * @param {function} f function to be invoked upon completion. if non-null, this method will be performed asynchronously. if null, it will be performed immediately
     * @since 0.9
     */
    toImage:function(f) {
    }
}

/**
 * platforms: android, iphone, ipad
 * @namespace <p>The picker row object created by {@link Titanium.UI.createPickerRow}.</p>
 * @since 0.9
 * 
 * @example Custom Views for a picker row
 * <p>Since the row object is itself a view, you can add views and widgets to it to customize the the rows display. In the example below, we create a custom label for the row.</p>
<pre><code>var row = Ti.UI.createPickerRow();
var label = Ti.UI.createLabel({
    text:text,
    font:{fontSize:24,fontWeight:'bold'},
    color:text,
    width:'auto',
    height:'auto'
});
row.add(label);
picker.add(row);
</code></pre>
 */
Ti.UI.PickerRow = {

    /**
     * a dictionary with properties x and y to indicate the anchor point value. anchor specifies the position by which animation should occur. center is 0.5, 0.5
     * platforms: android, iphone, ipad
     * @type object
     * @since 0.9
     */
    anchorPoint:null,

    /**
     * read-only object with x and y properties of where the view is during animation
     * platforms: android, iphone, ipad
     * @type object
     * @since 0.9
     */
    animatedCenterPoint:null,

    /**
     * the background color of the view
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.9
     */
    backgroundColor:null,

    /**
     * the disabled background color of the view. (Android)
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.9
     */
    backgroundDisabledColor:null,

    /**
     * the disabled background image url of the view. (Android)
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.9
     */
    backgroundDisabledImage:null,

    /**
     * the focused background color of the view. focusable must be true for normal views. (Android)
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.9
     */
    backgroundFocusedColor:null,

    /**
     * the focused background image url of the view. focusable must be true for normal views. (Android)
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.9
     */
    backgroundFocusedImage:null,

    /**
     * a background gradient for the view with the properties: type,startPoint,endPoint,startRadius,endRadius,backfillStart,backfillEnd,colors.
     * platforms: android, iphone, ipad
     * @type object
     * @since 0.9
     */
    backgroundGradient:null,

    /**
     * the background image url of the view
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.9
     */
    backgroundImage:null,

    /**
     * End caps specify the portion of an image that should not be resized when an image is stretched. This technique is used to implement buttons and other resizable image-based interface elements. When a button with end caps is resized, the resizing occurs only in the middle of the button, in the region between the end caps. The end caps themselves keep their original size and appearance. This property specifies the size of the left end cap. The middle (stretchable) portion is assumed to be 1 pixel wide. The right end cap is therefore computed by adding the size of the left end cap and the middle portion together and then subtracting that value from the width of the image
     * platforms: android, iphone, ipad
     * @type float
     * @since 0.9
     */
    backgroundLeftCap:null,

    /**
     * the selected background color of the view. focusable must be true for normal views. (Android)
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.9
     */
    backgroundSelectedColor:null,

    /**
     * the selected background image url of the view. focusable must be true for normal views. (Android)
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.9
     */
    backgroundSelectedImage:null,

    /**
     * End caps specify the portion of an image that should not be resized when an image is stretched. This technique is used to implement buttons and other resizable image-based interface elements. When a button with end caps is resized, the resizing occurs only in the middle of the button, in the region between the end caps. The end caps themselves keep their original size and appearance. This property specifies the size of the top end cap. The middle (stretchable) portion is assumed to be 1 pixel wide. The bottom end cap is therefore computed by adding the size of the top end cap and the middle portion together and then subtracting that value from the height of the image
     * platforms: android, iphone, ipad
     * @type float
     * @since 0.9
     */
    backgroundTopCap:null,

    /**
     * the border color of the view
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.9
     */
    borderColor:null,

    /**
     * the border radius of the view
     * platforms: android, iphone, ipad
     * @type float
     * @since 0.9
     */
    borderRadius:null,

    /**
     * the border width of the view
     * platforms: android, iphone, ipad
     * @type float
     * @since 0.9
     */
    borderWidth:null,

    /**
     * property for the view bottom position. This position is relative to the view's parent. Can be either a float value or a dimension string ie 'auto' (default).
     * platforms: android, iphone, ipad
     * @type float,string
     * @since 0.9
     */
    bottom:null,

    /**
     * a dictionary with properties x and y to indicate the center of the views position relative to the parent view
     * platforms: android, iphone, ipad
     * @type object
     * @since 0.9
     */
    center:null,

    /**
     * Set true if you want a view to be focusable when navigating with the trackball or D-Pad. Default: false. (Android Only)
     * platforms: android
     * @type boolean
     * @since 0.9
     */
    focusable:null,

    /**
     * the font family
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.9
     */
    "font-family":null,

    /**
     * the font size
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.9
     */
    "font-size":null,

    /**
     * the font style, either normal or italics
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.9
     */
    "font-style":null,

    /**
     * the font weight, either normal or bold
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.9
     */
    "font-weight":null,

    /**
     * <p>the font size when displaying the text. ignored when using a custom view</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.9
     */
    fontSize:null,

    /**
     * property for the view height. Can be either a float value or a dimension string ie 'auto' (default).
     * platforms: android, iphone, ipad
     * @type float,string
     * @since 0.9
     */
    height:null,

    /**
     * property for the view left position. This position is relative to the view's parent. Can be either a float value or a dimension string ie 'auto' (default).
     * platforms: android, iphone, ipad
     * @type float,string
     * @since 0.9
     */
    left:null,

    /**
     * the opacity from 0.0-1.0
     * platforms: android, iphone, ipad
     * @type float
     * @since 0.9
     */
    opacity:null,

    /**
     * property for the view right position. This position is relative to the view's parent. Can be either a float value or a dimension string ie 'auto' (default).
     * platforms: android, iphone, ipad
     * @type float,string
     * @since 0.9
     */
    right:null,

    /**
     * <p>when used in the constructor, set the row to selected on initial display</p>
     * platforms: android, iphone, ipad
     * @type boolean
     * @since 0.9
     */
    selected:null,

    /**
     * the size of the view as a dictionary of width and height properties
     * platforms: android, iphone, ipad
     * @type object
     * @since 0.9
     */
    size:null,

    /**
     * One of Titanium.UI.Android.SOFT_KEYBOARD_DEFAULT_ON_FOCUS, Titanium.UI.Android.SOFT_KEYBOARD_HIDE_ON_FOCUS, or Titanium.UI.Android.SOFT_KEYBOARD_SHOW_ON_FOCUS. (Android only)
     * platforms: android
     * @type int
     * @since 0.9
     */
    softKeyboardOnFocus:null,

    /**
     * <p>the display text</p>
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.9
     */
    title:null,

    /**
     * property for the view top position. This position is relative to the view's parent. Can be either a float value or a dimension string ie 'auto' (default).
     * platforms: android, iphone, ipad
     * @type float,string
     * @since 0.9
     */
    top:null,

    /**
     * a boolean indicating if the view should receive touch events (true, default) or forward them to peers (false)
     * platforms: android, iphone, ipad
     * @type boolean
     * @since 0.9
     */
    touchEnabled:null,

    /**
     * the transformation matrix to apply to the view
     * platforms: android, iphone, ipad
     * @type object
     * @since 0.9
     */
    transform:null,

    /**
     * a boolean of the visibility of the view
     * platforms: android, iphone, ipad
     * @type boolean
     * @since 0.9
     */
    visible:null,

    /**
     * property for the view width. Can be either a float value or a dimension string ie 'auto' (default).
     * platforms: android, iphone, ipad
     * @type float,string
     * @since 0.9
     */
    width:null,

    /**
     * the z index position relative to other sibling views
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.9
     */
    zIndex:null,


    /**
     * add a child to the view hierarchy
     * platforms: android, iphone, ipad
     * @param {object} view the view to add to this views hiearchy
     * @returns void
     * @since 0.9
     */
    add:function(view) {
    },

    /**
     * add an event listener for the instance to receive view triggered events
     * platforms: android, iphone, ipad
     * @param {string} name name of the event
     * @param {function} callback callback function to invoke when the event is fired
     * @returns void
     * @since 0.9
     */
    addEventListener:function(name, callback) {
    },

    /**
     * animate the view
     * platforms: android, iphone, ipad
     * @param {object} obj either a dictionary of animation properties or an Animation object
     * @param {function} callback function to be invoked upon completion of the animation
     * @returns void
     * @since 0.9
     */
    animate:function(obj, callback) {
    },

    /**
     * fire a synthesized event to the views listener
     * platforms: android, iphone, ipad
     * @param {string} name name of the event
     * @param {object} event event object
     * @returns void
     * @since 0.9
     */
    fireEvent:function(name, event) {
    },

    /**
     * hide the view
     * platforms: android, iphone, ipad
     * @returns void
     * @since 0.9
     */
    hide:function() {
    },

    /**
     * remove a previously add view from the view hiearchy
     * platforms: android, iphone, ipad
     * @param {object} view the view to remove from this views hiearchy
     * @returns void
     * @since 0.9
     */
    remove:function(view) {
    },

    /**
     * remove a previously added event listener
     * platforms: android, iphone, ipad
     * @param {string} name name of the event
     * @param {function} callback callback function passed in addEventListener
     * @returns void
     * @since 0.9
     */
    removeEventListener:function(name, callback) {
    },

    /**
     * make the view visible
     * platforms: android, iphone, ipad
     * @returns void
     * @since 0.9
     */
    show:function() {
    },

    /**
     * return a Blob image of the rendered view
     * platforms: android, iphone, ipad
     * @param {function} f function to be invoked upon completion. if non-null, this method will be performed asynchronously. if null, it will be performed immediately
     * @since 0.9
     */
    toImage:function(f) {
    }
}

/**
 * Notes: <p>For iPhone, progress bar styles are constants defined in {@link Titanium.UI.iPhone.ProgressBarStyle}.</p>
 * platforms: android, iphone, ipad
 * @namespace <p>A Progress Bar is created by the method {@link Titanium.UI.createProgressBar}.</p>
 * @since 0.8
 * 
 * @example Simple Progress Bar
 * <p>In this example we create a progress bar with the min value of <tt>0</tt> and the max value of <tt>10</tt> and the current value of <tt>0</tt>.  The change the value of the progress bar to cause it to move, we would set the <tt>value</tt> property to a value between <tt>min</tt> and <tt>max</tt>.</p>
<pre><code>var pb=Titanium.UI.createProgressBar({
    width:250,
    min:0,
    max:10,
    value:0,
    color:'#fff',
    message:'Downloading 0 of 10',
    font:{fontSize:14, fontWeight:'bold'},
    style:Titanium.UI.iPhone.ProgressBarStyle.PLAIN,
});
</code></pre>
 */
Ti.UI.ProgressBar = {

    /**
     * <p>the color of the progress bar text</p>
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    color:null,

    /**
     * <p>the font object for the progress bar text</p>
     * platforms: android, iphone, ipad
     * @type object
     * @since 0.8
     */
    font:null,

    /**
     * <p>the maximum value of the progress bar</p>
     * platforms: android, iphone, ipad
     * @type float
     * @since 0.8
     */
    max:null,

    /**
     * <p>the progress bar message</p>
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    message:null,

    /**
     * <p>the minimum value of the progress bar</p>
     * platforms: android, iphone, ipad
     * @type float
     * @since 0.8
     */
    min:null,

    /**
     * <p>the style of the progress bar</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.8
     */
    style:null,

    /**
     * <p>the current value of the progress bar</p>
     * platforms: android, iphone, ipad
     * @type float
     * @since 0.8
     */
    value:null,



}

/**
 * Notes: <p>If your scrollable region fits within the size of the content area the scroll view will not scroll.</p>
 * platforms: android, iphone, ipad
 * @namespace <p>A Scroll View is used to create a scrollable region of content.  Views added to the Scroll View will be scrolled based on the content size of the Scroll View. The Scroll View is created by the method {@link Titanium.UI.createScrollView}. Note: In Android, Scroll Views can only scroll in one direction, either vertical or horizontal, but not both at the same time. See the {@link Titanium.UI.ScrollView.scrollType} property</p>
 * @since 0.9
 * 
 * @example Simple Scroll View
 * <p>Create a scroll view with content.</p>
<pre><code>var scrollView = Titanium.UI.createScrollView({
    contentWidth:'auto',
    contentHeight:'auto',
    top:0,
    showVerticalScrollIndicator:true,
    showHorizontalScrollIndicator:true
});
var view = Ti.UI.createView({
    backgroundColor:'#336699',
    borderRadius:10,
    width:300,
    height:2000,
    top:10
});
scrollView.add(view);
Titanium.UI.currentWindow.add(scrollView);
</code></pre>
 */
Ti.UI.ScrollView = {

    /**
     * a dictionary with properties x and y to indicate the anchor point value. anchor specifies the position by which animation should occur. center is 0.5, 0.5
     * platforms: android, iphone, ipad
     * @type object
     * @since 0.9
     */
    anchorPoint:null,

    /**
     * read-only object with x and y properties of where the view is during animation
     * platforms: android, iphone, ipad
     * @type object
     * @since 0.9
     */
    animatedCenterPoint:null,

    /**
     * the background color of the view
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.9
     */
    backgroundColor:null,

    /**
     * the disabled background color of the view. (Android)
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.9
     */
    backgroundDisabledColor:null,

    /**
     * the disabled background image url of the view. (Android)
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.9
     */
    backgroundDisabledImage:null,

    /**
     * the focused background color of the view. focusable must be true for normal views. (Android)
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.9
     */
    backgroundFocusedColor:null,

    /**
     * the focused background image url of the view. focusable must be true for normal views. (Android)
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.9
     */
    backgroundFocusedImage:null,

    /**
     * a background gradient for the view with the properties: type,startPoint,endPoint,startRadius,endRadius,backfillStart,backfillEnd,colors.
     * platforms: android, iphone, ipad
     * @type object
     * @since 0.9
     */
    backgroundGradient:null,

    /**
     * the background image url of the view
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.9
     */
    backgroundImage:null,

    /**
     * End caps specify the portion of an image that should not be resized when an image is stretched. This technique is used to implement buttons and other resizable image-based interface elements. When a button with end caps is resized, the resizing occurs only in the middle of the button, in the region between the end caps. The end caps themselves keep their original size and appearance. This property specifies the size of the left end cap. The middle (stretchable) portion is assumed to be 1 pixel wide. The right end cap is therefore computed by adding the size of the left end cap and the middle portion together and then subtracting that value from the width of the image
     * platforms: android, iphone, ipad
     * @type float
     * @since 0.9
     */
    backgroundLeftCap:null,

    /**
     * the selected background color of the view. focusable must be true for normal views. (Android)
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.9
     */
    backgroundSelectedColor:null,

    /**
     * the selected background image url of the view. focusable must be true for normal views. (Android)
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.9
     */
    backgroundSelectedImage:null,

    /**
     * End caps specify the portion of an image that should not be resized when an image is stretched. This technique is used to implement buttons and other resizable image-based interface elements. When a button with end caps is resized, the resizing occurs only in the middle of the button, in the region between the end caps. The end caps themselves keep their original size and appearance. This property specifies the size of the top end cap. The middle (stretchable) portion is assumed to be 1 pixel wide. The bottom end cap is therefore computed by adding the size of the top end cap and the middle portion together and then subtracting that value from the height of the image
     * platforms: android, iphone, ipad
     * @type float
     * @since 0.9
     */
    backgroundTopCap:null,

    /**
     * the border color of the view
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.9
     */
    borderColor:null,

    /**
     * the border radius of the view
     * platforms: android, iphone, ipad
     * @type float
     * @since 0.9
     */
    borderRadius:null,

    /**
     * the border width of the view
     * platforms: android, iphone, ipad
     * @type float
     * @since 0.9
     */
    borderWidth:null,

    /**
     * property for the view bottom position. This position is relative to the view's parent. Can be either a float value or a dimension string ie 'auto' (default).
     * platforms: android, iphone, ipad
     * @type float,string
     * @since 0.9
     */
    bottom:null,

    /**
     * <p>(iPhone only) boolean to indicate if the scroll view can cancel subview touches in order to scroll instead. Default of true</p>
     * platforms: android, iphone, ipad
     * @type boolean
     * @since 0.9
     */
    canCancelEvents:null,

    /**
     * a dictionary with properties x and y to indicate the center of the views position relative to the parent view
     * platforms: android, iphone, ipad
     * @type object
     * @since 0.9
     */
    center:null,

    /**
     * <p>the height of the scrollable area</p>
     * platforms: android, iphone, ipad
     * @type float
     * @since 0.9
     */
    contentHeight:null,

    /**
     * <p>an object (with x and y properties) to indicate the offset of the content area</p>
     * platforms: android, iphone, ipad
     * @type object
     * @since 0.9
     */
    contentOffset:null,

    /**
     * <p>the width of the scrollable area</p>
     * platforms: android, iphone, ipad
     * @type float
     * @since 0.9
     */
    contentWidth:null,

    /**
     * <p>boolean to control bounce during scrolling</p>
     * platforms: android, iphone, ipad
     * @type boolean
     * @since 0.9
     */
    disableBounce:null,

    /**
     * Set true if you want a view to be focusable when navigating with the trackball or D-Pad. Default: false. (Android Only)
     * platforms: android
     * @type boolean
     * @since 0.9
     */
    focusable:null,

    /**
     * the font family
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.9
     */
    "font-family":null,

    /**
     * the font size
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.9
     */
    "font-size":null,

    /**
     * the font style, either normal or italics
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.9
     */
    "font-style":null,

    /**
     * the font weight, either normal or bold
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.9
     */
    "font-weight":null,

    /**
     * property for the view height. Can be either a float value or a dimension string ie 'auto' (default).
     * platforms: android, iphone, ipad
     * @type float,string
     * @since 0.9
     */
    height:null,

    /**
     * <p>boolean to control the horizontal bounce during scrolling</p>
     * platforms: android, iphone, ipad
     * @type boolean
     * @since 0.9
     */
    horizontalBounce:null,

    /**
     * property for the view left position. This position is relative to the view's parent. Can be either a float value or a dimension string ie 'auto' (default).
     * platforms: android, iphone, ipad
     * @type float,string
     * @since 0.9
     */
    left:null,

    /**
     * <p>the maximum scale of the content</p>
     * platforms: android, iphone, ipad
     * @type float
     * @since 0.9
     */
    maxZoomScale:null,

    /**
     * <p>the minimum scale of the content</p>
     * platforms: android, iphone, ipad
     * @type float
     * @since 0.9
     */
    minZoomScale:null,

    /**
     * the opacity from 0.0-1.0
     * platforms: android, iphone, ipad
     * @type float
     * @since 0.9
     */
    opacity:null,

    /**
     * property for the view right position. This position is relative to the view's parent. Can be either a float value or a dimension string ie 'auto' (default).
     * platforms: android, iphone, ipad
     * @type float,string
     * @since 0.9
     */
    right:null,

    /**
     * <p>(Android only) the type of ScrollView: "vertical" or "horizontal"</p>
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.9
     */
    scrollType:null,

    /**
     * <p>boolean to indicate whether the horizontal scroll indicator is visible</p>
     * platforms: android, iphone, ipad
     * @type boolean
     * @since 0.9
     */
    showHorizontalScrollIndicator:null,

    /**
     * <p>boolean to indicate whether the vertical scroll indicator is visible</p>
     * platforms: android, iphone, ipad
     * @type boolean
     * @since 0.9
     */
    showVerticalScrollIndicator:null,

    /**
     * the size of the view as a dictionary of width and height properties
     * platforms: android, iphone, ipad
     * @type object
     * @since 0.9
     */
    size:null,

    /**
     * One of Titanium.UI.Android.SOFT_KEYBOARD_DEFAULT_ON_FOCUS, Titanium.UI.Android.SOFT_KEYBOARD_HIDE_ON_FOCUS, or Titanium.UI.Android.SOFT_KEYBOARD_SHOW_ON_FOCUS. (Android only)
     * platforms: android
     * @type int
     * @since 0.9
     */
    softKeyboardOnFocus:null,

    /**
     * property for the view top position. This position is relative to the view's parent. Can be either a float value or a dimension string ie 'auto' (default).
     * platforms: android, iphone, ipad
     * @type float,string
     * @since 0.9
     */
    top:null,

    /**
     * a boolean indicating if the view should receive touch events (true, default) or forward them to peers (false)
     * platforms: android, iphone, ipad
     * @type boolean
     * @since 0.9
     */
    touchEnabled:null,

    /**
     * the transformation matrix to apply to the view
     * platforms: android, iphone, ipad
     * @type object
     * @since 0.9
     */
    transform:null,

    /**
     * <p>boolean to control the vertical bounce during scrolling</p>
     * platforms: android, iphone, ipad
     * @type boolean
     * @since 0.9
     */
    verticalBounce:null,

    /**
     * a boolean of the visibility of the view
     * platforms: android, iphone, ipad
     * @type boolean
     * @since 0.9
     */
    visible:null,

    /**
     * property for the view width. Can be either a float value or a dimension string ie 'auto' (default).
     * platforms: android, iphone, ipad
     * @type float,string
     * @since 0.9
     */
    width:null,

    /**
     * the z index position relative to other sibling views
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.9
     */
    zIndex:null,

    /**
     * <p>set the zoom scale for the current content area</p>
     * platforms: android, iphone, ipad
     * @type float
     * @since 0.9
     */
    zoomScale:null,


    /**
     * add a child to the view hierarchy
     * platforms: android, iphone, ipad
     * @param {object} view the view to add to this views hiearchy
     * @returns void
     * @since 0.9
     */
    add:function(view) {
    },

    /**
     * add an event listener for the instance to receive view triggered events
     * platforms: android, iphone, ipad
     * @param {string} name name of the event
     * @param {function} callback callback function to invoke when the event is fired
     * @returns void
     * @since 0.9
     */
    addEventListener:function(name, callback) {
    },

    /**
     * animate the view
     * platforms: android, iphone, ipad
     * @param {object} obj either a dictionary of animation properties or an Animation object
     * @param {function} callback function to be invoked upon completion of the animation
     * @returns void
     * @since 0.9
     */
    animate:function(obj, callback) {
    },

    /**
     * fire a synthesized event to the views listener
     * platforms: android, iphone, ipad
     * @param {string} name name of the event
     * @param {object} event event object
     * @returns void
     * @since 0.9
     */
    fireEvent:function(name, event) {
    },

    /**
     * hide the view
     * platforms: android, iphone, ipad
     * @returns void
     * @since 0.9
     */
    hide:function() {
    },

    /**
     * remove a previously add view from the view hiearchy
     * platforms: android, iphone, ipad
     * @param {object} view the view to remove from this views hiearchy
     * @returns void
     * @since 0.9
     */
    remove:function(view) {
    },

    /**
     * remove a previously added event listener
     * platforms: android, iphone, ipad
     * @param {string} name name of the event
     * @param {function} callback callback function passed in addEventListener
     * @returns void
     * @since 0.9
     */
    removeEventListener:function(name, callback) {
    },

    /**
     * <p>scrollTo a particular point</p>
     * platforms: android, iphone, ipad
     * @param {float} x the x point within the view
     * @param {float} y the y point within the view
     * @returns void
     * @since 0.9
     */
    scrollTo:function(x, y) {
    },

    /**
     * make the view visible
     * platforms: android, iphone, ipad
     * @returns void
     * @since 0.9
     */
    show:function() {
    },

    /**
     * return a Blob image of the rendered view
     * platforms: android, iphone, ipad
     * @param {function} f function to be invoked upon completion. if non-null, this method will be performed asynchronously. if null, it will be performed immediately
     * @since 0.9
     */
    toImage:function(f) {
    }
}

/**
 * platforms: android, iphone, ipad
 * @namespace <p>The Scrollable View provides a view that supports horizontal scrolling on one or more views in a gesture motion.  The Scrollable View also optionally supports a visual paging control to indicate the page that the view is visible. The Scrollable View is created by the method {@link Titanium.UI.createScrollableView}.</p>
 * @since 0.8
 * 
 * @example Simple Scrollable View with 3 Views
 * <p>Create three views and place each into a scrollable view.</p>
<pre><code>var view1 = Titanium.UI.createView({backgroundColor:'#123'});
var view2 = Titanium.UI.createView({backgroundColor:'#123'});
var view3 = Titanium.UI.createView({backgroundColor:'#123'});
var scrollView = Titanium.UI.createScrollableView({
    views:[view1,view2,view3],
    showPagingControl:true
});
win.add(scrollView);
</code></pre>
 */
Ti.UI.ScrollableView = {

    /**
     * a dictionary with properties x and y to indicate the anchor point value. anchor specifies the position by which animation should occur. center is 0.5, 0.5
     * platforms: android, iphone, ipad
     * @type object
     * @since 0.8
     */
    anchorPoint:null,

    /**
     * read-only object with x and y properties of where the view is during animation
     * platforms: android, iphone, ipad
     * @type object
     * @since 0.8
     */
    animatedCenterPoint:null,

    /**
     * the background color of the view
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    backgroundColor:null,

    /**
     * the disabled background color of the view. (Android)
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    backgroundDisabledColor:null,

    /**
     * the disabled background image url of the view. (Android)
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    backgroundDisabledImage:null,

    /**
     * the focused background color of the view. focusable must be true for normal views. (Android)
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    backgroundFocusedColor:null,

    /**
     * the focused background image url of the view. focusable must be true for normal views. (Android)
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    backgroundFocusedImage:null,

    /**
     * a background gradient for the view with the properties: type,startPoint,endPoint,startRadius,endRadius,backfillStart,backfillEnd,colors.
     * platforms: android, iphone, ipad
     * @type object
     * @since 0.8
     */
    backgroundGradient:null,

    /**
     * the background image url of the view
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    backgroundImage:null,

    /**
     * End caps specify the portion of an image that should not be resized when an image is stretched. This technique is used to implement buttons and other resizable image-based interface elements. When a button with end caps is resized, the resizing occurs only in the middle of the button, in the region between the end caps. The end caps themselves keep their original size and appearance. This property specifies the size of the left end cap. The middle (stretchable) portion is assumed to be 1 pixel wide. The right end cap is therefore computed by adding the size of the left end cap and the middle portion together and then subtracting that value from the width of the image
     * platforms: android, iphone, ipad
     * @type float
     * @since 0.8
     */
    backgroundLeftCap:null,

    /**
     * the selected background color of the view. focusable must be true for normal views. (Android)
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    backgroundSelectedColor:null,

    /**
     * the selected background image url of the view. focusable must be true for normal views. (Android)
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    backgroundSelectedImage:null,

    /**
     * End caps specify the portion of an image that should not be resized when an image is stretched. This technique is used to implement buttons and other resizable image-based interface elements. When a button with end caps is resized, the resizing occurs only in the middle of the button, in the region between the end caps. The end caps themselves keep their original size and appearance. This property specifies the size of the top end cap. The middle (stretchable) portion is assumed to be 1 pixel wide. The bottom end cap is therefore computed by adding the size of the top end cap and the middle portion together and then subtracting that value from the height of the image
     * platforms: android, iphone, ipad
     * @type float
     * @since 0.8
     */
    backgroundTopCap:null,

    /**
     * the border color of the view
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    borderColor:null,

    /**
     * the border radius of the view
     * platforms: android, iphone, ipad
     * @type float
     * @since 0.8
     */
    borderRadius:null,

    /**
     * the border width of the view
     * platforms: android, iphone, ipad
     * @type float
     * @since 0.8
     */
    borderWidth:null,

    /**
     * property for the view bottom position. This position is relative to the view's parent. Can be either a float value or a dimension string ie 'auto' (default).
     * platforms: android, iphone, ipad
     * @type float,string
     * @since 0.8
     */
    bottom:null,

    /**
     * <p>The number of views to cache (prerender).  Views are rendered in the range (currentPage +/- (cacheSize - 1)/2), ROUNDED DOWN for even values (i.e. cacheSize=4 renders 3 views into the cache).  Keep in mind that improved performance (larger cache) will lead to faster performance, but more memory usage.  iOS only.</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.8
     */
    cacheSize:null,

    /**
     * a dictionary with properties x and y to indicate the center of the views position relative to the parent view
     * platforms: android, iphone, ipad
     * @type object
     * @since 0.8
     */
    center:null,

    /**
     * <p>the current page visible in the view</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.8
     */
    currentPage:null,

    /**
     * Set true if you want a view to be focusable when navigating with the trackball or D-Pad. Default: false. (Android Only)
     * platforms: android
     * @type boolean
     * @since 0.8
     */
    focusable:null,

    /**
     * the font family
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    "font-family":null,

    /**
     * the font size
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    "font-size":null,

    /**
     * the font style, either normal or italics
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    "font-style":null,

    /**
     * the font weight, either normal or bold
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    "font-weight":null,

    /**
     * property for the view height. Can be either a float value or a dimension string ie 'auto' (default).
     * platforms: android, iphone, ipad
     * @type float,string
     * @since 0.8
     */
    height:null,

    /**
     * property for the view left position. This position is relative to the view's parent. Can be either a float value or a dimension string ie 'auto' (default).
     * platforms: android, iphone, ipad
     * @type float,string
     * @since 0.8
     */
    left:null,

    /**
     * <p>the maximum zoom scale for the view</p>
     * platforms: android, iphone, ipad
     * @type float
     * @since 0.8
     */
    maxZoomScale:null,

    /**
     * <p>the minimum zoom scale for the view</p>
     * platforms: android, iphone, ipad
     * @type float
     * @since 0.8
     */
    minZoomScale:null,

    /**
     * the opacity from 0.0-1.0
     * platforms: android, iphone, ipad
     * @type float
     * @since 0.8
     */
    opacity:null,

    /**
     * <p>the color of the paging control. defaults to black.</p>
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    pagingControlColor:null,

    /**
     * <p>the height in pixels of the paging control, if visible. defaults to 20</p>
     * platforms: android, iphone, ipad
     * @type float
     * @since 0.8
     */
    pagingControlHeight:null,

    /**
     * property for the view right position. This position is relative to the view's parent. Can be either a float value or a dimension string ie 'auto' (default).
     * platforms: android, iphone, ipad
     * @type float,string
     * @since 0.8
     */
    right:null,

    /**
     * <p>boolean to indicate whether the paging control UI is visible</p>
     * platforms: android, iphone, ipad
     * @type boolean
     * @since 0.8
     */
    showPagingControl:null,

    /**
     * the size of the view as a dictionary of width and height properties
     * platforms: android, iphone, ipad
     * @type object
     * @since 0.8
     */
    size:null,

    /**
     * One of Titanium.UI.Android.SOFT_KEYBOARD_DEFAULT_ON_FOCUS, Titanium.UI.Android.SOFT_KEYBOARD_HIDE_ON_FOCUS, or Titanium.UI.Android.SOFT_KEYBOARD_SHOW_ON_FOCUS. (Android only)
     * platforms: android
     * @type int
     * @since 0.8
     */
    softKeyboardOnFocus:null,

    /**
     * property for the view top position. This position is relative to the view's parent. Can be either a float value or a dimension string ie 'auto' (default).
     * platforms: android, iphone, ipad
     * @type float,string
     * @since 0.8
     */
    top:null,

    /**
     * a boolean indicating if the view should receive touch events (true, default) or forward them to peers (false)
     * platforms: android, iphone, ipad
     * @type boolean
     * @since 0.8
     */
    touchEnabled:null,

    /**
     * the transformation matrix to apply to the view
     * platforms: android, iphone, ipad
     * @type object
     * @since 0.8
     */
    transform:null,

    /**
     * <p>array of view objects to place in the view</p>
     * platforms: android, iphone, ipad
     * @type array
     * @since 0.8
     */
    views:null,

    /**
     * a boolean of the visibility of the view
     * platforms: android, iphone, ipad
     * @type boolean
     * @since 0.8
     */
    visible:null,

    /**
     * property for the view width. Can be either a float value or a dimension string ie 'auto' (default).
     * platforms: android, iphone, ipad
     * @type float,string
     * @since 0.8
     */
    width:null,

    /**
     * the z index position relative to other sibling views
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.8
     */
    zIndex:null,


    /**
     * add a child to the view hierarchy
     * platforms: android, iphone, ipad
     * @param {object} view the view to add to this views hiearchy
     * @returns void
     * @since 0.8
     */
    add:function(view) {
    },

    /**
     * add an event listener for the instance to receive view triggered events
     * platforms: android, iphone, ipad
     * @param {string} name name of the event
     * @param {function} callback callback function to invoke when the event is fired
     * @returns void
     * @since 0.8
     */
    addEventListener:function(name, callback) {
    },

    /**
     * <p>add a new view to the Scrollable View</p>
     * platforms: android, iphone, ipad
     * @param {object} view the view to add
     * @returns void
     * @since 0.8
     */
    addView:function(view) {
    },

    /**
     * animate the view
     * platforms: android, iphone, ipad
     * @param {object} obj either a dictionary of animation properties or an Animation object
     * @param {function} callback function to be invoked upon completion of the animation
     * @returns void
     * @since 0.8
     */
    animate:function(obj, callback) {
    },

    /**
     * fire a synthesized event to the views listener
     * platforms: android, iphone, ipad
     * @param {string} name name of the event
     * @param {object} event event object
     * @returns void
     * @since 0.8
     */
    fireEvent:function(name, event) {
    },

    /**
     * hide the view
     * platforms: android, iphone, ipad
     * @returns void
     * @since 0.8
     */
    hide:function() {
    },

    /**
     * remove a previously add view from the view hiearchy
     * platforms: android, iphone, ipad
     * @param {object} view the view to remove from this views hiearchy
     * @returns void
     * @since 0.8
     */
    remove:function(view) {
    },

    /**
     * remove a previously added event listener
     * platforms: android, iphone, ipad
     * @param {string} name name of the event
     * @param {function} callback callback function passed in addEventListener
     * @returns void
     * @since 0.8
     */
    removeEventListener:function(name, callback) {
    },

    /**
     * <p>remove an existing view from the Scrollable View</p>
     * platforms: android, iphone, ipad
     * @param {object} view the view to remove
     * @returns void
     * @since 0.8
     */
    removeView:function(view) {
    },

    /**
     * <p>scroll to a specific view</p>
     * platforms: android, iphone, ipad
     * @param {int,object} view either an integer index or the view object to bring into view as the currentPage
     * @returns void
     * @since 0.8
     */
    scrollToView:function(view) {
    },

    /**
     * make the view visible
     * platforms: android, iphone, ipad
     * @returns void
     * @since 0.8
     */
    show:function() {
    },

    /**
     * return a Blob image of the rendered view
     * platforms: android, iphone, ipad
     * @param {function} f function to be invoked upon completion. if non-null, this method will be performed asynchronously. if null, it will be performed immediately
     * @since 0.8
     */
    toImage:function(f) {
    }
}

/**
 * platforms: android, iphone, ipad
 * @namespace <p>A Search Bar is created by the method {@link Titanium.UI.createSearchBar}.</p>
 * @since 0.8
 * 
 * @example Simple Search Bar
 * <pre><code>var search = Titanium.UI.createSearchBar({
    barColor:'#000', 
    showCancel:true,
    height:43,
    top:0,
});
</code></pre>
 */
Ti.UI.SearchBar = {

    /**
     * a dictionary with properties x and y to indicate the anchor point value. anchor specifies the position by which animation should occur. center is 0.5, 0.5
     * platforms: android, iphone, ipad
     * @type object
     * @since 0.8
     */
    anchorPoint:null,

    /**
     * read-only object with x and y properties of where the view is during animation
     * platforms: android, iphone, ipad
     * @type object
     * @since 0.8
     */
    animatedCenterPoint:null,

    /**
     * <p>One of {@link Titanium.UI.TEXT_AUTOCAPITALIZATION_NONE}, {@link Titanium.UI.TEXT_AUTOCAPITALIZATION_WORDS}, {@link Titanium.UI.TEXT_AUTOCAPITALIZATION_SENTENCES}, or {@link Titanium.UI.TEXT_AUTOCAPITALIZATION_ALL} to indicate how the field should be capitalized during typing.</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.8
     */
    autocapitalization:null,

    /**
     * <p>boolean to indicate if the text in the field should be autocorrected as typed</p>
     * platforms: android, iphone, ipad
     * @type boolean
     * @since 0.8
     */
    autocorrect:null,

    /**
     * the background color of the view
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    backgroundColor:null,

    /**
     * the disabled background color of the view. (Android)
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    backgroundDisabledColor:null,

    /**
     * the disabled background image url of the view. (Android)
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    backgroundDisabledImage:null,

    /**
     * the focused background color of the view. focusable must be true for normal views. (Android)
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    backgroundFocusedColor:null,

    /**
     * the focused background image url of the view. focusable must be true for normal views. (Android)
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    backgroundFocusedImage:null,

    /**
     * a background gradient for the view with the properties: type,startPoint,endPoint,startRadius,endRadius,backfillStart,backfillEnd,colors.
     * platforms: android, iphone, ipad
     * @type object
     * @since 0.8
     */
    backgroundGradient:null,

    /**
     * the background image url of the view
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    backgroundImage:null,

    /**
     * End caps specify the portion of an image that should not be resized when an image is stretched. This technique is used to implement buttons and other resizable image-based interface elements. When a button with end caps is resized, the resizing occurs only in the middle of the button, in the region between the end caps. The end caps themselves keep their original size and appearance. This property specifies the size of the left end cap. The middle (stretchable) portion is assumed to be 1 pixel wide. The right end cap is therefore computed by adding the size of the left end cap and the middle portion together and then subtracting that value from the width of the image
     * platforms: android, iphone, ipad
     * @type float
     * @since 0.8
     */
    backgroundLeftCap:null,

    /**
     * the selected background color of the view. focusable must be true for normal views. (Android)
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    backgroundSelectedColor:null,

    /**
     * the selected background image url of the view. focusable must be true for normal views. (Android)
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    backgroundSelectedImage:null,

    /**
     * End caps specify the portion of an image that should not be resized when an image is stretched. This technique is used to implement buttons and other resizable image-based interface elements. When a button with end caps is resized, the resizing occurs only in the middle of the button, in the region between the end caps. The end caps themselves keep their original size and appearance. This property specifies the size of the top end cap. The middle (stretchable) portion is assumed to be 1 pixel wide. The bottom end cap is therefore computed by adding the size of the top end cap and the middle portion together and then subtracting that value from the height of the image
     * platforms: android, iphone, ipad
     * @type float
     * @since 0.8
     */
    backgroundTopCap:null,

    /**
     * <p>the bar color of the search bar view</p>
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    barColor:null,

    /**
     * the border color of the view
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    borderColor:null,

    /**
     * the border radius of the view
     * platforms: android, iphone, ipad
     * @type float
     * @since 0.8
     */
    borderRadius:null,

    /**
     * the border width of the view
     * platforms: android, iphone, ipad
     * @type float
     * @since 0.8
     */
    borderWidth:null,

    /**
     * property for the view bottom position. This position is relative to the view's parent. Can be either a float value or a dimension string ie 'auto' (default).
     * platforms: android, iphone, ipad
     * @type float,string
     * @since 0.8
     */
    bottom:null,

    /**
     * a dictionary with properties x and y to indicate the center of the views position relative to the parent view
     * platforms: android, iphone, ipad
     * @type object
     * @since 0.8
     */
    center:null,

    /**
     * Set true if you want a view to be focusable when navigating with the trackball or D-Pad. Default: false. (Android Only)
     * platforms: android
     * @type boolean
     * @since 0.8
     */
    focusable:null,

    /**
     * the font family
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    "font-family":null,

    /**
     * the font size
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    "font-size":null,

    /**
     * the font style, either normal or italics
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    "font-style":null,

    /**
     * the font weight, either normal or bold
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    "font-weight":null,

    /**
     * property for the view height. Can be either a float value or a dimension string ie 'auto' (default).
     * platforms: android, iphone, ipad
     * @type float,string
     * @since 0.8
     */
    height:null,

    /**
     * <p>the text to show when the search bar field is not focused</p>
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    hintText:null,

    /**
     * <p>the key in the locale file to use for the hintText property</p>
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    hinttextid:null,

    /**
     * <p>the keyboard type constant to use when the field is focused</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.8
     */
    keyboardType:null,

    /**
     * property for the view left position. This position is relative to the view's parent. Can be either a float value or a dimension string ie 'auto' (default).
     * platforms: android, iphone, ipad
     * @type float,string
     * @since 0.8
     */
    left:null,

    /**
     * the opacity from 0.0-1.0
     * platforms: android, iphone, ipad
     * @type float
     * @since 0.8
     */
    opacity:null,

    /**
     * <p>a single line of text displayed at the top of the search bar</p>
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    prompt:null,

    /**
     * <p>the key in the locale file to use for the prompt property</p>
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    promptid:null,

    /**
     * property for the view right position. This position is relative to the view's parent. Can be either a float value or a dimension string ie 'auto' (default).
     * platforms: android, iphone, ipad
     * @type float,string
     * @since 0.8
     */
    right:null,

    /**
     * <p>boolean indicates whether the cancel button is displayed</p>
     * platforms: android, iphone, ipad
     * @type boolean
     * @since 0.8
     */
    showCancel:null,

    /**
     * the size of the view as a dictionary of width and height properties
     * platforms: android, iphone, ipad
     * @type object
     * @since 0.8
     */
    size:null,

    /**
     * One of Titanium.UI.Android.SOFT_KEYBOARD_DEFAULT_ON_FOCUS, Titanium.UI.Android.SOFT_KEYBOARD_HIDE_ON_FOCUS, or Titanium.UI.Android.SOFT_KEYBOARD_SHOW_ON_FOCUS. (Android only)
     * platforms: android
     * @type int
     * @since 0.8
     */
    softKeyboardOnFocus:null,

    /**
     * property for the view top position. This position is relative to the view's parent. Can be either a float value or a dimension string ie 'auto' (default).
     * platforms: android, iphone, ipad
     * @type float,string
     * @since 0.8
     */
    top:null,

    /**
     * a boolean indicating if the view should receive touch events (true, default) or forward them to peers (false)
     * platforms: android, iphone, ipad
     * @type boolean
     * @since 0.8
     */
    touchEnabled:null,

    /**
     * the transformation matrix to apply to the view
     * platforms: android, iphone, ipad
     * @type object
     * @since 0.8
     */
    transform:null,

    /**
     * <p>the value of the search bar</p>
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    value:null,

    /**
     * a boolean of the visibility of the view
     * platforms: android, iphone, ipad
     * @type boolean
     * @since 0.8
     */
    visible:null,

    /**
     * property for the view width. Can be either a float value or a dimension string ie 'auto' (default).
     * platforms: android, iphone, ipad
     * @type float,string
     * @since 0.8
     */
    width:null,

    /**
     * the z index position relative to other sibling views
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.8
     */
    zIndex:null,


    /**
     * add a child to the view hierarchy
     * platforms: android, iphone, ipad
     * @param {object} view the view to add to this views hiearchy
     * @returns void
     * @since 0.8
     */
    add:function(view) {
    },

    /**
     * add an event listener for the instance to receive view triggered events
     * platforms: android, iphone, ipad
     * @param {string} name name of the event
     * @param {function} callback callback function to invoke when the event is fired
     * @returns void
     * @since 0.8
     */
    addEventListener:function(name, callback) {
    },

    /**
     * animate the view
     * platforms: android, iphone, ipad
     * @param {object} obj either a dictionary of animation properties or an Animation object
     * @param {function} callback function to be invoked upon completion of the animation
     * @returns void
     * @since 0.8
     */
    animate:function(obj, callback) {
    },

    /**
     * <p>called to force the search bar to lose focus</p>
     * platforms: android, iphone, ipad
     * @returns void
     * @since 0.8
     */
    blur:function() {
    },

    /**
     * fire a synthesized event to the views listener
     * platforms: android, iphone, ipad
     * @param {string} name name of the event
     * @param {object} event event object
     * @returns void
     * @since 0.8
     */
    fireEvent:function(name, event) {
    },

    /**
     * <p>called to force the search bar to focus</p>
     * platforms: android, iphone, ipad
     * @returns void
     * @since 0.8
     */
    focus:function() {
    },

    /**
     * hide the view
     * platforms: android, iphone, ipad
     * @returns void
     * @since 0.8
     */
    hide:function() {
    },

    /**
     * remove a previously add view from the view hiearchy
     * platforms: android, iphone, ipad
     * @param {object} view the view to remove from this views hiearchy
     * @returns void
     * @since 0.8
     */
    remove:function(view) {
    },

    /**
     * remove a previously added event listener
     * platforms: android, iphone, ipad
     * @param {string} name name of the event
     * @param {function} callback callback function passed in addEventListener
     * @returns void
     * @since 0.8
     */
    removeEventListener:function(name, callback) {
    },

    /**
     * make the view visible
     * platforms: android, iphone, ipad
     * @returns void
     * @since 0.8
     */
    show:function() {
    },

    /**
     * return a Blob image of the rendered view
     * platforms: android, iphone, ipad
     * @param {function} f function to be invoked upon completion. if non-null, this method will be performed asynchronously. if null, it will be performed immediately
     * @since 0.8
     */
    toImage:function(f) {
    }
}

/**
 * platforms: android, iphone, ipad
 * @namespace <p>A Slider is created by the method {@link Titanium.UI.createSlider}.</p>
 * @since 0.8
 */
Ti.UI.Slider = {

    /**
     * a dictionary with properties x and y to indicate the anchor point value. anchor specifies the position by which animation should occur. center is 0.5, 0.5
     * platforms: android, iphone, ipad
     * @type object
     * @since 0.8
     */
    anchorPoint:null,

    /**
     * read-only object with x and y properties of where the view is during animation
     * platforms: android, iphone, ipad
     * @type object
     * @since 0.8
     */
    animatedCenterPoint:null,

    /**
     * the background color of the view
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    backgroundColor:null,

    /**
     * the disabled background color of the view. (Android)
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    backgroundDisabledColor:null,

    /**
     * the disabled background image url of the view. (Android)
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    backgroundDisabledImage:null,

    /**
     * the focused background color of the view. focusable must be true for normal views. (Android)
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    backgroundFocusedColor:null,

    /**
     * the focused background image url of the view. focusable must be true for normal views. (Android)
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    backgroundFocusedImage:null,

    /**
     * a background gradient for the view with the properties: type,startPoint,endPoint,startRadius,endRadius,backfillStart,backfillEnd,colors.
     * platforms: android, iphone, ipad
     * @type object
     * @since 0.8
     */
    backgroundGradient:null,

    /**
     * the background image url of the view
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    backgroundImage:null,

    /**
     * End caps specify the portion of an image that should not be resized when an image is stretched. This technique is used to implement buttons and other resizable image-based interface elements. When a button with end caps is resized, the resizing occurs only in the middle of the button, in the region between the end caps. The end caps themselves keep their original size and appearance. This property specifies the size of the left end cap. The middle (stretchable) portion is assumed to be 1 pixel wide. The right end cap is therefore computed by adding the size of the left end cap and the middle portion together and then subtracting that value from the width of the image
     * platforms: android, iphone, ipad
     * @type float
     * @since 0.8
     */
    backgroundLeftCap:null,

    /**
     * the selected background color of the view. focusable must be true for normal views. (Android)
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    backgroundSelectedColor:null,

    /**
     * the selected background image url of the view. focusable must be true for normal views. (Android)
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    backgroundSelectedImage:null,

    /**
     * End caps specify the portion of an image that should not be resized when an image is stretched. This technique is used to implement buttons and other resizable image-based interface elements. When a button with end caps is resized, the resizing occurs only in the middle of the button, in the region between the end caps. The end caps themselves keep their original size and appearance. This property specifies the size of the top end cap. The middle (stretchable) portion is assumed to be 1 pixel wide. The bottom end cap is therefore computed by adding the size of the top end cap and the middle portion together and then subtracting that value from the height of the image
     * platforms: android, iphone, ipad
     * @type float
     * @since 0.8
     */
    backgroundTopCap:null,

    /**
     * the border color of the view
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    borderColor:null,

    /**
     * the border radius of the view
     * platforms: android, iphone, ipad
     * @type float
     * @since 0.8
     */
    borderRadius:null,

    /**
     * the border width of the view
     * platforms: android, iphone, ipad
     * @type float
     * @since 0.8
     */
    borderWidth:null,

    /**
     * property for the view bottom position. This position is relative to the view's parent. Can be either a float value or a dimension string ie 'auto' (default).
     * platforms: android, iphone, ipad
     * @type float,string
     * @since 0.8
     */
    bottom:null,

    /**
     * a dictionary with properties x and y to indicate the center of the views position relative to the parent view
     * platforms: android, iphone, ipad
     * @type object
     * @since 0.8
     */
    center:null,

    /**
     * <p>the image url of the slider left track when in the disabled state</p>
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    disabledLeftTrackImage:null,

    /**
     * <p>the image url of the slider right track when in the disabled state</p>
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    disabledRightTrackImage:null,

    /**
     * <p>the image url of the slider thumb when in the disabled state</p>
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    disabledThumbImage:null,

    /**
     * <p>boolean to indicate the enabled state of the slider</p>
     * platforms: android, iphone, ipad
     * @type boolean
     * @since 0.8
     */
    enabled:null,

    /**
     * Set true if you want a view to be focusable when navigating with the trackball or D-Pad. Default: false. (Android Only)
     * platforms: android
     * @type boolean
     * @since 0.8
     */
    focusable:null,

    /**
     * the font family
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    "font-family":null,

    /**
     * the font size
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    "font-size":null,

    /**
     * the font style, either normal or italics
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    "font-style":null,

    /**
     * the font weight, either normal or bold
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    "font-weight":null,

    /**
     * property for the view height. Can be either a float value or a dimension string ie 'auto' (default).
     * platforms: android, iphone, ipad
     * @type float,string
     * @since 0.8
     */
    height:null,

    /**
     * <p>the image url of the slider left track when in the highlighted state</p>
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    highlightedLeftTrackImage:null,

    /**
     * <p>the image url of the slider right track when in the highlighted state</p>
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    highlightedRightTrackImage:null,

    /**
     * <p>the image url of the slider thumb when in the highlighted state</p>
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    highlightedThumbImage:null,

    /**
     * property for the view left position. This position is relative to the view's parent. Can be either a float value or a dimension string ie 'auto' (default).
     * platforms: android, iphone, ipad
     * @type float,string
     * @since 0.8
     */
    left:null,

    /**
     * <p>the image url of the slider left track</p>
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    leftTrackImage:null,

    /**
     * <p>the maximum slider value</p>
     * platforms: android, iphone, ipad
     * @type float
     * @since 0.8
     */
    max:null,

    /**
     * <p>value can't be moved higher than maxRange. maxRange equals max by default. (Android)</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.8
     */
    maxRange:null,

    /**
     * <p>the minimum slider value</p>
     * platforms: android, iphone, ipad
     * @type float
     * @since 0.8
     */
    min:null,

    /**
     * <p>value can't be moved lower than minRange. minRange equals min by default. (Android)</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.8
     */
    minRange:null,

    /**
     * the opacity from 0.0-1.0
     * platforms: android, iphone, ipad
     * @type float
     * @since 0.8
     */
    opacity:null,

    /**
     * property for the view right position. This position is relative to the view's parent. Can be either a float value or a dimension string ie 'auto' (default).
     * platforms: android, iphone, ipad
     * @type float,string
     * @since 0.8
     */
    right:null,

    /**
     * <p>the image url of the slider right track</p>
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    rightTrackImage:null,

    /**
     * <p>the image url of the slider left track when in the selected state</p>
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    selectedLeftTrackImage:null,

    /**
     * <p>the image url of the slider right track when in the selected state</p>
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    selectedRightTrackImage:null,

    /**
     * <p>the image url of the slider thumb when in the selected state</p>
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    selectedThumbImage:null,

    /**
     * the size of the view as a dictionary of width and height properties
     * platforms: android, iphone, ipad
     * @type object
     * @since 0.8
     */
    size:null,

    /**
     * One of Titanium.UI.Android.SOFT_KEYBOARD_DEFAULT_ON_FOCUS, Titanium.UI.Android.SOFT_KEYBOARD_HIDE_ON_FOCUS, or Titanium.UI.Android.SOFT_KEYBOARD_SHOW_ON_FOCUS. (Android only)
     * platforms: android
     * @type int
     * @since 0.8
     */
    softKeyboardOnFocus:null,

    /**
     * <p>the image url to the slider thumb</p>
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    thumbImage:null,

    /**
     * property for the view top position. This position is relative to the view's parent. Can be either a float value or a dimension string ie 'auto' (default).
     * platforms: android, iphone, ipad
     * @type float,string
     * @since 0.8
     */
    top:null,

    /**
     * a boolean indicating if the view should receive touch events (true, default) or forward them to peers (false)
     * platforms: android, iphone, ipad
     * @type boolean
     * @since 0.8
     */
    touchEnabled:null,

    /**
     * the transformation matrix to apply to the view
     * platforms: android, iphone, ipad
     * @type object
     * @since 0.8
     */
    transform:null,

    /**
     * <p>the value of the slider</p>
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    value:null,

    /**
     * a boolean of the visibility of the view
     * platforms: android, iphone, ipad
     * @type boolean
     * @since 0.8
     */
    visible:null,

    /**
     * property for the view width. Can be either a float value or a dimension string ie 'auto' (default).
     * platforms: android, iphone, ipad
     * @type float,string
     * @since 0.8
     */
    width:null,

    /**
     * the z index position relative to other sibling views
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.8
     */
    zIndex:null,


    /**
     * add a child to the view hierarchy
     * platforms: android, iphone, ipad
     * @param {object} view the view to add to this views hiearchy
     * @returns void
     * @since 0.8
     */
    add:function(view) {
    },

    /**
     * add an event listener for the instance to receive view triggered events
     * platforms: android, iphone, ipad
     * @param {string} name name of the event
     * @param {function} callback callback function to invoke when the event is fired
     * @returns void
     * @since 0.8
     */
    addEventListener:function(name, callback) {
    },

    /**
     * animate the view
     * platforms: android, iphone, ipad
     * @param {object} obj either a dictionary of animation properties or an Animation object
     * @param {function} callback function to be invoked upon completion of the animation
     * @returns void
     * @since 0.8
     */
    animate:function(obj, callback) {
    },

    /**
     * fire a synthesized event to the views listener
     * platforms: android, iphone, ipad
     * @param {string} name name of the event
     * @param {object} event event object
     * @returns void
     * @since 0.8
     */
    fireEvent:function(name, event) {
    },

    /**
     * hide the view
     * platforms: android, iphone, ipad
     * @returns void
     * @since 0.8
     */
    hide:function() {
    },

    /**
     * remove a previously add view from the view hiearchy
     * platforms: android, iphone, ipad
     * @param {object} view the view to remove from this views hiearchy
     * @returns void
     * @since 0.8
     */
    remove:function(view) {
    },

    /**
     * remove a previously added event listener
     * platforms: android, iphone, ipad
     * @param {string} name name of the event
     * @param {function} callback callback function passed in addEventListener
     * @returns void
     * @since 0.8
     */
    removeEventListener:function(name, callback) {
    },

    /**
     * make the view visible
     * platforms: android, iphone, ipad
     * @returns void
     * @since 0.8
     */
    show:function() {
    },

    /**
     * return a Blob image of the rendered view
     * platforms: android, iphone, ipad
     * @param {function} f function to be invoked upon completion. if non-null, this method will be performed asynchronously. if null, it will be performed immediately
     * @since 0.8
     */
    toImage:function(f) {
    }
}

/**
 * platforms: android, iphone, ipad
 * @namespace <p>A Switch is created by the method {@link Titanium.UI.createSwitch}.</p>
 * @since 0.8
 * 
 * @example Simple Switch Example
 * <p>The following is a simple example of a switch and receiving <tt>change</tt> events.</p>
<pre><code>var basicSwitch = Titanium.UI.createSwitch({
    value:false
});
basicSwitch.addEventListener('change',function(e)
{
    Titanium.API.info('Basic Switch value = ' + e.value + ' act val ' + basicSwitch.value);
});
</code></pre>
 */
Ti.UI.Switch = {

    /**
     * a dictionary with properties x and y to indicate the anchor point value. anchor specifies the position by which animation should occur. center is 0.5, 0.5
     * platforms: android, iphone, ipad
     * @type object
     * @since 0.8
     */
    anchorPoint:null,

    /**
     * read-only object with x and y properties of where the view is during animation
     * platforms: android, iphone, ipad
     * @type object
     * @since 0.8
     */
    animatedCenterPoint:null,

    /**
     * the background color of the view
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    backgroundColor:null,

    /**
     * the disabled background color of the view. (Android)
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    backgroundDisabledColor:null,

    /**
     * the disabled background image url of the view. (Android)
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    backgroundDisabledImage:null,

    /**
     * the focused background color of the view. focusable must be true for normal views. (Android)
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    backgroundFocusedColor:null,

    /**
     * the focused background image url of the view. focusable must be true for normal views. (Android)
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    backgroundFocusedImage:null,

    /**
     * a background gradient for the view with the properties: type,startPoint,endPoint,startRadius,endRadius,backfillStart,backfillEnd,colors.
     * platforms: android, iphone, ipad
     * @type object
     * @since 0.8
     */
    backgroundGradient:null,

    /**
     * the background image url of the view
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    backgroundImage:null,

    /**
     * End caps specify the portion of an image that should not be resized when an image is stretched. This technique is used to implement buttons and other resizable image-based interface elements. When a button with end caps is resized, the resizing occurs only in the middle of the button, in the region between the end caps. The end caps themselves keep their original size and appearance. This property specifies the size of the left end cap. The middle (stretchable) portion is assumed to be 1 pixel wide. The right end cap is therefore computed by adding the size of the left end cap and the middle portion together and then subtracting that value from the width of the image
     * platforms: android, iphone, ipad
     * @type float
     * @since 0.8
     */
    backgroundLeftCap:null,

    /**
     * the selected background color of the view. focusable must be true for normal views. (Android)
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    backgroundSelectedColor:null,

    /**
     * the selected background image url of the view. focusable must be true for normal views. (Android)
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    backgroundSelectedImage:null,

    /**
     * End caps specify the portion of an image that should not be resized when an image is stretched. This technique is used to implement buttons and other resizable image-based interface elements. When a button with end caps is resized, the resizing occurs only in the middle of the button, in the region between the end caps. The end caps themselves keep their original size and appearance. This property specifies the size of the top end cap. The middle (stretchable) portion is assumed to be 1 pixel wide. The bottom end cap is therefore computed by adding the size of the top end cap and the middle portion together and then subtracting that value from the height of the image
     * platforms: android, iphone, ipad
     * @type float
     * @since 0.8
     */
    backgroundTopCap:null,

    /**
     * the border color of the view
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    borderColor:null,

    /**
     * the border radius of the view
     * platforms: android, iphone, ipad
     * @type float
     * @since 0.8
     */
    borderRadius:null,

    /**
     * the border width of the view
     * platforms: android, iphone, ipad
     * @type float
     * @since 0.8
     */
    borderWidth:null,

    /**
     * property for the view bottom position. This position is relative to the view's parent. Can be either a float value or a dimension string ie 'auto' (default).
     * platforms: android, iphone, ipad
     * @type float,string
     * @since 0.8
     */
    bottom:null,

    /**
     * a dictionary with properties x and y to indicate the center of the views position relative to the parent view
     * platforms: android, iphone, ipad
     * @type object
     * @since 0.8
     */
    center:null,

    /**
     * <p>boolean for the state of the switch</p>
     * platforms: android, iphone, ipad
     * @type boolean
     * @since 0.8
     */
    enabled:null,

    /**
     * Set true if you want a view to be focusable when navigating with the trackball or D-Pad. Default: false. (Android Only)
     * platforms: android
     * @type boolean
     * @since 0.8
     */
    focusable:null,

    /**
     * the font family
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    "font-family":null,

    /**
     * the font size
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    "font-size":null,

    /**
     * the font style, either normal or italics
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    "font-style":null,

    /**
     * the font weight, either normal or bold
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    "font-weight":null,

    /**
     * property for the view height. Can be either a float value or a dimension string ie 'auto' (default).
     * platforms: android, iphone, ipad
     * @type float,string
     * @since 0.8
     */
    height:null,

    /**
     * property for the view left position. This position is relative to the view's parent. Can be either a float value or a dimension string ie 'auto' (default).
     * platforms: android, iphone, ipad
     * @type float,string
     * @since 0.8
     */
    left:null,

    /**
     * the opacity from 0.0-1.0
     * platforms: android, iphone, ipad
     * @type float
     * @since 0.8
     */
    opacity:null,

    /**
     * property for the view right position. This position is relative to the view's parent. Can be either a float value or a dimension string ie 'auto' (default).
     * platforms: android, iphone, ipad
     * @type float,string
     * @since 0.8
     */
    right:null,

    /**
     * the size of the view as a dictionary of width and height properties
     * platforms: android, iphone, ipad
     * @type object
     * @since 0.8
     */
    size:null,

    /**
     * One of Titanium.UI.Android.SOFT_KEYBOARD_DEFAULT_ON_FOCUS, Titanium.UI.Android.SOFT_KEYBOARD_HIDE_ON_FOCUS, or Titanium.UI.Android.SOFT_KEYBOARD_SHOW_ON_FOCUS. (Android only)
     * platforms: android
     * @type int
     * @since 0.8
     */
    softKeyboardOnFocus:null,

    /**
     * <p>one of Ti.UI.Android.SWITCH_STYLE_CHECKBOX or Ti.UI.Android.SWITCH_STYLE_TOGGLEBUTTON (default). (Android only)</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.8
     */
    style:null,

    /**
     * <p>text to display with checkbox. Used if style is Ti.UI.Android.SWITCH_STYLE_CHECKBOX (Android only)</p>
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    title:null,

    /**
     * <p>text to display when value is <tt>false</tt>. used if style is Ti.UI.Android.SWITCH_STYLE_TOGGLEBUTTON (Android only)</p>
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    titleOff:null,

    /**
     * <p>text to display when value is <tt>true</tt>. used if style is Ti.UI.Android.SWITCH_STYLE_TOGGLEBUTTON (Android only)</p>
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    titleOn:null,

    /**
     * property for the view top position. This position is relative to the view's parent. Can be either a float value or a dimension string ie 'auto' (default).
     * platforms: android, iphone, ipad
     * @type float,string
     * @since 0.8
     */
    top:null,

    /**
     * a boolean indicating if the view should receive touch events (true, default) or forward them to peers (false)
     * platforms: android, iphone, ipad
     * @type boolean
     * @since 0.8
     */
    touchEnabled:null,

    /**
     * the transformation matrix to apply to the view
     * platforms: android, iphone, ipad
     * @type object
     * @since 0.8
     */
    transform:null,

    /**
     * <p>boolean value of the switch where true is the switch is <tt>on</tt> and false the switch if <tt>off</tt></p>
     * platforms: android, iphone, ipad
     * @type boolean
     * @since 0.8
     */
    value:null,

    /**
     * a boolean of the visibility of the view
     * platforms: android, iphone, ipad
     * @type boolean
     * @since 0.8
     */
    visible:null,

    /**
     * property for the view width. Can be either a float value or a dimension string ie 'auto' (default).
     * platforms: android, iphone, ipad
     * @type float,string
     * @since 0.8
     */
    width:null,

    /**
     * the z index position relative to other sibling views
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.8
     */
    zIndex:null,


    /**
     * add a child to the view hierarchy
     * platforms: android, iphone, ipad
     * @param {object} view the view to add to this views hiearchy
     * @returns void
     * @since 0.8
     */
    add:function(view) {
    },

    /**
     * add an event listener for the instance to receive view triggered events
     * platforms: android, iphone, ipad
     * @param {string} name name of the event
     * @param {function} callback callback function to invoke when the event is fired
     * @returns void
     * @since 0.8
     */
    addEventListener:function(name, callback) {
    },

    /**
     * animate the view
     * platforms: android, iphone, ipad
     * @param {object} obj either a dictionary of animation properties or an Animation object
     * @param {function} callback function to be invoked upon completion of the animation
     * @returns void
     * @since 0.8
     */
    animate:function(obj, callback) {
    },

    /**
     * fire a synthesized event to the views listener
     * platforms: android, iphone, ipad
     * @param {string} name name of the event
     * @param {object} event event object
     * @returns void
     * @since 0.8
     */
    fireEvent:function(name, event) {
    },

    /**
     * hide the view
     * platforms: android, iphone, ipad
     * @returns void
     * @since 0.8
     */
    hide:function() {
    },

    /**
     * remove a previously add view from the view hiearchy
     * platforms: android, iphone, ipad
     * @param {object} view the view to remove from this views hiearchy
     * @returns void
     * @since 0.8
     */
    remove:function(view) {
    },

    /**
     * remove a previously added event listener
     * platforms: android, iphone, ipad
     * @param {string} name name of the event
     * @param {function} callback callback function passed in addEventListener
     * @returns void
     * @since 0.8
     */
    removeEventListener:function(name, callback) {
    },

    /**
     * make the view visible
     * platforms: android, iphone, ipad
     * @returns void
     * @since 0.8
     */
    show:function() {
    },

    /**
     * return a Blob image of the rendered view
     * platforms: android, iphone, ipad
     * @param {function} f function to be invoked upon completion. if non-null, this method will be performed asynchronously. if null, it will be performed immediately
     * @since 0.8
     */
    toImage:function(f) {
    }
}

/**
 * platforms: android, iphone, ipad
 * @namespace <p>A TabGroup Tab instance.  Each Tab instance maintains a stack of tab windows. Only one window within in the Tab can be visible at a time.  When a window is closed, either by the user or by code, the window is removed from the stack, make the previous window visible. The root tab window cannot be removed. The Tab Group is created by the method {@link Titanium.UI.createTab}.</p>
 * @since 0.8
 * 
 * @example Simple Tab Example
 * <p>In this example, we create a simple tab and add it to a tab group.</p>
<pre><code>var tab = Titanium.UI.createTab({
    window:mywin,
    title:'Hello',
    icon:'myicon.png'
});
tabGroup.addTab(tab);
</code></pre>
 */
Ti.UI.Tab = {

    /**
     * a dictionary with properties x and y to indicate the anchor point value. anchor specifies the position by which animation should occur. center is 0.5, 0.5
     * platforms: android, iphone, ipad
     * @type object
     * @since 0.8
     */
    anchorPoint:null,

    /**
     * read-only object with x and y properties of where the view is during animation
     * platforms: android, iphone, ipad
     * @type object
     * @since 0.8
     */
    animatedCenterPoint:null,

    /**
     * the background color of the view
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    backgroundColor:null,

    /**
     * the disabled background color of the view. (Android)
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    backgroundDisabledColor:null,

    /**
     * the disabled background image url of the view. (Android)
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    backgroundDisabledImage:null,

    /**
     * the focused background color of the view. focusable must be true for normal views. (Android)
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    backgroundFocusedColor:null,

    /**
     * the focused background image url of the view. focusable must be true for normal views. (Android)
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    backgroundFocusedImage:null,

    /**
     * a background gradient for the view with the properties: type,startPoint,endPoint,startRadius,endRadius,backfillStart,backfillEnd,colors.
     * platforms: android, iphone, ipad
     * @type object
     * @since 0.8
     */
    backgroundGradient:null,

    /**
     * the background image url of the view
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    backgroundImage:null,

    /**
     * End caps specify the portion of an image that should not be resized when an image is stretched. This technique is used to implement buttons and other resizable image-based interface elements. When a button with end caps is resized, the resizing occurs only in the middle of the button, in the region between the end caps. The end caps themselves keep their original size and appearance. This property specifies the size of the left end cap. The middle (stretchable) portion is assumed to be 1 pixel wide. The right end cap is therefore computed by adding the size of the left end cap and the middle portion together and then subtracting that value from the width of the image
     * platforms: android, iphone, ipad
     * @type float
     * @since 0.8
     */
    backgroundLeftCap:null,

    /**
     * the selected background color of the view. focusable must be true for normal views. (Android)
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    backgroundSelectedColor:null,

    /**
     * the selected background image url of the view. focusable must be true for normal views. (Android)
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    backgroundSelectedImage:null,

    /**
     * End caps specify the portion of an image that should not be resized when an image is stretched. This technique is used to implement buttons and other resizable image-based interface elements. When a button with end caps is resized, the resizing occurs only in the middle of the button, in the region between the end caps. The end caps themselves keep their original size and appearance. This property specifies the size of the top end cap. The middle (stretchable) portion is assumed to be 1 pixel wide. The bottom end cap is therefore computed by adding the size of the top end cap and the middle portion together and then subtracting that value from the height of the image
     * platforms: android, iphone, ipad
     * @type float
     * @since 0.8
     */
    backgroundTopCap:null,

    /**
     * <p>the badge value for the tab group for this tab. null indicates no badge is value</p>
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    badge:null,

    /**
     * the border color of the view
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    borderColor:null,

    /**
     * the border radius of the view
     * platforms: android, iphone, ipad
     * @type float
     * @since 0.8
     */
    borderRadius:null,

    /**
     * the border width of the view
     * platforms: android, iphone, ipad
     * @type float
     * @since 0.8
     */
    borderWidth:null,

    /**
     * property for the view bottom position. This position is relative to the view's parent. Can be either a float value or a dimension string ie 'auto' (default).
     * platforms: android, iphone, ipad
     * @type float,string
     * @since 0.8
     */
    bottom:null,

    /**
     * a dictionary with properties x and y to indicate the center of the views position relative to the parent view
     * platforms: android, iphone, ipad
     * @type object
     * @since 0.8
     */
    center:null,

    /**
     * Set true if you want a view to be focusable when navigating with the trackball or D-Pad. Default: false. (Android Only)
     * platforms: android
     * @type boolean
     * @since 0.8
     */
    focusable:null,

    /**
     * the font family
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    "font-family":null,

    /**
     * the font size
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    "font-size":null,

    /**
     * the font style, either normal or italics
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    "font-style":null,

    /**
     * the font weight, either normal or bold
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    "font-weight":null,

    /**
     * property for the view height. Can be either a float value or a dimension string ie 'auto' (default).
     * platforms: android, iphone, ipad
     * @type float,string
     * @since 0.8
     */
    height:null,

    /**
     * <p>the icon url for the tab group for this tab</p>
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    icon:null,

    /**
     * property for the view left position. This position is relative to the view's parent. Can be either a float value or a dimension string ie 'auto' (default).
     * platforms: android, iphone, ipad
     * @type float,string
     * @since 0.8
     */
    left:null,

    /**
     * the opacity from 0.0-1.0
     * platforms: android, iphone, ipad
     * @type float
     * @since 0.8
     */
    opacity:null,

    /**
     * property for the view right position. This position is relative to the view's parent. Can be either a float value or a dimension string ie 'auto' (default).
     * platforms: android, iphone, ipad
     * @type float,string
     * @since 0.8
     */
    right:null,

    /**
     * the size of the view as a dictionary of width and height properties
     * platforms: android, iphone, ipad
     * @type object
     * @since 0.8
     */
    size:null,

    /**
     * One of Titanium.UI.Android.SOFT_KEYBOARD_DEFAULT_ON_FOCUS, Titanium.UI.Android.SOFT_KEYBOARD_HIDE_ON_FOCUS, or Titanium.UI.Android.SOFT_KEYBOARD_SHOW_ON_FOCUS. (Android only)
     * platforms: android
     * @type int
     * @since 0.8
     */
    softKeyboardOnFocus:null,

    /**
     * <p>the title for the tab group for this tab</p>
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    title:null,

    /**
     * property for the view top position. This position is relative to the view's parent. Can be either a float value or a dimension string ie 'auto' (default).
     * platforms: android, iphone, ipad
     * @type float,string
     * @since 0.8
     */
    top:null,

    /**
     * a boolean indicating if the view should receive touch events (true, default) or forward them to peers (false)
     * platforms: android, iphone, ipad
     * @type boolean
     * @since 0.8
     */
    touchEnabled:null,

    /**
     * the transformation matrix to apply to the view
     * platforms: android, iphone, ipad
     * @type object
     * @since 0.8
     */
    transform:null,

    /**
     * a boolean of the visibility of the view
     * platforms: android, iphone, ipad
     * @type boolean
     * @since 0.8
     */
    visible:null,

    /**
     * property for the view width. Can be either a float value or a dimension string ie 'auto' (default).
     * platforms: android, iphone, ipad
     * @type float,string
     * @since 0.8
     */
    width:null,

    /**
     * <p>the root level tab window.  all tabs must have at least one root level tab window.</p>
     * platforms: android, iphone, ipad
     * @type object
     * @since 0.8
     */
    window:null,

    /**
     * the z index position relative to other sibling views
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.8
     */
    zIndex:null,


    /**
     * add a child to the view hierarchy
     * platforms: android, iphone, ipad
     * @param {object} view the view to add to this views hiearchy
     * @returns void
     * @since 0.8
     */
    add:function(view) {
    },

    /**
     * add an event listener for the instance to receive view triggered events
     * platforms: android, iphone, ipad
     * @param {string} name name of the event
     * @param {function} callback callback function to invoke when the event is fired
     * @returns void
     * @since 0.8
     */
    addEventListener:function(name, callback) {
    },

    /**
     * animate the view
     * platforms: android, iphone, ipad
     * @param {object} obj either a dictionary of animation properties or an Animation object
     * @param {function} callback function to be invoked upon completion of the animation
     * @returns void
     * @since 0.8
     */
    animate:function(obj, callback) {
    },

    /**
     * fire a synthesized event to the views listener
     * platforms: android, iphone, ipad
     * @param {string} name name of the event
     * @param {object} event event object
     * @returns void
     * @since 0.8
     */
    fireEvent:function(name, event) {
    },

    /**
     * hide the view
     * platforms: android, iphone, ipad
     * @returns void
     * @since 0.8
     */
    hide:function() {
    },

    /**
     * remove a previously add view from the view hiearchy
     * platforms: android, iphone, ipad
     * @param {object} view the view to remove from this views hiearchy
     * @returns void
     * @since 0.8
     */
    remove:function(view) {
    },

    /**
     * remove a previously added event listener
     * platforms: android, iphone, ipad
     * @param {string} name name of the event
     * @param {function} callback callback function passed in addEventListener
     * @returns void
     * @since 0.8
     */
    removeEventListener:function(name, callback) {
    },

    /**
     * make the view visible
     * platforms: android, iphone, ipad
     * @returns void
     * @since 0.8
     */
    show:function() {
    },

    /**
     * return a Blob image of the rendered view
     * platforms: android, iphone, ipad
     * @param {function} f function to be invoked upon completion. if non-null, this method will be performed asynchronously. if null, it will be performed immediately
     * @since 0.8
     */
    toImage:function(f) {
    }
}

/**
 * Notes: <p>Note that when opening a tab group, if one or more of its tabs have been set 'active' prior to opening, or if setActiveTab() has been called while a tab is 'active', the result of which tab is initially selected is undefined.</p>
 * platforms: android, iphone, ipad
 * @namespace <p>The Tab Group allows you to manage a tabbed UI of one or more windows. The Tab Group is created by the method {@link Titanium.UI.createTabGroup}.</p>
 * @since 0.9
 */
Ti.UI.TabGroup = {

    /**
     * <p>the active tab</p>
     * platforms: android, iphone, ipad
     * @type object
     * @since 0.9
     */
    activeTab:null,

    /**
     * <p>whether or not the user can configure the tab group via the 'More' tab's edit functionality.  iPhone/iPad only</p>
     * platforms: android, iphone, ipad
     * @type boolean
     * @since 0.9
     */
    allowUserCustomization:null,

    /**
     * a dictionary with properties x and y to indicate the anchor point value. anchor specifies the position by which animation should occur. center is 0.5, 0.5
     * platforms: android, iphone, ipad
     * @type object
     * @since 0.9
     */
    anchorPoint:null,

    /**
     * read-only object with x and y properties of where the view is during animation
     * platforms: android, iphone, ipad
     * @type object
     * @since 0.9
     */
    animatedCenterPoint:null,

    /**
     * the background color of the view
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.9
     */
    backgroundColor:null,

    /**
     * the disabled background color of the view. (Android)
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.9
     */
    backgroundDisabledColor:null,

    /**
     * the disabled background image url of the view. (Android)
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.9
     */
    backgroundDisabledImage:null,

    /**
     * the focused background color of the view. focusable must be true for normal views. (Android)
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.9
     */
    backgroundFocusedColor:null,

    /**
     * the focused background image url of the view. focusable must be true for normal views. (Android)
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.9
     */
    backgroundFocusedImage:null,

    /**
     * a background gradient for the view with the properties: type,startPoint,endPoint,startRadius,endRadius,backfillStart,backfillEnd,colors.
     * platforms: android, iphone, ipad
     * @type object
     * @since 0.9
     */
    backgroundGradient:null,

    /**
     * the background image url of the view
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.9
     */
    backgroundImage:null,

    /**
     * End caps specify the portion of an image that should not be resized when an image is stretched. This technique is used to implement buttons and other resizable image-based interface elements. When a button with end caps is resized, the resizing occurs only in the middle of the button, in the region between the end caps. The end caps themselves keep their original size and appearance. This property specifies the size of the left end cap. The middle (stretchable) portion is assumed to be 1 pixel wide. The right end cap is therefore computed by adding the size of the left end cap and the middle portion together and then subtracting that value from the width of the image
     * platforms: android, iphone, ipad
     * @type float
     * @since 0.9
     */
    backgroundLeftCap:null,

    /**
     * the selected background color of the view. focusable must be true for normal views. (Android)
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.9
     */
    backgroundSelectedColor:null,

    /**
     * the selected background image url of the view. focusable must be true for normal views. (Android)
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.9
     */
    backgroundSelectedImage:null,

    /**
     * End caps specify the portion of an image that should not be resized when an image is stretched. This technique is used to implement buttons and other resizable image-based interface elements. When a button with end caps is resized, the resizing occurs only in the middle of the button, in the region between the end caps. The end caps themselves keep their original size and appearance. This property specifies the size of the top end cap. The middle (stretchable) portion is assumed to be 1 pixel wide. The bottom end cap is therefore computed by adding the size of the top end cap and the middle portion together and then subtracting that value from the height of the image
     * platforms: android, iphone, ipad
     * @type float
     * @since 0.9
     */
    backgroundTopCap:null,

    /**
     * <p>the default navigation bar color (typically for the "More" tab)</p>
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.9
     */
    barColor:null,

    /**
     * the border color of the view
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.9
     */
    borderColor:null,

    /**
     * the border radius of the view
     * platforms: android, iphone, ipad
     * @type float
     * @since 0.9
     */
    borderRadius:null,

    /**
     * the border width of the view
     * platforms: android, iphone, ipad
     * @type float
     * @since 0.9
     */
    borderWidth:null,

    /**
     * property for the view bottom position. This position is relative to the view's parent. Can be either a float value or a dimension string ie 'auto' (default).
     * platforms: android, iphone, ipad
     * @type float,string
     * @since 0.9
     */
    bottom:null,

    /**
     * a dictionary with properties x and y to indicate the center of the views position relative to the parent view
     * platforms: android, iphone, ipad
     * @type object
     * @since 0.9
     */
    center:null,

    /**
     * <p>the title for the 'More' tab edit button.  iPhone/iPad only</p>
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.9
     */
    editButtonTitle:null,

    /**
     * Set true if you want a view to be focusable when navigating with the trackball or D-Pad. Default: false. (Android Only)
     * platforms: android
     * @type boolean
     * @since 0.9
     */
    focusable:null,

    /**
     * the font family
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.9
     */
    "font-family":null,

    /**
     * the font size
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.9
     */
    "font-size":null,

    /**
     * the font style, either normal or italics
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.9
     */
    "font-style":null,

    /**
     * the font weight, either normal or bold
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.9
     */
    "font-weight":null,

    /**
     * property for the view height. Can be either a float value or a dimension string ie 'auto' (default).
     * platforms: android, iphone, ipad
     * @type float,string
     * @since 0.9
     */
    height:null,

    /**
     * property for the view left position. This position is relative to the view's parent. Can be either a float value or a dimension string ie 'auto' (default).
     * platforms: android, iphone, ipad
     * @type float,string
     * @since 0.9
     */
    left:null,

    /**
     * the opacity from 0.0-1.0
     * platforms: android, iphone, ipad
     * @type float
     * @since 0.9
     */
    opacity:null,

    /**
     * property for the view right position. This position is relative to the view's parent. Can be either a float value or a dimension string ie 'auto' (default).
     * platforms: android, iphone, ipad
     * @type float,string
     * @since 0.9
     */
    right:null,

    /**
     * the size of the view as a dictionary of width and height properties
     * platforms: android, iphone, ipad
     * @type object
     * @since 0.9
     */
    size:null,

    /**
     * One of Titanium.UI.Android.SOFT_KEYBOARD_DEFAULT_ON_FOCUS, Titanium.UI.Android.SOFT_KEYBOARD_HIDE_ON_FOCUS, or Titanium.UI.Android.SOFT_KEYBOARD_SHOW_ON_FOCUS. (Android only)
     * platforms: android
     * @type int
     * @since 0.9
     */
    softKeyboardOnFocus:null,

    /**
     * <p>array of tab objects that are managed by the tab group</p>
     * platforms: android, iphone, ipad
     * @type array
     * @since 0.9
     */
    tabs:null,

    /**
     * property for the view top position. This position is relative to the view's parent. Can be either a float value or a dimension string ie 'auto' (default).
     * platforms: android, iphone, ipad
     * @type float,string
     * @since 0.9
     */
    top:null,

    /**
     * a boolean indicating if the view should receive touch events (true, default) or forward them to peers (false)
     * platforms: android, iphone, ipad
     * @type boolean
     * @since 0.9
     */
    touchEnabled:null,

    /**
     * the transformation matrix to apply to the view
     * platforms: android, iphone, ipad
     * @type object
     * @since 0.9
     */
    transform:null,

    /**
     * a boolean of the visibility of the view
     * platforms: android, iphone, ipad
     * @type boolean
     * @since 0.9
     */
    visible:null,

    /**
     * property for the view width. Can be either a float value or a dimension string ie 'auto' (default).
     * platforms: android, iphone, ipad
     * @type float,string
     * @since 0.9
     */
    width:null,

    /**
     * <p>One of Ti.UI.Android.SOFT_INPUT_ADJUST_PAN, Ti.UI.Android.SOFT_INPUT_ADJUST_RESIZE, or Ti.UI.Android.SOFT_INPUT_ADJUST_UNSPECIFIED. Note: MUST be passed in the creation options. (Android Only) {@link http://developer.android.com/reference/android/view/Window.html#setSoftInputMode(int)}</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.9
     */
    windowSoftInputMode:null,

    /**
     * the z index position relative to other sibling views
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.9
     */
    zIndex:null,


    /**
     * add a child to the view hierarchy
     * platforms: android, iphone, ipad
     * @param {object} view the view to add to this views hiearchy
     * @returns void
     * @since 0.9
     */
    add:function(view) {
    },

    /**
     * add an event listener for the instance to receive view triggered events
     * platforms: android, iphone, ipad
     * @param {string} name name of the event
     * @param {function} callback callback function to invoke when the event is fired
     * @returns void
     * @since 0.9
     */
    addEventListener:function(name, callback) {
    },

    /**
     * <p>add a tab to the tab group</p>
     * platforms: android, iphone, ipad
     * @returns void
     * @since 0.9
     */
    addTab:function() {
    },

    /**
     * animate the view
     * platforms: android, iphone, ipad
     * @param {object} obj either a dictionary of animation properties or an Animation object
     * @param {function} callback function to be invoked upon completion of the animation
     * @returns void
     * @since 0.9
     */
    animate:function(obj, callback) {
    },

    /**
     * <p>close the tab group and remove it from the UI</p>
     * platforms: android, iphone, ipad
     * @returns void
     * @since 0.9
     */
    close:function() {
    },

    /**
     * fire a synthesized event to the views listener
     * platforms: android, iphone, ipad
     * @param {string} name name of the event
     * @param {object} event event object
     * @returns void
     * @since 0.9
     */
    fireEvent:function(name, event) {
    },

    /**
     * hide the view
     * platforms: android, iphone, ipad
     * @returns void
     * @since 0.9
     */
    hide:function() {
    },

    /**
     * <p>open the tab group and make it visible</p>
     * platforms: android, iphone, ipad
     * @returns void
     * @since 0.9
     */
    open:function() {
    },

    /**
     * remove a previously add view from the view hiearchy
     * platforms: android, iphone, ipad
     * @param {object} view the view to remove from this views hiearchy
     * @returns void
     * @since 0.9
     */
    remove:function(view) {
    },

    /**
     * remove a previously added event listener
     * platforms: android, iphone, ipad
     * @param {string} name name of the event
     * @param {function} callback callback function passed in addEventListener
     * @returns void
     * @since 0.9
     */
    removeEventListener:function(name, callback) {
    },

    /**
     * <p>remove a tab from the tab group</p>
     * platforms: android, iphone, ipad
     * @returns void
     * @since 0.9
     */
    removeTab:function() {
    },

    /**
     * <p>select the currently active tab in a tab group</p>
     * platforms: android, iphone, ipad
     * @param {object} indexOrObject an int representing the desired tab index or a reference to the tab object you'd like to switch to
     * @returns void
     * @since 0.9
     */
    setActiveTab:function(indexOrObject) {
    },

    /**
     * make the view visible
     * platforms: android, iphone, ipad
     * @returns void
     * @since 0.9
     */
    show:function() {
    },

    /**
     * return a Blob image of the rendered view
     * platforms: android, iphone, ipad
     * @param {function} f function to be invoked upon completion. if non-null, this method will be performed asynchronously. if null, it will be performed immediately
     * @since 0.9
     */
    toImage:function(f) {
    }
}

/**
 * Notes: <p>For iPhone, the style constants are available in the constants defined in {@link Titanium.UI.iPhone.SystemButtonStyle}.</p>
 * platforms: iphone, ipad
 * @namespace <p>A Tabbed Bar is created by the method {@link Titanium.UI.createTabbedBar}. The difference between the Tabbed Bar and the Button Bar is that the tabbed bar visually maintains a state (visually distinguished as a pressed or selected look).</p>
 * @since 0.8
 * 
 * @example Simple Tabbed Bar with 3 items
 * <pre><code>var bb1 = Titanium.UI.createTabbedBar({
    labels:['One', 'Two', 'Three'],
    backgroundColor:'#336699',
    top:50,
    style:Titanium.UI.iPhone.SystemButtonStyle.BAR,
    height:25,
    width:200
});
win.add(bb1);
</code></pre>
 */
Ti.UI.TabbedBar = {

    /**
     * a dictionary with properties x and y to indicate the anchor point value. anchor specifies the position by which animation should occur. center is 0.5, 0.5
     * platforms: iphone, ipad
     * @type object
     * @since 0.8
     */
    anchorPoint:null,

    /**
     * read-only object with x and y properties of where the view is during animation
     * platforms: iphone, ipad
     * @type object
     * @since 0.8
     */
    animatedCenterPoint:null,

    /**
     * the background color of the view
     * platforms: iphone, ipad
     * @type string
     * @since 0.8
     */
    backgroundColor:null,

    /**
     * the disabled background color of the view. (Android)
     * platforms: iphone, ipad
     * @type string
     * @since 0.8
     */
    backgroundDisabledColor:null,

    /**
     * the disabled background image url of the view. (Android)
     * platforms: iphone, ipad
     * @type string
     * @since 0.8
     */
    backgroundDisabledImage:null,

    /**
     * the focused background color of the view. focusable must be true for normal views. (Android)
     * platforms: iphone, ipad
     * @type string
     * @since 0.8
     */
    backgroundFocusedColor:null,

    /**
     * the focused background image url of the view. focusable must be true for normal views. (Android)
     * platforms: iphone, ipad
     * @type string
     * @since 0.8
     */
    backgroundFocusedImage:null,

    /**
     * a background gradient for the view with the properties: type,startPoint,endPoint,startRadius,endRadius,backfillStart,backfillEnd,colors.
     * platforms: iphone, ipad
     * @type object
     * @since 0.8
     */
    backgroundGradient:null,

    /**
     * the background image url of the view
     * platforms: iphone, ipad
     * @type string
     * @since 0.8
     */
    backgroundImage:null,

    /**
     * End caps specify the portion of an image that should not be resized when an image is stretched. This technique is used to implement buttons and other resizable image-based interface elements. When a button with end caps is resized, the resizing occurs only in the middle of the button, in the region between the end caps. The end caps themselves keep their original size and appearance. This property specifies the size of the left end cap. The middle (stretchable) portion is assumed to be 1 pixel wide. The right end cap is therefore computed by adding the size of the left end cap and the middle portion together and then subtracting that value from the width of the image
     * platforms: iphone, ipad
     * @type float
     * @since 0.8
     */
    backgroundLeftCap:null,

    /**
     * the selected background color of the view. focusable must be true for normal views. (Android)
     * platforms: iphone, ipad
     * @type string
     * @since 0.8
     */
    backgroundSelectedColor:null,

    /**
     * the selected background image url of the view. focusable must be true for normal views. (Android)
     * platforms: iphone, ipad
     * @type string
     * @since 0.8
     */
    backgroundSelectedImage:null,

    /**
     * End caps specify the portion of an image that should not be resized when an image is stretched. This technique is used to implement buttons and other resizable image-based interface elements. When a button with end caps is resized, the resizing occurs only in the middle of the button, in the region between the end caps. The end caps themselves keep their original size and appearance. This property specifies the size of the top end cap. The middle (stretchable) portion is assumed to be 1 pixel wide. The bottom end cap is therefore computed by adding the size of the top end cap and the middle portion together and then subtracting that value from the height of the image
     * platforms: iphone, ipad
     * @type float
     * @since 0.8
     */
    backgroundTopCap:null,

    /**
     * the border color of the view
     * platforms: iphone, ipad
     * @type string
     * @since 0.8
     */
    borderColor:null,

    /**
     * the border radius of the view
     * platforms: iphone, ipad
     * @type float
     * @since 0.8
     */
    borderRadius:null,

    /**
     * the border width of the view
     * platforms: iphone, ipad
     * @type float
     * @since 0.8
     */
    borderWidth:null,

    /**
     * property for the view bottom position. This position is relative to the view's parent. Can be either a float value or a dimension string ie 'auto' (default).
     * platforms: iphone, ipad
     * @type float,string
     * @since 0.8
     */
    bottom:null,

    /**
     * a dictionary with properties x and y to indicate the center of the views position relative to the parent view
     * platforms: iphone, ipad
     * @type object
     * @since 0.8
     */
    center:null,

    /**
     * the font family
     * platforms: iphone, ipad
     * @type string
     * @since 0.8
     */
    "font-family":null,

    /**
     * the font size
     * platforms: iphone, ipad
     * @type string
     * @since 0.8
     */
    "font-size":null,

    /**
     * the font style, either normal or italics
     * platforms: iphone, ipad
     * @type string
     * @since 0.8
     */
    "font-style":null,

    /**
     * the font weight, either normal or bold
     * platforms: iphone, ipad
     * @type string
     * @since 0.8
     */
    "font-weight":null,

    /**
     * property for the view height. Can be either a float value or a dimension string ie 'auto' (default).
     * platforms: iphone, ipad
     * @type float,string
     * @since 0.8
     */
    height:null,

    /**
     * <p>the selected index</p>
     * platforms: iphone, ipad
     * @type int
     * @since 0.8
     */
    index:null,

    /**
     * <p>the array of labels for the tabbed bar. each object should have the properties <tt>title</tt>, <tt>image</tt>, <tt>width</tt> and <tt>enabled</tt>.</p>
     * platforms: iphone, ipad
     * @type array
     * @since 0.8
     */
    labels:null,

    /**
     * property for the view left position. This position is relative to the view's parent. Can be either a float value or a dimension string ie 'auto' (default).
     * platforms: iphone, ipad
     * @type float,string
     * @since 0.8
     */
    left:null,

    /**
     * the opacity from 0.0-1.0
     * platforms: iphone, ipad
     * @type float
     * @since 0.8
     */
    opacity:null,

    /**
     * property for the view right position. This position is relative to the view's parent. Can be either a float value or a dimension string ie 'auto' (default).
     * platforms: iphone, ipad
     * @type float,string
     * @since 0.8
     */
    right:null,

    /**
     * the size of the view as a dictionary of width and height properties
     * platforms: iphone, ipad
     * @type object
     * @since 0.8
     */
    size:null,

    /**
     * <p>the style of the tabbed bar</p>
     * platforms: iphone, ipad
     * @type int
     * @since 0.8
     */
    style:null,

    /**
     * property for the view top position. This position is relative to the view's parent. Can be either a float value or a dimension string ie 'auto' (default).
     * platforms: iphone, ipad
     * @type float,string
     * @since 0.8
     */
    top:null,

    /**
     * a boolean indicating if the view should receive touch events (true, default) or forward them to peers (false)
     * platforms: iphone, ipad
     * @type boolean
     * @since 0.8
     */
    touchEnabled:null,

    /**
     * the transformation matrix to apply to the view
     * platforms: iphone, ipad
     * @type object
     * @since 0.8
     */
    transform:null,

    /**
     * a boolean of the visibility of the view
     * platforms: iphone, ipad
     * @type boolean
     * @since 0.8
     */
    visible:null,

    /**
     * property for the view width. Can be either a float value or a dimension string ie 'auto' (default).
     * platforms: iphone, ipad
     * @type float,string
     * @since 0.8
     */
    width:null,

    /**
     * the z index position relative to other sibling views
     * platforms: iphone, ipad
     * @type int
     * @since 0.8
     */
    zIndex:null,


    /**
     * add a child to the view hierarchy
     * platforms: iphone, ipad
     * @param {object} view the view to add to this views hiearchy
     * @returns void
     * @since 0.8
     */
    add:function(view) {
    },

    /**
     * add an event listener for the instance to receive view triggered events
     * platforms: iphone, ipad
     * @param {string} name name of the event
     * @param {function} callback callback function to invoke when the event is fired
     * @returns void
     * @since 0.8
     */
    addEventListener:function(name, callback) {
    },

    /**
     * animate the view
     * platforms: iphone, ipad
     * @param {object} obj either a dictionary of animation properties or an Animation object
     * @param {function} callback function to be invoked upon completion of the animation
     * @returns void
     * @since 0.8
     */
    animate:function(obj, callback) {
    },

    /**
     * fire a synthesized event to the views listener
     * platforms: iphone, ipad
     * @param {string} name name of the event
     * @param {object} event event object
     * @returns void
     * @since 0.8
     */
    fireEvent:function(name, event) {
    },

    /**
     * hide the view
     * platforms: iphone, ipad
     * @returns void
     * @since 0.8
     */
    hide:function() {
    },

    /**
     * remove a previously add view from the view hiearchy
     * platforms: iphone, ipad
     * @param {object} view the view to remove from this views hiearchy
     * @returns void
     * @since 0.8
     */
    remove:function(view) {
    },

    /**
     * remove a previously added event listener
     * platforms: iphone, ipad
     * @param {string} name name of the event
     * @param {function} callback callback function passed in addEventListener
     * @returns void
     * @since 0.8
     */
    removeEventListener:function(name, callback) {
    },

    /**
     * make the view visible
     * platforms: iphone, ipad
     * @returns void
     * @since 0.8
     */
    show:function() {
    },

    /**
     * return a Blob image of the rendered view
     * platforms: iphone, ipad
     * @param {function} f function to be invoked upon completion. if non-null, this method will be performed asynchronously. if null, it will be performed immediately
     * @since 0.8
     */
    toImage:function(f) {
    }
}

/**
 * platforms: android, iphone, ipad
 * @namespace <p>A Table View allows you to create a scrollable table of content in a list-based fashion. The Table View is created by the method {@link Titanium.UI.createTableView}.</p>
 * @since 0.8
 * 
 * @example Simple Table View with basic rows
 * <p>The most basic example of a table view.</p>
<pre><code>var data = [{title:"Row 1"},{title:"Row 2"}];
var table = Titanium.UI.createTableView({data:data});
win.add(table);
</code></pre>
 */
Ti.UI.TableView = {

    /**
     * <p>true if the rows can be selected</p>
     * platforms: android, iphone, ipad
     * @type boolean
     * @since 0.8
     */
    allowsSelection:null,

    /**
     * <p>true if the rows can be selected while editing the table (iOS Only)</p>
     * platforms: android, iphone, ipad
     * @type boolean
     * @since 0.8
     */
    allowsSelectionDuringEditing:null,

    /**
     * a dictionary with properties x and y to indicate the anchor point value. anchor specifies the position by which animation should occur. center is 0.5, 0.5
     * platforms: android, iphone, ipad
     * @type object
     * @since 0.8
     */
    anchorPoint:null,

    /**
     * read-only object with x and y properties of where the view is during animation
     * platforms: android, iphone, ipad
     * @type object
     * @since 0.8
     */
    animatedCenterPoint:null,

    /**
     * the background color of the view
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    backgroundColor:null,

    /**
     * the disabled background color of the view. (Android)
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    backgroundDisabledColor:null,

    /**
     * the disabled background image url of the view. (Android)
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    backgroundDisabledImage:null,

    /**
     * the focused background color of the view. focusable must be true for normal views. (Android)
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    backgroundFocusedColor:null,

    /**
     * the focused background image url of the view. focusable must be true for normal views. (Android)
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    backgroundFocusedImage:null,

    /**
     * a background gradient for the view with the properties: type,startPoint,endPoint,startRadius,endRadius,backfillStart,backfillEnd,colors.
     * platforms: android, iphone, ipad
     * @type object
     * @since 0.8
     */
    backgroundGradient:null,

    /**
     * the background image url of the view
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    backgroundImage:null,

    /**
     * End caps specify the portion of an image that should not be resized when an image is stretched. This technique is used to implement buttons and other resizable image-based interface elements. When a button with end caps is resized, the resizing occurs only in the middle of the button, in the region between the end caps. The end caps themselves keep their original size and appearance. This property specifies the size of the left end cap. The middle (stretchable) portion is assumed to be 1 pixel wide. The right end cap is therefore computed by adding the size of the left end cap and the middle portion together and then subtracting that value from the width of the image
     * platforms: android, iphone, ipad
     * @type float
     * @since 0.8
     */
    backgroundLeftCap:null,

    /**
     * the selected background color of the view. focusable must be true for normal views. (Android)
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    backgroundSelectedColor:null,

    /**
     * the selected background image url of the view. focusable must be true for normal views. (Android)
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    backgroundSelectedImage:null,

    /**
     * End caps specify the portion of an image that should not be resized when an image is stretched. This technique is used to implement buttons and other resizable image-based interface elements. When a button with end caps is resized, the resizing occurs only in the middle of the button, in the region between the end caps. The end caps themselves keep their original size and appearance. This property specifies the size of the top end cap. The middle (stretchable) portion is assumed to be 1 pixel wide. The bottom end cap is therefore computed by adding the size of the top end cap and the middle portion together and then subtracting that value from the height of the image
     * platforms: android, iphone, ipad
     * @type float
     * @since 0.8
     */
    backgroundTopCap:null,

    /**
     * the border color of the view
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    borderColor:null,

    /**
     * the border radius of the view
     * platforms: android, iphone, ipad
     * @type float
     * @since 0.8
     */
    borderRadius:null,

    /**
     * the border width of the view
     * platforms: android, iphone, ipad
     * @type float
     * @since 0.8
     */
    borderWidth:null,

    /**
     * property for the view bottom position. This position is relative to the view's parent. Can be either a float value or a dimension string ie 'auto' (default).
     * platforms: android, iphone, ipad
     * @type float,string
     * @since 0.8
     */
    bottom:null,

    /**
     * a dictionary with properties x and y to indicate the center of the views position relative to the parent view
     * platforms: android, iphone, ipad
     * @type object
     * @since 0.8
     */
    center:null,

    /**
     * <p>the data array of objects to be used for the rows of the table view</p>
     * platforms: android, iphone, ipad
     * @type array
     * @since 0.8
     */
    data:null,

    /**
     * <p>allow the table view to be editable (this must be true for swipe-to-delete) (iOS Only)</p>
     * platforms: android, iphone, ipad
     * @type boolean
     * @since 0.8
     */
    editable:null,

    /**
     * <p>boolean to control the editing state of the table view (iOS Only)</p>
     * platforms: android, iphone, ipad
     * @type boolean
     * @since 0.8
     */
    editing:null,

    /**
     * <p>the filter attribute to be used when searching. this property maps to your data object or a property on the row object</p>
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    filterAttribute:null,

    /**
     * <p>boolean to indicate if the search should be case sensitive or case insensitive (default)</p>
     * platforms: android, iphone, ipad
     * @type boolean
     * @since 0.8
     */
    filterCaseInsensitive:null,

    /**
     * Set true if you want a view to be focusable when navigating with the trackball or D-Pad. Default: false. (Android Only)
     * platforms: android
     * @type boolean
     * @since 0.8
     */
    focusable:null,

    /**
     * the font family
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    "font-family":null,

    /**
     * the font size
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    "font-size":null,

    /**
     * the font style, either normal or italics
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    "font-style":null,

    /**
     * the font weight, either normal or bold
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    "font-weight":null,

    /**
     * <p>the table view footer title</p>
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    footerTitle:null,

    /**
     * <p>the table view footer as a view that will be rendered instead of a label</p>
     * platforms: android, iphone, ipad
     * @type object
     * @since 0.8
     */
    footerView:null,

    /**
     * <p>the table view header title</p>
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    headerTitle:null,

    /**
     * <p>the table view header as a view that will be rendered instead of a label</p>
     * platforms: android, iphone, ipad
     * @type object
     * @since 0.8
     */
    headerView:null,

    /**
     * property for the view height. Can be either a float value or a dimension string ie 'auto' (default).
     * platforms: android, iphone, ipad
     * @type float,string
     * @since 0.8
     */
    height:null,

    /**
     * <p>an array of objects (with title and index properties) to control the table view index</p>
     * platforms: android, iphone, ipad
     * @type array
     * @since 0.8
     */
    index:null,

    /**
     * property for the view left position. This position is relative to the view's parent. Can be either a float value or a dimension string ie 'auto' (default).
     * platforms: android, iphone, ipad
     * @type float,string
     * @since 0.8
     */
    left:null,

    /**
     * <p>max row height for table view rows</p>
     * platforms: android, iphone, ipad
     * @type float
     * @since 0.8
     */
    maxRowHeight:null,

    /**
     * <p>min row height for table view rows</p>
     * platforms: android, iphone, ipad
     * @type float
     * @since 0.8
     */
    minRowHeight:null,

    /**
     * <p>boolean to control the moveable state of the table view (iOS Only)</p>
     * platforms: android, iphone, ipad
     * @type boolean
     * @since 0.8
     */
    moving:null,

    /**
     * the opacity from 0.0-1.0
     * platforms: android, iphone, ipad
     * @type float
     * @since 0.8
     */
    opacity:null,

    /**
     * property for the view right position. This position is relative to the view's parent. Can be either a float value or a dimension string ie 'auto' (default).
     * platforms: android, iphone, ipad
     * @type float,string
     * @since 0.8
     */
    right:null,

    /**
     * <p>default row height for table view rows</p>
     * platforms: android, iphone, ipad
     * @type float
     * @since 0.8
     */
    rowHeight:null,

    /**
     * <p>true (default) if tableview can be scrolled</p>
     * platforms: android, iphone, ipad
     * @type boolean
     * @since 0.8
     */
    scrollable:null,

    /**
     * <p>the search field to use for the table view</p>
     * platforms: android, iphone, ipad
     * @type object
     * @since 0.8
     */
    search:null,

    /**
     * <p>boolean to control the visibility of the search field</p>
     * platforms: android, iphone, ipad
     * @type boolean
     * @since 0.8
     */
    searchHidden:null,

    /**
     * <p>the separator color color as a hex or named value</p>
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    separatorColor:null,

    /**
     * <p>the separator style constant. For iPhone, Titanium.UI.iPhone.TableViewSeparatorStyle</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.8
     */
    separatorStyle:null,

    /**
     * <p>true (default) if tableview displays vertical scroll indicator (iOS Only)</p>
     * platforms: android, iphone, ipad
     * @type boolean
     * @since 0.8
     */
    showVerticalScrollIndicator:null,

    /**
     * the size of the view as a dictionary of width and height properties
     * platforms: android, iphone, ipad
     * @type object
     * @since 0.8
     */
    size:null,

    /**
     * One of Titanium.UI.Android.SOFT_KEYBOARD_DEFAULT_ON_FOCUS, Titanium.UI.Android.SOFT_KEYBOARD_HIDE_ON_FOCUS, or Titanium.UI.Android.SOFT_KEYBOARD_SHOW_ON_FOCUS. (Android only)
     * platforms: android
     * @type int
     * @since 0.8
     */
    softKeyboardOnFocus:null,

    /**
     * <p>iPhone only. the style of the table view. constant from {@link Titanium.UI.iPhone.TableViewStyle}</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.8
     */
    style:null,

    /**
     * property for the view top position. This position is relative to the view's parent. Can be either a float value or a dimension string ie 'auto' (default).
     * platforms: android, iphone, ipad
     * @type float,string
     * @since 0.8
     */
    top:null,

    /**
     * a boolean indicating if the view should receive touch events (true, default) or forward them to peers (false)
     * platforms: android, iphone, ipad
     * @type boolean
     * @since 0.8
     */
    touchEnabled:null,

    /**
     * the transformation matrix to apply to the view
     * platforms: android, iphone, ipad
     * @type object
     * @since 0.8
     */
    transform:null,

    /**
     * a boolean of the visibility of the view
     * platforms: android, iphone, ipad
     * @type boolean
     * @since 0.8
     */
    visible:null,

    /**
     * property for the view width. Can be either a float value or a dimension string ie 'auto' (default).
     * platforms: android, iphone, ipad
     * @type float,string
     * @since 0.8
     */
    width:null,

    /**
     * the z index position relative to other sibling views
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.8
     */
    zIndex:null,


    /**
     * add a child to the view hierarchy
     * platforms: android, iphone, ipad
     * @param {object} view the view to add to this views hiearchy
     * @returns void
     * @since 0.8
     */
    add:function(view) {
    },

    /**
     * add an event listener for the instance to receive view triggered events
     * platforms: android, iphone, ipad
     * @param {string} name name of the event
     * @param {function} callback callback function to invoke when the event is fired
     * @returns void
     * @since 0.8
     */
    addEventListener:function(name, callback) {
    },

    /**
     * animate the view
     * platforms: android, iphone, ipad
     * @param {object} obj either a dictionary of animation properties or an Animation object
     * @param {function} callback function to be invoked upon completion of the animation
     * @returns void
     * @since 0.8
     */
    animate:function(obj, callback) {
    },

    /**
     * <p>append a row to the table, optionally with animation</p>
     * platforms: android, iphone, ipad
     * @param {object} row row to append
     * @param {object} properties animation properties
     * @returns void
     * @since 0.8
     */
    appendRow:function(row, properties) {
    },

    /**
     * <p>delete an existing row, optionally with animation</p>
     * platforms: android, iphone, ipad
     * @param {int} row index of row to delete
     * @param {object} properties animation properties
     * @returns void
     * @since 0.8
     */
    deleteRow:function(row, properties) {
    },

    /**
     * <p>programmatically deselect a row</p>
     * platforms: android, iphone, ipad
     * @param {int} row row index to deselect
     * @returns void
     * @since 0.8
     */
    deselectRow:function(row) {
    },

    /**
     * fire a synthesized event to the views listener
     * platforms: android, iphone, ipad
     * @param {string} name name of the event
     * @param {object} event event object
     * @returns void
     * @since 0.8
     */
    fireEvent:function(name, event) {
    },

    /**
     * hide the view
     * platforms: android, iphone, ipad
     * @returns void
     * @since 0.8
     */
    hide:function() {
    },

    /**
     * <p>insert a row before another row, optionally with animation</p>
     * platforms: android, iphone, ipad
     * @param {int} index index
     * @param {object} row row to insert
     * @param {object} properties animation properties
     * @returns void
     * @since 0.8
     */
    insertRowAfter:function(index, row, properties) {
    },

    /**
     * <p>insert a row after another row, optionally with animation</p>
     * platforms: android, iphone, ipad
     * @param {int} index index
     * @param {object} row row to insert
     * @param {object} properties animation properties
     * @returns void
     * @since 0.8
     */
    insertRowBefore:function(index, row, properties) {
    },

    /**
     * remove a previously add view from the view hiearchy
     * platforms: android, iphone, ipad
     * @param {object} view the view to remove from this views hiearchy
     * @returns void
     * @since 0.8
     */
    remove:function(view) {
    },

    /**
     * remove a previously added event listener
     * platforms: android, iphone, ipad
     * @param {string} name name of the event
     * @param {function} callback callback function passed in addEventListener
     * @returns void
     * @since 0.8
     */
    removeEventListener:function(name, callback) {
    },

    /**
     * <p>scroll to a specific row index and ensure that that row is on screen</p>
     * platforms: android, iphone, ipad
     * @param {int} index index
     * @param {object} properties animation properties. <tt>position</tt> property controls the position constant to use for position (on iPhone, use constants from Titanium.UI.iPhone.TableViewScrollPosition).
     * @returns void
     * @since 0.8
     */
    scrollToIndex:function(index, properties) {
    },

    /**
     * <p>scroll the table to a specific top position where 0 is the topmost y position in the table view</p>
     * platforms: android, iphone, ipad
     * @param {float} top y position
     * @param {object} properties optional dictionary with the key <tt>animated</tt> (default, true) as boolean to indicate if the scroll should be animated or immediate
     * @returns void
     * @since 0.8
     */
    scrollToTop:function(top, properties) {
    },

    /**
     * <p>programmatically select a row</p>
     * platforms: android, iphone, ipad
     * @param {int} row row index to select
     * @returns void
     * @since 0.8
     */
    selectRow:function(row) {
    },

    /**
     * <p>set the data in the table, optionally with animation</p>
     * platforms: android, iphone, ipad
     * @param {array} data data array of rows either as objects or row objects
     * @param {object} properties animation properties
     * @returns void
     * @since 0.8
     */
    setData:function(data, properties) {
    },

    /**
     * make the view visible
     * platforms: android, iphone, ipad
     * @returns void
     * @since 0.8
     */
    show:function() {
    },

    /**
     * return a Blob image of the rendered view
     * platforms: android, iphone, ipad
     * @param {function} f function to be invoked upon completion. if non-null, this method will be performed asynchronously. if null, it will be performed immediately
     * @since 0.8
     */
    toImage:function(f) {
    },

    /**
     * <p>update an existing row, optionally with animation</p>
     * platforms: android, iphone, ipad
     * @param {object} row row data to update
     * @param {object} properties animation properties
     * @returns void
     * @since 0.8
     */
    updateRow:function(row, properties) {
    }
}

/**
 * Notes: <p>Make sure you set the tableClass on each row instance if using more than one type of row layout. You can use the same value for each instance of a row where the layout is the same - even if the value of the elements inside the row have different values.  For example, if the text is the only thing different between two cells but the layout is the same, both row instances should have the same value for tableClass.</p>
<p>You can listen for table row events on all rows by adding an event listener to the table view instance.  Events automatically propagate to parent views.</p>
 * platforms: android, iphone, ipad
 * @namespace <p>A TableView row object created by the method {@link Titanium.UI.createTableViewRow}.</p>
 * @since 0.9
 * 
 * @example Simple Table View Row example
 * <p>In this simple example, we create a table view row with a red square in the cell.</p>
<pre><code>var row = Titanium.UI.createTableViewRow();
var view = Titanium.UI.createView({backgroundColor:'red',width:20,height:20});
row.height = 'auto';
row.add(view);
</code></pre>
 */
Ti.UI.TableViewRow = {

    /**
     * a dictionary with properties x and y to indicate the anchor point value. anchor specifies the position by which animation should occur. center is 0.5, 0.5
     * platforms: android, iphone, ipad
     * @type object
     * @since 0.9
     */
    anchorPoint:null,

    /**
     * read-only object with x and y properties of where the view is during animation
     * platforms: android, iphone, ipad
     * @type object
     * @since 0.9
     */
    animatedCenterPoint:null,

    /**
     * the background color of the view
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.9
     */
    backgroundColor:null,

    /**
     * the disabled background color of the view. (Android)
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.9
     */
    backgroundDisabledColor:null,

    /**
     * the disabled background image url of the view. (Android)
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.9
     */
    backgroundDisabledImage:null,

    /**
     * the focused background color of the view. focusable must be true for normal views. (Android)
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.9
     */
    backgroundFocusedColor:null,

    /**
     * the focused background image url of the view. focusable must be true for normal views. (Android)
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.9
     */
    backgroundFocusedImage:null,

    /**
     * a background gradient for the view with the properties: type,startPoint,endPoint,startRadius,endRadius,backfillStart,backfillEnd,colors.
     * platforms: android, iphone, ipad
     * @type object
     * @since 0.9
     */
    backgroundGradient:null,

    /**
     * the background image url of the view
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.9
     */
    backgroundImage:null,

    /**
     * End caps specify the portion of an image that should not be resized when an image is stretched. This technique is used to implement buttons and other resizable image-based interface elements. When a button with end caps is resized, the resizing occurs only in the middle of the button, in the region between the end caps. The end caps themselves keep their original size and appearance. This property specifies the size of the left end cap. The middle (stretchable) portion is assumed to be 1 pixel wide. The right end cap is therefore computed by adding the size of the left end cap and the middle portion together and then subtracting that value from the width of the image
     * platforms: android, iphone, ipad
     * @type float
     * @since 0.9
     */
    backgroundLeftCap:null,

    /**
     * the selected background color of the view. focusable must be true for normal views. (Android)
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.9
     */
    backgroundSelectedColor:null,

    /**
     * the selected background image url of the view. focusable must be true for normal views. (Android)
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.9
     */
    backgroundSelectedImage:null,

    /**
     * End caps specify the portion of an image that should not be resized when an image is stretched. This technique is used to implement buttons and other resizable image-based interface elements. When a button with end caps is resized, the resizing occurs only in the middle of the button, in the region between the end caps. The end caps themselves keep their original size and appearance. This property specifies the size of the top end cap. The middle (stretchable) portion is assumed to be 1 pixel wide. The bottom end cap is therefore computed by adding the size of the top end cap and the middle portion together and then subtracting that value from the height of the image
     * platforms: android, iphone, ipad
     * @type float
     * @since 0.9
     */
    backgroundTopCap:null,

    /**
     * the border color of the view
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.9
     */
    borderColor:null,

    /**
     * the border radius of the view
     * platforms: android, iphone, ipad
     * @type float
     * @since 0.9
     */
    borderRadius:null,

    /**
     * the border width of the view
     * platforms: android, iphone, ipad
     * @type float
     * @since 0.9
     */
    borderWidth:null,

    /**
     * property for the view bottom position. This position is relative to the view's parent. Can be either a float value or a dimension string ie 'auto' (default).
     * platforms: android, iphone, ipad
     * @type float,string
     * @since 0.9
     */
    bottom:null,

    /**
     * a dictionary with properties x and y to indicate the center of the views position relative to the parent view
     * platforms: android, iphone, ipad
     * @type object
     * @since 0.9
     */
    center:null,

    /**
     * <p>the class name of the table. each table view cell must have a unique class name if the cell layout is different. however, use the same name for rows that have the same structural layout (even if the content is different) to provide maximum rendering performance.</p>
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.9
     */
    className:null,

    /**
     * <p>default color of the row when not selected</p>
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.9
     */
    color:null,

    /**
     * Set true if you want a view to be focusable when navigating with the trackball or D-Pad. Default: false. (Android Only)
     * platforms: android
     * @type boolean
     * @since 0.9
     */
    focusable:null,

    /**
     * the font family
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.9
     */
    "font-family":null,

    /**
     * the font size
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.9
     */
    "font-size":null,

    /**
     * the font style, either normal or italics
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.9
     */
    "font-style":null,

    /**
     * the font weight, either normal or bold
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.9
     */
    "font-weight":null,

    /**
     * <p>render a system provided check mark in the right image area of the row cell</p>
     * platforms: android, iphone, ipad
     * @type boolean
     * @since 0.9
     */
    hasCheck:null,

    /**
     * <p>render a system provided right arrow in the right image area of the row cell</p>
     * platforms: android, iphone, ipad
     * @type boolean
     * @since 0.9
     */
    hasChild:null,

    /**
     * <p>render a system provided blue indicator icon in the right image area of the row cell</p>
     * platforms: android, iphone, ipad
     * @type boolean
     * @since 0.9
     */
    hasDetail:null,

    /**
     * property for the view height. Can be either a float value or a dimension string ie 'auto' (default).
     * platforms: android, iphone, ipad
     * @type float,string
     * @since 0.9
     */
    height:null,

    /**
     * <p>the indention level for the cell (defaults to 0)</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.9
     */
    indentionLevel:null,

    /**
     * <p>the layout algorithm to use for the layout. either absolute (default) or vertical.</p>
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.9
     */
    layout:null,

    /**
     * property for the view left position. This position is relative to the view's parent. Can be either a float value or a dimension string ie 'auto' (default).
     * platforms: android, iphone, ipad
     * @type float,string
     * @since 0.9
     */
    left:null,

    /**
     * <p>image url to render in the left image area of the row cell</p>
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.9
     */
    leftImage:null,

    /**
     * the opacity from 0.0-1.0
     * platforms: android, iphone, ipad
     * @type float
     * @since 0.9
     */
    opacity:null,

    /**
     * property for the view right position. This position is relative to the view's parent. Can be either a float value or a dimension string ie 'auto' (default).
     * platforms: android, iphone, ipad
     * @type float,string
     * @since 0.9
     */
    right:null,

    /**
     * <p>image url to render in the right image area of the row cell</p>
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.9
     */
    rightImage:null,

    /**
     * <p>the background color to render when the row cell is selected</p>
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.9
     */
    selectedBackgroundColor:null,

    /**
     * <p>the background image to render when the row cell is selected</p>
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.9
     */
    selectedBackgroundImage:null,

    /**
     * <p>color of the row during selection</p>
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.9
     */
    selectedColor:null,

    /**
     * <p>a selection style constant to control the selection color. For iPhone, use the constants from Titanium.UI.iPhone.TableViewCellSelectionStyle</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.9
     */
    selectionStyle:null,

    /**
     * the size of the view as a dictionary of width and height properties
     * platforms: android, iphone, ipad
     * @type object
     * @since 0.9
     */
    size:null,

    /**
     * One of Titanium.UI.Android.SOFT_KEYBOARD_DEFAULT_ON_FOCUS, Titanium.UI.Android.SOFT_KEYBOARD_HIDE_ON_FOCUS, or Titanium.UI.Android.SOFT_KEYBOARD_SHOW_ON_FOCUS. (Android only)
     * platforms: android
     * @type int
     * @since 0.9
     */
    softKeyboardOnFocus:null,

    /**
     * <p>the title cell value. do not specify if using views as children of the row</p>
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.9
     */
    title:null,

    /**
     * property for the view top position. This position is relative to the view's parent. Can be either a float value or a dimension string ie 'auto' (default).
     * platforms: android, iphone, ipad
     * @type float,string
     * @since 0.9
     */
    top:null,

    /**
     * a boolean indicating if the view should receive touch events (true, default) or forward them to peers (false)
     * platforms: android, iphone, ipad
     * @type boolean
     * @since 0.9
     */
    touchEnabled:null,

    /**
     * the transformation matrix to apply to the view
     * platforms: android, iphone, ipad
     * @type object
     * @since 0.9
     */
    transform:null,

    /**
     * a boolean of the visibility of the view
     * platforms: android, iphone, ipad
     * @type boolean
     * @since 0.9
     */
    visible:null,

    /**
     * property for the view width. Can be either a float value or a dimension string ie 'auto' (default).
     * platforms: android, iphone, ipad
     * @type float,string
     * @since 0.9
     */
    width:null,

    /**
     * the z index position relative to other sibling views
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.9
     */
    zIndex:null,


    /**
     * add a child to the view hierarchy
     * platforms: android, iphone, ipad
     * @param {object} view the view to add to this views hiearchy
     * @returns void
     * @since 0.9
     */
    add:function(view) {
    },

    /**
     * add an event listener for the instance to receive view triggered events
     * platforms: android, iphone, ipad
     * @param {string} name name of the event
     * @param {function} callback callback function to invoke when the event is fired
     * @returns void
     * @since 0.9
     */
    addEventListener:function(name, callback) {
    },

    /**
     * animate the view
     * platforms: android, iphone, ipad
     * @param {object} obj either a dictionary of animation properties or an Animation object
     * @param {function} callback function to be invoked upon completion of the animation
     * @returns void
     * @since 0.9
     */
    animate:function(obj, callback) {
    },

    /**
     * fire a synthesized event to the views listener
     * platforms: android, iphone, ipad
     * @param {string} name name of the event
     * @param {object} event event object
     * @returns void
     * @since 0.9
     */
    fireEvent:function(name, event) {
    },

    /**
     * hide the view
     * platforms: android, iphone, ipad
     * @returns void
     * @since 0.9
     */
    hide:function() {
    },

    /**
     * remove a previously add view from the view hiearchy
     * platforms: android, iphone, ipad
     * @param {object} view the view to remove from this views hiearchy
     * @returns void
     * @since 0.9
     */
    remove:function(view) {
    },

    /**
     * remove a previously added event listener
     * platforms: android, iphone, ipad
     * @param {string} name name of the event
     * @param {function} callback callback function passed in addEventListener
     * @returns void
     * @since 0.9
     */
    removeEventListener:function(name, callback) {
    },

    /**
     * make the view visible
     * platforms: android, iphone, ipad
     * @returns void
     * @since 0.9
     */
    show:function() {
    },

    /**
     * return a Blob image of the rendered view
     * platforms: android, iphone, ipad
     * @param {function} f function to be invoked upon completion. if non-null, this method will be performed asynchronously. if null, it will be performed immediately
     * @since 0.9
     */
    toImage:function(f) {
    }
}

/**
 * platforms: android, iphone, ipad
 * @namespace <p>A TableView section object created by the method {@link Titanium.UI.createTableViewSection}.</p>
 * @since 0.9
 * 
 * @example Simple Table View Section Example
 * <p>In this example, we create a section with the header <tt>Hello</tt> and add two rows to it.</p>
<pre><code>var section = Titanium.UI.createTableViewSection();
section.headerTitle = "Hello";
var row1 = Titanium.UI.createTableViewRow({title:"Hello 1"});
var row2 = Titanium.UI.createTableViewRow({title:"Hello 2"});
section.add(row1);
section.add(row2);
tableview.add(section);
</code></pre>
 */
Ti.UI.TableViewSection = {

    /**
     * a dictionary with properties x and y to indicate the anchor point value. anchor specifies the position by which animation should occur. center is 0.5, 0.5
     * platforms: android, iphone, ipad
     * @type object
     * @since 0.9
     */
    anchorPoint:null,

    /**
     * read-only object with x and y properties of where the view is during animation
     * platforms: android, iphone, ipad
     * @type object
     * @since 0.9
     */
    animatedCenterPoint:null,

    /**
     * the background color of the view
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.9
     */
    backgroundColor:null,

    /**
     * the disabled background color of the view. (Android)
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.9
     */
    backgroundDisabledColor:null,

    /**
     * the disabled background image url of the view. (Android)
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.9
     */
    backgroundDisabledImage:null,

    /**
     * the focused background color of the view. focusable must be true for normal views. (Android)
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.9
     */
    backgroundFocusedColor:null,

    /**
     * the focused background image url of the view. focusable must be true for normal views. (Android)
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.9
     */
    backgroundFocusedImage:null,

    /**
     * a background gradient for the view with the properties: type,startPoint,endPoint,startRadius,endRadius,backfillStart,backfillEnd,colors.
     * platforms: android, iphone, ipad
     * @type object
     * @since 0.9
     */
    backgroundGradient:null,

    /**
     * the background image url of the view
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.9
     */
    backgroundImage:null,

    /**
     * End caps specify the portion of an image that should not be resized when an image is stretched. This technique is used to implement buttons and other resizable image-based interface elements. When a button with end caps is resized, the resizing occurs only in the middle of the button, in the region between the end caps. The end caps themselves keep their original size and appearance. This property specifies the size of the left end cap. The middle (stretchable) portion is assumed to be 1 pixel wide. The right end cap is therefore computed by adding the size of the left end cap and the middle portion together and then subtracting that value from the width of the image
     * platforms: android, iphone, ipad
     * @type float
     * @since 0.9
     */
    backgroundLeftCap:null,

    /**
     * the selected background color of the view. focusable must be true for normal views. (Android)
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.9
     */
    backgroundSelectedColor:null,

    /**
     * the selected background image url of the view. focusable must be true for normal views. (Android)
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.9
     */
    backgroundSelectedImage:null,

    /**
     * End caps specify the portion of an image that should not be resized when an image is stretched. This technique is used to implement buttons and other resizable image-based interface elements. When a button with end caps is resized, the resizing occurs only in the middle of the button, in the region between the end caps. The end caps themselves keep their original size and appearance. This property specifies the size of the top end cap. The middle (stretchable) portion is assumed to be 1 pixel wide. The bottom end cap is therefore computed by adding the size of the top end cap and the middle portion together and then subtracting that value from the height of the image
     * platforms: android, iphone, ipad
     * @type float
     * @since 0.9
     */
    backgroundTopCap:null,

    /**
     * the border color of the view
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.9
     */
    borderColor:null,

    /**
     * the border radius of the view
     * platforms: android, iphone, ipad
     * @type float
     * @since 0.9
     */
    borderRadius:null,

    /**
     * the border width of the view
     * platforms: android, iphone, ipad
     * @type float
     * @since 0.9
     */
    borderWidth:null,

    /**
     * property for the view bottom position. This position is relative to the view's parent. Can be either a float value or a dimension string ie 'auto' (default).
     * platforms: android, iphone, ipad
     * @type float,string
     * @since 0.9
     */
    bottom:null,

    /**
     * a dictionary with properties x and y to indicate the center of the views position relative to the parent view
     * platforms: android, iphone, ipad
     * @type object
     * @since 0.9
     */
    center:null,

    /**
     * Set true if you want a view to be focusable when navigating with the trackball or D-Pad. Default: false. (Android Only)
     * platforms: android
     * @type boolean
     * @since 0.9
     */
    focusable:null,

    /**
     * the font family
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.9
     */
    "font-family":null,

    /**
     * the font size
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.9
     */
    "font-size":null,

    /**
     * the font style, either normal or italics
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.9
     */
    "font-style":null,

    /**
     * the font weight, either normal or bold
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.9
     */
    "font-weight":null,

    /**
     * <p>the title of the section footer</p>
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.9
     */
    footerTitle:null,

    /**
     * <p>a view to use instead of the default label when rendering the section footer</p>
     * platforms: android, iphone, ipad
     * @type object
     * @since 0.9
     */
    footerView:null,

    /**
     * <p>the title of the section header</p>
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.9
     */
    headerTitle:null,

    /**
     * <p>a view to use instead of the default label when rendering the section header</p>
     * platforms: android, iphone, ipad
     * @type object
     * @since 0.9
     */
    headerView:null,

    /**
     * property for the view height. Can be either a float value or a dimension string ie 'auto' (default).
     * platforms: android, iphone, ipad
     * @type float,string
     * @since 0.9
     */
    height:null,

    /**
     * property for the view left position. This position is relative to the view's parent. Can be either a float value or a dimension string ie 'auto' (default).
     * platforms: android, iphone, ipad
     * @type float,string
     * @since 0.9
     */
    left:null,

    /**
     * the opacity from 0.0-1.0
     * platforms: android, iphone, ipad
     * @type float
     * @since 0.9
     */
    opacity:null,

    /**
     * property for the view right position. This position is relative to the view's parent. Can be either a float value or a dimension string ie 'auto' (default).
     * platforms: android, iphone, ipad
     * @type float,string
     * @since 0.9
     */
    right:null,

    /**
     * <p>the (readonly) number of rows in the section</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.9
     */
    rowCount:null,

    /**
     * the size of the view as a dictionary of width and height properties
     * platforms: android, iphone, ipad
     * @type object
     * @since 0.9
     */
    size:null,

    /**
     * One of Titanium.UI.Android.SOFT_KEYBOARD_DEFAULT_ON_FOCUS, Titanium.UI.Android.SOFT_KEYBOARD_HIDE_ON_FOCUS, or Titanium.UI.Android.SOFT_KEYBOARD_SHOW_ON_FOCUS. (Android only)
     * platforms: android
     * @type int
     * @since 0.9
     */
    softKeyboardOnFocus:null,

    /**
     * property for the view top position. This position is relative to the view's parent. Can be either a float value or a dimension string ie 'auto' (default).
     * platforms: android, iphone, ipad
     * @type float,string
     * @since 0.9
     */
    top:null,

    /**
     * a boolean indicating if the view should receive touch events (true, default) or forward them to peers (false)
     * platforms: android, iphone, ipad
     * @type boolean
     * @since 0.9
     */
    touchEnabled:null,

    /**
     * the transformation matrix to apply to the view
     * platforms: android, iphone, ipad
     * @type object
     * @since 0.9
     */
    transform:null,

    /**
     * a boolean of the visibility of the view
     * platforms: android, iphone, ipad
     * @type boolean
     * @since 0.9
     */
    visible:null,

    /**
     * property for the view width. Can be either a float value or a dimension string ie 'auto' (default).
     * platforms: android, iphone, ipad
     * @type float,string
     * @since 0.9
     */
    width:null,

    /**
     * the z index position relative to other sibling views
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.9
     */
    zIndex:null,


    /**
     * add a child to the view hierarchy
     * platforms: android, iphone, ipad
     * @param {object} row the row object to add to the section
     * @param {object} view the view to add to this views hiearchy
     * @returns void
     * @since 0.9
     */
    add:function(row, view) {
    },

    /**
     * add an event listener for the instance to receive view triggered events
     * platforms: android, iphone, ipad
     * @param {string} name name of the event
     * @param {function} callback callback function to invoke when the event is fired
     * @returns void
     * @since 0.9
     */
    addEventListener:function(name, callback) {
    },

    /**
     * animate the view
     * platforms: android, iphone, ipad
     * @param {object} obj either a dictionary of animation properties or an Animation object
     * @param {function} callback function to be invoked upon completion of the animation
     * @returns void
     * @since 0.9
     */
    animate:function(obj, callback) {
    },

    /**
     * fire a synthesized event to the views listener
     * platforms: android, iphone, ipad
     * @param {string} name name of the event
     * @param {object} event event object
     * @returns void
     * @since 0.9
     */
    fireEvent:function(name, event) {
    },

    /**
     * hide the view
     * platforms: android, iphone, ipad
     * @returns void
     * @since 0.9
     */
    hide:function() {
    },

    /**
     * remove a previously add view from the view hiearchy
     * platforms: android, iphone, ipad
     * @param {object} row the row object to remove from the section
     * @param {object} view the view to remove from this views hiearchy
     * @returns void
     * @since 0.9
     */
    remove:function(row, view) {
    },

    /**
     * remove a previously added event listener
     * platforms: android, iphone, ipad
     * @param {string} name name of the event
     * @param {function} callback callback function passed in addEventListener
     * @returns void
     * @since 0.9
     */
    removeEventListener:function(name, callback) {
    },

    /**
     * make the view visible
     * platforms: android, iphone, ipad
     * @returns void
     * @since 0.9
     */
    show:function() {
    },

    /**
     * return a Blob image of the rendered view
     * platforms: android, iphone, ipad
     * @param {function} f function to be invoked upon completion. if non-null, this method will be performed asynchronously. if null, it will be performed immediately
     * @since 0.9
     */
    toImage:function(f) {
    }
}

/**
 * Notes: <p>Both Text Areas and Text Fields can control the buttons displayed in a button bar above the keyboard when it's visible.</p>
<p>Example using a custom keyboard toolbar:</p>
<pre><code>var textfield = Titanium.UI.createTextField({
    color:'#336699',
    value:'Focus to see keyboard w/ toolbar',
    height:35,
    width:300,
    top:10,
    borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
    keyboardToolbar:[flexSpace,camera, flexSpace,tf,flexSpace, send,flexSpace],
    keyboardToolbarColor: '#999',   
    keyboardToolbarHeight: 40,
});
</code></pre>
 * platforms: android, iphone, ipad
 * @namespace <p>A Text Area is created by the method {@link Titanium.UI.createTextArea}. The Text Area is a multiline field.</p>
 * @since 0.8
 * 
 * @example Basic Text Area with Customizations
 * <p>This example created a highly customized text area.</p>
<pre><code>var ta1 = Titanium.UI.createTextArea({
    value:'I am a textarea',
    height:70,
    width:300,
    top:60,
    font:{fontSize:20,fontFamily:'Marker Felt', fontWeight:'bold'},
    color:'#888',
    textAlign:'left',
    appearance:Titanium.UI.KEYBOARD_APPEARANCE_ALERT,   
    keyboardType:Titanium.UI.KEYBOARD_NUMBERS_PUNCTUATION,
    returnKeyType:Titanium.UI.RETURNKEY_EMERGENCY_CALL,
    borderWidth:2,
    borderColor:'#bbb',
    borderRadius:5
});
</code></pre>
 */
Ti.UI.TextArea = {

    /**
     * a dictionary with properties x and y to indicate the anchor point value. anchor specifies the position by which animation should occur. center is 0.5, 0.5
     * platforms: android, iphone, ipad
     * @type object
     * @since 0.8
     */
    anchorPoint:null,

    /**
     * read-only object with x and y properties of where the view is during animation
     * platforms: android, iphone, ipad
     * @type object
     * @since 0.8
     */
    animatedCenterPoint:null,

    /**
     * <p>whether or not to convert text within this area to clickable links.  iOS only.</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.8
     */
    autoLink:null,

    /**
     * <p>One of {@link Titanium.UI.TEXT_AUTOCAPITALIZATION_NONE}, {@link Titanium.UI.TEXT_AUTOCAPITALIZATION_WORDS}, {@link Titanium.UI.TEXT_AUTOCAPITALIZATION_SENTENCES}, or {@link Titanium.UI.TEXT_AUTOCAPITALIZATION_ALL} to indicate how the field should be capitalized during typing. (only Android)</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.8
     */
    autocapitalization:null,

    /**
     * the background color of the view
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    backgroundColor:null,

    /**
     * the disabled background color of the view. (Android)
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    backgroundDisabledColor:null,

    /**
     * the disabled background image url of the view. (Android)
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    backgroundDisabledImage:null,

    /**
     * the focused background color of the view. focusable must be true for normal views. (Android)
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    backgroundFocusedColor:null,

    /**
     * the focused background image url of the view. focusable must be true for normal views. (Android)
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    backgroundFocusedImage:null,

    /**
     * a background gradient for the view with the properties: type,startPoint,endPoint,startRadius,endRadius,backfillStart,backfillEnd,colors.
     * platforms: android, iphone, ipad
     * @type object
     * @since 0.8
     */
    backgroundGradient:null,

    /**
     * the background image url of the view
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    backgroundImage:null,

    /**
     * End caps specify the portion of an image that should not be resized when an image is stretched. This technique is used to implement buttons and other resizable image-based interface elements. When a button with end caps is resized, the resizing occurs only in the middle of the button, in the region between the end caps. The end caps themselves keep their original size and appearance. This property specifies the size of the left end cap. The middle (stretchable) portion is assumed to be 1 pixel wide. The right end cap is therefore computed by adding the size of the left end cap and the middle portion together and then subtracting that value from the width of the image
     * platforms: android, iphone, ipad
     * @type float
     * @since 0.8
     */
    backgroundLeftCap:null,

    /**
     * the selected background color of the view. focusable must be true for normal views. (Android)
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    backgroundSelectedColor:null,

    /**
     * the selected background image url of the view. focusable must be true for normal views. (Android)
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    backgroundSelectedImage:null,

    /**
     * End caps specify the portion of an image that should not be resized when an image is stretched. This technique is used to implement buttons and other resizable image-based interface elements. When a button with end caps is resized, the resizing occurs only in the middle of the button, in the region between the end caps. The end caps themselves keep their original size and appearance. This property specifies the size of the top end cap. The middle (stretchable) portion is assumed to be 1 pixel wide. The bottom end cap is therefore computed by adding the size of the top end cap and the middle portion together and then subtracting that value from the height of the image
     * platforms: android, iphone, ipad
     * @type float
     * @since 0.8
     */
    backgroundTopCap:null,

    /**
     * the border color of the view
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    borderColor:null,

    /**
     * the border radius of the view
     * platforms: android, iphone, ipad
     * @type float
     * @since 0.8
     */
    borderRadius:null,

    /**
     * the border width of the view
     * platforms: android, iphone, ipad
     * @type float
     * @since 0.8
     */
    borderWidth:null,

    /**
     * property for the view bottom position. This position is relative to the view's parent. Can be either a float value or a dimension string ie 'auto' (default).
     * platforms: android, iphone, ipad
     * @type float,string
     * @since 0.8
     */
    bottom:null,

    /**
     * a dictionary with properties x and y to indicate the center of the views position relative to the parent view
     * platforms: android, iphone, ipad
     * @type object
     * @since 0.8
     */
    center:null,

    /**
     * <p>boolean indicating if the field is editable</p>
     * platforms: android, iphone, ipad
     * @type boolean
     * @since 0.8
     */
    editable:null,

    /**
     * <p>boolean indicating the enabled state of the field</p>
     * platforms: android, iphone, ipad
     * @type boolean
     * @since 0.8
     */
    enabled:null,

    /**
     * Set true if you want a view to be focusable when navigating with the trackball or D-Pad. Default: false. (Android Only)
     * platforms: android
     * @type boolean
     * @since 0.8
     */
    focusable:null,

    /**
     * the font family
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    "font-family":null,

    /**
     * the font size
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    "font-size":null,

    /**
     * the font style, either normal or italics
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    "font-style":null,

    /**
     * the font weight, either normal or bold
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    "font-weight":null,

    /**
     * property for the view height. Can be either a float value or a dimension string ie 'auto' (default).
     * platforms: android, iphone, ipad
     * @type float,string
     * @since 0.8
     */
    height:null,

    /**
     * <p>array of toolbar button objects to be used when the keyboard is displayed</p>
     * platforms: android, iphone, ipad
     * @type array
     * @since 0.8
     */
    keyboardToolbar:null,

    /**
     * <p>the color of the keyboard toolbar</p>
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    keyboardToolbarColor:null,

    /**
     * <p>the height of the keyboard toolbar</p>
     * platforms: android, iphone, ipad
     * @type float
     * @since 0.8
     */
    keyboardToolbarHeight:null,

    /**
     * property for the view left position. This position is relative to the view's parent. Can be either a float value or a dimension string ie 'auto' (default).
     * platforms: android, iphone, ipad
     * @type float,string
     * @since 0.8
     */
    left:null,

    /**
     * the opacity from 0.0-1.0
     * platforms: android, iphone, ipad
     * @type float
     * @since 0.8
     */
    opacity:null,

    /**
     * property for the view right position. This position is relative to the view's parent. Can be either a float value or a dimension string ie 'auto' (default).
     * platforms: android, iphone, ipad
     * @type float,string
     * @since 0.8
     */
    right:null,

    /**
     * the size of the view as a dictionary of width and height properties
     * platforms: android, iphone, ipad
     * @type object
     * @since 0.8
     */
    size:null,

    /**
     * One of Titanium.UI.Android.SOFT_KEYBOARD_DEFAULT_ON_FOCUS, Titanium.UI.Android.SOFT_KEYBOARD_HIDE_ON_FOCUS, or Titanium.UI.Android.SOFT_KEYBOARD_SHOW_ON_FOCUS. (Android only)
     * platforms: android
     * @type int
     * @since 0.8
     */
    softKeyboardOnFocus:null,

    /**
     * <p>boolean to indicate if the return key should be suppressed during entry</p>
     * platforms: android, iphone, ipad
     * @type boolean
     * @since 0.8
     */
    suppressReturn:null,

    /**
     * property for the view top position. This position is relative to the view's parent. Can be either a float value or a dimension string ie 'auto' (default).
     * platforms: android, iphone, ipad
     * @type float,string
     * @since 0.8
     */
    top:null,

    /**
     * a boolean indicating if the view should receive touch events (true, default) or forward them to peers (false)
     * platforms: android, iphone, ipad
     * @type boolean
     * @since 0.8
     */
    touchEnabled:null,

    /**
     * the transformation matrix to apply to the view
     * platforms: android, iphone, ipad
     * @type object
     * @since 0.8
     */
    transform:null,

    /**
     * <p>value of the field</p>
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    value:null,

    /**
     * a boolean of the visibility of the view
     * platforms: android, iphone, ipad
     * @type boolean
     * @since 0.8
     */
    visible:null,

    /**
     * property for the view width. Can be either a float value or a dimension string ie 'auto' (default).
     * platforms: android, iphone, ipad
     * @type float,string
     * @since 0.8
     */
    width:null,

    /**
     * the z index position relative to other sibling views
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.8
     */
    zIndex:null,


    /**
     * add a child to the view hierarchy
     * platforms: android, iphone, ipad
     * @param {object} view the view to add to this views hiearchy
     * @returns void
     * @since 0.8
     */
    add:function(view) {
    },

    /**
     * add an event listener for the instance to receive view triggered events
     * platforms: android, iphone, ipad
     * @param {string} name name of the event
     * @param {function} callback callback function to invoke when the event is fired
     * @returns void
     * @since 0.8
     */
    addEventListener:function(name, callback) {
    },

    /**
     * animate the view
     * platforms: android, iphone, ipad
     * @param {object} obj either a dictionary of animation properties or an Animation object
     * @param {function} callback function to be invoked upon completion of the animation
     * @returns void
     * @since 0.8
     */
    animate:function(obj, callback) {
    },

    /**
     * <p>force the field to lose focus</p>
     * platforms: android, iphone, ipad
     * @returns void
     * @since 0.8
     */
    blur:function() {
    },

    /**
     * fire a synthesized event to the views listener
     * platforms: android, iphone, ipad
     * @param {string} name name of the event
     * @param {object} event event object
     * @returns void
     * @since 0.8
     */
    fireEvent:function(name, event) {
    },

    /**
     * <p>force the field to gain focus</p>
     * platforms: android, iphone, ipad
     * @returns void
     * @since 0.8
     */
    focus:function() {
    },

    /**
     * <p>return boolean (true) if the field has text</p>
     * platforms: android, iphone, ipad
     * @returns void
     * @since 0.8
     */
    hasText:function() {
    },

    /**
     * hide the view
     * platforms: android, iphone, ipad
     * @returns void
     * @since 0.8
     */
    hide:function() {
    },

    /**
     * remove a previously add view from the view hiearchy
     * platforms: android, iphone, ipad
     * @param {object} view the view to remove from this views hiearchy
     * @returns void
     * @since 0.8
     */
    remove:function(view) {
    },

    /**
     * remove a previously added event listener
     * platforms: android, iphone, ipad
     * @param {string} name name of the event
     * @param {function} callback callback function passed in addEventListener
     * @returns void
     * @since 0.8
     */
    removeEventListener:function(name, callback) {
    },

    /**
     * make the view visible
     * platforms: android, iphone, ipad
     * @returns void
     * @since 0.8
     */
    show:function() {
    },

    /**
     * return a Blob image of the rendered view
     * platforms: android, iphone, ipad
     * @param {function} f function to be invoked upon completion. if non-null, this method will be performed asynchronously. if null, it will be performed immediately
     * @since 0.8
     */
    toImage:function(f) {
    }
}

/**
 * Notes: <p>On iPhone, the borderStyle can be set with a constant from {@link Titanium.UI}.</p>
<p>Both Text Areas and Text Fields can control the buttons displayed in a button bar above the keyboard when it's visible.</p>
<p>Example using a custom keyboard toolbar:</p>
<pre><code>var textfield = Titanium.UI.createTextField({
    color:'#336699',
    value:'Focus to see keyboard w/ toolbar',
    height:35,
    width:300,
    top:10,
    borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
    keyboardToolbar:[flexSpace,camera, flexSpace,tf,flexSpace, send,flexSpace],
    keyboardToolbarColor: '#999',   
    keyboardToolbarHeight: 40,
});
</code></pre>
 * platforms: android, iphone, ipad
 * @namespace <p>A Text Area is created by the method {@link Titanium.UI.createTextField}. The Text Field is a single line field.</p>
 * @since 0.8
 * 
 * @example Basic Text Field with rounded border
 * <p>Create a simple text field with a round border style.</p>
<pre><code>var tf1 = Titanium.UI.createTextField({
    color:'#336699',
    height:35,
    top:10,
    left:10,
    width:250,
    borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
});
</code></pre>
 */
Ti.UI.TextField = {

    /**
     * a dictionary with properties x and y to indicate the anchor point value. anchor specifies the position by which animation should occur. center is 0.5, 0.5
     * platforms: android, iphone, ipad
     * @type object
     * @since 0.8
     */
    anchorPoint:null,

    /**
     * read-only object with x and y properties of where the view is during animation
     * platforms: android, iphone, ipad
     * @type object
     * @since 0.8
     */
    animatedCenterPoint:null,

    /**
     * <p>One of {@link Titanium.UI.TEXT_AUTOCAPITALIZATION_NONE}, {@link Titanium.UI.TEXT_AUTOCAPITALIZATION_WORDS}, {@link Titanium.UI.TEXT_AUTOCAPITALIZATION_SENTENCES}, or {@link Titanium.UI.TEXT_AUTOCAPITALIZATION_ALL} to indicate how the field should be capitalized during typing.</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.8
     */
    autocapitalization:null,

    /**
     * the background color of the view
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    backgroundColor:null,

    /**
     * the disabled background color of the view. (Android)
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    backgroundDisabledColor:null,

    /**
     * the disabled background image url of the view. (Android)
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    backgroundDisabledImage:null,

    /**
     * the focused background color of the view. focusable must be true for normal views. (Android)
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    backgroundFocusedColor:null,

    /**
     * the focused background image url of the view. focusable must be true for normal views. (Android)
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    backgroundFocusedImage:null,

    /**
     * a background gradient for the view with the properties: type,startPoint,endPoint,startRadius,endRadius,backfillStart,backfillEnd,colors.
     * platforms: android, iphone, ipad
     * @type object
     * @since 0.8
     */
    backgroundGradient:null,

    /**
     * the background image url of the view
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    backgroundImage:null,

    /**
     * End caps specify the portion of an image that should not be resized when an image is stretched. This technique is used to implement buttons and other resizable image-based interface elements. When a button with end caps is resized, the resizing occurs only in the middle of the button, in the region between the end caps. The end caps themselves keep their original size and appearance. This property specifies the size of the left end cap. The middle (stretchable) portion is assumed to be 1 pixel wide. The right end cap is therefore computed by adding the size of the left end cap and the middle portion together and then subtracting that value from the width of the image
     * platforms: android, iphone, ipad
     * @type float
     * @since 0.8
     */
    backgroundLeftCap:null,

    /**
     * the selected background color of the view. focusable must be true for normal views. (Android)
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    backgroundSelectedColor:null,

    /**
     * the selected background image url of the view. focusable must be true for normal views. (Android)
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    backgroundSelectedImage:null,

    /**
     * End caps specify the portion of an image that should not be resized when an image is stretched. This technique is used to implement buttons and other resizable image-based interface elements. When a button with end caps is resized, the resizing occurs only in the middle of the button, in the region between the end caps. The end caps themselves keep their original size and appearance. This property specifies the size of the top end cap. The middle (stretchable) portion is assumed to be 1 pixel wide. The bottom end cap is therefore computed by adding the size of the top end cap and the middle portion together and then subtracting that value from the height of the image
     * platforms: android, iphone, ipad
     * @type float
     * @since 0.8
     */
    backgroundTopCap:null,

    /**
     * the border color of the view
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    borderColor:null,

    /**
     * the border radius of the view
     * platforms: android, iphone, ipad
     * @type float
     * @since 0.8
     */
    borderRadius:null,

    /**
     * <p>the border style constant for the field</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.8
     */
    borderStyle:null,

    /**
     * the border width of the view
     * platforms: android, iphone, ipad
     * @type float
     * @since 0.8
     */
    borderWidth:null,

    /**
     * property for the view bottom position. This position is relative to the view's parent. Can be either a float value or a dimension string ie 'auto' (default).
     * platforms: android, iphone, ipad
     * @type float,string
     * @since 0.8
     */
    bottom:null,

    /**
     * a dictionary with properties x and y to indicate the center of the views position relative to the parent view
     * platforms: android, iphone, ipad
     * @type object
     * @since 0.8
     */
    center:null,

    /**
     * <p>the mode constant for how to handle displaying the clear button</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.8
     */
    clearButtonMode:null,

    /**
     * <p>boolean that indicates if the value of the field is cleared upon editing</p>
     * platforms: android, iphone, ipad
     * @type boolean
     * @since 0.8
     */
    clearOnEdit:null,

    /**
     * <p>boolean indicating if the field is editable</p>
     * platforms: android, iphone, ipad
     * @type boolean
     * @since 0.8
     */
    editable:null,

    /**
     * <p>boolean indicating the enabled state of the field</p>
     * platforms: android, iphone, ipad
     * @type boolean
     * @since 0.8
     */
    enabled:null,

    /**
     * Set true if you want a view to be focusable when navigating with the trackball or D-Pad. Default: false. (Android Only)
     * platforms: android
     * @type boolean
     * @since 0.8
     */
    focusable:null,

    /**
     * the font family
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    "font-family":null,

    /**
     * the font size
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    "font-size":null,

    /**
     * the font style, either normal or italics
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    "font-style":null,

    /**
     * the font weight, either normal or bold
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    "font-weight":null,

    /**
     * property for the view height. Can be either a float value or a dimension string ie 'auto' (default).
     * platforms: android, iphone, ipad
     * @type float,string
     * @since 0.8
     */
    height:null,

    /**
     * <p>the hint text to display when the field is unfocused</p>
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    hintText:null,

    /**
     * <p>array of toolbar button objects to be used when the keyboard is displayed</p>
     * platforms: android, iphone, ipad
     * @type array
     * @since 0.8
     */
    keyboardToolbar:null,

    /**
     * <p>the color of the keyboard toolbar</p>
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    keyboardToolbarColor:null,

    /**
     * <p>the height of the keyboard toolbar</p>
     * platforms: android, iphone, ipad
     * @type float
     * @since 0.8
     */
    keyboardToolbarHeight:null,

    /**
     * property for the view left position. This position is relative to the view's parent. Can be either a float value or a dimension string ie 'auto' (default).
     * platforms: android, iphone, ipad
     * @type float,string
     * @since 0.8
     */
    left:null,

    /**
     * <p>the left button view</p>
     * platforms: android, iphone, ipad
     * @type object
     * @since 0.8
     */
    leftButton:null,

    /**
     * <p>the mode of the left button view</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.8
     */
    leftButtonMode:null,

    /**
     * <p>the left padding of the space between the button and the edge of the field</p>
     * platforms: android, iphone, ipad
     * @type float
     * @since 0.8
     */
    leftButtonPadding:null,

    /**
     * <p>the minimum size of the font when the font is sized based on the contents.  Enables font scaling to fit</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.8
     */
    minimumFontSize:null,

    /**
     * the opacity from 0.0-1.0
     * platforms: android, iphone, ipad
     * @type float
     * @since 0.8
     */
    opacity:null,

    /**
     * <p>the left padding of the text field</p>
     * platforms: android, iphone, ipad
     * @type float
     * @since 0.8
     */
    paddingLeft:null,

    /**
     * <p>the right padding of the text field</p>
     * platforms: android, iphone, ipad
     * @type float
     * @since 0.8
     */
    paddingRight:null,

    /**
     * property for the view right position. This position is relative to the view's parent. Can be either a float value or a dimension string ie 'auto' (default).
     * platforms: android, iphone, ipad
     * @type float,string
     * @since 0.8
     */
    right:null,

    /**
     * <p>the right button view</p>
     * platforms: android, iphone, ipad
     * @type object
     * @since 0.8
     */
    rightButton:null,

    /**
     * <p>the mode of the right button view</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.8
     */
    rightButtonMode:null,

    /**
     * <p>the right padding of the space between the button and the edge of the field</p>
     * platforms: android, iphone, ipad
     * @type float
     * @since 0.8
     */
    rightButtonPadding:null,

    /**
     * the size of the view as a dictionary of width and height properties
     * platforms: android, iphone, ipad
     * @type object
     * @since 0.8
     */
    size:null,

    /**
     * One of Titanium.UI.Android.SOFT_KEYBOARD_DEFAULT_ON_FOCUS, Titanium.UI.Android.SOFT_KEYBOARD_HIDE_ON_FOCUS, or Titanium.UI.Android.SOFT_KEYBOARD_SHOW_ON_FOCUS. (Android only)
     * platforms: android
     * @type int
     * @since 0.8
     */
    softKeyboardOnFocus:null,

    /**
     * <p>boolean to indicate if the return key should be suppressed during entry</p>
     * platforms: android, iphone, ipad
     * @type boolean
     * @since 0.8
     */
    suppressReturn:null,

    /**
     * property for the view top position. This position is relative to the view's parent. Can be either a float value or a dimension string ie 'auto' (default).
     * platforms: android, iphone, ipad
     * @type float,string
     * @since 0.8
     */
    top:null,

    /**
     * a boolean indicating if the view should receive touch events (true, default) or forward them to peers (false)
     * platforms: android, iphone, ipad
     * @type boolean
     * @since 0.8
     */
    touchEnabled:null,

    /**
     * the transformation matrix to apply to the view
     * platforms: android, iphone, ipad
     * @type object
     * @since 0.8
     */
    transform:null,

    /**
     * <p>value of the field</p>
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    value:null,

    /**
     * <p>the constant or string value for the fields vertical alignment.</p>
     * platforms: android, iphone, ipad
     * @type int,string
     * @since 0.8
     */
    verticalAlign:null,

    /**
     * a boolean of the visibility of the view
     * platforms: android, iphone, ipad
     * @type boolean
     * @since 0.8
     */
    visible:null,

    /**
     * property for the view width. Can be either a float value or a dimension string ie 'auto' (default).
     * platforms: android, iphone, ipad
     * @type float,string
     * @since 0.8
     */
    width:null,

    /**
     * the z index position relative to other sibling views
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.8
     */
    zIndex:null,


    /**
     * add a child to the view hierarchy
     * platforms: android, iphone, ipad
     * @param {object} view the view to add to this views hiearchy
     * @returns void
     * @since 0.8
     */
    add:function(view) {
    },

    /**
     * add an event listener for the instance to receive view triggered events
     * platforms: android, iphone, ipad
     * @param {string} name name of the event
     * @param {function} callback callback function to invoke when the event is fired
     * @returns void
     * @since 0.8
     */
    addEventListener:function(name, callback) {
    },

    /**
     * animate the view
     * platforms: android, iphone, ipad
     * @param {object} obj either a dictionary of animation properties or an Animation object
     * @param {function} callback function to be invoked upon completion of the animation
     * @returns void
     * @since 0.8
     */
    animate:function(obj, callback) {
    },

    /**
     * <p>force the field to lose focus</p>
     * platforms: android, iphone, ipad
     * @returns void
     * @since 0.8
     */
    blur:function() {
    },

    /**
     * fire a synthesized event to the views listener
     * platforms: android, iphone, ipad
     * @param {string} name name of the event
     * @param {object} event event object
     * @returns void
     * @since 0.8
     */
    fireEvent:function(name, event) {
    },

    /**
     * <p>force the field to gain focus</p>
     * platforms: android, iphone, ipad
     * @returns void
     * @since 0.8
     */
    focus:function() {
    },

    /**
     * <p>return boolean (true) if the field has text</p>
     * platforms: android, iphone, ipad
     * @returns void
     * @since 0.8
     */
    hasText:function() {
    },

    /**
     * hide the view
     * platforms: android, iphone, ipad
     * @returns void
     * @since 0.8
     */
    hide:function() {
    },

    /**
     * remove a previously add view from the view hiearchy
     * platforms: android, iphone, ipad
     * @param {object} view the view to remove from this views hiearchy
     * @returns void
     * @since 0.8
     */
    remove:function(view) {
    },

    /**
     * remove a previously added event listener
     * platforms: android, iphone, ipad
     * @param {string} name name of the event
     * @param {function} callback callback function passed in addEventListener
     * @returns void
     * @since 0.8
     */
    removeEventListener:function(name, callback) {
    },

    /**
     * make the view visible
     * platforms: android, iphone, ipad
     * @returns void
     * @since 0.8
     */
    show:function() {
    },

    /**
     * return a Blob image of the rendered view
     * platforms: android, iphone, ipad
     * @param {function} f function to be invoked upon completion. if non-null, this method will be performed asynchronously. if null, it will be performed immediately
     * @since 0.8
     */
    toImage:function(f) {
    }
}

/**
 * platforms: iphone, ipad
 * @namespace <p>A Toolbar is created by the method {@link Titanium.UI.createToolbar}.  A Toolbar can be placed at the bottom of a window and contain buttons.</p>
 * @since 0.8
 */
Ti.UI.Toolbar = {

    /**
     * a dictionary with properties x and y to indicate the anchor point value. anchor specifies the position by which animation should occur. center is 0.5, 0.5
     * platforms: iphone, ipad
     * @type object
     * @since 0.8
     */
    anchorPoint:null,

    /**
     * read-only object with x and y properties of where the view is during animation
     * platforms: iphone, ipad
     * @type object
     * @since 0.8
     */
    animatedCenterPoint:null,

    /**
     * the background color of the view
     * platforms: iphone, ipad
     * @type string
     * @since 0.8
     */
    backgroundColor:null,

    /**
     * the disabled background color of the view. (Android)
     * platforms: iphone, ipad
     * @type string
     * @since 0.8
     */
    backgroundDisabledColor:null,

    /**
     * the disabled background image url of the view. (Android)
     * platforms: iphone, ipad
     * @type string
     * @since 0.8
     */
    backgroundDisabledImage:null,

    /**
     * the focused background color of the view. focusable must be true for normal views. (Android)
     * platforms: iphone, ipad
     * @type string
     * @since 0.8
     */
    backgroundFocusedColor:null,

    /**
     * the focused background image url of the view. focusable must be true for normal views. (Android)
     * platforms: iphone, ipad
     * @type string
     * @since 0.8
     */
    backgroundFocusedImage:null,

    /**
     * a background gradient for the view with the properties: type,startPoint,endPoint,startRadius,endRadius,backfillStart,backfillEnd,colors.
     * platforms: iphone, ipad
     * @type object
     * @since 0.8
     */
    backgroundGradient:null,

    /**
     * the background image url of the view
     * platforms: iphone, ipad
     * @type string
     * @since 0.8
     */
    backgroundImage:null,

    /**
     * End caps specify the portion of an image that should not be resized when an image is stretched. This technique is used to implement buttons and other resizable image-based interface elements. When a button with end caps is resized, the resizing occurs only in the middle of the button, in the region between the end caps. The end caps themselves keep their original size and appearance. This property specifies the size of the left end cap. The middle (stretchable) portion is assumed to be 1 pixel wide. The right end cap is therefore computed by adding the size of the left end cap and the middle portion together and then subtracting that value from the width of the image
     * platforms: iphone, ipad
     * @type float
     * @since 0.8
     */
    backgroundLeftCap:null,

    /**
     * the selected background color of the view. focusable must be true for normal views. (Android)
     * platforms: iphone, ipad
     * @type string
     * @since 0.8
     */
    backgroundSelectedColor:null,

    /**
     * the selected background image url of the view. focusable must be true for normal views. (Android)
     * platforms: iphone, ipad
     * @type string
     * @since 0.8
     */
    backgroundSelectedImage:null,

    /**
     * End caps specify the portion of an image that should not be resized when an image is stretched. This technique is used to implement buttons and other resizable image-based interface elements. When a button with end caps is resized, the resizing occurs only in the middle of the button, in the region between the end caps. The end caps themselves keep their original size and appearance. This property specifies the size of the top end cap. The middle (stretchable) portion is assumed to be 1 pixel wide. The bottom end cap is therefore computed by adding the size of the top end cap and the middle portion together and then subtracting that value from the height of the image
     * platforms: iphone, ipad
     * @type float
     * @since 0.8
     */
    backgroundTopCap:null,

    /**
     * the border color of the view
     * platforms: iphone, ipad
     * @type string
     * @since 0.8
     */
    borderColor:null,

    /**
     * the border radius of the view
     * platforms: iphone, ipad
     * @type float
     * @since 0.8
     */
    borderRadius:null,

    /**
     * the border width of the view
     * platforms: iphone, ipad
     * @type float
     * @since 0.8
     */
    borderWidth:null,

    /**
     * property for the view bottom position. This position is relative to the view's parent. Can be either a float value or a dimension string ie 'auto' (default).
     * platforms: iphone, ipad
     * @type float,string
     * @since 0.8
     */
    bottom:null,

    /**
     * a dictionary with properties x and y to indicate the center of the views position relative to the parent view
     * platforms: iphone, ipad
     * @type object
     * @since 0.8
     */
    center:null,

    /**
     * the font family
     * platforms: iphone, ipad
     * @type string
     * @since 0.8
     */
    "font-family":null,

    /**
     * the font size
     * platforms: iphone, ipad
     * @type string
     * @since 0.8
     */
    "font-size":null,

    /**
     * the font style, either normal or italics
     * platforms: iphone, ipad
     * @type string
     * @since 0.8
     */
    "font-style":null,

    /**
     * the font weight, either normal or bold
     * platforms: iphone, ipad
     * @type string
     * @since 0.8
     */
    "font-weight":null,

    /**
     * property for the view height. Can be either a float value or a dimension string ie 'auto' (default).
     * platforms: iphone, ipad
     * @type float,string
     * @since 0.8
     */
    height:null,

    /**
     * property for the view left position. This position is relative to the view's parent. Can be either a float value or a dimension string ie 'auto' (default).
     * platforms: iphone, ipad
     * @type float,string
     * @since 0.8
     */
    left:null,

    /**
     * the opacity from 0.0-1.0
     * platforms: iphone, ipad
     * @type float
     * @since 0.8
     */
    opacity:null,

    /**
     * property for the view right position. This position is relative to the view's parent. Can be either a float value or a dimension string ie 'auto' (default).
     * platforms: iphone, ipad
     * @type float,string
     * @since 0.8
     */
    right:null,

    /**
     * the size of the view as a dictionary of width and height properties
     * platforms: iphone, ipad
     * @type object
     * @since 0.8
     */
    size:null,

    /**
     * property for the view top position. This position is relative to the view's parent. Can be either a float value or a dimension string ie 'auto' (default).
     * platforms: iphone, ipad
     * @type float,string
     * @since 0.8
     */
    top:null,

    /**
     * a boolean indicating if the view should receive touch events (true, default) or forward them to peers (false)
     * platforms: iphone, ipad
     * @type boolean
     * @since 0.8
     */
    touchEnabled:null,

    /**
     * the transformation matrix to apply to the view
     * platforms: iphone, ipad
     * @type object
     * @since 0.8
     */
    transform:null,

    /**
     * a boolean of the visibility of the view
     * platforms: iphone, ipad
     * @type boolean
     * @since 0.8
     */
    visible:null,

    /**
     * property for the view width. Can be either a float value or a dimension string ie 'auto' (default).
     * platforms: iphone, ipad
     * @type float,string
     * @since 0.8
     */
    width:null,

    /**
     * the z index position relative to other sibling views
     * platforms: iphone, ipad
     * @type int
     * @since 0.8
     */
    zIndex:null,


    /**
     * add a child to the view hierarchy
     * platforms: iphone, ipad
     * @param {object} view the view to add to this views hiearchy
     * @returns void
     * @since 0.8
     */
    add:function(view) {
    },

    /**
     * add an event listener for the instance to receive view triggered events
     * platforms: iphone, ipad
     * @param {string} name name of the event
     * @param {function} callback callback function to invoke when the event is fired
     * @returns void
     * @since 0.8
     */
    addEventListener:function(name, callback) {
    },

    /**
     * animate the view
     * platforms: iphone, ipad
     * @param {object} obj either a dictionary of animation properties or an Animation object
     * @param {function} callback function to be invoked upon completion of the animation
     * @returns void
     * @since 0.8
     */
    animate:function(obj, callback) {
    },

    /**
     * fire a synthesized event to the views listener
     * platforms: iphone, ipad
     * @param {string} name name of the event
     * @param {object} event event object
     * @returns void
     * @since 0.8
     */
    fireEvent:function(name, event) {
    },

    /**
     * hide the view
     * platforms: iphone, ipad
     * @returns void
     * @since 0.8
     */
    hide:function() {
    },

    /**
     * remove a previously add view from the view hiearchy
     * platforms: iphone, ipad
     * @param {object} view the view to remove from this views hiearchy
     * @returns void
     * @since 0.8
     */
    remove:function(view) {
    },

    /**
     * remove a previously added event listener
     * platforms: iphone, ipad
     * @param {string} name name of the event
     * @param {function} callback callback function passed in addEventListener
     * @returns void
     * @since 0.8
     */
    removeEventListener:function(name, callback) {
    },

    /**
     * make the view visible
     * platforms: iphone, ipad
     * @returns void
     * @since 0.8
     */
    show:function() {
    },

    /**
     * return a Blob image of the rendered view
     * platforms: iphone, ipad
     * @param {function} f function to be invoked upon completion. if non-null, this method will be performed asynchronously. if null, it will be performed immediately
     * @since 0.8
     */
    toImage:function(f) {
    }
}

/**
 * platforms: android, iphone, ipad
 * @namespace <p>The View is an empty drawing surface or container. The View is created by the method {@link Titanium.UI.createView}.</p>
 * @since 0.9
 * 
 * @example Round View Example
 * <p>Create a rounded view.</p>
<pre><code>var view = Titanium.UI.createView({
   borderRadius:10,
   backgroundColor:'red',
   width:50,
   height:50
});
window.add(view);
</code></pre>
 */
Ti.UI.View = {

    /**
     * a dictionary with properties x and y to indicate the anchor point value. anchor specifies the position by which animation should occur. center is 0.5, 0.5
     * platforms: android, iphone, ipad
     * @type object
     * @since 0.9
     */
    anchorPoint:null,

    /**
     * read-only object with x and y properties of where the view is during animation
     * platforms: android, iphone, ipad
     * @type object
     * @since 0.9
     */
    animatedCenterPoint:null,

    /**
     * the background color of the view
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.9
     */
    backgroundColor:null,

    /**
     * the disabled background color of the view. (Android)
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.9
     */
    backgroundDisabledColor:null,

    /**
     * the disabled background image url of the view. (Android)
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.9
     */
    backgroundDisabledImage:null,

    /**
     * the focused background color of the view. focusable must be true for normal views. (Android)
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.9
     */
    backgroundFocusedColor:null,

    /**
     * the focused background image url of the view. focusable must be true for normal views. (Android)
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.9
     */
    backgroundFocusedImage:null,

    /**
     * a background gradient for the view with the properties: type,startPoint,endPoint,startRadius,endRadius,backfillStart,backfillEnd,colors.
     * platforms: android, iphone, ipad
     * @type object
     * @since 0.9
     */
    backgroundGradient:null,

    /**
     * the background image url of the view
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.9
     */
    backgroundImage:null,

    /**
     * End caps specify the portion of an image that should not be resized when an image is stretched. This technique is used to implement buttons and other resizable image-based interface elements. When a button with end caps is resized, the resizing occurs only in the middle of the button, in the region between the end caps. The end caps themselves keep their original size and appearance. This property specifies the size of the left end cap. The middle (stretchable) portion is assumed to be 1 pixel wide. The right end cap is therefore computed by adding the size of the left end cap and the middle portion together and then subtracting that value from the width of the image
     * platforms: android, iphone, ipad
     * @type float
     * @since 0.9
     */
    backgroundLeftCap:null,

    /**
     * the selected background color of the view. focusable must be true for normal views. (Android)
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.9
     */
    backgroundSelectedColor:null,

    /**
     * the selected background image url of the view. focusable must be true for normal views. (Android)
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.9
     */
    backgroundSelectedImage:null,

    /**
     * End caps specify the portion of an image that should not be resized when an image is stretched. This technique is used to implement buttons and other resizable image-based interface elements. When a button with end caps is resized, the resizing occurs only in the middle of the button, in the region between the end caps. The end caps themselves keep their original size and appearance. This property specifies the size of the top end cap. The middle (stretchable) portion is assumed to be 1 pixel wide. The bottom end cap is therefore computed by adding the size of the top end cap and the middle portion together and then subtracting that value from the height of the image
     * platforms: android, iphone, ipad
     * @type float
     * @since 0.9
     */
    backgroundTopCap:null,

    /**
     * the border color of the view
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.9
     */
    borderColor:null,

    /**
     * the border radius of the view
     * platforms: android, iphone, ipad
     * @type float
     * @since 0.9
     */
    borderRadius:null,

    /**
     * the border width of the view
     * platforms: android, iphone, ipad
     * @type float
     * @since 0.9
     */
    borderWidth:null,

    /**
     * property for the view bottom position. This position is relative to the view's parent. Can be either a float value or a dimension string ie 'auto' (default).
     * platforms: android, iphone, ipad
     * @type float,string
     * @since 0.9
     */
    bottom:null,

    /**
     * a dictionary with properties x and y to indicate the center of the views position relative to the parent view
     * platforms: android, iphone, ipad
     * @type object
     * @since 0.9
     */
    center:null,

    /**
     * Set true if you want a view to be focusable when navigating with the trackball or D-Pad. Default: false. (Android Only)
     * platforms: android
     * @type boolean
     * @since 0.9
     */
    focusable:null,

    /**
     * the font family
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.9
     */
    "font-family":null,

    /**
     * the font size
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.9
     */
    "font-size":null,

    /**
     * the font style, either normal or italics
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.9
     */
    "font-style":null,

    /**
     * the font weight, either normal or bold
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.9
     */
    "font-weight":null,

    /**
     * property for the view height. Can be either a float value or a dimension string ie 'auto' (default).
     * platforms: android, iphone, ipad
     * @type float,string
     * @since 0.9
     */
    height:null,

    /**
     * property for the view left position. This position is relative to the view's parent. Can be either a float value or a dimension string ie 'auto' (default).
     * platforms: android, iphone, ipad
     * @type float,string
     * @since 0.9
     */
    left:null,

    /**
     * the opacity from 0.0-1.0
     * platforms: android, iphone, ipad
     * @type float
     * @since 0.9
     */
    opacity:null,

    /**
     * property for the view right position. This position is relative to the view's parent. Can be either a float value or a dimension string ie 'auto' (default).
     * platforms: android, iphone, ipad
     * @type float,string
     * @since 0.9
     */
    right:null,

    /**
     * the size of the view as a dictionary of width and height properties
     * platforms: android, iphone, ipad
     * @type object
     * @since 0.9
     */
    size:null,

    /**
     * One of Titanium.UI.Android.SOFT_KEYBOARD_DEFAULT_ON_FOCUS, Titanium.UI.Android.SOFT_KEYBOARD_HIDE_ON_FOCUS, or Titanium.UI.Android.SOFT_KEYBOARD_SHOW_ON_FOCUS. (Android only)
     * platforms: android
     * @type int
     * @since 0.9
     */
    softKeyboardOnFocus:null,

    /**
     * property for the view top position. This position is relative to the view's parent. Can be either a float value or a dimension string ie 'auto' (default).
     * platforms: android, iphone, ipad
     * @type float,string
     * @since 0.9
     */
    top:null,

    /**
     * a boolean indicating if the view should receive touch events (true, default) or forward them to peers (false)
     * platforms: android, iphone, ipad
     * @type boolean
     * @since 0.9
     */
    touchEnabled:null,

    /**
     * the transformation matrix to apply to the view
     * platforms: android, iphone, ipad
     * @type object
     * @since 0.9
     */
    transform:null,

    /**
     * a boolean of the visibility of the view
     * platforms: android, iphone, ipad
     * @type boolean
     * @since 0.9
     */
    visible:null,

    /**
     * property for the view width. Can be either a float value or a dimension string ie 'auto' (default).
     * platforms: android, iphone, ipad
     * @type float,string
     * @since 0.9
     */
    width:null,

    /**
     * the z index position relative to other sibling views
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.9
     */
    zIndex:null,


    /**
     * add a child to the view hierarchy
     * platforms: android, iphone, ipad
     * @param {object} view the view to add to this views hiearchy
     * @returns void
     * @since 0.9
     */
    add:function(view) {
    },

    /**
     * add an event listener for the instance to receive view triggered events
     * platforms: android, iphone, ipad
     * @param {string} name name of the event
     * @param {function} callback callback function to invoke when the event is fired
     * @returns void
     * @since 0.9
     */
    addEventListener:function(name, callback) {
    },

    /**
     * animate the view
     * platforms: android, iphone, ipad
     * @param {object} obj either a dictionary of animation properties or an Animation object
     * @param {function} callback function to be invoked upon completion of the animation
     * @returns void
     * @since 0.9
     */
    animate:function(obj, callback) {
    },

    /**
     * fire a synthesized event to the views listener
     * platforms: android, iphone, ipad
     * @param {string} name name of the event
     * @param {object} event event object
     * @returns void
     * @since 0.9
     */
    fireEvent:function(name, event) {
    },

    /**
     * hide the view
     * platforms: android, iphone, ipad
     * @returns void
     * @since 0.9
     */
    hide:function() {
    },

    /**
     * remove a previously add view from the view hiearchy
     * platforms: android, iphone, ipad
     * @param {object} view the view to remove from this views hiearchy
     * @returns void
     * @since 0.9
     */
    remove:function(view) {
    },

    /**
     * remove a previously added event listener
     * platforms: android, iphone, ipad
     * @param {string} name name of the event
     * @param {function} callback callback function passed in addEventListener
     * @returns void
     * @since 0.9
     */
    removeEventListener:function(name, callback) {
    },

    /**
     * make the view visible
     * platforms: android, iphone, ipad
     * @returns void
     * @since 0.9
     */
    show:function() {
    },

    /**
     * return a Blob image of the rendered view
     * platforms: android, iphone, ipad
     * @param {function} f function to be invoked upon completion. if non-null, this method will be performed asynchronously. if null, it will be performed immediately
     * @since 0.9
     */
    toImage:function(f) {
    }
}

/**
 * Notes: <p>Creating webviews are more expensive than creating pure native views because of the requirement toload the HTML browser into memory.</p>
<p>Since a webview internally wants to handle its own events, scrolling and other related touch events against it's own view surface, you cannot have both Titanium style events against the webview instance and internal Javascript events in the DOM.  You must choose between one or the other.</p>
 * platforms: android, iphone, ipad
 * @namespace <p>The Web View allows you to open an HTML5 based view which can load either local or remote content. The content can be any valid web content such as HTML, PDF, SVG or other WebKit supported content types. The Web View is created by the method {@link Titanium.UI.createWebView}.</p>
 * @since 0.8
 * 
 * @example Basic Web View to external URL example
 * <p>Create a web view to a remote URL and open the window as modal.</p>
<pre><code>    var webview = Titanium.UI.createWebView({url:'http://www.appcelerator.com'});
    var window = Titanium.UI.createWindow();
    window.add(webview);
    window.open({modal:true});
</code></pre>
 */
Ti.UI.WebView = {

    /**
     * a dictionary with properties x and y to indicate the anchor point value. anchor specifies the position by which animation should occur. center is 0.5, 0.5
     * platforms: android, iphone, ipad
     * @type object
     * @since 0.8
     */
    anchorPoint:null,

    /**
     * read-only object with x and y properties of where the view is during animation
     * platforms: android, iphone, ipad
     * @type object
     * @since 0.8
     */
    animatedCenterPoint:null,

    /**
     * the background color of the view
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    backgroundColor:null,

    /**
     * the disabled background color of the view. (Android)
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    backgroundDisabledColor:null,

    /**
     * the disabled background image url of the view. (Android)
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    backgroundDisabledImage:null,

    /**
     * the focused background color of the view. focusable must be true for normal views. (Android)
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    backgroundFocusedColor:null,

    /**
     * the focused background image url of the view. focusable must be true for normal views. (Android)
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    backgroundFocusedImage:null,

    /**
     * a background gradient for the view with the properties: type,startPoint,endPoint,startRadius,endRadius,backfillStart,backfillEnd,colors.
     * platforms: android, iphone, ipad
     * @type object
     * @since 0.8
     */
    backgroundGradient:null,

    /**
     * the background image url of the view
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    backgroundImage:null,

    /**
     * End caps specify the portion of an image that should not be resized when an image is stretched. This technique is used to implement buttons and other resizable image-based interface elements. When a button with end caps is resized, the resizing occurs only in the middle of the button, in the region between the end caps. The end caps themselves keep their original size and appearance. This property specifies the size of the left end cap. The middle (stretchable) portion is assumed to be 1 pixel wide. The right end cap is therefore computed by adding the size of the left end cap and the middle portion together and then subtracting that value from the width of the image
     * platforms: android, iphone, ipad
     * @type float
     * @since 0.8
     */
    backgroundLeftCap:null,

    /**
     * the selected background color of the view. focusable must be true for normal views. (Android)
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    backgroundSelectedColor:null,

    /**
     * the selected background image url of the view. focusable must be true for normal views. (Android)
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    backgroundSelectedImage:null,

    /**
     * End caps specify the portion of an image that should not be resized when an image is stretched. This technique is used to implement buttons and other resizable image-based interface elements. When a button with end caps is resized, the resizing occurs only in the middle of the button, in the region between the end caps. The end caps themselves keep their original size and appearance. This property specifies the size of the top end cap. The middle (stretchable) portion is assumed to be 1 pixel wide. The bottom end cap is therefore computed by adding the size of the top end cap and the middle portion together and then subtracting that value from the height of the image
     * platforms: android, iphone, ipad
     * @type float
     * @since 0.8
     */
    backgroundTopCap:null,

    /**
     * the border color of the view
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    borderColor:null,

    /**
     * the border radius of the view
     * platforms: android, iphone, ipad
     * @type float
     * @since 0.8
     */
    borderRadius:null,

    /**
     * the border width of the view
     * platforms: android, iphone, ipad
     * @type float
     * @since 0.8
     */
    borderWidth:null,

    /**
     * property for the view bottom position. This position is relative to the view's parent. Can be either a float value or a dimension string ie 'auto' (default).
     * platforms: android, iphone, ipad
     * @type float,string
     * @since 0.8
     */
    bottom:null,

    /**
     * a dictionary with properties x and y to indicate the center of the views position relative to the parent view
     * platforms: android, iphone, ipad
     * @type object
     * @since 0.8
     */
    center:null,

    /**
     * <p>a data blob or file that is used to load the web document</p>
     * platforms: android, iphone, ipad
     * @type object
     * @since 0.8
     */
    data:null,

    /**
     * Set true if you want a view to be focusable when navigating with the trackball or D-Pad. Default: false. (Android Only)
     * platforms: android
     * @type boolean
     * @since 0.8
     */
    focusable:null,

    /**
     * the font family
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    "font-family":null,

    /**
     * the font size
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    "font-size":null,

    /**
     * the font style, either normal or italics
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    "font-style":null,

    /**
     * the font weight, either normal or bold
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    "font-weight":null,

    /**
     * property for the view height. Can be either a float value or a dimension string ie 'auto' (default).
     * platforms: android, iphone, ipad
     * @type float,string
     * @since 0.8
     */
    height:null,

    /**
     * <p>the html content of the web document</p>
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    html:null,

    /**
     * property for the view left position. This position is relative to the view's parent. Can be either a float value or a dimension string ie 'auto' (default).
     * platforms: android, iphone, ipad
     * @type float,string
     * @since 0.8
     */
    left:null,

    /**
     * <p>boolean indicating if the webview is loading content</p>
     * platforms: android, iphone, ipad
     * @type boolean
     * @since 0.8
     */
    loading:null,

    /**
     * the opacity from 0.0-1.0
     * platforms: android, iphone, ipad
     * @type float
     * @since 0.8
     */
    opacity:null,

    /**
     * property for the view right position. This position is relative to the view's parent. Can be either a float value or a dimension string ie 'auto' (default).
     * platforms: android, iphone, ipad
     * @type float,string
     * @since 0.8
     */
    right:null,

    /**
     * <p>whether the webview should scale it's contents or not</p>
     * platforms: android, iphone, ipad
     * @type boolean
     * @since 0.8
     */
    scalesPageToFit:null,

    /**
     * the size of the view as a dictionary of width and height properties
     * platforms: android, iphone, ipad
     * @type object
     * @since 0.8
     */
    size:null,

    /**
     * One of Titanium.UI.Android.SOFT_KEYBOARD_DEFAULT_ON_FOCUS, Titanium.UI.Android.SOFT_KEYBOARD_HIDE_ON_FOCUS, or Titanium.UI.Android.SOFT_KEYBOARD_SHOW_ON_FOCUS. (Android only)
     * platforms: android
     * @type int
     * @since 0.8
     */
    softKeyboardOnFocus:null,

    /**
     * property for the view top position. This position is relative to the view's parent. Can be either a float value or a dimension string ie 'auto' (default).
     * platforms: android, iphone, ipad
     * @type float,string
     * @since 0.8
     */
    top:null,

    /**
     * a boolean indicating if the view should receive touch events (true, default) or forward them to peers (false)
     * platforms: android, iphone, ipad
     * @type boolean
     * @since 0.8
     */
    touchEnabled:null,

    /**
     * the transformation matrix to apply to the view
     * platforms: android, iphone, ipad
     * @type object
     * @since 0.8
     */
    transform:null,

    /**
     * <p>the url to the web document. this property will change as the content of the webview changes (such as from internal hyperlinks, etc)</p>
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.8
     */
    url:null,

    /**
     * a boolean of the visibility of the view
     * platforms: android, iphone, ipad
     * @type boolean
     * @since 0.8
     */
    visible:null,

    /**
     * property for the view width. Can be either a float value or a dimension string ie 'auto' (default).
     * platforms: android, iphone, ipad
     * @type float,string
     * @since 0.8
     */
    width:null,

    /**
     * the z index position relative to other sibling views
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.8
     */
    zIndex:null,


    /**
     * add a child to the view hierarchy
     * platforms: android, iphone, ipad
     * @param {object} view the view to add to this views hiearchy
     * @returns void
     * @since 0.8
     */
    add:function(view) {
    },

    /**
     * add an event listener for the instance to receive view triggered events
     * platforms: android, iphone, ipad
     * @param {string} name name of the event
     * @param {function} callback callback function to invoke when the event is fired
     * @returns void
     * @since 0.8
     */
    addEventListener:function(name, callback) {
    },

    /**
     * animate the view
     * platforms: android, iphone, ipad
     * @param {object} obj either a dictionary of animation properties or an Animation object
     * @param {function} callback function to be invoked upon completion of the animation
     * @returns void
     * @since 0.8
     */
    animate:function(obj, callback) {
    },

    /**
     * <p>returns true if the webview can go back in history</p>
     * platforms: android, iphone, ipad
     * @since 0.8
     */
    canGoBack:function() {
    },

    /**
     * <p>returns true if the webview can go forward in history</p>
     * platforms: android, iphone, ipad
     * @since 0.8
     */
    canGoForward:function() {
    },

    /**
     * <p>invoke JavaScript inside the context of the webview and optionally, return a result</p>
     * platforms: android, iphone, ipad
     * @param {string} content JavaScript code as a string. The code will be evaluated inside the webview context.
     * @since 0.8
     */
    evalJS:function(content) {
    },

    /**
     * fire a synthesized event to the views listener
     * platforms: android, iphone, ipad
     * @param {string} name name of the event
     * @param {object} event event object
     * @returns void
     * @since 0.8
     */
    fireEvent:function(name, event) {
    },

    /**
     * <p>go back one entry in history to the previous page</p>
     * platforms: android, iphone, ipad
     * @returns void
     * @since 0.8
     */
    goBack:function() {
    },

    /**
     * <p>go forward one entry in history to the page before the current page</p>
     * platforms: android, iphone, ipad
     * @returns void
     * @since 0.8
     */
    goForward:function() {
    },

    /**
     * hide the view
     * platforms: android, iphone, ipad
     * @returns void
     * @since 0.8
     */
    hide:function() {
    },

    /**
     * <p>reload the current webpage</p>
     * platforms: android, iphone, ipad
     * @returns void
     * @since 0.8
     */
    reload:function() {
    },

    /**
     * remove a previously add view from the view hiearchy
     * platforms: android, iphone, ipad
     * @param {object} view the view to remove from this views hiearchy
     * @returns void
     * @since 0.8
     */
    remove:function(view) {
    },

    /**
     * remove a previously added event listener
     * platforms: android, iphone, ipad
     * @param {string} name name of the event
     * @param {function} callback callback function passed in addEventListener
     * @returns void
     * @since 0.8
     */
    removeEventListener:function(name, callback) {
    },

    /**
     * <p>force the webview to repaint its contents</p>
     * platforms: android, iphone, ipad
     * @returns void
     * @since 0.8
     */
    repaint:function() {
    },

    /**
     * <p>set the basic authentication for the webview instance to be used on subsequent url requests</p>
     * platforms: android, iphone, ipad
     * @param {string} username the username
     * @param {string} password the password
     * @returns void
     * @since 0.8
     */
    setBasicAuthentication:function(username, password) {
    },

    /**
     * make the view visible
     * platforms: android, iphone, ipad
     * @returns void
     * @since 0.8
     */
    show:function() {
    },

    /**
     * <p>stop loading a currently loading page</p>
     * platforms: android, iphone, ipad
     * @returns void
     * @since 0.8
     */
    stopLoading:function() {
    },

    /**
     * return a Blob image of the rendered view
     * platforms: android, iphone, ipad
     * @param {function} f function to be invoked upon completion. if non-null, this method will be performed asynchronously. if null, it will be performed immediately
     * @since 0.8
     */
    toImage:function(f) {
    }
}

/**
 * Notes: <h3 id="sub-contexts">Sub-contexts</h3>
<p>Windows can be loaded from another Javascript file by specifying the property <tt>url</tt> and reference a file relative to your application <tt>Resources</tt> folder.  It's important to note that Titanium will refuse to load Javascript files from a remote URL. Loading remote Javascript from a URL and providing it with the full capabilities of the Titanium API would be very dangerous. </p>
<p>When you Window is loaded from a separate Javascript file, the code will be executed in a separate Javascript context (called a "sub-context") than your <tt>app.js</tt> global context.  It will also execute in its own separate thread.<br>
</p>
<p>The special property {@link Titanium.UI.currentWindow} is available inside a sub-context that points to the Javascript instance by reference in the global context.<br>
</p>
<h3 id="passing_data">Passing Data</h3>
<p>By default, sub-context variables cannot access Javascript references in the global context.  However, the global context can allow its sub-contexts the ability to have access to properties and functions in the global context by reference assignment.  An example best illustrates how to do this.</p>
<p>In <tt>app.js</tt>, you could define a function and a property.</p>
<pre><code>var a = 1;
function b()
{
    return "hello";
}
</code></pre>

<p>Now, you can create a new Window - let's call it <tt>foo.js</tt> - in your <tt>app.js</tt>.</p>
<pre><code>var w = Titanium.UI.createWindow({
    url:'foo.js'
});
</code></pre>

<p>To <em>give</em> your new window access to both <tt>a</tt> and <tt>b</tt>, you would need to assign them to the new window reference <tt>w</tt>.</p>
<pre><code>w.a = a;
w.b = b;
</code></pre>

<p>Of course, you could give them a different name than their original names.  However, what name you give them in your <tt>app.js</tt> is how you will reference them in <tt>foo.js</tt>.  Now, let's look at the code for <tt>foo.js</tt>.</p>
<pre><code>alert("b() = "+Titanium.UI.currentWindow.b());
</code></pre>

<p>In the above code, the <tt>foo.js</tt> will execute the function <tt>b</tt> in the global context and return the result.  Since <tt>b</tt> is a reference (vs. a copy by value), any changes made to these Javascript references will be immediately available in all sub-contexts.</p>
<h3 id="events">Events</h3>
<p>If you'd like to send events to a window from the global context and vice versa, you could use the built-in event mechanism.  For example, you could define a custom event called <tt>foo</tt>. The window could listen for this event and then respond with some action.  For example, in your sub-context you might define:</p>
<pre><code>Titanium.UI.currentWindow.addEventListener('foo',function(e)
{
    Titanium.API.info("foo event received = "+JSON.stringify(e));
});
</code></pre>

<p>You could now fire the event from <tt>app.js</tt> like this:</p>
<pre><code>var window = Titanium.UI.createWindow({
    url:'bar.js'
});
window.open();
window.fireEvent('foo',{a:'b'});
</code></pre>

<p>It's worth noting two important limitations of the example above:</p>
<ul>
<li>You must open the window before you can send events to it. You also may have to fire the event after a specified amount of time if you intend to immediately send data to the window.  This is because windows are opened asynchronously and on a separate thread than the caller thread.</li>
<li>You can only send JSON-serializable data in a fireEvent.  If you attempt to send objects that have function references, they will be null.</li>
</ul>
<h3 id="animations">Animations</h3>
<p>Windows can be animated like any normal {@link Titanium.UI.View}.  To transition between 2 windows, you can use the <tt>transition</tt> property on an animation.  For example, to flip right-to-left between two windows, you could do the following:</p>
<pre><code>var window2 = Titanium.UI.createWindow({url:'foo.js'});
var t = Ti.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT;
window1.animate({view:window2,transition:t});
</code></pre>

<p>In the above example, the <tt>window2</tt> view will be animated from the right-to-left over <tt>window1</tt>.</p>
<p>Windows can be opened or closed with animation.  In the example below, we create a window that will open from small to large with a bounce effect.  This is done by applying a transformation at initialization time that scales the original size of the window to 0.  When the window is opened, a new 2D transformation is applied that will scale the window size from 0 to 110% of it's original size and then, after 1/20th of a second, will scale it back to it's original size at 100%. This gives the bounce effect during animation. </p>
<pre><code>var t = Titanium.UI.create2DMatrix().scale(0);

// create a window with the initial transform scaled to 0
var w = Titanium.UI.createWindow({
    backgroundColor:'#336699',
    borderWidth:8,
    borderColor:'#999',
    height:400,
    width:300,
    borderRadius:10,
    opacity:0.92,
    transform:t
});

// create first transform to go beyond normal size
var t1 = Titanium.UI.create2DMatrix().scale(1.1);

var a = Titanium.UI.createAnimation();
a.transform = t1;
a.duration = 200;

// when this animation completes, scale to normal size
a.addEventListener('complete', function()
{
    // we can use the identity transform to take it back to it's real size
    var t2 = Titanium.UI.create2DMatrix();
    w.animate({transform:t2, duration:200});
});
</code></pre>

<h3 id="ipad_modal_windows">iPad Modal Windows</h3>
<p>For iPad, iPhone SDK 3.2 and Titanium 1.2 introduced several new ways of presenting modal windows.<br>
</p>
<p>The example below is a modal window.</p>
<p><img alt="modal" src="http://img.skitch.com/20100406-bqb3f8pb6e4ger7wkcdcw5mbar.png"></p>
<p>You can create this type of modal window on iPad with the following code snippet:</p>
<pre><code>var window = Titanium.UI.createWindow();
window.open({
    modal:true,
    modalTransitionStyle: Ti.UI.iPhone.MODAL_TRANSITION_STYLE_FLIP_HORIZONTAL,
    modalStyle: Ti.UI.iPhone.MODAL_PRESENTATION_FORMSHEET
})
</code></pre>

<h3 id="android_root_windows">Android "root" Windows</h3>
<p>In Android, you may wish to specify that a window which you create (such as the first window) should be considered the root window and that the application should exit when the back button is pressed from that window.  This is particularly useful if your application is not using a Tab Group and therefore the splash screen window is appearing whenever you press the back button from your lowest window on the stack.</p>
<p>To indicate that a particular window should cause an application to exit when the back button is pressed, pass <tt>exitOnClose: true</tt> as one of the creation arguments, as shown here:</p>
<pre><code>var win = Titanium.UI.createWindow({
    title: 'My Root Window',
    exitOnClose: true
});
</code></pre>
 * platforms: android, iphone, ipad
 * @namespace <p>The Window is an empty drawing surface or container. The Window is created by the method {@link Titanium.UI.createWindow}. Unlike {@link Titanium.UI.View}, Windows can be opened and closed and can have special display properties such as <tt>fullscreen</tt> or <tt>modal</tt>.</p>
 * @since 0.9
 * 
 * @example Full Screen Window example
 * <p>Create a fullscreen window with a red background.</p>
<pre><code>var window = Titanium.UI.createWindow({
   backgroundColor:'red'
});
window.open({fullscreen:true});
</code></pre>
 */
Ti.UI.Window = {

    /**
     * a dictionary with properties x and y to indicate the anchor point value. anchor specifies the position by which animation should occur. center is 0.5, 0.5
     * platforms: android, iphone, ipad
     * @type object
     * @since 0.9
     */
    anchorPoint:null,

    /**
     * read-only object with x and y properties of where the view is during animation
     * platforms: android, iphone, ipad
     * @type object
     * @since 0.9
     */
    animatedCenterPoint:null,

    /**
     * <p>title for the back button. only available in iPhone. this is only valid when the window is a child of a tab.</p>
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.9
     */
    backButtonTitle:null,

    /**
     * <p>url to an image to show as the back button.  only available in iPhone. this is only valid when the window is a child of a tab.</p>
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.9
     */
    backButtonTitleImage:null,

    /**
     * the background color of the view
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.9
     */
    backgroundColor:null,

    /**
     * the disabled background color of the view. (Android)
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.9
     */
    backgroundDisabledColor:null,

    /**
     * the disabled background image url of the view. (Android)
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.9
     */
    backgroundDisabledImage:null,

    /**
     * the focused background color of the view. focusable must be true for normal views. (Android)
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.9
     */
    backgroundFocusedColor:null,

    /**
     * the focused background image url of the view. focusable must be true for normal views. (Android)
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.9
     */
    backgroundFocusedImage:null,

    /**
     * a background gradient for the view with the properties: type,startPoint,endPoint,startRadius,endRadius,backfillStart,backfillEnd,colors.
     * platforms: android, iphone, ipad
     * @type object
     * @since 0.9
     */
    backgroundGradient:null,

    /**
     * the background image url of the view
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.9
     */
    backgroundImage:null,

    /**
     * End caps specify the portion of an image that should not be resized when an image is stretched. This technique is used to implement buttons and other resizable image-based interface elements. When a button with end caps is resized, the resizing occurs only in the middle of the button, in the region between the end caps. The end caps themselves keep their original size and appearance. This property specifies the size of the left end cap. The middle (stretchable) portion is assumed to be 1 pixel wide. The right end cap is therefore computed by adding the size of the left end cap and the middle portion together and then subtracting that value from the width of the image
     * platforms: android, iphone, ipad
     * @type float
     * @since 0.9
     */
    backgroundLeftCap:null,

    /**
     * the selected background color of the view. focusable must be true for normal views. (Android)
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.9
     */
    backgroundSelectedColor:null,

    /**
     * the selected background image url of the view. focusable must be true for normal views. (Android)
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.9
     */
    backgroundSelectedImage:null,

    /**
     * End caps specify the portion of an image that should not be resized when an image is stretched. This technique is used to implement buttons and other resizable image-based interface elements. When a button with end caps is resized, the resizing occurs only in the middle of the button, in the region between the end caps. The end caps themselves keep their original size and appearance. This property specifies the size of the top end cap. The middle (stretchable) portion is assumed to be 1 pixel wide. The bottom end cap is therefore computed by adding the size of the top end cap and the middle portion together and then subtracting that value from the height of the image
     * platforms: android, iphone, ipad
     * @type float
     * @since 0.9
     */
    backgroundTopCap:null,

    /**
     * <p>web named color or hex value for the color of the nav bar. only available in iPhone.</p>
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.9
     */
    barColor:null,

    /**
     * <p>url to a local image to place as the background of the nav bar. only available in iPhone.</p>
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.9
     */
    barImage:null,

    /**
     * the border color of the view
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.9
     */
    borderColor:null,

    /**
     * the border radius of the view
     * platforms: android, iphone, ipad
     * @type float
     * @since 0.9
     */
    borderRadius:null,

    /**
     * the border width of the view
     * platforms: android, iphone, ipad
     * @type float
     * @since 0.9
     */
    borderWidth:null,

    /**
     * property for the view bottom position. This position is relative to the view's parent. Can be either a float value or a dimension string ie 'auto' (default).
     * platforms: android, iphone, ipad
     * @type float,string
     * @since 0.9
     */
    bottom:null,

    /**
     * a dictionary with properties x and y to indicate the center of the views position relative to the parent view
     * platforms: android, iphone, ipad
     * @type object
     * @since 0.9
     */
    center:null,

    /**
     * <p>(Android only.) Boolean indicates if the application should exit when the Android back button is pressed while the window is being shown.  You can only set this as a createWindow({...}) option.  Setting it after window creation will no effect.</p>
     * platforms: android, iphone, ipad
     * @type boolean
     * @since 0.9
     */
    exitOnClose:null,

    /**
     * Set true if you want a view to be focusable when navigating with the trackball or D-Pad. Default: false. (Android Only)
     * platforms: android
     * @type boolean
     * @since 0.9
     */
    focusable:null,

    /**
     * the font family
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.9
     */
    "font-family":null,

    /**
     * the font size
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.9
     */
    "font-size":null,

    /**
     * the font style, either normal or italics
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.9
     */
    "font-style":null,

    /**
     * the font weight, either normal or bold
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.9
     */
    "font-weight":null,

    /**
     * <p>boolean indicates if the window is fullscreen (no device chrome)</p>
     * platforms: android, iphone, ipad
     * @type boolean
     * @since 0.9
     */
    fullscreen:null,

    /**
     * property for the view height. Can be either a float value or a dimension string ie 'auto' (default).
     * platforms: android, iphone, ipad
     * @type float,string
     * @since 0.9
     */
    height:null,

    /**
     * property for the view left position. This position is relative to the view's parent. Can be either a float value or a dimension string ie 'auto' (default).
     * platforms: android, iphone, ipad
     * @type float,string
     * @since 0.9
     */
    left:null,

    /**
     * <p>view to show in the left nav bar area. only available in iPhone.</p>
     * platforms: android, iphone, ipad
     * @type object
     * @since 0.9
     */
    leftNavButton:null,

    /**
     * <p>boolean to indicate if the window should be opened modal in front of other windows</p>
     * platforms: android, iphone, ipad
     * @type boolean
     * @since 0.9
     */
    modal:null,

    /**
     * <p>for modal windows, hide the nav bar (true) or show the nav bar (false, default).</p>
     * platforms: android, iphone, ipad
     * @type boolean
     * @since 0.9
     */
    navBarHidden:null,

    /**
     * the opacity from 0.0-1.0
     * platforms: android, iphone, ipad
     * @type float
     * @since 0.9
     */
    opacity:null,

    /**
     * <p>Array of orientation mode constants defined in {@link Titanium.UI}.  On Android, orientation modes that can be set are dependant on the Android SDK level of the device itself.  It should be noted that, the definition of portrait or landscape mode can vary based on the physical orientation of the device.  For example, on some devices {@link Titanium.UI.LANDSCAPE_LEFT} represents the top of the device being at the 270 degree position but other devices may (based on camera position for example) treat this position as {@link Titanium.UI.LANDSCAPE_RIGHT}.  In general, applications for Android that need to be aware of orientation should try and limit their orientation logic to handling either portrait or landscape rather than worrying about the reverse modes.  This approach will allow the orientation modes to adopt a more natural feel for the specific device.  The following list breaks down the orientation behavior on Android:  1) ({@link Titanium.UI.PORTRAIT} OR {@link Titanium.UI.UPSIDE_PORTRAIT}) AND ({@link Titanium.UI.LANDSCAPE_LEFT} OR {@link Titanium.UI.LANDSCAPE_RIGHT}) - Enables full sensor which lets the operating system control the orientation of the screen based on the sensor inside the device.  2) {@link Titanium.UI.PORTRAIT} OR {@link Titanium.UI.UPSIDE_PORTRAIT} - Enables sensor portrait mode on Android 2.3 and above.  Sensor portrait mode on Android means the screen will shift between both portrait modes according to the sensor inside the device.  If the Android version is less than 2.3, then normal portrait mode is locked.  3) {@link Titanium.UI.LANDSCAPE_LEFT} OR {@link Titanium.UI.LANDSCAPE_RIGHT} - Enables sensor landscape mode on Android 2.3 and above.  Sensor landscape mode on Android means the screen will shift between both landscape modes according to the sensor inside the device.  If the Android version is less than 2.3, then normal landscape mode is locked.  4) {@link Titanium.UI.PORTRAIT} - Locks screen orientation to portrait mode  5) {@link Titanium.UI.LANDSCAPE} - Locks screen orientation to landscape mode  6) empty array - resets the orientation to default sensor control</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.9
     */
    orientationModes:null,

    /**
     * property for the view right position. This position is relative to the view's parent. Can be either a float value or a dimension string ie 'auto' (default).
     * platforms: android, iphone, ipad
     * @type float,string
     * @since 0.9
     */
    right:null,

    /**
     * <p>view to show in the right nav bar area. only available in iPhone.</p>
     * platforms: android, iphone, ipad
     * @type object
     * @since 0.9
     */
    rightNavButton:null,

    /**
     * the size of the view as a dictionary of width and height properties
     * platforms: android, iphone, ipad
     * @type object
     * @since 0.9
     */
    size:null,

    /**
     * One of Titanium.UI.Android.SOFT_KEYBOARD_DEFAULT_ON_FOCUS, Titanium.UI.Android.SOFT_KEYBOARD_HIDE_ON_FOCUS, or Titanium.UI.Android.SOFT_KEYBOARD_SHOW_ON_FOCUS. (Android only)
     * platforms: android
     * @type int
     * @since 0.9
     */
    softKeyboardOnFocus:null,

    /**
     * <p>boolean to indicate if the tab bar should be hidden. this is only valid when the window is a child of a tab.</p>
     * platforms: android, iphone, ipad
     * @type boolean
     * @since 0.9
     */
    tabBarHidden:null,

    /**
     * <p>title of the window.</p>
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.9
     */
    title:null,

    /**
     * <p>view to show in the title area. only available in iPhone.</p>
     * platforms: android, iphone, ipad
     * @type object
     * @since 0.9
     */
    titleControl:null,

    /**
     * <p>url to a image that show in the title area. only available in iPhone.</p>
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.9
     */
    titleImage:null,

    /**
     * <p>title prompt for the window. only available in iPhone.</p>
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.9
     */
    titlePrompt:null,

    /**
     * <p>the key in the locale file to use for the title property</p>
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.9
     */
    titleid:null,

    /**
     * <p>the key in the locale file to use for the titlePrompt property</p>
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.9
     */
    titlepromptid:null,

    /**
     * <p>array of button objects to show in the toolbar of the window. only available in iPhone. this is only valid when the window is a child of a tab.</p>
     * platforms: android, iphone, ipad
     * @type array
     * @since 0.9
     */
    toolbar:null,

    /**
     * property for the view top position. This position is relative to the view's parent. Can be either a float value or a dimension string ie 'auto' (default).
     * platforms: android, iphone, ipad
     * @type float,string
     * @since 0.9
     */
    top:null,

    /**
     * a boolean indicating if the view should receive touch events (true, default) or forward them to peers (false)
     * platforms: android, iphone, ipad
     * @type boolean
     * @since 0.9
     */
    touchEnabled:null,

    /**
     * the transformation matrix to apply to the view
     * platforms: android, iphone, ipad
     * @type object
     * @since 0.9
     */
    transform:null,

    /**
     * <p>boolean to indicate if the nav bar is translucent. only available in iPhone.</p>
     * platforms: android, iphone, ipad
     * @type boolean
     * @since 0.9
     */
    translucent:null,

    /**
     * <p>url to a JavaScript file with the windows instructions. this window will create a new JavaScript sub-context that will run in its own thread and global variable space.</p>
     * platforms: android, iphone, ipad
     * @type string
     * @since 0.9
     */
    url:null,

    /**
     * a boolean of the visibility of the view
     * platforms: android, iphone, ipad
     * @type boolean
     * @since 0.9
     */
    visible:null,

    /**
     * property for the view width. Can be either a float value or a dimension string ie 'auto' (default).
     * platforms: android, iphone, ipad
     * @type float,string
     * @since 0.9
     */
    width:null,

    /**
     * <p>One of Ti.UI.Android.SOFT_INPUT_ADJUST_PAN, Ti.UI.Android.SOFT_INPUT_ADJUST_RESIZE, or Ti.UI.Android.SOFT_INPUT_ADJUST_UNSPECIFIED. Note: MUST be passed in the creation options. (Android Only) {@link http://developer.android.com/reference/android/view/Window.html#setSoftInputMode(int)}</p>
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.9
     */
    windowSoftInputMode:null,

    /**
     * the z index position relative to other sibling views
     * platforms: android, iphone, ipad
     * @type int
     * @since 0.9
     */
    zIndex:null,


    /**
     * add a child to the view hierarchy
     * platforms: android, iphone, ipad
     * @param {object} view the view to add to this views hiearchy
     * @returns void
     * @since 0.9
     */
    add:function(view) {
    },

    /**
     * add an event listener for the instance to receive view triggered events
     * platforms: android, iphone, ipad
     * @param {string} name name of the event
     * @param {function} callback callback function to invoke when the event is fired
     * @returns void
     * @since 0.9
     */
    addEventListener:function(name, callback) {
    },

    /**
     * animate the view
     * platforms: android, iphone, ipad
     * @param {object} obj either a dictionary of animation properties or an Animation object
     * @param {function} callback function to be invoked upon completion of the animation
     * @returns void
     * @since 0.9
     */
    animate:function(obj, callback) {
    },

    /**
     * <p>close the window</p>
     * platforms: android, iphone, ipad
     * @param {object} options close the window with optional animation or display properties
     * @returns void
     * @since 0.9
     */
    close:function(options) {
    },

    /**
     * fire a synthesized event to the views listener
     * platforms: android, iphone, ipad
     * @param {string} name name of the event
     * @param {object} event event object
     * @returns void
     * @since 0.9
     */
    fireEvent:function(name, event) {
    },

    /**
     * hide the view
     * platforms: android, iphone, ipad
     * @returns void
     * @since 0.9
     */
    hide:function() {
    },

    /**
     * <p>open the window</p>
     * platforms: android, iphone, ipad
     * @param {object} options open the window with optional animation or display properties
     * @returns void
     * @since 0.9
     */
    open:function(options) {
    },

    /**
     * remove a previously add view from the view hiearchy
     * platforms: android, iphone, ipad
     * @param {object} view the view to remove from this views hiearchy
     * @returns void
     * @since 0.9
     */
    remove:function(view) {
    },

    /**
     * remove a previously added event listener
     * platforms: android, iphone, ipad
     * @param {string} name name of the event
     * @param {function} callback callback function passed in addEventListener
     * @returns void
     * @since 0.9
     */
    removeEventListener:function(name, callback) {
    },

    /**
     * make the view visible
     * platforms: android, iphone, ipad
     * @returns void
     * @since 0.9
     */
    show:function() {
    },

    /**
     * return a Blob image of the rendered view
     * platforms: android, iphone, ipad
     * @param {function} f function to be invoked upon completion. if non-null, this method will be performed asynchronously. if null, it will be performed immediately
     * @since 0.9
     */
    toImage:function(f) {
    }
}

/**
 * platforms: iphone, ipad
 * @namespace <p>The Apple iOS specific UI capabilities.  All properties, methods and events in this namespace will only work on the Apple iOS related devices.</p>
 * @since 1.4
 */
Ti.UI.iOS = {


    /**
     * add an event listener for the instance to receive view triggered events
     * platforms: iphone, ipad
     * @param {string} name name of the event
     * @param {function} callback callback function to invoke when the event is fired
     * @returns void
     * @since 1.4
     */
    addEventListener:function(name, callback) {
    },

    /**
     * create and return an instance of {@link Titanium.UI.iOS.AdView}
     * platforms: iphone, ipad
     * @param {object} parameters (optional) a dictionary object properties defined in {@link Titanium.UI.iOS.AdView}
     * @since 1.4
     */
    createAdView:function(parameters) {
    },

    /**
     * fire a synthesized event to the views listener
     * platforms: iphone, ipad
     * @param {string} name name of the event
     * @param {object} event event object
     * @returns void
     * @since 1.4
     */
    fireEvent:function(name, event) {
    },

    /**
     * remove a previously added event listener
     * platforms: iphone, ipad
     * @param {string} name name of the event
     * @param {function} callback callback function passed in addEventListener
     * @returns void
     * @since 1.4
     */
    removeEventListener:function(name, callback) {
    }
}

/**
 * platforms: iphone, ipad
 * @namespace <p>The AdView is a view for display Apple iAds. The View is created by the method {@link Titanium.UI.iOS.createAdView}.</p>
 * @since 1.4
 */
Ti.UI.iOS.AdView = {

    /**
     * <p>constant for 320x50 ad sizes</p>
     * platforms: iphone, ipad
     * @type string
     * @since 1.4
     */
    SIZE_320x50:null,

    /**
     * <p>constant for 480x32 ad sizes</p>
     * platforms: iphone, ipad
     * @type string
     * @since 1.4
     */
    SIZE_480x32:null,

    /**
     * a dictionary with properties x and y to indicate the anchor point value. anchor specifies the position by which animation should occur. center is 0.5, 0.5
     * platforms: iphone, ipad
     * @type object
     * @since 1.4
     */
    anchorPoint:null,

    /**
     * read-only object with x and y properties of where the view is during animation
     * platforms: iphone, ipad
     * @type object
     * @since 1.4
     */
    animatedCenterPoint:null,

    /**
     * the background color of the view
     * platforms: iphone, ipad
     * @type string
     * @since 1.4
     */
    backgroundColor:null,

    /**
     * the disabled background color of the view. (Android)
     * platforms: iphone, ipad
     * @type string
     * @since 1.4
     */
    backgroundDisabledColor:null,

    /**
     * the disabled background image url of the view. (Android)
     * platforms: iphone, ipad
     * @type string
     * @since 1.4
     */
    backgroundDisabledImage:null,

    /**
     * the focused background color of the view. focusable must be true for normal views. (Android)
     * platforms: iphone, ipad
     * @type string
     * @since 1.4
     */
    backgroundFocusedColor:null,

    /**
     * the focused background image url of the view. focusable must be true for normal views. (Android)
     * platforms: iphone, ipad
     * @type string
     * @since 1.4
     */
    backgroundFocusedImage:null,

    /**
     * a background gradient for the view with the properties: type,startPoint,endPoint,startRadius,endRadius,backfillStart,backfillEnd,colors.
     * platforms: iphone, ipad
     * @type object
     * @since 1.4
     */
    backgroundGradient:null,

    /**
     * the background image url of the view
     * platforms: iphone, ipad
     * @type string
     * @since 1.4
     */
    backgroundImage:null,

    /**
     * End caps specify the portion of an image that should not be resized when an image is stretched. This technique is used to implement buttons and other resizable image-based interface elements. When a button with end caps is resized, the resizing occurs only in the middle of the button, in the region between the end caps. The end caps themselves keep their original size and appearance. This property specifies the size of the left end cap. The middle (stretchable) portion is assumed to be 1 pixel wide. The right end cap is therefore computed by adding the size of the left end cap and the middle portion together and then subtracting that value from the width of the image
     * platforms: iphone, ipad
     * @type float
     * @since 1.4
     */
    backgroundLeftCap:null,

    /**
     * the selected background color of the view. focusable must be true for normal views. (Android)
     * platforms: iphone, ipad
     * @type string
     * @since 1.4
     */
    backgroundSelectedColor:null,

    /**
     * the selected background image url of the view. focusable must be true for normal views. (Android)
     * platforms: iphone, ipad
     * @type string
     * @since 1.4
     */
    backgroundSelectedImage:null,

    /**
     * End caps specify the portion of an image that should not be resized when an image is stretched. This technique is used to implement buttons and other resizable image-based interface elements. When a button with end caps is resized, the resizing occurs only in the middle of the button, in the region between the end caps. The end caps themselves keep their original size and appearance. This property specifies the size of the top end cap. The middle (stretchable) portion is assumed to be 1 pixel wide. The bottom end cap is therefore computed by adding the size of the top end cap and the middle portion together and then subtracting that value from the height of the image
     * platforms: iphone, ipad
     * @type float
     * @since 1.4
     */
    backgroundTopCap:null,

    /**
     * the border color of the view
     * platforms: iphone, ipad
     * @type string
     * @since 1.4
     */
    borderColor:null,

    /**
     * the border radius of the view
     * platforms: iphone, ipad
     * @type float
     * @since 1.4
     */
    borderRadius:null,

    /**
     * the border width of the view
     * platforms: iphone, ipad
     * @type float
     * @since 1.4
     */
    borderWidth:null,

    /**
     * property for the view bottom position. This position is relative to the view's parent. Can be either a float value or a dimension string ie 'auto' (default).
     * platforms: iphone, ipad
     * @type float,string
     * @since 1.4
     */
    bottom:null,

    /**
     * a dictionary with properties x and y to indicate the center of the views position relative to the parent view
     * platforms: iphone, ipad
     * @type object
     * @since 1.4
     */
    center:null,

    /**
     * the font family
     * platforms: iphone, ipad
     * @type string
     * @since 1.4
     */
    "font-family":null,

    /**
     * the font size
     * platforms: iphone, ipad
     * @type string
     * @since 1.4
     */
    "font-size":null,

    /**
     * the font style, either normal or italics
     * platforms: iphone, ipad
     * @type string
     * @since 1.4
     */
    "font-style":null,

    /**
     * the font weight, either normal or bold
     * platforms: iphone, ipad
     * @type string
     * @since 1.4
     */
    "font-weight":null,

    /**
     * property for the view height. Can be either a float value or a dimension string ie 'auto' (default).
     * platforms: iphone, ipad
     * @type float,string
     * @since 1.4
     */
    height:null,

    /**
     * property for the view left position. This position is relative to the view's parent. Can be either a float value or a dimension string ie 'auto' (default).
     * platforms: iphone, ipad
     * @type float,string
     * @since 1.4
     */
    left:null,

    /**
     * the opacity from 0.0-1.0
     * platforms: iphone, ipad
     * @type float
     * @since 1.4
     */
    opacity:null,

    /**
     * property for the view right position. This position is relative to the view's parent. Can be either a float value or a dimension string ie 'auto' (default).
     * platforms: iphone, ipad
     * @type float,string
     * @since 1.4
     */
    right:null,

    /**
     * the size of the view as a dictionary of width and height properties
     * platforms: iphone, ipad
     * @type object
     * @since 1.4
     */
    size:null,

    /**
     * property for the view top position. This position is relative to the view's parent. Can be either a float value or a dimension string ie 'auto' (default).
     * platforms: iphone, ipad
     * @type float,string
     * @since 1.4
     */
    top:null,

    /**
     * a boolean indicating if the view should receive touch events (true, default) or forward them to peers (false)
     * platforms: iphone, ipad
     * @type boolean
     * @since 1.4
     */
    touchEnabled:null,

    /**
     * the transformation matrix to apply to the view
     * platforms: iphone, ipad
     * @type object
     * @since 1.4
     */
    transform:null,

    /**
     * a boolean of the visibility of the view
     * platforms: iphone, ipad
     * @type boolean
     * @since 1.4
     */
    visible:null,

    /**
     * property for the view width. Can be either a float value or a dimension string ie 'auto' (default).
     * platforms: iphone, ipad
     * @type float,string
     * @since 1.4
     */
    width:null,

    /**
     * the z index position relative to other sibling views
     * platforms: iphone, ipad
     * @type int
     * @since 1.4
     */
    zIndex:null,


    /**
     * add a child to the view hierarchy
     * platforms: iphone, ipad
     * @param {object} view the view to add to this views hiearchy
     * @returns void
     * @since 1.4
     */
    add:function(view) {
    },

    /**
     * add an event listener for the instance to receive view triggered events
     * platforms: iphone, ipad
     * @param {string} name name of the event
     * @param {function} callback callback function to invoke when the event is fired
     * @returns void
     * @since 1.4
     */
    addEventListener:function(name, callback) {
    },

    /**
     * animate the view
     * platforms: iphone, ipad
     * @param {object} obj either a dictionary of animation properties or an Animation object
     * @param {function} callback function to be invoked upon completion of the animation
     * @returns void
     * @since 1.4
     */
    animate:function(obj, callback) {
    },

    /**
     * <p>A banner view action can cover your application's user interface. However, your application continues to run, and receives events normally. If your application receives an event that requires the user's attention, it can programmatically cancel the action and uncover its interface by calling cancelAction. Canceling actions frequently can cause a loss of revenue for your application.</p>
     * platforms: iphone, ipad
     * @returns void
     * @since 1.4
     */
    cancelAction:function() {
    },

    /**
     * fire a synthesized event to the views listener
     * platforms: iphone, ipad
     * @param {string} name name of the event
     * @param {object} event event object
     * @returns void
     * @since 1.4
     */
    fireEvent:function(name, event) {
    },

    /**
     * hide the view
     * platforms: iphone, ipad
     * @returns void
     * @since 1.4
     */
    hide:function() {
    },

    /**
     * remove a previously add view from the view hiearchy
     * platforms: iphone, ipad
     * @param {object} view the view to remove from this views hiearchy
     * @returns void
     * @since 1.4
     */
    remove:function(view) {
    },

    /**
     * remove a previously added event listener
     * platforms: iphone, ipad
     * @param {string} name name of the event
     * @param {function} callback callback function passed in addEventListener
     * @returns void
     * @since 1.4
     */
    removeEventListener:function(name, callback) {
    },

    /**
     * make the view visible
     * platforms: iphone, ipad
     * @returns void
     * @since 1.4
     */
    show:function() {
    },

    /**
     * return a Blob image of the rendered view
     * platforms: iphone, ipad
     * @param {function} f function to be invoked upon completion. if non-null, this method will be performed asynchronously. if null, it will be performed immediately
     * @since 1.4
     */
    toImage:function(f) {
    }
}

/**
 * Notes: <h3 id="custom_fonts">Custom Fonts</h3>
<p>The iPad supports the ability to embed your own fonts in your iPad application. To add your own fonts, you should add the </p>
 * platforms: ipad
 * @namespace <p>The iPad specific UI capabilities.  All properties, methods and events in this namespace will only work on the Apple iPad related devices.  To develop for iPad, you will need the Apple iPhone SDK 3.2 or later and Titanium Mobile SDK 1.2 or later. </p>
<p>For iPad UI programming guidelines, please review the {@link http://developer.apple.com/iphone/library/documentation/General/Conceptual/iPadHIG/Introduction/Introduction}. </p>
 * @since 1.2
 */
Ti.UI.iPad = {

    /**
     * <p>An arrow that points in any direction.</p>
     * platforms: ipad
     * @type int
     * @since 1.2
     */
    POPOVER_ARROW_DIRECTION_ANY:null,

    /**
     * <p>An arrow that points downward.</p>
     * platforms: ipad
     * @type int
     * @since 1.2
     */
    POPOVER_ARROW_DIRECTION_DOWN:null,

    /**
     * <p>An arrow that points toward the left.</p>
     * platforms: ipad
     * @type int
     * @since 1.2
     */
    POPOVER_ARROW_DIRECTION_LEFT:null,

    /**
     * <p>An arrow that points toward the right.</p>
     * platforms: ipad
     * @type int
     * @since 1.2
     */
    POPOVER_ARROW_DIRECTION_RIGHT:null,

    /**
     * <p>The status of the arrow is currently unknown.</p>
     * platforms: ipad
     * @type int
     * @since 1.2
     */
    POPOVER_ARROW_DIRECTION_UNKNOWN:null,

    /**
     * <p>An arrow that points upward.</p>
     * platforms: ipad
     * @type int
     * @since 1.2
     */
    POPOVER_ARROW_DIRECTION_UP:null,


    /**
     * add an event listener for the instance to receive view triggered events
     * platforms: ipad
     * @param {string} name name of the event
     * @param {function} callback callback function to invoke when the event is fired
     * @returns void
     * @since 1.2
     */
    addEventListener:function(name, callback) {
    },

    /**
     * create and return an instance of {@link Titanium.UI.iPad.Popover}
     * platforms: ipad
     * @param {object} parameters (optional) a dictionary object properties defined in {@link Titanium.UI.iPad.Popover}
     * @since 1.2
     */
    createPopover:function(parameters) {
    },

    /**
     * create and return an instance of {@link Titanium.UI.iPad.SplitWindow}
     * platforms: ipad
     * @param {object} parameters (optional) a dictionary object properties defined in {@link Titanium.UI.iPad.SplitWindow}
     * @since 1.2
     */
    createSplitWindow:function(parameters) {
    },

    /**
     * fire a synthesized event to the views listener
     * platforms: ipad
     * @param {string} name name of the event
     * @param {object} event event object
     * @returns void
     * @since 1.2
     */
    fireEvent:function(name, event) {
    },

    /**
     * remove a previously added event listener
     * platforms: ipad
     * @param {string} name name of the event
     * @param {function} callback callback function passed in addEventListener
     * @returns void
     * @since 1.2
     */
    removeEventListener:function(name, callback) {
    }
}

/**
 * platforms: ipad
 * @namespace <p>A Popover is used to manage the presentation of content in a popover. You use popovers to present information temporarily but in a way that does not take over the entire screen like a modal view does. The popover content is layered on top of your existing content in a special type of window. The popover remains visible until the user taps outside of the popover window or you explicitly dismiss it. The Popover is created by the method {@link Titanium.UI.iPad.createPopover}.</p>
<p><img alt="popover" src="http://img.skitch.com/20100406-pmssjk1a3a65s6ui8qnbqi59c4.png"></p>
 * @since 1.2
 * 
 * @example Simple Popover
 * <p>In this example, we create a simple popover and position it near the button</p>
<pre><code>var popover = Ti.UI.iPad.createPopover({height:100,width:100});
popover.add(view);
popover.show({view:button});
</code></pre>
 * 
 * @example Popover with title and nav button
 * <p>In this example, we create a popover with a title and right navigation button.</p>
<pre><code>var popover = Ti.UI.iPad.createPopover({ 
    width:250, 
    height:100,
    title: "Yo Yo",
    rightNavButton:button
});
</code></pre>
 */
Ti.UI.iPad.Popover = {

    /**
     * a dictionary with properties x and y to indicate the anchor point value. anchor specifies the position by which animation should occur. center is 0.5, 0.5
     * platforms: ipad
     * @type object
     * @since 1.2
     */
    anchorPoint:null,

    /**
     * read-only object with x and y properties of where the view is during animation
     * platforms: ipad
     * @type object
     * @since 1.2
     */
    animatedCenterPoint:null,

    /**
     * <p>return the arrow direction of the popover</p>
     * platforms: ipad
     * @type int
     * @since 1.2
     */
    arrowDirection:null,

    /**
     * the background color of the view
     * platforms: ipad
     * @type string
     * @since 1.2
     */
    backgroundColor:null,

    /**
     * the disabled background color of the view. (Android)
     * platforms: ipad
     * @type string
     * @since 1.2
     */
    backgroundDisabledColor:null,

    /**
     * the disabled background image url of the view. (Android)
     * platforms: ipad
     * @type string
     * @since 1.2
     */
    backgroundDisabledImage:null,

    /**
     * the focused background color of the view. focusable must be true for normal views. (Android)
     * platforms: ipad
     * @type string
     * @since 1.2
     */
    backgroundFocusedColor:null,

    /**
     * the focused background image url of the view. focusable must be true for normal views. (Android)
     * platforms: ipad
     * @type string
     * @since 1.2
     */
    backgroundFocusedImage:null,

    /**
     * a background gradient for the view with the properties: type,startPoint,endPoint,startRadius,endRadius,backfillStart,backfillEnd,colors.
     * platforms: ipad
     * @type object
     * @since 1.2
     */
    backgroundGradient:null,

    /**
     * the background image url of the view
     * platforms: ipad
     * @type string
     * @since 1.2
     */
    backgroundImage:null,

    /**
     * End caps specify the portion of an image that should not be resized when an image is stretched. This technique is used to implement buttons and other resizable image-based interface elements. When a button with end caps is resized, the resizing occurs only in the middle of the button, in the region between the end caps. The end caps themselves keep their original size and appearance. This property specifies the size of the left end cap. The middle (stretchable) portion is assumed to be 1 pixel wide. The right end cap is therefore computed by adding the size of the left end cap and the middle portion together and then subtracting that value from the width of the image
     * platforms: ipad
     * @type float
     * @since 1.2
     */
    backgroundLeftCap:null,

    /**
     * the selected background color of the view. focusable must be true for normal views. (Android)
     * platforms: ipad
     * @type string
     * @since 1.2
     */
    backgroundSelectedColor:null,

    /**
     * the selected background image url of the view. focusable must be true for normal views. (Android)
     * platforms: ipad
     * @type string
     * @since 1.2
     */
    backgroundSelectedImage:null,

    /**
     * End caps specify the portion of an image that should not be resized when an image is stretched. This technique is used to implement buttons and other resizable image-based interface elements. When a button with end caps is resized, the resizing occurs only in the middle of the button, in the region between the end caps. The end caps themselves keep their original size and appearance. This property specifies the size of the top end cap. The middle (stretchable) portion is assumed to be 1 pixel wide. The bottom end cap is therefore computed by adding the size of the top end cap and the middle portion together and then subtracting that value from the height of the image
     * platforms: ipad
     * @type float
     * @since 1.2
     */
    backgroundTopCap:null,

    /**
     * the border color of the view
     * platforms: ipad
     * @type string
     * @since 1.2
     */
    borderColor:null,

    /**
     * the border radius of the view
     * platforms: ipad
     * @type float
     * @since 1.2
     */
    borderRadius:null,

    /**
     * the border width of the view
     * platforms: ipad
     * @type float
     * @since 1.2
     */
    borderWidth:null,

    /**
     * property for the view bottom position. This position is relative to the view's parent. Can be either a float value or a dimension string ie 'auto' (default).
     * platforms: ipad
     * @type float,string
     * @since 1.2
     */
    bottom:null,

    /**
     * a dictionary with properties x and y to indicate the center of the views position relative to the parent view
     * platforms: ipad
     * @type object
     * @since 1.2
     */
    center:null,

    /**
     * the font family
     * platforms: ipad
     * @type string
     * @since 1.2
     */
    "font-family":null,

    /**
     * the font size
     * platforms: ipad
     * @type string
     * @since 1.2
     */
    "font-size":null,

    /**
     * the font style, either normal or italics
     * platforms: ipad
     * @type string
     * @since 1.2
     */
    "font-style":null,

    /**
     * the font weight, either normal or bold
     * platforms: ipad
     * @type string
     * @since 1.2
     */
    "font-weight":null,

    /**
     * property for the view height. Can be either a float value or a dimension string ie 'auto' (default).
     * platforms: ipad
     * @type float,string
     * @since 1.2
     */
    height:null,

    /**
     * property for the view left position. This position is relative to the view's parent. Can be either a float value or a dimension string ie 'auto' (default).
     * platforms: ipad
     * @type float,string
     * @since 1.2
     */
    left:null,

    /**
     * <p>the left button in the nav area of the popover</p>
     * platforms: ipad
     * @type object
     * @since 1.2
     */
    leftNavButton:null,

    /**
     * the opacity from 0.0-1.0
     * platforms: ipad
     * @type float
     * @since 1.2
     */
    opacity:null,

    /**
     * property for the view right position. This position is relative to the view's parent. Can be either a float value or a dimension string ie 'auto' (default).
     * platforms: ipad
     * @type float,string
     * @since 1.2
     */
    right:null,

    /**
     * the size of the view as a dictionary of width and height properties
     * platforms: ipad
     * @type object
     * @since 1.2
     */
    size:null,

    /**
     * <p>the title of the nav area of the popover</p>
     * platforms: ipad
     * @type string
     * @since 1.2
     */
    title:null,

    /**
     * property for the view top position. This position is relative to the view's parent. Can be either a float value or a dimension string ie 'auto' (default).
     * platforms: ipad
     * @type float,string
     * @since 1.2
     */
    top:null,

    /**
     * a boolean indicating if the view should receive touch events (true, default) or forward them to peers (false)
     * platforms: ipad
     * @type boolean
     * @since 1.2
     */
    touchEnabled:null,

    /**
     * the transformation matrix to apply to the view
     * platforms: ipad
     * @type object
     * @since 1.2
     */
    transform:null,

    /**
     * a boolean of the visibility of the view
     * platforms: ipad
     * @type boolean
     * @since 1.2
     */
    visible:null,

    /**
     * property for the view width. Can be either a float value or a dimension string ie 'auto' (default).
     * platforms: ipad
     * @type float,string
     * @since 1.2
     */
    width:null,

    /**
     * the z index position relative to other sibling views
     * platforms: ipad
     * @type int
     * @since 1.2
     */
    zIndex:null,


    /**
     * add a child to the view hierarchy
     * platforms: ipad
     * @param {object} view the view to add to this views hiearchy
     * @returns void
     * @since 1.2
     */
    add:function(view) {
    },

    /**
     * add an event listener for the instance to receive view triggered events
     * platforms: ipad
     * @param {string} name name of the event
     * @param {function} callback callback function to invoke when the event is fired
     * @returns void
     * @since 1.2
     */
    addEventListener:function(name, callback) {
    },

    /**
     * animate the view
     * platforms: ipad
     * @param {object} obj either a dictionary of animation properties or an Animation object
     * @param {function} callback function to be invoked upon completion of the animation
     * @returns void
     * @since 1.2
     */
    animate:function(obj, callback) {
    },

    /**
     * fire a synthesized event to the views listener
     * platforms: ipad
     * @param {string} name name of the event
     * @param {object} event event object
     * @returns void
     * @since 1.2
     */
    fireEvent:function(name, event) {
    },

    /**
     * hide the view
     * platforms: ipad
     * @param {object} options dictionary with optional boolean property <tt>animated</tt> which indicates if the popover should be hidden with animation (defaults to true) or not
     * @returns void
     * @since 1.2
     */
    hide:function(options) {
    },

    /**
     * remove a previously add view from the view hiearchy
     * platforms: ipad
     * @param {object} view the view to remove from this views hiearchy
     * @returns void
     * @since 1.2
     */
    remove:function(view) {
    },

    /**
     * remove a previously added event listener
     * platforms: ipad
     * @param {string} name name of the event
     * @param {function} callback callback function passed in addEventListener
     * @returns void
     * @since 1.2
     */
    removeEventListener:function(name, callback) {
    },

    /**
     * <p>change the height of the popover</p>
     * platforms: ipad
     * @param {int,string} height height of the popover
     * @returns void
     * @since 1.2
     */
    setHeight:function(height) {
    },

    /**
     * <p>set the passthrough views for the popover</p>
     * platforms: ipad
     * @param {array} passthroughViews array of views which the user can interact with while the popover is open (i.e. clicking on these views will interact with these views, and not dismiss the popover).
     * @returns void
     * @since 1.2
     */
    setPassthroughViews:function(passthroughViews) {
    },

    /**
     * <p>change the width of the popover</p>
     * platforms: ipad
     * @param {int,string} width width of the popover
     * @returns void
     * @since 1.2
     */
    setWidth:function(width) {
    },

    /**
     * make the view visible
     * platforms: ipad
     * @param {object} options dictionary of the following properties: <tt>rect</tt>, <tt>animated</tt> and <tt>view</tt>. The <tt>view</tt> property should specify the view relative to where the popover should display.  <tt>animated</tt> is a boolean indicating if the showing of the popover should be animated, defaults to true. The property <tt>rect</tt> is a dictionary with the following properties: <tt>x</tt>, <tt>y</tt>, <tt>width</tt> and <tt>height</tt>, where the rectangle in <tt>view</tt> at which to anchor the popover.
     * @returns void
     * @since 1.2
     */
    show:function(options) {
    },

    /**
     * return a Blob image of the rendered view
     * platforms: ipad
     * @param {function} f function to be invoked upon completion. if non-null, this method will be performed asynchronously. if null, it will be performed immediately
     * @since 1.2
     */
    toImage:function(f) {
    }
}

/**
 * Notes: <p>The SplitWindow inherits its methods and properties from {@link Titanium.UI.Window}.</p>
<p>The <tt>masterView</tt> and <tt>detailView</tt> properties are required in the constructor of the SplitWindow and cannot be changed once set.</p>
<p>The SplitWindow is a top-level window and cannot be contained within another window or view.<br>
</p>
 * platforms: ipad
 * @namespace <p>A SplitWindow is a window that manages the presentation of two side-by-side view controllers. You use this class to implement a master-detail interface, in which the left-side view presents a list of items and the right-side presents details of the selected item. The SplitView is for use exclusively on iPad devices. The SplitWindow is created by the method {@link Titanium.UI.iPad.createSplitWindow}.</p>
<p><img alt="splitview" src="http://img.skitch.com/20100406-1f85bm9cx8t768xgsjqax1ng6y.png"></p>
 * @since 1.2
 * 
 * @example Split Window Example
 * <p>This is an example of a Split Window.</p>
<pre><code>var win = Ti.UI.createWindow();

var nav = Ti.UI.iPhone.createNavigationGroup({
   window: win
});

var splitwin = Ti.UI.iPad.createSplitWindow({
    detailView:nav,
    masterView:masterView
});

splitwin.addEventListener('visible',function(e)
{
    if (e.view == 'detail')
    {
        e.button.title = "Master";
        win.leftNavButton = e.button;
    }
    else if (e.view == 'master')
    {
        win.leftNavButton = null;
    }
});

splitwin.open();
</code></pre>
 */
Ti.UI.iPad.SplitWindow = {

    /**
     * a dictionary with properties x and y to indicate the anchor point value. anchor specifies the position by which animation should occur. center is 0.5, 0.5
     * platforms: ipad
     * @type object
     * @since 1.2
     */
    anchorPoint:null,

    /**
     * read-only object with x and y properties of where the view is during animation
     * platforms: ipad
     * @type object
     * @since 1.2
     */
    animatedCenterPoint:null,

    /**
     * the background color of the view
     * platforms: ipad
     * @type string
     * @since 1.2
     */
    backgroundColor:null,

    /**
     * the disabled background color of the view. (Android)
     * platforms: ipad
     * @type string
     * @since 1.2
     */
    backgroundDisabledColor:null,

    /**
     * the disabled background image url of the view. (Android)
     * platforms: ipad
     * @type string
     * @since 1.2
     */
    backgroundDisabledImage:null,

    /**
     * the focused background color of the view. focusable must be true for normal views. (Android)
     * platforms: ipad
     * @type string
     * @since 1.2
     */
    backgroundFocusedColor:null,

    /**
     * the focused background image url of the view. focusable must be true for normal views. (Android)
     * platforms: ipad
     * @type string
     * @since 1.2
     */
    backgroundFocusedImage:null,

    /**
     * a background gradient for the view with the properties: type,startPoint,endPoint,startRadius,endRadius,backfillStart,backfillEnd,colors.
     * platforms: ipad
     * @type object
     * @since 1.2
     */
    backgroundGradient:null,

    /**
     * the background image url of the view
     * platforms: ipad
     * @type string
     * @since 1.2
     */
    backgroundImage:null,

    /**
     * End caps specify the portion of an image that should not be resized when an image is stretched. This technique is used to implement buttons and other resizable image-based interface elements. When a button with end caps is resized, the resizing occurs only in the middle of the button, in the region between the end caps. The end caps themselves keep their original size and appearance. This property specifies the size of the left end cap. The middle (stretchable) portion is assumed to be 1 pixel wide. The right end cap is therefore computed by adding the size of the left end cap and the middle portion together and then subtracting that value from the width of the image
     * platforms: ipad
     * @type float
     * @since 1.2
     */
    backgroundLeftCap:null,

    /**
     * the selected background color of the view. focusable must be true for normal views. (Android)
     * platforms: ipad
     * @type string
     * @since 1.2
     */
    backgroundSelectedColor:null,

    /**
     * the selected background image url of the view. focusable must be true for normal views. (Android)
     * platforms: ipad
     * @type string
     * @since 1.2
     */
    backgroundSelectedImage:null,

    /**
     * End caps specify the portion of an image that should not be resized when an image is stretched. This technique is used to implement buttons and other resizable image-based interface elements. When a button with end caps is resized, the resizing occurs only in the middle of the button, in the region between the end caps. The end caps themselves keep their original size and appearance. This property specifies the size of the top end cap. The middle (stretchable) portion is assumed to be 1 pixel wide. The bottom end cap is therefore computed by adding the size of the top end cap and the middle portion together and then subtracting that value from the height of the image
     * platforms: ipad
     * @type float
     * @since 1.2
     */
    backgroundTopCap:null,

    /**
     * the border color of the view
     * platforms: ipad
     * @type string
     * @since 1.2
     */
    borderColor:null,

    /**
     * the border radius of the view
     * platforms: ipad
     * @type float
     * @since 1.2
     */
    borderRadius:null,

    /**
     * the border width of the view
     * platforms: ipad
     * @type float
     * @since 1.2
     */
    borderWidth:null,

    /**
     * property for the view bottom position. This position is relative to the view's parent. Can be either a float value or a dimension string ie 'auto' (default).
     * platforms: ipad
     * @type float,string
     * @since 1.2
     */
    bottom:null,

    /**
     * a dictionary with properties x and y to indicate the center of the views position relative to the parent view
     * platforms: ipad
     * @type object
     * @since 1.2
     */
    center:null,

    /**
     * <p>view for the detail view section of the SplitWindow</p>
     * platforms: ipad
     * @type object
     * @since 1.2
     */
    detailView:null,

    /**
     * the font family
     * platforms: ipad
     * @type string
     * @since 1.2
     */
    "font-family":null,

    /**
     * the font size
     * platforms: ipad
     * @type string
     * @since 1.2
     */
    "font-size":null,

    /**
     * the font style, either normal or italics
     * platforms: ipad
     * @type string
     * @since 1.2
     */
    "font-style":null,

    /**
     * the font weight, either normal or bold
     * platforms: ipad
     * @type string
     * @since 1.2
     */
    "font-weight":null,

    /**
     * property for the view height. Can be either a float value or a dimension string ie 'auto' (default).
     * platforms: ipad
     * @type float,string
     * @since 1.2
     */
    height:null,

    /**
     * property for the view left position. This position is relative to the view's parent. Can be either a float value or a dimension string ie 'auto' (default).
     * platforms: ipad
     * @type float,string
     * @since 1.2
     */
    left:null,

    /**
     * <p>view for the master view section of the SplitWindow</p>
     * platforms: ipad
     * @type object
     * @since 1.2
     */
    masterView:null,

    /**
     * the opacity from 0.0-1.0
     * platforms: ipad
     * @type float
     * @since 1.2
     */
    opacity:null,

    /**
     * property for the view right position. This position is relative to the view's parent. Can be either a float value or a dimension string ie 'auto' (default).
     * platforms: ipad
     * @type float,string
     * @since 1.2
     */
    right:null,

    /**
     * <p>whether or not to show the master view in portrait. Default is 'false'</p>
     * platforms: ipad
     * @type boolean
     * @since 1.2
     */
    showMasterInPortrait:null,

    /**
     * the size of the view as a dictionary of width and height properties
     * platforms: ipad
     * @type object
     * @since 1.2
     */
    size:null,

    /**
     * property for the view top position. This position is relative to the view's parent. Can be either a float value or a dimension string ie 'auto' (default).
     * platforms: ipad
     * @type float,string
     * @since 1.2
     */
    top:null,

    /**
     * a boolean indicating if the view should receive touch events (true, default) or forward them to peers (false)
     * platforms: ipad
     * @type boolean
     * @since 1.2
     */
    touchEnabled:null,

    /**
     * the transformation matrix to apply to the view
     * platforms: ipad
     * @type object
     * @since 1.2
     */
    transform:null,

    /**
     * a boolean of the visibility of the view
     * platforms: ipad
     * @type boolean
     * @since 1.2
     */
    visible:null,

    /**
     * property for the view width. Can be either a float value or a dimension string ie 'auto' (default).
     * platforms: ipad
     * @type float,string
     * @since 1.2
     */
    width:null,

    /**
     * the z index position relative to other sibling views
     * platforms: ipad
     * @type int
     * @since 1.2
     */
    zIndex:null,


    /**
     * add a child to the view hierarchy
     * platforms: ipad
     * @param {object} view the view to add to this views hiearchy
     * @returns void
     * @since 1.2
     */
    add:function(view) {
    },

    /**
     * add an event listener for the instance to receive view triggered events
     * platforms: ipad
     * @param {string} name name of the event
     * @param {function} callback callback function to invoke when the event is fired
     * @returns void
     * @since 1.2
     */
    addEventListener:function(name, callback) {
    },

    /**
     * animate the view
     * platforms: ipad
     * @param {object} obj either a dictionary of animation properties or an Animation object
     * @param {function} callback function to be invoked upon completion of the animation
     * @returns void
     * @since 1.2
     */
    animate:function(obj, callback) {
    },

    /**
     * fire a synthesized event to the views listener
     * platforms: ipad
     * @param {string} name name of the event
     * @param {object} event event object
     * @returns void
     * @since 1.2
     */
    fireEvent:function(name, event) {
    },

    /**
     * hide the view
     * platforms: ipad
     * @returns void
     * @since 1.2
     */
    hide:function() {
    },

    /**
     * remove a previously add view from the view hiearchy
     * platforms: ipad
     * @param {object} view the view to remove from this views hiearchy
     * @returns void
     * @since 1.2
     */
    remove:function(view) {
    },

    /**
     * remove a previously added event listener
     * platforms: ipad
     * @param {string} name name of the event
     * @param {function} callback callback function passed in addEventListener
     * @returns void
     * @since 1.2
     */
    removeEventListener:function(name, callback) {
    },

    /**
     * make the view visible
     * platforms: ipad
     * @returns void
     * @since 1.2
     */
    show:function() {
    },

    /**
     * return a Blob image of the rendered view
     * platforms: ipad
     * @param {function} f function to be invoked upon completion. if non-null, this method will be performed asynchronously. if null, it will be performed immediately
     * @since 1.2
     */
    toImage:function(f) {
    }
}

/**
 * platforms: iphone, ipad
 * @namespace <p>The iPhone/iPad specific UI capabilities.  All properties, methods and events in this namespace will only work on the Apple iPhone or iPad related devices.</p>
 * @since 0.5
 */
Ti.UI.iPhone = {

    /**
     * <p>The view is presented using the same style as its parent window. This is currently only available currently on iPhone/iPad and SDK 3.2+.</p>
     * platforms: iphone, ipad
     * @type int
     * @since 0.5
     */
    MODAL_PRESENTATION_CURRENT_CONTEXT:null,

    /**
     * <p>The width and height of the presented window are smaller than those of the screen and the view is centered on the screen. If the device is in a landscape orientation and the keyboard is visible, the position of the view is adjusted upward so that the view remains visible. All uncovered areas are dimmed to prevent the user from interacting with them. This is currently only available currently on iPhone/iPad and SDK 3.2+.</p>
     * platforms: iphone, ipad
     * @type int
     * @since 0.5
     */
    MODAL_PRESENTATION_FORMSHEET:null,

    /**
     * <p>The presented window covers the screen. This is currently only available currently on iPhone/iPad and SDK 3.2+.</p>
     * platforms: iphone, ipad
     * @type int
     * @since 0.5
     */
    MODAL_PRESENTATION_FULLSCREEN:null,

    /**
     * <p>The height of the presented window is set to the height of the screen and the view's width is set to the width of the screen in a portrait orientation. Any uncovered areas are dimmed to prevent the user from interacting with them. (In portrait orientations, this option is essentially the same as {@link Titanium.UI.iPhone.MODAL_PRESENTATION_FULLSCREEN}). This is currently only available currently on iPhone/iPad and SDK 3.2+.</p>
     * platforms: iphone, ipad
     * @type int
     * @since 0.5
     */
    MODAL_PRESENTATION_PAGESHEET:null,

    /**
     * <p>When the window is presented, its view slides up from the bottom of the screen. On dismissal, the view slides back down. This is the default transition style. This is currently only available currently on iPhone/iPad.</p>
     * platforms: iphone, ipad
     * @type int
     * @since 0.5
     */
    MODAL_TRANSITION_STYLE_COVER_VERTICAL:null,

    /**
     * <p>When the window is presented, the current view fades out while the new view fades in at the same time. On dismissal, a similar type of cross-fade is used to return to the original view. This is currently only available currently on iPhone/iPad.</p>
     * platforms: iphone, ipad
     * @type int
     * @since 0.5
     */
    MODAL_TRANSITION_STYLE_CROSS_DISSOLVE:null,

    /**
     * <p>When the window is presented, the current view initiates a horizontal 3D flip from right-to-left, resulting in the revealing of the new view as if it were on the back of the previous view. On dismissal, the flip occurs from left-to-right, returning to the original view. This is currently only available currently on iPhone/iPad.</p>
     * platforms: iphone, ipad
     * @type int
     * @since 0.5
     */
    MODAL_TRANSITION_STYLE_FLIP_HORIZONTAL:null,

    /**
     * <p>When the window is presented, one corner of the current view curls up to reveal the modal view underneath. On dismissal, the curled up page unfurls itself back on top of the modal view. A modal view presented using this transition is itself prevented from presenting any additional modal views. This transition style is supported only if the window is presenting a {@link Titanium.UI.iPhone.MODAL_PRESENTATION_FULLSCREEN} modal presentation style.  This is currently only available currently on iPhone/iPad and SDK 3.2+.</p>
     * platforms: iphone, ipad
     * @type int
     * @since 0.5
     */
    MODAL_TRANSITION_STYLE_PARTIAL_CURL:null,

    /**
     * <p>set the application badge for the application's icon in the springboard</p>
     * platforms: iphone, ipad
     * @type string
     * @since 0.5
     */
    appBadge:null,

    /**
     * <p>control whether the shake to edit system wide capability is enabled</p>
     * platforms: iphone, ipad
     * @type boolean
     * @since 0.5
     */
    appSupportsShakeToEdit:null,

    /**
     * <p>control the status bar visibility</p>
     * platforms: iphone, ipad
     * @type boolean
     * @since 0.5
     */
    statusBarHidden:null,

    /**
     * <p>constant that controls the status bar color style</p>
     * platforms: iphone, ipad
     * @type int
     * @since 0.5
     */
    statusBarStyle:null,


    /**
     * add an event listener for the instance to receive view triggered events
     * platforms: iphone, ipad
     * @param {string} name name of the event
     * @param {function} callback callback function to invoke when the event is fired
     * @returns void
     * @since 0.5
     */
    addEventListener:function(name, callback) {
    },

    /**
     * create and return an instance of {@link Titanium.UI.iPhone.NavigationGroup}
     * platforms: iphone, ipad
     * @param {object} parameters (optional) a dictionary object properties defined in {@link Titanium.UI.iPhone.NavigationGroup}
     * @since 0.5
     */
    createNavigationGroup:function(parameters) {
    },

    /**
     * fire a synthesized event to the views listener
     * platforms: iphone, ipad
     * @param {string} name name of the event
     * @param {object} event event object
     * @returns void
     * @since 0.5
     */
    fireEvent:function(name, event) {
    },

    /**
     * <p>convenience method to hide the status bar</p>
     * platforms: iphone, ipad
     * @param {boolean} animated boolean to indicate if the action should be animated
     * @param {int} animationStyle the animation style
     * @returns void
     * @since 0.5
     */
    hideStatusBar:function(animated, animationStyle) {
    },

    /**
     * remove a previously added event listener
     * platforms: iphone, ipad
     * @param {string} name name of the event
     * @param {function} callback callback function passed in addEventListener
     * @returns void
     * @since 0.5
     */
    removeEventListener:function(name, callback) {
    },

    /**
     * <p>convenience method to show the status bar</p>
     * platforms: iphone, ipad
     * @param {boolean} animated boolean to indicate if the action should be animated
     * @param {int} animationStyle the animation style
     * @returns void
     * @since 0.5
     */
    showStatusBar:function(animated, animationStyle) {
    }
}

/**
 * platforms: iphone, ipad
 * @namespace <p>A set of constants for the styles available for {@link Titanium.UI.ActivityIndicator} objects.</p>
 * @since 0.9
 */
Ti.UI.iPhone.ActivityIndicatorStyle = {

    /**
     * <p>The large white style of indicator.</p>
     * platforms: iphone, ipad
     * @type int
     * @since 0.9
     */
    BIG:null,

    /**
     * <p>The standard gray style of indicator.</p>
     * platforms: iphone, ipad
     * @type int
     * @since 0.9
     */
    DARK:null,

    /**
     * <p>The standard white style of indicator (the default).</p>
     * platforms: iphone, ipad
     * @type int
     * @since 0.9
     */
    PLAIN:null,



}

/**
 * platforms: iphone, ipad
 * @namespace <p>A set of constants for the Animation Styles used for transitions.</p>
 * @since 0.9
 */
Ti.UI.iPhone.AnimationStyle = {

    /**
     * <p>Curl downwards during a transition animation</p>
     * platforms: iphone, ipad
     * @type int
     * @since 0.9
     */
    CURL_DOWN:null,

    /**
     * <p>Curl upwards during a transition animation</p>
     * platforms: iphone, ipad
     * @type int
     * @since 0.9
     */
    CURL_UP:null,

    /**
     * <p>Flip from left to right during a transition animation</p>
     * platforms: iphone, ipad
     * @type int
     * @since 0.9
     */
    FLIP_FROM_LEFT:null,

    /**
     * <p>Flip from right to left during a transition animation</p>
     * platforms: iphone, ipad
     * @type int
     * @since 0.9
     */
    FLIP_FROM_RIGHT:null,

    /**
     * <p>No animation</p>
     * platforms: iphone, ipad
     * @type int
     * @since 0.9
     */
    NONE:null,



}

/**
 * Notes: <p>The <tt>window</tt> property must be set initially in the constructor when creating a navigation group to the root level window.  All Navigation Groups must have at least one root window that cannot be removed.</p>
 * platforms: iphone, ipad
 * @namespace <p>A Navigation Group implements a specialized view that manages the navigation of hierarchical content. The Navigation Group is created by the method {@link Titanium.UI.iPhone.NavigationGroup}.</p>
<p><img alt="navgroup" src="http://img.skitch.com/20100406-rwe44533tkd94fdnbqqudxynpe.png"></p>
<p>A Navigation Group is very similar to Tab Bars with the exception that they do not maintain a group of windows with a interface bar at the bottom.</p>
 * @since 1.2
 * 
 * @example Simple Navigation Group
 * <p>In this example, we open 2 windows in a navigation group.  When you run this, the initial window should be blue.  When you click the back button, you should see a window that should be red.</p>
<pre><code>var win = Titanium.UI.createWindow();
var win1 = Titanium.UI.createWindow({
    backgroundColor:"red",
    title:"Red Window"
});
var nav = Titanium.UI.iPhone.createNavigationGroup({
   window: win1
});
win.add(nav);
win.open();
var win2 = Titanium.UI.createWindow({
    backgroundColor:"blue",
    title:"Blue Window"
});
nav.open(win2,{animated:true});
</code></pre>
 */
Ti.UI.iPhone.NavigationGroup = {

    /**
     * a dictionary with properties x and y to indicate the anchor point value. anchor specifies the position by which animation should occur. center is 0.5, 0.5
     * platforms: iphone, ipad
     * @type object
     * @since 1.2
     */
    anchorPoint:null,

    /**
     * read-only object with x and y properties of where the view is during animation
     * platforms: iphone, ipad
     * @type object
     * @since 1.2
     */
    animatedCenterPoint:null,

    /**
     * the background color of the view
     * platforms: iphone, ipad
     * @type string
     * @since 1.2
     */
    backgroundColor:null,

    /**
     * the disabled background color of the view. (Android)
     * platforms: iphone, ipad
     * @type string
     * @since 1.2
     */
    backgroundDisabledColor:null,

    /**
     * the disabled background image url of the view. (Android)
     * platforms: iphone, ipad
     * @type string
     * @since 1.2
     */
    backgroundDisabledImage:null,

    /**
     * the focused background color of the view. focusable must be true for normal views. (Android)
     * platforms: iphone, ipad
     * @type string
     * @since 1.2
     */
    backgroundFocusedColor:null,

    /**
     * the focused background image url of the view. focusable must be true for normal views. (Android)
     * platforms: iphone, ipad
     * @type string
     * @since 1.2
     */
    backgroundFocusedImage:null,

    /**
     * a background gradient for the view with the properties: type,startPoint,endPoint,startRadius,endRadius,backfillStart,backfillEnd,colors.
     * platforms: iphone, ipad
     * @type object
     * @since 1.2
     */
    backgroundGradient:null,

    /**
     * the background image url of the view
     * platforms: iphone, ipad
     * @type string
     * @since 1.2
     */
    backgroundImage:null,

    /**
     * End caps specify the portion of an image that should not be resized when an image is stretched. This technique is used to implement buttons and other resizable image-based interface elements. When a button with end caps is resized, the resizing occurs only in the middle of the button, in the region between the end caps. The end caps themselves keep their original size and appearance. This property specifies the size of the left end cap. The middle (stretchable) portion is assumed to be 1 pixel wide. The right end cap is therefore computed by adding the size of the left end cap and the middle portion together and then subtracting that value from the width of the image
     * platforms: iphone, ipad
     * @type float
     * @since 1.2
     */
    backgroundLeftCap:null,

    /**
     * the selected background color of the view. focusable must be true for normal views. (Android)
     * platforms: iphone, ipad
     * @type string
     * @since 1.2
     */
    backgroundSelectedColor:null,

    /**
     * the selected background image url of the view. focusable must be true for normal views. (Android)
     * platforms: iphone, ipad
     * @type string
     * @since 1.2
     */
    backgroundSelectedImage:null,

    /**
     * End caps specify the portion of an image that should not be resized when an image is stretched. This technique is used to implement buttons and other resizable image-based interface elements. When a button with end caps is resized, the resizing occurs only in the middle of the button, in the region between the end caps. The end caps themselves keep their original size and appearance. This property specifies the size of the top end cap. The middle (stretchable) portion is assumed to be 1 pixel wide. The bottom end cap is therefore computed by adding the size of the top end cap and the middle portion together and then subtracting that value from the height of the image
     * platforms: iphone, ipad
     * @type float
     * @since 1.2
     */
    backgroundTopCap:null,

    /**
     * the border color of the view
     * platforms: iphone, ipad
     * @type string
     * @since 1.2
     */
    borderColor:null,

    /**
     * the border radius of the view
     * platforms: iphone, ipad
     * @type float
     * @since 1.2
     */
    borderRadius:null,

    /**
     * the border width of the view
     * platforms: iphone, ipad
     * @type float
     * @since 1.2
     */
    borderWidth:null,

    /**
     * property for the view bottom position. This position is relative to the view's parent. Can be either a float value or a dimension string ie 'auto' (default).
     * platforms: iphone, ipad
     * @type float,string
     * @since 1.2
     */
    bottom:null,

    /**
     * a dictionary with properties x and y to indicate the center of the views position relative to the parent view
     * platforms: iphone, ipad
     * @type object
     * @since 1.2
     */
    center:null,

    /**
     * the font family
     * platforms: iphone, ipad
     * @type string
     * @since 1.2
     */
    "font-family":null,

    /**
     * the font size
     * platforms: iphone, ipad
     * @type string
     * @since 1.2
     */
    "font-size":null,

    /**
     * the font style, either normal or italics
     * platforms: iphone, ipad
     * @type string
     * @since 1.2
     */
    "font-style":null,

    /**
     * the font weight, either normal or bold
     * platforms: iphone, ipad
     * @type string
     * @since 1.2
     */
    "font-weight":null,

    /**
     * property for the view height. Can be either a float value or a dimension string ie 'auto' (default).
     * platforms: iphone, ipad
     * @type float,string
     * @since 1.2
     */
    height:null,

    /**
     * property for the view left position. This position is relative to the view's parent. Can be either a float value or a dimension string ie 'auto' (default).
     * platforms: iphone, ipad
     * @type float,string
     * @since 1.2
     */
    left:null,

    /**
     * the opacity from 0.0-1.0
     * platforms: iphone, ipad
     * @type float
     * @since 1.2
     */
    opacity:null,

    /**
     * property for the view right position. This position is relative to the view's parent. Can be either a float value or a dimension string ie 'auto' (default).
     * platforms: iphone, ipad
     * @type float,string
     * @since 1.2
     */
    right:null,

    /**
     * the size of the view as a dictionary of width and height properties
     * platforms: iphone, ipad
     * @type object
     * @since 1.2
     */
    size:null,

    /**
     * property for the view top position. This position is relative to the view's parent. Can be either a float value or a dimension string ie 'auto' (default).
     * platforms: iphone, ipad
     * @type float,string
     * @since 1.2
     */
    top:null,

    /**
     * a boolean indicating if the view should receive touch events (true, default) or forward them to peers (false)
     * platforms: iphone, ipad
     * @type boolean
     * @since 1.2
     */
    touchEnabled:null,

    /**
     * the transformation matrix to apply to the view
     * platforms: iphone, ipad
     * @type object
     * @since 1.2
     */
    transform:null,

    /**
     * a boolean of the visibility of the view
     * platforms: iphone, ipad
     * @type boolean
     * @since 1.2
     */
    visible:null,

    /**
     * property for the view width. Can be either a float value or a dimension string ie 'auto' (default).
     * platforms: iphone, ipad
     * @type float,string
     * @since 1.2
     */
    width:null,

    /**
     * the z index position relative to other sibling views
     * platforms: iphone, ipad
     * @type int
     * @since 1.2
     */
    zIndex:null,


    /**
     * add a child to the view hierarchy
     * platforms: iphone, ipad
     * @param {object} view the view to add to this views hiearchy
     * @returns void
     * @since 1.2
     */
    add:function(view) {
    },

    /**
     * add an event listener for the instance to receive view triggered events
     * platforms: iphone, ipad
     * @param {string} name name of the event
     * @param {function} callback callback function to invoke when the event is fired
     * @returns void
     * @since 1.2
     */
    addEventListener:function(name, callback) {
    },

    /**
     * animate the view
     * platforms: iphone, ipad
     * @param {object} obj either a dictionary of animation properties or an Animation object
     * @param {function} callback function to be invoked upon completion of the animation
     * @returns void
     * @since 1.2
     */
    animate:function(obj, callback) {
    },

    /**
     * <p>close a window and remove it from the navigation group</p>
     * platforms: iphone, ipad
     * @param {object} window window to close
     * @param {object} properties optional dictionary. the only current property supported is <tt>animated</tt> which is a boolean to indicate if the window should be closed animated (default) or not.
     * @returns void
     * @since 1.2
     */
    close:function(window, properties) {
    },

    /**
     * fire a synthesized event to the views listener
     * platforms: iphone, ipad
     * @param {string} name name of the event
     * @param {object} event event object
     * @returns void
     * @since 1.2
     */
    fireEvent:function(name, event) {
    },

    /**
     * hide the view
     * platforms: iphone, ipad
     * @returns void
     * @since 1.2
     */
    hide:function() {
    },

    /**
     * <p>open a window within the navigation group</p>
     * platforms: iphone, ipad
     * @param {object} window window to open within the tab group
     * @param {object} properties optional dictionary. the only current property supported is <tt>animated</tt> which is a boolean to indicate if the window should be opened animated (default) or not.
     * @returns void
     * @since 1.2
     */
    open:function(window, properties) {
    },

    /**
     * remove a previously add view from the view hiearchy
     * platforms: iphone, ipad
     * @param {object} view the view to remove from this views hiearchy
     * @returns void
     * @since 1.2
     */
    remove:function(view) {
    },

    /**
     * remove a previously added event listener
     * platforms: iphone, ipad
     * @param {string} name name of the event
     * @param {function} callback callback function passed in addEventListener
     * @returns void
     * @since 1.2
     */
    removeEventListener:function(name, callback) {
    },

    /**
     * make the view visible
     * platforms: iphone, ipad
     * @returns void
     * @since 1.2
     */
    show:function() {
    },

    /**
     * return a Blob image of the rendered view
     * platforms: iphone, ipad
     * @param {function} f function to be invoked upon completion. if non-null, this method will be performed asynchronously. if null, it will be performed immediately
     * @since 1.2
     */
    toImage:function(f) {
    }
}

/**
 * platforms: iphone, ipad
 * @namespace <p>A set of constants for the bar styles used on the <tt>style</tt> property of {@link Titanium.UI.ProgressBar}.</p>
 * @since 0.8
 */
Ti.UI.iPhone.ProgressBarStyle = {

    /**
     * <p>The style of progress view that is used in a toolbar.</p>
     * platforms: iphone, ipad
     * @type int
     * @since 0.8
     */
    BAR:null,

    /**
     * <p>he standard progress-view style. This is the default.</p>
     * platforms: iphone, ipad
     * @type int
     * @since 0.8
     */
    DEFAULT:null,

    /**
     * <p>The standard progress-view style. Same as <tt>DEFAULT</tt>.</p>
     * platforms: iphone, ipad
     * @type int
     * @since 0.8
     */
    PLAIN:null,



}

/**
 * platforms: iphone, ipad
 * @namespace <p>A set of constants for the Animation Styles used for transition on table view rows.</p>
 * @since 0.9
 */
Ti.UI.iPhone.RowAnimationStyle = {

    /**
     * <p>The inserted row or rows slides in from the bottom; the deleted row or rows slides out toward the bottom.</p>
     * platforms: iphone, ipad
     * @type int
     * @since 0.9
     */
    BOTTOM:null,

    /**
     * <p>The inserted or deleted row or rows fades into or out of the table view.</p>
     * platforms: iphone, ipad
     * @type int
     * @since 0.9
     */
    FADE:null,

    /**
     * <p>The inserted row or rows slides in from the left; the deleted row or rows slides out to the left.</p>
     * platforms: iphone, ipad
     * @type int
     * @since 0.9
     */
    LEFT:null,

    /**
     * <p>No animation is performed. The new cell value appears as if the cell had just been reloaded.</p>
     * platforms: iphone, ipad
     * @type int
     * @since 0.9
     */
    NONE:null,

    /**
     * <p>The inserted row or rows slides in from the right; the deleted row or rows slides out to the right.</p>
     * platforms: iphone, ipad
     * @type int
     * @since 0.9
     */
    RIGHT:null,

    /**
     * <p>The inserted row or rows slides in from the top; the deleted row or rows slides out toward the top.</p>
     * platforms: iphone, ipad
     * @type int
     * @since 0.9
     */
    TOP:null,



}

/**
 * platforms: iphone, ipad
 * @namespace <p>A set of constants for the styles available for {@link Titanium.UI.ActivityIndicator} objects.</p>
 * @since 0.9
 */
Ti.UI.iPhone.ScrollIndicatorStyle = {

    /**
     * <p>A style of indicator which is black smaller than the default style. This style is good against a white content background.</p>
     * platforms: iphone, ipad
     * @type int
     * @since 0.9
     */
    BLACK:null,

    /**
     * <p>The default style of scroll indicator, which is black with a white border. This style is good against any content background.</p>
     * platforms: iphone, ipad
     * @type int
     * @since 0.9
     */
    DEFAULT:null,

    /**
     * <p>A style of indicator is white and smaller than the default style. This style is good against a black content background.</p>
     * platforms: iphone, ipad
     * @type int
     * @since 0.9
     */
    WHITE:null,



}

/**
 * platforms: iphone, ipad
 * @namespace <p>A set of constants for the status bar style.</p>
 * @since 0.9
 */
Ti.UI.iPhone.StatusBar = {

    /**
     * <p>The default status bar style</p>
     * platforms: iphone, ipad
     * @type int
     * @since 0.9
     */
    DEFAULT:null,

    /**
     * <p>The gray colored status bar style</p>
     * platforms: iphone, ipad
     * @type int
     * @since 0.9
     */
    GRAY:null,

    /**
     * <p>The opaque black status bar style.</p>
     * platforms: iphone, ipad
     * @type int
     * @since 0.9
     */
    OPAQUE_BLACK:null,

    /**
     * <p>The translucent black status bar style. This style provides some level of transparency to the device background.</p>
     * platforms: iphone, ipad
     * @type int
     * @since 0.9
     */
    TRANSLUCENT_BLACK:null,



}

/**
 * platforms: iphone, ipad
 * @namespace <p>A set of constants for the system button style for buttons.</p>
 * @since 0.8
 */
Ti.UI.iPhone.SystemButton = {

    /**
     * <p>action icon. Usable in nav bars and toolbars only.</p>
     * platforms: iphone, ipad
     * @type int
     * @since 0.8
     */
    ACTION:null,

    /**
     * <p>special style that shows an activity indicator. when visible, the activity indicator is already started.</p>
     * platforms: iphone, ipad
     * @type int
     * @since 0.8
     */
    ACTIVITY:null,

    /**
     * <p>add icon. Usable in nav bars and toolbars only.</p>
     * platforms: iphone, ipad
     * @type int
     * @since 0.8
     */
    ADD:null,

    /**
     * <p>bookmarks icon. Usable in nav bars and toolbars only.</p>
     * platforms: iphone, ipad
     * @type int
     * @since 0.8
     */
    BOOKMARKS:null,

    /**
     * <p>camera icon. Usable in nav bars and toolbars only.</p>
     * platforms: iphone, ipad
     * @type int
     * @since 0.8
     */
    CAMERA:null,

    /**
     * <p>cancel icon. localized. Usable in nav bars and toolbars only.</p>
     * platforms: iphone, ipad
     * @type int
     * @since 0.8
     */
    CANCEL:null,

    /**
     * <p>compose icon. Usable in nav bars and toolbars only.</p>
     * platforms: iphone, ipad
     * @type int
     * @since 0.8
     */
    COMPOSE:null,

    /**
     * <p>green style plus (+) icon</p>
     * platforms: iphone, ipad
     * @type int
     * @since 0.8
     */
    CONTACT_ADD:null,

    /**
     * <p>disclosure style icon</p>
     * platforms: iphone, ipad
     * @type int
     * @since 0.8
     */
    DISCLOSURE:null,

    /**
     * <p>done icon. localized. Usable in nav bars and toolbars only.</p>
     * platforms: iphone, ipad
     * @type int
     * @since 0.8
     */
    DONE:null,

    /**
     * <p>edit icon. localized. Usable in nav bars and toolbars only.</p>
     * platforms: iphone, ipad
     * @type int
     * @since 0.8
     */
    EDIT:null,

    /**
     * <p>fast forward icon. Usable in nav bars and toolbars only.</p>
     * platforms: iphone, ipad
     * @type int
     * @since 0.8
     */
    FAST_FORWARD:null,

    /**
     * <p>Blank space to add between other items. Only the <tt>width</tt> property is used when this value is set.</p>
     * platforms: iphone, ipad
     * @type int
     * @since 0.8
     */
    FIXED_SPACE:null,

    /**
     * <p>Blank space to add between other items. The space is distributed equally between the other items. Other item properties are ignored when this value is set.</p>
     * platforms: iphone, ipad
     * @type int
     * @since 0.8
     */
    FLEXIBLE_SPACE:null,

    /**
     * <p>a dark style info circle icon</p>
     * platforms: iphone, ipad
     * @type int
     * @since 0.8
     */
    INFO_DARK:null,

    /**
     * <p>a light style info circle icon</p>
     * platforms: iphone, ipad
     * @type int
     * @since 0.8
     */
    INFO_LIGHT:null,

    /**
     * <p>organize icon. Usable in nav bars and toolbars only.</p>
     * platforms: iphone, ipad
     * @type int
     * @since 0.8
     */
    ORGANIZE:null,

    /**
     * <p>pause icon. Usable in nav bars and toolbars only.</p>
     * platforms: iphone, ipad
     * @type int
     * @since 0.8
     */
    PAUSE:null,

    /**
     * <p>play icon. Usable in nav bars and toolbars only.</p>
     * platforms: iphone, ipad
     * @type int
     * @since 0.8
     */
    PLAY:null,

    /**
     * <p>refresh icon. Usable in nav bars and toolbars only.</p>
     * platforms: iphone, ipad
     * @type int
     * @since 0.8
     */
    REFRESH:null,

    /**
     * <p>reply icon. Usable in nav bars and toolbars only.</p>
     * platforms: iphone, ipad
     * @type int
     * @since 0.8
     */
    REPLY:null,

    /**
     * <p>rewind icon. Usable in nav bars and toolbars only.</p>
     * platforms: iphone, ipad
     * @type int
     * @since 0.8
     */
    REWIND:null,

    /**
     * <p>save icon. localized. Usable in nav bars and toolbars only.</p>
     * platforms: iphone, ipad
     * @type int
     * @since 0.8
     */
    SAVE:null,

    /**
     * <p>same as ACTIVITY</p>
     * platforms: iphone, ipad
     * @type int
     * @since 0.8
     */
    SPINNER:null,

    /**
     * <p>stop icon. Usable in nav bars and toolbars only.</p>
     * platforms: iphone, ipad
     * @type int
     * @since 0.8
     */
    STOP:null,

    /**
     * <p>trash icon. Usable in nav bars and toolbars only.</p>
     * platforms: iphone, ipad
     * @type int
     * @since 0.8
     */
    TRASH:null,



}

/**
 * platforms: iphone, ipad
 * @namespace <p>A set of constants for the system button styles that can be used for the button <tt>style</tt> property.</p>
 * @since 0.8
 */
Ti.UI.iPhone.SystemButtonStyle = {

    /**
     * <p>Used by tabbed bar and button bar only to use the more condensed style used in nav bars and tool bars.</p>
     * platforms: iphone, ipad
     * @type int
     * @since 0.8
     */
    BAR:null,

    /**
     * <p>A simple button style with a border.</p>
     * platforms: iphone, ipad
     * @type int
     * @since 0.8
     */
    BORDERED:null,

    /**
     * <p>The style for a done button - for example, a button that completes some task and returns to the previous view.</p>
     * platforms: iphone, ipad
     * @type int
     * @since 0.8
     */
    DONE:null,

    /**
     * <p>Glows when tapped. The default item style.</p>
     * platforms: iphone, ipad
     * @type int
     * @since 0.8
     */
    PLAIN:null,



}

/**
 * platforms: iphone, ipad
 * @namespace <p>A set of constants for the system icon styles that can be used on a tab group tab.</p>
 * @since 0.8
 */
Ti.UI.iPhone.SystemIcon = {

    /**
     * <p>Bookmark style icon</p>
     * platforms: iphone, ipad
     * @type int
     * @since 0.8
     */
    BOOKMARKS:null,

    /**
     * <p>Contacts style icon</p>
     * platforms: iphone, ipad
     * @type int
     * @since 0.8
     */
    CONTACTS:null,

    /**
     * <p>Downloads style icon</p>
     * platforms: iphone, ipad
     * @type int
     * @since 0.8
     */
    DOWNLOADS:null,

    /**
     * <p>Favorites style icon</p>
     * platforms: iphone, ipad
     * @type int
     * @since 0.8
     */
    FAVORITES:null,

    /**
     * <p>Featured style icon</p>
     * platforms: iphone, ipad
     * @type int
     * @since 0.8
     */
    FEATURED:null,

    /**
     * <p>History style icon</p>
     * platforms: iphone, ipad
     * @type int
     * @since 0.8
     */
    HISTORY:null,

    /**
     * <p>More style icon</p>
     * platforms: iphone, ipad
     * @type int
     * @since 0.8
     */
    MORE:null,

    /**
     * <p>Most recent style icon</p>
     * platforms: iphone, ipad
     * @type int
     * @since 0.8
     */
    MOST_RECENT:null,

    /**
     * <p>Most viewed style icon</p>
     * platforms: iphone, ipad
     * @type int
     * @since 0.8
     */
    MOST_VIEWED:null,

    /**
     * <p>Recents style icon</p>
     * platforms: iphone, ipad
     * @type int
     * @since 0.8
     */
    RECENTS:null,

    /**
     * <p>Search style icon</p>
     * platforms: iphone, ipad
     * @type int
     * @since 0.8
     */
    SEARCH:null,

    /**
     * <p>Top rated style icon</p>
     * platforms: iphone, ipad
     * @type int
     * @since 0.8
     */
    TOP_RATED:null,



}

/**
 * platforms: iphone, ipad
 * @namespace <p>A set of constants for the style that can be used for the <tt>selectionStyle</tt> property of {@link Titanium.UI.TableViewRow}.</p>
 * @since 0.9
 */
Ti.UI.iPhone.TableViewCellSelectionStyle = {

    /**
     * <p>The cell when selected has a blue background. This is the default value.</p>
     * platforms: iphone, ipad
     * @type int
     * @since 0.9
     */
    BLUE:null,

    /**
     * <p>Then cell when selected has a gray background.</p>
     * platforms: iphone, ipad
     * @type int
     * @since 0.9
     */
    GRAY:null,

    /**
     * <p>The cell has no distinct style for when it is selected.</p>
     * platforms: iphone, ipad
     * @type int
     * @since 0.9
     */
    NONE:null,



}

/**
 * platforms: iphone, ipad
 * @namespace <p>A set of constants for the position value that can be used for the <tt>position</tt> property of {@link Titanium.UI.TableView} when invoking <tt>scrollToIndex</tt>.</p>
 * @since 0.9
 */
Ti.UI.iPhone.TableViewScrollPosition = {

    /**
     * <p>The table view scrolls the row of interest to the bottom of the visible table view.</p>
     * platforms: iphone, ipad
     * @type int
     * @since 0.9
     */
    BOTTOM:null,

    /**
     * <p>The table view scrolls the row of interest to the middle of the visible table view.</p>
     * platforms: iphone, ipad
     * @type int
     * @since 0.9
     */
    MIDDLE:null,

    /**
     * <p>The table view scrolls the row of interest to be fully visible with a minimum of movement. If the row is already fully visible, no scrolling occurs. For example, if the row is above the visible area, the behavior is identical to that specified by <tt>TOP</tt>. This is the default.</p>
     * platforms: iphone, ipad
     * @type int
     * @since 0.9
     */
    NONE:null,

    /**
     * <p>The table view scrolls the row of interest to the top of the visible table view.</p>
     * platforms: iphone, ipad
     * @type int
     * @since 0.9
     */
    TOP:null,



}

/**
 * platforms: iphone, ipad
 * @namespace <p>A set of constants for the style that can be used for the <tt>separatorStyle</tt> property of {@link Titanium.UI.TableView}.</p>
 * @since 0.9
 */
Ti.UI.iPhone.TableViewSeparatorStyle = {

    /**
     * <p>The separator cell has no distinct style.</p>
     * platforms: iphone, ipad
     * @type int
     * @since 0.9
     */
    NONE:null,

    /**
     * <p>The separator cell has a single line running across its width. This is the default value.</p>
     * platforms: iphone, ipad
     * @type int
     * @since 0.9
     */
    SINGLE_LINE:null,



}

/**
 * platforms: iphone, ipad
 * @namespace <p>A set of constants for the style that can be used for the button <tt>style</tt> property of {@link Titanium.UI.TableView}.</p>
 * @since 0.9
 */
Ti.UI.iPhone.TableViewStyle = {

    /**
     * <p>A table view whose sections present distinct groups of rows. The section headers and footers do not float.</p>
     * platforms: iphone, ipad
     * @type int
     * @since 0.9
     */
    GROUPED:null,

    /**
     * <p>A plain table view. Any section headers or footers are displayed as inline separators and float when the table view is scrolled.</p>
     * platforms: iphone, ipad
     * @type int
     * @since 0.9
     */
    PLAIN:null,



}

/**
 * platforms: android, iphone, ipad
 * @namespace <p>The top level Utils module.  The Utils module is a set of common JavaScript functions that are 
useful for applications.</p>
 * @since 0.9
 */
Ti.Utils = {


    /**
     * add an event listener for the instance to receive view triggered events
     * platforms: android, iphone, ipad
     * @param {string} name name of the event
     * @param {function} callback callback function to invoke when the event is fired
     * @returns void
     * @since 0.9
     */
    addEventListener:function(name, callback) {
    },

    /**
     * <p>decode a Base64 string</p>
     * platforms: android, iphone, ipad
     * @param {string} str the string to use for the input
     * @since 0.9
     */
    base64decode:function(str) {
    },

    /**
     * <p>encode a string into Base64</p>
     * platforms: android, iphone, ipad
     * @param {string} str the string to use for the input
     * @since 0.9
     */
    base64encode:function(str) {
    },

    /**
     * fire a synthesized event to the views listener
     * platforms: android, iphone, ipad
     * @param {string} name name of the event
     * @param {object} event event object
     * @returns void
     * @since 0.9
     */
    fireEvent:function(name, event) {
    },

    /**
     * <p>compute a MD5 hash algorithm against the input and return a hex-based string</p>
     * platforms: android, iphone, ipad
     * @param {string} str the string to use for the input
     * @since 0.9
     */
    md5HexDigest:function(str) {
    },

    /**
     * remove a previously added event listener
     * platforms: android, iphone, ipad
     * @param {string} name name of the event
     * @param {function} callback callback function passed in addEventListener
     * @returns void
     * @since 0.9
     */
    removeEventListener:function(name, callback) {
    }
}

/**
 * platforms: android, iphone, ipad
 * @namespace <p>The top level XML module.  The XML module is used parsing and processing XML-based content.</p>
 * @since 0.9
 */
Ti.XML = {


    /**
     * add an event listener for the instance to receive view triggered events
     * platforms: android, iphone, ipad
     * @param {string} name name of the event
     * @param {function} callback callback function to invoke when the event is fired
     * @returns void
     * @since 0.9
     */
    addEventListener:function(name, callback) {
    },

    /**
     * fire a synthesized event to the views listener
     * platforms: android, iphone, ipad
     * @param {string} name name of the event
     * @param {object} event event object
     * @returns void
     * @since 0.9
     */
    fireEvent:function(name, event) {
    },

    /**
     * <p>parse an XML string into a DOMDocument</p>
     * platforms: android, iphone, ipad
     * @param {string} xml the XML content as a string
     * @since 0.9
     */
    parseString:function(xml) {
    },

    /**
     * remove a previously added event listener
     * platforms: android, iphone, ipad
     * @param {string} name name of the event
     * @param {function} callback callback function passed in addEventListener
     * @returns void
     * @since 0.9
     */
    removeEventListener:function(name, callback) {
    },

    /**
     * <p>serialize a DOMDocument or DOMNode and its descendants into an XML string</p>
     * platforms: android, iphone, ipad
     * @param {DOMNode} node the XML DOMNode or DOMDocument to serialize
     * @since 0.9
     */
    serializeToString:function(node) {
    }
}

/**
 * platforms: android, iphone, ipad
 * @namespace <p>The DOMDocument returned from {@link Titanium.XML.parseString}. The result is an object that implementes the DOM Level 2 API.</p>
 * @since 0.9
 */
Ti.XML.DOMDocument = {



}

/**
 * platforms: android, iphone, ipad
 * @namespace <p>The top level Yahoo module.  The Yahoo module is used for accessing Yahoo related API services.</p>
 * @since 0.8
 */
Ti.Yahoo = {


    /**
     * add an event listener for the instance to receive view triggered events
     * platforms: android, iphone, ipad
     * @param {string} name name of the event
     * @param {function} callback callback function to invoke when the event is fired
     * @returns void
     * @since 0.8
     */
    addEventListener:function(name, callback) {
    },

    /**
     * fire a synthesized event to the views listener
     * platforms: android, iphone, ipad
     * @param {string} name name of the event
     * @param {object} event event object
     * @returns void
     * @since 0.8
     */
    fireEvent:function(name, event) {
    },

    /**
     * remove a previously added event listener
     * platforms: android, iphone, ipad
     * @param {string} name name of the event
     * @param {function} callback callback function passed in addEventListener
     * @returns void
     * @since 0.8
     */
    removeEventListener:function(name, callback) {
    },

    /**
     * <p>invoke a Yahoo YQL query</p>
     * platforms: android, iphone, ipad
     * @param {string} yql the YQL query to execute
     * @param {function} callback the function to execute when the query completes. The event will contain the boolean property <tt>success</tt> if successful. If <tt>success</tt> is false, the <tt>message</tt> property will contain the error message. If <tt>success</tt> is true, the <tt>data</tt> property will contain the data payload received from the YQL.
     * @returns void
     * @since 0.8
     */
    yql:function(yql, callback) {
    }
}


var Titanium = Ti;
