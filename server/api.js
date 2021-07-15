const app = require('express')()

app.get('/test', (req, res) => {
  res.json({ title: 'marc', msg: 'YOYO' })
})

module.exports = app
