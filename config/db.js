import mongoose from "mongoose";

const connectdb = async (uri) => {
  mongoose
    .connect(uri)
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((err) => {
      console.log("Failed to connect to MongoDB", err);
    });
};

export default connectdb;
