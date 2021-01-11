const express = require('express')

const app = express()
const PORT = 8000

app.get('/', (_: any, res: any) =>
  res.send({
    value: 'hello?',
  })
)

app.listen(PORT, () => console.log(`lisntening port: ${PORT} `))
