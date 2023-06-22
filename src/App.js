import { useState, useEffect } from "react";
import './App.css';
import AnimalList from './components/AnimalList';
import axios from 'axios';


// const INITIAL_ANIMALS = [
//   {
//     id: 100,
//     name: "Violet",
//     species: "pitbull mix",
//     isBookmarked: false,
//   },
//   {
//     id: 101,
//     name: "Norman",
//     species: "Pyrenees puppy",
//     isBookmarked: false,
//   },
//   {
//     id: 102,
//     name: "Juni",
//     species: "Poodle",
//     photo: "https://images.dog.ceo/breeds/poodle-toy/n02113624_333.jpg",
//     isBookmarked: false,
//   },
//   {
//     id: 103,
//     name: "Sabine",
//     species: "Dog",
//     isBookmarked: false,
//   },
//   {
//     id: 104,
//     name: "Paprika and Braven",
//     species: "Kittens",
//     photo:
//       "https://www.felinefriendsofsammamish.com/app/pet/img/000359-008.jpg",
//     isBookmarked: false,
//   },
// ];

function App() {
  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:5000/animals')
    .then( (response) => {
      console.log('response data', response.data)
      const intitialAnimalData = [];
      response.data.forEach(animal => {
        console.log('animal', animal);
        intitialAnimalData.push(animal);
      })
    })
    .catch( (error) => {
      console.log('error', error);
    });
  }, [])

  const updateBookmark = (animalId) => {

    // create a new list of animals with updated bookmark value
    const updatedAnimals = animals.map(animal => {
      if (animal.id === animalId) {
        animal.isBookmarked = !animal.isBookmarked;
      };
      return {...animal}
    });

    setAnimals(updatedAnimals);
  }


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
