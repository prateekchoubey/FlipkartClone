const express = require('express');
const env = require('dotenv');
const app = express();
const mongoose = require('mongoose');


const authRoutes = require("./routes/auth");
const adminRoutes = require("./routes/admin/auth");
env.config();

// MongoDB config

        mongoose.connect(`mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.v5gsycd.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }).then(()=> {
            console.log("database connected");
        });

// Express app setup
app.use(express.json());

app.use('/api',authRoutes);
app.use('/api',adminRoutes);

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});
