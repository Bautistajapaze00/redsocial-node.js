const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://bautijapaze23:bautistaj2222@cluster0.tkf3sky.mongodb.net/?retryWrites=true&w=majority')
.then(()=> console.log("connect to mongoDB atlas"))
.catch((error) => console.error(error));