const express =  require("express")
const connectDB = require("./config/db")
const path = require("path");
const { connect } = require("http2");

//initialize the app
const app = express();

//connect database
connectDB();

//initialize middleware
app.use(express.json());

//define routes

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});