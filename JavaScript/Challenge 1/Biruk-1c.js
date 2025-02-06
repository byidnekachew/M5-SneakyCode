// Write a program in Python that checks if a number is positive, negative, or zero, and displays the appropriate message.

console.log("Challenge 1c")
console.log()
num = Number(prompt("Enter num: "))
if (num===0){
    console.log("Zero")
} else if(num<0){
    console.log("Negative num")
} else{
    console.log("Positive num")
}