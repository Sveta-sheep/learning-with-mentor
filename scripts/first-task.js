// once
function once(func) {
    let isCalled = false;
    let result;

    return function(...args) {
        if (isCalled) return result;

        isCalled = true;
        result = func.apply(this, args);

        return result;
    }
}

function func(b, c){
    return this.a + b + c
}

const onced = once(func)
const obj = {
    a: 1,
    onced
}

console.log('once: ', obj.onced(2,3)) // 6

//create functions
function createFunctions(n) {
    var callbacks = [];

    for (let i=0; i<n; i++) {
        callbacks.push(function() {
            return i;
        });
    }

    return callbacks;
}

var callbacks = createFunctions(5); // create an array, containing 5 functions

console.log('create functions 0 index = ', callbacks[0]()); // must return 0
console.log('create functions 3 index = ', callbacks[3]()); // must return 3


// create Person
function createPerson(name, age) {
    return {
        name,
        age,
        getName() {
            return this.name
        },
        getAge() {
            return this.age
        },
        setAge(newAge) {
            this.age = newAge
        }
    }
}

const person = createPerson('Svitlana', 23)

console.log('person: ', person)
console.log('person name: ', person.getName())
console.log('person age: ', person.getAge())
person.setAge(25)
console.log('person new age: ', person.getAge())