const sumAll = function(...args) {
	// check if input has negative, if yes return error else continue

	let hasNonNumber = args.some(item => item < 0 || typeof(item) != 'number' );

	if(hasNonNumber){
		return 'ERROR'
	}

	// puts input in a sorted order
	args.sort((a, b) => a - b);

	// // calculate range
	let range = [];

	for(let counter = args[0]; counter <= args[1]; counter++){
		range.push(counter);
	};

	// create sum variable
	let startSum = 0;

	// reduce range to single value
	const sumReducer = (accumulator, nextItem) => accumulator + nextItem;

	total = range.reduce(sumReducer, startSum);
	// return value

	return total;

};

// Do not edit below this line
module.exports = sumAll;
