import { Router } from "express";
import controller from "../controllers/auth.controller";
import { body } from "express-validator";
import { validateFields } from "../middlewares/validate-fields";

const authRouter = Router();

export default () => {
  /**
   * @swagger
   * /api/auth/register/:
   *  post:
   *      security:
   *          - bearerAuth: []
   *      tags:
   *          - Auth
   *      description: Register a new user
   *      requestBody:
   *        content:
   *            application/json:
   *                schema:
   *                    $ref: '#/components/schemas/SchemaUser'
   *      responses:
   *          200:
   *              description: Success
   *          400:
   *              description: Bad request
   *          500:
   *              description: Server error
   */
  authRouter.post(
    "/register",
    [
      body("nombre", "nombre is required.").not().isEmpty(),
      body("nombre", "nombre must not be a number.").isString(),
      body("apellido", "apellido is required.").not().isEmpty(),
      body("usuario", "usuario is required.").not().isEmpty(),
      body("correoelectronico", "correoelectronico is required.")
        .not()
        .isEmpty(),
      body(
        "correoelectronico",
        "correoelectronico must be a valid email."
      ).isEmail(),
      body("contraseña", "contraseña is required.").not().isEmpty(),
      validateFields,
    ],
    controller.RegisterUser
  );

  return authRouter;
};
