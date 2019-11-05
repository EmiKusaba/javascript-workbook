//Exercises Length
//Create an array called cars which consists of 4 different types of cars. The first car type should be Ford.
var car = ["Ford", "BMW", "Mercedes", "Porche"];
console.log(car.length);


//concat
//Create another array called more cars with 4 more different types of cars. The last car type should be Honda.
//Use the concat method to combine the cars and moreCars arrays into an array called totalCars.
var moreCars = ["Subaru", "Mazda", "Toyota", "Honda"];
console.log(car.concat(moreCars));
var totalCars = (car.concat(moreCars));
console.log(totalCars);

//indexOf and lastIndexOf
//Use the indexOf method to console.log the index of Honda.
//Use the lastIndexOf method to console.log the index of Ford.
console.log(moreCars.indexOf("Honda"));
console.log(car.lastIndexOf("Ford"));

//join
//Use the join method to covert the array totalCars into a string called stringOfCars.
var stringOfCars = (totalCars.join(" "));
console.log(totalCars.join(" "));

//split
//Use the split method to convert stringOfCars back intro an array called totalCars.
var totalCars = (stringOfCars.split(" "));
console.log(totalCars);

//reverse
//Use the reverse method to create an array carsInReverse which is the array totalCars in reverse.
var carsInReverse = (totalCars.reverse());
console.log(carsInReverse);

//sort
//Use the sort method to put the array carsInReverse into alphabetical order.
//Based on the types of cars you used, predict which item in the array should be at index 0.
//Use the following code to confirm or reject your prediction:
//alert(carsInReverse.indexOf('yourPrediction'));
console.log(carsInReverse.sort());
var yourPrediction = "Toyota";
console.log(carsInReverse.indexOf(yourPrediction));

//slice
//Use the slice method to remove Ford and Honda from the carsInReverse array and move them into a new array called removedCars.
console.log(carsInReverse);
var removedCars = (carsInReverse.slice(1));
console.log(removedCars);