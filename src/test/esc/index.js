"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bla = void 0;
const testProgram_1 = require("./testProgram");
const pt = __importStar(require("pareto-test"));
const esc_1 = require("../../pub/esc");
function bla() {
    //
}
exports.bla = bla;
pt.testset('generate code', () => {
    {
        const dir = "./test/codeGeneration/data";
        pt.testAsync("1", (resolve) => {
            (0, testProgram_1.testProgram)(dir + "/" + "in.astn", dir, "out", "ts_", esc_1.createCodeGenerator, resolve);
        });
    }
    {
        const dir = "./test/codeGeneration2/data";
        pt.testAsync("2", (resolve) => {
            return (0, testProgram_1.testProgram)(dir + "/" + "in.astn", dir, "out", "ts_", esc_1.createCodeGenerator2, resolve);
        });
    }
});
