const mongoose = require("mongoose");

const pass =
  "mongodb+srv://angelespardopared:kXtorglCoU1XInOX@cluster0.btw3luk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const connectMongo = async () => {
  try {
    const conn = await mongoose.connect(pass);
    console.log("INFO: Conexión a BD correcta:", conn.connection.name);
  } catch (error) {
    console.log("ERROR: (f connectMongo) ->", error.message);
  }
};
module.exports = { connectMongo };
