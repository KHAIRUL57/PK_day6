// filter
const filterWord = [
    "javascript",
    "crud",
    "reactNative",
    "camelCase",
    "variable",
    "nodejs",
    "express"
]

const longItWord = filterWord.filter((kata) => kata.length > 6 )
console.log(longItWord)

// map
let array = [1, 2, 3, 4, 5]
const newArray = array.map((x) => {
// console.log(x)
return x * 2
})
console.log(newArray)

// find
let number =[5, 12, 8, 130, 44]
let numberFond = number.find((number) => number > 10)
console.log(numberFond)

// foreach
let numberSword = ["one", "two", "three"]
let texts = ""
numberSword.forEach((number) => {
texts += number + ","
})
console.log("texts is :", numberSword)

// STRING METODE
let stringZealBatam = "Zeal Batam Indonesia"
let resultChartAt = stringZealBatam.charAt(0)
console.log("result charAt :", resultChartAt)

let resultChartAt2 = stringZealBatam.charAt(1)
console.log("result charAt :", resultChartAt2)

let resultChartAt3 = stringZealBatam.charAt(2)
console.log("result charAt :", resultChartAt3)

let resultLength = stringZealBatam.length
console.log(resultLength)

let resultToUpperCase = stringZealBatam.toUpperCase()
console.log(resultToUpperCase)

let resultTolowerCase = stringZealBatam.toLowerCase()
console.log(resultTolowerCase)

let resultSplit = stringZealBatam.split(" ")
console.log(resultSplit)
resultSplit = stringZealBatam.split(" ", 2)
console.log(resultSplit)

let resultReplace = stringZealBatam.replace("Batam", "Kepulauan Riau")
console.log(resultReplace)

let resultSubstr = stringZealBatam.substr(0, 6)
console.log(resultSubstr)
resultSubstr = stringZealBatam.substr(0, 3)
console.log(resultSubstr)

// array methods
console.log("array methods")
let zealBatamArray = ["Zeal", "Batam", "Indonesia"]
let resultArrayLength = zealBatamArray.length
console.log(`result ArrayLength is ${resultArrayLength}`)

resultArrayIndexOf = zealBatamArray.indexOf ("Batam")
console.log(resultArrayIndexOf)

resultArrayIndexOf = zealBatamArray.indexOf ("Indonesia")
console.log(resultArrayIndexOf)

zealBatamArray.push("web")
console.log(zealBatamArray)

zealBatamArray.pop()
console.log(zealBatamArray)

let resultArrayJoin = zealBatamArray.join("--")
console.log(resultArrayJoin)

resultArraySlice = zealBatamArray.slice(1)
console.log(resultArraySlice)

resultArraySlice = zealBatamArray.slice(1, 2)
console.log(resultArraySlice)

zealBatamArray.sort()
console.log(zealBatamArray)

zealBatamArray.reverse()
console.log(zealBatamArray)

// math methods
let resultMathRandom = Math.random()
console.log(resultMathRandom)

let resultMathCeil = Math.ceil(2.5)
console.log(resultMathCeil)

let resultMathFloor = Math.floor(1.9)
console.log(resultMathFloor)

let resultMathFloorRound = Math.round(2.4)
console.log(resultMathFloorRound)
resultMathFloorRound = Math.round(2.5)
console.log(resultMathFloorRound)

// object
let object1 = { fname: "John" }
let object2 = { lname : "Doe" }
let object3 = { age: 30 }

let object4 = { ...object1, ...object2, ...object3 }
console.log(object4)

let object5 = { object1, object2, object3 }
console.log(object5)

let resultObjectKeys = Object.keys(object5)
console.log(resultObjectKeys)

// // timing methods
// function firstFunction() {
//     let count = 0
//     setInterval(() => {
//         count ++
//         // alert(`this is setInterval & already show in ${count} time`)
//     }, 3000)
// }

// firstFunction()

// function secondFunction() {
//     setTimeout (() => {
//         alert ("this is set timeout")
//     }, 3000)
// }

// secondFunction()

// fetch
fetch("https://jsonplaceholder.typicode.com/posts", 
{
    mode: "cors",
    headers: {
        "Content-Type": "aplication/json",
    },
    })
    .then((response) => {
        console.log(response.json())
    })
    .catch((err) => {
        console.log(err)
    })