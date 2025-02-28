document
  .getElementById("btn-login")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const number = document.getElementById("number-input-field").value;
    const pin = getInputValueById("pin-input-field");

    if (number.length === 11) {
      if (pin === 1234) {
        window.location.href = "../main.html";
      } else {
        alert("Provide valid Pin");
      }
    } else {
      alert("Provide your valid account Number");
    }
  });
