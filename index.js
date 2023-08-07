const express = require("express");
const app = express();
const mongoose = require('mongoose');
require("dotenv").config('./');
app.use(express.json());

const PORT = 3000;
const dbs = 'mongodb+srv://admin:admin@test.vrqu06e.mongodb.net/crud?retryWrites=true&w=majority'

const usersRouter = require('./Routes/user')
app.use('/user/', usersRouter)



const connectionOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose.set("strictQuery", false);
mongoose.connect(dbs, { useNewUrlParser: true, useUnifiedTopology: true });



const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Database Connected successfully");
});

app.listen(PORT, () => {
  console.log(`Server up on port ${PORT}`);
});
