const reverseString = function(stringToReverse) {
	let reversedString = [];

	for(let char_index = 0; char_index < stringToReverse.length; char_index++){
		reversedString.unshift(stringToReverse[char_index]);
	}

	return reversedString.join('')
};

// Do not edit below this line
module.exports = reverseString;
