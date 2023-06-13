const { default: mongoose } = require("mongoose");
const { isEmail } = require("validator");

const schema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      minlength: [3, "Username Harus Lebih Dari 2 Karakter"],
    },
    email: {
      type: String,
      required: [true, "Harap Masukan Email Anda"],
      unique: true,
      lowercase: true,
      validate: [isEmail, "Harap Masukan Email Dengan Benar!"],
    },
    password: {
      type: String,
      required: [true, "Harap Masukan Password Anda"],
      minlength: [6, "Password Harus Lebih Dari 5 Karakter"],
    },
    role: {
      type: String,
      default: "user",
    },
    reports: {
      // type: [{ type: mongoose.Schema.Types.ObjectId, ref: "Report" }],
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);

const userSchema = mongoose.model("User", schema);
module.exports = userSchema;
