const mongoose = require("mongoose");

mongoose
  .connect("mongodb://Localhost/mean-employees", {
     useUnifiedTopology: true,
     useNewUrlParser: true,
    
})
  .then((db) => console.log("db is conected"))
  .catch((err) => console.error(err));