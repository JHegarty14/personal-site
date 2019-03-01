const express    = require('express'),
      app        = express(),
      bodyParser = require('body-parser'),
      nodemailer = require('nodemailer'),
      keys       = require('./config/keys');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  port: 465,
  auth: {
    user: keys.email_user,
    pass: keys.email_pass,
  }
});

app.use(bodyParser.json());

app.get('/contact', (req, res) => {
    console.log(req.body)
    const newUserMailOptions = {
        from: req.body.email,
        to: 'jmhegarty14@gmail.com',
        subject: "New message from jackhegarty.io",
        html: req.body.content
      };
      transporter.sendMail(newUserMailOptions, (err, result) => {
        if (err) console.log(err);
        else {
            res.status(200).json({
                message: 'Email sent successfully.'
            })
        }
      });
});

if (process.env.NODE_ENV === 'production') {
  // Express will serve production assets - ie main.js / main.class
  app.use(express.static('client/build'));

  // Express will serve index.html if route isn't recognized
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  })
}

const PORT = process.env.PORT || 3005;
app.listen(PORT);