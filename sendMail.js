const emailer = require('./emailer');

emailer.sendMail(
  {
    from: 'joris-maupied_student2021@wilder.school',
    to: 'maupied69@hotmail.com',
    subject: 'This is a test email',
    text: 'Hello world',
    html: '<p>Hello <em>world</em></p>',
  },
  (err, info) => {
    if (err) console.error(err);
    else console.log(info);
  }
);