const { Schema, model } = require("mongoose");

const blogSchema = new Schema({
    title: {
        type: String,
        require: true
    },
    body: {
        type: String,
        require: true
    },
    coverImage: {
        type: String,
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: "user",
        require: true
    },
}, { timestamps: true });

const blogModel = model("blog", blogSchema);

module.exports = blogModel;