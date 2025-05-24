"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const capitalizeFirstLetter = (text) => {
    const capitalized = text.charAt(0).toUpperCase() + text.slice(1);
    return capitalized;
};
exports.default = capitalizeFirstLetter;
