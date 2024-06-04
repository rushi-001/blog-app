const { createHmac, randomBytes } = require("crypto");
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
        type: String,
        default: "/assets/images/defaultAvatar.png",
    },
    role: {
        type: String,
        enum: ["USER", "ADMIN"],
        default: "USER",
    }

}, { timestamps: true });

// on save the password will be hashed
userSchema.pre("save", function (next) {

    const user = this;

    if (!user.isModified("password")) return;

    const salt = randomBytes(16).toString();
    const hashedPassword = createHmac("sha256", salt).update(user.password).digest("hex");
    this.salt = salt;
    this.password = hashedPassword;

    next();

})

// making `function on schema` to `check the password` when user login
userSchema.static('matchPassword', async function (email, password) {
    const user = await this.findOne({ email });
    if (!user) throw new Error("user not found!")
    const salt = user.salt;
    const hashedPassword = user.password;
    const userProvidedHash = createHmac("sha256", salt).update(password).digest("hex");
    if (hashedPassword !== userProvidedHash) throw new Error("the password is incorrect!");
    return user;
})

const userModel = model("user", userSchema);

module.exports = userModel;