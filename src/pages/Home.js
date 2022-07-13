import React, { useState } from 'react';
import {
  Button,
  Flex,
  Image,
  Text,
} from '@chakra-ui/react';
import Input from '../components/Input';

function Home() {
  const [inputs, setInputs] = useState({
    address:'',
    birthdate:'',
    country:'',
    food:'',
    message:'',
    name:'',
    phone:'',
    people:'',
    profile:'',
    surname:'',
  });

  const handleChange = (e) => {
    const { name, value} = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };


  return (
    <Flex fontSize="xl">
      <Flex alignItems="center" bg="gray.500" flex={1} justifyContent="center" direction="column" height="100vh">
        <Image src={process.env.PUBLIC_URL + '/img/avatar.png'} alt="Avatar" maxH="48" maxW="48"/>
        <Text align="center" fontWeight="bold" color="gray.50" fontSize="2sxl" width="10rem">XXXXXX Welcome to Moove-it</Text>
      </Flex>
      <Flex bg="gray.300" direction="column" flex={3} p={4}>
        <Input
          label="Name"
          name="name"
          onChange={handleChange}
          value={inputs.name}
        />
        <Input
          label="Surname"
          name="surname"
          onChange={handleChange}
          value={inputs.surname}
        />
        <Input
          label="Country"
          name="country"
          onChange={handleChange}
          value={inputs.country}
        />
        <Input
          label="Profile Image"
          name="profile"
          type="file"
        />
        <Input
          label="Birthdate"
          name="birthdate"
          onChange={handleChange}
          type="date"
          value={inputs.birthdate}
        />
        <Input
          label="Food restriction"
          name="food"
          onChange={handleChange}
          value={inputs.food}
        />
        <Input
          label="Address"
          name="address"
          onChange={handleChange}
          value={inputs.address}
        />
        <Input
          label="Phone"
          name="phone"
          onChange={handleChange}
          value={inputs.phone}
        />
        <Input
          label="People in charge"
          name="people"
          onChange={handleChange}
          value={inputs.people}
        />
        <Input
          label="Send a message to Slack, everyone is waiting for it"
          name="message"
          onChange={handleChange}
          value={inputs.message}
        />
        <Button colorScheme="gamma" mt={4} size="lg" >
          Send my data
        </Button>
      </Flex>
    </Flex>
  );
}

export default Home;
