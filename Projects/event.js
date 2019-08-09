class UserPref {
    constructor(min, max) {
        this.minPrice = min;
        this.mxPrice = max;
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

    // Name and Email validation Function.
function validation() {
    var minPrice = $("#minPrice").val();
    var maxPrice = $("#maxPrice").val();
    if (minPrice === '' || maxPrice === '') {
        alert("Please fill in all fields.");
        return false;
    } else {
        return true;
    }
};

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


$(document).ready(function() {
    let html = "";
    console.log(document.getElementById("maxPrice").nodeValue);
    console.log(document.getElementById("minPrice").nodeValue);
    //Submit form with min, max function
    $("button1").click(function() {
        var minPrice = $("#minPrice").val();
        var maxPrice = $("#maxPrice").val();
        if (validation()) { //Calling Validation function
            $("form").submit(); //Form Submission
        }

    });
    $.each(event_array, function(index, item) {
        html += `<li>${item.name} - ${item.description} - ${item.searchTickets(priceRange.minPrice, priceRange.maxPrice)}</li>`;
    });
    // $.each(event_array, function(index, item) {
    //     html += `<li>${item.name} - ${item.description} - ${item.lowestTicket()}</li>`;
    // })
    // insert final html into #event...
    $("#event").html(html);
});