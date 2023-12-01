import mongoose from "mongoose";

const reportSchema = new mongoose.Schema({
  reportBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  reportAgainst: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  content: { type: String, trim: true },
  type: { type: String, trim: true },
  reason: { type: String, trim: true },
  status: { type: String, trim: true },
});

const ReportModel = mongoose.model("report", reportSchema);
export default ReportModel;
