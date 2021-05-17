const express = require('express');
const router = express.Router();
const blog = require('../models/blog');
const comment = require('../models/comment');
const mongoose = require('mongoose');
const {comment_validation} = require("../validation");

router.post('/:blogid',async(req,res)=>{
    const {error} = comment_validation(req.body);
    if(error){
        return res.status(422).json({message:error.details[0].message});
    }
    const blog_available = blog.findOne({_id:req.params.blogid});
    if(!(blog_available)){
        return res.status(404).json({message:'Blog does not exist'});
    }
    const new_comment = new comment({
        name:req.body.name,
        commentbody:req.body.commentbody,
        blogid:req.params.blogid
    });
    try{
        const saved_comment = await new_comment.save();
        const saved_comment_blog = await blog_available.updateOne({_id:req.params.blogid},{ "$push": { comments:saved_comment._id}});
       
        return res.status(200).json({message:'commented successfully'})
    }
    catch(err){
        console.log(err);
        return res.status(500).json({message:'Something Went wrong'});
    }

});

router.get('/:blogid',async(req,res)=>{
    const check_user_availability = await blog.findOne({_id:req.params.blogid});
    if(!(check_user_availability)){
        return res.status(404).json({message:'No such Blog'});
    }
    await blog.findOne({_id:req.params.blogid}).populate('comments').exec(function(err, all_comments) {
        if (err){
            return res.status(500).json({message:'Something went wrong'});
        }

        return res.status(200).json({message:'success',data:all_comments.comments})
    });

   
});

module.exports = router;