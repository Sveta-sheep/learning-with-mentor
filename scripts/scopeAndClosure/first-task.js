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

// console.log('once: ', obj.onced(2,3)) // 6

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

// console.log('create functions 0 index = ', callbacks[0]()); // must return 0
// console.log('create functions 3 index = ', callbacks[3]()); // must return 3


//fibonacci

const calculatedNumbers = {};

function fibonacci(n) { // 10
    
    if (n < 2)
      return n;

      if (n in calculatedNumbers) return calculatedNumbers[n];

      calculatedNumbers[n] = fibonacci(n-1) + fibonacci(n-2);
    
    return calculatedNumbers[n]; //9 + 8
  }

  console.log(fibonacci(15)) // 610
  console.log(fibonacci(50)) // 12586269025


// createTimer
function createTimer() {
    return {
        time: 0,
        start: function() {
            this.time = Date.now();
        },
        getTime: function() {
            const difference = (Date.now() - this.time) / 1000;

            return difference + 's';
        }
    }
}

const timer = createTimer();


// setTimeout(() => {
//     timer.start()   
// }, 3000)
// setTimeout(() => {
//     console.log(timer.getTime())    
// }, 6000)


// create Person
function createPerson(name, age) {
    const personName = name;
    let personAge = age;

    return {
        getName() {
            return personName
        },
        getAge() {
            return personAge
        },
        setAge(newAge) {
            personAge = newAge
        }
    }
}

const person = createPerson('Svitlana', 23)

console.log('person: ', person)
console.log('person name: ', person.getName())
console.log('person age: ', person.getAge())
person.setAge(25)
console.log('person new age: ', person.getAge())