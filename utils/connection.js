import mongoose from "mongoose";

const connection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Connection success");
  } catch (error) {
    console.error(error);
  }
};

export default connection;
