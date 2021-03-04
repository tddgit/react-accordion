function isAnagram(str1, str2) {
    return formatStr(str1) === formatStr(str2);
}

function formatStr(str) {
    return str.replace(/[^\w]/g, '').toLowerCase().split('').sort()
        .join('');
}

isAnagram('afadfasdfa', 'fadfadsfadf'); // ?
isAnagram('cinema', 'iceman'); // ?

module.exports = isAnagram;
