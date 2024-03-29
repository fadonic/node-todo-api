const _ = require('lodash')
const express = require('express')
const bodyParser = require('body-parser')
const { ObjectID } = require('mongodb')

const { mongoose } = require('./db/mongoose')
const { Todo } = require('./models/todo')

const app = express()
const port = process.env.PORT || 3000

app.use(bodyParser.json())

app.post('/todos', (req, res) => {
  var todo = new Todo({
    text: req.body.text
  })

  todo.save().then(
    todo => {
      res.send(todo)
    },
    err => {
      res.status(400).send(err)
    }
  )
})

app.get('/todos', (req, res) => {
  Todo.find().then(
    todos => {
      res.send({ todos })
    },
    err => {
      res.send(err)
    }
  )
})

app.get('/todos/:id', (req, res) => {
  var id = req.params.id

  if (!ObjectID.isValid(id)) {
    return res.status(404).send()
  }
  Todo.findById(req.params.id).then(
    todo => {
      if (!todo) {
        return res.status(404).send()
      }
      res.send({ todo })
    },
    err => {
      res.status(400).send()
    }
  )
})

app.delete('/todos/:id', (req, res) => {
  var id = req.params.id

  if (!ObjectID.isValid(id)) {
    return res.status(400).send()
  }

  Todo.findByIdAndRemove(id).then(
    todo => {
      if (!todo) {
        return res.status(400).send()
      }
      res.send({ success: true, status: 'OK', todo })
    },
    err => {
      res.status(400).send()
    }
  )
})

app.patch('/todos/:id', (req, res) => {
  var id = req.params.id
  var body = _.pick(req.body, ['text', 'completed'])

  if (!ObjectID.isValid(id)) {
    return res.status(400).send()
  }

  if (_.isBoolean(body.completed) && body.completed) {
    body.completedAt = new Date().getTime()
  } else {
    body.completed = false
    body.completedAt = null
  }

  Todo.findByIdAndUpdate(id, { $set: body }, { new: true })
    .then(todo => {
      if (!todo) {
        return todo.status(404).send()
      }
      res.send({ todo })
    })
    .catch(err => {
      res.status(400).send()
    })
})

app.listen(port, () => {
  console.log(`Server Started on port ${port}`)
})
