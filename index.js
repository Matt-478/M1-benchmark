//         JS EXERCISES

// 21) Given variable x = "John" and y = "Doe", write on the console log "John <> Doe"
// 22) Create an object with properties such name, surname, email
// 23) Delete Email from the previously created object
// 24) Create an array with 10 strings in it
// 25) Print in the console every string in the previous array
// 26) Create an array with 100 random numbers in it

// 27) Wrote a function to get the MAX and the MIN from the previously created array
// 28) Create an array of arrays, in which every array has 10 random numbers

// 29) Create a function that gets 2 arrays and returns the longest one
// 30) Create a function that gets 2 arrays of numbers and returns the one with the higher sum of values


let x ="John"
let y = "Doe"
console.log(`${x} <> ${y}`)

let userProperties = {
  name: "Matt",
  surname: "Bones",
  email: "potatoFactory67@gmail.com",
  hasDriversLicence: true,
  age: 27
}

delete userProperties.email

let myArryOfTenStrins = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]

for(let i=0; i< myArryOfTenStrins.length; i++) {
  // console.log(myArryOfTenStrins[i]) 
}


for(let i=0; i<=100; i++ ) {
  // console.log(i)
}

// 27 !DONE

// 28 !DONE
let containerArray = []

for(let i=0; i< containerArray.length;i++) {
  for (let j = 0; j<10; j++){
    let randomNums = Math.floor(Math.random()*10)
    randomNums.push(containerArray)
    }
  }


  // 29 
  const returnLongestArray = function(arr1, arr2) {
    if(arr1.length > arr2.length) {
      return console.log(arr1 + " is the longest array!")
    } else {
      return console.log(arr2 + " is the longest array!")
    }
  }
// Only issue - console logs array values instead of array name

  // 30 !DONE   Create a function that gets 2 arrays of numbers and returns the one with the higher sum of values
let firstArray = [1,2,3,4]
let secondArray = [2,4,6,8]

const higherSumValue = function(arr1) {
  let sum = 0;
  for (let i = 0; i < arr1.length; i++) {
    sum = sum + arr1[i];
  }
  console.log(sum)
  // can call returnLongestArray()
}
console.log(higherSumValue(secondArray))
