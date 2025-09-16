'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function (defaults) {
  const app = new EmberApp(defaults, {
    // vendorFiles: {
    //   'loader.js': 'node_modules/loader.js/dist/loader/loader.js',
    // },
    autoImport: { watchDependencies: [] },
  });

  return app.toTree();
};