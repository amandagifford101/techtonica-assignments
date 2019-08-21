class User {
    constructor(username, first_name, last_name) {
        this.username = username;
        this.first_name = first_name;
        this.last_name = last_name;
        this.savedEvents = [];

    }
}

class Event {
    constructor(eventName, eventDescription, eventDate) {
        this.eventName = name;
        this.eventDescription = description;
        this.eventDate = date;
    }
}


class EventRecommender {
    constructor() {
      // All main properties should go here.
  
      this.events = [];
      this.users = [];
  
    }
  
    // Adds a new Event to the System
    addEvent(eventName, eventDescription, eventDate) {
      const event = new Events(eventName, eventDescription, eventDate);
      this.events.push(event);
    }
  
    // Adds a new User to the System
    addUser(username, lastName, firstName) {
      const user = new Users(username, lastName, firstName);
      this.users.push(user);
    }
  
    //Allow users to save events to a personal Events array.
    saveUserEvent(user, event) {
      const index = this.findTheIndex(user, this.users);
      this.users[index].savedEvents.push(event);
    }
  
    // Deletes a User from the system
    deleteUser(userToBeDeleted) {
      const indexToBeDeleted = this.findTheIndex(userToBeDeleted, this.users);
      delete this.users[indexToBeDeleted];
      this.users.splice(indexToBeDeleted, 1);
    }
  
    deleteEvent(eventToBeDeleted) {
      const indexToBeDeleted = this.findTheIndex(eventToBeDeleted, this.events);
      delete this.events[indexToBeDeleted];
      this.events.splice(indexToBeDeleted, 1);
    }
  
    filterByDate(fromDate, toDate) {
      const result = [];
      for (let obj of this.events) {
        if (obj.eventDate >= fromDate && obj.eventDate <= toDate) {
          result.push(obj);
        }
      }
      return result;
    }
  
    findTheIndex(obj, objArray) {
      return objArray.findIndex(element => element === obj);
    }
  
  }

// const event_obj1 = new Event("Black Keys Concert", "Win a guitar signed by the entire band!");
// const event_obj2 = new Event("Zeppelin Constituents: A Led Zeppelin Tribute Band", "Come boogie down to your favorite classics!");
// const event_obj3 = new Event("Gala for Harvey Milk Foundation", "Come join us for live music, food, and rainbow vibes!");

// event_obj1.addAvailableTickets("General Admission", 80);
// event_obj2.addAvailableTickets("General Admission", 33);
// event_obj3.addAvailableTickets("Balcony", 100);
// event_obj1.addAvailableTickets("VIP", 202);
// event_obj2.addAvailableTickets("VIP", 303);
// event_obj3.addAvailableTickets("VIP", 404);

// var event_array = new Array();

// event_array.push(event_obj1, event_obj2, event_obj3);

// console.log(event_array);


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
////////////////////////

