const isAnagram = require('../src/anagrams');

test('isAnagram function exists', () => {
    expect(typeof isAnagram).toEqual('function');
});

test('"cinema" is anagrma "iceman"', () => {
    expect(isAnagram('cinema', 'iceman')).toBeTruthy();
});

test('"Dormitory" is anagrma "dirty room###"', () => {
    expect(isAnagram('Dormitory', 'dirty room###')).toBeTruthy();
});

test('"Hello" is NOT anagram "Aloha"', () => {
    expect(isAnagram('Hello', 'Aloha')).toBeFalsy();
});
