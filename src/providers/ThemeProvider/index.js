import React from 'react';
import PropTypes from 'prop-types';
import { ChakraProvider } from '@chakra-ui/react';

import theme from './theme';

const ThemeProvider = ({ children }) => (
  <ChakraProvider theme={theme}>{children}</ChakraProvider>
);

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ThemeProvider;
