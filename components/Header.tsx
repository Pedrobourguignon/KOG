import { Flex, Img, Link } from "@chakra-ui/react";

export const Header = () => {
  return (
    <Flex w="100%" justify="center">
      <Link href="/">
        <Img src="/images/logo-black.png" boxSize="28" />
      </Link>
    </Flex>
  );
};
