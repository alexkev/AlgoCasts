const reverse = require('./index');

test('Reverse function exists 1', () => {
  expect(reverse).toBeDefined();
});

test('Reverse reverses a string 2', () => {
  expect(reverse('abcd')).toEqual('dcba');
});

test('Reverse reverses a string 3', () => {
  expect(reverse('  abcd')).toEqual('dcba  ');
});
