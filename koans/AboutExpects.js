
/* Let's spend a moment here to talk about test suites. 
Test suites contain many different tests for a project.
Since we change code so rapidly (new features being released, other technologies that we rely upon changing, etc.),
having a test suite in place to prove that our code still works is incredibly helpful. 

It's also helpful when writing new code from scratch. 
You can create a test for the expected behavior, and rapidly keep checking to see if the code you have written
fulfills that behavior or not. 

Throughout the first 6 weeks of the course, we are going to have test suites in place for you 
to help you measure your progress through the sprint, and find ways to fix your code to make it work.

Getting used to test suites with these koans is going to be very valuable for you. 

Throughout this file, we will explain how all these different sections fit together. 
*/ 

// "describe" blocks encapsulate a group of related tests. 
// For example, in this javascript-koans repo, we have describe blocks for Arrays, Objects, and Expect.
// They each contain several tests all related to that same subject. 
// The text passed in as the first argument to the "describe" block
// is the header text that will show up to describe this whole big section.

describe("About Expects", function() {

  // Within a describe block, we define several tests. 
  // "it" statements represent a test for a discrete piece of functionality.
  // Much like our "describe" block, the text passed in as the first argument 
  // is simply displayed on the screen for the user. 
  // The text has no functionality itself.

  // We shall contemplate truth by testing reality, via spec expectations.  
  it("should expect true", function() {
  	
    // Within each "it" statement, we have at least one "expect" statement.
    // The "expect" statement is the actual comparison, 
    // comparing the observed value to some expected value.
    
    // And this is as far down as the structure goes! 
    // there is nothing more granular than an "expect" statement within a test suite.
    expect(false).toBeTruthy(); // This should be true
  });

  // To understand reality, we must compare our expectations against reality.
  it("should expect equality", function() { 
	  var expectedValue = FILL_ME_IN;
	  var actualValue = 1 + 1;
	
	  // Each expect statement has only two essential pieces:
	  // 1. The value inside the parens right after expect: (actualValue === expectedValue) in this case
	  // The value in the first set of parens is generally the observed value from your program
	  // 2. The final phrase: .toBeTruthy() in this case
	  // The final phrase lays out what we are expecting this value to be
	  expect(actualValue === expectedValue).toBeTruthy();
  });  

  // Some ways of asserting equality are better than others.
  it("should assert equality a better way", function() { 
	  var expectedValue = FILL_ME_IN;
	  var actualValue = 1 + 1;
	
  // toEqual() compares using common sense equality.
	  expect(actualValue).toEqual(expectedValue);
  });

  // Sometimes you need to be precise about what you "type".
  it("should assert equality with ===", function() { 
	  var expectedValue = FILL_ME_IN;
	  var actualValue = (1 + 1).toString();
	
	// Note that test suites are designed to be as semantic as possible
	// They will use a lot of chained operators (such as "to.be.greater.than")
	// These operators are designed to do exactly what they describe.
  // toBe() will always use === to compare.
	  expect(actualValue).toBe(expectedValue);
  });  

  // Sometimes we will ask you to fill in the values.
  it("should have filled in values", function() {
	  expect(1 + 1).toEqual(FILL_ME_IN);
  });
});
