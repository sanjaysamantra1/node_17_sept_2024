const nodemailer = require("nodemailer");

class EmailService {
    sendEmail(email, msg) {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: "sanjaysamantra2@gmail.com",
                pass: "vqnz agnb vioh jbmu", // google app password
            }
        });
        let mailOptions = {
            from: 'sanjaysamantra2@gmail.com',
            to: email,
            subject: "Sending Email From NodeJS",
            html: `
                <h1>Ticket Booking Confirmation</h1>
                <pre>
                    ${msg}
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
    }
}
module.exports = EmailService;