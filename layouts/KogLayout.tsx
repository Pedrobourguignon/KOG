import { Footer, Header } from "components";
import { Flex } from "@chakra-ui/react";
interface ILayout {
  children: React.ReactNode;
}
export const KogLayout: React.FC<ILayout> = ({ children }) => {
  return (
    <Flex h="100%" bg="black" direction="column" px="4" pb="10" color="white">
      <Header />
      {children}
      <Footer />
    </Flex>
  );
};
