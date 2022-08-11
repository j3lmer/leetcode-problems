#!/usr/bin/env ts-node

let tests = ["III", "LVIII", "MCMXCIV"];
let answers = [3, 58, 1994];


function init(): string
{
	for (let i = 0; i < tests.length; i++) {
		let ans = romanToInt(tests[i]);
		if (ans !== answers[i]) {
			return "Incorrect";
		}
	}
	return "Correct!";
}


function romanToInt(s: string): number
{
	let num = 0;
	let skipNext = false;
	let dict = {
		"I" : 1,
		"V" : 5,
		"X" : 10,
		"L" : 50,
		"C" : 100,
		"D" : 500,
		"M" : 1000,
	}
	
	for (let i = 0; i < s.length; i++) {
		let curNum = 0;

		if (skipNext) {
			skipNext = false;
			continue;
		}
		
		Object.entries(dict).find(([key, value]) => {
			if(key === s[i]){
				curNum = value;
			}
		})	
		
		switch (s[i]) {
			case "I":
				if (s[i +1] === "V") {
					num += 4;
					skipNext = true;
					continue;
				} 
				else if (s[i +1] === "X") {
					num += 9;
					skipNext = true;
					continue;
				} 
				break;

			case "X":
				if (s[i +1] === "L") { 
					num += 40;
					skipNext = true;
					continue;
				}
				else if (s[i +1] === "C") {
					num += 90;	
					skipNext = true;
					continue;
				} 
				break;

			case "C":
				if (s[i +1] === "D") {
					num += 400;	
					skipNext = true;
					continue;
				} 
				else if (s[i +1] === "M") {
					num += 900;	
					skipNext = true;
					continue;
				} 
				break;
		}
		num += curNum;
	}
	return num;
}

console.log(init());