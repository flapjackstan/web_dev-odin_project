const leapYears = function(year) {
	// checks if year is divisible by 4
	let isLeapYear = ((year % 400 === 0) || (year % 4 === 0 && year % 100 != 0));

	// returns final bool
	return isLeapYear;
};

// Do not edit below this line
module.exports = leapYears;
