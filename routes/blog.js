const express = require('express');
const router = express.Router();
const blog = require('../models/blog');
const comment = require('../models/comment');
const {blog_validation} = require("../validation");


router.post('/',async(req,res)=>{
    const {error} = blog_validation(req.body);
    if(error){
        return res.status(422).json({message:error.details[0].message});
    }

    const new_blog = new blog({
        title:req.body.title,
        author:req.body.author,
        body:req.body.body
    });
    try{
        const saved_blog = await new_blog.save();
        return res.status(200).json({message:'Blog created'});
    }
    catch(err){
        return res.status(500).json({message:'Something Went wrong'});
    }

});

router.get('/',async(req,res)=>{
    try{
        const all_blogs = await blog.find({});
        return res.status(200).json({message:'success',data:all_blogs});
    }
    catch(err){
        return res.status(500).json({message:'Something Went wrong'});
    }
});

router.get('/:blogid',async(req,res)=>{
    try{
        const specific_blog = await blog.findOne({_id:req.params.blogid});
        if(specific_blog){
            return res.status(200).json({message:'success',data:specific_blog});
        }
        
        return res.status(404).json({message:'No Such Blog'});

    }
    catch(err){
        return res.status(500).json({message:'Something Went wrong'});
    }
});

router.put('/:blogid',async(req,res)=>{
    const {error} = blog_validation(req.body);
    if(error){
        return res.status(422).json({message:error.details[0].message});
    }
    try{
        const updatedblog = await blog.updateOne({_id:req.params.blogid},{$set:{title:req.body.title,author:req.body.author,date:Date.nowi,body:req.body.body}});
        if(updatedblog.n == 1 && updatedblog.nModified){
            return res.status(200).json({message:'updated successfully'});
        }
        else if(updatedblog.n == 1 && updatedblog.nModified == 0 ){
            return res.status(304).json({message:'Nothing to update'});
        }
        return res.status(404).json({message:'No Such Blog'});
        
    }
    catch(err){
        return res.status(500).json({message:'Something Went wrong'});
    }
});

router.delete('/:blogid',async(req,res)=>{
    try{
        const delete_post = await blog.deleteOne({_id:req.params.blogid});
        if(delete_post.deletedCount == 0){
            return res.status(404).json({message:'No such blog'});
        }
        const delete_post_comments = await comment.deleteMany({blogid:req.params.blogid});
        return res.status(200).json({message:'Successfully Deleted Blog'});
    }
    catch(err){
        
        return res.status(500).json({message:'Something Went wrong'});
    }
});




module.exports = router;