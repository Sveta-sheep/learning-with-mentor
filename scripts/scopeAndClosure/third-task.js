function isEqualFunc(a, b) {
    return a === b;
}

// після того як я подивилась на оригінал функції, 
// зрозуміла що перевірку на масив можна забрати 
// і додати ще перевірку на то чи всі проперті в двох обєктів однакові, 
// але я залишаю свій варіант функції, щоб ти зміг подивитись на мій хід думок

function shallowEqual(newProps, prevProps) {
    if (isEqualFunc(newProps, prevProps)) return true;

    if (Array.isArray(newProps) && Array.isArray(prevProps)) {
        if (newProps.length !== prevProps.length) return false;

        for (let i = 0; i < newProps.length; i++) {
            return isEqualFunc(newProps[i], prevProps[i]);
        }
    }

    if (typeof newProps === 'object' && typeof prevProps === 'object') {
        const newPropsKeys = Object.keys(newProps);
        const prevPropsKeys = Object.keys(prevProps);

        if (newPropsKeys.length !== prevPropsKeys.length) return false;

        for (let i = 0; i < newPropsKeys.length; i++) {
            const isEqual = isEqualFunc(newProps[newPropsKeys[i]], prevProps[prevPropsKeys[i]])
            
            if (!isEqual) {
                return false;
            }
        }
    }

    return true;
}

// console.log(shallowEqual({1: 1 ,2: 2, 3: 'rr'}, {1: 1 ,2: 2, 3: 'r'}))


// 2.

class EventEmitter {
    subscriptions = {};
  
    subscribe(eventName, callback) {
        const prevValue = this.subscriptions[eventName];
  
      this.subscriptions[eventName] = prevValue && prevValue.length ? [...prevValue, callback] : [callback];
  
      return {
              release: () => {
                  this.subscriptions[eventName].pop();
  
                  if (!this.subscriptions[eventName].length) {
                      delete this.subscriptions[eventName];
                  }
                  
                  return this.subscriptions;
              }
          }
    }
    
    emit(eventName, ...args) {
          const callbacks = this.subscriptions[eventName];
  
          if (!callbacks || !callbacks.length) return;
  
          if (!args.length) return callbacks.map(callback => callback())
  
          callbacks.forEach(callback => callback.apply(this, args))
      }
  }
  
  const emitter = new EventEmitter()
  
  const callback1 = (a) => a;
  const callback2 = (b) => b;
  
  const sub1  = emitter.subscribe('event1', callback1)
  const sub2 = emitter.subscribe('event1', callback1)
  
  console.log(emitter.emit('event1', 1, 2))

// 3.

function is(a, b) {
    if (typeof a !== typeof b) return false;
  
    if (a === undefined || a === null || b === undefined || b === null) return true;

  if (1 / a === -Infinity && 1 / b === -Infinity) return true;
    if (a === 0 && 1 / b === -Infinity) return false;
    if (1 / a === -Infinity && b === 0) return false;

    if (a === b) return true;
  
    if (Number.isNaN(a) && Number.isNaN(b)) return true;
  
    return false;
  }
  
//   console.log(is(NaN,NaN))