export class User {
  idusuario?: number;
  nombre!: string;
  apellido!: string;
  pais?: string;
  usuario!: string;
  correoelectronico!: string;
  contraseña!: string;
  activo?: boolean;
  idrol!: number;
  fechacreacion?: Date;
  fechaactualizacion!: Date;
}

/**
 * @swagger
 * components:
 *  schemas:
 *      SchemaUser:
 *          properties:
 *              idusuario:
 *                required: false
 *                type: number
 *              nombre:
 *                required: true
 *                type: string
 *              apellido: 
 *                required: true
 *                type: string
 *              pais:
 *                required: false
 *                type: string
 *              usuario:
 *                required: true
 *                type: string
 *              correoelectronico:
 *                require: true
 *                type: string
 *                format: email
 *              contraseña:
 *                required: true
 *                type: string
 *                format: password
 *              activo:
 *                required: false
 *                type: boolean
 *              idrol:
 *                required: false
 *                type: number
 *              fechacreacion:
 *                required: false  
 *                type: string
 *                format: date-time
 *              fechaactualizacion:
 *                required: false
 *                type: string
 *                format: date-time
 */
