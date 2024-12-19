// K-TASK: 

// Shunday function yozing, u string qabul qilsin va string ichidagi unli harflar sonini qaytarsin.
// MASALAN: countVowels("string") return 1;


//1-Usul
function countVl(str:string){
    return str.toLowerCase().split('').filter(char => 'aeiou'.includes(char)).length
}

// console.log(countVl("stringaa"))


//2-Usul
const unli = (str:string) => {
    let vl = ['a','e','u','i','o']
    let st = str.toLowerCase()
    let count = 0
    for(let i of str){
        if(vl.includes(i)){
            count++
        }
    }return count
}

console.log(unli('straing'))