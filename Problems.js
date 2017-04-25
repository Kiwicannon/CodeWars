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



