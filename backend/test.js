const jwt = require('jsonwebtoken')

const payload = {
  id: 1,
  name: "Paquito"
}

const token = jwt.sign(payload, "contraseñaSuperSegura", { expiresIn: "2s"})
console.log(token)

const mod = token + "jwt"
try {
  const auth = jwt.verify(mod, "contraseñaSuperSegura")
  console.log(auth)
} catch (err) {
  console.error(mod)
}
