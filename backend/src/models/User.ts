interface User {
  idusuario: number;
  nombre: string;
  apellido: string;
  pais: string;
  usuario: string;
  correoelectronico: string;
  contraseña: string;
  activo: boolean;
  fechacreacion: Date;
  fechaactualizacion: Date;
}

/**
 * @swagger
 * components:
 *  schemas:
 *      SchemaUser:
 *          properties:
 *              idusuario:
 *                  type: number
 *              nombre:
 *                  type: string
 *              apellido:
 *                  type: string
 *              pais:
 *                  type: string
 *              usuario:
 *                  type: string
 *              contraseña:
 *                  type: string
 *              activo:
 *                  type: boolean
 *              fechacreacion:
 *                  type: date
 *              fechaactualizacion:
 *                  type: date
 */
