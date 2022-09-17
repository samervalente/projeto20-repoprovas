import app from "./app"
import dotenv from "dotenv"

dotenv.config()

const PORT = process.env.PORT || 5000
console.log(`Usando o database url:${process.env.DATABASE_URL}`)

app.listen(PORT, () => {console.log(`Servidor rodando corretamente na porta ${PORT}`)})