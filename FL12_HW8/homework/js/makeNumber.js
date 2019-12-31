function makeNumber (string) {
  let number = '';
  for (let index in string) {
    if(parseInt(string[index])) {
      number += string[index];
    } 
  }
  return number;
}

console.log(makeNumber('erer384jjjfd123'));
console.log(makeNumber('123o98h76gfdd'));
console.log(makeNumber('ijifjgdj'));
