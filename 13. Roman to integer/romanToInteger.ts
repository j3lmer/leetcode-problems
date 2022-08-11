#!/usr/bin/env ts-node

let tests = ["III", "LVIII", "MCMXCIV"];
let answers = [3, 58, 1994];


function init(): string
{
	for(let i = 0; i < tests.length; i++){
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
		
		switch(s[i]){
			case "I":
				if(s[i +1] === "V"){
					curNum = 4;
					skipNext = true;
				} 
				else if(s[i +1] === "X"){
					curNum = 9;
					skipNext = true;
				} 
				break;

			case "X":
				if(s[i +1] === "L"){ 
					curNum = 40;
					skipNext = true;
				}
				if(s[i +1] === "C"){
					curNum = 90;	
					skipNext = true;
				} 
				break;

			case "C":
				if(s[i +1] === "D"){
					curNum = 400;	
					skipNext = true;
				} 
				if(s[i +1] === "M"){
					curNum = 900;	
					skipNext = true;
				} 
				break;
		}
		
		num += curNum;
	}
	return num;
}

console.log(init());