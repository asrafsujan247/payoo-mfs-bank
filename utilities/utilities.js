// input field value and convert to number and return
function getInputValueById(id) {
  const value = document.getElementById(id).value;
  const convertedValue = parseFloat(value);
  return convertedValue;
}

// take innerText and convert to number and return
function getInnerTextById(id) {
  const value = document.getElementById(id).innerText;
  const convertedValue = parseFloat(value);
  return convertedValue;
}

// set innerText
function setInnerTextByIdAndValue(id, value) {
  document.getElementById(id).innerText = value;
}

// handle toggle
function handleToggle(id, status) {
  document.getElementById(id).style.display = status;
}
