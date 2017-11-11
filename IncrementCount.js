
// declare a global variable
var count = 10;

console.log("Initial count value: "+count);

// function to increment the count
function IncrementCount() {
	
	++count;
}

// Invoke the function
IncrementCount();
console.log("Count value after 1st increment: "+count);

IncrementCount();
console.log("Count value after 2nd increment: "+count);

IncrementCount();
console.log("Count value after 3rd increment: "+count);