// Task 1
let fruits = ['apple', 'banana', 'orange'];

// Adding an element
fruits.push('grape');
console.log(fruits); // Output: ['apple', 'banana', 'orange', 'grape']

// Removing the last element
let removedFruit = fruits.pop();
console.log(fruits);        // Output: ['apple', 'banana', 'orange']
console.log(removedFruit);  // Output: 'grape'


// Task 2
let numbers = [3, 1, 5, 2, 4];

// Sorting the array in ascending order
numbers.sort((a, b) => a - b);

console.log(numbers); // Output: [1, 2, 3, 4, 5]