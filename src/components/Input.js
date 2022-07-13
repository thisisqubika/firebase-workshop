import {
  Flex,
  Input as InputChakra,
  Text
} from '@chakra-ui/react';

const Input = (props) => {

  return (
    <Flex direction="column" width="100%">
      <Text color="white" fontSize="sm" fontWeight="bold">{props.label}</Text>
      <InputChakra
        {...props}
        size="lg"
      />
      <Text color="white" fontSize="xs">{props.helpText}</Text>
    </Flex>
  )
}

export default Input;
