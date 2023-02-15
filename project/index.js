const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const path = require ('path');
const BodyParser = require('body-parser');
const http = require('http');
const fs = require('fs');
const dbConfig = require('./db/db.config');
const port = 3000;
const sql = require('mysql');

app.get('/static/SpringCss.css', (req, res) => {
    res.set({ 'Content-Type': 'text/css' });
    res.sendFile(__dirname + '/static/SpringCss.css');
  });

  app.use(express.static(path.join(__dirname, '/')));


app.use(bodyParser.urlencoded({extended: true }));
app.use (BodyParser.json());
app.set('views',path.join(__dirname,'views'));
app.set('view engin', 'pug');
app.use(express.static('static'));


app.use(express.static(path.join(__dirname, 'views')));
app.get('/static/Script.js', (req, res) => {
  res.set('Content-Type', 'application/javascript');
  res.sendFile(__dirname + '/static/Script.js');
});


app.get('/views/HomePage.html', (req, res) => {
    res.sendFile(__dirname + '/views/HomePage.html');
  });
  app.get('/views/AboutUs.html', (req, res) => {
    res.sendFile(__dirname + '/views/AboutUs.html');
  });
  app.get('/views/Terms.html', (req, res) => {
    res.sendFile(__dirname + '/views/Terms.html');
  });
  app.get('/views/SerchByArea.html', (req, res) => {
    res.sendFile(__dirname + '/views/SerchByArea.html');
  });
  app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/center.html');
  });
  app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/north.html');
  });
  app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/south.html');
  });
  
// create a database connection pool
const pool = sql.createPool({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DATABASE
});

// route for finding the nearest site
app.get('/nearest-site/:lat/:long', (req, res) => {
  const lat = parseFloat(req.params.lat);
  const long = parseFloat(req.params.long);

  pool.query(
    'SELECT name, price, HikingLev, distance(latitude, longitude, ?, ?) AS Dis FROM sites ORDER BY Dis ASC LIMIT 1',
    [lat, long],
    (error, results, fields) => {
      if (error) throw error;

      res.send(results);
    }
  );
});


app.listen(port,()=>{
    console.log('idan zohar!',port);
});




