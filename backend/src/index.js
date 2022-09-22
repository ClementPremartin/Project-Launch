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
const express_1 = __importDefault(require("express"));
const WilderController_1 = require("./controller/WilderController");
const WilderRepository_1 = __importDefault(require("./models/Wilder/WilderRepository"));
const SkillRepository_1 = __importDefault(require("./models/Skill/SkillRepository"));
const SchoolRepository_1 = __importDefault(require("./models/School/SchoolRepository"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.get("/", (req, res) => {
    res.send("App running on express server!");
});
const WILDERS_PATH = "/wilders";
app.get(WILDERS_PATH, WilderController_1.findAllWilders);
app.get(`${WILDERS_PATH}/:id`, WilderController_1.findWilderById);
app.post(WILDERS_PATH, WilderController_1.addWilder);
app.put(`${WILDERS_PATH}/:id`, WilderController_1.modifyWilderById);
app.delete(`${WILDERS_PATH}/:id`, WilderController_1.deleteWilderById);
app.post(`${WILDERS_PATH}/:id/skills`, WilderController_1.addSkills);
const PORT = 4000;
const start = () => __awaiter(void 0, void 0, void 0, function* () {
    yield SkillRepository_1.default.initializeRepository();
    yield SchoolRepository_1.default.initializeRepository();
    yield WilderRepository_1.default.initializeRepository();
    yield SkillRepository_1.default.initializeSkill();
    yield SchoolRepository_1.default.initializeSchool();
    yield WilderRepository_1.default.initializeWilder();
    app.listen(PORT, () => console.log(`Server Running On Port: ${PORT}`));
});
start();
