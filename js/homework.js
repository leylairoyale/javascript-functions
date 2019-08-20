//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

function findWords(){
    let oji = new Array(dog_string)
    let oji2 = oji.slice(",", oji.length)
    console.log(oji2)
    for(let dog of dog_names){
        for(let word of oji2){
            console.log(word)
        if(dog == word){
            console.log("Matched" + dog)}
        else{
            console.log("No Matches")}
        }
    }
}

function tryAgain(){
    let aha = new Array(dog_string)
    for(let dog of dog_names){
        if(aha[0].search(dog)){
            console.log("Matched" + dog)
        }
        else{
            console.log("No Matches")
        }
    }
}

// Joel's version of the above code

// i is the counter for a for loop. you can have it be anything
// but i is standard. you ALwAYS need that.
// in the below code. it doesn't go through everything, but is the counter for whatever length.
// what it's goign through is in the dog_string.includes

function joelWords(name, lnames){
    for(let i = 0; i < name.length; i++){
        if(name.includes(lnames[i])){
            console.log("its a macchh buddey")
        }
        else{
            console.log("nopity nope")
        }
    }
}

//Call method here with parameters

//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

function replaceEvens(arr){
    for(let i = 0; i <arr.length; i++){
        if(arr[i] % 2 == 0){
            console.log(arr.splice(arr[i], i, "even stevens"))
        }
    }
};


 







//     let i = 0
//     do {
//         arr[i].splice("it's an even index!!!!")
//         i ++
//     }
//     while(arr[i] % 2 === 0)
// }



//Expected output
arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]