import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, find } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Modifier | indeterminate', function (hooks) {
  setupRenderingTest(hooks);

  test('sets the element.indeterminate property', async function (assert) {
    this.set('flag', true);

    await render(hbs`<input type="checkbox" {{indeterminate this.flag}} aria-label="mod" />`);
    const input = find('input[aria-label="mod"]');

    assert.strictEqual(input.indeterminate, true, 'initial IDL state works');

    this.set('flag', false);
    assert.strictEqual(input.indeterminate, false, 'updating the IDL works');
  });
});
