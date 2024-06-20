const { Schema, model } = require("mongoose");

const blogSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    coverImage: {
        type: String,
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: "user",
        required: true
    },
}, { timestamps: true });

const blogModel = model("blog", blogSchema);

module.exports = blogModel;