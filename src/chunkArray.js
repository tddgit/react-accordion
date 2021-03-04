const chunkArray = (arr, len) => {
    const chunkedArr = [];

    arr.forEach((val) => {
        const last = chunkedArr[chunkedArr.length - 1];
        if (!last || last.length === len) {
            chunkedArr.push([val]);
        } else {
            last.push(val);
        }
    });
    return chunkedArr;
};
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
chunkArray(numbers, 2); // ?

module.exports = chunkArray;
