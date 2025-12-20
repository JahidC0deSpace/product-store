import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("MongoDB connected");
  } catch (error) {
    console.error("error in connecting mongodb", error);
    process.exit(1); ///1 indicates failure and 0 indicates success
  }
};
