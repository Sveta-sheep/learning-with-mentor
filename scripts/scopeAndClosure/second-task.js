// count
function countWrapper(initialValue = 0) {
    let calledTimes = initialValue;

    return function func() {
        calledTimes += 1;

        func.reset = function() {
            calledTimes = 0;

            return calledTimes;
        }

        return calledTimes
    }
}

const count = countWrapper();

console.log(count())
console.log(count())
console.log(count.reset())
console.log(count())
console.log(count())

// memo
function memo(func, resolver) {
    const cache = {};

    return function(...args) {
        const key = resolver ? resolver(...args) : args.join("_");

        if (key in cache) return cache[key];

        cache[key] = func.apply(this, args)

        return cache[key];
    }
}

let callCount = 0
const func = (a, b) => {
    callCount += 1
    return a + b
}
const memoed = memo(func, (a, b) => (a + b) % 2 === 0 ? 'even' : 'odd')

memoed(1, 2)
// expect(callCount).toBe(1)
console.log(callCount)
memoed(1, 4)
// expect(callCount).toBe(1)
console.log(callCount)
memoed(1, 3)
console.log(callCount)
// expect(callCount).toBe(2)
memoed(11, 31)
console.log(callCount)
// expect(callCount).toBe(2)


//counter.count
function createCounter() {
    let calledTimes = -1;

    return {
        get count() {
            calledTimes += 1;

            return calledTimes
        }
    }
}

const counter = createCounter()

console.log(counter.count)
console.log(counter.count)
console.log(counter.count)
