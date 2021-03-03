const reverseString = require('../src/reverseString');

test('reverseString function exists', () => {
    expect(reverseString).toBeDefined();
});

test('String reverses', () => {
    expect(reverseString('dfsdfafadfadfadf')).toEqual(
        'fdafdafdafafdsfd'
    );
});

test('String reverses', () => {
    expect(reverseString('Hello')).toEqual('olleh');
});
