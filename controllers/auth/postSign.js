const userSchema = require("../../models/userSchema");

const handleErrors = (err) => {
  console.log(`${err.message} (${err.code})`);
  let errors = { email: "", password: "" };

  // Duplicate Errors
  if (err.code === 11000) {
    errors.email = "Email yang Anda Masukan Sudah Terdaftar";
    return errors;
  }

  // Validation Erros
  if (err.message.includes("User validation failed")) {
    Object.values(err.errors).forEach(
      ({ properties }) => (errors[properties.path] = properties.message)
    );
  }

  return errors;
};

module.exports = async (req, res) => {
  try {
    await userSchema
      .create(req.body)
      .then((data) => res.json({ code: 200, status: "success", data }));
  } catch (err) {
    const errors = handleErrors(err);
    res.status(400).json({ code: 400, message: "failed", errors });
  }
};
