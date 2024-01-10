"use strict";
const arr1 = ["Sun", "Moon"]; // string[]
function combine(obj1, obj2) {
    return Object.assign(obj1, obj2);
}
console.log(combine({ name: "Alpha" }, { age: 30 }));
function returnArray(element) {
    if (element.length > 0) {
        console.log(element.length);
    }
    return [element, "2"];
}
console.log(returnArray("Space"));
