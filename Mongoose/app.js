// Importing the mongoose library
const mongoose = require('mongoose');

// Connecting to the fruitsDB database on the local MongoDB server
mongoose.connect('mongodb://localhost:27017/fruitsDB', {useNewUrlParser:true});

//schema for a fruit
const fruitSchema = new mongoose.Schema({
  name:{
    type:String,
    required:[true,'Please enter a name']},
  rating:{
    type:Number,
    min:1,
    max:10},
  review:String
});

//schema for a person
const personSchema = new mongoose.Schema({
  name:String,
  age:Number,
  favouriteFruit:fruitSchema
});

//add fruit collection
const Fruit = mongoose.model('Fruit',fruitSchema);

// create a collection with the person schema
const Person = mongoose.model('Person',personSchema);


const pineapple = Fruit(
  {
    name:'Pineapple',
    rating:8,
    review:'Nice smell'
  }
)

pineapple.save()

const person_1 = new Person({
  name: "Ebataw",
  age: 15,
  favouriteFruit: pineapple
});

person_1.save();



async function findPersonById() {
  try {
    const person = await Person.findOne({_id:"64d8e17d1ebcd47fcd44658e"});
    console.log(person);
  } catch (err) {
    console.error(err);
  }
}

async function findDocuments(){
  try{
    const fruits = await Fruit.find({});
    console.log(fruits);
    /*fruits.forEach(function(fruit){
      console.log(fruit.name);
    })*/
  }
  catch(error){
    console.log(error);
  }
}

async function updateFruitById() {
  try {
    const result = await Fruit.updateOne(
      { _id: "64d8e17d1ebcd47fcd44658e" },{name:'Peaches'}
    );
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

async function deleteFruitById() {
  try {
    const result = await Fruit.deleteOne(
      { name: "Avocado" });
    //console.log(result);
  } catch (error) {
    console.error(error);
  }
}

  
// deleteFruitById();

// updateFruitById();
// findDocuments();
