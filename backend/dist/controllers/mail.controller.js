"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MailController = void 0;
const mail_service_1 = require("../services/mail.service");
const rootController_1 = __importDefault(require("../shared/rootController"));
class Controller extends rootController_1.default {
    constructor() {
        super(...arguments);
        this.send = (req, res) => __awaiter(this, void 0, void 0, function* () {
            yield mail_service_1.MailServices.send(req.body);
            this.apiResponse(res, {
                success: true,
                message: "Your mail has been sent successfully. Thanks!",
                statusCode: 200,
                data: null,
            });
        });
    }
}
exports.MailController = new Controller();
