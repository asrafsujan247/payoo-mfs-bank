document
  .getElementById("btn-login")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const numberInput = document.getElementById("number-input-field").value;
    const pinInput = document.getElementById("pin-input-field").value;
    if (numberInput.length === 11) {
      if (parseInt(pinInput) === 1234) {
        window.location.href = "../main.html";
      } else {
        alert("Your Pin is not correct");
      }
    } else {
      alert("Need valid number");
    }
  });
