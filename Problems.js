// Code Wars Problems 


// ----------------------------------------------------------------------------------
// Question
// ----------------------------------------------------------------------------------


// Complete the bool_to_word (Javascript: boolToWord ) method.

// Given: a boolean value

// Return: a 'Yes' string for true and a 'No' string for false


// Answer
// ----------------------------------------------------------------------------------
// Mine
// -----
function boolToWord(bool) {
  if (bool === true) {
    return "Yes"
  } else {
    return "No"
  }
}

// Best Practice
// --------------

function boolToWord(bool) {
  return bool ? 'Yes' : 'No';
}



// ----------------------------------------------------------------------------------
// Question
// ----------------------------------------------------------------------------------


// Write function avg which calculates average of numbers in given list.

// Answer
// ----------------------------------------------------------------------------------
// Mine
// -----
function find_average(array) {
  var mean = 0
  var num = array.length
  for (var i = 0; i < array.length; i++) {
    mean += array[i]
  }
  return mean / num
}

// Best Practice
// --------------

function find_average(array) {
  var sum = array.reduce((a, b) => a + b, 0);
  return sum/array.length;
}

// ----------------------------------------------------------------------------------
// Question
// ----------------------------------------------------------------------------------
// Number of people in the bus

// There is a bus moving in the city, and it takes and drop some people in each bus stop.

// You are provided a list (or array in JS) of integer array. Each integer array has two items which represent number of people get into bus (The first item) and number of people get off the bus (The second item).

// The first integer array has 0 number in the second item, since the bus is empty in the first bus stop.

// Your task is to return number of people who are still in the bus after the last bus station. Even though it is the last stop, some people don't get off the bus, and they are probably sleeping there :D

// Take a look on the test cases.

// Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. So the return integer can't be negative.

// Answer
// ----------------------------------------------------------------------------------
// Mine
// -----
var number = function(busStops){
 var people = 0
 for (i = 0; i < busStops.length; i++){
  people += busStops[i][0]
  people -= busStops[i][1]
}
return people
}

// Best Practice
// --------------

const number = (busStops) => busStops.reduce((rem, [on, off]) => rem + on - off, 0);

// ----------------------------------------------------------------------------------
// Question
// ----------------------------------------------------------------------------------

// Find the last element of a list.

// Answer
// ----------------------------------------------------------------------------------
// Mine
// -----
function last(list){
if(list.length > 2) {
  
var arr = list.slice(-1);
return arr[arr.length-1]
}else {
var arg = Array.prototype.slice.call(arguments);
return arg[arg.length-1]
}

}


// Best Practice
// --------------
function last(list){
  var last = arguments[arguments.length - 1];
  return last[last.length - 1] || last;
}



// ----------------------------------------------------------------------------------
// Question
// ----------------------------------------------------------------------------------

// It is easy to join two strings together like this string1 + string2.

// Another way to get the desired result would be with string1.concat(string2)

// ES6 has introduced another way of joining strings. Your task is to find out what this is and write a function that will add two strings together, there must be a space between the two strings.

// + , .concat() & .join() will not be allowed in this exercise. I have also removed some other methods that can be used to cheat!

// If one of the arguments is a number your code must coerce it into being a string.
// Answer


// ----------------------------------------------------------------------------------
// Mine
// -----
function joinStrings(string1, string2){
   return `${string1} ${string2}`
}

// Best Practice
// --------------




// ----------------------------------------------------------------------------------
// Question
// ----------------------------------------------------------------------------------
// You will be given an vector of string(s). You must sort it alphabetically (case-sensitive!!) and then return the first value.

// The returned value must be a string, and have '***' between each of its letters.

// Answer
// ----------------------------------------------------------------------------------
// Mine
// -------------------------
function twoSort(s) {
var sorted = s.sort()
let split =  sorted[0].split('').join('***')
return split
}

// Best Practice
// --------------

function twoSort(s) {
  return s.sort()[0].split('').join('***');
}

// ----------------------------------------------------------------------------------
// Question
// ----------------------------------------------------------------------------------

// Your task is to make two functions, max and min (maximum and minimum in PHP) that take a(n) array/vector of integers list as input and outputs, respectively, the largest and lowest number in that array/vector.


// Answer
// ----------------------------------------------------------------------------------
// Mine
// -----
var min = function(list){
    list.sort(function(a, b){
      return a-b;
      })
    return list[0];
}

