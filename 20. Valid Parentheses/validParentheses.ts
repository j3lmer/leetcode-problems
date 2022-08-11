#!/usr/bin/env ts-node

let tests = ["()", "()[]{}", "(]", "({}[])[{}]()"];
let answers = [true, true, false, true];

function init(): string
{
	for (let i = 0; i < tests.length; i++) {
		let ans = isValid(tests[i]);
		if (ans !== answers[i]) {
			return "Incorrect";
		}	
	}

	return "Correct!";
}


function isValid(s: string): boolean
{
	let types = ["(", "[", "{"];
	let cur = [];

	for (let i = 0; i < s.length; i++) {
	
		if(types.indexOf(s[i]) !== -1) {
			cur.push(s[i]);
			continue;
		};
		
		switch(s[i]) {
			case ")":
				if (cur[cur.length -1] !== "(") {
					return false;
				}
				break;

			case "]":
				if (cur[cur.length -1] !== "[") {
					return false;
				}
				break;

			case "}":
				if (cur[cur.length -1] !== "{") {
					return false;
				}
				break;
		}
		cur.pop();
	}
	return true;
}

console.log(init());