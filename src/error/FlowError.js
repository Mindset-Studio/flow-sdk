"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlowError = void 0;
class FlowError extends Error {
    constructor(message, title) {
        super(`${title}: \n ${message}`);
    }
}
exports.FlowError = FlowError;
