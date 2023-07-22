import { Router } from 'express';
import fs from 'fs';

const baseRouter = Router();

const pathRouter = `${__dirname}`;

const removeExtension = (filename: String) => {
  return filename.split(".").shift();
};

export default () => {
  fs.readdirSync(pathRouter).filter((file) => {
    const fileWithoutExt = removeExtension(file);
    const skip = ["index"].includes(String(fileWithoutExt));

    if (!skip) {
      const routerModule = require(`./${fileWithoutExt}.routes`);
      baseRouter.use(`/${fileWithoutExt}`, routerModule.default());
    }
  });

  return baseRouter;
};

/**
 * @swagger
 * components:
 *  securitySchemes:
 *      bearerAuth:
 *          type: http
 *          scheme: bearer
 *          bearerFormar: JWT
 *
 *  security:
 *      - bearerAuth: []
 */
