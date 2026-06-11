# CDU02. Pesquisar Produto

- **Ator principal**: Clientes e Administração.
- **Atores secundários**: Nenhum.
- **Resumo**: Clientes e Administração podem procurar por produtos através de uma barra de pesquisa ou por filtros.
- **Pré-condição**: Existe uma banco de dados de produtos.
- **Pós-Condição**: Sistema mostra uma lista de todos os produtos compativeis.

## Fluxo Principal
| Ações do ator | Ações do sistema |
| :-----------------: | :-----------------: | 
| 1 - Cliente ou Administração digita na barra de pesquisa o nome ou a característica desejada . | |  
| 2 - Cliente ou Administração clica "Enter" para realizar a busca.| |
| | 3 - Sistema processa a consulta, filtrando o banco de dados e mostrando todos os podutos similares. Mostrando o nome, imagem, descrição e se estiver a venda ou não, junto do preço e estoque . |
| 4 - Cliente ou Administração clica no produto desejado para abrir sua página. | |
| |5 - Sistema redireciona o Usuário para a página do produto. |

## Fluxo Alternativo - Seleção por Categoria
| Ações do ator | Ações do sistema |
| :-----------------: |:-----------------: | 
| 1.1 - O Cliente ou Administração seleciona a categoria desejada na header da página. | |  
| | (Retorna ao passo 2 do fluxo principal) |



> Obs. as seções a seguir apenas serão utilizadas na segunda unidade do PDSWeb (segundo orientações do gerente do projeto).

## Diagrama de Classes de Projeto

![DiagramaClassesProjetoCDU01](CDU02DiagramaClasses.png)