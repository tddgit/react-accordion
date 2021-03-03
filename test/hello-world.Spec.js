const helloworld = require('../src/hello-world');

test('Prints hello world', () => {
    expect(helloworld()).toEqual('hello world');
});
