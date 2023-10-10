/*
Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.
The three functions are:
    increment() increases the current value by 1 and then returns it.
    decrement() reduces the current value by 1 and then returns it.
    reset() sets the current value to init and then returns it.
*/

function createCounter(init) {
    let val = init;
    return {
        increment() {
            return ++val;
        },
        decrement() {
            return --val;
        },
        reset() {
            return (val = init);
        },
    };
}

// another one
function createCounter(init) {
    let val = init;
    const increment = () => ++val;
    const decrement = () => --val;
    const reset = () => { return val = init }
    return {
        increment,
        decrement,
        reset
    };
};