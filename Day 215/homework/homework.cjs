const PORT = process.env.PORT || 3000;
const express = require('express');
const app = express();
const maitenanceM = require('./maitenanceM');
const ageM = require('./ageM');
const tokenM = require('./tokenM');
const loggerM = require('./loggerM');
const secretM = require('./secretM');   


app.use(maitenanceM);
app.use(loggerM);
app.use(secretM);

app.get('/', (req, res) => {
  res.send('Welcome to the Home Page!');
});
app.get('/about', (req, res) => {
  res.send('Welcome to the About Page!');
});
app.get('/contact', (req, res) => {
  res.send('Welcome to the Contact Page!');
});
app.get('/movies', ageM, (req, res) => {
  res.send('Welcome to the movie page.');
});
app.get('/profile', tokenM, (req, res) => {
  res.send('User Profile');
});
 

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}. You were successful! Yupeeee`);
});
