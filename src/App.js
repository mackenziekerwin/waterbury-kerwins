import { useState } from 'react';
import BaseMap from './components/BaseMap';
import MapNodes from './components/MapNodes';
import Scroller from './components/Scroller';
import data from './data/data.json';

const yearSlice = (date) => {
  const { places } = data.find((y) => y.year === date) || {};
  let res = [];
  places.forEach((p) => {
    const { coordinates, occupants } = p;
    occupants.forEach((o) => res.push({ coordinates, ...o }));
  });
  return res;
};

const App = () => {
  const [yearIndex, setYearIndex] = useState(0);
  return (
    <>
      <Scroller setActiveYear={setYearIndex}></Scroller>
      <div
        className="tooltip-wrapper"
        style={{ position: 'fixed', width: '100vw', height: '100vh' }}>
        <table />
      </div>
      <BaseMap>
        <MapNodes data={yearSlice(data[yearIndex].year)} />
      </BaseMap>
    </>
  );
};

export default App;
