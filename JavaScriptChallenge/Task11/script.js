function addNumbers() {
  let n1 = Number(document.getElementById("num1").value);
  let n2 = Number(document.getElementById("num2").value);
  let sum = n1 + n2;

  document.getElementById("result").textContent = "Result: " + sum;
}
function subNumbers() {
  let n1 = Number(document.getElementById("num1").value);
  let n2 = Number(document.getElementById("num2").value);
  let diff = n1 - n2;

  document.getElementById("result").textContent = "Result: " + diff;
}
function timesNumbers() {
  let n1 = Number(document.getElementById("num1").value);
  let n2 = Number(document.getElementById("num2").value);
  let product = n1 * n2;

  document.getElementById("result").textContent = "Result: " + product;
}
function divideNumbers() {
  let n1 = Number(document.getElementById("num1").value);
  let n2 = Number(document.getElementById("num2").value);
  let quotient = n1 / n2;

  document.getElementById("result").textContent = "Result: " + quotient;
}

document.getElementById("addBtn").addEventListener("click", addNumbers);
document.getElementById("subBtn").addEventListener("click", subNumbers);
document.getElementById("timesBtn").addEventListener("click", timesNumbers);
document.getElementById("divideBtn").addEventListener("click", divideNumbers);