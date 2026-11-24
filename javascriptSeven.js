const prompt = require("prompt-sync")();


	let  vowel = "AEIOUaeiou";
	let countVowel = 0;
	let countConsonant = 0;
	let seen = "";
	
	let word = prompt("Enter a word: ");
	
	for(let character = 0; character <= word.length()-1; character++){
		let letter = word.charAt(character);
		if(seen.indexOf(letter) >= 0){
		continue;
		}
		seen += letter;
		if(vowel.indexOf(letter) >= 0){
		countVowel++;
		}
		else{
		countConsonant++;
		}
	}
	console.log("count of vowel : " + countVowel);
	console.log("count of consonant : " + countConsonant);
	}
}
