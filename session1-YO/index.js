const express = require('express');
const app = express()
const teacherRouter = require('./teacher.js')
const mySilbingsRouter = require('./teacher.js')

const students = [
	{name: "Alice", age: 10},
	{name: "Bob", age: 11},
	{name: "Charlie", age: 11},
]

app.use('/teacher', teacherRouter)
app.use('/mysibling', mySilbingsRouter)

app.get('/students', (req, res) => {
    res.json(students)
})
app.get('/students/add', (req, res) => {
    students.push({name: "Nghia", age: 25})
    res.json(students)
})


app.listen(3000, () => {
    console.log('App is listenning to port 3000');
})
