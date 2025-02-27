document
  .getElementById("withdraw-money-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const agentNumber = document.getElementById("agent-number").value;
    const amount = document.getElementById("cashout-amount-input").value;
    const convertedAmount = parseFloat(amount);
    const pin = document.getElementById("cashout-pin-input").value;
    const convertedPin = parseFloat(pin);
    const mainBalance = document.getElementById("main-balance").innerText;
    const convertedMainBalance = parseFloat(mainBalance);

    if (agentNumber.length === 11) {
      if (amount) {
        if (convertedPin === 1234) {
          const remainingAmount = convertedMainBalance - convertedAmount;
          document.getElementById("main-balance").innerText = remainingAmount;
        } else {
          alert("Provide valid pin");
        }
      } else {
        alert("Enter a amount");
      }
    } else {
      alert("Provide valid agent number");
    }
  });
