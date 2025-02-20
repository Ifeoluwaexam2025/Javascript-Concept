// In javascript we have about 5 main concepts in which the others add or revolve around
// Variables is among the very first concept. We use keywords let,var and const to describe them.Examples are 
let variable1= age;
let variableAge=21;
const variable2= age;
const variableAge2=21;
var variable3= age;
var variableAge3=21;

// We also have the arrays which uses square bracket denotation.
let array1contain=['string','string','string'];
const arrayNummbers=[2,5,6,7,8];
// we have functions, conditionals and loops.
function sumofVariable123(){
    return variableAge+variableAge2+variableAge3
}

// conditionals if,if else ,if elseif


if(variable1===age){
    variable1===21
}
if(variable2===age){
    return true
}else{false}
if(variable3===age){
    variable3===9
}elseif(variable1===null);{
    variable1=2}
    
// loops
for(let i=0; i<array1contain.length;i++){
    if(array1contain===null){array1contain[i]=5}
}
// objects
const person={
    name:Joseph,
    age:19,
    affliation:OAMK,
}
// THE ABOVE IS AN EXAMPLE OF AN OBJECT
// LET'S SAY WE NEED ALOT OF PERSON OBJECTS, IT WOULD BE AN HASSLE TO CREATE THEM ALL MANUALLY,
// FOR THAT WE NEED CLASSES
class PersonObject{
    constructor(name,age,affliation){
        this.name=name;
        this.age=age;
        this.affliation;
    }
}
