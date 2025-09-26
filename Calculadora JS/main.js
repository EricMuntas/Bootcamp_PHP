var result_screen;
var operation = [];

document.addEventListener("DOMContentLoaded", onLoad);

function onLoad() {
  const spanList = document.querySelectorAll("span");

  result_screen = document.getElementById("result");

  spanList.forEach((button) => {
    button.parentElement.addEventListener("click", clickBtn);
  });
}

function clickBtn() {
  const BUTTON_VALUE = this.textContent.trim();

  if (BUTTON_VALUE == "RESET") {
    operation = [];
    result_screen.textContent = "0";
    return;
  }

  if (BUTTON_VALUE == "DEL") {
    operation.splice(operation.length - 1);
    console.log(operation.length);

    if (operation[0] == undefined) {
      result_screen.textContent = "0";
      return;
    }

    printResult();
    return;
  }

  if (
    (BUTTON_VALUE == "+" ||
      BUTTON_VALUE == "-" ||
      BUTTON_VALUE == "x" ||
      BUTTON_VALUE == "/" ||
      BUTTON_VALUE == ".") &&
    (operation[operation.length - 1] == "+" ||
      operation[operation.length - 1] == "-" ||
      operation[operation.length - 1] == "x" ||
      operation[operation.length - 1] == "/" ||
      operation[operation.length - 1] == ".")
  ) {
    return;
  }

  if (
    (BUTTON_VALUE == "+" || BUTTON_VALUE == "x" || BUTTON_VALUE == "/") &&
    operation.length == 0
  ) {
    return;
  }

if (BUTTON_VALUE === ".") {
  if (operation.length === 0) {
    operation.push("0"); // empezamos con "0."
  }

  if (!canAddDecimal()) {
    return; // ya hay un punto decimal en este número
  }
}


  if (BUTTON_VALUE == "=") {
    return;
  }

  console.log(operation);
  operation.push(BUTTON_VALUE);
  printResult();
}

function printResult() {
  let result = operation.toString().replaceAll(",", "");
  result_screen.textContent = result;
}

function canAddDecimal() {
  // Recorremos desde el final hasta encontrar un operador o inicio
  for (let i = operation.length - 1; i >= 0; i--) {
    if (["+", "-", "x", "/"].includes(operation[i])) {
      break; // hemos llegado al inicio de este número
    }
    if (operation[i] === ".") {
      return false; // ya existe un punto decimal en este número
    }
  }
  return true;
}
