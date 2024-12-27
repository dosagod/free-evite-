function showTime() {
	document.getElementById('currentTime').innerHTML = new Date().toUTCString();
}
showTime();
setInterval(function () {
	showTime();
}, 1000);// Event creation form handler
document.getElementById('eventForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const eventName = document.getElementById('eventName').value;
  const eventDate = document.getElementById('eventDate').value;
  const eventTime = document.getElementById('eventTime').value;
  const eventLocation = document.getElementById('eventLocation').value;
  const eventDescription = document.getElementById('eventDescription').value;

  const event = {
    name: eventName,
    date: eventDate,
    time: eventTime,
    location: eventLocation,
    description: eventDescription
  };

  displayEvent(event);
  resetForm();
});

// Display event in the events container
function displayEvent(event) {
  const eventContainer = document.getElementById('eventsContainer');

  const eventCard = document.createElement('div');
  eventCard.classList.add('event-card');

  eventCard.innerHTML = `
    <h3>${event.name}</h3>
    <p><strong>Date:</strong> ${event.date}</p>
    <p><strong>Time:</strong> ${event.time}</p>
    <p><strong>Location:</strong> ${event.location}</p>
    <p><strong>Description:</strong> ${event.description}</p>
    <button class="rsvp-btn">RSVP</button>
  `;

  eventContainer.appendChild(eventCard);

  // RSVP functionality
  eventCard.querySelector('.rsvp-btn').addEventListener('click', function() {
    alert(`You have RSVP'd to the event: ${event.name}`);
  });
}

// Reset the form after event creation
function resetForm() {
  document.getElementById('eventForm').reset();
}
