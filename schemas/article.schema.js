const {Schema, model} = require('mongoose');

const articleSchema = Schema({
  title: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now()
  },
  category: {
    type: String,
    required: true
  },
  tags: {
    type: [String],
    required: true,
  },
  image: {
    type: String,
    required: true
  },
})

module.exports = model("article", articleSchema, 'articles');
