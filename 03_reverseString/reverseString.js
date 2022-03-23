const reverseString = function(string) {
    let stringReversed = '';
    for (let i = string.length -1; i >= 0; i--) {
        stringReversed += string[i];
    }
    return stringReversed;
};

string = prompt('Enter any word or short sentence below');
reverseString (string);

// Do not edit below this line
module.exports = reverseString;
