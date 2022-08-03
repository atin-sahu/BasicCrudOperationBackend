

// webpack.config.js
const Dotenv = require('dotenv-webpack');

// module.exports = {
//   ...
//   plugins: [
//     new Dotenv()
//   ]
//   ...
// };

const connectDB = require("./config/db");
const app = require("./index");

app.listen(5000 || process.env.port, async () => {
    try {
      await connectDB();
      console.log("listening port 5000");
    } catch (err) {
      console.log(err);
    }
  });


