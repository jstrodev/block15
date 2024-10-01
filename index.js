/*
Requirements:
A visitor receives a prompt upon opening the website to enter a list of comma-separated froyo flavors. They type vanilla,vanilla,vanilla,strawberry,coffee,coffee. When they view the browser console, they observe a table listing how many of each flavor they have ordered. In this case, they will be able to observe that they have ordered three vanilla, two coffee, and one strawberry froyo.

Pseudo code:
1. Create a prompt that asks users to input a list of flavors they want to order in a specific format
3. User enters a list of flavors: vanilla, vanilla, vanilla, strawberry, coffee, coffee
4. The input from the user is stored as an array called flavors 
5. Create a new object that stores key value pairs of the flavors in the array
6. Check if each element is stored in the object flavorCounts
 - If the the element is not in the object flavorCounts, then add it to the object and assign the value of 1
 - Else, add one to the existing value 
5. The flavors are stored in the object as key:value pairs (e.g. flavor:vanilla) 
6. A table of flavors they ordered displays on the console
*/

// Create prompt for user to input flavors they want to order
let customerInput = prompt("Please enter the flavors of ice cream using the following format: vanilla, chocolate, vanilla, etc.");

// Using the split function to split the strings (flavors) by commas and storing as an array
let flavors = customerInput.split(", ");

console.log(flavors); // Check to see if user input is stored as an array

// Next, I will need to count the number of flavors in the array creating a new object called flavor counts
const flavorCounts = {};

// For loop iterating on each element
for(let i = 0; i < flavors.length; i++) {
  // Access current flavor in array
  const iceCreamFlavor = flavors[i];
  // Checking to see if the ith flavor will be encountered in the flavorCounts object
  if(flavorCounts[iceCreamFlavor] === undefined) {
    // If the flavor is not encountered, then the flavor is added as a key and value is set to 1
    flavorCounts[iceCreamFlavor] = 1;
    // If the flavor is encountered, then add an increment of 1
  } else {
    flavorCounts[iceCreamFlavor] += 1;
  }
}

console.log(flavorCounts);