/*
Given an object or an array, return if it is empty.

An empty object contains no key-value pairs.
An empty array contains no elements.
You may assume the object or array is the output of JSON.parse.
*/

const isEmpty = function (obj) {
    for (const x in obj) {
        return false;
    }
    return true;
};