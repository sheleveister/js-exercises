function palindrome(str) {
  const clearStr = str.replace(/\s+/g, '').toLowerCase();
  return clearStr === clearStr.split('').reverse().join('');
}

function palindrome2(str) {
  str = str.replace(/\s+/g, '').toLowerCase();

  const len = Math.floor(str.length / 2);

  for (let i = 0; i < len; i++) {
    if (str[i] !== str[str.length - i - 1]) {
      return false;
    }
  }
  return true;
}

// console.log(palindrome('racecar'));
// console.log(palindrome('table'));
// console.log(palindrome('А роза упала на лапу Азора'));

console.log(palindrome2('А роза упала на лапу Азора'));
console.log(palindrome2('table'));
