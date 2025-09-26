class Booking {
    constructor (travelerName, destination, date, type) {
        this.travelerName = travelerName;
        this.destination = destination;
        this.date = date;
        this.type = type;
    }

    describe() {
        return `${this.travelerName} booked a ${this.type} to ${this.destination} on ${this.date}.`;
    }
}

class FlightBooking extends Booking {
    constructor (travelerName, destination, date, flightNumber) {
        super(travelerName, destination, date, "flight");
        this.flightNumber = flightNumber;
    }

    describe() {
        return `${this.travelerName} booked a ${this.type} to ${this.destination} on ${this.date} (Flight Number: ${this.flightNumber}).`;
    }
}


let bookings = [];

function addBooking(booking) {
    bookings.push(booking);
}

function removeBooking(booking) {
    bookings.splice(bookings.indexOf(booking));
}

function findBookingsByType(type, bookingl) {
    fbookingl = bookingl.filter(function(e) { 
        if (e.type == type) {
            return e;
        }
    });
    console.log("All flight bookings:");
    for (i in fbookingl) {
        console.log(fbookingl[i].describe());
    }
}

function displayBooking(bookingl) {
    console.log("All bookings:");
    for (i in bookingl) {
        console.log(bookingl[i].describe());
    }
}