var max = function(list){
    list.sort(function(a, b){
      return b-a;
      })
    return list[0];
}

// Best Practice
// --------------

const min = (list) => Math.min(...list);
const max = (list) => Math.max(...list);


// ----------------------------------------------------------------------------------
// Question
// ----------------------------------------------------------------------------------
// When provided with a letter, return its position in the alphabet.

// Input :: "a"

// Ouput :: "Position of alphabet: 1"



// Answer
// ----------------------------------------------------------------------------------
// Mine
// -----
function position(letter){
var alphabet = 'abcdefghijklmnopqrstuvwxyz'
var location =  alphabet.indexOf(letter) + 1
return "Position of alphabet: " + location
}

// Best Practice
// --------------

function position(letter){
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  return 'Position of alphabet: ' + (alphabet.indexOf(letter) + 1);
}

position = l => `Position of alphabet: ${l.charCodeAt() - 96}`;

// ----------------------------------------------------------------------------------
// Question
// ----------------------------------------------------------------------------------

// Write function parseFloat (for Javascript parseF) which takes a string and returns a number or Nothing (for Python None, for Javascript null) if conversion is not possible.



// Answer
// ----------------------------------------------------------------------------------
// Mine
// -----
function parseF(s) {
if(parseFloat(s)){
return parseFloat(s)}
else if( s === 0 || s === '0'){ 
return 0
 } else {
  return null;
}
}


// Best Practice
// --------------

function parseF(s) {
  return isNaN(parseFloat(s)) ? null : parseFloat(s);
}


// ----------------------------------------------------------------------------------
// Question
// ----------------------------------------------------------------------------------

// This is the first step to understanding FizzBuzz.

// Your inputs: a positive integer, n, greater than or equal to one. n is provided, you have NO CONTROL over its value.

// Your expected outputs: an array of positive integers from 1 to n

// Your job is to write an algorithm that gets you from the input to the output.



// Answer
// ----------------------------------------------------------------------------------
// Mine
// -----

function preFizz(n) {
let arr = []
for(i = 1; i < n+1; i++){
arr.push(i)
}
return arr
}

// Best Practice
// --------------

function preFizz(n) {
  var output = [];
  for (var i=1; i<=n; i++)
  {
    output.push(i);
  }
  return output;
}

// ----------------------------------------------------------------------------------
// Question
// ----------------------------------------------------------------------------------

// Complete the squareSum method so that it squares each number passed into it and then sums the results together.

// Answer
// ----------------------------------------------------------------------------------
// Mine
// -----

function squareSum(numbers){
var sum = 0
for(i = 0; i < numbers.length; i++){
sum += numbers[i] * numbers[i]
}
return sum
}

// Best Practice
// --------------

function squareSum(numbers){
  return numbers.reduce(function(sum, n){
    return (n*n) + sum;
  }, 0)
}

// ----------------------------------------------------------------------------------
// Question
// ----------------------------------------------------------------------------------

// I highly recommend listening Vivaldi's Four Seasons as an inspiration to solve this Kata :)

// In the UK, winter begins on 21 December and ends on 20 March. Spring begins on 21 March and ends on 20 June. Summer begins on 21 June and ends on 20 September. Autumn begins on 21 September and ends on 20 December.

// Given a date day from 1 (January 1st) to 365 (December 31th) your task is to return the season of the year that corresponds to that day. If the number given is greater than 365, return "The year flew by!".

// Note: We are not considering leap years.


// Answer
// ----------------------------------------------------------------------------------
// Mine
// -----

function fourSeasons(d){
  if(d >= 81 && d <= 172){
    return 'Spring Season'
  }else if(d >= 173 && d <= 264){
    return 'Summer Season'
  }else if(d >= 265 && d <= 355){
    return 'Autumn Season'
  }else if(d >= 355 && d <= 365 || d <= 81){
    return 'Winter Season'
  } else {
    return 'The year flew by!'
  }
}

// Best Practice
// --------------


// ----------------------------------------------------------------------------------
// Question
// ----------------------------------------------------------------------------------

// Find the number with the most digits.

// If two numbers in the argument array have the same number of digits, return the first one in the array.


// Answer
// ----------------------------------------------------------------------------------
// Mine
// -----

function findLongest(array){
var numbers = 0
  for(var i = 0; i < array.length; i++){
  if (array[i].toString().length > numbers.toString().length){
  numbers =  array[i]
  }
}
  return numbers
}

