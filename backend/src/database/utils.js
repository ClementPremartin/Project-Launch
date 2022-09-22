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
exports.getRepository = exports.getDatabase = void 0;
const typeorm_1 = require("typeorm");
const WilderEntity_1 = __importDefault(require("../models/Wilder/WilderEntity"));
const SchoolEntity_1 = __importDefault(require("../models/School/SchoolEntity"));
const SkillEntity_1 = __importDefault(require("../models/Skill/SkillEntity"));
const dataSource = new typeorm_1.DataSource({
    type: "sqlite",
    database: "wilersdb.sqlite",
    synchronize: true,
    entities: [WilderEntity_1.default, SchoolEntity_1.default, SkillEntity_1.default],
    logging: ["query", "error"],
});
let initialized = false;
function getDatabase() {
    return __awaiter(this, void 0, void 0, function* () {
        if (!initialized) {
            yield dataSource.initialize();
            initialized = true;
            console.log("Successfuly connected to database");
        }
        return dataSource;
    });
}
exports.getDatabase = getDatabase;
function getRepository(repo) {
    return __awaiter(this, void 0, void 0, function* () {
        return (yield getDatabase()).getRepository(repo);
    });
}
exports.getRepository = getRepository;
