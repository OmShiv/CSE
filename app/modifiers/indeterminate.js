import { modifier } from 'ember-modifier';

export default modifier(function indeterminate(element, [value]) {
  element.indeterminate = !!value;
});