// Best Practice
// --------------
function findLongest(a) {
  let m = Math.max(...a);
  for (let i = 0; i < a.length; i++) if (m.toString().length == a[i].toString().length ) return a[i];
}

function findLongest(a) {
  return a[a.map(n => ~~Math.log10(n)).indexOf(Math.max(...a.map(n => ~~Math.log10(n))))];
}

function findLongest(array){
  return array.reduce((res, curr) => (String(res).length < String(curr).length) ? curr : res);
}
// ----------------------------------------------------------------------------------
// Question
// ----------------------------------------------------------------------------------

// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, and u as vowels for this Kata.

// Answer
// ----------------------------------------------------------------------------------
// Mine
// -----
function getCount(str) {
  var vowelsCount = 0;
  let string = str.split('')
  for(let i = 0; i < str.length; i++){
  if('aeiou'.indexOf(string[i]) != -1 ){
  vowelsCount++
  }
  }
  
  return vowelsCount;
}

// Best Practice
// --------------

function getCount(str) {
  return (str.match(/[aeiou]/ig)||[]).length;
}


function getCount(str) {
  return str.replace(/[^aeiou]/gi, '').length;
}
// ----------------------------------------------------------------------------------
// Question
// ----------------------------------------------------------------------------------

// This time no story, no theory. The examples below show you how to write function accum:

// Answer
// ----------------------------------------------------------------------------------
// Mine
// -----

function accum(s) {
  let letters = s.toLowerCase().split('')
  console.log(letters)
  
  for(let i = 0; i < letters.length; i++){
 letters[i] = letters[i].toUpperCase() + letters[i].repeat(i)
  }
  return letters.join('-')
}

// Best Practice
// --------------
function accum(s) {
  return s.split('').map((x,index) => x.toUpperCase()+Array(index+1).join(x.toLowerCase())).join('-');
}


// ----------------------------------------------------------------------------------
// Question
// ----------------------------------------------------------------------------------

// Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word.

// Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.



// Answer
// ----------------------------------------------------------------------------------
// Mine
// -----
String.prototype.toJadenCase = function () {
  return this.replace(/(^|\s)[a-z]/g, function(f){ return f.toUpperCase()});
};

// Best Practice
// --------------
String.prototype.toJadenCase = function () { 
  return this.split(" ").map(function(word){
    return word.charAt(0).toUpperCase() + word.slice(1);
  }).join(" ");
}

String.prototype.toJadenCase = function () {
  return this.replace(/(^|\s)[a-z]/g, function(x){ return x.toUpperCase(); });
};

// ----------------------------------------------------------------------------------
// Question
// ----------------------------------------------------------------------------------

// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Answer
// ----------------------------------------------------------------------------------
// Mine
// -----
function disemvowel(str) {
  return str.replace(/[aeiou]/gi, '');
}

// Best Practice
// --------------

// ----------------------------------------------------------------------------------
// Question
// ----------------------------------------------------------------------------------

// A square of squares

// You like building blocks. You especially like building blocks that are squares. And what you even like more, is to arrange them into a square of square building blocks!

// However, sometimes, you can't arrange them into a square. Instead, you end up with an ordinary rectangle! Those blasted things! If you just had a way to know, whether you're currently working in vain… Wait! That's it! You just have to check if your number of building blocks is a perfect square.

// Task

// Given an integral number, determine if it's a square number:

// In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.
// The tests will always use some integral number, so don't worry about that in dynamic typed languages.

// Answer
// ----------------------------------------------------------------------------------
// Mine
// -----


function isSquare(n) {
  return Math.sqrt(n) % 1 === 0;
}
// Best Practice
// --------------


// ----------------------------------------------------------------------------------
// Question
// ----------------------------------------------------------------------------------

// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.



// Answer
// ----------------------------------------------------------------------------------
// Mine
// -----
function getMiddle(s)
{
  return s.length % 2 ? s.substr(s.length / 2 , 1) : s.substr(s.length / 2 - 1, 2);
}

// Best Practice
// --------------

function getMiddle(s)
{
  return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
}


// ----------------------------------------------------------------------------------
// Question
// ----------------------------------------------------------------------------------

// Your task is to make a function that can take any non-negative integer as a argument and return it with it's digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// Examples:

// Input: 21445 Output: 54421

// Input: 145263 Output: 654321

// Input: 1254859723 Output: 9875543221

// Answer
// ----------------------------------------------------------------------------------
// Mine
// -----

