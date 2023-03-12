import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import userRoutes from './routes/users.js'
import questionRoutes from './routes/Questions.js'
import answerRoutes from './routes/Answers.js'
import dotenv from 'dotenv';

const app = express();
dotenv.config();

const PORT = process.env.PORT || 5000

app.use(express.json({limit:"30mb", extended:true}))
app.use(express.urlencoded({limit:"30mb", extended:true}))
app.use(cors())
app.get('/',(req,res) =>{
    res.send("This is Stackoverflow-clone API")
})


app.listen(PORT,()=> {
    console.log(`Server running on port ${PORT}`)
})

app.use('/user', userRoutes)
app.use('/questions',questionRoutes)
app.use('/answer',answerRoutes)

const DATABASE_URL = process.env.CONNECTION_URL

mongoose.set('strictQuery',false)
mongoose.connect(DATABASE_URL, {useUnifiedTopology : true})
.then(( () => {console.log("Connected to DB")}))
.catch((err) => console.log(err.message))