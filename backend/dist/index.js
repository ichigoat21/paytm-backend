"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_1 = __importDefault(require("./routes/user"));
const cors_1 = __importDefault(require("cors"));
const accounts_1 = __importDefault(require("./routes/accounts"));
const middleware_1 = __importDefault(require("./middleware"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use("/users", user_1.default);
app.use("/accounts", middleware_1.default, accounts_1.default);
app.listen(3000, () => { console.log("server started"); });
