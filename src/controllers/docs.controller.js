import Doc from "../models/docs.model.js";

export const getDocs = async (req, res) => {
    try {
        const docs = await Doc.find();
        res.json(docs);
    } catch (error) {
        return res.status(500).json({message: "Algo ha fallado para crear el documento"});
    }
};

export const createDocs = async (req, res) => {
    try {
        const { title, student, teacher, year, career, mode, url} = req.body;
        const newDoc = new Doc({
            title,
            student,
            teacher,
            year,
            career,
            mode,
            url
        });
        const savedDoc = await newDoc.save();
        res.json(savedDoc);
    } catch (error) {
        return res.status(500).json({message: "Algo ha fallado para crear el documento"});
    }
};

export const getDoc = async (req, res) => {
    try {
        const doc = await Doc.findById(req.params.id);
        if (!doc) return res.status(404).json({message: "Documento no encontrado"});
        res.json(doc);
    } catch (error) {
        return res.status(404).json({message: "Documento no encontrado"});
    }
};

export const deleteDocs = async (req, res) => {
    try {
        const doc = await Doc.findByIdAndDelete(req.params.id);
        if (!doc) return res.status(404).json({message: "Documento no encontrado"});
        return res.sendStatus(204);
    } catch (error) {
        return res.status(404).json({message: "Documento no encontrado"});
    }
};

export const updateDocs = async (req, res) => {
    try {
        const doc = await Doc.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
        if (!doc) return res.status(404).json({message: "Documento no encontrado"});
        res.json(doc);
    } catch (error) {
        return res.status(404).json({message: "Documento no encontrado"});
    }
};


