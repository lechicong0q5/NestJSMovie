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
exports.CreateDatVeDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateDatVeDto {
}
exports.CreateDatVeDto = CreateDatVeDto;
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)({ message: `Trường Type_name bắt buộc phải cos` }),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], CreateDatVeDto.prototype, "user_id", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: `Trường Type_name bắt buộc phải cos` }),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], CreateDatVeDto.prototype, "ma_lich_chieu", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: `Trường Type_name bắt buộc phải cos` }),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], CreateDatVeDto.prototype, "ma_ghe", void 0);
//# sourceMappingURL=create-dat-ve.dto.js.map