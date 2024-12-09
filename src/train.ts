// H-Task

function getPositive(arr:number[]):string{
    return arr.filter(a => a > 0).join("")
}

console.log(getPositive([-21,15,67]))

