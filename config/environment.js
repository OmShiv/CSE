'use strict';

module.exports = function (environment) {
  const ENV = {
    modulePrefix: 'cs-exercise',
    environment,
    rootURL: '/',
    locationType: 'history',
    EmberENV: { EXTEND_PROTOTYPES: false },
    APP: {}
  };

  if (environment === 'test') {
    ENV.locationType = 'none';
    ENV.APP.autoboot = false;
    ENV.APP.rootElement = '#ember-testing';
  }

  return ENV;
};