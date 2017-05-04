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


