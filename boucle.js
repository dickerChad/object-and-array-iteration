// Task 1
var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake'];

function logDairy() {
    for (var dairie of dairy) {
        console.log(dairie)
    }
}
logDairy();
// Task 2
const animal = {
    canJump: true
};
const bird = Object.create(animal);
bird.canFly = true;
bird.hasFeathers = true;
function birdCan() {
    for (var val of Object.keys(bird)) {
        console.log(`${val}: ${bird[val]}`);
    }
    }
birdCan();
// Task 3
function animalCan() {
    for (var ppte in bird) {
        
        console.log(`${ppte}: ${bird[ppte]}`)
    }
}
animalCan();

