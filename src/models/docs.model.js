import mongoose from "mongoose";

const docsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    student: {
        type: String,
        required: true,
    },
    teacher: {
        type: String,
        required: true,
    },
    year: {
        type: Number,
        required: true,
    },
    career: {
        type: String,
        required: true,
    },
    mode: {
        type: String,
        required: true,
    },
    url: {
        type: String
    },
});

export default mongoose.model("Docs", docsSchema);