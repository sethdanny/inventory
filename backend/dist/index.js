"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("dotenv/config");
const app = (0, express_1.default)();
const PORT = process.env.PORT || 5001;
app.get('/', (req, res) => {
    res.send('Hello World');
});
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
