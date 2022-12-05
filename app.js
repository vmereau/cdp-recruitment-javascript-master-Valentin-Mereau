const filter = require('./filter.js');
const count = require('./count.js');

const processArgs = process.argv.slice(2);
const mode = processArgs[0];

switch (mode) {

    case mode.match(/^--filter=/)?.input:
        const filterValue = mode.replace('--filter=','');
        if(filterValue){
            filter(filterValue);
        } else {
            console.log("Entrez une valeur pour filtrer. (ex: --filter=py)");
        }
        break;

    case "--count":
        count();
        break;

    default:
        console.log("Utiliser --filter=*value* ou --count");
}
