import { Flex, Text, Img } from "@chakra-ui/react";

interface IDepoimentos {
  texto: string;
  photo: string;
  name: string;
  funcao: string;
}

export const Depoimentos: React.FC<IDepoimentos> = ({
  funcao,
  name,
  photo,
  texto,
}) => {
  return (
    <Flex direction="column" w="100%" gap="4">
      <Text align="center" color="whiteAlpha.600">
        {texto}
      </Text>
      <Flex justify="center" w="100%" gap="4">
        <Img
          boxSize="14"
          rounded="full"
          src={photo === "" ? "/images/placeholder.png" : photo}
        />
        <Flex direction="column" justify="center">
          <Text fontWeight="bold">{name}</Text>
          <Text fontWeight="light" color="whiteAlpha.400" fontSize="sm">
            {funcao}
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};
