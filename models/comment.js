const mongoose = require('mongoose');
const blog = require('./blog');
const comment_schema =  mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    },
    commentbody:{
        type:String,
        required:true
    },
    blogid:{
        type:mongoose.Schema.Types.ObjectId,
        required:true
    }
});

module.exports = mongoose.model('comment',comment_schema);