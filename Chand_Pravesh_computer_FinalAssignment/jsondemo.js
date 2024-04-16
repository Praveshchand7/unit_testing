
'use strict';

const register = require('./datastorage.json');


for(const computer of register){
    console.log(`${computer.number} ${computer.computerName} ${computer.processor} ${computer.accessories}  ${computer.details}`);
}


for (const computer of register) {
    console.log(`${computer.number} ${computer.computerName}`);
    for(const detail of computer.details){
        console.log(`\t${detail.model}: ${detail.notes}: ${detail.energyclass}`);
    }
}

