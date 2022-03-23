const repeatString = function(string, num) {
    let concatenatedString = '';
    if (num >= 0) {
        for (i = 0; i < num; i++) {
            concatenatedString += string;
        }
        return concatenatedString;
    } else {
        return 'ERROR';
    }
};

repeatString('hey', 5);

// Do not edit below this line
module.exports = repeatString;