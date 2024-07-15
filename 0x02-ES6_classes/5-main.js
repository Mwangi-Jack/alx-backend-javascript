import Building from './5-building.js';

const b = new Building(100);
console.log(b);

class TestBuilding extends Building {}

try {
    console.log("Success")
    new TestBuilding(200)
}
catch(err) {
    console.log("An Error Occured!")
    console.log(err);
}
