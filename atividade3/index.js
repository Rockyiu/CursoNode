const express = require('express')
const app = express()
const serve = 5000

const path = require('path')
const basePath = path.join(__dirname, 'templates')

const users = require('./users')

app.use(
    express.urlencoded({
        extended: true,
    }),
)

app.use(express.static('public'))

var checkAuth = function (req, res, next) {
    req.authStatus = true

    if (req.authStatus) {
        console.log('Está logado')
        next()
    } else {
        console.log('não está logado')
    }
}

app.use(checkAuth)

app.use('/users', users)

app.get('/', (req, res) => {
    res.sendFile(`${basePath}/index.html`)
})

app.listen(serve, () => {
    console.log(`App rodando na porta:${serve}`)
})

