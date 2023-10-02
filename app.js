const express = require('express');
const app = express();
const tasks = require('./routes/tasks');

const mongoose=require('mongoose');
const userRoutes = require('./routes/user');


const dburi='mongodb+srv://tasktest:tasktest@cluster0.vd9sccn.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(dburi,{ useNewUrlParser: true, useUnifiedTopology: true })
.then((result)=> app.listen(323))
.catch((err)=> console.log(err));


app.use(express.static('./public'));
app.use(express.json());

app.use('/api/v1/tasks', tasks);
app.use('/api/v1/user', userRoutes);


