import { env } from "./env/index.js";
import { app } from "./app.js";

app.listen(env.PORT);
