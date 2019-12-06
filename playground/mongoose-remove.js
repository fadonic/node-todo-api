var { ObjectID } = require('mongodb')
var { mongoose } = require('../server/db/mongoose')
var { Todo } = require('../server/models/todo')

// Todo.remove().then(
//   todo => {
//     console.log(todo)
//   },
//   err => {
//     console.log(err)
//   }
// )

// Todo.findOneAndRemove('5de5c0efadc09e1408729054').then(
//     todo => {
//       console.log(todo)
//     },
//     err => {
//       console.log(err)
//     }
//   )

//   Todo.findByIdAndRemove('5de5c0efadc09e1408729054').then(
//     todo => {
//       console.log(todo)
//     },
//     err => {
//       console.log(err)
//     }
//   )
