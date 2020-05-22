import mongoose from "mongoose";

const AdminSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      maxlength: 18,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      maxlength: 18,
      required: true,
    },
    fullname: {
      type: String,
      maxlength: 80,
    },
    phoneNumber: {
      type: String,
      maxlength: 18,
    },
    avatar: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Admin", AdminSchema);
