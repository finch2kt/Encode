// import the code to be tested
var removerSpcPunct = require("../index");
var setToLowerCase = require("../index");
var divideMessage = require("../index");
var toEncode = require("../index");

describe("A program to implement a crypto square algorithm", () => {

  it("Is a defined function and is callable", () => {
		expect(removerSpcPunct).toBeDefined();
		expect(typeof removerSpcPunct).toBe("function");

		expect(setToLowerCase).toBeDefined();
		expect(typeof setToLowerCase).toBe("function");

		expect(divideMessage).toBeDefined();
		expect(typeof divideMessage).toBe("function");

		expect(toEncode).toBeDefined();
		expect(typeof toEncode).toBe("function");
  });

  it("Can remove all spaces and punctuation from a block of text", () => {

  	var test = removerSpcPunct("A sentence without spaces.");
    expect(test).toBe("Asentencewithoutspaces");

  });

  it("Knows what to do with invalid input", ()=> {

  	expect(removerSpcPunct(598))
    .toThrowError("Error: Input must be a string without any numeric characters");

    expect(removerSpcPunct("Hey everybody 5 people"))
    .toThrowError("Error: Input must be a string without any numeric characters");

  });

  it("Can set all the characters in the text to be lowercase", () => {

  	var test = setToLowerCase(" HeY everyBODY");
  	expect(test).toBe(" hey everybody");

  });

  it("Can divide a message based on the specificitions given", () => {

  	var test = divideMessage("wemustletgoofthelifewehaveplannedsoastoaccepttheonethatiswaitingforus");
  	expect(test).toBe("" + test.toString());

  });

  it("Can encode message by making new words and with an array of characters", () => {

	var test = divideMessage("wemustletgoofthelifewehaveplannedsoastoaccepttheonethatiswaitingforus");
	var test2 = toEncode(test);
  	expect(test2).toBe(" wgflsttg eoeathif mownoeso ufenaowr sthecnau thadceis levsett eleophi tipatan");

  });
});