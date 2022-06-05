import { useState } from 'react';
import { useSinglePrismicDocument } from '@prismicio/react';
import Cover from './components/Cover';
import BaseMap from './components/BaseMap';
import MapNodes from './components/MapNodes';
import Scroller from './components/Scroller';
import data from './data/data.json';

const yearSlice = (date) => {
  return data.filter((y) => y.year === date);
};

const years = data
  .reduce((acc, currYear) => {
    if (!acc.includes(currYear.year)) {
      acc.push(currYear.year);
    }
    return acc;
  }, [])
  .splice(0, 49)
  .concat([1965, 1966]);

const App = () => {
  const [yearIndex, setYearIndex] = useState(0);
  const [document] = useSinglePrismicDocument('homepage');

  if (!document) return null;

  const {
    data: {
      title: [{ text: title }],
      introduction,
      events,
      appendix,
    },
  } = document;

  return (
    <>
      <Scroller
        setActiveYear={setYearIndex}
        events={events}
        appendix={appendix}>
        <Cover title={title} introduction={introduction} />
      </Scroller>
      <BaseMap>
        <MapNodes data={yearSlice(years[yearIndex])} />
      </BaseMap>
    </>
  );
};

export default App;
