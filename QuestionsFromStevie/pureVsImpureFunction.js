//What is a pure function? Write a couple of them using Array.prototype.map  Write a couple impure functions.

let array0 = [1,2,3,4,5]

//pure function, output is reliable.
const pureFunctionMap0 = (array) => {
    const mapArray = array.map((element) => element)
       console.log(mapArray)
    }


//impure because it changes a variable outside its scope.
const impureFunctionMap0 = (n) => {
  array0 = array0.map(element => element + n)
  return console.log(array0)
}

//pure function because it does not alter the array outside of its scope while using it.
const pureFunctionMap1 = (n) => {
    let newArray = [...array0.map(element => element + n)];
    return console.log("MutableArray: ", array0, "NewArray: ", newArray)
  }

//impure function because it changes an array outside of its scope
const impureFunctionMap1 = () => {
    array0.map(element => [array0.push(element)])
    return console.log("Array0: ", array0)
}



