#!/usr/bin/env ts-node

let numbers = [121, -121, 10];
let correctAnswers = [true, false, false];


function init(): string {
	for (let i = 0; i < numbers.length; i++) {
		let answer = isPalindrome(numbers[i]);
		if (answer !== correctAnswers[i]) {
			return "Incorrect";
		}
	}
	return "Correct";
}


function isPalindrome(x: number): boolean {
	let chArr = Array.from(String(x), Number);

	for (let i = 0; i< chArr.length; i++) {
		if (chArr[i] !== chArr[chArr.length - i -1]) {
			return false;
		}
	}
	return true;
};


console.log(init());