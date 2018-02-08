// JS Data Types

/*
* Boolean
* Null - empty object
* Undefined
* Number
* String
* Symbol
*/

// Boolean
// var num1 = "100";
// var num2 = 100;
// boolNum = num1 === num2;
// alert(typeof boolNum); //boolean
// alert(num1 === num2); //false


// Number
// var integerNumber = 100;
// var floatingPointNumber = 100.50;
// var float2 = 100.0;
// 
// console.log(integerNumber, floatingPointNumber, float2);

// alert(Number.MAX_VALUE);
// alert(Number.MIN_VALUE);

// NaN
// alert(NaN === NaN); //false
// isNaN
// alert(isNaN(NaN)); //true
// alert(isNaN('100')); //false
// alert(isNaN(100)); //false
// alert(isNaN('blue'));
// alert(isNaN(true)); // true converts to 1 & false converts to 0

// var num2 = parseInt("1234iehfiefieh");
// alert(num2);

// var num3 = parseFloat("20.69");
// alert(num3);

//String

// var myName = 'Mozarella';
// console.log(myName.length);
// 
// var age = 30;
// var ageStringify = age.toString();
// console.log(typeof ageStringify);

// Objects
/* creating object - {}, new
accessing - . []
accessing object propery with variable
updating object properties
adding new properties
deleting properties
object hasOwnProperty
nested oject
*/

// var woman = {
//   name: 'Olga',
//   age: 50,
//   sayname: function() {
//     return this.name
//   },
//   likes: {
//     cartoon: {
//       one: "Hobby Kids",
//       two: "Chickens"
//     },
//     cookie: "Chocolate Chip"
//   }
// }
// woman.name = "Zelda";
// woman.address = "US";
// 
// delete woman.address;
// 
// console.log("Has this property? ", woman.hasOwnProperty("age"));
// 
// console.log(woman['age'], woman.sayname(), woman.likes['cartoon'].one);

// Operators

/*
* unary operators ++ --
* boolean operators - logical ! && ||
* multiplcative - * / %
* additive +
* relational < > <= >=
* equality  == === != !==
* conditional - ternary ---- (var = expression ? true : false)
* assignment = += -= *= /= %=
* comma
*/

// var date1 = 10;
// var date2 = 18;
// 
// var test = date1 > date2 ? "Correct" : "Wrong";
// 
// console.log(test); // ternarary
// 
// var num = 10;
// num = num + 10;
// num += 10;
// console.log(num); // compound assignment
// 
// var name = 'R';
// var age = 29;
// var school = 'secondary';
// 
// var name = 'R', age = 29, school = 'secondary'; // comma operators

/* Statements:

if else
do while
while
for
for in
labeled
break continue
switch
*/
// if - flow-control Statement
// if statement evaluates a given condition to a Boolean true or false

// var num = 100;
// 
// if(num < 50) {
//   alert('Yes it is greater than ' + num);
// } else  {
//   alert('It is not');
// }

// var n = 26;
// 
// if(n >= 27) {
//   alert ('greater')
// } else if (n <= 25) {
//   alert ('again not')
//   } else  {
//     alert ('number is 26')
//   }
  
// var num = 0;

// do {
//   num++;
//   console.log('Number:', num);
// } while (num < 10);

// while(num < 10) {
//   num++;
//   console.log('Number:', num);
// }

// for (var n = 0; n < 10; n++) {
//   alert(n);
// }

// var person = {
//   name: 'Roo',
//   age: 30,
//   planet: 'Earth'
// };

// for(item in window) {
//   console.log(item);
// }

var num = 0;

for(var n = 0; n < 10; n++) {
  if (n === 5) {
    break;// continue
  }
  num++;
}
console.log(num);


