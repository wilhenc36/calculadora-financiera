import { Request, Response } from "express";
import { sendResponse } from "../helpers/response-to-client";
import service from "../services/auth.service";

const RegisterUser = async (req: Request, res: Response) => {
  try {
    const { success, result, message } = await service.RegisterUser(req.body);

    if (!success) {
      return sendResponse(res, 400, { result, message });
    }

    return sendResponse(res, 200, { result, message });
  } catch (error) {
    if (error instanceof Error) {
      return sendResponse(res, 500, {
        result: null,
        message: JSON.stringify(error.message).slice(1),
      });
    } else {
      return sendResponse(res, 500, {
        result: null,
        message: JSON.stringify(error).slice(1),
      });
    }
  }
};

export default {
  RegisterUser,
};
