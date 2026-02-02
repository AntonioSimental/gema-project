function registerAuth (req, res, next) {
    const fields = ['nombre', 'Apaterno', 'Amaterno', 'correo', 'contrasena'];

    function validateEmail (value) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    };

    for (let field of fields) {
        const value = req.body[field];
        if (typeof value !== 'string' || !value.trim()) {
            return res.status(400).json({msg:`Invalid ${field}`});
        };

        if (field === 'correo' && !validateEmail(value)) {
            return res.status(400).json({msg:'Invalid mail'});
        };

        req.body[field] = value.trim();
    };

    next();
}

module.exports = registerAuth;