function descendingOrder(n){
let a = n.toString().split('')
   let b = a.sort(function(a, b){return b-a}).join('')
  return (b/1) ;
}

// Best Practice
// --------------

function descendingOrder(n){
  return parseInt(String(n).split('').sort().reverse().join(''))
}

// ----------------------------------------------------------------------------------
// Question
// ----------------------------------------------------------------------------------

// Welcome. In this kata, you are asked to square every digit of a number.

// For example, if we run 9119 through the function, 811181 will come out.

// Note: The function accepts an integer and returns an integer


// Answer
// ----------------------------------------------------------------------------------
// Mine
// -----

function squareDigits(num){
let n = num.toString().split('')
let square = ''
  for(var i = 0; i < n.length; i++){
  square += n[i]*n[i]
  }
  return (square/1)
}

// Best Practice
// --------------

function squareDigits(num){
  return Number(('' + num).split('').map(function (val) { return val * val;}).join(''));
  
}

function squareDigits(num){
  var array = num.toString().split('').map( function(int) {
    var i = parseInt(int);
    return i * i;
  });
  
  return parseInt(array.join(""));
}

// ----------------------------------------------------------------------------------
// Question
// ----------------------------------------------------------------------------------

// Your goal in this kata is to implement an difference function, which subtracts one list from another.

// It should remove all values from list a, which are present in list b.

// difference([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:

// difference([1,2,2,2,3],[2]) == [1,3]

// Answer
// ----------------------------------------------------------------------------------
// Mine
// -----

function array_diff(a, b) {
var diff = []
for(var i = 0; i < a.length; i++){
if(a[i] != b){
diff.push(a[i])
}
}
return diff
}

// Best Practice
// --------------

function array_diff(a, b) {
  return a.filter(function(x) { return b.indexOf(x) == -1; });
}

// ----------------------------------------------------------------------------------
// Question
// ----------------------------------------------------------------------------------

// Jenny has written a function that returns a greeting for a user. However, she's in love with Johnny, and would like to greet him slightly different. She added a special case to her function, but she made a mistake.

// Can you help her?

// Answer
// ----------------------------------------------------------------------------------
// Mine
// -----

function greet(name){
  if(name === "Johnny")
    return "Hello, my love!";
  else
    return "Hello, " + name + "!";
}

// Best Practice
// --------------

function greet(name){
  return "Hello, " + (name == "Johnny" ? "my love" : name) + "!";
}

// ----------------------------------------------------------------------------------
// Question
// ----------------------------------------------------------------------------------

// Very simple, given a number, find its opposite.

// Answer
// ----------------------------------------------------------------------------------
// Mine
// -----

function opposite(number) {
    return number * (-1);
}

// Best Practice
// --------------

function opposite(number) {
  return(-number);
}

// ----------------------------------------------------------------------------------
// Question
// ----------------------------------------------------------------------------------

// We need a function that can transform a number into a string.

// What ways of achieving this do you know?



// Answer
// ----------------------------------------------------------------------------------
// Mine
// -----

function numberToString(num) {
  return num.toString();
}

// Best Practice
// --------------

// ----------------------------------------------------------------------------------
// Question
// ----------------------------------------------------------------------------------

// Consider an array of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

// Answer
// ----------------------------------------------------------------------------------
// Mine
// -----

function countSheeps(arrayOfSheep) {
  let count = 0
  for(let i = 0; i < arrayOfSheep.length; i++){
   if(arrayOfSheep[i] === true){
   count++
   }
  }
  return count
}

// Best Practice
// --------------

function countSheeps(arrayOfSheeps) {
  return arrayOfSheeps.filter(Boolean).length;
}

// ----------------------------------------------------------------------------------
// Question
// ----------------------------------------------------------------------------------

// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

// Answer
// ----------------------------------------------------------------------------------
// Mine
// -----

function makeNegative(num) {
  if(num > 0){
  return (-num)
  }else{
  return num
  }
}


// Best Practice
// --------------

function makeNegative(num) {
  return -Math.abs(num);
}

// ----------------------------------------------------------------------------------
// Question
// ----------------------------------------------------------------------------------

// We need a function that can transform a string into a number. What ways of achieving this do you know?

// Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.


// Answer
// ----------------------------------------------------------------------------------
// Mine
// -----

var stringToNumber = function(str){
  // put your code here
  return str/1;
}

// Best Practice
// --------------

var stringToNumber = function(str){
  return parseInt(str);
}

