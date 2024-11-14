const TicketManager = require('./ticket-manager');
const EmailService = require('./email-service');

const ticketManager = new TicketManager(3);
const emailService = new EmailService();

ticketManager.on('buyTicket', (email, msg) => {
    emailService.sendEmail(email, msg);
})
ticketManager.on('noTicketAvailable', (email, errMsg) => {
    emailService.sendEmail(email, errMsg);
})

ticketManager.buy('shubhadadhawale@gmail.com', 200)
ticketManager.buy('simranshah3012@gmail.com', 300)
ticketManager.buy('raghu11697@gmail.com', 400)
ticketManager.buy('sainathreddy4560@gmail.com', 100)