// H2-Task

function getDigit(str:string):string{
    return str.split('').map(Number).filter(a=> !isNaN(a)).join('')
}

console.log(getDigit('mi19alex24'))

