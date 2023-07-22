import { NextFunction, Request, Response }  from "express";
import { validationResult }  from "express-validator";
import { sendResponse } from '../helpers/response-to-client';

const validateFields = (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    sendResponse(res, 400, {
      result: null,
      message: (errors.array())[0].msg
    })
  }

  next();
};

export {
  validateFields,
};
