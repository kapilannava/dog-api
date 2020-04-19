import React, { useEffect, useState } from 'react';
import Dog from './Dog';
import './App.css';

const App = () =>{


  const [dogs, setDogs] = useState([]);
  const [breed, setBreed] = useState('schnauzer');

  /**
   * getDogs is an asyc function
   * response = await fetch(API)
   * data = await response.json()
   */
  const getDogs = async () =>{
    const response = await fetch(`https://dog.ceo/api/breed/${breed}/images/random`);
    const data = await response.json();
    setDogs(data);
    console.log(data);
  }


  useEffect( () =>{
    getDogs();
  }, [breed]);

const handleChange = e => {
  setBreed(e.target.value);
}

const handleSubmit = e => {
  e.preventDefault();
  console.log(breed);
}

  return (
    <div className="App">
    <form onSubmit={handleSubmit}>
      <select value={breed} onChange={handleChange}> 
        <option value="schnauzer">Schnauzer</option>
        <option value="poodle">Poodle</option>
        <option value="pomeranian">Pomeranian</option>
        <option value="germanshepherd">German Shepherd</option>
        <option value="doberman">Doberman</option>
        <option value="pug">Pug</option>
        <option value="terrier/russell">Russell Terrier</option>
        <option value="maltese">Maltese</option>
        <option value="malamute">Malamute</option>
        <option value="husky">Husky</option>
        <option value="dachshund">Dachshund</option>
        <option value="boxer">Boxer</option>
        <option value="bulldog">Bulldog</option>
        <option value="bulldog">Pitbull</option>

      </select>

    </form>
    <Dog
    image={dogs.message} />
    </div>

  )

} 

export default App;
