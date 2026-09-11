// читка id ивента

let params = new URLSearchParams(window.location.search);
let id = params.get("id");

console.log(id);

let numericId = Number(id);

let currentEvent = events.find(function (e) {
  return e.id === numericId;
});

document.getElementById("ev-title").textContent = currentEvent.title;
document.getElementById("ev-date").textContent = currentEvent.date;
document.getElementById("ev-place").textContent = currentEvent.place;
document.getElementById("ev-price").textContent = currentEvent.price + " ₽";
document.getElementById("ev-img").src = currentEvent.img;
document.getElementById("ev-img").alt = currentEvent.title;

document.getElementById("modal-ev-title").textContent = currentEvent.title;

let qtyInput = document.getElementById("qty");
let totalEl = document.getElementById("modal-total");

function updateTotal() {
  let qty = Number(qtyInput.value);
  totalEl.textContent = qty * currentEvent.price;
}

updateTotal();
qtyInput.addEventListener("input", updateTotal);

document.getElementById("confirm-buy").addEventListener("click", function () {
  alert("Билет куплен! Количество: " + qtyInput.value);
  window.location.href = "dashboard.html";
});