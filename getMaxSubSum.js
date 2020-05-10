// Найти непрерывный подмассив в arr, сумма элементов в котором максимальна.
// Если все элементы отрицательные – ничего не берём(подмассив пустой) и сумма равна «0»:

// function getMaxSubSum(arr) {
//   let newArray = [];
//   const sum = [];
//
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = arr.length; j > 0; j--) {
//       newArray = arr.slice(i, j);
//
//       const sumRes = newArray.reduce((acc, item) => {
//         acc += item;
//         return acc;
//       }, 0);
//       sum.push(sumRes);
//     }
//
//   }
//   console.log('sum', sum);
//
//   return Math.max(...sum);
//
// }

function getMaxSubSum(arr) {
  let maxSum = 0;
  let partialSum = 0;

  for (let num of arr) {
    partialSum += num;
    maxSum = Math.max(maxSum, partialSum);
    if (partialSum < 0) partialSum = 0;
  }
  return maxSum;
}

// console.log(getMaxSubSum([-1, 2, 3, -9])); // = 5 (сумма выделенных)
// console.log(getMaxSubSum([2, -1, 2, 3, -9])); // = 6
console.log(getMaxSubSum([-1, 2, 3, -9, 11])); // = 11
// console.log(getMaxSubSum([-2, -1, 1, 2])); // = 3
// console.log(getMaxSubSum([100, -9, 2, -3, 5])); // = 100
// console.log(getMaxSubSum([1, 2, 3])); //  = 6 (берём все)
// console.log(getMaxSubSum([-1, -2, -3])); // = 0
