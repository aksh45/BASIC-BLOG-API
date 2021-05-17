const joi = require('joi');

const blog_validation = (data)=>{
    const blog_schema = joi.object({
        title: joi.string().max(100).required(),
        author: joi.string().max(100).required(),
        body: joi.string().required()

    })
    const error_blog = blog_schema.validate(data);

    return  error_blog;
}

const comment_validation = (data)=>{
    const comment_schema = joi.object({
        name: joi.string().max(100).required(),
        commentbody: joi.string().required(),

    })
    const error_comment = comment_schema.validate(data);

    return  error_comment;
}

module.exports.blog_validation = blog_validation;
module.exports.comment_validation = comment_validation;
