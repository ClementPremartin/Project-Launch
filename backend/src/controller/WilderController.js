"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addSkills = exports.deleteWilderById = exports.findWilderById = exports.modifyWilderById = exports.addWilder = exports.findAllWilders = void 0;
const WilderRepository_1 = __importDefault(require("../models/Wilder/WilderRepository"));
const utils_1 = require("../utils");
const findAllWilders = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const wilders = yield WilderRepository_1.default.getWilders();
    res.json(wilders).status(200);
});
exports.findAllWilders = findAllWilders;
const findWilderById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = req.params.id;
    const wilder = yield WilderRepository_1.default.getWilderById(userId);
    res.json(wilder).status(200);
});
exports.findWilderById = findWilderById;
const addWilder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { firstname, lastname, description, city_name } = req.body;
    if (!firstname || !lastname) {
        res.status(400).json({ error: "Firstname and Lastname are required." });
    }
    else {
        const newWilder = yield WilderRepository_1.default.createWilder(firstname, lastname, description, city_name);
        res.status(201).send(newWilder);
    }
});
exports.addWilder = addWilder;
const modifyWilderById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { firstname, lastname, description } = req.body;
    const modifyWilder = yield WilderRepository_1.default.putWilder(id, firstname, lastname, description);
    res.status(200).json(modifyWilder);
});
exports.modifyWilderById = modifyWilderById;
const deleteWilderById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        yield WilderRepository_1.default.deleteWilder(id);
        res.json({ message: `Wilder ${id} has been deleted` });
    }
    catch (_a) {
        res.status(404).json({ error: "this is an error" });
    }
});
exports.deleteWilderById = deleteWilderById;
const addSkills = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id: wilderId } = req.params;
    const { skillId } = req.body;
    if (!skillId) {
        res.status(404).send({ error: "Skill Id is required" });
    }
    else {
        try {
            const updatedWilder = yield WilderRepository_1.default.addSkillsToWilder(wilderId, skillId);
            res.json(updatedWilder).status(201);
        }
        catch (error) {
            res.status(404).json({ error: (0, utils_1.getErrorMessage)(error) });
        }
    }
});
exports.addSkills = addSkills;
