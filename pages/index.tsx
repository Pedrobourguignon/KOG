import { Depoimentos, Footer, Header } from "components";
import {
  Flex,
  Text,
  Img,
  Icon,
  UnorderedList,
  ListItem,
  Button,
  Divider,
  transition,
  Accordion,
  AccordionItem,
  AccordionButton,
  Box,
  AccordionPanel,
  AccordionIcon,
  Grid,
} from "@chakra-ui/react";
import { FaCrosshairs } from "react-icons/fa";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { BsMouse2 } from "react-icons/bs";
import { FiAward } from "react-icons/fi";
import { IoIosTimer } from "react-icons/io";
import { KogLayout } from "@/layouts";
import Router from "next/router";

export const Home = () => {
  const depoimentos = [
    {
      texto:
        "Antes de conhecer o manguito da KOG, jogar online era uma verdadeira dor de cabeça. Agora, posso jogar por horas sem sentir desconforto ou cansar. Além disso, meu desempenho melhorou muito!",
      photo: "",
      name: "Lucca L.",
      funcao: "Cliente",
    },
    {
      texto:
        "Eu não imaginava a diferença que um acessório simples como o Manguito Gamer poderia fazer na minha gameplay. Meus movimentos ficaram mais precisos e rápidos, e eu posso jogar por horas sem sentir desconforto.",
      photo: "",
      name: "Pedro B.",
      funcao: "Cliente",
    },
    {
      texto:
        "O design do manguito é incrível e o conforto é sensacional. Além disso, percebi uma melhora significativa em meu desempenho em minhas partidas. Recomendo para todos os jogadores!",
      photo: "",
      name: "Joao P.",
      funcao: "Cliente",
    },
    {
      texto:
        "Eu sempre tive problemas com o atrito do meu mouse pad e isso afetava diretamente minha performance em jogos online. Desde que comecei a usar o manguito da KOG, esses problemas acabaram. Além disso, é confortável e tem um design incrível.",
      photo: "",
      name: "Caio",
      funcao: "Cliente",
    },
  ];

  const perguntas = [
    {
      pergunta: "O que são manguitos gamers?",
      resposta:
        "Manguitos gamers são acessórios para os punhos projetados para tornar a experiência de jogo mais confortável e oferecer suporte aos tendões e músculos.",
    },
    {
      pergunta: "Por que devo usar um manguito gamer?",
      resposta:
        "Usar um manguito gamer pode ajudar a prevenir a fadiga e a dor nos punhos durante longas sessões de jogo, garantindo assim uma jogabilidade mais prolongada e confortável.",
    },
    {
      pergunta: "Porque devo escolher o manguito da KOG?",
      resposta:
        "Além de um lindo design, nossos manguitos são projetados com um tecido que vai se ajustar confortavelmente ao seu punho",
    },
    {
      pergunta: "Posso lavar meu manguito?",
      resposta: "Sim, nossos manguitos podem ser lavada à mão.",
    },
    {
      pergunta:
        "O que posso fazer se meu manguito não se ajustar corretamente?",
      resposta:
        "Se o seu manguito não se ajustar corretamente, entre em contato conosco para verificar se há uma solução ou para solicitar uma troca.",
    },
  ];

  const handleClickButton = () => {
    Router.push("https://api.whatsapp.com/send?phone=5531999126642");
  };
  return (
    <KogLayout>
      <Flex direction="column" gap="6" align="center">
        <Flex direction="column" gap="4">
          <Text fontSize="3xl" fontWeight="bold" align="center">
            Melhore sua gameplay com o manguito da KOG​
          </Text>
          <Text>
            Transforme sua experiência em jogos online com os manguitos da KOG.
            Com design atraente e confortável, esse acessório vai melhorar sua
            performance, reduzir o atrito e possibilitar horas de jogatina sem
            cansar.
          </Text>
        </Flex>
        <Img src="/images/img1.png" />
        <Flex direction="column" gap="4" align="center" w="100%">
          <Text fontSize="3xl" fontWeight="bold" align="center">
            Benefícios
          </Text>
          <Flex
            direction={{ base: "column", lg: "row" }}
            gap="4"
            justify="center"
            w="100%"
          >
            <Flex direction="column" gap="4">
              <Flex align="center" gap="2">
                <Icon as={FaCrosshairs} boxSize="5" />
                <Text>Melhora na performance de jogo</Text>
              </Flex>
              <Flex align="center" gap="2">
                <Icon as={BsMouse2} boxSize="5" />
                <Text>Redução do atrito e do desconforto</Text>
              </Flex>
              <Flex align="center" gap="2">
                <Icon as={FiAward} boxSize="5" />
                <Text>Design atraente e confortável</Text>
              </Flex>
            </Flex>
            <Flex direction="column" gap="4">
              <Flex align="center" gap="2">
                <Icon as={IoIosTimer} boxSize="5" />
                <Text>Possibilidade de jogar por horas sem cansar</Text>
              </Flex>
              <Flex align="center" gap="2">
                <Icon as={AiOutlineThunderbolt} boxSize="5" />
                <Text>Aumento da precisão e velocidade nos movimentos</Text>
              </Flex>
            </Flex>
          </Flex>
          <Flex w="100%" justify="center">
            <Button
              onClick={handleClickButton}
              bg="#F58640"
              w="full"
              maxW="40"
              _hover={{ transform: "scale(1.2)", transition: "0.5s" }}
            >
              Adquira já!!
            </Button>
          </Flex>
        </Flex>
        <Flex direction="column" gap="4">
          <Text fontSize="3xl" fontWeight="bold" align="center">
            O acessório feito para você!
          </Text>
          <Text>
            O Manguito KOG chegou para melhorar sua performance. Oferece
            conforto térmico e um ajuste perfeito em sua mão! Com o seu designer
            gamer, conseguimos combinar desempenho, estilo e conforto.
          </Text>
        </Flex>
        <Flex direction={{ base: "column", md: "row" }} gap="5">
          <Flex direction="column">
            <Text align="center" color="whiteAlpha.500">
              Tecido térmico 
            </Text>
            <Img src="/images/img2.png" />
          </Flex>
          <Flex direction="column">
            <Text align="center" color="whiteAlpha.500">
              Design gamer 
            </Text>
            <Img src="/images/img3.png" />
          </Flex>
          <Flex direction="column">
            <Text align="center" color="whiteAlpha.500">
              Ajuste perfeito
            </Text>
            <Img src="/images/img4.png" />
          </Flex>
        </Flex>
        <Flex direction="column" gap="4">
          <Text fontSize="3xl" fontWeight="bold" align="center">
            Depoimentos de quem usa nossos manguitos
          </Text>
          <Grid
            w="100%"
            gap="4"
            templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
          >
            {depoimentos.map((item, index) => (
              <Depoimentos
                key={index}
                funcao={item.funcao}
                name={item.name}
                photo={item.photo}
                texto={item.texto}
              />
            ))}
          </Grid>
        </Flex>
        <Flex w="100%" direction="column" gap="4">
          <Text fontSize="3xl" fontWeight="bold" align="center">
            Perguntas frequentes
          </Text>
          <Accordion allowToggle w="100%">
            {perguntas.map((item, index) => (
              <AccordionItem key={index}>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      {item.pergunta}
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>{item.resposta}</AccordionPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </Flex>
        <Text fontSize="3xl" fontWeight="bold" align="center">
          Melhore sua jogatina agora mesmo. Clique aqui e adquira seu manguito
          da KOG!
        </Text>
        <Button
          bg="#F58640"
          onClick={handleClickButton}
          _hover={{ transform: "scale(1.2)", transition: "0.5s" }}
        >
          Adquira já!!
        </Button>

        <Divider bg="white" w="100%" />
      </Flex>
    </KogLayout>
  );
};
export default Home;
