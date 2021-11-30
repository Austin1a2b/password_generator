const express = require('express')
const app = express()
const exphbs = require('express-handlebars')

const port = 3000

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')



app.get('/', (req, res) => {
  res.render('index')
})

app.use(express.urlencoded({ extended: true }))

// 用POST方式　取得 表單值 res.body
app.post('/', (req, res) => {
  console.log('req.body', req.body)
  res.render('index')
})


app.listen(port, () => {
  console.log(`Express app listening on http://localhost:${port}/`)
})

