// DataTypes :
// number
// string
// boolean
// object
// Array
// tuple
// enum
// any

// number
// string
// boolean
let marks: number = 90,
  surName: string = "Rysen",
  examPassed: boolean = true;
examPassed
  ? console.log(`${surName} has passed the exam with ${marks} Marks`)
  : "";

// object
// Array
// tuple
let employee: {
  name: string;
  id: number;
} = {
  name: surName,
  id: 83,
};
let employeeSkills: string[] = ["C", "Java", "JS"];
let employeeLevel: [number, string] = [4, "TA"];

let msg = `${employee.name} has skills ${employeeSkills} with Level ${employeeLevel[0]} is a ${employeeLevel[1]}`;

console.log(msg);

// enum
// any
enum employeeRole {
  Developer = 100,
  Tester,
  BA,
}

let activities = ["playing", 5, true];

console.log(`${msg}, and is a ${employeeRole[100]}`);
