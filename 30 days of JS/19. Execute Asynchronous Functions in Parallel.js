/*
Given an array of asynchronous functions functions, return a new promise promise. Each function in the array accepts no arguments and returns a promise. All the promises should be executed in parallel.

promise resolves:

When all the promises returned from functions were resolved successfully in parallel. The resolved value of promise should be an array of all the resolved values of promises in the same order as they were in the functions. The promise should resolve when all the asynchronous functions in the array have completed execution in parallel.
promise rejects:

When any of the promises returned from functions were rejected. promise should also reject with the reason of the first rejection.
Please solve it without using the built-in Promise.all function.
*/

async function promiseAll(functions){
    return new Promise((resolve, reject) => {
        let cnt = 0;
        const ans = new Array(functions.length);
        for (let i = 0; i < functions.length; ++i) {
            const f = functions[i];
            f()
                .then(res => {
                    ans[i] = res;
                    cnt++;
                    if (cnt === functions.length) {
                        resolve(ans);
                    }
                })
                .catch(err => {
                    reject(err);
                });
        }
    });
}