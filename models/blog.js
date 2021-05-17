const mongoose = require('mongoose');
const comment = require('./comment');
const blog_schema =  mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    },
    body:{
        type:String,
        required:true
    },
    comments:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:comment
    }]
});

module.exports = mongoose.model('blog',blog_schema);