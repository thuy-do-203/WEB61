const express = require('express')
const teacherRouter = express.Router()

const teachers = [
	{name: "Alice", age: 10},
	{name: "Bob", age: 11},
	{name: "Charlie", age: 11},
]

teacherRouter.get('/', (req, res) => {
    res.json(teachers)
})
teacherRouter.get('/add', (req, res) => {
    teachers.push({name: 'Thuy', age: 25})
    res.json(teachers)
})

module.exports = teacherRouter


const mySiblings = [
    {name: 'Ngat', age: 33},
    {name: 'Nga', age: 31},
    {name: 'Nguyet', age: 28},
]

const mySiblingsRouter = express.Router()

mySiblingsRouter.get('/', (req, res) => {
    res.json(mySiblings)
})
mySiblingsRouter.get('/add', (req, res) => {
    mySiblings.push({name: 'Bien', age: 23})
    res.json(mySiblings)
})

module.exports = mySiblingsRouter