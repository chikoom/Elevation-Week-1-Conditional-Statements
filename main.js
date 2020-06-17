
// Exercise 1
exDivider(1);

let numChildren = prompt("How many children?");

let isCareful = false;

if(!isCareful){
  ++numChildren
}

console.log("new number of children: "+numChildren)


// Exercise 2
exDivider(2);

let silverwareCount = prompt("How many silverware?");

if(silverwareCount%2){
  console.log('some silverware is missing');
}

// Exercise 3
exDivider(3);

let performance = "stellar"
let salary = 10000
const goodBonus = 1000
const stellarBonus = 3000

if(performance === "stellar"){
  salary+=stellarBonus;
}else if(performance === "good"){
  salary+=goodBonus;
}

// Exercise 4
exDivider(4);

const isVIP = false
let cash = 500

if(isVIP || cash > 300){
  console.log("Welcome to the club")
}else{
  console.log("Sorry you can't get in")
}


// Exercise 5
exDivider(5);


const a = 3 // a = 3
let b = 2 // b = 2
let c = 0 || 12 // c = 12
let d // d = undefined

b = c // b = 12
b++ // b = 13
if(d){
  b = a
}

d = a + (b * c) // d = 3 + 13*12 = 159
d++ // d = 160
b += 2 // b = 15

// a = 3
// b = 15
// c = 12
// d = 160

console.log("a =  "+a);
console.log("b =  "+b);
console.log("c =  "+c);
console.log("d =  "+d);

// Exercise 6
exDivider(6);

let gender = null
let profession = "business"

business('male')
business('female')
business(null)

function business(gender){
  let profession = "business";
  if(gender === "male"){
    console.log(profession+'man');
  } else if(gender === "female"){
    console.log(profession+'woman');
  } else if (gender === null){
    console.log(null);
  }
}


// Exercise 7
exDivider(7);

let boughtTesla = true
const yearOfTeslaPurchase = 2016
let isUSCitizen = false
let currentYear = 2018

teslaBot(boughtTesla,yearOfTeslaPurchase,isUSCitizen,currentYear)

function teslaBot(boughtTesla, yearOfTeslaPurchase, isUSCitizen, currentYear ){
  if(boughtTesla){

    if(isUSCitizen){

      if(currentYear-yearOfTeslaPurchase >= 4){
        console.log('Would you like to upgrade your TESLA?');
      } else {
        console.log('Are you setisfied with your TESLA?');
      }

    } else {

      console.log('Would you like to move to the US?');

    }

  } else {
    console.log('Would you like to buy a TESLA?');
  }
}




function exDivider(number) {
  console.log(" ");
  console.log(" ");
  console.log("==========================");
  console.log("Exercise " + number);
  console.log("==========================");
  console.log(" ");
}