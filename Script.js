// let count = 5

// // count + 1



// count = count + 10

// count = count - 2
// console.log(count)

// create a varibale, bonusPoints. initialisze it as 50. incerase it to 100
// decrease it down to 25, and then finally increase it to 70
// console.log the value after each steo

// let bonusPoints = 50
// console.log(bonusPoints)

// bonusPoints = bonusPoints + 50
// console.log(bonusPoints)

// bonusPoints = bonusPoints - 75
// console.log(bonusPoints)

// bonusPoints = bonusPoints + 45
// console.log(bonusPoints)



// function increment() {
//       console.log("the button was clicked")
// }

// DATA TYPES IN JAVASCRIPT:-

// console.log('Javascript')
// console.log(2011)
// console.log('Javascript is Hard to underpstand! but easy to learn!')

// ARITHMETIC OPERATORS 

// console.log(8 + 9);

// console.log(78 - 25);

// console.log(9 * 8);

// console.log(25 / 5);

// console.log(0.2708 * 100);

// ARITHMETIC OPERATORS(REMAINDERS) remaider is also called MODULO;

// console.log(11 % 3);

// console.log(12 % 3);


// STRING CONCATENTATIONS 

// console.log('hey' + ' ' + 'Anurag');

// console.log('I' + ' ' + 'love' + ' ' + 'Javascript');

// console.log('I am a ' + 'Coder');

// STRING CONCATENTATIONS (adding space at the end of the first string.)

// console.log('front ' + 'space');

// console.log('back' + ' space');

// console.log('no' + 'space');


// Just like with regular math, we can combine, or chain, our operations to get a final result:

// console.log('One' + ', ' + 'Two' + ', ' + 'Three!');


// PROPERTIES (.LENGTH)

// console.log('Anurag gavhane' .length);

// console.log('Sangita deepak gavhane' .length);

// console.log('Deepak gavhane' .length);

// METHODS OF JAVASCRIPT

// console.log('Hello' .toUpperCase()); //prints 'Hello' to "HELLO"

// console.log('Anurag' .toLowerCase()); //prints 'Anurag' to "anurag"

// console.log('Hey' .startsWith('H')); //prints true

// console.log(' Remove whitespace'.trim()); //trim 


// BUILT-IN OBJECTS  

// console.log(Math.random()); //prints a random variable between 0 t0 1 

// Math.random() * 50;  //prints a random number between 0 and 50, we could multiply this result by 50

// Math.floor(Math.random() * 50);  //Math.floor() takes a decimal number, and rounds down to the nearest whole number. You can use Math.floor() to round down a random number like this:

// console.log(Math.floor(Math.random() * 50)); //prints a random whole number between 0 and 50.

// //Math.ceil() fiunction
// // The Math.ceil() function always rounds a number up to the next largest integer.

// console.log(Math.ceil(.95)); // expected output: 1

// console.log(Math.ceil(523.369874)); //expected outpu: 524


// //Number
// // Number is a primitive wrapper object used to represent and manipulate numbers like 37 or -9.25.

// console.log(Number('2017')); 

// console.log(Number.isInteger(25)); // prints true 


//CHAPTER 2 VARIABLE 
// Creating a Variable

// var myName = ('Anurag');
// console.log(myName); //prints Anurag
  
// var favoriteFood = 'pizza';
// var numOfSlices = '8';
// console.log(favoriteFood); //prints pizza
// console.log(numOfSlices); //prints 8


//CREATE A VARIABLE: (let) 

// let meal = 'Capcicum';
// console.log(meal); //prints capcicum

// meal = 'Coffee';
// console.log(meal.toUpperCase()); //prints COFFEE

// let changeMe = true;
// changeMe = false;

// console.log(changeMe)


// const myName = 'gilberto';
// console.log(myName); //output:Gilberto 

// const entree = 'Enchiladas';

// entree = 'tacos';

//Mathematical Assignment Operators

// let w = 4;
// w = w + 1;

// console.log(w); //output: 5  The following line, w = w + 1, increases the value of w from 4 to 5.

// let w = 5;
// w += 1;

// console.log(w);

// let x = 8;
// x *= 5; //can be written as x =  x * 5

// console.log(x);

// let y = 56;
// y -= 23; //cn be written as y = y - 23

// console.log(y);

// let z = 45;
// z /= 2; //can be written as z = z / 2

// console.log(z);


//QUESTIONS
//Use the += mathematical assignment operator to increase the value stored in levelUp by 5.

// let levelUp = 10;

// let powerLevel = 9001;

// let MultiplyMe = 32;

// let quarterMe = 1152;

// levelUp += 5;

// powerLevel -= 100;

// MultiplyMe *= 11;

// quarterMe /= 4;


//  console.log('the value of levelUp',levelUp);

//  console.log('the value of poewrLevel',powerLevel);

//  console.log('the value of multiplyme',MultiplyMe);

//  console.log('the value of quarterMe',quarterMe);