$(document).ready(function() {
    const event_rec_obj1 = new EventRecommender();
    $("div#form2").append(
        // Creating Form Div and Adding <h2> and <p> Paragraph Tag in it.
        $("<h3/>").text("Create Account"), $("<p/>").text("Complete all fields"), $("<form/>", {
        action: '#',
        method: '#'
        }).append(
        // Create <form> Tag and Appending in HTML Div form1.
        $("<input/>", {
        type: 'text',
        id: 'username',
        placeholder: 'Username'
        }), // Creating Input Element With Attribute.
        $("<input/>", {
        type: 'text',
        id: 'first',
        placeholder: 'First Name'
        }), $("<input/>", {
        type: 'text',
        id: 'last',
        placeholder: 'Last Name'
        }), $("<br/>"), $("<input/>", {
        type: 'button',
        id: 'submit',
        value: 'Submit'
        })))
    // $("div#form1").append(
    //     // Creating Form Div and Adding <h2> and <p> Paragraph Tag in it.
    //     $("<h3/>").text("Add Events to Personal Collection"), $("<p/>").text("Complete all fields"), $("<form/>", {
    //     action: '#',
    //     method: '#'
    //     }).append(
    //     // Create <form> Tag and Appending in HTML Div form1.
    //     $("<input/>", {
    //     type: 'text',
    //     id: 'Username',
    //     placeholder: 'Username'
    //     }), // Creating Input Element With Attribute.
    //     $("<input/>", {
    //     type: 'text',
    //     id: 'event_title',
    //     placeholder: 'Event Title'
    //     }), $("<br/>"), 
    //     $("<input/>", {
    //     type: 'button',
    //     id: 'submit2',
    //     value: 'Submit'
    //     })))
        $("div#deleteUserEvent").append(
            // Creating Form Div and Adding <h2> and <p> Paragraph Tag in it.
            $("<h3/>").text("Delete User Event"), $("<p/>").text("Complete all fields"), $("<form/>", {
            action: '#',
            method: '#'
            }).append(
            // Create <form> Tag and Appending in HTML Div form1.
            $("<input/>", {
            type: 'text',
            id: 'username',
            placeholder: 'Username'
            }), // Creating Input Element With Attribute.
            $("<input/>", {
            type: 'text',
            id: 'first',
            placeholder: 'First Name'
            }), $("<input/>", {
            type: 'text',
            id: 'last',
            placeholder: 'Last Name'
            }), $("<br/>"), $("<input/>", {
            type: 'button',
            id: 'submit',
            value: 'Submit'
            })))
        $("div#addUserEvent").append(
            // Creating Form Div and Adding <h2> and <p> Paragraph Tag in it.
            $("<h3/>").text("Add User Event to personal collection"), $("<p/>").text("Complete all fields"), $("<form/>", {
            action: '#',
            method: '#'
            }).append(
            // Create <form> Tag and Appending in HTML Div form1.
            $("<input/>", {
            type: 'text',
            id: 'Username',
            placeholder: 'Username'
            }), // Creating Input Element With Attribute.
            $("<input/>", {
            type: 'text',
            id: 'event_title',
            placeholder: 'Event Title'
            }), $("<br/>"), 
            $("<input/>", {
            type: 'button',
            id: 'submit2',
            value: 'Submit'
            })))
    $("div#deleteEvent").append(
        // Creating Form Div and Adding <h2> and <p> Paragraph Tag in it.
        $("<h3/>").text("Delete Event (Admin Access Only)"), $("<p/>").text("Complete all fields"), $("<form/>", {
        action: '#',
        method: '#'
        }).append(
        // Create <form> Tag and Appending in HTML Div form1.
        $("<input/>", {
        type: 'text',
        id: 'adminUsername2',
        placeholder: 'Username'
        }), // Creating Input Element With Attribute.
        $("<input/>", {
        type: 'text',
        id: 'adminPassword',
        placeholder: 'Password'
        }), $("<input/>", {
        type: 'text',
        id: 'eventTitle2',
        placeholder: 'Event Title'
        }), $("<br/>"), $("<input/>", {
        type: 'button',
        id: 'submit',
        value: 'Submit'
        })))
    $("div#addEvent").append(
        // Creating Form Div and Adding <h2> and <p> Paragraph Tag in it.
        $("<h3/>").text("Add Event (Admin Access Only)"), $("<p/>").text("Complete all fields"), $("<form/>", {
        action: '#',
        method: '#'
        }).append(
        // Create <form> Tag and Appending in HTML Div form1.
        $("<input/>", {
        type: 'text',
        id: 'adminUsername1',
        placeholder: 'Username'
        }), // Creating Input Element With Attribute.
        $("<input/>", {
        type: 'text',
        id: 'eventTitle1',
        placeholder: 'Event Title'
        }),$("<br/>"), 
        $("<input/>", {
        type: 'button',
        id: 'submit2',
        value: 'Submit'
        })))
    $("div#searchEvents").append(
        // Creating Form Div and Adding <h2> and <p> Paragraph Tag in it.
        $("<h3/>").text("Search for you favorite events!"), $("<p/>").text("Complete all fields"), $("<form/>", {
        action: '#',
        method: '#'
        }).append(
        // Create <form> Tag and Appending in HTML Div form1.
        $("<input/>", {
        type: 'text',
        id: 'Username',
        placeholder: 'Username'
        }), // Creating Input Element With Attribute.
        $("<input/>", {
        type: 'text',
        id: 'event_title',
        placeholder: 'Event Title'
        }), $("<br/>"), 
        $("<input/>", {
        type: 'button',
        id: 'submit2',
        value: 'Submit'
        })))

    $("#submit").click(function() {
        const username = $("#username").val();
        const first_name = $("#first").val();
        const last_name = $("#last").val();

        const user = new User(username, first_name, last_name);
        event_rec_obj1.users.push(user);
        console.log(event_rec_obj1.users);
    })
    $("#submit2").click(function() {
        const username = $("#username").val();
        const event_title = $("#event_title").val();

        for (i=0; i<event_rec_obj1.users.length; i++) {
            console.log(event_rec_obj1.users);
            if (username === event_rec_obj1.users[i].username) {
                event_rec_obj1.users[i].savedEvents.push(event_title);
            }
        }
    })
    $("#adminAdd").click(function() {
        const adminUsername = $("#adminUsername1").val();
        const event_title = $("eventTitle1").val();

        for (i=0; i<event_rec_obj1.event.length; i++) {
            if (event_title === event_rec_obj1.events[i]) {
                alert("Event already exists. Please enter another event.");
            }
        }
        event_rec_obj1.events.push(event_title);
    })
    });

    module.exports = EventRecommender;
