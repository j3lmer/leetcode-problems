#!/usr/bin/env ts-node

let nums = [1,3,5,6];
let targets = [5,0,7];
let corAnswers = [2,0,4];



function init(): string {
	for (let i = 0; i < targets.length; i++) {
		let ans = searchInsert(nums, targets[i]);

		if(ans !== corAnswers[i]) { return "Incorrect."}
	}

	return "Correct."
}


function searchInsert(nums: number[], target: number): number {
	 
    for (let i = 0; i < nums.length; i++) {
        if(nums[i] === target) {
            return i;
        }
        
        if(nums[i] < target && nums[i +1] > target) {
            return i+1;
        }
        
        if(nums[i +1] === undefined && target > nums[i]) {
            return i+1;
        }
    }
    
    if(target < nums[0]) {
        return 0;
    }

    return -1;
}

console.log(init());