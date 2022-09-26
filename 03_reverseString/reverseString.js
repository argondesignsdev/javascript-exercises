const reverseString = function(str) {
const strArr = [];
let reversed = [];
counter = 0;
for (let i = 0; i < str.length; i++){
  strArr.push(str[i]);
}

for (let i = strArr.lengthl; i > 0; i--){
counter++;
reversed[counter] = strArr[i]
}
console.log(reversed)
};

// Do not edit below this line
module.exports = reverseString;
