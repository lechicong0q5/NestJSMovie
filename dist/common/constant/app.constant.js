"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.REGEX_EMAIL = exports.REFRESH_TOKEN_EXPIRED = exports.REFRESH_TOKEN_SECRET = exports.ACCESS_TOKEN_EXPIRED = exports.ACCESS_TOKEN_SECRET = exports.DATABASE_URL = void 0;
require("dotenv/config");
exports.DATABASE_URL = process.env.DATABASE_URL;
exports.ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET;
exports.ACCESS_TOKEN_EXPIRED = process.env.ACCESS_TOKEN_EXPIRED;
exports.REFRESH_TOKEN_SECRET = process.env.REFRESH_TOKEN_SECRET;
exports.REFRESH_TOKEN_EXPIRED = process.env.REFRESH_TOKEN_EXPIRED;
exports.REGEX_EMAIL = /(?=^[a-z0-9.]+@[a-z0-9.-]+\.[a-zA-Z]{2,6}$)(?=^.{1,40}$)/i;
console.log({
    DATABASE_URL: exports.DATABASE_URL,
    ACCESS_TOKEN_SECRET: exports.ACCESS_TOKEN_SECRET,
    ACCESS_TOKEN_EXPIRED: exports.ACCESS_TOKEN_EXPIRED,
    REFRESH_TOKEN_SECRET: exports.REFRESH_TOKEN_SECRET,
    REFRESH_TOKEN_EXPIRED: exports.REFRESH_TOKEN_EXPIRED
});
//# sourceMappingURL=app.constant.js.map