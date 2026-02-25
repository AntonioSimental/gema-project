const db = require("../database/db.js");
const bcrypt = require("bcrypt");

async function loginController(req, res) {
  const { correo, contrasena } = req.body;
  const query = `SELECT * FROM usuario WHERE correo = ?`;

  try {
    // Query to database
    const [rows] = await db.query(query, [correo]);

    // Validation if exist the user
    if (rows.length === 0) {
      return res.status(401).json({ msg: "Invalid credentials" });
    }

    const validatePass = await bcrypt.compare(contrasena, rows[0].contrasena);

    // Validation of password
    if (!validatePass) {
      return res.status(401).json({ msg: "Invalid credentials" });
    }

    // Message if user is correct
    return res.status(200).json({ msg: "Succuessful" });
  } catch (err) {
    // Message if a server error occurs
    return res.status(500).json({ msg: "Internal server error" });
  }
}

module.exports = loginController;
