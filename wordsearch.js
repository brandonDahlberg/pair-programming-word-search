//PAIR PROGRAMMING ASSIGNMENT
// AUTHORS: @brandonDahlberg, @ThomasNgo

const word1 = 'HELLO';

const twoDArr = [
	['H', 'H', 'X', 'W', 'U'],
	['E', 'Q', 'C', 'Z', 'J'],
	['L', 'Z', 'B', 'L', 'O'],
	['L', 'W', 'A', 'L', 'K'],
	['O', 'W', 'A', 'L', 'K'],
];

const wordSearch = (letters, word) => {
	let output = [];
	const rowsLetters = letters.length;
	const colsLetters = letters[0].length;
	const horizontalJoin = letters.map(ls => ls.join(''));
	// look for word horizonatally

	for (let l of horizontalJoin) {
		if (l.includes(word)) return true;
	}
	// transpose the matrix
	// look horizontally again

	for (let i = 0; i < colsLetters; i++) {
		output[i] = [];
		for (let j = 0; j < rowsLetters; j++) {
			output[i][j] = letters[j][i];
			// console.log(letters[j][i]);
		}
	}
	console.log(output);
	const verticalJoin = output.map(ls => ls.join(''));
	for (let l of verticalJoin) {
		if (l.includes(word)) return true;
	}
	return false;
};

wordSearch(twoDArr, word1);

module.exports = wordSearch;
