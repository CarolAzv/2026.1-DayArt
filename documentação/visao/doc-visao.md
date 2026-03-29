# Documento de Visão

## Histórico de Revisões

| Data | Versão | Descrição | Autores |  
| :--: | :----: | :-------: | :-----: | 

## 1\. Visão Geral do Sistema Proposto

   Dayart é um site de mostruário e vendas online de artesanato com tecido e bordado personalizado do cliente

## 2\. Descrição do Problema  
| | |  
| :-: | :-: |  
| **Problema** | A falta de um espaço para o cliente dedicar à exposição e venda de seus artesanatos. |  
| **Afeta** | O cliente; Consumidores interessados em produtos de tecidos artesanais. |    
| **Impacta** | Renda e hobby do cliente; Consumidores interessados em produtos feitos a mão. |  
| **Solução** | Criação de um site para mostruário e vendas virtual voltado para o artesanato com tecido/bordado. |

## 3\. Descrição dos Usuários

| Usuário | Descrição | Responsabilidades |  
| :-----: | :-------: | :---------------: |
| Visitantes | Visitantes serão as pessoas que não possuem uma conta. Eles poderão entrar no site, ver os produtos, utilizar toda a funcionalidade de pesquisar e criar uma conta| Visitantes poderão acessar o site como um mostruário sem acesso à parte de vendas. |
| Usuários | Usuários serão as pessoas com uma conta registrada. Eles além de possuir todas as funcionalidades do visitante, exceto a criação de uma conta, eles terão acesso a um carrinho, poderão adicionar ou editar informações sobre cartões de crédito, editar a localização e adicionar itens à lista de desejo| Os usuários deverão adicionar informações sobre a localização e forma de pagamento. |
| Administração | A administração será responsável por adicionar novos itens, gerenciar o estoque e concluir pedidos. A administração também poderá ver dados da loja como número de visitas e que itens estão em uma lista de desejo. | Moderação e gerenciamento do site e conclusão de pedidos |

## 4\. Descrição do Ambiente dos Usuários

| Usuário | Ambiente operacional |  
| :-----: | :------------------: |
| Visitantes | Terá acesso à home e às páginas dos produtos além do acesso aos filtros e à pesquisa |
| Usuários | Além de ter acesso à home, às páginas dos produtos, aos filtros e à pesquisa, terão a página do perfil, o carrinho e a encomenda |
| Administração | Terá acesso a todas as páginas do sistema e funcionalidades e páginas para a criação de uma nova listagem e visualização de encomendas com suas conversas. |

## 5\. Principais Necessidades dos Usuários

1\. **Visitantes**  
   \- Acessar o site livremente sem precisar realizar um Login ou Cadastro;
   \- Visualizar e pesquisar por produtos;
   \- Decidir se há necessidade de criar uma conta como usuário.

2\. **Usuários**  
   \- Possuir conta registrada e autenticada por Login;
   \- Visualizar e pesquisar por produtos;  
   \- Adicionar produtos ao carrinho e conseguir finalizar uma compra.
   \- Avaliar produtos comprados.
   \- Começar uma conversa com a administração para fazer uma encomenda

3\. **Administradores**  
   \- Realizar a manutenção do site;  
   \- Monitorar atividades dos usuários e manter a cordialidade;  
   \- Desativar páginas de produtos que não têm mais estoque;
   \- Deletar páginas de produtos que não serão mais produzidos;  
   \- Aumentar o estoque quando necessário;  
   \- Atuar como suporte ao cliente;
   \- Conversar com clientes para confirmar uma encomenda;
   \- Concluir pedidos;

## 6\. Alternativas Concorrentes

1\. **Elo7**

   1.1 **Pontos positivos**  
      \- Tempo de produção clara
      \- Possível falar com o vendedor pelo site
      \- Possível favoritar itens

   1.2 **Pontos negativos**  
      \- Formatado como um mercado livre, com múltiplas pessoas vendendo itens ao mesmo tempo
      \- Abre páginas no desktop
      \- Quantidade excessiva de tags

