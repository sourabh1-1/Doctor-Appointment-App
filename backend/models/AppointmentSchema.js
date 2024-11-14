import mongoose from "mongoose";
import Doctor from "./DoctorSchema.js";

const appointmentSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
    },
    isPaid: {
      type: Boolean,
    },
    ticketPrice: {
      type: Number,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Appointment", appointmentSchema);
