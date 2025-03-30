"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseSuccess = exports.RES_SUCCESS = void 0;
const common_1 = require("@nestjs/common");
exports.RES_SUCCESS = 'resSuccess';
const ResponseSuccess = (mes) => (0, common_1.SetMetadata)(exports.RES_SUCCESS, mes);
exports.ResponseSuccess = ResponseSuccess;
//# sourceMappingURL=response-success.decorator.js.map