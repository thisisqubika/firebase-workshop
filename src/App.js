import React from 'react';
import {
  Box,
  ChakraProvider,
} from '@chakra-ui/react';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import theme from './providers/ThemeProvider/theme';
import Login from './pages/Login';
import Home from './pages/Home';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box bg="alpha.600" h="100vh" w="100%">
        <BrowserRouter>
          <Routes>
            <Route 
              element={<Login />}
              path='/'
            />
            <Route
              element={<Home />}
              path='/home'
            />
          </Routes>
        </BrowserRouter>
        </Box>
    </ChakraProvider>
  );
}

export default App;
