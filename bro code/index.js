//console.log("hello ");
//console.log("today was a good day!");
//window.alert("it was really A GOOD DAY!");

/*let fname = "mav";
let age = 22;

console.log("hello ", fname);
console.log("you're ", age, " years old");

document.getElementById("p1").innerHTML = "Hello " + fname;
document.getElementById("p2").innerHTML = "You're " + age + " years old";*/

/*let students = 30;

//students = students + 1;

//students -= 2;

result = students + 2 + 3 + (4 + 5);

console.log(result);
*/

//let fname = window.prompt("enter your name");

// console.log(fname);
/*let username;
document.getElementById("button").onclick = function () {
  username = document.getElementById("fname").value;
  console.log(username);
  document.getElementById("label").innerHTML = "hello " + username;
};

//////////////////DATA CONVEERTER

let age = window.prompt("how old a re you?");
age = Number(age);
age += 1;
console.log("happy birthday! you're  ", age, " years old21");
*/

//////////////////// js CONST
/*const PI = 3.14159; 
let radius;
let circumference;

radius = window.prompt("Enter the RADIUS!");
radius = Number(radius);

circumference = 2 * PI * radius;

console.log(" The circumference is ", circumference);
*/
/////////////////MATH

/*let x = 3.38;
let y = 4;
let z = 8;

//x = Math.round(x);
//x = Math.floor(x);
//x = Math.ceil(x);
//x = Math.pow(x, 2);
//x = Math.sqrt(x, 2);
//x = Math.max(x, y, z);
x = Math.min(x, y, z);
console.log(x);
*/

////////////////HYPOTenues calulation
/*let a;
let b;
let c;

a = window.prompt("Enter side A ");
a = Number(a);

b = window.prompt("Enter side B");
b = Number(b);

c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

console.log("side c:", c);
*/

///////// hypotenues using HTML
/*document.getElementById("button").onclick = function () {
  a = document.getElementById("atextbox").value;
  a = Number(a);

  b = document.getElementById("btextbox").value;
  b = Number(b);

  c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

  document.getElementById("labelc").innerHTML = "Side C: " + c;
};
*/
//////////////// NUMBER COUNTER
/*document.getElementById("decbutton").onclick = function () {
  count -= 1;
  document.getElementById("countlabel").innerHTML = count;
};

document.getElementById("rebutton").onclick = function () {
  count = 0;
  document.getElementById("countlabel").innerHTML = count;
};

document.getElementById("incbutton").onclick = function () {
  count += 1;
  document.getElementById("countlabel").innerHTML = count;
};*/

/////////////RANDOM NUMBER GENERATOR
/*document.getElementById("button").onclick = function () {
  let x = Math.floor(Math.random() * 6 + 1);
  let y = Math.floor(Math.random() * 6 + 1);
  let z = Math.floor(Math.random() * 6 + 1);

  document.getElementById("xlabel").innerHTML = "Your  first Number:   " + x;

  document.getElementById("ylabel").innerHTML = "Your second Number: " + y;

  document.getElementById("zlabel").innerHTML = "Your third Number: " + z;
};
*/
/////////////USEFULL STRING PROPERTY

/*let username = "    mvAerick  ";
let phnum = "123-453-675";

//console.log(username.length);
//console.log(username.charAt(97));
//console.log(username.indexOf("i"));
//username = username.trim();
//username = username.toLowerCase();

phnum = phnum.replaceAll("-", "");
console.log(phnum);*/

///////////////////STRING SLICING METHOD!

/*let Fullname = "Mahesh KN";
let Fname;
let Lname;
Fname = Fullname.slice(0, 6);
Lname = Fullname.slice(7);

console.log(Fname);
console.log(Lname);*/

///////////////////METHOD CHAINING
/*let Name = "3rgvrejrfj";

letter = Name.charAt(5).toUpperCase();

console.log(letter);*/

//////////////////////// IF STATEMENT
/*let age = 32;

if (age >= 60) {
  console.log("You are a Senior citizen!");
} else if (age >= 18) {
  console.log("You are an Adult!");
} else if (age < 0) {
  console.log("YOU are still a sperm");
} else {
  console.log("You are a Child!");
}*/

/*let online = false;
if (online) {
  console.log("you are online");
} else {
  console.log("you are offline");
}*/

//////////////////////////CHECKED PROPERTY

/*document.getElementById("button").onclick = function () {
  const checkbox = document.getElementById("mycheckbox");
  const visabtn = document.getElementById("visabtn");
  const masterbtn = document.getElementById("masterbtn");
  const slicebtn = document.getElementById("slicebtn");

  if (checkbox.checked) {
    console.log("youre redy to go!");
  } else {
    console.log("please click on agree!\n and continue ");
    //document.getElementById("checklabel").innerHTML =
    //"*PLease click on agree and continue!";
  }
  if (visabtn.checked) {
    console.log("You are paying with VISA!\nThank you");
  } else if (masterbtn.checked) {
    console.log("You are paying with Master card!\nThank you");
  } else if (slicebtn.checked) {
    console.log("You are paying with Slice card!\nThank you");
  } else {
    console.log("please select an payment option");
  }
};
*/
//////////////////////SWITCHES
/*document.getElementById("subbtn").onclick = function () {
  let grade = "F";

  if (grade == "A") {
    document.getElementById("mylabel").innerHTML = "you did great!";
  } else if (grade == "B") {
    document.getElementById("mylabel").innerHTML = "you did good!";
  } else if (grade == "C") {
    document.getElementById("mylabel").innerHTML = "you did OK!";
  } else if (grade == "D") {
    document.getElementById("mylabel").innerHTML = "you are PASSED! barely";
  } else if (grade == "F") {
    document.getElementById("mylabel").innerHTML = "FAILED";
  } else {
    document.getElementById("mylabel").innerHTML = "NOt a Grade Letter!";
  }
};*/

