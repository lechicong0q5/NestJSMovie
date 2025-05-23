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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateQuanLyPhimDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const swagger_2 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const create_quan_ly_phim_dto_1 = require("./create-quan-ly-phim.dto");
class UpdateQuanLyPhimDto extends (0, swagger_1.PartialType)(create_quan_ly_phim_dto_1.CreateQuanLyPhimDto) {
}
exports.UpdateQuanLyPhimDto = UpdateQuanLyPhimDto;
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, swagger_2.ApiProperty)({ required: false }),
    __metadata("design:type", String)
], UpdateQuanLyPhimDto.prototype, "ten_phim", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, swagger_2.ApiProperty)({ required: false }),
    __metadata("design:type", String)
], UpdateQuanLyPhimDto.prototype, "trailer", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, swagger_2.ApiProperty)({ required: false }),
    __metadata("design:type", String)
], UpdateQuanLyPhimDto.prototype, "mo_ta", void 0);
//# sourceMappingURL=update-quan-ly-phim.dto.js.map