//The Increment and Decrement Operator 
//increment operator (++)


// let a = 11;
// a++;
// console.log(a);

// let b = 54;
// b++;
// console.log(b);

// let c = 1000;
// c++;
// console.log(c);

// //decrement operator

// let x = 45;
// x--;
// console.log(x);

// let y = 100;
// y--;
// console.log(y);

// let z = 889;
// z--;
// console.log(z);

// let gainedDollar = 55;
// gainedDollar++;
// console.log(gainedDollar);

// let lostDollar = 70;
// lostDollar--;
// console.log(lostDollar);

//String Concatenation with Variables

// let myPet = 'Arihant';
// console.log('I own a pet ' + myPet + '.');

// let myName = 'Anurag';
// console.log('My name is ' + myName + '.');

//String Interpolation.

// Check out the following example where a template literal is used to log strings together:
// Inside the template literal, you’ll see a placeholder, ${myPet}. The value of myPet is inserted into the template literal.

// const myPet = 'Squirell';
// console.log(`I own a pet ${myPet}.`);


// //  Use a single template literal to interpolate your variables into the sentence below. Use console.log() to print your sentence to the console in the following format: My name is NAME. My favorite city is CITY.

// let myName  = 'Anurag';
// let myCity = 'Los Vegas';

// console.log(`My name is ${myName}. My favorite city is ${myCity}.`);

// // typeof operator  While writing code, it can be useful to keep track of the data types of the variables in your program.

// const unknown1 = 'watch';
// console.log(typeof unknown1); // prints string

// const unknown2 = 'fucked up';
// console.log(typeof unknown2); // prints string

// const unknown3 = true;
// console.log(typeof unknown3); // prints Boolean

// let unknown4 = 24;
// console.log(typeof unknown4);  //prints number 

//KELVIN WEATHER 

// const KELVIN = 293;
// // in above line we create a variable named kelvin and assingned it a operator const.

// const celsius = KELVIN - 273;
// // for converting kelvin to celcius by subtarcting 273 from the kelvin to cecius.

// let fahrenheit = celsius * (9 / 5) + 32;
// // to calculate farenhite we are using this above equation.

// fahrenheit = Math.floor(fahrenheit);
// //we will use .floor() method to round down the farenheit temprature.

// console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

// // now if i reassigned the value of kelvin to 0 then the 0 is equivalent to -460 degrees fahremnheit.

// const KELVIN = 56;

// const celsius = KELVIN - 273;

// let fahrenheit = celsius * (9 / 5) + 32;

// fahrenheit = Math.floor(fahrenheit);

// console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

// // converting celcius to Newton

// let Newton = celsius * (33 / 100);

// //Round down
// Newton =Math.floor(Newton);

// console.log(`The temprature is ${Newton} degrees Newton.`);

// If STATEMENT 

// if(true) {
//     console.log('My name is Anurag.');
// }

// //creating a let variable and assiging it a value true.

// let sale = true

// // if i declare sale value to false then the statement will not be printed 

// sale = false

// // creating and if statement provide if statement condition sale.
// //and inside the console.log() writethe sring ' time to buy jordan!'

// if (sale) {
//     console.log('Time to but jordan!');
// }

// // if....Else statements..
//  if(false) {
//     console.log('the code is this block will not run.');
//  } else {
//     console.log('the code in this block will run.' .toUpperCase());
//  }
//  logical operators 
// and operator, or operator, bang operator or not operators 

// let mood = 'sleepy';
// let tirednessLevel = 6;
// if (mood === 'sleepy' && tirednessLevel > 8) {
//     console.log('time to sleep');
// } else {
//     console.log('not bed time yet');
// }

// // Truthly and Falsy

// let myVariable = 'I exists!';

// if (myVariable) {
//     console.log(myVariable);
// } else {
//     console.log('the variable does not exist!');
// }

// let numberOfPeoples = 0; // here 0 define falsy value in else statement.

// if (numberOfPeoples) {
//     console.log('How many numbers of peoples.');
// } else {
//     console.log('There are no peoples in that area.');
// }

// // truthly and Falsy Assignment

// let username = '';
// let defualtName;

// if (username) {
//     defualtName = username;
// } else {
//     defualtName = 'Stranger';
// }

// console.log(defualtName); // prnts stranger.

// let firstname = '';
// let surName;
//  if (firstname) {
//     surName = firstname;
//  } else {
//     surName = 'Gavhane';
//  }

// console.log(surName); // prints Gavhane.

// comn=bining the logical operators we aca use short hand code above
// in boolean conditions javascript assigns the truthly value to the variable.

// let username = '';
// let defualtName = username || 'Anurag';

// console.log(defualtName); // prints Anurag.

// // ternary Oerator (for true conditions)

// let isNightTime = true;

if (isNightTime) {
    console.log('Turn on the lights.');
} else {
    console.log('Turn of the lights.');
}

// Either we can use ternary operator to perform the same functionally:

