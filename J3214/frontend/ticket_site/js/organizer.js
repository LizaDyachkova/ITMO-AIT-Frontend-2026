function organizerRowHTML(event) {
  return `
    <tr>
      <td>${event.title}</td>
      <td>${event.date}</td>
      <td>${event.city}</td>
      <td>${event.price} ₽</td>
    </tr>
  `;
}

function renderOrganizerList() {
  let html = "";
  for (let i = 0; i < events.length; i++) {
    html = html + organizerRowHTML(events[i]);
  }
  document.getElementById("organizer-body").innerHTML = html;
}

renderOrganizerList();

let createForm = document.getElementById("create-form");

createForm.addEventListener("submit", function (e) {
  e.preventDefault();

  let newEvent = {
    id: events.length + 1,
    title: document.getElementById("new-title").value,
    date: document.getElementById("new-date").value,
    city: document.getElementById("new-city").value,
    price: Number(document.getElementById("new-price").value),
    place: "Уточняется",
    type: "other",
    img: "images/test_image.jpg"
  };

  events.push(newEvent);
  renderOrganizerList();
  createForm.reset();

  let modalEl = document.getElementById("createModal");
  let modal = bootstrap.Modal.getInstance(modalEl);
  modal.hide();
});