/////////////////SAME BUT USING SWITCH
/*document.getElementById("subbtn").onclick = function () {
  let grade = 49;
  switch (true) {
    case grade >= 90:
      document.getElementById("mylabel").innerHTML = "you did great!";
      break;
    case grade >= 75:
      document.getElementById("mylabel").innerHTML = "you did Good!!";
      break;
    case grade >= 60:
      document.getElementById("mylabel").innerHTML = "you did OK!!";
      break;
    case grade >= 50:
      document.getElementById("mylabel").innerHTML = "you Passed.... barely!!";
      break;
    case grade > 50:
      document.getElementById("mylabel").innerHTML = "Failed!";
      break;
    default:
      document.getElementById("mylabel").innerHTML =
        grade + " Is not a letter grade!";
  }
};*/
//////////////////AND OR logic
//AND =&&
//OR = ||
//NOT - !

/*let temp = 5;
let sunny = false;

if (temp > 0 && temp < 30 && sunny) {
  document.getElementById("mylabel").innerHTML = "weather is BAD!";
} else {
  document.getElementById("mylabel").innerHTML = "weather is GOOD!";
}
*/
/////////////WHILE LOOP
/*let uname = "";

while (uname == "" || uname == null) {
  uname = window.prompt("Enter username!");
}
document.getElementById("mylabel").innerHTML = "Hello! " + uname;
*/
////////////////////DO WHILE LOOP
/*let uname = "";

do {
  uname = window.prompt("Enter username!");
} while (uname == "" || uname == null);
document.getElementById("mylabel").innerHTML = "Hello! " + uname;
*/
//////// FOR LOOP

/*for (let i = 100; i >= 1; i -= 1) {
  console.log(i);
}
console.log("yay");
*/
/// BREAK AND CONTINUE
/*

for (let i = 1; i <= 20; i += 1) {
  if (i == 13) {
    break;
  }

  console.log(i);
}*/

//////////////NESTED loops
/*
function rectangle(){
let symbol = window.prompt("Enter symbol  ");
let rows = window.prompt("Enter number of Rows!");
let columns = window.prompt("Enter number of columns!");
for (let i = 1; i <= rows; i += 1) {
  for (let j = 1; j <= columns; j += 1) {
    document.getElementById("myrect").innerHTML += symbol;
  }
  document.getElementById("myrect").innerHTML += "<br >";
}
}
*/
////////////////FUNCTIONS
/*
start();
function start() {
  let age = 12;

  let name = "BRO ";
  happybirthday(name, age);
}

function happybirthday(n, a) {
  console.log("Happy birthday TO YOU!");
  console.log("Happy birthday TO YOU!");
  console.log("Happy birthday TO YOU dear!");
  console.log("Happy birthday", n, "TO YOU!");
  console.log("Happy ------", a, "-------- TO YOU!");
}*/
/////////////////////////     RETURN
/*

let area;
let height;
let width;

width = window.prompt("Enter width");
height = window.prompt("Enter height");

area = findArea(width, height);

console.log("the area is ", area);

function findArea(width, height) {
  return width * height;
}*/
///////////////////////////TERNARY OPERATION
/*
checkwin(false );
function checkwin(win) {
  win ? console.log("YOU WIN!") : console.log("YOU LOSE!");
}
*/
///////////////////variable scope

////////////template literals
/*
let uname = "Mav";
let items = 13;
let total = 25;

//console.log("Hello", uname, "!");
//console.log("You have", items, "items in your cart!");
//console.log("Your toltal is Rs", total);

//console.log(`hello!${uname}`);
//console.log(`You have${items} items in your cart`);
//console.log(`your totalis ${total}`);

let bill = `hello!${uname}<br>
You have${items} items in your cart! <br> 
your totalis ${total}`;

document.getElementById("mylabel").innerHTML = bill;
 */
//let mynum = 1;

//mynum = mynum.toLocaleString("de-DE");

//mynum = mynum.toLocaleString("en-US", { style: "currency", currency: "EUR" });
//mynum = mynum.toLocaleString(undefined, { style: "unit", unit: "celsius" });

//mynum = mynum.toLocaleString(undefined, { style: "percent" });
//console.log(mynum);

/////////////////////////Number guessing game
/*
const answer = Math.floor(Math.random() * 10 + 1);

let guesses = 0;

document.getElementById("submit").onclick = function () {
  let guess = document.getElementById("guess").value;
  guesses += 1;

  if (guess == answer) {
    alert(`${answer} is the Number . It took you ${guesses} guesses`);
  } else if (guess < answer) {
    alert("Too small!");
  } else {
    alert("Too large");
  }
};
*/
////////////////
