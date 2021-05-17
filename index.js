const express = require('express');
const app = express();
const mongoose = require('mongoose');
const blog = require('./routes/blog');
const comment = require('./routes/comment');
require('dotenv/config');

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use('/blog',blog);
app.use('/comment',comment);
app.get('*',function(req, res){
    res.status(400).send('Sorry this Page does not exist');
  });
mongoose.connect(process.env.DB_CONNECT,{ useNewUrlParser: true,useUnifiedTopology: true },() =>{
});

app.listen(process.env.PORT || 3000);