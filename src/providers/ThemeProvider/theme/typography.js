import { theme as baseTheme } from '@chakra-ui/react';

const typography = {
  fonts: {
    heading: `Mulish, ${baseTheme.fonts?.heading}`,
    body: `Mulish, ${baseTheme.fonts?.body}`,
  },
  fontWeights: {
    normal: 400,
    semibold: 600,
    bold: 700,
    extrabold: 800,
  },
};

export default typography;
