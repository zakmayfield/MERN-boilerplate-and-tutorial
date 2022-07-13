//      @step-9     connect to our db with mongoose
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`DB Connected: ${conn.connection.host}`.underline.blue);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDB;
