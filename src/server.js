// const dotenv = require('dotenv');


require("dotenv").config();

const connectDB = require("./config/db");
const app = require("./index");


app.listen(process.env.PORT || 5000, async () => {
    try {
      await connectDB();
      console.log("listening port 5000");
    } catch (err) {
      console.log(err);
    }
  });


