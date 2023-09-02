const dotenv = require('dotenv').config()

const express = require ('express')
const databaseMiddleware = require('./middleware/database-middleware.js')
const authRouter = require('./routes/auth-route.js')
const spiceRouter = require('./routes/spice-route.js')
const authMiddleware = require('./middleware/authentication-middleware.js')


const swaggerUi = require('swagger-ui-express')
const fs = require('fs')
const yaml = require('yaml')

const openApiPath = './doc/openapi.yaml'
const file = fs.readFileSync(openApiPath, 'utf8')
const swaggerDocument = yaml.parse(file)



const app = express()
const port = process.env.PORT || 3000;



app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
app.use(express.json())
app.use(databaseMiddleware)


app.get('/', (req, res) => {

    res.send('Assignment week 11 by Iman')
})

app.use('/auth', authRouter)
app.use('/spices',authMiddleware, spiceRouter)
app.use('/users', () => {})


app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);

});