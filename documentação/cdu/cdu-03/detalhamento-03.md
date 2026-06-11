# CDU03. Criar Produto

- **Ator principal**: Administração.
- **Atores secundários**: Nenhum.
- **Resumo**: Administração pode preencher um formulário par criar um novo produto.
- **Pré-condição**: Uma conta de Administração esta conectada ao sistema.
- **Pós-Condição**: Produto é salvado e adicionado ao banco de dados.

## Fluxo Principal
| Ações do ator | Ações do sistema |
| :-----------------: | :-----------------: |
| 1 - Administração, na sua página de perfil, clica no botão "Criar Produto".   | 
| | 2 - Sistema abre um formulário Com as opções "Nome", "Imagem", "Descrição", "Preço" e "Estoque". | 
| 3 - Administração Preenche, ao mínimo, as opções necessárias, "Nome" e "Imagem", e clica no botão "Criar Produto". | | 
| | 4 - Sistema salva as informações dadas e cria um novo prouto no banco de dados. |
| | 5 - Sistema fecha o formulário e retornar para á página de usuário. |

## Fluxo Alternativo - Cancelar Produto
| Ações do ator | Ações do sistema |
| :-----------------: | :-----------------: |
| 1.1 Administração clica no botão "Sair". | |
| | 1.2 Sistema fecha o formulário e retornar para á página de usuário. |



> Obs. as seções a seguir apenas serão utilizadas na segunda unidade do PDSWeb (segundo orientações do gerente do projeto).

## Diagrama de Classes de Projeto

![DiagramaClassesProjetoCDU01](CDU03DiagramaClasses.png)