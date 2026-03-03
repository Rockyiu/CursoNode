let express = require('express')
let router = express.Router()

const path = require('path')

const basePath = path.join(__dirname, '../templates')

router.get('/add', (req, res) => {
    res.sendFile(`${basePath}/user.html`)
})

router.post('/save', (req, res) => {
    console.log(req.body)
    const name = req.body.name
    const age = req.body.age

    console.log(name)
    console.log(age)
})


router.get('/:id', (req, res) => {
    console.log(`Carregamento usuário: ${req.params.id}`)
    res.sendFile(`${basePath}/index.html`)
})

module.exports = router