// ----------------------------------------------------------------------------------
// Question
// ----------------------------------------------------------------------------------

// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: array may be empty, in this case return 0.


// Answer
// ----------------------------------------------------------------------------------
// Mine
// -----

function positiveSum(arr) {
  let total = 0
  var pos = arr.filter(function(x){ return x > -1 })
  for(let i = 0; i<pos.length; i++){
  total += pos[i]
  }
return total
}

// Best Practice
// --------------

function positiveSum(arr) {
   return arr.reduce((a,b)=> a + (b > 0 ? b : 0),0);
}

// ----------------------------------------------------------------------------------
// Question
// ----------------------------------------------------------------------------------

// Can you find the needle in the haystack?

// Write a function findNeedle() that takes an array full of junk but containing one "needle"

// After your function finds the needle it should return a message (as a string) that says:

// "found the needle at position " plus the index it found the needle

// Answer
// ----------------------------------------------------------------------------------
// Mine
// -----

function findNeedle(haystack) {
let pos = 0
for(let i = 0; i < haystack.length; i++){
if(haystack[i] === 'needle'){
pos = i
}
}
 return 'found the needle at position ' + pos
}

// Best Practice
// --------------

function findNeedle(haystack) {
  return "found the needle at position " + haystack.indexOf("needle");
}


// ----------------------------------------------------------------------------------
// Question
// ----------------------------------------------------------------------------------

// Complete the solution so that the function will break up camel casing, using a space between words.

// Example

// solution('camelCasing') // => should return 'camel Casing'

// Answer
// ----------------------------------------------------------------------------------
// Mine
// -----

function solution(string) {
    return string.replace(/([a-z])([A-Z])/g,"$1 $2");
}

// Best Practice
// --------------

function solution(string) {
  return(string.replace(/([A-Z])/g, ' $1'));

}


// ----------------------------------------------------------------------------------
// Question
// ----------------------------------------------------------------------------------


// What is an anagram? Well, two words are anagrams of each other if they both contain the same letters. For example:

// 'abba' & 'baab' == true

// 'abba' & 'bbaa' == true

// 'abba' & 'abbba' == false
// Write a function that will find all the anagrams of a word from a list. You will be given two inputs a word and an array with words. You should return an array of all the anagrams or an empty array if there are none. For example:

// anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']

// anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']

// anagrams('laser', ['lazing', 'lazy',  'lacer']) => []


// Answer
// ----------------------------------------------------------------------------------
// Mine
// -----

function anagrams(word, words) {
  return words.filter(function(w){
    return w.split('').sort().join('') === word.split('').sort().join('');
  });
}

// Best Practice
// --------------

String.prototype.sort = function() {
  return this.split("").sort().join("");
};

function anagrams(word, words) {
  return words.filter(function(x) {
      return x.sort() === word.sort();
  });
}


// ----------------------------------------------------------------------------------
// Question
// ----------------------------------------------------------------------------------

// Create a function with two arguments that will return a list of length (n) with multiples of (x).

// Assume both the given number and the number of times to count will be positive numbers greater than 0.

// Return the results as an array (or list in Python, Haskell or Elixir).

// Examples:

// countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
// countBy(2,5) === [2,4,6,8,10]

// Answer
// ----------------------------------------------------------------------------------
// Mine
// -----

function countBy(x, n) {
  var z = [];
    for(let i = 1; i < n+1; i++){
      z[i] = i * x
    }
  return z.slice(1, z.length);
}

// Best Practice
// --------------

function countBy(x, n) {
    var z = [];
    for (i = 1; i <= n; i++) {
        z.push(x * i);
    }
    return z;
}


// ----------------------------------------------------------------------------------
// Question
// ----------------------------------------------------------------------------------

/*Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.

If the input array is empty or null, return an empty array:

C#/Java: new int[] {} / new int[0];
C++: std::vector<int>();
JavaScript/CoffeeScript/PHP/Haskell: [];
Rust: Vec::<i32>::new();
ATTENTION!

The passed array should NOT be changed. Read more here.

For example:

input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]
return [10, -65].*/

// Answer
// ----------------------------------------------------------------------------------
// Mine
// -----

countPositivesSumNegatives = (input) => {
  if( input === null || input.length < 1) {
    return []
  }
  var arr = [0, 0]
    for(let i = 0; i < input.length; i++) {
      if(input[i] > 0){
        arr[0] += 1
      } else {
        arr[1] += input[i]
      }
    }
      return arr
}

