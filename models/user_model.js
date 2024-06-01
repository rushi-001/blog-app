const { createHmac, randomBytes } = require("node: crypto");
const { Schema, model } = require("mongoose");

const userSchema = new Schema({
    fullName: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    salt: {
        type: String,
        require: true,
    },
    password: {
        type: String,
        require: true
    },
    profileImageURL: {
        type: string,
        default: "/assets/images/defaultAvatar.png",
    },
    role: {
        type: String,
        enum: ["USER, ADMIN"],
        default: "USER",
    }

}, { timestamps: true });

userSchema.pre("save", function (next) {

    const user = this;

    if (!user.isModified("password")) return;

    const salt = randomBytes(16).toString();
    const hashedPassword = createHmac("sha256", salt).update(user.password).digest("hex");
    this.salt = salt;
    this.password = hashedPassword;

    next();

})

const userModel = model("user", userSchema);

module.exports = userModel;