let count = 0;
let total = 0;
		let number = prompt("Enter a word: ");
		
		while(number != -1){
		count++;
		total += number;
		let average = total/count;
		console.log(average);
		number = prompt("Enter a word: ");
		}
	}
}
