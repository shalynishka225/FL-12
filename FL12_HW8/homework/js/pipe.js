function pipe(x, ...arr) {
  arr.forEach(index => {
      x = index(x);
  });
  return x;
}

function addOne(x) {
  return x + 1;
}

console.log(pipe(1,addOne));
console.log(pipe(1,addOne,addOne));