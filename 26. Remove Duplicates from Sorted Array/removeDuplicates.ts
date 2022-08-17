#!/usr/bin/env ts-node


let testNums = [[1,1,2],[0,0,1,1,1,2,2,3,3,4]];
let correctNums = [[1,2],[0,1,2,3,4]];

function init(): string
{
	for (let i = 0; i < testNums.length; i++) {
		let k = removeDuplicates(testNums[i]);
		
		if (k !== correctNums[i].length) {
			return "k is incorrect.";
		}

		for (let j = 0; j < k; j++) {
			if(testNums[i][j] !== correctNums[i][j]) {
				return "Incorrect number encountered.";
			}
		}
	}

	return "Correct!";
}


function removeDuplicates(nums: number[]): number {
	let count = 0;
	
	for (let i = 0; i < nums.length; i++) {
		if (i < nums.length -1 && nums[i] === nums[i + 1]) { 
			continue; 
		}
		
		nums[count] = nums[i];
		count++;
	}
	
	return count;
}

console.log(init());