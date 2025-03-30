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
exports.CreateNguoiDungDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateNguoiDungDto {
}
exports.CreateNguoiDungDto = CreateNguoiDungDto;
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)({ message: `Trường Type_name bắt buộc phải cos` }),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], CreateNguoiDungDto.prototype, "user_id", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: `Trường Type_name bắt buộc phải cos` }),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreateNguoiDungDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: `Trường Type_name bắt buộc phải cos` }),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreateNguoiDungDto.prototype, "pass_word", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: `Trường Type_name bắt buộc phải cos` }),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreateNguoiDungDto.prototype, "full_name", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: `Trường Type_name bắt buộc phải cos` }),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreateNguoiDungDto.prototype, "avatar", void 0);
//# sourceMappingURL=create-nguoi-dung.dto.js.map