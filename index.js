const express = require('express');
const mongoose = require('mongoose');
const Recipe = require('./models/Recipe.model');
const data = require('./data');

const MONGODB_URI = 'mongodb://localhost:27017/recipes-app';

// Connection to the database "recipe-app"
mongoose
  .connect(MONGODB_URI)
  .then(x => {
    console.log(`Connected to the database: "${x.connection.name}"`);
    // Before adding any recipes to the database, let's remove all existing ones
  })
  
  .catch(error => {
    console.error('Error connecting to the database', error);
  });

  const index = express ()
  
  index.get ('/', (req, res) => {
    res.send ('Está funcionando')
  })

  index.get ('/:title', async (req, res) => {
    const {title} = req.params
    const newRecipe = await Recipe.create ({title: 'Ovo Frito', level: 'Easy Peasy', ingredients: ['Ovo', 'Sal'], cuisine: 'Brazilian', dishType: 'breakfast', duration: '2' })
    res.json(newRecipe)
  })

  index.listen(5000, () => {
    console.log ('server running')
  })

  
