const values = [5, 11, 394, 2, 576];
values.splice(2, 1);
// task is to write a pure version of splice, called pureSplice
// it should accept the array as a parameter;
// Example const outputArray=pureSplice(values,2,1)
function pureSplice(inputArray,startingIndex,numberOfDeletedElements){
    let outputArray=[];
    for(let i=0; i< inputArray.length; i++){
        if(i<startingIndex || i>startingIndex+numberOfDeletedElements){
            outputArray.push(inputArray[i]);
        }
    }
    // return an array where the elements have been removed 
    return outputArray;
}
const originalValues = [5, 11, 394, 2, 576];
console.log(pureSplice(originalValues,2,0))
