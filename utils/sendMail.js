const nodemailer = require("nodemailer");

// set up a transporter object to send the email using your email service
const transporter = nodemailer.createTransport({
    service: 'gmail',
    port: process.env.MAILPORT,
    secure: true,
    auth: {
        user: process.env.user,
        pass: process.env.pass
    },
    logger:true
});
// function to send the mail to the user and admin
function sendMailToUserAndAdmin(email,name,date,slot) {
    let mailOptions = {
        from: process.env.user,
        to: email,
        subject: "RaikaRai Offical Booking",
        text: `Congratulations! ${name}, your slot booked successfully for RaiKaRai Suggestion and slot timing is ${slot} and date : ${date}.`
    };
    transporter.sendMail(mailOptions,function(err,info){
        if(err){
            console.log(err);
        }
        else {
            console.log('Email sent : ' + info.response);
        }
        transporter.close();
    });
}

module.exports = sendMailToUserAndAdmin;
