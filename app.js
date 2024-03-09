function data(value) {
  calc.display.value += value;
}
function ac() {
  calc.display.value = "";
}
function c() {
  calc.display.value = calc.display.value.slice(0, -1);
}
function equal() {
  calc.display.value = eval(calc.display.value);
}
