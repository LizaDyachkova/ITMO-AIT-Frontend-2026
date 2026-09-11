// let events = [
//   {
//     title: "Стендап для детей",
//     date: "26 сентября, воскресенье",
//     place: "Стендап-клуб «Сцена»",
//     img: "images/test_image.jpg"
//   },
//   {
//     title: "Мастер-классы по живописи «Картина за 3 часа»",
//     date: "30 сентября",
//     place: "Клуб «Аид»",
//     img: "images/drow_pic.jpg"
//   },
//   {
//     title: "Зенит — Спартак",
//     date: "1 октября",
//     place: "Зенит Арена",
//     img: "images/football_pic.jpg"
//   },
//   {
//     title: "Слив ммр в доте",
//     date: "1 октября",
//     place: "дота 2",
//     img: "images/ggg.jpg"
//   }
// ];

function cardHTML(event) { // функция которая строит карточку
  return `
    <div class="col-md-4">
      <div class="card">
        <img src="${event.img}" class="card-img-top" alt="${event.title}">
        <div class="card-body">
          <h5 class="card-title">${event.title}</h5>
          <p class="card-text">${event.date}</p>
          <p class="card-text">${event.place}</p>
          <a href="event.html?id=${event.id}" class="btn btn-primary">Подробнее</a>
        </div>
      </div>
    </div>
  `;
}


let html = "";
for (let i = 0; i < events.length; i++) { // на каждой итерации добовляем карточку
  html = html + cardHTML(events[i]);
}

document.getElementById("events-grid").innerHTML = html; // ищем по id и вставляем