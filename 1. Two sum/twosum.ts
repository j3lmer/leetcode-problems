#!/usr/bin/env ts-node


let numArr = [[2,7,11,15],[3,2,4],[3,3]];
let targets = [9, 6, 6];
let correctIndeces = [[0,1], [1,2], [0,1]];

function init(): string
{
	for (let i = 0; i < numArr.length; i++) {
		let indeces = twoSum(numArr[i], targets[i]);

		for(let j = 0; j < indeces.length; j++){
			if(indeces[j] !== correctIndeces[i][j]){
				return "Incorrect"
			}
		}
	}
	return "Correct!";
}



function twoSum(nums: number[], target: number): number[] {

	for (let i = 0; i< nums.length; i++) {
		let thisNum = nums[i];
		for (let j = i + 1; j < nums.length; j++) {
			let otherNum = nums[j];
			if (thisNum + otherNum === target) {
				return [i, j];
			}
		}	
	}
	return [-1];
}


console.log(init());