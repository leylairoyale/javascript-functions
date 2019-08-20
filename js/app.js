// "use strict" if this is turned on, you can't see noon because it's
// an undefined variable. 

console.log("heyo wordlyboo")

var name = "Leyla"
noon = "Harrisio"
const boon = "Nick"

// name is a variable that you can change, hence my nonsense.

console.log(name)
console.log(noon)
console.log(boon)

// function keyword, function name, () to hold parameters
function addNums(){
    let num1 = 5
    let num2 = 5
    let result = num1 + num2
    console.log(result)

}
// call the function
addNums()

// creating a function wtih a parameter
// if you don't add in a parameter inside name, it takes the var of name
// if you put name there and type in name in the sandbox, it will resassign
// the var to that
function printName(){
    console.log(name)
    return name
}

let first = "ballon"
let last = "bagoo"

function makeName(first, last) {
    let result = first + last
    // return result.toLowerCase()
    // return result.toUpperCase()
    return result.split("")
}

// the below has Number as a Prototype. Like objects in Python, JS's object, 
// loosely, is a prototype. 
function multiplyNums(num1, num2){
    let result = num1 * num2
    // return Number.isInteger(result)
    return result.toString()
}

// Control flow in JS, else if

let number1 = 10;
let number2 = 32;

if(number1 > number2){
    console.log("TOO MANY DBDDBB!!!!!!!!!")
}
else if(number2 == number1){
    console.log("eh they same")
}
else{
    console.log("yes! we have no bananas")
}

// control flow with and (and= &&)
let number3 = 38
let number4 = 238

if(number3 > number4 && number3 < number2){
    console.log("boogers")
}
else{
    console.log("nobyoy")
}

// control flow with or (or= ||)

if(number3 > number4 || number3 < number2){
    console.log("orboard")
}
else{
    console.log("big ol elephant ors")
}

// Equal with same type: ===

// Ternary Operator statement 
// Works only for Booleans; left side of : is Fasle, right is True
let age = 29
let votable_age = (age < 18 ) ? "You're too young to vote.": "Old maaaan"
console.log(age)
console.log(votable_age)

// Working with Arrays
let groupname = ['Terry', 'Berry', 'Ash', 'Brock', 'Misty', 'Jesse', 'James']
let value = groupname.shift() //.shift() takes off first element in list
console.log(value)
let taste = groupname.pop()
console.log(taste)
// adding to an array
groupname.unshift("Bobbert")
console.log(groupname)

console.log("Length is: " , groupname.length)

// let peaches = []
// peaches.add(value, taste)

// Looping through an Array
// for(counter; expresssion; increment or decrement counter)

for(let i = 0; i < groupname.length; i++){
    console.log(groupname[i])
}

// for(let i = groupname.length -1; i > groupname.length; i--){
//     console.log("it got back now"groupname[i])
// }

// While loops!
let i = 0 
let text;

while(i<10){
    text += "this numaahhh iss" + i
    i ++
}
console.log(text)

// do while loop
do {
    text += "this numer is diss big" + i
    i++
}
while (i<10)
console.log(text)

// array slicing
let val1 = groupname.slice(0, groupname.length)
console.log("slicce1" + val1)
let val2 = groupname.slice(3,6)
console.log("slice2" + val2)

// array searching
console.log(groupname[0].search('o'))

// find char at specific index
console.log(groupname[0].charAt(2))

// find a type of object
console.log(typeof groupname[0])

// array splice method
groupname.splice(1,2,"freddie baby")
console.log(groupname)