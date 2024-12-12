// I-Task
// Shunday function yozing, u parametridagi array 
// ichida eng kop takrorlangan raqamni topib qaytarsin.
// MASALAN: majorityElement([1,2,3,4,5,4,3,4]) return 4


function majorNum(arr: number[]): number {
    const FreqMap: { [key: number]: number } = {};
    
    for (const num of arr) {
        FreqMap[num] = (FreqMap[num] || 0) + 1;
    }

    let maxCount: number = 0;
    let freqInt: number | null = null;

    for (const num in FreqMap) {
        if (FreqMap[num] > maxCount) {
            maxCount = FreqMap[num];
            freqInt = Number(num);
        }
    }
    return freqInt as number;
}