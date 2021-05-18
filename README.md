# Blog Api
 Created an CRUD API for bloging , following tech stack is used in this APi :-

 1. Node js
 2. Express js
 3. Mongodb

 ## How to run this Api ?

 1. clone the repo
 2. cd to the cloned repo
 3. npm i
 4. Create a .env file with a credential DB_CONNECT , the value of the DB_CONNECT is the connection url for your mongo instance .
 5. You can create a free mongo instance at [Mongo Cloud](https://cloud.mongodb.com)

 ##  API URLS

 The [Postman Collection](https://github.com/aksh45/BASIC-BLOG-API/blob/main/Blog%20API.postman_collection.json) file is present in this repo you can use that to know about the urls.

 ## Basic Workflow of the API

 1. User can create a blog by sending a post request to baseurl/blog in x-www-form-urlencoded format or in json format, the parameters required are title , author ,body of the blog.
 2. User can get the list of all the blogs by sending a get request to baseurl/blog
 3. user can get the specific blog by sending a get request at baseurl/blog/blogid here blogid is _id stored in db.
 4. User can delete a blog sending a delete request to baseurl/blog/blogid
 5. user can update the blog by sending the put request to baseurl/blog/blogid and parameters required are similar to post request.
 6. User can comment to particular blog by sending a post request to baseurl/comment/blogid and the parameters required are  name , commentbody
 7. User can get list of all the comments on particular blog by sending a get request to baseurl/comment/blogid
 

## Deployed Api

 The Api is deployed on [heroku](https://evolv-fit-blog-api.herokuapp.com) , you can use this for testing purpose.

 
## Why Mongo ?

Though i could have used relational database like sql instead of no-sql but i don't find any specific reason for not using no-sql, the blogging api will not have any complex relations nor the logic for the blogging api is much complex so i prefered to use no-sql , it will provide easy scalability to the API and will provide high performance with ease of use. 