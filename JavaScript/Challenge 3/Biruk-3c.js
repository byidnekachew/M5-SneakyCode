// Write a function in Python that accepts a string and returns the number of vowels in the string.

console.log("Challenge 3c")
console.log()

let strn = prompt("Enter text").toLowerCase()

function vowels(text){
    let x = 0
    for (let i=0; i<text.length; i++) {
        if(['a','e','i','o','u'].includes(text[i])){
            x+=1
        }
    }
    return x    
}

console.log(vowels(strn))