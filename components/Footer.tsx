import { Flex, Img, Text, Icon, Link } from "@chakra-ui/react";
import { BsWhatsapp, BsInstagram } from "react-icons/bs";

export const Footer = () => {
  return (
    <Flex direction="column" w="100%" pt="5">
      <Flex justify="space-between" direction="column" gap="3">
        <Flex direction="column" gap="3">
          <Link href="/sobre">
            <Text>Sobre nós</Text>
          </Link>
        </Flex>
        <Flex direction="column" gap="3">
          <Link href="/trocas">
            <Text>Politica de Troca</Text>
          </Link>
          <Link href="/garantias">
            <Text>Garantias</Text>
          </Link>
        </Flex>
        <Flex gap="8" w="100%">
          <Link href="https://api.whatsapp.com/send?phone=5531999126642">
            <Icon as={BsWhatsapp} boxSize="6" />
          </Link>
          <Link href="https://instagram.com/kogoficial">
            <Icon as={BsInstagram} boxSize="6" />
          </Link>
        </Flex>
      </Flex>
      <Flex align="center">
        <Img src="/images/logo-black.png" boxSize="20" />
        <Flex>
          <Text>KOG 2023 todos os direitos reservados.</Text>
        </Flex>
      </Flex>
    </Flex>
  );
};
