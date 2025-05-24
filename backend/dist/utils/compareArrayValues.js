"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const compareArrayValues = (oldValues, newValues) => {
    return oldValues.filter((value) => !newValues.includes(value));
};
exports.default = compareArrayValues;
