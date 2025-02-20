const meteorites= require('./y77d-th95.json');

const newMeteorites=meteorites.filter(
    meteorite => parseFloat(meteorite.mass ) < 100)
    .map(meteorite=>meteorite.name);
// console.log(newMeteorites)


function getMeteoriteNamesWithLessorEqualMass(meteoriteData,mass){
    const massResult=[];
    for(let i=0; i<meteoriteData.length; i++){
        if(meteoriteData[i].mass<= mass){
            massResult.push(meteoriteData[i].name);
        }
    }
    return massResult;
}

let newerMeterites=getMeteoriteNamesWithLessorEqualMass(meteorites,100);
console.log(newerMeterites);