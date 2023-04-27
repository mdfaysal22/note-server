"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const validateENV_1 = __importDefault(require("./utilities/validateENV"));
const mongoose_1 = __importDefault(require("mongoose"));
const port = validateENV_1.default.PORT;
mongoose_1.default.connect(validateENV_1.default.DataBase_Link)
    .then(() => {
    console.log("connected Database");
    app_1.default.listen(port, () => {
        console.log(`Server is running ${port}`);
    });
})
    .catch(console.error);
