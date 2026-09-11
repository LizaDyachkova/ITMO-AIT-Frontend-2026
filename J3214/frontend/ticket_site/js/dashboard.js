function ticketRowHTML(ticket) {
  let event = events.find(function (e) {
    return e.id === ticket.eventId;
  });

  return `
    <tr>
      <td>${event.title}</td>
      <td>${event.date}</td>
      <td>${ticket.qty}</td>
      <td>${ticket.qty * event.price} ₽</td>
      <td>${ticket.status === "active" ? "Активен" : "Возвращён"}</td>
      <td>
        <button class="btn btn-sm btn-outline-danger" onclick="refund('${ticket.orderId}')">
          Вернуть
        </button>
      </td>
    </tr>
  `;
}

function renderTickets() {
  let html = "";
  for (let i = 0; i < myTickets.length; i++) {
    html = html + ticketRowHTML(myTickets[i]);
  }
  document.getElementById("tickets-body").innerHTML = html;
  document.getElementById("empty-msg").classList.toggle("d-none", myTickets.length > 0);
}

function refund(orderId) {
  let ticket = myTickets.find(function (t) {
    return t.orderId === orderId;
  });
  ticket.status = "refunded";
  renderTickets();
}

renderTickets();