// Best Practice
// --------------

function countPositivesSumNegatives(input) {
    if (input == null || input.length == 0)
      return [];
    
    var positive = 0;
    var negative = 0;
    
    for (var i=0, l=input.length; i<l; ++i)
    {
      if (input[i] > 0)
        ++ positive;
      else
        negative += input[i];
    }
    
    return [positive, negative];
}

// ----------------------------------------------------------------------------------
// Question
// ----------------------------------------------------------------------------------

// Sum all the numbers of the array (in F# and Haskell you get a list) except the highest and the lowest element (the value, not the index!).
// (The highest/lowest element is respectively only one element at each edge, even if there are more than one with the same value!)

// Example:

// { 6, 2, 1, 8, 10 } => 16
// { 1, 1, 11, 2, 3 } => 6


// If array is empty, null or None, or if only 1 Element exists, return 0.
// Note:In C++ instead null an empty vector is used. In C there is no null. ;-) 


// -- There's no null in Haskell, therefore Maybe [Int] is used. Nothing represents null.
// Have fun coding it and please don't forget to vote and rank this kata! :-)

// I have created other katas. Have a look if you like coding and challenges.

// Answer
// ----------------------------------------------------------------------------------
// Mine
// -----

function sumArray(array) {

var arr = 0
   if(array === null){
     return 0
   } else{
     array.sort(function(a, b){return a - b}).pop()
      array.shift()
      for(var i  = 0; i < array.length; i++){
          arr += array[i]
      }
    }
  return arr
}


// Best Practice
// --------------

function sumArray(array) {
  if (array == null) {
    return 0;
  } else if (array.length < 2) {
    return 0;
  } else {
    array = array.sort(function(a,b) {return a - b;});
    var total = 0;
    for (var i = 1; i < array.length - 1; i++) {
      total += array[i];
    }
    return total;
  }
}

// ----------------------------------------------------------------------------------
// Question
// ----------------------------------------------------------------------------------

// Create a function which answers the question "Are you playing Banjo?". If your name starts with the letter "R" or lower case "r", you are playing Banjo!

// The function takes a name as its only argument, and returns one of the following strings:

// name + "plays banjo" 
// name + "does not play banjo"
// Names given are always valid strings.

// Answer
// ----------------------------------------------------------------------------------
// Mine
// -----

function areYouPlayingBanjo(name) {
  if(name[0] === 'r' || name[0] === 'R'){
  
  return name + ' plays banjo' ;}
  else {
  return name + ' does not play banjo'
  }
}

// Best Practice
// --------------

function areYouPlayingBanjo(name) {
  return name + (name[0].toLowerCase() == 'r' ? ' plays' : ' does not play') + " banjo";
}

function areYouPlayingBanjo(name) {
  if (name[0].toLowerCase() === 'r') {
    return name + ' plays banjo';
  } else {
    return name + ' does not play banjo';
  }
}

function areYouPlayingBanjo(name) {
  return name + (/^r/i.test(name) ? " plays " : " does not play ") + "banjo";
}

// ----------------------------------------------------------------------------------
// Question
// ----------------------------------------------------------------------------------

// There is an object/class already created called MrFreeze. Mark this object as frozen so that no other changes can be made to it.


// Answer
// ----------------------------------------------------------------------------------
// Mine
// -----

Object.freeze(MrFreeze)

// Best Practice
// --------------

function deepFreeze (o) {
  var prop, propKey;
  
  Object.freeze( o );
  for ( propKey in o ) {
    prop = o[ propKey ];
    
    if ( !o.hasOwnProperty( propKey ) || !(typeof prop === "object") || Object.isFrozen( prop ) ) {
      continue;
    }

    deepFreeze(prop);
  }
}

deepFreeze(MrFreeze);

// mark the MrFreeze object instance as frozen

var MyFreeze = {};
(Object.freeze || object)(MrFreeze);

// ----------------------------------------------------------------------------------
// Question
// ----------------------------------------------------------------------------------

// Write a program that finds the summation of every number between 1 and num. The number will always be a positive integer greater than 0.

// For example:

// summation(2) -> 3
// 1 + 2

// summation(8) -> 36
// 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8


// Answer
// ----------------------------------------------------------------------------------
// Mine
// -----

var summation = function (num) {
  let sum = 0
  for(let i = 0; i <= num; i++){
  sum += i
  }
  return sum
}

// Best Practice
// --------------

