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
const utils_1 = require("../../database/utils");
const SkillRepository_1 = __importDefault(require("../Skill/SkillRepository"));
const SchoolRepository_1 = __importDefault(require("../School/SchoolRepository"));
const WilderEntity_1 = __importDefault(require("./WilderEntity"));
class WilderRepository extends WilderEntity_1.default {
    static initializeRepository() {
        return __awaiter(this, void 0, void 0, function* () {
            this.repository = yield (0, utils_1.getRepository)(WilderEntity_1.default);
        });
    }
    static clearRepository() {
        return __awaiter(this, void 0, void 0, function* () {
            this.repository.clear();
        });
    }
    static initializeWilder() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.clearRepository();
            const lyonSchool = yield SchoolRepository_1.default.getSchoolByCity("Lyon");
            const brestSchool = yield SchoolRepository_1.default.getSchoolByCity("Brest");
            const phpSkill = yield SkillRepository_1.default.getSkillBySkillName("PHP");
            const javaSkill = yield SkillRepository_1.default.getSkillBySkillName("Java");
            const jsSkill = yield SkillRepository_1.default.getSkillBySkillName("JS");
            const philippe = new WilderEntity_1.default("Philippe", "LeBrigant", "Je suis passionné de maquette en allumette et j'apprécie particulièrement lire des mangas.", lyonSchool, [phpSkill, javaSkill]);
            const jeanjean = new WilderEntity_1.default("Jeanjean", "Bon", "Je suis dev spécialisé dans le html. J'aime compter les étoiles. Je me nourris exclusivement de carotte.", brestSchool, [jsSkill, javaSkill, phpSkill]);
            yield this.repository.save([philippe, jeanjean]);
        });
    }
    static getWilders() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.repository.find();
        });
    }
    static getWilderById(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const wilderRepository = yield (0, utils_1.getRepository)(WilderEntity_1.default);
            const finalWilder = wilderRepository.findOne({
                where: {
                    id: userId
                },
            });
            return finalWilder;
        });
    }
    static createWilder(firstname, lastname, description, city_name) {
        return __awaiter(this, void 0, void 0, function* () {
            const school = yield SchoolRepository_1.default.getSchoolByCity(city_name);
            const newWilder = this.repository.create({ firstname, lastname, description });
            yield this.repository.save(newWilder);
            return newWilder;
        });
    }
    static putWilder(id, firstname, lastname, description) {
        return __awaiter(this, void 0, void 0, function* () {
            const wilderModifications = yield this.repository.findOneBy({ id });
            if (!wilderModifications) {
                throw Error("No existing Wilder");
            }
            ;
            return this.repository.save({
                id,
                firstname,
                lastname,
                description
            });
        });
    }
    static deleteWilder(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const existingWilder = yield this.repository.findOneBy({ id });
            if (!existingWilder) {
                throw Error("No existing Wilder matching ID");
            }
            return this.repository.remove(existingWilder);
        });
    }
    static addSkillsToWilder(userId, skillId) {
        return __awaiter(this, void 0, void 0, function* () {
            const wilder = yield this.repository.findOneBy({ id: userId });
            if (!wilder) {
                throw Error("No existing Wilder matching id");
            }
            const skill = yield SkillRepository_1.default.getSkillById({ id: skillId });
            if (!skill) {
                throw Error("No existing Skill mathing id");
            }
            wilder.skills = [...wilder.skills, skill];
            return this.repository.save(wilder);
        });
    }
}
exports.default = WilderRepository;
