import { module, test } from 'qunit';
import { visit, click, find, findAll, settled } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | files-list', function (hooks) {
  setupApplicationTest(hooks);

  let originalAlert;

  hooks.beforeEach(function () {
    originalAlert = window.alert;
  });

  hooks.afterEach(function () {
    window.alert = originalAlert;
  });

  test('user is able to see a list of files and download them', async function (assert) {
    assert.expect(5);

    // given when you visit the page
    await visit('/');

    // when the data has loaded
    await settled();

    // then as many items as expected are rendered
    assert.strictEqual(findAll('tbody tr').length, 6, 'renders 6 rows');

    // when clicking on any item’s checkbox
    await click('input[aria-label="Select netsh.exe on Luigi"]');
    // then the counter is incremented
    assert.dom('.toolbar h2').hasText('Selected 1', 'row selection increments counter');

    // when clicking on the select-all checkbox
    await click('.toolbar input[type="checkbox"]');
    // then all files are selected
    assert.dom('.toolbar h2').hasText('Selected 6', 'select-all selects all rows');

    // stub alert method
    window.alert = (msg) => {
      const condition1 = msg.includes('Windows\\\\System32\\\\netsh.exe') && msg.includes('Luigi');
      const condition2 = msg.includes('Windows\\\\System32\\\\uxtheme.dll') && msg.includes('Peach');
      const condition3 = !msg.includes('smss.exe') && !msg.includes('Mario');

      // 2. then the alert is called with only files that are available status
      assert.true(msg.length > 0, 'alert was called');
      assert.true(condition1 && condition2 && condition3, 'alert is called with only files that are available status');
    };

    // 1. when clicking on the download button
    await click('.toolbar .button');

    // 2. then the alert is called with only files that are available status
  });
});
