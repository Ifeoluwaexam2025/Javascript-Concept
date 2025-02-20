// A  33function which gives the same output every time with the same input
// No reliance on global state 
// Does not modify anything outside the function
const users=[{
    name:'John',
    age:33
},{
    name:'Maxine',
    age :24
},{
    name:'Ted',
    age:12
},
]
const ageLimit = 18;
function checkAge(user) {
    return user.age >= ageLimit;
}
checkAge(users[0]);
checkAge(users[1]);
checkAge(users[2]);
// To convert to pure function
