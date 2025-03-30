"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const config_1 = require("@nestjs/config");
const prisma_module_1 = require("./modules/prisma/prisma.module");
const serve_static_1 = require("@nestjs/serve-static");
const path_1 = require("path");
const auth_module_1 = require("./modules/auth/auth.module");
const token_strategy_1 = require("./modules/auth/token/token-strategy");
const dat_ve_module_1 = require("./modules/dat-ve/dat-ve.module");
const permission_strategy_1 = require("./modules/auth/permission/permission-strategy");
const nguoi_dung_module_1 = require("./modules/nguoi-dung/nguoi-dung.module");
const quan_ly_phim_module_1 = require("./modules/quan-ly-phim/quan-ly-phim.module");
const quan_ly_rap_module_1 = require("./modules/quan-ly-rap/quan-ly-rap.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            serve_static_1.ServeStaticModule.forRoot({
                rootPath: (0, path_1.join)(__dirname, '..'),
            }),
            config_1.ConfigModule.forRoot(),
            prisma_module_1.default,
            auth_module_1.AuthModule,
            dat_ve_module_1.DatVeModule,
            nguoi_dung_module_1.NguoiDungModule,
            quan_ly_phim_module_1.QuanLyPhimModule,
            quan_ly_rap_module_1.QuanLyRapModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService, token_strategy_1.CheckTokenStrategy, permission_strategy_1.CheckPermissionStrategy],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map