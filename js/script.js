let box = 100;
let firstName = "Destiny";
let year = 2024;
let lastName = "Abumere";

year = 2023;

// let fullName = firstName+lastName;
// console.log(fullName);
// let x = 16 + "volvo";
// console.log(x);
// typeof(x);
// console.log(typeof x);
// let y = "benz" + 50 + 100;
// alert(y);

//strings;
let message = "he said,'Jesus wept'";

let fullName1 = `${firstName} ${lastName}`;
console.log(fullName1);

let name = "Destiny";
let facility = "Tech Creek";
let course = "FrontEnd Web Development";
let sentence = `${name} studies ${course} at ${facility}`; 
console.log(sentence);
const myuser = {
    firstname:"Destiny",
    lastname:"Abumere",
    yearofbirth:1900,
    eyecolour:"black",
    course:"Frontend Development",
    faculty: "Tech Creek",
    printfullname: function() {
        return this.firstname + " " + this.lastname;
    } 
        
};

myuser.friends = [
    "Rowland",
    "Codeplay",
    "Destiny",
    "Wealth",
]
myuser.friends[4]
console.log(myuser.friends[3])

console.log(myuser.printfullname())

let myfullname = myuser.printfullname();
console.log(myfullname);
// let age = 2024 - myuser.yearofbirth;
// console.log(age);

myuser.stateoforigin = "Edo state";
console.log(myuser);

myuser["localgovernment"] = "Esan Central";
console.log(myuser);

const numbers = [
    1,2,3,4,5,6,7,8,9,10
];

const Name = [
    "Rowland",
    "Codeplay",
    "Destiny",
    "Wealth",
];




let g = 2;
// let price = 300;
price += 100; // price = price+ 100;

// == equality (value)
// === strict equality (value and data type)
// !== not equal (value)
// !== not strictly equal

x = 2 !="2";//
x = 2 ==="2"//;
x = 2 !== "2";//
x = 2 !== 2;//
x = true !== 1;
y = null === undefined;

t = 10 <= 5;

//LOGICAL OPERATORS
//AND &&
//OR ||
//NOT !
//Nullish Coalescing  ??

//OR || if any of its operands is true; it result to true
// otherwise it results to false

alert(true || false); // true
alert(false || false) // false
alert(true || true )// true
alert(false || true) // true

let h = 11;
let m = 20;
if(h == 11 && m == 20){
    console.log("The time is 11:20")
}

if(1 && 0){
    alert("Is it falsy OR truthy")
}

alert(1 && 5);//5
alert(null && 5);//null
alert(0 && "hey");

let min = 30;
if(min < 40 || min > 45){
    console.log("hey")
}

// alert(null || 1);


//OR || if any of its operands is false; it result to false
// otherwise it results to true
alert(true && false); // false
alert(false && false) // false
alert(true && true )// true
alert(false && true) // false

//NOT !
// cONVERT THE OPERAND TO A BOOLEAN TYPE
// IT RETURNS THE INVERSE VALUE

// alert(!true);
alert(!0);
alert(!null);//1

//&& has a higher presidence than OR