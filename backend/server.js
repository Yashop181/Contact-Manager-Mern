const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
mongoose.connect(process.env.MONGO_URI)
.then(()=> console.log('MongoDb connected'))
.catch(err => console.log(err));

app.use('/api/contact', require('./routes/contacts'))

const PORT  = process.env.PORT || 8000;

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})