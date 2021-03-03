//

const reverseString = (str) => {
    return str.toLowerCase().split('').reverse().join('');
};
reverseString('dfsdfafadfadfadf'); //?
console.log(reverseString('dfsdfafadfadfadf'));

module.exports = reverseString;
