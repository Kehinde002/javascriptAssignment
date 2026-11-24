const prompt = require("prompt-sync")();
		word = prompt("Enter a word: ");
		
		
		for(let character = 0; character < word.length(); character +=2){
			console.log(word.charAt(character));
		}
		
	}
}
