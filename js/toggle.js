// add money and cashout toggle
document.getElementById("cashout-section").style.display = "none";

document
  .getElementById("add-money-card")
  .addEventListener("click", function () {
    document.getElementById("add-money-section").style.display = "block";
    document.getElementById("cashout-section").style.display = "none";
  });

document.getElementById("cashout-card").addEventListener("click", function () {
  document.getElementById("add-money-section").style.display = "none";
  document.getElementById("cashout-section").style.display = "block";
});
