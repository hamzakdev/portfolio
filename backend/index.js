const app = require('express')();
const connectDatabase = require('./db');
const authRoute = require('./routes/auth')
const projectsRoute = require('./routes/projects')
const cookieParser = require("cookie-parser");
require('dotenv').config();
const cors = require('cors')

//CONNECTING DATABASE 
connectDatabase()

//middlewares
app.use(cookieParser())
app.use(require('express').json())
app.use(cors())


//routes

app.use('/auth',authRoute )
app.use('/projects',projectsRoute )


app.listen(process.env.PORT, ()=>{
    console.log("Server is running " )
})