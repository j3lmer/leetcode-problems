#!/usr/bin/env ts-node

let strings = ["Hello World", "   fly me   to   the moon  ", "luffy is still joyboy", "a"];
let answers = [5,4,6,1];

function init(): string {
	for (let i = 0; i < strings.length; i++) {
		let ans = lengthOfLastWord(strings[i]);
		if (ans !== answers[i]) { return "Incorrect." }
	}
	return "Correct.";
}


function lengthOfLastWord(s: string): number {
    s = s.trim();
    
    let wordLength = 0;
    for (let i = s.length; i > 0; i--) {
        if(s[i] === " ") {
            return wordLength -1;
        }
        wordLength++;
    }
    return wordLength;
}

console.log(init());