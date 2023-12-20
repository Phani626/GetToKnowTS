var button = document.getElementById("addnum");
var num1 = document.getElementById("num1");
var num2 = document.getElementById("num2");
var add = function (a, b) {
    return a + b;
};
button.addEventListener("click", function () {
    console.log(add(+num1.value, +num2.value));
});
