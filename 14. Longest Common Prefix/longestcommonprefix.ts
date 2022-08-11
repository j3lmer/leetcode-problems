#!/usr/bin/env ts-node

let tests = [["flower","flow","flight"],["dog","racecar","car"]];
let answers = ["fl", ""];

function init(): string
{
	for (let i = 0; i < tests.length; i++) {
		let ans = longestCommonPrefix(tests[i]);
		if (ans !== answers[i]){
			return "Incorrect";
		}
	}
	return "Correct!";
}

function longestCommonPrefix(strs: string[]): string{
	let commonPrefix = "";

	for (let i = 0; i < strs[0].length; i++) {
		for (let j = 1; j < strs.length; j++) {
			if (strs[j][i] !== strs[0][i]) {
				return commonPrefix;
			}
		}
		commonPrefix = commonPrefix.concat(strs[0][i]);
	}
	return commonPrefix;
}

console.log(init());