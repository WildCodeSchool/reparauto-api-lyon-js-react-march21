module.exports = ({ env }) => ({
    // ...
    email: {
      provider: 'sendgrid',
      providerOptions: {
        apiKey: env('SENDGRID_API_KEY'),
      },
      settings: {
        defaultFrom: 'maupied69@hotmail.com',
        defaultReplyTo: 'maupied69@hotmail.com',
        testAddress: 'maupied69@hotmail.com',
      },
    },
    // ...
  });