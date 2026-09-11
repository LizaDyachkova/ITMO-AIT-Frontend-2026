function renderGrid(list) {
  let html = "";
  for (let i = 0; i < list.length; i++) {
    html = html + cardHTML(list[i]);
  }
  document.getElementById("events-grid").innerHTML = html;
}

renderGrid(events);

let typeSelect = document.getElementById("f-type");
let citySelect = document.getElementById("f-city");

function applyFilters() {
  let selectedType = typeSelect.value;
  let selectedCity = citySelect.value;

  let filtered = events.filter(function (event) {
    if (selectedType !== "all" && event.type !== selectedType) {
      return false;
    }
    if (selectedCity !== "all" && event.city !== selectedCity) {
      return false;
    }
    return true;
  });

  renderGrid(filtered);
}

typeSelect.addEventListener("change", applyFilters);
citySelect.addEventListener("change", applyFilters);

document.getElementById("f-reset").addEventListener("click", function () {
  typeSelect.value = "all";
  citySelect.value = "all";
  renderGrid(events);
});