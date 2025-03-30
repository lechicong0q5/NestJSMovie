"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const multer_1 = require("multer");
const path = require("path");
const fs = require("fs");
fs.mkdirSync(`images/`, { recursive: true });
const storage = (0, multer_1.diskStorage)({
    destination: function (req, file, cb) {
        cb(null, 'images/');
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
        const fileExtension = path.extname(file.originalname);
        const fileNameString = `local-${file.fieldname}-${uniqueSuffix}${fileExtension}`;
        cb(null, fileNameString);
    },
});
const uploadLocal = {
    storage: storage,
    limits: {
        fileSize: 1 * 1024 * 1024,
    },
};
exports.default = uploadLocal;
//# sourceMappingURL=local.multer.js.map