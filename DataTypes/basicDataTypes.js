// DataTypes :
// number// string// boolean// object// Array// tuple// enum// any
// number// string// boolean
var marks = 90, surName = "Rysen", examPassed = true;
examPassed
    ? console.log("".concat(surName, " has passed the exam with ").concat(marks, " Marks"))
    : "";
// object// Array// tuple
var employee = {
    name: surName,
    id: 83,
};
var employeeSkills = ["C", "Java", "JS"];
var employeeLevel = [4, "TA"];
var msg = "".concat(employee.name, " has skills ").concat(employeeSkills, " with Level ").concat(employeeLevel[0], " is a ").concat(employeeLevel[1]);
console.log(msg);
// enum// any
var employeeRole;
(function (employeeRole) {
    employeeRole[employeeRole["Developer"] = 100] = "Developer";
    employeeRole[employeeRole["Tester"] = 101] = "Tester";
    employeeRole[employeeRole["BA"] = 102] = "BA";
})(employeeRole || (employeeRole = {}));
var activities = ["playing", 5, true];
console.log("".concat(msg, ", and is a ").concat(employeeRole[100]));
