import express from "express";
import { getDatabase } from "./database/utils";
import { findAllWilders, findWilderById, addWilder, modifyWilderById, deleteWilderById, addSkills} from "./controller/WilderController";
import { initializeWilder } from "./models/Wilder/WilderManager";
import { initializeSchool } from "./models/School/SchoolManager";
import { initializeSkill } from "./models/Skill/SkillManager";

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
    await initializeSkill();
    await initializeSchool();
    await initializeWilder();
    await getDatabase();
    app.listen(PORT, () => console.log(`Server Running On Port: ${PORT}`));
}

start();