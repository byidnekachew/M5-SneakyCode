// Write a function in Python that checks if a number is even or odd.

console.log("Challenge 3a")
console.log()
usrNum = Number(prompt("Enter num: "))

function oddEven(num){
    if (num%2===0){
        return "Even"
    }
    else{
        return "Odd"
    }
}

console.log(oddEven(usrNum))