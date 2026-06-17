// Ex 1 & 2: Basics & Data
console.log("Welcome to the Community Portal");
alert("Page Loaded!");
let seats = 10;
const eventName = "Baking Workshop";

// Ex 5: Objects & Prototypes
class Event {
    constructor(name, seats) { this.name = name; this.seats = seats; }
    checkAvailability() { return this.seats > 0; }
}

// Ex 6 & 9: Arrays & Async/Await
const events = [new Event("Music Fest", 5), new Event("Baking Workshop", 0)];

async function fetchEvents() {
    try {
        // Mock fetch (Ex 9 & 12)
        const data = await new Promise(resolve => setTimeout(() => resolve(events), 1000));
        renderEvents(data);
    } catch (err) { console.error(err); }
}

// Ex 7 & 11: DOM & Forms
function renderEvents(list) {
    const container = document.getElementById('eventContainer');
    list.filter(e => e.checkAvailability()).forEach(e => {
        let div = document.createElement('div');
        div.innerHTML = `<h3>${e.name}</h3> <button class="regBtn">Register</button>`;
        container.appendChild(div);
    });
}

document.getElementById('regForm').onsubmit = (e) => e.preventDefault(); // Ex 11
fetchEvents();