document
  .getElementById("btn-login")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const number = document.getElementById("number-input-field").value;
    const pin = document.getElementById("pin-input-field").value;
    const convertedPin = parseInt(pin);
    if (number.length === 11) {
      if (convertedPin === 1234) {
        window.location.href = "../main.html";
      } else {
        alert("Provide valid Pin");
      }
    } else {
      alert("Provide your valid account Number");
    }
  });
