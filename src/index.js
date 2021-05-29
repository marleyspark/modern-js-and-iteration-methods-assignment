// Task 1: Improve the following object assignment code using the enhanced object literal approach.

// Do not rename the variables here
const title = "Once I Caught A Fish Alive";
const noOfChildren = 2;
const noOfFish = 1;
const typeOfFish = "gold fish";

// Refactor code here - retain the properties' name of this object.
const music = {
  title: title,
  noOfChildren: noOfChildren,
  noOfFish: noOfFish,
  fishType: typeOfFish,
};

// Task 2: Call the following function by passing an array as argument.

// If called with 1,2,3 = returns 6
const calculateTotal = (...numbers) => {
  return numbers.reduce(
    (accumulator, currentValue) => accumulator + currentValue
  );
};

// Add code here

// Task 3: Selectively destructure and obtain variable "status".

const person = {
  name: "Johnny",
  age: 40,
  height: 170,
  weight: 65,
  status: "Good",
};

const status = null; // Edit code here

console.log(`Your health status is: ${status}`);
