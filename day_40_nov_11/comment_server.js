const express = require('express');
const cors = require('cors');

const { buildSchema } = require('graphql');
const { createHandler } = require('graphql-http/lib/use/express');
const { ruruHTML } = require('ruru/server');
const commentsArr = require('./comment_data.json');

const app = express();
app.use(cors())

// 1. construct a schema
const commentSchema = buildSchema(`
    type Query{
        comments:[Comment]
        comment(id:Int):Comment
    }
    type Comment{
        id:Int
        postId:Int
        name:String
        email:String
        body:String
    }
`)
// create a root that provides resolver function for each API Endpoint
const root = {
    comments: function () {
        return commentsArr;
    },
    comment: function (args) {
        return commentsArr.find(comment => comment.id == args.id);
    }
}
app.all('/api/comments', createHandler({ schema: commentSchema, rootValue: root }));
app.get('/',(req,res)=>{
    res.type('html');
    res.end(ruruHTML({endpoint:"/api/comments"}))
})
app.listen(5000,()=>{
    console.log('Server running at 5000')
})