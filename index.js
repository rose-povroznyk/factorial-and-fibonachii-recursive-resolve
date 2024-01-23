////////////////// Рекурсивна функція на знаходження факторіалу

function findFactorial(num) {
  if (num === 0 || num === 1) {
    return 1;
  } else {
    return (num *= findFactorial(num - 1));
  }
}

console.log(findFactorial(5));

////////////////// Рекурсивна функція на знаходження послідовності чисел Фібоначчі

function recursiveFibonacciGenerator(num) {
  if (num === 1) {
    return [0];
  } else if (num === 2) {
    return [0, 1];
  } else {
    let previousNum = recursiveFibonacciGenerator(num - 1);
    let nextNum =
      previousNum[previousNum.length - 1] + previousNum[previousNum.length - 2];
    return [...previousNum, nextNum]; //прийшлося гуглити, сама не додумалася(
  }
}

console.log(recursiveFibonacciGenerator(17));

////////////////// Функція з циклом на знаходження послідовності чисел Фібоначчі
function fibonacciGenerator(n) {
  let output = [];

  if (n === 1) {
    output = [0];
  } else if (n === 2) {
    output = [0, 1];
  } else {
    output = [0, 1];
    for (let i = 2; i < n; i++) {
      output.push(output.at(-2) + output.at(-1));
    }
  }

  return output;
}

///////////////////////// Нагуглений розв'язок
//////////////////Stackoverflow Fibonachii resolve
// function fibonacci(num) {
//   if (num < 2) {
//     return num;
//   } else {
//     return fibonacci(num - 1) + fibonacci(num - 2);
//   }
// }

// const nTerms = prompt('Enter the number of terms: ');

// if (nTerms <= 0) {
//   console.log('Enter a positive integer.');
// } else {
//   for (let i = 0; i < nTerms; i++) {
//     console.log(fibonacci(i));
//   }
// }
