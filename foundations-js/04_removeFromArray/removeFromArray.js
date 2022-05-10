const removeFromArray = function(unfilteredArray, ...elementToFilter) {
// ensure an array and an element is passed into the function
if(Array.isArray(unfilteredArray)){
	// create an array that does not include the element 
	return unfilteredArray.filter((element) => !elementToFilter.includes( element ))
}else{
	return 'NOT AN ARRAY'
}

};

// Do not edit below this line
module.exports = removeFromArray;
