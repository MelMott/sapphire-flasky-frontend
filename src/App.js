import './App.css';
import { useState } from 'react';

import AnimalList from './components/AnimalList';

const INITIAL_ANIMALS = [
  {
      id: 100,
      name: "Violet",
      species: "pitbull mix",
      isBookmarked: false
  },
  {
      id: 101,
      name: "Norman",
      species: "Pyrenees puppy",
      isBookmarked: false
  },
  {
      id: 102,
      name: "Juni",
      species: "Poodle",
      photo: "https://images.dog.ceo/breeds/poodle-toy/n02113624_333.jpg",
      isBookmarked: false
  },
  {
      id: 103,
      name: "Sabine",
      species: "Dog",
      isBookmarked: false
  }
];

function App() {
  const [animals, setAnimals] =useState(INITIAL_ANIMALS);
  
  const updateBookmark = (animalId, bookmarkStatus) =>{
    console.log('a bookmark was updated')
    console.log('this is my animal ID', animalId)
    console.log ('this is my value for bookmark', bookmarkStatus )

    // for(const animal in animals){
    //   if (animal.id === animalId){
    //     animal.isBookmarked = !animal.isBookmarked;
    //   }
    const updateAnimals = animals.map(animal => {
      if (animal.id === animalId) { 
        animal.isBookmarked = !animal.isBookmarked;
        return {...animal}
      } else {
        return {...animal}
      }
    })
    
  };
  // Comments outside of JSX (but still in JavaScript (aka JS that is not "returned")) can still be //'s.
  return (
    <section>
      <h1>The Sapphire Animal Adoption Agency</h1>
      {/* What the props are called below is what they will be reffered to inside animalist */}
      <AnimalList listOfAnimals={ animals } updateBookmark={updateBookmark}></AnimalList>
    </section>
  );
}

export default App;
