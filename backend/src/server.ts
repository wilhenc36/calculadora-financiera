import 'dotenv/config'
import express from 'express';
import { json, urlencoded } from 'body-parser';
import cors from 'cors';
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUI from 'swagger-ui-express';
import routes from './routes/index.routes';

const port = process.env.PORT || 8000;

const app = express();

app.use(cors());
app.use(json());
app.use(urlencoded({
    extended: false
}));

const swaggerOptions = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "API Calculadora Financiera",
            version: "1.0.0",
            description: "Esta es una aplicación API REST hecha con Express. Controla la información relacionada a la Calculadora Financiera."
        },
        servers: [
            {
                url: `http://127.0.0.1:${port}`,
                description: "Local server"
            }
        ],
    },
    apis: [
        process.cwd() + "/src/routes/*.routes.ts",
        process.cwd() + "/src/models/*.ts"
    ]
}

const apiSpecification = swaggerJsdoc(swaggerOptions);
app.use("/swagger", swaggerUI.serve, swaggerUI.setup(apiSpecification));

app.use("/api", routes())

export {
    app
}