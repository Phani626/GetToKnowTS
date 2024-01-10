const arr1: Array<string> = ["Sun", "Moon"]; // string[]

function combine<T extends Object, U extends Object>(obj1: T, obj2: U) {
  return Object.assign(obj1, obj2);
}

console.log(combine({ name: "Alpha" }, { age: 30 }));

interface Lengthy {
  length: number;
}

function returnArray<T extends Lengthy>(element: T): [T, string] {
  if (element.length > 0) {
    console.log(element.length);
  }
  return [element, "2"];
}

console.log(returnArray("Space"));
