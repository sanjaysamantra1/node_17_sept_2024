const { EventEmitter } = require('events');

class TicketManager extends EventEmitter {
    constructor(ticketCount) {
        super();
        this.ticketCount = ticketCount;
    }
    buy(email, price) {
        if (this.ticketCount > 0) {
            this.ticketCount--;
            const msg = `Your Ticket booking is successful at ${new Date().toLocaleTimeString()} for price ${price}`;
            this.emit('buyTicket', email, msg);
        } else {
            this.emit('noTicketAvailable', email, 'Sorry, No more ticket available');
        }
    }
}
// TicketManager class object can use emit() on() etc
module.exports = TicketManager;