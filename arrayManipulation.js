// Task 1
let fruits = ['apple', 'banana', 'orange'];

// Adding an element
fruits.push('grape');
console.log(fruits); // Output: ['apple', 'banana', 'orange', 'grape']

// Removing the last element
let removedFruit = fruits.pop();
console.log(fruits);        
console.log(removedFruit);  


// Task 2
let numbers = [3, 1, 5, 2, 4];

// Sorting the array in ascending order
numbers.sort((a, b) => a - b);

console.log(numbers); 


// Task 3
// let numbers = [3, 1, 5, 2, 4]; // This is the same as previous task so i quoted it out so no error would occur.

// Using map to double each number
let doubled = numbers.map(num => num * 2);
console.log(doubled); 

// Using filter to get even numbers
let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); 

// Using reduce to calculate the sum
let sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); 