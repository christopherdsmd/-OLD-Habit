if (process.env.NODE_ENV !== 'production') 
{
  require('dotenv').config()
}

const express = require('express');
const path = require('path');
const app = express();
const bcrypt = require('bcrypt')  //passwd encyption 
const passport = require('passport'); 
const methodOverride = require('method-override');

const initializePassport = require('./passport-config');
const flash = require('express-flash');
const session = require('express-session');

initializePassport(
  passport, 
  email => users.find(user => user.email === email),
  id => users.find(user => user.id === id)
)

//locally stored variable - may update database
const users = []  //stored users in local variable 

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({extended:false}))
app.use(flash())
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false
}))

app.use(passport.initialize())
app.use(passport.session())
app.use(methodOverride('_method'))

app.use(express.static('frog_photos'));
app.use(express.json());

app.get('/',  checkAuthenticated, (req, res) => {
  res.render('index.ejs', {name: req.user.name});
});

app.get('/login', checkNotAuthenticated, (req, res) => {
  res.render('login.ejs', { messages: req.flash('error') });
});


app.post('/login' , checkNotAuthenticated, passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/login',
  failureFlash: true,
}));

app.get('/register',  checkNotAuthenticated, (req, res) => {
  res.render('register.ejs');
});

app.post('/register', checkNotAuthenticated, async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10)
    users.push({
      id:Date.now().toString(),
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword
    })
    res.redirect('/login')
  }catch 
  {
    res.redirect('/register')
  }
  console.log(users)
});

//delete request for logout 
app.delete('/logout', (req, res, next) => {
  req.logOut((err) => {
    if (err) {
      return next(err);
    }
    res.redirect('/login');
  });
});

//checks to make sure user is logined in if not return to login screen 
function checkAuthenticated(req,res,next) {
  if(req.isAuthenticated()) 
  {
    return next();
  }

  res.redirect('/login')
}

//if the user is already logged in cannot return to login/register page
function checkNotAuthenticated(req,res,next) 
{
  if(req.isAuthenticated()) 
  {
   return res.redirect('/')
  }
  next()
}

//port 3000 server test 
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
