// document.addEventListener('DOMContentLoaded', () => {});

const nealTitles = [
	'A Design Nerd.',
	'A Professional Web Designer.',
	'A Visual Storyteller.',
];

let currTitle = '';
let result = '';

for (const title of nealTitles) {
	for (const letter of title) {
		currTitle += letter;
		console.log(currTitle);

		if (letter === '.') {
			currTitle += ' ';

			for (const reverseLetter of currTitle
				.split('')
				.reverse()
				.join('')) {
				result += reverseLetter;
			}
		}
	}
}

console.log(result);
