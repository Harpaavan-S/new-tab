const hour = new Date().getHours();
const body = document.body;

if (hour >= 6 && hour <= 10) {
    body.classList.add('morning');
} else if (hour >= 11 && hour <= 16) {
    body.classList.add('afternoon');
} else if (hour >= 17 && hour <= 21) {
    body.classList.add('evening');
} else {
    body.classList.add('night');
}