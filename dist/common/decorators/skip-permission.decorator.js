"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SkipPermission = exports.SKIP_PERMISSION = void 0;
const common_1 = require("@nestjs/common");
exports.SKIP_PERMISSION = 'skipPermission';
const SkipPermission = () => (0, common_1.SetMetadata)(exports.SKIP_PERMISSION, true);
exports.SkipPermission = SkipPermission;
//# sourceMappingURL=skip-permission.decorator.js.map