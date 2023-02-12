
const startAtMiddleForward = (arr) =>{
  let start = null
  if((arr.length-1) % 2 === 0){
    start = (arr.length-1)/2
  }
  if((arr.length-1) % 2 !== 0){
    start = Math.ceil(((arr.length-1)/2))
  }
  let newArray = []
  for(let i = start; i < arr.length; i++){
    newArray.push(arr[i])
  }
  return newArray
}

const startAtMiddleBackward = (arr) =>{
  let start = null
  if((arr.length-1) % 2 === 0){
    start = (arr.length-1)/2
  }
  if((arr.length-1) % 2 !== 0){
    start = Math.floor(((arr.length-1)/2))
  }
  let newArray= []
  for(let i = start; i >= 0; i--){
    newArray.push(arr[i])
  }
  return newArray
}

const startAtTheEndAndMoveBackwards = (arr) =>{
  let newArray = []
  for(let i = arr.length-1; i>=0; i--){
    newArray.push(arr[i])
  }
  return newArray
}

const startRegular = (arr) =>{
  let newArray =[]
  for(let i = 0; i< arr.length ; i++){
    newArray.push(arr[i])
  }
  return newArray
}

const startEveryOther = (arr) =>{
  let newArray = []
  for(let i = 0; i<arr.length;i++){
    if(i % 2 == 0){
      newArray.push(arr[i])
    }
  }
  return newArray
}

// let array = ['red', 'blue', 'green', 'yellow', 'orange', 'white', 'black', 'purple']
let array = ['red', 'blue', 'green', 'yellow', 'orange', 'white', 'black']


// console.log(startRegular(array))
// console.log(startEveryOther(array))
// console.log(startAtTheEndAndMoveBackwards(array))
// console.log(startAtMiddleForward(array))
// console.log(startAtMiddleBackward(array)) 

