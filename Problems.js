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


