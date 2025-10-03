var pushBtn;
var unshiftBtn;
var insertBtn;
var insertInput;
var addInput;

var popBtn;
var shiftBtn;
var removeBtn;
var removeInput;

var resultScreen;

document.addEventListener("DOMContentLoaded", onLoad);

var array = [];

function onLoad() {
  pushBtn = document.getElementById("push").addEventListener("click", pushArray);
  
  unshiftBtn = document.getElementById("unshift").addEventListener("click", unshiftArray);
  
  insertBtn = document.getElementById("insert").addEventListener("click", insertArray);

  insertInput = document.getElementById("insert-input");

  addInput = document.getElementById("add-input");

  popBtn = document.getElementById("pop").addEventListener("click", popArray);
  
  shiftBtn = document.getElementById("shift").addEventListener("click", shiftArray);

  removeBtn = document.getElementById("remove").addEventListener("click", removeArray);

  removeInput = document.getElementById("remove-input");

  resultScreen = document.getElementById("result");
}

function updateResult() {
  resultScreen.textContent = array;
}
function pushArray() {
  array.push(addInput.value);
  updateResult();
}

function unshiftArray() {
  array.unshift(addInput.value);
  updateResult();
}

function insertArray() {
  array.splice(insertInput.value, 0, addInput.value);
  updateResult();
}

function removeArray() {
  array.splice(removeInput.value, 1);
  updateResult();
}

function popArray() {
  array.pop();
  updateResult();
}

function shiftArray() {
  array.shift();
  updateResult();
}
