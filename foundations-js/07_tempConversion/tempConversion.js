const ftoc = function(farenheit) {
  // c = (f - 32) * (5/9)
  const celcius = (farenheit - 32) * (5/9)
  // round 
  return Math.round(celcius * 10) / 10
};

const ctof = function(celcius) {
  // f = (c * 9/5)
  const farenheit = (celcius * (9/5) + 32)
  //round
  return Math.round(farenheit * 10) / 10
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
