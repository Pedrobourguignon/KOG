import { KogLayout } from "@/layouts";
import { Divider, Flex, ListItem, Text, UnorderedList } from "@chakra-ui/react";

export const garantias = () => {
  return (
    <KogLayout>
      <Flex direction="column" gap="4">
        <Text>Política de Garantia dos Manguitos</Text>
        <Text>
          A KOG oferece uma garantia de qualidade em todos os nossos produtos.
          Se você encontrar um problema com o seu manguito, estamos aqui para
          ajudá-lo.
        </Text>
        <Flex direction="column" gap="3">
          <Text fontSize="2xl">Período de Garantia:</Text>
          <UnorderedList>
            <ListItem>
              Oferecemos uma garantia de 3 meses a partir da data de compra para
              todos os nossos manguitos.
            </ListItem>
            <ListItem>
              Durante esse período, a KOG se compromete a reparar ou trocar o
              produto sem cobrança adicional, desde que o problema esteja dentro
              das condições da garantia.
            </ListItem>
          </UnorderedList>
        </Flex>
        <Flex direction="column" gap="3">
          <Text fontSize="2xl">Condições da Garantia:</Text>
          <UnorderedList>
            <ListItem>
              A garantia cobre apenas problemas de fabricação ou materiais.
            </ListItem>
            <ListItem>
              A garantia não cobre danos causados por uso inadequado, acidentes
              ou desgaste normal.
            </ListItem>
            <ListItem>
              A garantia é válida apenas para o primeiro proprietário do produto
              e não é transferível.
            </ListItem>
          </UnorderedList>
        </Flex>
        <Flex direction="column" gap="3">
          <Text fontSize="2xl">Processo de Garantia:</Text>
          <UnorderedList>
            <ListItem>
              Para solicitar a garantia, entre em contato conosco por meio de
              nosso whatsapp , fornecendo o número do pedido e o problema
              relatado.
            </ListItem>
            <ListItem>
              Após a aprovação da solicitação de garantia, o cliente deve enviar
              o produto de volta para nós.
            </ListItem>
            <ListItem>
              Assim que recebermos o produto devolvido, verificaremos se ele
              atende às condições acima e, se aprovado, processaremos a
              reparação ou troca do produto.
            </ListItem>
          </UnorderedList>
        </Flex>
        <Text>
          Se você tiver alguma dúvida sobre nossa política de garantia, entre em
          contato conosco. Estamos sempre aqui para ajudar.
        </Text>
      </Flex>
      <Divider bg="white" w="100%" mt="5" />
    </KogLayout>
  );
};
export default garantias;
