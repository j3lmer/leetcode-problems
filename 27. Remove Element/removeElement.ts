#!/usr/bin/env ts-node

let nums = [[3,2,2,3],[0,1,2,2,3,0,4,2]];
let vals = [3,2];
let expectedNums = [[2,2], [0,1,3,0,4]];


function init(): string
{
	for (let i = 0; i < nums.length; i++) {
		let k = removeElement(nums[i], vals[i], i === 1 ? true : false);

		if (k !== expectedNums[i].length) {
			return "Incorrect length.";	
		}

		//there was no quick way to only sort until a specific index i could find, so i took a slightly different approach.
		for (let j = 0; j < expectedNums.length; j++) { 
			if (nums[i][j] !== expectedNums[i][j]) {
				return "Not the same numbers";
			}
		}
	}

	return "Correct!";
}


function removeElement(nums: number[], val: number, test: boolean): number {

	for (let i = 0; i < nums.length; i++) {
		if(nums[i] === val) {
			nums.splice(i, 1);
			i--;
		}
	}
	return nums.length;
}


console.log(init());