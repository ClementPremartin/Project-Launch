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
const SkillEntity_1 = __importDefault(require("../Skill/SkillEntity"));
const WilderEntity_1 = __importDefault(require("../Wilder/WilderEntity"));
class SkillRepository extends SkillEntity_1.default {
    static initializeRepository() {
        return __awaiter(this, void 0, void 0, function* () {
            this.repository = yield (0, utils_1.getRepository)(SkillEntity_1.default);
        });
    }
    static clearRepository() {
        return __awaiter(this, void 0, void 0, function* () {
            this.repository.clear();
        });
    }
    static initializeSkill() {
        return __awaiter(this, void 0, void 0, function* () {
            const wilderRepository = yield (0, utils_1.getRepository)(WilderEntity_1.default);
            yield wilderRepository.clear();
            yield this.clearRepository();
            yield this.repository.save({
                skill_name: "JS",
                rate: 5
            });
            yield this.repository.save({
                skill_name: "Java",
                rate: 1
            });
            yield this.repository.save({
                skill_name: "PHP",
                rate: 3
            });
        });
    }
    static getSkillBySkillName(skillName) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.repository.findOneBy({ skill_name: skillName });
        });
    }
    static getSkillById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.repository.findOneBy({ id });
        });
    }
}
exports.default = SkillRepository;
