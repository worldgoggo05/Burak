// F-Task

function findIndex(arr){
    let bigVal = Math.max(...arr)
    return arr.indexOf(bigVal)
}

console.log(findIndex([1,2,33,34,3,5,34]))