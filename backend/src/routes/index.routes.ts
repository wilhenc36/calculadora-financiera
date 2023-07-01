import { Router } from 'express';
import fs from 'fs';

const baseRouter = Router();

const pathRouter = `${__dirname}`;

const removeExtension = (filename: String) => {
  return filename.split(".").shift();
};

module.exports = () => {
  fs.readdirSync(pathRouter).filter((file) => {
    const fileWithoutExt = removeExtension(file);
    const skip = ["index"].includes(String(fileWithoutExt));

    if (!skip) {
      baseRouter.use(`/${fileWithoutExt}`, require(`./${fileWithoutExt}.routes`)());
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
