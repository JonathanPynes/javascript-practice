//What is a pure function? Write a couple of them using Array.prototype.map  Write a couple impure functions.

const pureFunctionMap0 = (array) => {
    const mapArray = array.map((element) => element + 2)
       console.log(mapArray)
    }

let mutatableArray = [1,2,3,4,5]

const impureFunctionMap0 = () => {
    mutatableArray.map(element => element + 2)
    return mutatableArray.push(mutatableArray)
}

