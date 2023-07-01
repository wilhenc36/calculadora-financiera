import { app } from "./server";
import { connection } from "./pg";

const port = process.env.PORT || 8000;

app.listen(port, () => {
  connection
    .connect()
    .then(() => {
      console.log("Conexion a la base de datos exitosa.");
    })
    .catch((error) => {
      console.log(error);
    });
    
  console.log(`Server is running on http://127.0.0.1:${port}`);
});
