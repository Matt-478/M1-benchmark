// JS

// 27) Wrote a function to get the MAX and the MIN from the previously created array
// 28) Create an array of arrays, in which every array has 10 random numbers
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




// DOM

// 31) Get element with ID "container" from the page
// 32) Get every "td" from the page

// 33) !DONE    Create a cycle that prints the text inside every td of the page

// 34) Write a function to change the heading of the page
// 35) Write a function to add an extra row to the table

// 36) Write a function to add the class "test" to each row in the table

// 37) Write a function to add a red background to every link in the page
// 38) Console log "Page loaded" when the page is correctly loaded
// 39) Write a function to add new items to a UL
// 40) Write a function to empty a list


// didn't have one, so I added and ID to a div
let containerNode = document.querySelector("#container")

let everyTDNode = document.getElementsByTagName("td")

const changeHeading = function() {
  let heading = document.getElementsByTagName('h1')[0]
  heading.style.color = "red"
}

const addAnotherRow = function() {
  let table = document.querySelector("table")
  let row = table.insertRow(4);
  let cell1 = row.insertCell(0);
  let cell2 = row.insertCell(1);
  let cell3 = row.insertCell(2);
  let cell4 = row.insertCell(3);
  let cell5 = row.insertCell(4)
  cell1.innerHTML = "More cells";
  cell2.innerHTML = "More cells";
  cell3.innerHTML = "More cells";
  cell4.innerHTML = "More cells";
  cell5.innerHTML = "More cells";
}