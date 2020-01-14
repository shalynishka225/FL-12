function convert(...string) {
  let arrayForConvert = [];
  for(let i = 0; i < string.length; i++){
    let element = typeof string[i];
    if(element === 'string') {
      arrayForConvert.push(Number(string[i]));
    } else if (element === 'number') {
      arrayForConvert.push(string[i]+'');
    }
  }
  return arrayForConvert;
}

function executeforEach(array, func) {
  for(let i = 0; i < array.length; i++) {
    func(array[i]);
  }
}

function mapArray(array,func) {
  let arrayForMap = [];

  executeforEach(array, (el) => {
    let elementForExecute = func(el+'');
    arrayForMap.push(elementForExecute);
  });
  return arrayForMap;
}

function filterArray(array,func) {
  let arrayForFilter = [];

  executeforEach(array, (el) => {
    if (func(el)) {
      arrayForFilter.push(el+'');
    }
  });
  return arrayForFilter;
}

function flipOver(string) {
 let reverse = '';
 for(let i = string.length-1; i >=0; i--){
  reverse += string[i];
 }
 return reverse;
}

function makeListFromRange(array) {
  let arrayForList = [];
  for(let i = array[0]; i <= array[1]; i++) {
    arrayForList.push(i);
  }
  return arrayForList;
}

function getArrayOfKeys(array,key) {
  let arrayForKeys = [];
  executeforEach(array, (el) => {
    arrayForKeys.push(el[key]);
  });
  return arrayForKeys;
}

const actors = [
  { name: 'tommy', age: 36 },
  { name: 'lee', age: 28 }
];

function substitute(array) {
  const thirty = 30;
  let arrayForSubstitute = array;
  let tmp = mapArray(array, (el) => el < thirty);
  for(let i = 0; i < array.length; i++) {
    if(tmp[i]) {
      arrayForSubstitute[i] = '*';
    }
  }
  return arrayForSubstitute;
}
const year = 2019;
const two = 2;
const date = new Date(year, null, two);

function getPastDay(dateNumber,dayNumber) {
  const tmp = new Date(dateNumber);
  tmp.setDate(tmp.getDate() - dayNumber);
  return tmp.getDate();
}

function formatDate(date) {
  const ten = 10;
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  let hours = date.getHours();
  if (hours < ten) {
      hours = `0${hours}`;
  }

  let minutes = date.getMinutes();
  if (minutes < ten) {
      minutes = `0${minutes}`;
  }

  return `${year}/${month}/${day} ${hours}:${minutes}`;
}



