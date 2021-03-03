const functions = require('../src/functions');

test('Ads 2 + 2 to equal 4', () => {
    expect(functions.add(2, 2)).toBe(4);
});

test('Add  2 + 2 to NOT equal 5', () => {
    expect(functions.add(2, 2)).not.toBe(5);
});

test('Should be null', () => {
    expect(functions.isNull()).toBeNull();
});

test('Should be falsy', () => {
    expect(functions.checkValue('')).toBeFalsy();
    expect(functions.checkValue(2)).toBeTruthy();
});

test('User should be Brad Traversy object', () => {
    expect(functions.createUser()).toStrictEqual({
        firstName: 'Stas',
        lastName: 'Aleksandrovich',
    });
});

test('Should be under 1600', () => {
    const load1 = 800;
    const load2 = 700;
    expect(load1 + load2).toBeLessThan(1600);
});

test('There is on I in team', () => {
    expect('team').not.toMatch(/I/);
});

test('Admin should be in usernames', () => {
    const usernames = ['John', 'karen', 'admin'];
    expect(usernames).toContain('admin');
});

// test('Should return user', () => {
// //     // expect.assertions(1);
// //     functions.fetchUser(); //?
// //     return functions.fetchUser().then((data) => {
// //         expect(data.name).toEqual('Leanne Graham1');
// //     });
// // });

// test('Should return user', async () => {
//     // expect.assertions(1);
//     const data = functions.fetchUser();
//     expect(data.name).toEqual('Leanne Graham1');
// });
