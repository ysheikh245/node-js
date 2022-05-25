const express = require('express')
const app = express();

const postController = require('../3rest-webservices/controller/postController')

app.get('/post', postController.post);

app.listen(8000);