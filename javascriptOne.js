for(int digitOne = 1; digitOne <= 9; digitOne++){
	for(let digitTwo = 0; digitTwo <= 9; digitTwo++){
		for(int digitThree = 0; digitThree <= 9; digitThree++){
					let digitOneSquare = digitOne * digitOne;
					let digitTwoSquare = digitTwo * digitTwo;
					let digitThreeSquare = digitThree * digitThree;
					let sumDigitSquare =digitOneSquare + digitTwoSquare + digitThreeSquare;
					let hundred = 100 * digitOne;
					let tenth = 10 * digitTwo;
					let unit = digitThree;
					let number = hundred + tenth + unit;
					if (sumDigitSquare == number){
						console.log(number);
					}
				}
			}
		}
	}
}
