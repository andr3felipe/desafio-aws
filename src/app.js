import express from "express";
import { router } from "./routes/index.js";
import swaggerUi from "swagger-ui-express";
import swaggerDocs from "./swagger.json" assert { type: "json" };

export const app = express();
app.use(express.json());
app.use("/", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use("/v1", router);
