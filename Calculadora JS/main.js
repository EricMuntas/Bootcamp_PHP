var result_screen;
var operation = [];
var switchThemBtn; 


document.addEventListener("DOMContentLoaded", onLoad);

function onLoad() {
  const spanList = document.querySelectorAll("span");

  result_screen = document.getElementById("result");


  switchThemBtn = document.getElementById('switch');

  switchThemBtn.addEventListener('click', changeTheme);


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
    if (operation.length > 0) {
      calculateOperation();
    }

    return;
  }

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

function calculateOperation() {
  let groupNumbers = [];
  let numbers = "";
  for (let index = 0; index < operation.length; index++) {
    if (["+", "-", "x", "/"].includes(operation[index])) {
      groupNumbers.push(numbers);
      groupNumbers.push(operation[index]);

      numbers = "";
    } else {
      numbers = numbers + operation[index];
      // console.log('Lenght: ' + operation.length+" / Index: " +index)
      if (index + 1 == operation.length) {
        groupNumbers.push(numbers);
      }
    }
  }

  // Primero multiplicaciones y divisiones
  for (let index = 0; index < groupNumbers.length; index++) {
    let newOperation = "";
    if (
      ["x", "/"].includes(groupNumbers[index]) &&
      index + 1 != operation.length
    ) {
      console.log(index);
      console.log(groupNumbers[index]);
      if (groupNumbers[index] == "x") {
        newOperation = groupNumbers[index - 1] * groupNumbers[index + 1] + "";
        // groupNumbers.splice(index - 1, 3, newOperation);
      }

      if (groupNumbers[index] == "/") {
        newOperation = groupNumbers[index - 1] / groupNumbers[index + 1] + "";
        // groupNumbers.splice(index - 1, 3, newOperation);
      }

      groupNumbers.splice(index - 1, 3, newOperation);
      index--;
      newOperation = "";
    }
  }

  for (let index = 0; index < groupNumbers.length; index++) {
    let newOperation = "";
    if (
      ["+", "-"].includes(groupNumbers[index]) &&
      index + 1 != operation.length
    ) {
      console.log(index);
      console.log(groupNumbers[index]);
      if (groupNumbers[index] == "+") {
        newOperation =
          parseFloat(groupNumbers[index - 1]) +
          parseFloat(groupNumbers[index + 1]) +
          "";
        // groupNumbers.splice(index - 1, 3, newOperation);
      }

      if (groupNumbers[index] == "-") {
        newOperation =
          parseFloat(groupNumbers[index - 1]) -
          parseFloat(groupNumbers[index + 1]) +
          "";
        // groupNumbers.splice(index - 1, 3, newOperation);
      }

      groupNumbers.splice(index - 1, 3, newOperation);
      index--;
      newOperation = "";
    }
  }

  // var calc = parseFloat((groupNumbers.toString()).replaceAll(',',''));
  // console.log(calc)
  console.log(groupNumbers);

  operation = groupNumbers;
  printResult();
}


function changeTheme() {
const body = document.getElementById('body');

console.log('hola')
console.log(body)
if (body.classList.contains('theme-1')) {
  body.classList.remove('theme-1');
  body.classList.add('theme-2');
}
else if (body.classList.contains('theme-2')) {
  body.classList.remove('theme-2');
  body.classList.add('theme-3');
}
else if (body.classList.contains('theme-3')) {
  body.classList.remove('theme-3');
  body.classList.add('theme-1');
}

}