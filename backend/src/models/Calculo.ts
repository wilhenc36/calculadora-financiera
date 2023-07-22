export class Calculo {
    idcalculo?: number;
    monto!: number;
    tasainteres!: number;
    periodo!: number;
    idtipocalculo!: number;
    idusuario!: number;
}

/**
 * @swagger
 * components:
 *  schemas:
 *      SchemaCalculo:
 *          properties:
 *              idcalculo:
 *                  type: number
 *              monto:
 *                  type: number
 *              tasinteres:
 *                  type: number
 *              periodo:
 *                  type: number
 *              idtipocalculo:
 *                  type: number
 *              idusuario:
 *                  type: number
 */