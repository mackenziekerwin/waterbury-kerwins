import { useState } from 'react';
import Cover from './components/Cover';
import BaseMap from './components/BaseMap';
import MapNodes from './components/MapNodes';
import Scroller from './components/Scroller';
import data from './data/data.json';

const yearSlice = (date) => {
  return data.filter((y) => y.year === date);
};

const years = data.reduce((acc, currYear) => {
  if (!acc.includes(currYear.year)) {
    acc.push(currYear.year);
  }
  return acc;
}, []);

const App = () => {
  const [yearIndex, setYearIndex] = useState(0);
  return (
    <>
      <Scroller setActiveYear={setYearIndex}>
        <Cover />
      </Scroller>
      <div
        className="tooltip-wrapper"
        // todo: style this
        style={{ position: 'fixed', width: '100vw', height: '100vh' }}>
        <p style={{ position: 'absolute', top: '0', right: '0' }}>
          {years[yearIndex]}
        </p>
        <table />
      </div>
      <BaseMap>
        <MapNodes data={yearSlice(years[yearIndex])} />
      </BaseMap>
    </>
  );
};

export default App;
