const sum = require(__dirname+"./../source/js/sum");

describe("Тест функции возрата суммы двух аргументов", () => {

	it("Оба аргумента цифры", () => {
		const result = sum(1, 2);
		expect(result).toBe(3);
	});

	// it("Один из аргументов строка", () => {
	// 	const result = sum(1, "str");
	// 	expect(result).toBeUndefined();
	// });
	//
	// it("Один из аргументов Boolean", () => {
	// 	const result = sum(1, false);
	// 	expect(result).toBeUndefined();
	// });
	//
	// it("Оба аргумента Boolean", () => {
	// 	const result = sum(true, true);
	// 	expect(result).toBeUndefined();
	// });

	it("Один из аргументов массив", () => {
		expect(() => sum(2, ["1", "3"])).toThrowError();
	});

	// + если 1 аргументв строка, то и другой преобразуется в строку
	// + во всех других случаях произойдет преобразование к числу

});