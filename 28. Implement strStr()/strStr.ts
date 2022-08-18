#!/usr/bin/env ts-node

let haystacks = ["hello", "aaaaa"];
let needles = ["ll", "bba"];
let expectedOutcomes = [2, -1];


function init(): string {
	for (let i = 0; i < haystacks.length; i++) {
		let k = strStr(haystacks[i], needles[i]);
		if (k !== expectedOutcomes[i]) { return "Incorrect." }
	}
	return "Correct!";
}


function strStr(haystack: string, needle: string): number {
	let strFound = false;

	for (let i = 0; i< haystack.length; i++) {
		if (haystack[i] === needle[0]) {
			for (let j = 1; j < needle.length; j++) {
				strFound = haystack[i + j] === needle[j] ? true : false;
			}
			if (strFound) { return i; }
		}
	}

	return -1;
}

console.log(init());