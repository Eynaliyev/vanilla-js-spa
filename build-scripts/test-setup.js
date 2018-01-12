// This file isn't being transpiled so must use es5 and CommonJs
require('babel-register')();

// Disable webpack features that Mocha doesn't understand
require.extensions['.css'] = function() {};