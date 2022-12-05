const data = require('./data.js');

function filter(filterValue){
    console.log("Mode -> Filtre avec valeur: '" + filterValue + "'");

    // doing a not case-sensitive match on animals for each people in each town, filtering results and empty arrays afterwards as needed.
    for (let town of data) {
        for (let person of town.people) {
            person.animals = person.animals.filter( animal => animal.name.toLowerCase().includes(filterValue.toLowerCase()) === true);
        }
        town.people = town.people.filter( person => person.animals.length > 0);
    }
    const filteredValues = data.filter( town => town.people.length > 0);

    if(filteredValues.length > 0){
        console.log(JSON.stringify(filteredValues, null, 2));
    } else {
        console.log("Aucun animal n'a matché le pattern.")
    }
}

module.exports = filter;
