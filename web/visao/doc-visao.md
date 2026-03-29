# Documento de Visão

## Histórico de Revisões

| Data | Versão | Descrição | Autores |  
| :--: | :----: | :-------: | :-----: | 

## 1\. Visão Geral do Sistema Proposto

   Dayart é um site de monstruario e vendas online de artesanato com tecido e bordado pessoal do cliente

## 2\. Descrição do Problema  
| | |  
| :-: | :-: |  
| **Problema** | A falta de um espaço para o cliente dedicar a mostra e venda de seus artesanatos. |  
| **Afeta** | O cliente; Consumidores interesados em produtos de tecidos artesanais. |    
| **Impacta** | Renda e hobbing do cliente; Consumidores interesados em produtos feitos a mão. |  
| **Solução** | Criação de um site para monstruario e vendas virtual voltado para o artesanado com tecido/bordado. |

## 3\. Descrição dos Usuários

| Usuário | Descrição | Responsabilidades |  
| :-----: | :-------: | :---------------: |
| Visitantes | Visitantes seram as pessoas a qual não possuim uma conta. Eles poderam entrar no site, ver os produtos, utilizar toda a funcionalidade de pesquisar e criar uma conta| Visitantes poderão acessar ao site como um mostruario sem aceso a parte de vendas. |
| Usuarios | Usuarios seram as pessoas com uma conta registrada. Eles alem de possuir toda as funcionalidades do visitante, exeto a criação de uma conta, eles teram acesso a um carrinho, poderam adicionar ou editar informações sobre cartões de credito, editar a localização e adicionar itens a lista de desejo| Os usuários deverão adicionar informação sobre a localização e forma de pagamento. |
| Administração | A administração serão responsáveis a adicionar novos itens, manejar o estoque e a concluir pedidos. A administração também poderar ver dados da loja como numero de visitas e que itens estão em uma lista de desejo. | Moderação e manejamento do site e conclução de pedidos |

## 4\. Descrição do Ambiente dos Usuários

| Usuário | Ambiente operacional |  
| :-----: | :------------------: |
| Visitantes | Terá acesso a home e as paginas dos produtos alem do acesso aos filtros e a pesquisa |
| Usuarios | Alem de ter acesso a home, as paginas dos produtos, aos filtros e a pesquisa, teram a página do perfil, o carinho e a encomenda |
| Administração | Terá acesso a todas as páginas do sistema e funcionalidades e páginas para a criação de uma nova listagem e visualização de encomendas com suas conversas. |

## 5\. Principais Necessidades dos Usuários

1\. **Visitantes**  
   \- Acessar o site livremente sem precisar realizar um Login ou Cadastro;
   \- Visualizar e pesquisar por produtos;
   \- Desedir se a necesidade de criar uma conta como usuário.

2\. **Usuários**  
   \- Possuir conta registrada e autenticada por Login;
   \- Visualizar e pesquisar por produtos;  
   \- Adicionar produtos ao carrinho e conseguir finalizar uma compra.
   \- Avaliar produtos comprados.
   \- Comesar uma conversa com a administração para fazer uma encomenda

3\. **Administradores**  
   \- Realizar a manutenção do site;  
   \- Monitorar atividades dos usuários e manter a cordialidade;  
   \- Desativas páginas de produtos que não tem mais estoque;
   \- Deletar páginas de produtos que não seram mais produzidos;  
   \- Aumentar o estoque quando necessário;  
   \- Atuar como suporte ao cliente;
   \- Conversar com clientes para confirar uma encomenda;
   \- Concluir pedidos;

## 6\. Alternativas Concorrentes

1\. **Elo7**

   1.1 **Pontos positivos**  
      \- 

   1.2 **Pontos negativos**  
      \- 

## 7\. Regras de Negócio

| ID  | Regra | Descrição |  
| :-: | :---: | :-------: |
| RN01 | :---: | Encomendas de Usuários precição ser pagas 50% adiantado para efitar perdas |
| RN02 | :---: | Encomendas de Usuários pagara os restantes 50% após a finalização do produto |
| RN03 | :---: | Produtos devem ser desativados altomaticamente apos a venda completa do estoque |

## 8\. Requisitos Funcionais

| Código | Nome | Descrição | Prioridade |
| :----: | :--: | :-------: | :--------: |
| RF01 | Cadastro | Visitantes poderão fazer cadastro | Alta |
| RF02 | Login | Usuários poderão fazer login | Alta |
| RF03 | Logout | Usuários poderão fazer logout | Alta |
| RF04 | Pesquisar produto |  Usuários poderão buscar produtos por filtros ou a barra de pesquisa | Alta |
| RF05 | Página do produto | todos produtos devem ter a propria página, mostrando informações e imagens do produto | Alta |
| RF06 | Avaliar produto | Produtos comprados podem ser avaliados por compradores | Média |
| RF07 | Perfil do usuário | Usuários cadastrados devem poder ver sua propria página de perfil | Alta |
| RF09 | Adicionar ao carrinho | Usuários poderam adicionar produtos ativados no carrinho | Alta |
| RF10 | Finalizar compra | Usuários com itens no carrinho poderam finalizar a comprar e ter um pedido  | Alta |
| RF11 | Adicionar estoque | Administração deve poder adicionar estoque a um produto existente | Média |
| RF13 | Adicionar produto | Administação Pode adicionar um novo produto com nome, descrição, imagens e estoque | Média |
| RF14 | Desativar produto | Administação podem desativar pordutos, produtos desativados funcionam somente como mostruario | Baixa |
| RF15 | Ativar produto | Administação podem ativar pordutos, produtos ativados tem estoque e estão a venda | Baixa |
| RF16 | Deletar produto | Administação podem deletar um produto, removendo do mostruario | Baixa |
| RF17 | Começar encomenda | Usuários podem começar uma encomenda na página de perfil | Alta |
| RF18 | Chat de encomenda | Usuários e Adminstração poderam conversar sobre a encomenda pelo chat de encomenda | Alta |
| RF19 | Confirmar encomenda | Adminstração podera confirmar uma encomenda aberta, transformando ela em um pedido | Média |
| RF20 | Rejeitar encomenda | Adminstração podera rejeitar uma encomenda aberta, fechando a encomenda | Média |
| RF21 | Cancelar encomenda | Usuário podera cancelar uma encomenda aberta, fechando a encomenda | Baixa |
| RF22 | Editar página do produto | Adminstração podem editar uma página de produto para atualizar sua informação, mudar imagens, editar a descrição e adicionar estoque | Alta |

 **Prioridade**: alta, média ou baixa

## 9\. Requisitos Não-funcionais

| Código | Nome | Descrição | Categoria | Classificação |  
| :----: | :--: | :-------: | :-------: | :-----------: |
| NF01 | Boas práticas de programação | O site deve ser montado utilizando boas práticas de programação e com escalabilidade em mente  | Manutenabilidade | Desejável |

\> **Categoria**: usabilidade, confiabilidade, performance, suportabilidade, restrição de projeto, implementação, interface e requisito físico \- segundo classificação \[FURP+\](https://pt.wikipedia.org/wiki/FURPS).

\> **Classificação**: desejável ou obrigatório.