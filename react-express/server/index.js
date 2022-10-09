const express = require('express')
const cors = require('cors')
const app = express()


app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())



app.post('/add-two-numbers', (req, res) => {
    let { number1, number2 } = req.body

    number1 = parseInt(number1)
    number2 = parseInt(number2)

    const result = number1 + number2

    res.status(200).json(`${number1} + ${number2} = ${result}`)
})



const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`Server running at port ${PORT}`))