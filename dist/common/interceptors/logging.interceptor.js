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
exports.ResponseSuccessInterceptor = exports.responseSuccess = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const operators_1 = require("rxjs/operators");
const response_success_decorator_1 = require("../decorators/response-success.decorator");
const responseSuccess = (metaData = null, message = `Ok`, code = 200) => {
    if (typeof code !== `number`)
        code = 200;
    return {
        status: `success`,
        code: code,
        message: message,
        metaData: metaData,
        doc: `api.domain.com/doc`,
    };
};
exports.responseSuccess = responseSuccess;
let ResponseSuccessInterceptor = class ResponseSuccessInterceptor {
    constructor(reflector) {
        this.reflector = reflector;
    }
    intercept(context, next) {
        const res = context.switchToHttp().getResponse();
        const code = res.statusCode;
        const mes = this.reflector.getAllAndOverride(response_success_decorator_1.RES_SUCCESS, [
            context.getHandler(),
            context.getClass(),
        ]);
        return next.handle().pipe((0, operators_1.map)((data) => {
            console.log({ data });
            return (0, exports.responseSuccess)(data, mes, code);
        }));
    }
};
exports.ResponseSuccessInterceptor = ResponseSuccessInterceptor;
exports.ResponseSuccessInterceptor = ResponseSuccessInterceptor = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [core_1.Reflector])
], ResponseSuccessInterceptor);
//# sourceMappingURL=logging.interceptor.js.map