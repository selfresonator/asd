var string = 'Javascript is super awesome!';
var myProfileObject = {};
var arr = ['J','a','v','a'];

// EXERCISE 1------------------------
// here we bring together
console.log(arr.join(''));


// EXERCISE 2------------------------
for(var i = 0; i < string.length; i++) {
  // and logging each element to the console
  console.log(string[i]);
};


// EXERCISE 3------------------------
/*var i = 0;
while(i < string.length) {
  console.log(string[i]);
};*/


// EXERCISE 4------------------------
// literal notation object handling
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
/*var func = function(obj,name) {
  return {

  };
};*/


// EXERCISE 6------------------------


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
