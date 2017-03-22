function RemoveSpcPunct(text) {
	if (isinstance(str, text) && text.search([0-9]) != -1){

		var encode;
		for (var i = 0; i < text.length; i++) {
			
			if (text.chartAt(i) == " " || text.chartAt(i) == "," 
				|| text.chartAt(i) == "?" || text.chartAt(i) == "!"
				|| text.chartAt(i) == "."){

				encode += textcharAt(i);

			}
			
		}
		return encode;
	}
	else{

		throw new Error("Error: Input must be a string without any numeric characters");
	}
}

function setToLowerCase(text) {

	return text.toLowerCase();
}

function divideMessage(test) {

	var encode = text.toString();
	var numChars = encode.length();
	var sqrtChars = (int) Math.sqrt(numChars);

	//Check if the number of characters in text is a perfect square
	if (sqrtChars * sqrtChars == Math.sqrt(numChars)) {

		index = 0;
		var rows = new Array(sprtChars);
		for (var i = 0; i < sqrtChars; i++) {
			rows[i] = new Array(sqrtChars);
		}

		for (row = 0; row < sprtChars; row++){
			
			for (col = 0; col < sprtChars; col++){

				rows[row][col] = text.charAt(index);
				index++;

			}

		}
		return divided;
    }
    //For when # of characters in text is not a perfect square
    else{
		var square = Math.pow(text.length, 2);
		var textLength = (text.length);
		var numCols = (int) Math.sqrt(textLength);
		var leastPerfectSquare = numCols * numCols;
		var offet = numCols - 1;

		// Chooses square greater than the squareroot of the length of text
		while (leastPerfectSquare <= square){
			numCols++;
			leastPerfectSquare = numCols * numCols;
		}

		// Creates a 2-D array
		var divided = new Array(offset);
		for (var i = 0; i < offset; i++) {
			divided[i] = new Array(numCols);
		}

		// Sets characters from
		var index = 0;
		for (var row = 0; row < offset; row++){
				
			for (var col = 0; col < numCols; col++){

				divided[row][col] = text.charAt(index);
				index++;
			}
		}
		return divided;
	}
}

function toEncode() {

	encoded = "";

		//Will iterate through the same column of each row starting at index zero
		for (int cols = 0; cols < dividedMessage[cols].length; cols++){
			endoded += " ";
			for (int rows = 0; rows < dividedMessage.length; rows++){
				encoded += "" + dividedMessage[rows][cols];
			}
		}

	return encoded;
}

module.exports = RemoverSpcPunct;
module.exports = setToLowerCase;
module.exports = divideMessage;
module.exports = toEncode;