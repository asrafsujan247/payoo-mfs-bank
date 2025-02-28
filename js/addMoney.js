document
  .getElementById("add-money")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const selectBankMethod =
      document.getElementById("select-bank-method").value;
    const accountNumber = document.getElementById("account-number").value;
    const amount = getInputValueById("amount-input");
    const pin = getInputValueById("pin-input");
    const mainBalance = getInnerTextById("main-balance");

    if (amount <= 0) {
      alert("Give a positive number of amount");
      return;
    }

    if (accountNumber.length === 11) {
      if (parseInt(pin) === 1234) {
        if (amount) {
          if (selectBankMethod === "Select bank") {
            alert("Please select a bank");
          } else {
            const sum = mainBalance + amount;
            setInnerTextByIdAndValue("main-balance", sum);
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
                    Added Money from ${selectBankMethod}
                  </h1>
                  <h3>amount : <span class="font-bold">$${amount}</span></h3>
                  <p class="text-sm">
                    Account number:
                    <span class="font-bold">${accountNumber}</span>
                  </p>
                </div>
            `;
            container.appendChild(div);
          }
        } else {
          alert("Enter a amount");
        }
      } else {
        alert("Your Pin is not valid");
      }
    } else {
      alert("Provide a valid account number");
    }
  });
