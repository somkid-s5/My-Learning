import mongoose from "mongoose";

const dataSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
  },
  {
    versionKey: false, // ปิดการใช้งาน "_v"
  }
);

const Data = mongoose.model("Data", dataSchema);

export default Data;
