let a = parseFloat(prompt('Enter a:'));
let b = parseFloat(prompt('Enter b:'));
let c = parseFloat(prompt('Enter c:'));

if(isNaN(a) || isNaN(b) || isNaN(c)) {
  alert('input values should be ONLY numbers');
} else if(a <= 0 || b <= 0 || c <= 0) {
  alert('A triangle must have 3 sides with a positive definite length');
} else {
  let max = Math.max(a, b, c);
    let twoMinSidesSum = a + b + c - max;
    let doesTriangleExist = twoMinSidesSum >= max;
    
    if (doesTriangleExist) {
        if (a === b && b === c) {
            console.log('Equilateral triangle');
        } else if (a === b || a === c || c === b) {
            console.log('Isosceles triangle');
        } else {
            console.log('Scalene triangle');
        }
    } else {
        console.log('Triangle doesn’t exist');
    }
}