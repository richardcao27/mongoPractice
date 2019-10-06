const express = require('express');
const mongoose = require('../database/index.js');
const bodyParser = require('body-parser');

const app = express();

const PORT = 3000;

app.use(bodyParser.json());

//READ
app.get('/movies', (req, res) => {
  mongoose.Movie.find((err, documents) => {
    if (err) {
      console.log('Could not retrieve movies!');
    } else {
      res.status(200).send(documents);

      //   res.sendStatus(200);
    }
  });
});

//CREATE
app.post('/movies', (req, res) => {
  var value = req.body.title;
  var newMovie = new mongoose.Movie({ title: value });
  newMovie.save((err, documents) => {
    if (err) {
      console.log('Could not save to db!');
    } else {
      res.sendStatus(200);
    }
  });
});

app.put('/movies', (req, res) => {
  var value = req.body.title;

  //   mongoose.Movie.update({title: value,})
  //   mongoose.Movie.find((err, { title: value }) => {
  //     if (err) {
  //       console.log('Could not update movie!');
  //     } else {
  //     }
  //   });
});

app.delete('/movies', (req, res) => {
  var value = req.body.title;
  mongoose.Movie.findOneAndDelete({ title: value }, (err, document) => {
    if (err) {
      res.sendStatus(500);
    } else {
      console.log('Deleted ', document);
      res.sendStatus(200);
    }
  });
});

app.listen(PORT, () => console.log('Server started on port ', PORT));
