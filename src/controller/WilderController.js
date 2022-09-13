const {getWilders, createWilder} = require("../models/WilderManager");

const findAll = async (req, res) => {
    const wilders = await getWilders();
    res.json(wilders).status(200);
};

module.exports = {
    findAll,
}