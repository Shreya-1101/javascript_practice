let fruits = ["Apple", "Banana", "Mango"];

console.log("Original Array:", fruits);

console.log("First Element:", fruits[0]);
console.log("Second Element:", fruits[1]);

fruits[1] = "Orange";
console.log("Updated Array:", fruits);

console.log("Length:", fruits.length);

fruits.push("Grapes");
console.log("After Push:", fruits);

fruits.pop();
console.log("After Pop:", fruits);

fruits.unshift("Pineapple");
console.log("After Unshift:", fruits);

fruits.shift();
console.log("After Shift:", fruits);

console.log("Index of Mango:", fruits.indexOf("Mango"));

console.log("Includes Apple:", fruits.includes("Apple"));

console.log("Join:", fruits.join(", "));

console.log("Slice:", fruits.slice(0, 2));

fruits.splice(1, 1);
console.log("After Splice:", fruits);

fruits.splice(1, 0, "Banana");
console.log("After Adding:", fruits);

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

for (let fruit of fruits) {
    console.log(fruit);
}

fruits.forEach(function(fruit) {
    console.log(fruit);
});

let numbers = [1, 2, 3, 4, 5];

let doubled = numbers.map(num => num * 2);
console.log("Doubled Array:", doubled);

let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log("Even Numbers:", evenNumbers);

let result = numbers.find(num => num > 3);
console.log("Result:", result);

let nums = [40, 10, 30, 20];

nums.sort((a, b) => a - b);
console.log("Ascending Order:", nums);

nums.sort((a, b) => b - a);
console.log("Descending Order:", nums);

nums.reverse();
console.log("Reversed Array:", nums);

let a = [10, 20];
let b = [30, 40];

let combined = a.concat(b);
console.log("Combined Array:", combined);

let sum = numbers.reduce((total, num) => total + num, 0);
console.log("Sum:", sum);

console.log("Is Array:", Array.isArray(fruits));