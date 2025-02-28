handleToggle("cashout-section", "none");
handleToggle("transaction-history-section", "none");

// add money toggle
document
  .getElementById("add-money-card")
  .addEventListener("click", function () {
    handleToggle("add-money-section", "block");
    handleToggle("cashout-section", "none");
    handleToggle("transaction-history-section", "none");
  });

// cashout toggle
document.getElementById("cashout-card").addEventListener("click", function () {
  handleToggle("add-money-section", "none");
  handleToggle("cashout-section", "block");
  handleToggle("transaction-history-section", "none");
});

// transaction toggle
document
  .getElementById("transaction-card")
  .addEventListener("click", function () {
    handleToggle("transaction-history-section", "block");
    handleToggle("add-money-section", "none");
    handleToggle("cashout-section", "none");
  });
