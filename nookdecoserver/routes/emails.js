var nodemailer    = require('nodemailer')

const transporter = nodemailer.createTransport({
    // Cambiar los datos según mail que se utilizará para el manejo de emails.
    // Yo utilicé este que es para hacer pruebas, se pueden ver la pruebas en https://ethereal.email/messages/5fa37f38ccbc44346152dc1e/22
    host: 'smtp.mail.yahoo.com',
    port: 465,
    auth: {
        // Se setean en archivo .env
        user: process.env.USER,
        pass: process.env.PASSWORD
    }
});

const sendEmail = (to, subject, html) => {
    const mailOption = {
        // En from poner mail propio de Nook.
        from: 'marlacroze@yahoo.com',
        to: to,
        subject: subject,
        html: html,
    };
    transporter.sendMail(mailOption, (error, info) => {
        if (error) return console.log(error)
        else console.log('Email Sent! ' + info.response);
    });
}

exports.create = (req, res) => {
    console.log(req.body);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json('Sending Email!');
    sendEmail(req.body.to, req.body.subject, req.body.html);
}
