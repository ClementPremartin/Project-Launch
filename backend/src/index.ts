import express from "express";
import { findAllWilders, findWilderById, addWilder, modifyWilderById, deleteWilderById, addSkills} from "./controller/WilderController";
import WilderRepository from "./models/Wilder/WilderRepository";
import SkillRepository from "./models/Skill/SkillRepository";
import SchoolRepository from "./models/School/SchoolRepository";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("App running on express server!");
});


const WILDERS_PATH = "/wilders";
app.get(WILDERS_PATH, findAllWilders);
app.get(`${WILDERS_PATH}/:id`, findWilderById);
app.post(WILDERS_PATH, addWilder);
app.put(`${WILDERS_PATH}/:id`, modifyWilderById);
app.delete(`${WILDERS_PATH}/:id`, deleteWilderById);

app.post(`${WILDERS_PATH}/:id/skills`, addSkills);

const PORT = 4000;

const start = async() => {
    await SkillRepository.initializeRepository();
    await SchoolRepository.initializeRepository();
    await WilderRepository.initializeRepository();

    await SkillRepository.initializeSkill();
    await SchoolRepository.initializeSchool();
    await WilderRepository.initializeWilder();
    app.listen(PORT, () => console.log(`Server Running On Port: ${PORT}`));
}

start();