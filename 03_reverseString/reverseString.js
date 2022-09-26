const reverseString = function(str) {
  const toArray =[]
for (i = str.length; i >= 0; i--) {
  toArray.push(str[i])
}
const reverse = toArray.join('')
return reverse;
};

// Do not edit below this line
module.exports = reverseString;
