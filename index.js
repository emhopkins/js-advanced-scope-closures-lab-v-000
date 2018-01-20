function produceDrivingRange(range) {
  return function(start, end){
  	const distance = end.slice(0, -2) - start.slice(0,-2);
  	const diff = Math.abs(range - distance);
    if (range > distance)
		{ return `within range by ${diff}` }
	else
		{ return `${diff} blocks out of range` };
  };
};
function produceTipCalculator(tip) {
	return function(amount) {
		return amount * tip;
	};

};
function createDriver() {
	let DriverId = 0

	return class {
		constructor(name) {
			this.name = name
			this.id = ++DriverId;
		}
	}

};