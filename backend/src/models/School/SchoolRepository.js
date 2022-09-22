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
const SchoolEntity_1 = __importDefault(require("./SchoolEntity"));
const WilderEntity_1 = __importDefault(require("../Wilder/WilderEntity"));
class SchoolRepository extends SchoolEntity_1.default {
    static initializeRepository() {
        return __awaiter(this, void 0, void 0, function* () {
            this.repository = yield (0, utils_1.getRepository)(SchoolEntity_1.default);
        });
    }
    static clearRepository() {
        return __awaiter(this, void 0, void 0, function* () {
            this.repository.clear();
        });
    }
    static initializeSchool() {
        return __awaiter(this, void 0, void 0, function* () {
            const wilderRepository = yield (0, utils_1.getRepository)(WilderEntity_1.default);
            yield wilderRepository.clear();
            yield this.clearRepository();
            yield this.repository.save({
                city_name: "Lyon",
            });
            yield this.repository.save({
                city_name: "Brest",
            });
        });
    }
    static getSchoolByCity(schoolCity) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.repository.findOneBy({ city_name: schoolCity });
        });
    }
}
exports.default = SchoolRepository;
