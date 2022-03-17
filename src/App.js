import React, { useState } from 'react'
import './App.css';
import Map from './components/Map';

function App() {
  const [selectPosition, setSelectPosition] = useState(null);

  const getPlace = (place) => {
    fetch(`https://nominatim.openstreetmap.org/search?format=json&polygon=1&addressdetails=1&q=${place}`)
      .then(res => res.json())
      .then(data => {
        setSelectPosition(data[0])
      })
  }

  return (
    <div className="App">
      <h1 className="title">Cadastrar Operação no Mapa</h1>
      <input className="input" onBlur={(place) => { getPlace(place.target.value) }} />
      <div className="map" style={{ width: "1024px", height: "528px" }}>
        <Map selectPosition={selectPosition} />
      </div>
      <button>Salvar</button>
    </div>
  );
}

export default App;