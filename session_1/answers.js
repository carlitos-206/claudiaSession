// The array values are insignificant the main point is the scope of this variable
// since the variable does not exist within a function its global an can be access any point below it
// But even though its global it cannot be read above it 
// the code executes top to bottom
let values = [7, 2, 3, 14, 17, 20, 1]

// This is the ES6 version of function construction you can use any version you feel comfortable
// what matters is the logic

// loop name: for loop
const doubleTheValue = (array) =>{
  let newArray = []
  //       start    limit          iteration
  for(let i = 0; i < array.length; i++ ){
    newArray.push(array[i] * 2)
  }
  return newArray
}


// loop name: while loop
const whileLoop = (array) =>{
  let newArray = []
  // start
  let i = 0
  // limit
  while(i < array.length){
    // logic
    newArray.push(array[i])
    // iteration
    i++
  }
  return newArray
}

// loop name: do-while loop
const doWhileLoop = (array) =>{
  let newArray = []
  // start
  let i = 0
  do{
    // logic
    newArray.push(array[i])
    // iteration
    i++
  }while(i < array.length)
  return newArray
}

// loop name: for-of loop
const forOfLoop = (array) =>{
  let newArray = []
  // default: start at 0, limit to length of array and iterates by one

  //  this    ↓    can be anything  
  for(const value of array){
    newArray.push(value)
  }
  return newArray
}

//loop name: for-in loop
const forInLoop = (array) =>{
  let newArray = []
  // default: start at 0, limit to length of array and iterates by one

  //  this    ↓    can be anything 
  for(const value in array){
    newArray.push(array[value])
  }
  return newArray
}

// loop name: Map loop
const mapLoop = (array) =>{
  let newArray = []
  // default: start at 0, limit to length of array and iterates by one

  //  this    ↓    can be anything 
  array.map(value =>{
    newArray.push(value)
  })
  return newArray
}

// loop name: for-each loop
const forEachLoop = (array) =>{
  let newArray = []
  // default: start at 0, limit to length of array and iterates by one

  //  this         ↓    can be anything 
  array.forEach(value =>{
    newArray.push(value)
  })
  return newArray
}

// console.log(doubleTheValue(values))
// console.log(whileLoop(values))
// console.log(doWhileLoop(values))
// console.log(forOfLoop(values))
// console.log(forInLoop(values))
// console.log(mapLoop(values))
// console.log(forEachLoop(values))