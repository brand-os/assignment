require('dotenv').config();

const express = require('express');
const passport = require('passport');
const session = require('express-session');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
require('./auth'); // Ensure this is pointing to your auth.js

const app = express();

app.use(bodyParser.json());
app.use(cookieParser(process.env.COOKIE_KEY));
app.use(session({
  secret: process.env.COOKIE_KEY,
  resave: false,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

app.get('/auth/google',
  passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login'] })
);

app.get('/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  }
);

app.post('/api/convert-tree', (req, res) => {
  const flatTree = req.body;
  const nestedTree = convertToNestedTree(flatTree);
  res.json(nestedTree);
});

function convertToNestedTree(flatTree) {
  const idMap = flatTree.reduce((acc, node) => {
    acc[node.id] = { ...node, children: [] };
    return acc;
  }, {});

  let root = null;
  flatTree.forEach(node => {
    if (node.id === 1) {
      root = idMap[node.id];
    } else {
      node.children.forEach(childId => {
        idMap[node.id].children.push(idMap[childId]);
      });
    }
  });
  return root;
}

app.listen(5000, () => console.log('Server running on port 5000'));
