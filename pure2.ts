const values: number[] = [533,235,223,56,88,2,6,88,664];
const minimum = pureMinValue(values);
console.log(minimum); // 2

function pureMinValue(searchTargetArray: number[]): number | null {
    if (searchTargetArray.length === 0) return null;
    
    let min = searchTargetArray[0];
    for(let i = 1; i < searchTargetArray.length; i++) {
        if(searchTargetArray[i] < min) {
            min = searchTargetArray[i];
        }
    }
    return min;
}
