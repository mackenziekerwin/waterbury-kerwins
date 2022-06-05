import { ScrollContainer } from './styled';
import Step from '../Step';

const Scroller = ({ setActiveYear, events, appendix, children }) => (
  <ScrollContainer>
    {children}
    {[...events, ...appendix].map((e, i) => (
      <Step
        key={i}
        handleInView={(inView) => {
          inView && setActiveYear(i);
        }}
        heading={e.heading}
        paragraphs={e.paragraphs || e.text}
        image={e.image || {}}
        caption={e.caption || {}}
      />
    ))}
  </ScrollContainer>
);

export default Scroller;
