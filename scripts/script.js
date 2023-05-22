function clearDisplay() {
  document.getElementById('display').value = '';
}

function deleteLastCharacter() {
  var display = document.getElementById('display');
  display.value = display.value.slice(0, -1);
}

function appendCharacter(character) {
  document.getElementById('display').value += character;
}

function calculate() {
  var display = document.getElementById('display');
  var result;
  
  try {
    result = eval(display.value);
    display.value = result;
  } catch (error) {
    display.value = 'Error';
  }
}