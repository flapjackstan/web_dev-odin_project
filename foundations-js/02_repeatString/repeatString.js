const repeatString = function(stringToRepeat, timesToRepeat) {
	let combinedString = ''

	if(timesToRepeat < 0){
		return 'ERROR';
	}

	for(let timesRepeated = 0; timesRepeated < timesToRepeat; timesRepeated++){
		combinedString = combinedString + stringToRepeat
	}
	return combinedString;
};

// Do not edit below this line
module.exports = repeatString;
