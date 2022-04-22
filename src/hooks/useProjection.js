import { geoMercator } from 'd3';
import { useCallback } from 'react';
import useDimensions from './useDimensions';

const useProjection = () => {
  const { width, height } = useDimensions();
  const generateProjection = useCallback(() => {
    const projection = geoMercator()
      .center([-73.03627092863897, 41.549684775292924])
      .scale(1100000)
      .translate([(width * 2) / 3, height / 2]);

    return projection;
  }, [width, height]);
  return generateProjection;
};

export default useProjection;
