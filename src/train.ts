// L-Task
// Shunday function yozing, u string qabul qilsin va string ichidagi hamma sozlarni chappasiga yozib va sozlar ketma-ketligini buzmasdan stringni qaytarsin.
// MASALAN: reverseSentence("we like coding") return "ew ekil gnidoc";


//1
function revSen(str:string){
    let st = str.split(' ')
    return st.map(a=> a.split('').reverse().join('')).join(' ')
}

console.log(revSen("we like coding"))


//2
function revSent(str:string):string{
    return str
        .split(' ')
        .reduce((acc,val )=> acc+ ' ' +[...val].reverse().join(''), '')
        .trim()
}

// console.log(revSent("we like coding"))