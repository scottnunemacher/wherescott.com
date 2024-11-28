// JavaScript to convert ISO date to the local time zone
const lastUpdatedElement = document.getElementById('last-updated');
if (lastUpdatedElement) {
  const isoDate = lastUpdatedElement.getAttribute('data-iso');
  const localDate = new Date(isoDate);

  // Format the date and time as needed
  lastUpdatedElement.textContent = localDate.toLocaleString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true
  });
}
