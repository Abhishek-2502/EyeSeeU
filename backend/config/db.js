import mongoose from "mongoose";

const connectDB = async () => {
  try {
    if (mongoose.connection.readyState >= 1) {
      console.log("MongoDB already connected");
      return;
    }

    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("MongoDB Connected");
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1); // Exit process on failure
  }
};

export default connectDB;
