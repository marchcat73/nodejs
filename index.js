function test() {
    console.log("Привет");
}

test();

var printSomething = function() {
    console.log("просто текст");
}

printSomething();

var counter = require('./array');
console.log(counter([1, 34, 55, 6]));