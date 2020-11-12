const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const app = express();
const items = require('./routes/api/items');

app.use(express.json());

//connect to DB
mongoose.connect(process.env.DATABASE_URL,
    {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true}
    ).then(()=>{console.log('DB Connected!')})
    .catch((error)=>{
        console.error(error);
    })

app.use('/api/items', items);

    const PORT= process.env.PORT || 3001
app.listen(process.env.PORT || 3001, ()=>{
    console.log(`Server listening on PORT: ${PORT}`);
})

