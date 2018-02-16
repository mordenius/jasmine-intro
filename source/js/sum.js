const sum = (a, b) => {
	const condition = (typeof a === "number" && typeof b === "number");
	if(!condition) throw new Error("Only numbers");
	return a + b;
}

module.exports = sum;
