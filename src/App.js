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

const App = () => {
  const [year, setYear] = useState(0);
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
      <Scroller setActiveYear={setYear} events={events} appendix={appendix}>
        <Cover title={title} introduction={introduction} />
      </Scroller>
      <BaseMap>
        <MapNodes data={yearSlice(year)} />
      </BaseMap>
    </>
  );
};

export default App;
