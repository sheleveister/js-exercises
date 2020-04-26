/**
 *
 * @param num
 * % 3 -> fizz
 * % 5 -> buzz
 * % 3 && % 5 -> fizzbuzz
 *
 */

function fizzBuzz(num) {
  for (let i = 1; i <= num; i++) {
    const isSplitThree = i % 3 === 0;
    const isSplitFive = i % 5 === 0;

    if (isSplitThree && isSplitFive) {
      console.log('fizzbuzz');
    }
    else if (isSplitThree) {
      console.log('fizz');
    }
    else if (isSplitFive) {
      console.log('buzz');
    }
    else {
      console.log(i);
    }
  }
}

console.log(fizzBuzz(20));
