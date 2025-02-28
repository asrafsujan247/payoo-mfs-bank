document
  .getElementById("withdraw-money-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const agentNumber = document.getElementById("agent-number").value;
    const amount = getInputValueById("cashout-amount-input");
    const pin = getInputValueById("cashout-pin-input");
    const mainBalance = getInnerTextById("main-balance");

    if (amount > mainBalance) {
      alert("Insufficient Balance");
      return;
    }

    if (agentNumber.length === 11) {
      if (amount) {
        if (pin === 1234) {
          const remainingAmount = mainBalance - amount;
          setInnerTextByIdAndValue("main-balance", remainingAmount);
          const container = document.getElementById("transaction-container");
          const div = document.createElement("div");
          div.classList.add(
            "bg-gray-200",
            "pl-8",
            "py-6",
            "rounded-lg",
            "my-4",
            "flex",
            "items-center",
            "gap-5"
          );
          div.innerHTML = `
         <img class="w-8" src="./assets/purse1.png" alt="" />
              <div class="space-y-1">
                <h1 class="font-medium text-base">
                  Cash Out
                </h1>
                <h3>amount : <span class="font-bold">$${amount}</span></h3>
                <p class="text-sm">
                  Agent number:
                  <span class="font-bold">${agentNumber}</span>
                </p>
              </div>
          `;
          container.appendChild(div);
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
