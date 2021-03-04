const axios = require('axios');

const functions = {
    add: (num1, num2) => num1 + num2,
    isNull: () => null,
    checkValue: (x) => x,
    createUser: () => {
        const user = { firstName: 'Stas' };
        user.lastName = 'Aleksandrovich';
        return user;
    },
    fetchUser() {
        axios
            .get('https://jsonplaceholder.typicode.com/users/1')
            // .get('https://cat-fact.herokuapp.com/facts')
            .then((res) => res.data)
            .catch((err) => err);
    },
};

//
module.exports = functions;
