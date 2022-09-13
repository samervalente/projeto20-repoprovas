import express from "express"
import "express-async-errors"
import dotenv from "dotenv"
import cors from "cors"
import routes from "./routes/index"
import errorHandler from "./middlewares/errorHandlerMiddleware"

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000;

app.use([cors(), express.json()])
app.use(routes)
app.use(errorHandler)


app.listen(PORT, () => {console.log(`Servidor corretamente na rodando na porta ${PORT}`)})