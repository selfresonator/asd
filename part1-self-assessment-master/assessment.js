console.log('Let\'s start Hacking!');

var string = 'Javascript is super awesome!';
var myProfileObject = {};
var arr = ['J','a','v','a'];


// EXERCISE 1------------------------
// here we add together the words in our array 'arr'(concatenation)
// no variables
console.log(arr.join(''));


// EXERCISE 2------------------------
//using a for loop which prints goes through each array index...
for(var i = 0; i < string.length; i++) {
  // ...and logs each element to the console
  console.log(string[i]);
};


// EXERCISE 3------------------------
// a while loop refactor of exercise 2.
var i = 0 // a starter variable for our while loop
// here we log each letter to the console while i is less than the
// length of the string
while(i < string.length) {
  console.log(string[i]);
  i++;
};


// EXERCISE 4------------------------
// literal notation object handling, not necessary but how i initially started it
/*myProfileObject = {
  'school': 'Telegraph Prep',
  'name': 'AJ Farley',
  'loaction': 'Berkeley'
};*/

// dot notation(assigns value to method of myProfileObject)
myProfileObject.school = 'Telegraph Prep';
myProfileObject.location = 'Berkeley';
myProfileObject.name = 'AJ Farley';


// EXERCISE 5------------------------
// we are returning an object with a set of properties about ourselves.
var subject = function(obj,name) {
  // here we turn the name into an array in order to access first and last
  // names in our returned object.
  greetName = name.split(' ');
  // and our object to return
  return {
    'name': name,
    'place of birth': 'Orange, CA',
    'hobby': 'stuff',
    'greeting': 'My first name is ' + greetName[0] + ', and my last name is ' + greetName[1] + '.'
  };
};

var myGreeting = subject(myProfileObject,'AJ Farley');
// below are a couple console logs to test our methods above.
// console.log(myGreeting);
// console.log(myGreeting.greeting);


// EXERCISE 6------------------------
var nameChecker = function(name) {
  // since myGreeting is defined elsewhere in the code, we can check a
  // name to see if it matches the object's name.
  if(name === myGreeting.name) {
    return true;
  } else {
    return false;
  }
};


// EXERCISE 7------------------------
var objLength = function(object) {
  // this function uses a native method of object called keys, and
  // returns the length of the keys object.
  return keys(object).length;
};


// EXERCISE 8------------------------
// this function adds on to an earlier one. we take two different
// arrays as arguments and...
var modify = function(a,b) {
  for(var i = 0; i < b.length; i++) {
    // ...using push, we add each one of the second arrays elements
    // together to the first.
    a.push(b[i]);
  }
  return a;
};
// this is the variable array i wrote to test this function.
// var extra = ['S','c','r','i','p','t'];


// EXERCISE 9------------------------
// this function is the same as exercise 8...
var modify2 = function(c,d) {
  for(var i = 0; i < d.length; i++) {
    c.push(d[i]);
  }
  // ...except it joins the whole array together to return a string.
  return c.join('');
};
// renaming a previous variable to test the above function with.
// var extra2 = ['S','c','r','i','p','t'];
