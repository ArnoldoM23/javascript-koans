var _; // globals

describe("About Applying What We Have Learnt", function() {
  var products;

  beforeEach(function () { 
    products = [
       { name: "Sonoma", ingredients: ["artichoke", "sundried tomatoes", "mushrooms"], containsNuts: false },
       { name: "Pizza Primavera", ingredients: ["roma", "sundried tomatoes", "goats cheese", "rosemary"], containsNuts: false },
       { name: "South Of The Border", ingredients: ["black beans", "jalapenos", "mushrooms"], containsNuts: false },
       { name: "Blue Moon", ingredients: ["blue cheese", "garlic", "walnuts"], containsNuts: true },
       { name: "Taste Of Athens", ingredients: ["spinach", "kalamata olives", "sesame seeds"], containsNuts: true }
    ];
  });

  /*********************************************************************************/

  it("given I'm allergic to nuts and hate mushrooms, it should find a pizza I can eat (imperative)", function () {
    var i,j,hasMushrooms, productsICanEat = [];

    for (i = 0; i < products.length; i+=1) {
        if (products[i].containsNuts === false) {
            hasMushrooms = false;
            for (j = 0; j < products[i].ingredients.length; j+=1) {
               if (products[i].ingredients[j] === "mushrooms") {
                  hasMushrooms = true;
               }
            }
            if (!hasMushrooms) productsICanEat.push(products[i]);
        }
    }

    expect(productsICanEat.length).toBe(1);
  });

  it("given I'm allergic to nuts and hate mushrooms, it should find a pizza I can eat (functional)", function () {
      // This problems needs to return the item that does not contain any of the ingredients that the use is allergic to.
      // I need to use filter and all or any to solve this problem.
      // first is need to filter througt the array and return all the objects that do not contain nuts.
      // second I must check find the object that does not contain any of the ingredients that the user is allergic to.
      // I will to itterate through the ingredients array and if none of the ingredients match what the user is allergic to than i can push that object to the productsICanEat array.


      var productsICanEat = [];

    _(products).chain().filter(function(obj){ return obj.containsNuts === false;}).any(function(obj){
        var state = false;
        for (var i = 0; i < obj.ingredients.length; i++) {
          if(obj.ingredients[i] === "mushrooms"){
            state = true;
          }
        }
        if (!state) { 
          productsICanEat.push(obj);
          return true
        }else{
          return false;
        }
        
      });
      expect(productsICanEat.length).toBe(1);
  });

  /*********************************************************************************/

  it("should add all the natural numbers below 1000 that are multiples of 3 or 5 (imperative)", function () {
    var sum = 0;

    for(var i=1; i<1000; i+=1) {
      if (i % 3 === 0 || i % 5 === 0) {
        sum += i;
      }
    }
    
    expect(sum).toBe(233168);
  });

  it("should add all the natural numbers below 1000 that are multiples of 3 or 5 (functional)", function () {
   /* try chaining range() and reduce() */

   var total = _.reduce(_.range(1000), function(memo, current){
    if (current % 3 === 0 || current % 5 === 0){ 
      return memo + current;
    }else {
      return memo;
    }
   }, 0);
    expect(233168).toBe(total);
  });

  /*********************************************************************************/
   it("should count the ingredient occurrence (imperative)", function () {
    var ingredientCount = { "{ingredient name}": 0 };

    for (i = 0; i < products.length; i+=1) {
        for (j = 0; j < products[i].ingredients.length; j+=1) {
         ingredientCount[products[i].ingredients[j]] = (ingredientCount[products[i].ingredients[j]] || 0) + 1;  
        }
    }
    expect(ingredientCount['mushrooms']).toBe(2);
  });


  it("should count the ingredient occurrence (functional)", function () {
    var ingredientCount = { "{ingredient name}": 0 };
    // In this problem I need to count how many times an Item shows up in the ingredients array.
    // I will need to use map flatten and reduce to solve this problem.
    // First I need to return and array with the subarray containing the ingredients
    // Second I will need to flatten the array so all of the ingredients are accessible in one array.
    // Third I need to create proterties for each ingredients and set its value pair to the number of times it appears in the ingredients array.
    // Fourth I will need to use reduce to do this

    /* chain() together map(), flatten() and reduce() */

    var gettingTheCount = _.chain(products).map(function(products){
      return products.ingredients
    }).flatten().reduce(function(prev, curr){
      ingredientCount[prev] = (ingredientCount[prev] || 0) + 1;
      prev = curr;
      return prev;
    }).value()
    expect(ingredientCount['mushrooms']).toBe(2);
  });

  /*********************************************************************************/
  /* UNCOMMENT FOR EXTRA CREDIT */
  /*
  it("should find the largest prime factor of a composite number", function () {
  
  });

  it("should find the largest palindrome made from the product of two 3 digit numbers", function () {
    
  });

  it("should find the smallest number divisible by each of the numbers 1 to 20", function () {
      
    
  });

  it("should find the difference between the sum of the squares and the square of the sums", function () {
    
  });

  it("should find the 10001st prime", function () {

  });
  */
});
