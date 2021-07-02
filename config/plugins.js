module.exports = ({ env }) => ({
  // ...
  email: {
    provider: 'nodemailer',
    providerOptions: {
      // apiKey: env('SENDGRID_API_KEY'),
      host: process.env.SMTP_HOST,
      host: env(SMTP_HOST),
      port: process.env.SMTP_PORT,
      secure: true,
    },
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
    settings: {
      defaultFrom: 'maupied69@hotmail.com',
      defaultReplyTo: 'maupied69@hotmail.com',
      testAddress: 'maupied69@hotmail.com',
    },
    tls: {
      rejectUnauthorized: false,
    },
  },
  // ...
});
 