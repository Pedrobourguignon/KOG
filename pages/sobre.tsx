import { KogLayout } from "@/layouts";
import { Divider, Flex, Text } from "@chakra-ui/react";

export const sobre = () => {
  return (
    <KogLayout>
      <Flex direction="column" gap="5">
        <Text>
          Em um período de crise provocado pela pandemia da COVID-19 a KOG
          surgiu por meio da busca de uma melhor performance gamer, visando
          melhor desempenho nos jogos atrelado ao conforto.
        </Text>
        <Text>
          Foram testados os melhores produtos das mais renomadas marcas e
          percebemos que algo faltava para ser atingido o nível máximo de êxito.
        </Text>
        <Text>
          A partir de então, deu-se início aos estudos para aperfeiçoar e
          colocar em prática a teoria do produto ideal, que combinasse
          perfeitamente a performance e o conforto.
        </Text>
        <Text>
          Foram diversos testes, feitos por gamers, até alcançarmos o melhor que
          podemos oferecer.
        </Text>
        <Text>
          Nosso desejo é elevar a sua gameplay à um patamar mais elevado, onde
          jogadores profissionais e casuais terão o melhor dos três mundos:
          conforto, performance e qualidade.
        </Text>
        <Text>Bem-vindos à era KOG, chegou a hora de dominar o seu jogo.</Text>
        <Text>Be the King Of Game.</Text>
      </Flex>
      <Divider bg="white" w="100%" mt="5" />
    </KogLayout>
  );
};

export default sobre;
