function volumeOfRectangularPrism(length, width, height) {
	if (length === null || width === null || height === null) {
		throw SyntaxError("Error: Inputs all need to be provided.");
	}
	if (typeof(length) != 'number' || typeof(width) != 'number' || typeof(height) != 'number') {  
		throw TypeError("Error: Inputs all need to be numbers.");
	}
	if (length <= 0 || width <= 0 || height <= 0) {
		throw SyntaxError("Error: Inputs must all be positive, nonzero numbers.");
	}
	else {
		return length*width*height;
	}
}

function surfaceAreaOfRectangularPrism(length, width, height) {
	if (length === null || width === null || height === null) {
		throw SyntaxError("Error: Inputs all need to be provided.");
	}
	if (typeof(length) != 'number' || typeof(width) != 'number' || typeof(height) != 'number') {  
		throw TypeError("Error: Inputs all need to be numbers.");
	}
	if (length <= 0 || width <= 0 || height <= 0) {
		throw SyntaxError("Error: Inputs must all be positive, nonzero numbers.");
	}
	else {
		return 2*(width*height + length*width + length*height);
	}
}

function volumeOfSphere(radius) {
	if (radius === null) {
		throw SyntaxError("Error: Input must be provided.");
	}
	if (typeof(radius) != 'number') {
		throw TypeError("Error: Input must be a number.");
	}
	if (radius <= 0) {
		throw SyntaxError("Error: Input must all be a positive, nonzero number.");
	}
	else {
		return (4/3)*Math.PI*(Math.pow(radius, 3));
	}
}

function surfaceAreaOfSphere(radius) {
	if (radius === null) {
		throw SyntaxError("Error: Input must be provided.");
	}
	if (typeof(radius) != 'number') {
		throw TypeError("Error: Input must be a number.");
	}
	if (radius <= 0) {
		throw SyntaxError("Error: Input must all be a positive, nonzero number.");
	}

	else {
		return 4*Math.PI*(Math.pow(radius, 2));
	}
}

module.exports = {
	volumeOfRectangularPrism: volumeOfRectangularPrism,
	surfaceAreaOfRectangularPrism: surfaceAreaOfRectangularPrism,
	volumeOfSphere: volumeOfSphere,
	surfaceAreaOfSphere: surfaceAreaOfSphere
};
