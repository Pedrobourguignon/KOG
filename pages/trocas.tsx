import { Footer } from "@/components";
import { Divider, Flex, ListItem, Text, UnorderedList } from "@chakra-ui/react";
import { KogLayout } from "layouts";

export const trocas = () => {
  return (
    <KogLayout>
      <Flex direction="column" gap="4">
        <Text>Política de Troca de Manguitos</Text>
        <Text>
          A KOG se compromete a oferecer aos nossos clientes a melhor
          experiência de compra possível. Se você não estiver completamente
          satisfeito com o seu manguito, oferecemos a opção de troca.
        </Text>
        <Flex direction="column" gap="3">
          <Text fontSize="2xl">Condições para Troca:</Text>
          <UnorderedList>
            <ListItem>
              O produto deve ser devolvido em sua embalagem original e em
              condições novas, sem sinais de uso ou dano.
            </ListItem>
            <ListItem>
              A solicitação de troca deve ser feita dentro de 30 dias a partir
              da data de recebimento do produto.
            </ListItem>
            <ListItem>
              A troca deve ser solicitada por meio do nosso whatsapp fornecendo o número do pedido e o motivo da troca.
            </ListItem>
            <ListItem>
              O cliente é responsável pelos custos de envio da troca.
            </ListItem>
          </UnorderedList>
        </Flex>
        <Flex direction="column" gap="3">
          <Text fontSize="2xl">Exceções:</Text>
          <UnorderedList>
            <ListItem>
              Produtos personalizados ou especialmente encomendados não são
              elegíveis para troca.
            </ListItem>
            <ListItem>
              Produtos vendidos como {`"liquidação"`} ou {`"oferta"`} também não
              são elegíveis para troca.
            </ListItem>
          </UnorderedList>
        </Flex>
        <Flex direction="column" gap="3">
          <Text fontSize="2xl">Processo de Troca:</Text>
          <UnorderedList>
            <ListItem>
              Após a aprovação da solicitação de troca, o cliente deve enviar o
              produto de volta para nós.
            </ListItem>
            <ListItem>
              Assim que recebermos o produto devolvido, verificaremos se ele
              atende às condições acima e, se aprovado, processaremos a troca
              pelo produto desejado.
            </ListItem>
            <ListItem>
              Se o produto desejado não estiver disponível, ofereceremos um
              reembolso total ou crédito na loja.
            </ListItem>
          </UnorderedList>
        </Flex>
        <Text>
          Se você tiver alguma dúvida sobre nossa política de troca, entre em
          contato conosco. Estamos sempre aqui para ajudar.
        </Text>
      </Flex>
      <Divider bg="white" w="100%" mt="5" />
    </KogLayout>
  );
};
export default trocas;
