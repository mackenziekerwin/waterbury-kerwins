import { ScrollContainer } from './styled';
import Step from '../Step';
import content from '../../data/content.json';

const Scroller = ({ setActiveYear, children }) => (
  <ScrollContainer>
    {children}
    {content.map((c, i) => (
      <Step
        key={i}
        handleInView={(inView) => {
          inView && setActiveYear(i);
        }}
        heading={c.heading}
        paragraphs={c.paragraphs}
        images={c.images}
      />
    ))}
  </ScrollContainer>
);

export default Scroller;
