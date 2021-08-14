#language: pt
@Login @End2End
Funcionalidade: Login

  Contexto: 
    Dado que o usuario esteja na pagina principal do sistema

  @RealizarLogin @SmokeTest
  Esquema do Cenario: Realizar login com sucesso
    Quando informar o campo Usarname como "<usuario>"
    E informar o campo Passworld como "<senha>"
    E clicar no botao Login
    Entao o sistema devera autorizar o login, exibindo pagina Products.
  
  Exemplos: 
   | usuario       | senha        |
   | standard_user | secret_sauce |

