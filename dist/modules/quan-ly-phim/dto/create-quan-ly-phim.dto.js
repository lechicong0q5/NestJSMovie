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
exports.CreateQuanLyPhimDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateQuanLyPhimDto {
}
exports.CreateQuanLyPhimDto = CreateQuanLyPhimDto;
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)({ message: `Mã phim không được để trống` }),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], CreateQuanLyPhimDto.prototype, "ma_phim", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)({ message: `Tên phim không được để trống` }),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreateQuanLyPhimDto.prototype, "ten_phim", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)({ message: `Trailer không được để trống` }),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreateQuanLyPhimDto.prototype, "trailer", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)({ message: `Hình ảnh không được để trống` }),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreateQuanLyPhimDto.prototype, "hinh_anh", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)({ message: `Mô tả không được để trống` }),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], CreateQuanLyPhimDto.prototype, "mo_ta", void 0);
__decorate([
    (0, class_validator_1.IsDateString)(),
    (0, class_validator_1.IsNotEmpty)({ message: `Ngày khởi chiếu không được để trống` }),
    (0, swagger_1.ApiProperty)({ example: "2025-03-23" }),
    __metadata("design:type", String)
], CreateQuanLyPhimDto.prototype, "ngay_khoi_chieu", void 0);
//# sourceMappingURL=create-quan-ly-phim.dto.js.map