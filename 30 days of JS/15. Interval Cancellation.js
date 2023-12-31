/*
Given a function fn, an array of arguments args, and an interval time t, return a cancel function cancelFn.

The function fn should be called with args immediately and then called again every t milliseconds until cancelFn is called at cancelT ms.
*/

function cancellable(fn, args, t) {
    fn(...args);
    const time = setInterval(() => fn(...args), t);
    return () => clearInterval(time);
}