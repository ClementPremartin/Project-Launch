"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const SchoolEntity_1 = __importDefault(require("../School/SchoolEntity"));
const SkillEntity_1 = __importDefault(require("../Skill/SkillEntity"));
let Wilder = class Wilder {
    constructor(firstname, lastname, description, school, skills) {
        this.firstname = firstname;
        this.lastname = lastname;
        if (description) {
            this.description = description;
        }
        if (school) {
            this.school = school;
        }
        if (skills) {
            this.skills = skills;
        }
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], Wilder.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Wilder.prototype, "firstname", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Wilder.prototype, "lastname", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Wilder.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => SchoolEntity_1.default, (school) => school.wilders, { eager: true }),
    __metadata("design:type", SchoolEntity_1.default)
], Wilder.prototype, "school", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => SkillEntity_1.default, { eager: true }),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], Wilder.prototype, "skills", void 0);
Wilder = __decorate([
    (0, typeorm_1.Entity)(),
    __metadata("design:paramtypes", [String, String, String, SchoolEntity_1.default, Array])
], Wilder);
exports.default = Wilder;
