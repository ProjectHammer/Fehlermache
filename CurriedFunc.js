const curry = (fn) => {
    
    return curried = (...args) => {
        console.log(fn);
        if(fn.length !== args.length) {
            console.log(...args);
            return curried.bind(null, ...args);
        }
        return fn(...args);
    };
}

const total = (x, y, z) => x + y + z;
const newTotal = (x,y,z,a) => x * y * z * a;
const curriedTotal = curry(total);
const newCurriedTotal = curry(newTotal);
console.log(curriedTotal(10)(20)(39));
console.log(newCurriedTotal(10)(20)(30)(39));
