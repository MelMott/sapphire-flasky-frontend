import './App.css';

import AnimalList from './components/AnimalList';

const listOfAnimals = [
  {
      id: 100,
      name: "Violet",
      species: "pitbull mix"
  },
  {
      id: 101,
      name: "Norman",
      species: "Pyrenees puppy"
  },
  {
      id: 102,
      name: "Juni",
      species: "Poodle",
      photo: "https://images.dog.ceo/breeds/poodle-toy/n02113624_333.jpg"
  },
  {
      id: 103,
      name: "Sabine",
      species: "Dog"
  }
];

function App() {
  const [animals, setAnimals] =useState(INITIAL_ANIMALS);
  
  const updateBookmark = (animalId, bookmarkBoolean) => {
    const updatedAnimals = animals.map(animal =>{
      if (animal.id === animalId) {
        return { ...animal, bookmark: bookmarkBoolean}
      }
    })
  }
  // Comments outside of JSX (but still in JavaScript (aka JS that is not "returned")) can still be //'s.
  return (
    <section>
      <h1>The Sapphire Animal Adoption Agency</h1>
      {/* What the props are called below is what they will be reffered to inside animalist */}
      <AnimalList listOfAnimals={ listOfAnimals } updateBookmark={updateBookmark}></AnimalList>
    </section>
  );
}

export default App;
