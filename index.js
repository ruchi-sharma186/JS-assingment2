console.log("Q1.Find Grades");

let marks = prompt("enter your marks"); 
let grade;

switch (true) {
  case marks >= 41 && marks <= 50:
    grade = "A";
    break;
  case marks >= 31 && marks <= 40:
    grade = "B";
    break;
  case marks >= 21 && marks <= 30:
    grade = "C";
    break;
  case marks >= 11 && marks <= 20:
    grade = "D";
    break;
  case marks >= 0 && marks <= 10:
    grade = "E";
    break;

  default:
    grade = "fail";
    break;
}
console.log(grade);

 console.log("Q2. Get Value ");

 let values = prompt("Enter Charater:");

if (values) {
    

if (values=="P" || values=="p") {
    console.log("PrepBytes");
    
}
if (values=="Z" || values=="z") {
    console.log("Zenith");
}
if (values=="E" || values=="e") {
    console.log("Expert Coder");
}if (values=="D" || values=="d") {
    console.log("Data Structure");
}
}else{
    console.log("invalid Charater");
    
}
  
console.log("Q3. Find the maximum out of three numbers. ");

let A = 2;
let B = 5;
let C = 4;

if (A === B && B === C) {
    console.log(0);
} else {
    let max = Math.max(A, B, C);
    console.log(max);
}

console.log("Q4. Second Smallest");

let X = 2;
let Y = 9;
let Z = 27;


let secondSmallest;

if ((X > Y && X < Z) || (X > Z && X < Y)) {
    secondSmallest = X;
} else if ((Y > X && Y < Z) || (Y > Z && Y < X)) {
    secondSmallest = Y;
} else {
    secondSmallest = Z;
}
console.log(secondSmallest);


console.log(" Q5. Check whether the triangle is Acute or Obtuse");


let l = 60;  
let m = 100; 
let n = 20;  

// Check if the angles form a valid triangle
if (l + m + n !== 180) {
    console.log("Invalid triangle");
} else {
    // Check if the triangle is acute or obtuse
    if (l < 90 && m < 90 && n < 90) {
        console.log("acute");
    } else if (l > 90 || m > 90 || n > 90) {
        console.log("obtuse");
    }
}
 