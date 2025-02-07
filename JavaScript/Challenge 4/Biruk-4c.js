// Create an array of numbers in Python and write a function to find the highest number in the array.

console.log("Challenge 4c")
console.log()

let nums = [6,12,8,4,36]

function highNum(lst){
    let x = lst[0]
    for(let i=0; i<lst.length; i++){
        if(x<lst[i]){
            x=lst[i]
        }
    }
    return x
}

console.log("Highest num: " + String(highNum(nums)))