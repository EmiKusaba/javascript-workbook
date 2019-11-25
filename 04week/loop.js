// Update

//Q1.do while loops
// let num = 0;
// do {
//   num += 1;
//   console.log("Number" + num);
// } while (num < 1000);
//Q2
// let person = {
// firstName:"Jane",
// lastName:"Doe",
// birthDate:"Jan 5,1925",
// gender:"female",
// };
// console.log(person);

//Q3 Use a for...in loop and if statement to console.log the value associated with the key birthDate if the birth year is an odd number.
// var person = {
// firstName:"Jane",
// lastName:"Doe",
// birthDate:"Jan 5,1925",
// gender:"female",
// };

// function isOdd(num) { return (num % 2) != 0;}

// for(let key in person) { // we don't really need a for loop, we can just do person["birthDate"]
//   if(key === "birthDate") {
//     var birthDateValue = person[key];
//      var year = parseInt(birthDateValue.split(",")[1]);
//     if(isOdd(year)) {
//       console.log(`odd birth year: ${birthDateValue}`);
//     }
//   }
// }


//Q4.Create an arrayOfPersons that contains mulitiple objects. You can simply copy/paste the person object you made above multiple times. Feel free to change the values to reflect multiple people you might have in your database.


// let arrayOfPersons = [
// {firstName:"Jane",
// lastName:"Doe",
// birthDate:"Jan 5,1925",
// gender:"female",
// },
// {firstName:"Jane",
// lastName:"Doe",
// birthDate:"Jan 5,1925",
// gender:"female",
// },
// {firstName:"Jane",
// lastName:"Doe",
// birthDate:"Jan 5,1925",
// gender:"female",
// },
// ]
// console.log(arrayOfPersons);


//Q5.Use .map() to map over the arrayOfPersons and console.log() their information.

// let arrayOfPersons = [
// {firstName:"Jane",
// lastName:"Doe",
// birthDate:"Jan 5,1925",
// gender:"female",
// },
// {firstName:"Jane",
// lastName:"Doe",
// birthDate:"Jan 5,1925",
// gender:"female",
// },
// {firstName:"Jane",
// lastName:"Doe",
// birthDate:"Jan 5,1925",
// gender:"female",
// },
// ]

// function myFunction(x) {
//   console.log(x);
// }

// arrayOfPersons.map(myFunction);



//Q6.Use .filter() to filter the persons array and console.log only males in the array.

let arrayOfPersons = [
  {firstName:"Jane",
   lastName:"Doe",
   birthDate:"Jan 5,1925",
   gender:"female",
  },
  {firstName:"John",
   lastName:"Wick",
   birthDate:"Jan 5,1991",
   gender:"male",
  },
  {firstName:"Jack",
   lastName:"Black",
   birthDate:"Jan 5,1925",
   gender:"male",
  },
]
var males = arrayOfPersons.filter(function(person){
  return person["gender"] === "male";
});
console.log(males);

//Q7 Use .filter() to filter the persons array and console.log only people that were born before Jan 1, 1990.

var born = arrayOfPersons.filter(function(person){
  var birthDate = person["birthDate"];
  var birthYear = parseInt(birthDate.split(",")[1]);
  return birthYear < 1990;
});
console.log(born);