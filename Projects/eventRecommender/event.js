class User {
    constructor(first_name, last_name) {
        this.first_name = first_name;
        this.last_name = last_name;
        this.event_array = [];
    }
}

class Ticket {
    constructor(type, cost) {
        this.ticketType = type;
        this.cost = cost;
    }
}

class Event {
    constructor(name, description, date) {
        this.name = name;
        this.description = description;
        this.date = date;
        this.availableTickets =[]
        }
        addAvailableTickets(ticketType, ticketCost) {
            const newTicket = new Ticket(ticketType, ticketCost);
            this.availableTickets.push(newTicket);
        }
        searchTickets(minPrice, maxPrice) { 
            let message = "Eligible tickets: ";
            let counter = 1;
            for (let i=0; i<this.availableTickets.length; i++) {
                if (this.availableTickets[i].cost >= minPrice && this.availableTickets[i].cost <= maxPrice) {
                    message += counter + ". " + this.availableTickets[i].ticketType + " ";
                    counter++;
                }
            }
            if (counter === 1){
                message = "There are no available tickets";
            }
            return message;
        }
        lowestTicket() {
            let lowest = this.availableTickets[0].cost;
            for (let i = 1; i < this.availableTickets.length; i++) {
                if (this.availableTickets[i].cost < lowest) {
                    lowest = this.availableTickets[i].cost;
                }
            }
            return lowest;
        }
    }

const event_obj1 = new Event("Black Keys Concert", "Win a guitar signed by the entire band!");
const event_obj2 = new Event("Zeppelin Constituents: A Led Zeppelin Tribute Band", "Come boogie down to your favorite classics!");
const event_obj3 = new Event("Gala for Harvey Milk Foundation", "Come join us for live music, food, and rainbow vibes!");


event_obj1.addAvailableTickets("General Admission", 80);
event_obj2.addAvailableTickets("General Admission", 33);
event_obj3.addAvailableTickets("Balcony", 100);
event_obj1.addAvailableTickets("VIP", 202);
event_obj2.addAvailableTickets("VIP", 303);
event_obj3.addAvailableTickets("VIP", 404);

var event_array = new Array();

event_array.push(event_obj1, event_obj2, event_obj3);

console.log(event_array);
class EventRecommender {
    constructor(signUpDate, email, phoneNumber) {
    this.date = signUpDate;
    this.email = email;
    this.number = phoneNumber;
    
    this.events = [];
    this.users = [];
    
    }

    addEvent() {
    const event = new Event(name, date, time, description);
    this.events.push(event);
    }

    addUser(userFirst, userLast) {
    const user = new User(userFirst, userLast);
    this.users.push(user);
    }

    saveUserEvent(user, event){
    for (let i=0;this.users.length > i;i++) {
        if (this.users[i].first_name === user.first_name && this.users[i].last_name === user.last_name) {
            this.users[i].event_array.push(event);
            break;
            }
        }
    }

    deleteUser() {
    // Deletes a User from the system
    }
   
    deleteEvent() {
    // Deletes the Event from the system
    }

    filter(){
    }
}

const event_rec1 = new EventRecommender("Nov 30, 2019", "email@email.com", "1234567890");

event_rec1.addUser("Kay", "Gifford");

const user1 = new User("Kay", "Gifford");
event_rec1.saveUserEvent(user1,event_obj1);
console.log('######');
console.log(event_rec1);
console.log(event_rec1.users[0].event_array);

// $(document).ready(function() {
//     let html = "";
//     $.each(event_array, function(index, item) {
//         html += `<li>${item.name} - ${item.description} - ${item.searchTickets(0, 100)}</li>`;
//     });
//     $.each(event_array, function(index, item) {
//         html += `<li>${item.name} - ${item.description} - ${item.lowestTicket()}</li>`;
//     })
//     // insert final html into #event...
//     $("#event").html(html);
// });