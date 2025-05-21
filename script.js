document.getElementById("bookingForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const rate = parseFloat(document.getElementById("service").value);
  const hours = parseFloat(document.getElementById("hours").value);

  if (!name || isNaN(rate) || isNaN(hours) || hours < 1) {
    alert("Please fill out all fields correctly.");
    return;
  }

  const total = rate * hours;

  document.getElementById("summaryName").textContent = name;
  document.getElementById("summaryRate").textContent = rate;
  document.getElementById("summaryHours").textContent = hours;
  document.getElementById("summaryTotal").textContent = total.toFixed(2);
  document.getElementById("summary").classList.remove("hidden");
});