const summation = n => n * (n + 1) / 2;

var summation = function (num) {
  let result = 0;
  for (var i = 1; i <= num; i++) {
    result += i;
  }
  
  return result;
}

function summation(num) {
  return num * (num + 1) / 2
}

// ----------------------------------------------------------------------------------
// Question
// ----------------------------------------------------------------------------------

// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

// doubleChar("String") ==> "SSttrriinngg"

// doubleChar("Hello World") ==> "HHeelllloo  WWoorrlldd"

// doubleChar("1234!_ ") ==> "11223344!!__  "
// Good Luck!

// Answer
// ----------------------------------------------------------------------------------
// Mine
// -----

function doubleChar(str) {
var dC = ''
  for(let i = 0; i < str.length; i++) {
  dC += str[i]+str[i]
  }
  return dC
}


// Best Practice
// --------------

const doubleChar = (str) => str.split("").map(c => c + c).join("");


function doubleChar(str) {
  return str.replace(/(.)/g, "$1$1")
}

// ----------------------------------------------------------------------------------
// Question
// ----------------------------------------------------------------------------------

// Code as fast as you can! You need to double the integer and return it.

// Answer
// ----------------------------------------------------------------------------------
// Mine
// -----

function doubleInteger(i) {
  // i will be an integer. Double it and return it.
  return i * 2;
}

// Best Practice
// --------------

const doubleInteger = i => 2 * i;


function doubleInteger(i) {
  return i << 1;
}

// ----------------------------------------------------------------------------------
// Question
// ----------------------------------------------------------------------------------

// Given 2 strings, a and b, return a string of the form short+long+short, with the shorter string on the outside and the longer string on the inside. The strings will not be the same length, but they may be empty (length0).

// For example:

// solution("1", "22") // returns "1221"
// solution("22", "1") // returns "1221"

// Answer
// ----------------------------------------------------------------------------------
// Mine
// -----

function solution(a, b){
  return a+b+a
}


// Best Practice
// --------------

function solution(a, b) {
  return a.length < b.length ? a + b + a : b + a + b
}

const solution = (a, b) =>  a < b ? a + b + a : b + a + b;


// ----------------------------------------------------------------------------------
// Question
// ----------------------------------------------------------------------------------

// Inspired by the development team at Vooza, write the function howManyLightsabersDoYouOwn that

// accepts the name of a programmer, and
// returns the number of lightsabers owned by that person.
// The only person who owns lightsabers is Zach, by the way. He owns 18, which is an awesome number of lightsabers. Anyone else owns 0.

// No starting help here -- you'll need to know how to write a function that accepts a parameter and returns a value based on that parameter.

// howManyLightsabersDoYouOwn("anyone else") \\ should === 0
// howManyLightsabersDoYouOwn("Zach") \\ should === 18

// Answer
// ----------------------------------------------------------------------------------
// Mine
// -----

var howManyLightsabersDoYouOwn = function(name) { if(name === 'Zach'){
return 18
} else{
return 0
}
}

// Best Practice
// --------------

function howManyLightsabersDoYouOwn(name) {
  return name === 'Zach' ? 18 : 0;
}

var howManyLightsabersDoYouOwn = function(name) {
  return (name == "Zach") ? 18 : 0; 
}

// ----------------------------------------------------------------------------------
// Question
// ----------------------------------------------------------------------------------

// This function has to be called multiply and needs to take two numbers as arguments, and has to return the multiplication of the two arguments.

// Answer
// ----------------------------------------------------------------------------------
// Mine
// -----

function multiply(a, b){
  return a*b;
}

// Best Practice
// --------------

function multiply(a, b){
  if(typeof a == 'number' && typeof b == 'number')
    return a * b;  
}

let multiply = (a, b) => a * b;

// ----------------------------------------------------------------------------------
// Question
// ----------------------------------------------------------------------------------

// Given an input n, write a function always that returns a function which returns n. Ruby should return a lambda or a proc.

// var three = always(3);
// three(); // returns 3


// Answer
// ----------------------------------------------------------------------------------
// Mine
// -----

function always (n) {
 return function a (always) {return n;}
}

// Best Practice
// --------------

function always(n) {

  return function () { return n };
  
}

function always (n) {
  return () => n;
}

let always = n => () => n;


// ----------------------------------------------------------------------------------
// Question
// ----------------------------------------------------------------------------------

// Add the value "codewars" to the websites array.
// After your code executes the websites array should == ["codewars"]

