# CDU04. Cadastro

- **Ator principal**: Usuários.
- **Atores secundários**: Nenhum.
- **Resumo**: Usuários podem preencher um formulário par criar uma conta.
- **Pré-condição**: Usuário clicar em cadastre-se
- **Pós-Condição**: Sistema retornar a página principal já logado na nova conta

## Fluxo Principal
| Ações do ator | Ações do sistema |
| :-----------------: | :-----------------: |
| 1 - Usuário clica em "cadastcadastre-se" no header | |
| | 2 - O Sistema redireciona o novo Cliente para uma página de cadastro, contendo o form, o header para retonar ao site mais facilmente e o footer |
| 3 - O novo Cliente preenche o formulário corretamente e clica no botão de enviar chamado "cadastre-se" | |
| | 4 - O Sistema realiza o login a nova conta e retorna a página principal |


## Fluxo Alternativo - Desistencia ou Cancelamento do Cadastro
| Ações do ator | Ações do sistema |
| :-----------------: | :-----------------: |
| 3.1 - O Usuário clica no header para retorna a página principal | | 
| | 3.2 - Sistema limpa o form e redireciona a página principal novamente | 


> Obs. as seções a seguir apenas serão utilizadas na segunda unidade do PDSWeb (segundo orientações do gerente do projeto).

## Diagrama de Classes de Projeto