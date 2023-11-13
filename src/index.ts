import express from 'express' //ESModules

import diaryRouter from "./routes/diaries"

const app = express()
app.use(express.json()) //middleware que trasforma la req.body a un json

const PORT = 3000

app.get('/ping',(_req, rest) => {
    console.log('someon pinged here!!')
    rest.send('pong')
})

app.use("/api/diaries", diaryRouter)


app.listen(PORT , () =>{
    console.log("server running on port ${PORT}")
})