const chunkArray = require('../src/chunkArray');

test('chunkArray function exists', () => {
    expect(chunkArray).toBeDefined();
});

test('Chunk an array of 9 values of 2', () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    expect(chunkArray(numbers, 2)).toEqual([
        [1, 2],
        [3, 4],
        [5, 6],
        [7, 8],
        [9],
    ]);
});

test('Chunk an array of 9 values of 2', () => {
    const numbers = [1, 2, 3];
    expect(chunkArray(numbers, 1)).toEqual([[1], [2], [3]]);
});
