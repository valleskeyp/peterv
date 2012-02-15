// Licensed under the Apache License, Version 2.0 (the "License"); you may not
// use this file except in compliance with the License. You may obtain a copy of
// the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
// WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
// License for the specific language governing permissions and limitations under
// the License.
/**
* @namespace
* $.couch is used to communicate with a CouchDB server, the server methods can
* be called directly without creating an instance. Typically all methods are
* passed an <code>options</code> object which defines a success callback which
* is called with the data returned from the http request to CouchDB, you can
* find the other settings that can be used in the <code>options</code> object
* from <a href="http://api.jquery.com/jQuery.ajax/#jQuery-ajax-settings">
* jQuery.ajax settings</a>
* <pre><code>$.couch.activeTasks({
* success: function (data) {
* console.log(data);
* }
* });</code></pre>
* Outputs (for example):
* <pre><code>[
* {
* "pid" : "<0.11599.0>",
* "status" : "Copied 0 of 18369 changes (0%)",
* "task" : "recipes",
* "type" : "Database Compaction"
* }
*]</code></pre>
*/
(function($) {
$.couch = $.couch || {};
/** @lends $.couch */
/**
* @private
*/
function encodeDocId(docID) {
var parts = docID.split("/");
if (parts[0] == "_design") {
parts.shift();
return "_design/" + encodeURIComponent(parts.join('/'));
}
return encodeURIComponent(docID);
}
/**
* @private
*/
var uuidCache = [];
$.extend($.couch, {
urlPrefix: '',
/**
* You can obtain a list of active tasks by using the /_active_tasks URL.
* The result is a JSON array of the currently running tasks, with each task
* being described with a single object.
* @see <a href="http://techzone.couchbase.com/sites/default/files/uploads/
* all/documentation/couchbase-api-misc.html#couchbase-api-misc_active-task
* s_get">docs for /_active_tasks</a>
* @param {ajaxSettings} options <a href="http://api.jquery.com/jQuery.ajax
* /#jQuery-ajax-settings">jQuery ajax settings</a>
*/
activeTasks: function(options) {
ajax(
{url: this.urlPrefix + "/_active_tasks"},
options,
"Active task status could not be retrieved"
);
},
/**
* Returns a list of all the databases in the CouchDB instance
* @see <a href="http://techzone.couchbase.com/sites/default/files/uploads/
* all/documentation/couchbase-api-misc.html#couchbase-api-misc_active-task
* s_get">docs for /_all_dbs</a>
* @param {ajaxSettings} options <a href="http://api.jquery.com/jQuery.ajax
* /#jQuery-ajax-settings">jQuery ajax settings</a>
*/
allDbs: function(options) {
ajax(
{url: this.urlPrefix + "/_all_dbs"},
options,
"An error occurred retrieving the list of all databases"
);
},
/**
* View and edit the CouchDB configuration, called with just the options
* parameter the entire config is returned, you can be more specific by
* passing the section and option parameters, if you specify a value that
* value will be stored in the configuration.
* @see <a href="http://techzone.couchbase.com/sites/default/files/uploads/
* all/documentation/couchbase-api-config.html#couchbase-api-config_config
* -section-key_put">docs for /_config</a>
* @param {ajaxSettings} options
* <a href="http://api.jquery.com/jQuery.ajax/#jQuery-ajax-settings">
* jQuery ajax settings</a>
* @param {String} [section] the section of the config
* @param {String} [option] the particular config option