const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({

    host: "mail.studiopaper.com.br",
    port: 25,
    secure: true,
    auth: {
        user: "contato@studiopaper.com.br",
        pass: "@Novacaine6"
    },
    tls: { rejectUnauthorized: true }
});

const mailOption = {
    from: 'contato@studiopaper.com.br',
    to: 'contato@studiopaper.com.br',
    subject: 'E-mail enviado pelo site',
    text: '...'
}

AOS.init();