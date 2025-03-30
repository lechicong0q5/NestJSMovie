"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatVeModule = void 0;
const common_1 = require("@nestjs/common");
const dat_ve_service_1 = require("./dat-ve.service");
const dat_ve_controller_1 = require("./dat-ve.controller");
let DatVeModule = class DatVeModule {
};
exports.DatVeModule = DatVeModule;
exports.DatVeModule = DatVeModule = __decorate([
    (0, common_1.Module)({
        controllers: [dat_ve_controller_1.DatVeController],
        providers: [dat_ve_service_1.DatVeService],
    })
], DatVeModule);
//# sourceMappingURL=dat-ve.module.js.map