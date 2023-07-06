import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { createAccessToken } from "../libs/jwt.js";
import jwt from "jsonwebtoken";
import { TOKEN_SECRET } from "../config.js";

export const registro = async (req, res) => {
    const {username, email, password, usertype} = req.body;
    try {
        const userFound = await User.findOne({ email });
        if (userFound) return res.status(400).json(["El usuario ya existe"]);
        const passwordHash = await bcrypt.hash(password, 10);
        const newUser = new User({
            username,
            email,
            password: passwordHash,
            usertype
        });

        const userSaved = await newUser.save();
        const token = await createAccessToken({id: userSaved._id})
        res.cookie('token', token);
        res.json({
            id: userSaved._id,
            username: userSaved.username,
            email: userSaved.email,
            usertype: userSaved.usertype
        });
    } catch (error) {
        console.log(error);
    }
}

export const ingreso = async (req, res) => {
    const {email, password} = req.body;
    try {
        const userFound = await User.findOne({email});
        if (!userFound) return res.status(400).json({message: "Usuario no encontrado"});

        const isMatch = await bcrypt.compare(password, userFound.password);
        if (!isMatch) return res.status(400).json({message: "La contraseña es incorrecta"});

        const token = await createAccessToken({id: userFound._id})
        res.cookie('token', token);
        res.json({
            id: userFound._id,
            username: userFound.username,
            email: userFound.email,
            usertype: userFound.usertype
        });
    } catch (error) {
        console.log(error);
    }
}

export const salir = (req, res) => {
    res.cookie('token', '', {
        expires: new Date(0)
    });
    return res.sendStatus(200);
}

export const perfil = async (req, res) => {
    const userFound = await User.findById(req.user.id);
    if (!userFound) return res.status(400).json({message: "Usuario no encontrado"});
    return res.json({
        id:userFound._id,
        username: userFound.username,
        email: userFound.email
    });
}

export const getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        return res.status(500).json({message: "Algo ha fallado para obtener los usuarios"});
    }
};

export const verificarToken = async (req, res) => {
    const {token} = req.cookies;
    if (!token) return res.status(401).json({message: "No autorizado"});
    jwt.verify(token, TOKEN_SECRET, async (err, user) => {
        if (err) return res.status(401).json({message: "No autorizado"});
        const userFound = await User.findById(user.id);
        if (!userFound) return res.status(401).json({message: "No autorizado"});

        return res.json({
            id: userFound._id,
            username: userFound.username,
            email: userFound.email,
            usertype: userFound.usertype
        });
    });
}