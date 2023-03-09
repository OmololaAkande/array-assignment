// what are the difference between mutating array methods and non-mutating array methods in javascript.List 5 array methods that fall under each of them.
<p>Mutating methods are ones that change the object after the method has been used. Non-mutating methods do not change the object after the method has been used. The count and index methods are both non-mutating. Count returns the number of occurrences of the argument given but does not change the original string or list.</p>

list of non mutating array: <p>slice() concat() map() filter()</p>

<p>list of mutataing array methods: pop() push() shift() unshift() reverse() sort() splice()</p>


// Here is an array of languages:['C#','Javascript','Ruby','PHP','Phython']. Perform this operation on them.

// Add 'Kotin' to the end of the Array
const languages=['C#','Javascript','Ruby','PHP','Phython'];
languages.push('Kotin');
console.log(languages);
// Add 'Java' after 'Ruby'
const lang=['C#','Javascript','Ruby','PHP','Phython'];
lang.splice(3,0,'Java');
console.log(lang);
// Remove the first item in the Array
const firstItem = ['C#','Javascript','Ruby','PHP','Phython']
firstItem.shift();
console.log(firstItem);
// Add 'Scala' and 'Swift' to the beginning of the Array
const beginning = ['C#','Javascript','Ruby','PHP','Phython']
beginning.unshift('Scala','Swift');
console.log(beginning);
// Replace 'PHP' with 'GO' and 'Rust'
const replace = ['C#','Javascript','Ruby','PHP','Phython']
replace.splice(3,3,'GO','Rust');
console.log(replace);

// what will be the value of fruit after calling the fuction changeFruit?
let fruit = ['apple', 'mango','banana'];
function changeFruit(fruit){fruit[2]="orange";
return fruit;}
console.log(changeFruit(fruit));

// Write a function that accepts an array of numbers as an argument. Return the maximum value in the array. e.g, max[4,5,10,-2] // maximum value is 10.
let maxNum= [2,4,8,10,12];
let numbers= Math.max(...maxNum);
console.log(numbers);


// Write a function called valTimesIndex which accepts an array of numbers and returns a new array of numbers with each value multiplied by the index it is at in the array: e.g., valTimesIndex[1,2,3]//[0,2,6]
// valTimesIndex([5,10,15]) // [0,10,30]

let valueTimesIndex  = [2,4,6];
let allValue=valueTimesIndex.map(function(x,i){
  return x*i;
});
console.log(allValue);

