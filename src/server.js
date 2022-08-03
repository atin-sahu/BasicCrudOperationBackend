// const dotenv = require('dotenv');
const cors = require("cors");
app.use(cors());
require("dotenv").config();


const connectDB = require("./config/db");
const app = require("./index");

app.get("", (req, res) => {
  try {
    res.send("homepage");
  } catch (error) {
    res.send(error);
  }
});

app.listen(5000 || process.env.PORT, async () => {
    try {
      await connectDB();
      console.log("listening port 5000");
    } catch (err) {
      console.log(err);
    }
  });


