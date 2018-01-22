const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors({optionSuccessStatus: 200}));
app.use(express.static('public'));


app.get("/",  (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

// respond with IP, language and user-agent headers.
app.get('/api/whoami',  (req, res) => {

  res.json({IP:        req.headers['x-forwarded-for'].substr(0, req.headers['x-forwarded-for'].indexOf(',')),
            language:  req.headers['accept-language'],
            userAgent: req.headers['user-agent']});
});


const listener = app.listen(process.env.PORT,  () => {
  console.log('Your app is listening on port ' + listener.address().port);
});
