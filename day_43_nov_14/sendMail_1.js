const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "sanjaysamantra2@gmail.com",
        pass: "vqnz agnb vioh jbmu", // google app password
    }
});
let mailOptions = {
    from: 'sanjaysamantra2@gmail.com',
    to: ['simranshah3012@gmail.com', 'raghu11697@gmail.com', 'sainathreddy4560@gmail.com'],
    subject: "Sending Email From NodeJS",
    html: `
        <h1>Ticket Booking Confirmation</h1>
        <pre>
            helloooooooo
            hiiiiiiiiiiiiii
            good morning
        </pre>
    `
}
transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
        console.log(err)
    } else {
        console.log('email sent succesfully!!!')
    }
})