1\. **Paipç**

   1.1 **Pontos positivos**  
      \- Aparência mais focada em artesanato e à cultura envolvida
      \- Pesquisa mais simplificada devido a menos itens

   1.2 **Pontos negativos**  
      \- Foco em outros tipos de artesanato

## 7\. Regras de Negócio

| ID  | Regra | Descrição |  
| :-: | :---: | :-------: |
| RN01 | :---: | Encomendas de Usuários precisam ser pagas 50% adiantado para evitar perdas |
| RN02 | :---: | Encomendas de Usuários pagarão os restantes 50% após a finalização do produto |
| RN03 | :---: | Produtos devem ser desativados automaticamente após a venda completa do estoque |

## 8\. Requisitos Funcionais

| Código | Nome | Descrição | Prioridade |
| :----: | :--: | :-------: | :--------: |
| RF01 | Cadastro | Visitantes poderão fazer cadastro | Alta |
| RF02 | Login | Usuários poderão fazer login | Alta |
| RF03 | Logout | Usuários poderão fazer logout | Alta |
| RF04 | Pesquisar produto |  Usuários poderão buscar produtos por filtros ou a barra de pesquisa | Alta |
| RF05 | Página do produto | todos os produtos devem ter a própria página, mostrando informações e imagens do produto | Alta |
| RF06 | Avaliar produto | Produtos comprados podem ser avaliados por compradores | Média |
| RF07 | Perfil do usuário | Usuários cadastrados devem poder ver sua própria página de perfil | Alta |
| RF09 | Adicionar ao carrinho | Usuários poderão adicionar produtos ativados no carrinho | Alta |
| RF10 | Finalizar compra | Usuários com itens no carrinho poderão finalizar a compra e ter um pedido  | Alta |
| RF11 | Adicionar estoque | Administração deve poder adicionar estoque a um produto existente | Média |
| RF13 | Adicionar produto | Administração pode adicionar um novo produto com nome, descrição, imagens e estoque | Média |
| RF14 | Desativar produto | Administração pode desativar produtos, produtos desativados funcionam somente como mostruário | Baixa |
| RF15 | Ativar produto | Administração pode ativar produtos, produtos ativados têm estoque e estão à venda | Baixa |
| RF16 | Deletar produto | Administração pode deletar um produto, removendo do mostruário | Baixa |
| RF17 | Começar encomenda | Usuários podem começar uma encomenda na página de perfil | Alta |
| RF18 | Chat de encomenda | Usuários e Administração poderão conversar sobre a encomenda pelo chat de encomenda | Alta |
| RF19 | Confirmar encomenda | Administração poderá confirmar uma encomenda aberta, transformando ela em um pedido | Média |
| RF20 | Rejeitar encomenda | Administração poderá rejeitar uma encomenda aberta, fechando a encomenda | Média |
| RF21 | Cancelar encomenda | Usuário poderá cancelar uma encomenda aberta, fechando a encomenda | Baixa |
| RF22 | Editar página do produto | Administração pode editar uma página de produto para atualizar sua informação, mudar imagens, editar a descrição e adicionar estoque | Alta |

 **Prioridade**: alta, média ou baixa

## 9\. Requisitos Não-funcionais

| Código | Nome | Descrição | Categoria | Classificação |  
| :----: | :--: | :-------: | :-------: | :-----------: |
| NF01 | Boas práticas de programação | O site deve ser montado utilizando boas práticas de programação e com escalabilidade em mente  | Manutenabilidade | Desejável |

\> **Categoria**: usabilidade, confiabilidade, performance, suportabilidade, restrição de projeto, implementação, interface e requisito físico \- segundo classificação \[FURP+\](https://pt.wikipedia.org/wiki/FURPS).

\> **Classificação**: desejável ou obrigatório.