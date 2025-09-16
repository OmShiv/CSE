import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, find } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | ui/checkbox', function (hooks) {
  setupRenderingTest(hooks);

  test('applies modifier and sets aria-checked to mixed', async function (assert) {
    this.setProperties({ checked: false, indeterminate: true });

    await render(hbs`
      <Ui::Checkbox
        @checked={{this.checked}}
        @indeterminate={{this.indeterminate}}
        aria-label="test-1"
      />
    `);

    const input = find('input[aria-label="test-1"]');
    assert.true(!!input, 'renders input');
    assert.strictEqual(input.indeterminate, true, 'indeterminate property set on element');
    assert.dom(input).hasAttribute('aria-checked', 'mixed', 'aria-checked is "mixed"');
  });

  test('when not indeterminate, aria-checked mirrors checked', async function (assert) {
    this.setProperties({ checked: true, indeterminate: false });

    await render(hbs`
      <Ui::Checkbox
        @checked={{this.checked}}
        @indeterminate={{this.indeterminate}}
        aria-label="test-2"
      />
    `);

    const input = find('input[aria-label="test-2"]');
    assert.strictEqual(input.indeterminate, false, 'indeterminate is false');
    assert.dom(input).hasAttribute('aria-checked', 'true', 'aria-checked true when checked');
  });
});
