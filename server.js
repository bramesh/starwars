const fs = require('fs');
const express = require('express');

const app = express();
const port = process.env.PORT || 5000;

var users = [];
fs.readFile('users.json', {encoding: 'utf-8'}, function(err, data) {
  if(err) throw err;
  JSON.parse(data).forEach(function(user) {
    user.name.full = user.name.first + ' ' + user.name.last;
    users.push(user);
  })
})


app.get('/api/users', (req, res) => {
  console.log(users);
  var buffer = '';
  users.forEach(function(user) {
    buffer += '<a href="/api/' + user.username + '">' + user.name.full + '</a><br>'
  })
  res.send(buffer)
})

app.get('/api/:username', (req, res) => {
  var username = req.params.username;
  res.send(username);
})

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

app.get('/api/features', (req, res) => {
  let foodJokes = [
  {
    id: 99991,
    joke: "When Chuck Norris was a baby, he didn't suck his mother's breast. His mother served him whiskey, straight out of the bottle."
  },
  {
    id: 99992,
    joke: 'When Chuck Norris makes a burrito, its main ingredient is real toes.'
  },
  {
    id: 99993,
    joke: 'Chuck Norris eats steak for every single meal. Most times he forgets to kill the cow.'
  },
  {
    id: 99994,
    joke: "Chuck Norris doesn't believe in ravioli. He stuffs a live turtle with beef and smothers it in pig's blood."
  },
  {
    id: 99995,
    joke: "Chuck Norris recently had the idea to sell his urine as a canned beverage. We know this beverage as Red Bull."
  },
  {
    id: 99996,
    joke: 'When Chuck Norris goes to out to eat, he orders a whole chicken, but he only eats its soul.'
  }
  ];
  res.json(foodJokes);
})

app.listen(port, () => console.log(`Listening on port ${port}`));
