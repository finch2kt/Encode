// import the code to be tested
var RemoverSpcPunct = require("../index");
var setToLowerCase = require("../index");
var divideMessage = require("../index");
var toEncode = require("../index");

describe("A program to implement a crypto square algorithm", () => {

  it("Can remove all spaces and punctuation from a block of text", () => {
    expect(RemoverSpcPunct("A sentence without spaces."))
      .toBe("Asentencewithoutspaces.");

    expect(RemoverSpcPunct("Another sentence without spaces."))
      .toBe("Anothersentencewithoutspaces.");

  });

  it("Knows what to do with invalid input", ()=> {

  	expect(RemoverSpcPunct(598))
      .toThrowError("Error: Input must be a string without any numeric characters");

    expect(RemoverSpcPunct("Hey everybody 5 people"))
      .toThrowError("Error: Input must be a string without any numeric characters");

  });

  it("Can set all the characters in the text to be lowercase", () => {

  	expect(setToLowerCase(" HeY everyBODY"))
  	  .toBe(" hey everybody");

  	expect(setToLowerCase("HeY everyBODY"))
  	  .toBe("hey everybody");

  });

  it("Can divide a message based on the specificitions given", () => {

  	var test = divideMessage("wemustletgoofthelifewehaveplannedsoastoaccepttheonethatiswaitingforus"))

  	expect(divideMessage("wemustletgoofthelifewehaveplannedsoastoaccepttheonethatiswaitingforus"))
  	  .toBe("" + test.toString());

  });

  it("Can encode message by making new words and with an array of characters", () => {

  	expect(toEncode(divideMessage("wemustletgoofthelifewehaveplannedsoastoaccepttheonethatiswaitingforus")))
  	  .toBe(" wgflsttg eoeathif mownoeso ufenaowr sthecnau thadceis levsett eleophi tipatan")

  });
});