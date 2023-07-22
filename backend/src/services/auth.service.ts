import bcrypt from 'bcrypt';
import { connection } from "../pg";
import { User } from "../models/User";

const RegisterUser = async (User: User) => {
  try {
    // Encrypt password
    const salt = bcrypt.genSaltSync();
    User.contraseña = bcrypt.hashSync(User.contraseña, salt);

    // Execute a Procedure to create a new user
    const resultRegisterUser = await connection.query<User>({
      text: `call crearusuario($1, $2, $3, $4, $5, $6, $7)`,
      values: [User.nombre, User.apellido, User.pais, User.usuario, User.correoelectronico, User.contraseña, 2],
    });

    // Return with success if the user was created.
    return {
      success: true,
      result: resultRegisterUser.rows,
      message: "User was created successfully.",
    };
  } catch (error: unknown) {
    // Verify if the error is a ErrorType
    if (error instanceof Error) {
      // If that true, return with the specific message error
      return {
        success: false,
        result: null,
        message: JSON.stringify(error.message).slice(1),
      };
    } else {
      // If not, return with the value error
      return {
        success: false,
        result: null,
        message: JSON.stringify(error).slice(1),
      };
    }
  }
};

export default {
    RegisterUser
}