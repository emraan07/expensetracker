const express = require("express")
const path = require("path")
const dotenv = require("dotenv")
const colors = require("colors")
const morgan = require("morgan")
const transactions = require("./routes/Transactions")
const connectDB = require("./config/db")
dotenv.config({path: "./config/config.env"})
connectDB()
const app = express()

// Body parser
app.use(express.json())

// enviroment
if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'))
}
const PORT = process.env.PORT || 5000

app.use("/api/v1/transactions", transactions)


if(process.env.NODE_ENV === 'production'){
    app.use(express.static("client/build"))

    app.get("/", (req, res) => res.sendFile(path.resolve(__dirname, "client", "build", "index.html")))
}

// server port
app.listen(PORT, console.log(`Server is running in ${process.env.NODE_ENV} mode on port  ${PORT}`.yellow.bold))

