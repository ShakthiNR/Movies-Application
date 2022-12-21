const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const cors = require("cors")
const PORT = 3001;


//middleware
app.use(express.json())
app.use(cors())
app.use(bodyParser.json())


//router
const moviesRouter = require("./Routes/movies")
app.use("/api",moviesRouter)



app.listen(PORT,()=>{console.log(`App is running in ${PORT}`)})