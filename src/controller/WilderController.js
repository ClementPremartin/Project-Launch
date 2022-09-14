const {getWilders, createWilder, putWilder, getWilderById, deleteWilder} = require("../models/Wilder/WilderManager");

const findAllWilders = async (req, res) => {
    const wilders = await getWilders();
    res.json(wilders).status(200);
};

const findWilderById = async (req, res) => {
    const userId = req.params.id;
    const wilder = await getWilderById(userId);
    res.json(wilder).status(200);
}

const addWilder = async (req, res) => {
    const {firstname, lastname} = req.body;
    if(!firstname || !lastname) {
        res.status(400).json({error: "Firstname and Lasname are required."})
    } else {
        const newWilder = await createWilder(firstname, lastname);
        res.status(201).send(newWilder);
    }
}

const modifyWilderById = async (req, res) => {
    const { id } = req.params;
    const {firstname, lastname} = req.body;
        const modifyWilder = await putWilder(id, firstname, lastname);
        res.status(200).json(modifyWilder);
}

const deleteWilderById = async (req, res) => {
    const  { id } = req.params;
    try {
        await deleteWilder(id);
        res.json({message: `Wilder ${id} has been deleted`})
    } catch {
        res.status(404).json({error: "this is an error"});
    }
}

module.exports = {
    findAllWilders,
    addWilder,
    modifyWilderById,
    findWilderById,
    deleteWilderById
}