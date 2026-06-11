# CDU05. Login

- **Ator principal**: Clientes e Administração.
- **Atores secundários**: Nenhum.
- **Resumo**: Cliente ou Administração preenche o formulário de login e entra em sua conta
- **Pré-condição**: Cliente ou Administração está em qualquer página com acesso ao header
- **Pós-Condição**: Cliente ou Administração está logado e na página principal

## Fluxo Principal
| Ações do ator | Ações do sistema |
| :-----------------: | :-----------------: | 
| 1 - Cliente ou Administração clica em "Login" no header, onde o icone do Usuário ficaria caso logado |  | 
|  | 2 - O Sistema redireciona o Usuário a página de login, com o form de login, a header e o footer do site | 
| 3 - O Usuário preenche corretamente o formulário e clica em "Login" para continuar |  |
|  | 4 - O Sistema executa o login e retorna a página principal  | 


## Fluxo Alternativo - Desistencia ou Cancelamento do Login
| Ações do ator | Ações do sistema |
| :-----------------: | :-----------------: |
| 3.1 - O Usuário clica no header para retorna a página principal | | 
| | 3.2 - Sistema limpa o form e redireciona para página principal novamente |

## Fluxo Alternativo - Erro do Cadastro
| Ações do ator | Ações do sistema |
| :-----------------: | :-----------------: |
| 3.1 - O Usuário não preenche o formulário correta e preciona o botão de enviar chamado "Login" | | 
| | 3.2 - Sistema retornar o formulário e indiga que algo foi preenchido encorretamente | 


> Obs. as seções a seguir apenas serão utilizadas na segunda unidade do PDSWeb (segundo orientações do gerente do projeto).

## Diagrama de Classes de Projeto