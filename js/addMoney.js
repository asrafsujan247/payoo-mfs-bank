document
  .getElementById("add-money")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const selectBankMethod =
      document.getElementById("select-bank-method").value;
    const amount = document.getElementById("amount-input").value;
    const convertedAmount = parseFloat(amount);
    const pin = document.getElementById("pin-input").value;
    const mainBalance = document.getElementById("main-balance").innerText;
    const convertedMainBalance = parseFloat(mainBalance);
    console.log(selectBankMethod);
    if (parseInt(pin) === 1234) {
      if (amount) {
        if (selectBankMethod === "Select bank") {
          alert("Please select a bank");
        } else {
          const sum = convertedMainBalance + convertedAmount;
          document.getElementById("main-balance").innerText = sum;
        }
      } else {
        alert("Enter a amount");
      }
    } else {
      alert("Your Pin is not valid");
    }
  });
