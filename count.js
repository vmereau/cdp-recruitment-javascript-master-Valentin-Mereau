const data = require('./data.js');

function count(){
    console.log("Mode -> Comptage");

    for (let town of data) {
        town.name = appendNumberOfChildToObjectName(town.name, town.people);
        for (let person of town.people) {
            person.name = appendNumberOfChildToObjectName(person.name, person.animals);
        }
    }

    console.log(JSON.stringify(data, null, 2));
}

module.exports = count;

function getObjectChildCount(object){
    return Object.keys(object).length;
}

function appendNumberOfChildToObjectName(name, childList){

    return name + " [" + getObjectChildCount(childList) + "]";
}
