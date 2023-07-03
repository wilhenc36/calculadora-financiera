interface ChangePasswordRequest {
    idsolicitud: number;
    idusuario: number;
    token: string;
    fechacreacion: Date;
    usado: boolean;
}

/**
 * @swagger
 * components:
 *  schemas:
 *      SchemaChangePasswordRequest:
 *          properties:
 *              idsolicitud:
 *                  type: number
 *              idusuario:
 *                  type: number
 *              token:
 *                  type: string
 *              fechacreacion:
 *                  type: date
 *              usado:
 *                  type: boolean
 */