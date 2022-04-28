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
      <BaseMap>
        <MapNodes data={yearSlice(years[yearIndex])} />
      </BaseMap>
      <div id="year">{years[yearIndex]}</div>
    </>
  );
};

export default App;
