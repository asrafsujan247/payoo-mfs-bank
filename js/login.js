document
  .getElementById("btn-login")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const numberInput = document.getElementById("number-input-field").value;
    const pinInput = document.getElementById("pin-input-field").value;
    if (numberInput.length === 11) {
      if (parseInt(pinInput) === 1234) {
        console.log("okay thik ache");
      } else {
        console.log("pin thik nai");
      }
    } else {
      console.log("need valid number");
    }
  });
