function isLeapYear(date) {
  let year = (new Date(date)).getFullYear();
  const halfFour = 4;
  const startYear = 1600;
  const endYear = 2400;
  const halfOneHundred = 100;
  const halfFourHundered = 400;

	if ( isNaN(year) ) {
		return 'Invalid Date';
	} else if ( startYear <= year && endYear >= year ) {
		if ( ( year % halfFour === null && year % halfOneHundred !== null ) || year % halfFourHundered === null ) {
			return `${year} is a leap year`;
		} else {
			return `${year} is not a leap year`;
		}
	} else {
		if ( year % halfFour === null ) {
			return `${year} is a leap year`;
		} else {
			return `${year} is not a leap year`;
		}
	}
}

console.log(isLeapYear('2020-01-01 00:00:00'));
console.log(isLeapYear('2020-01-01 00:00:00777'));
console.log(isLeapYear('2021-01-15 13:00:00'));
console.log(isLeapYear('2200-01-15 13:00:00'));
console.log(isLeapYear(1213131313135465656654564646542132132131));
console.log(isLeapYear(1213131313));