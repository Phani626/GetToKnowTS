let button = document.getElementById("addnum");
let num1 = document.getElementById("num1")! as HTMLInputElement;
let num2 = document.getElementById("num2")! as HTMLInputElement;

let add = (a: number, b: number) => {
  return a + b;
};

button.addEventListener("click", () => {
  console.log(add(+num1.value, +num2.value));
});
