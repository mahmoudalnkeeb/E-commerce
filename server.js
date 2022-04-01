const errHandler = require('./middlewares/errHandler.js');
const routes = require('./routes/routes.js');
const mongoose = require('mongoose');
const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const app = express();
dotenv.config();

// database connection
const uri = process.env.MONGODB_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = { mongoose };

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './public')));
app.set('view engine', 'ejs');
app.use(errHandler);
app.use(routes);

// Start server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});
