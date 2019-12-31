function getMin() {
  let array = arguments[0];

  for (let i = 0; i < arguments.length; i++) {
    if (array > arguments[i]) {
      array = arguments[i];
    }
  }
  return array;
}

console.log(getMin(3, 0, -3));