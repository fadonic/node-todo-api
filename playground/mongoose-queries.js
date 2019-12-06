var { ObjectID } = require('mongodb')
var { mongoose } = require('../server/db/mongoose')
var { Todo } = require('../server/models/todo')

// Todo.find().then(
//   todos => {
//     console.log(todos)
//   },
//   err => {
//     console.log(err)
//   }
// )

// Todo.findOne(ObjectID('5de5c0efadc09e1408729054')).then(
//   todos => {
//     console.log(todos)
//   },
//   err => {
//     console.log(err)
//   }
// )

Todo.findById('5de5c0efadc09e1408729054').then(
  todos => {
    console.log(todos)
  },
  err => {
    console.log(err)
  }
)