// The websites array has already been defined for you using the following code:

// var websites = [];

// Answer
// ----------------------------------------------------------------------------------
// Mine
// -----

websites.push("codewars")




// ----------------------------------------------------------------------------------
// Question
// ----------------------------------------------------------------------------------

// Sum Array

// Write a method sum (sum_array in python) that takes an array of numbers and returns the sum of the numbers. These may be integers or decimals for Ruby and any instance of Num for Haskell. The numbers can also be negative. If the array does not contain any numbers then you should return 0.

// Examples

// numbers = [1, 5.2, 4, 0, -1]
// puts sum(numbers)
// 9.2


// Answer
// ----------------------------------------------------------------------------------
// Mine
// -----

// Sum Numbers
function sum (numbers) {
    "use strict";
   return numbers[0] == null ? 0 : (numbers.reduce( function (a, b){
   return a + b }))
    
};

// Best Practice
// --------------

sum = function (numbers) {
  "use strict";
  return numbers.reduce(function(t, n){
    return t + n;
  }, 0);
};

function sum(numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}


sum = function (numbers) {
  "use strict";
  var total = 0;
  for(var i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  return total;
};

// ----------------------------------------------------------------------------------
// Question
// ----------------------------------------------------------------------------------

// Now you have to write a function called square that takes an argument and returns the square of it.

// Answer
// ----------------------------------------------------------------------------------
// Mine
// -----

square = n => {return n*n};

// Best Practice
// --------------

var square = function(a){
  return a*a;
}

square = function(num){
  return num*num;
}


// ----------------------------------------------------------------------------------
// Question
// ----------------------------------------------------------------------------------



// Answer
// ----------------------------------------------------------------------------------
// Mine
// -----


// Best Practice
// --------------



// ----------------------------------------------------------------------------------
// Question
// ----------------------------------------------------------------------------------



// Answer
// ----------------------------------------------------------------------------------
// Mine
// -----


// Best Practice
// --------------



// ----------------------------------------------------------------------------------
// Question
// ----------------------------------------------------------------------------------



// Answer
// ----------------------------------------------------------------------------------
// Mine
// -----


// Best Practice
// --------------



// ----------------------------------------------------------------------------------
// Question
// ----------------------------------------------------------------------------------



// Answer
// ----------------------------------------------------------------------------------
// Mine
// -----


// Best Practice
// --------------



// ----------------------------------------------------------------------------------
// Question
// ----------------------------------------------------------------------------------



// Answer
// ----------------------------------------------------------------------------------
// Mine
// -----


// Best Practice
// --------------



// ----------------------------------------------------------------------------------
// Question
// ----------------------------------------------------------------------------------



// Answer
// ----------------------------------------------------------------------------------
// Mine
// -----


// Best Practice
// --------------



// ----------------------------------------------------------------------------------
// Question
// ----------------------------------------------------------------------------------



// Answer
// ----------------------------------------------------------------------------------
// Mine
// -----


// Best Practice
// --------------



// ----------------------------------------------------------------------------------
// Question
// ----------------------------------------------------------------------------------



// Answer
// ----------------------------------------------------------------------------------
// Mine
// -----


// Best Practice
// --------------



// ----------------------------------------------------------------------------------
// Question
// ----------------------------------------------------------------------------------



// Answer
// ----------------------------------------------------------------------------------
// Mine
// -----


// Best Practice
// --------------



// ----------------------------------------------------------------------------------
// Question
// ----------------------------------------------------------------------------------



// Answer
// ----------------------------------------------------------------------------------
// Mine
// -----


// Best Practice
// --------------



// ----------------------------------------------------------------------------------
// Question
// ----------------------------------------------------------------------------------



// Answer
// ----------------------------------------------------------------------------------
// Mine
// -----


// Best Practice
// --------------



// ----------------------------------------------------------------------------------
// Question
// ----------------------------------------------------------------------------------



// Answer
// ----------------------------------------------------------------------------------
// Mine
// -----


// Best Practice
// --------------



// ----------------------------------------------------------------------------------
// Question
// ----------------------------------------------------------------------------------



// Answer
// ----------------------------------------------------------------------------------
// Mine
// -----


// Best Practice
// --------------



// ----------------------------------------------------------------------------------
// Question
// ----------------------------------------------------------------------------------



// Answer
// ----------------------------------------------------------------------------------
// Mine
// -----


// Best Practice
// --------------


