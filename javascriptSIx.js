const prompt = require("prompt-sync")();
		word = prompt("Enter a word: ");
		let reversed = "";
		
		for(let character = 0; character < word.length(); character ++){
			reversed = word.charAt(character) + reversed;
		}
		console.log(reversed);
	}
}
