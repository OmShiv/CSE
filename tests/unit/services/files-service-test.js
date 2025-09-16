import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Service | files-service', function (hooks) {
  setupTest(hooks);

  test('list resolves with data', async function (assert) {
    assert.expect(3);

    const service = this.owner.lookup('service:files-service');
    assert.true(!!service, 'service is registered');

    const result = await service.list();
    assert.true(Array.isArray(result), 'returns an array');
    assert.true(result.length > 0, 'returns non-empty list');
  });
});
