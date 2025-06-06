import { Request, Response } from "express";
import { MailServices } from "../services/mail.service";
import RootController from "../shared/rootController";

class Controller extends RootController {
  send = async (req: Request, res: Response) => {
    await MailServices.send(req.body);
    this.apiResponse(res, {
      success: true,
      message: "Your mail has been sent successfully. Thanks!",
      statusCode: 200,
      data: null,
    });
  };
}

export const MailController = new Controller();
