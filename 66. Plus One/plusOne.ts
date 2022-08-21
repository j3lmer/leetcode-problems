#!/usr/bin/env ts-node

let integerArrays = [[1,2,3],[4,3,2,1],[9]];
let answers = [[1,2,4], [4,3,2,2], [1,0]];

function init(): string {
	for (let i = 0; i < integerArrays.length; i++) {
		let ans = plusOne(integerArrays[i]);
		if (!arraysEqual(ans, answers[i])) { return "Incorrect." }
	}
	return "Correct";
}


function arraysEqual(a: number[], b: number[]) {
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (a.length !== b.length) return false;
  
  for (var i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}



function plusOne(digits: number[]): number[] {
	let numString = "";
	
	for (let i = 0; i < digits.length; i++) {
		numString += digits[i];
	} 

	let num: number = +numString;
	num++;

	let numArr = [];
	let counter = 0;

	numString = num.toString();
	
	for (let i = 0; i < numString.length; i++) {
		let thisNum: number = +numString[i]; 
		numArr.push(thisNum);
	}
	
	return numArr;	
}

console.log(init());