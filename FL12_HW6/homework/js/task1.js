let firstNumber = parseFloat(prompt('Enter a:'));
let secondNumber = parseFloat(prompt('Enter b:'));
let thirdNumber = parseFloat(prompt('Enter c:'));
let discriminant, x, x1, x2, a, b, c;
const four = 4;
const two = 2;


if (isNaN(firstNumber) || firstNumber === null || firstNumber === '') {
  console.error('Invalid input data');
} else {
  a = firstNumber;
}


if (isNaN(secondNumber) || secondNumber === null || secondNumber === '') {
  console.error('Invalid input data');
} else {
  b = secondNumber;
}

if (isNaN(thirdNumber) || thirdNumber === null || thirdNumber === '') {
  console.error('Invalid input data');
} else {
  c = thirdNumber;
}

discriminant = b * b - four * a * c;
if (discriminant === 0) {
  x = -b / two * a;
  console.log(`x = ${x}`);
} else if (discriminant > 0) {
  x1 = (-b + Math.sqrt(discriminant)) / (two * a);
  x2 = (-b - Math.sqrt(discriminant)) / (two * a);
  console.log(`x1 = ${x1}; x2 = ${x2}`);
} else {
  console.log('error');
}


