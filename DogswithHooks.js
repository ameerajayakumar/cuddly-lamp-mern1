import axios from 'axios';
import React, { useEffect, useState } from 'react';

function DogPics() {
  // state variables
  let defaultBreed = 'random';
  const [breed, updateBreed] = useState(defaultBreed);
  const [imgLink, updateImgLink] = useState('');

  const handleBreedChange = (e) => {
    const newBreed = e.target.value;
    updateBreed(newBreed);
  };

  useEffect(() => {
    renderDogImage(breed);
  }, [breed]);

  const renderDogImage = async (breed) => {
    let url = '';
    if (breed === defaultBreed) {
      url = 'https://dog.ceo/api/breeds/image/random';
    } else {
      url = `https://dog.ceo/api/breed/${breed}/images/random`;
    }
    const res = await axios.get(url);
    const imgLink = res.data.message;

    updateImgLink(imgLink);
  };

  return (
    <div>
      <label>
        Select a breed:
        <select value={breed} onChange={handleBreedChange} style={{ marginBottom: '10px' }}>
          <option value={defaultBreed}>Random</option>
          <option value="beagle">Beagle</option>
          <option value="boxer">Boxer</option>
          <option value="dalmatian">Dalmatian</option>
          <option value="husky">Husky</option>
        </select>
      </label>
      <div>
        <div>
          <img src={imgLink} alt="Not available" height="400" />
        </div>
        <div>
          <button onClick={() => renderDogImage(breed)} style={{ padding: '5px' }}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default DogPics;
