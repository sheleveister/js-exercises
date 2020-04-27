function fibonacci(num) {
  const initValue = [0, 1];

  for (let i = 1; i < num; i++) {
    initValue.push(initValue[i] + initValue[i - 1]);
  }
  return initValue[num];
}

function fibonacci2(num) {
  let a = 0;
  let b = 1;

  for (let i = 1; i < num; i++) {
    [a, b] = [b, a + b];
  }
  return b;
}

console.log(fibonacci2(10));
