const express = require('express'); // library to to invoke a web server
const hbs = require('hbs');

var app = express(); //Start the server

hbs.registerPartials(__dirname + '/views/partials')
app.set('view engine','hbs');

hbs.registerHelper('getCurrentYear',()=>{
    return new Date().getFullYear();
});

app.get('/about',(req,res)=>{
    res.render('about.hbs',{
        page_title: 'About Page',
        message: 'Welcome to ThnuderDome'
    });
});

app.get('/',(req, res)=>{
    res.render('home.hbs',{
        page_title: 'Home Page',
        message: 'We are at the home page'
    });
});



app.listen(3000); //set it to listen mode