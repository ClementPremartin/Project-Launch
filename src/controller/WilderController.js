const {getWilders, createWilder} = require("../models/WilderManager");

const findAllWilders = async (req, res) => {
    const wilders = await getWilders();
    res.json(wilders).status(200);
};

const addWilder = async (req, res) => {
    const {firstname, lastname} = req.body;
    if(!firstname || !lastname) {
        res.status(400).json({error: "Firstname and Lasname are required."})
    } else {
        const newWilder = await createWilder(firstname, lastname);
        res.status(201).send(newWilder);
    }
}

module.exports = {
    findAllWilders,
    addWilder,
}