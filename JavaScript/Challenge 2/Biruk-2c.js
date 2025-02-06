// Write a program in Python that calculates the factorial of a given number using a loop.

console.log("Challenge 2c")
console.log()
let num = Number(prompt("Enter num: "))
let x = 1
for(let i=1; i<=num;i++){
    x*=i
}
console.log(String(num) + "! = " + String(x))