import mongoose from "mongoose";

const HotelSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      unique: true,
      required: true,
    },
    description: {
      type: String,
    },
    phoneNumber: {
      type: String,
      maxlength: 18,
    },
    avatar: {
      type: String,
    },
    photos: [
      {
        type: String,
      },
    ],
    roomAvailable: {
      type: Number,
      default: 0,
      min: 0,
      max: 100,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Hotel", HotelSchema);
