// tests/test-helper.js
import Application from 'cs-exercise/app';
import config from 'cs-exercise/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';
import { setup } from 'qunit-dom';

QUnit.config.autostart = false;
QUnit.config.notrycatch = true;
QUnit.config.testTimeout = 20000;

setup(QUnit.assert);

setApplication(Application.create(config.APP));

start();
