import express from 'express'

const app = express()

app.get('/', (request, response) => {
  return response.json({ message: 'success' })
})

app.listen(4000)
