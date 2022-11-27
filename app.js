const express=require('express');
const app= express();
require('dotenv').config();
// async errors

//middleware
const notFoundMiddleware=require('./middleware/not-found')
const errorHandlerMiddleware=require('./middleware/error-handler')
app.use(express.json())
const connectDB=require('./DB/connect')
const moviesRouter=require('./routes/movies')

// root route
app.get('/',(req,res)=>{
    res.send('hello this is root route')
})
app.use('/api/v1/movies',moviesRouter)
//product route
app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)
//
const port = process.env.PORT||3000;

const start= async()=>{
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port,console.log(`app is listening to the port no ${port}`))
    } catch (error) {
        console.log(error)
    }
}

start()

