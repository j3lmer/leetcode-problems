let nums = [[2,2,1],[4,1,2,1,2],[1]];
let answers = [1,4,1];

function init() {


	for (let i = 0; i < nums.length; i++) {
		let ans = singleNumber(nums[i]);
		
		if (ans != answers[i]) {

			console.log(`mijn antwoord: ${ans}`);
			console.log(`het antwoord: ${answers[i]}`);
			console.log(`iteratie: ${i}`)
		
			return "Incorrect.";
		}
	}

	return "Correct";
}


function singleNumber(nums) {

  	const dict = {};

  	for (const num of nums) {
  		dict[num] = dict[num] +1 || 1;
  	}

  	for (const key in dict) {
  		if(dict[key] === 1) {
  			return key;
  		}
  	}

  	

  	return -1;
}

console.log(init());