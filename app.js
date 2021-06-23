/*
const axios = require('axios');
const express = require('express');
const emailer = require('./emailer');
const app = express();
app.use(express.json());
require('dotenv').config();


// route for contact mail

app.post('/contact-mails', (req, res) => {
    const { email, name, subject, description } = req.body;
    // error handlings joi
    emailer.sendMail(
      {
        from: 'maupied69@hotmail.com',
        to: 'reparautomobilemail@gmail.com',
        subject,
        text: `${name} tried to reach you with this message : ${description} from this email : ${email}`,
        html: `${name} tried to reach you with this message : ${description} from this email : ${email}`,
      },
      (err, info) => {
        if (err) {
          console.error(err);
          res.sendStatus(500);
        } else console.log(info);
        res.sendStatus(200);
      }
    );
  });

  /* ********************** server setup ********************** */ 
  /*
  app.listen(
    PORT,
    () => {
      if (!inTestEnv) {
        console.log(`Server running on port ${PORT}`);
      }
    }
  );
  
  */