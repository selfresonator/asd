console.log('Let\'s start Hacking!');


var string = 'Javascript is super awesome!';
var myProfileObject = {};
var arr = ['J','a','v','a'];


// EXERCISE 1------------------------
// here we add together the words in our array 'arr'(concatenation)
console.log(arr.join(''));


// EXERCISE 2------------------------
//using a for loop which
for(var i = 0; i < string.length; i++) {
  // and logging each element to the console
  console.log(string[i]);
};


// EXERCISE 3------------------------
/*
while(string.length > 0) {
  console.log(string[length-1]);
  string = string.length-1
};*/


// EXERCISE 4------------------------
// literal notation object handling, not necessary but how i initially started it
/*myProfileObject = {
  'school': 'Telegraph Prep',
  'name': 'AJ Farley',
  'loaction': 'Berkeley'
};*/

// dot notation
myProfileObject.school = 'Telegraph Prep';
myProfileObject.location = 'Berkeley';
myProfileObject.name = 'AJ Farley';


// EXERCISE 5------------------------
var subject = function(obj,name) {
  greetName = name.split(' ')
  return {
    'name': name,
    'place of birth': 'Orange, CA',
    'hobby': 'stuff',
    'greeting': 'My first name is ' + greetName[0] + ', and my last name is ' + greetName[1] + '.'
  };
};

var myGreeting = subject(myProfileObject,'AJ Farley');
// console.log(myGreeting);
// console.log(myGreeting.greeting);


// EXERCISE 6------------------------
var nameChecker = function(name) {
  if(name === myGreeting.name) {
    return true;
  } else {
    return false;
  }
};


// EXERCISE 7------------------------
var objLength = function(object) {
  return keys(object).length;
};


// EXERCISE 8------------------------
var modify = function(a,b) {
  for(var i = 0; i < b.length; i++) {
    a.push(b[i]);
  }
  return a;
};
var extra = ['S','c','r','i','p','t'];


// EXERCISE 9------------------------
var extra2 = ['S','c','r','i','p','t'];
var modify2 = function(c,d) {
  for(var i = 0; i < d.length; i++) {
    c.push(d[i]);
  }
  return c.join('');
};
