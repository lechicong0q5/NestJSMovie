declare const uploadLocal: {
    storage: import("multer").StorageEngine;
    limits: {
        fileSize: number;
    };
};
export default uploadLocal;
