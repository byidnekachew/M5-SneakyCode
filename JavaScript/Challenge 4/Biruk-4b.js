// Write a program in Python that stores student names and their grades in a dictionary, and prints each student's name and grade.

console.log("Challenge 4b")
console.log()
let gradeLst = {
    'John' : 98,
    'Abby' : 56,
    'Stacey' : 73,
    'James' : 84
}

for(i=0; i < gradeLst.length;i++){
    console.log(i + ": " + String(gradeLst[i]))
}