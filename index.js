const express = require('express');
const cors = require('cors');
// const port = process.env.PORT || 3000;
const mysql = require('mysql');
const biodataRouter = require('./routes/biodata');
const portfolioRouter = require('./routes/portfolio');
const skillRouter = require('./routes/skill');

app = express()
app.use(express.json())
app.use(express.urlencoded({ extended : true}))
app.use(cors())

db = mysql.createConnection({
    host : '127.0.0.1',
    user : 'root',
    password : 'indrakj',
    database : 'final_project'
})

// app.use('/', () => console.log('welcome'))

app.use('/biodata', biodataRouter)
app.use('/portfolio', portfolioRouter)
app.use('/skill', skillRouter)

// app.listen(3000, function(){
//     console.log('connect port 3000')
// })

module.exports = app.listen(3000)

