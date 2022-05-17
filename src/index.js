import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import routes from './routes/index.js'

const app = express()

app.use(cors())
app.use(bodyParser.json())

routes.register(app)

app.listen(3000, function(err) {
  if (!err) {
    console.log(`Server started by port 3000`)
  }
})
