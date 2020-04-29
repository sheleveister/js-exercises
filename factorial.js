function factorial(num) {
  if (num !== 1) {
    num = num * factorial(num - 1);
  }
  return num;
}

console.log(factorial(5));
