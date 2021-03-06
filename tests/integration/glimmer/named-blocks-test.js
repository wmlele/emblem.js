import { module, test } from 'qunit';
import { w } from 'tests/support/utils';

module('glimmer: named blocks', function (hooks) {
  test('named block support', function (assert) {
    const emblem = w(
      '% x-modal',
      '  % @header as |@title|',
      '    |Header #{title}',
      '  % @body',
      '    |Body',
      '  % @footer',
      '    |Footer'
    );

    assert.compilesTo(emblem, '<x-modal><@header as |@title|>Header {{title}}</@header><@body>Body</@body><@footer>Footer</@footer></x-modal>');
  });
});
