const { Schema, model } = require("mongoose");

const commentSchema = new Schema({
    content: {
        type: String,
        required: true
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: "user",
        required: true
    },
    blogId: {
        type: Schema.Types.ObjectId,
        ref: "blog",
        required: true
    }
}, { timestamps: true });

const commentModel = model("comment", commentSchema);

model.exports = commentModel;