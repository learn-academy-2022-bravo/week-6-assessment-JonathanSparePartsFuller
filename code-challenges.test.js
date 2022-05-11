// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// a) Create a test with an expect statement using the variable provided.

describe("capNames", () => {
  const people = [
    { name: "ford prefect", occupation: "a hitchhiker" },
    { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
    { name: "arthur dent", occupation: "a radio employee" }
  ]
  it("takes in an array of objects and returns an array with a sentence about each person with their name capitalized.", () => {
    expect(capName(people)).toEqual(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."])
  })
})

// RED Fail:  ● capNames › takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

    // ReferenceError: capName is not defined

// Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]


// b) Create the function that makes the test pass.
// Make a function called capName with name as the param
// Make a variable called upperCased and have it equal to people.name.charAt(0).toUpperCase() (Doesn't Work)
// Return upperCased.map(value => value.occupation) (Doesn't Work)
// Return the array with .map which has a param of value
// Make a variable to take value and splits it with an empty string and maps it back together
// Return the new variable with charAt, .toUpperCase(), and a substring
// Return again with string interpelation.join and a occupation string interpelation

const capName = (array) => {
  return array.map (value => {
    let capLetter = value.name.split(" ").map (letter =>{
      return letter.charAt(0).toUpperCase()+letter.substring(1)})
    return `${capLetter.join(" ")} is ${value.occupation}.`})
}

// PASS:  ✓ takes in an array of numbers and returns the sum of all the numbers cubed.
// This one melted my brain trying to attempt

// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.

describe("remainderOf3", () => {
  const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
  const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
  it("takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.", () => {
    expect(remainderOf3(hodgepodge1)).toEqual([ 2, 0, -1, 0 ])
    expect(remainderOf3(hodgepodge2)).toEqual([ 2, 1, -1 ])
  })
})

// RED Fail:  ● remainderOf3 › takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

    // ReferenceError: remainderOf3 is not defined

// Expected output: [ 2, 0, -1, 0 ]
// Expected output: [ 2, 1, -1 ]


// b) Create the function that makes the test pass.
// Make a function called remainderOf3 with array as the param
// Make a variable called remainder 
// Use .filter to sort for only numbers
// for loops aren't necssary. Either did a bad attempt at it, or just isn't necessary for this problem.
// Return remainder with .map and modulo of 3 === 0 (or this. Both don't get exactly what I'm looking for 3 !== 0 ) (Almost got it to work)
// Had to change value to %= 3 instead

const remainderOf3 = (array) => {
  let remainder = array.filter( value => typeof value === 'number')
return remainder.map(value => value  %= 3)
}

// PASS:     ✓ takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3. (1 ms)


// for(let i=0; i<array.length; i++){
//   if(array[i] % 3 === 0){
//     remainder.push(array[i])


// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.

describe("cubedNums", () => {
  const cubeAndSum1 = [2, 3, 4]
  const cubeAndSum2 = [0, 5, 10]
  it("takes in an array of numbers and returns the sum of all the numbers cubed.", () => {
    expect(cubedNums(cubeAndSum1)).toEqual(99)
    expect(cubedNums(cubeAndSum2)).toEqual(1125)
  })
})

// RED Fail: ● cubedNums › ttakes in an array of numbers and returns the sum of all the numbers cubed.

    // ReferenceError: cubedNums is not defined

// Expected output: 99
// Expected output: 1125


// b) Create the function that makes the test pass.
// Make a function called cubedNums with array as param
// This function is going to use the exponent method (**) and the +
// Make a variable called totalNum 
// Maybe .split to separate the array and use exponent then.(Didn't work)
// Make another variable called cubeReturn
// Use the .reduce method and give it the params of value + num
// Return value + num
// Return the totalNum

const cubedNums = (array) => {
  let totalNum = array.map(value => value ** 3) 
  let cubeReturn = totalNum.reduce(function(value, num) {
    return value + num
  }) 
  return cubeReturn
}

// PASS:     ✓ takes in an array of numbers and returns the sum of all the numbers cubed.
// return totalNums
// let totalNums = array.reduce(value => value ** 3)
