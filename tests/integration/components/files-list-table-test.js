
import { module, test } from 'qunit';
import { render, click, find, findAll } from '@ember/test-helpers';
import { setupRenderingTest } from 'ember-qunit';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | files-list-table', function (hooks) {
  setupRenderingTest(hooks);

  const FILES = [
    { name: 'a.exe', device: 'Dev1', path: '\\\\Device\\\\A', status: 'available' },
    { name: 'b.exe', device: 'Dev2', path: '\\\\Device\\\\B', status: 'scheduled' },
    { name: 'c.dll', device: 'Dev3', path: '\\\\Device\\\\C', status: 'available' }
  ];

  test('it renders correctly', async function (assert) {
    assert.expect(8);

    this.set('files', FILES);

    await render(hbs`<FilesListTable @files={{this.files}} />`);

    assert.dom('.toolbar h2').hasText('None Selected', 'No selection initially');
    assert.strictEqual(findAll('tbody tr').length, 3, 'renders 3 rows');

    await click('input[aria-label="Select a.exe on Dev1"]');
    assert.dom('.toolbar h2').hasText('Selected 1', 'counter updates after row select');

    // Indeterminate checkbox
    const header = find('.toolbar input[type="checkbox"]');
    assert.dom(header).hasAttribute('aria-checked', 'mixed', 'select-all is in indeterminate state when some selected');

    await click(header);
    assert.dom('.toolbar h2').hasText('Selected 3', 'correct number of selected files is displayed');
    assert.dom(header).hasAttribute('aria-checked', 'true', 'select-all is in checked state when all selected');

    await click(header);
    assert.dom('.toolbar h2').hasText('None Selected', 'initial text is displayed when none selected');
    assert.dom(header).hasAttribute('aria-checked', 'false', 'header shows unchecked when none selected');
  });
});
