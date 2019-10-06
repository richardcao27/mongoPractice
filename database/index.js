const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/movies', { useNewUrlParser: true });

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log('DB connected!'));

var movieSchema = new mongoose.Schema({
  title: String,
  watched: {
    type: Boolean,
    default: false
  }
});

var Movie = mongoose.model('Movie', movieSchema);

module.exports.db = db;
module.exports.Movie = Movie;
