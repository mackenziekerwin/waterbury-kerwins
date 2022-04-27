const breakpoints = {
  tablet: 768,
  desktopSm: 1024,
  desktop: 1280,
  desktopLg: 1440,
};

export const min = Object.entries(breakpoints).reduce(
  (acc, [name, size]) => ({
    ...acc,
    [name]: `@media (min-width: ${size}px)`,
  }),
  {}
);

export default breakpoints;
