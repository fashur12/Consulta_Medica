const jwt = require('jsonwebtoken');
const Config = require("../config.js");

const verifyTokenMiddleware = (req, res, next) => {
    const authHeader = req.header('authorization');
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({ message: "Token inválido o no proporcionado" });
    }

    const token = authHeader.split(" ")[1];

    try {
        const decoded = jwt.verify(token, Config.secreteWord);
        req.user = decoded;
        next();
    } catch (error) {
        res.status(403).json({ message: "Token no válido", error: error.message });
    }
};

module.exports = { verifyTokenMiddleware };
