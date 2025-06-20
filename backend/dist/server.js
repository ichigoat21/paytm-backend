"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const mongoose_2 = require("mongoose");
mongoose_1.default.connect("mongodb+srv://shivresides:TjLuNHyDlELlttOM@second-brain.4jq3gmh.mongodb.net/paytm").then(() => { console.log("db connected"); });
const userSchema = new mongoose_2.Schema({
    username: { type: String, unique: true },
    password: String,
    firstName: String,
    lastName: String
});
const accountSchema = new mongoose_2.Schema({
    userId: {
        type: mongoose_1.default.Types.ObjectId,
        ref: "usersTables",
        required: true
    },
    balance: {
        type: Number,
        required: true
    }
});
const accountModel = mongoose_1.default.model("accountTable", accountSchema);
const userModel = mongoose_1.default.model("usersTables", userSchema);
const models = {
    accountModel,
    userModel
};
exports.default = models;
