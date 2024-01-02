// Union type
let id: number | string = "Rysen";

//Type Aliases
type Combiner = number | string;
type EmployeeDesignation = { Level: number; Role: string };
let newId: Combiner = 30;
let newEmployee: EmployeeDesignation = { Level: 4, Role: "Developer" };

console.log(
  `${id} has new ID ${newId} with Level of ${newEmployee.Level} and is a ${newEmployee.Role}`
);
