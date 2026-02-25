function loginValidation(req, res, next) {

  // Function to validate email format
  function validateEmail(value) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  }

  const fields = ["correo", "contrasena"];

  // For to travel the array and execute the validations for all fields
  for (let field of fields) {
    const value = req.body[field];
    if (typeof value !== "string" || !value.trim()) {
      return res.status(400).json({ msg: `Invalid ${field}` });
    }

    if (field === "correo" && !validateEmail(value)) {
      return res.status(400).json({msg:"Invalid mail"});
    }

    // Eliminate spaces of all data
    req.body[field] = value.trim();
  }

  next();
}

module.exports = loginValidation;
