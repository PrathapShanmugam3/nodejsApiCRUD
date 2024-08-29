

const express = require('express')
const app = express()
const port = 10000


app.use(express.json());


const studentRouter = require('./router/studentRouter');    


app.use('/student', studentRouter);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))