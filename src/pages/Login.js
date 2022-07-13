import React from 'react';
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Image,
  Text,
} from '@chakra-ui/react';
import {
  onLoginGmail
} from '../providers/Firebase/auth'

function Login() {
  return (
    <Flex alignItems="center" height="100%" justifyContent="center" p="24" width="100%">
      <Flex alignItems="center" bg='#4D4B6A' borderRadius="xl" justifyContent="center" p="12" minH="2xl" >
        <Flex flex={2} direction="column">
          <Heading color="gray.50" fontSize="5xl" maxWidth="sm">
            Welcome to Moove-it
          </Heading>
          <Text color="white" fontSize="2xl" pt="6" pb="6">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas cupiditate facere eveniet earum doloremque porro harum dolor tempore libero! Molestiae culpa recusandae exercitationem? Quas sit explicabo, eius odit quasi accusantium?
          </Text>
          <Button size="lg" colorScheme="gamma" onClick={onLoginGmail}>
            Login with email
          </Button>
        </Flex>
        <Container flex={1}>
          <Image src={process.env.PUBLIC_URL + '/img/character-mate.png'} alt="Character Mate"/>
        </Container>
      </Flex>
    </Flex>
  );
}

export default Login;
