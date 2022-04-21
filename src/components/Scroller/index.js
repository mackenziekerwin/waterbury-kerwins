import { ScrollContainer } from './styled';
import Step from '../Step';
import content from '../../data/content.json';

const Scroller = ({ setActiveYear, children }) => (
  <ScrollContainer>
    {children}
    <Step
      handleInView={() => {}}
      heading="From the Emerald Isle to the Brass City"
      paragraphs={[
        "By the twentieth century, millions of Irish were forced to leave the ancient places of their surnames' origins due to centuries of political and economic upheavals.",
      ]}
    />
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
