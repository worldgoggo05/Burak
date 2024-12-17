// J-Task
// Shunday function yozing, u string qabul qilsin va string ichidagi eng uzun sozni qaytarsin.
//MASALAN: findLongestWord("I come from Uzbekistan") return "Uzbekistan"

function findLongestWord(str:string){
    let arr:string[] = str.split(' ')
    let longW:string= ""

    for(let char of arr){
        if(char.length> longW.length){
            longW=char
        }
        
    }return longW
}
console.log(findLongestWord("I come from Uzbekistan"))