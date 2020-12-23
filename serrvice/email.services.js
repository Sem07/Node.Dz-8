const nodemailer = require('nodemailer');
const EmailTemplates = require('email-templates');
const path = require('path');

const htmlTemplates = require('../email-templates');
const { EMAIL_SERVICES, EMAIL_AUTH_PASS, EMAIL_AUTH_USER } = require('../configs/config');

const transporter = nodemailer.createTransport({
    service: EMAIL_SERVICES,
    auth: {
        user: EMAIL_AUTH_USER,
        pass: EMAIL_AUTH_PASS
    }
});

const emailTemplates = new EmailTemplates({
    message: null,
    views: {
        root: path.join(process.cwd(), 'email-templates', 'templates'),
        options: {
            extension: 'ejs'
        }
    },
    juiceResources: {
        preserveImportant: true,
        webResources: {
            relativeTo: path.join(process.cwd(), 'email-templates', 'css')
        }
    }
});

const sendMail = async (userEmail, action, context) => {
    try {
        const template = htmlTemplates[action];

        if (!template) {
            throw new Error('Wrong template name');
        }
        const html = await emailTemplates.render(template.templateFileName, { ...context });

        return transporter.sendMail({
            from: 'info@gmail.com',
            to: userEmail,
            subject: template.subject,
            html,
        });
    } catch (e) {
        console.log(e);
    }
};

module.exports = { sendMail };
