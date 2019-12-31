function countNumbers(string) {
  let number = string.split('').filter(index => !isNaN(index));

  return number.reduce(function count(object,number) {
    object[number] = (object[number] || null) + 1;
    return object;
  },{});
}

console.log(countNumbers('erer384jj4444666888jfd123'));
console.log(countNumbers('jdjjka000466588kkkfs662555'));
console.log(countNumbers(''));