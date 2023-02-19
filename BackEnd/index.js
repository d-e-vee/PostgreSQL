var express = require('express');
// var bodyParser = require('body-parser');
var cors = require("cors");
var app = express();
var qrs = require('./queries');


var port = 3001;
app.use(express.json());  
app.use(cors());

// app.use(auth(config));
// Endpoint to serve the configuration file
app.get("/auth_config.json", (req, res) => {
  res.sendFile(("C:\\Users\\shami\\Documents\\reactexpress\\auth_config.json"));
});

// Serve the index page for all other requests
app.get("/", (_, res) => {
  res.sendFile("C:\\Users\\shami\\Documents\\OAuthTest\\index.html");
});
app.get('/a', qrs.getCars);
app.get('/b', qrs.getBrands);
app.get('/c', qrs.getNames);
app.get('/d', qrs.getRating);
app.post('/e', qrs.insert);
app.delete('/f', qrs.deleteElement);


app.listen(port, function() {
    console.log('Server running at http://127.0.0.1:%s', port);
  });