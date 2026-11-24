const prompt = require("prompt-sync")();

	word = prompt("Enter a word: ");

	
	for(let character = 0; character <= word.length()-1; character++){
		let letter = word.charAt(character);
		if(letter == ' '){
			console.log();
		}
		else{
			console.log(letter);
		}
	}

	}
