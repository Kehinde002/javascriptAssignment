const prompt = require("prompt-sync")();
		let userInput = prompt("Enter a word: ");
		let reversed = "";
		
		for(let character = 0; character < word.length(); character ++){
			reversed = word.charAt(character) + reversed;
		}
			if(reversed=== word){
				console.log("its a palindrome");
			}
			else{
				console.log(" its not a palindrome");
			}
		}
	}

