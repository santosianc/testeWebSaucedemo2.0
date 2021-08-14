#language: pt
@Checkout @End2End
Funcionalidade: Checkout

	Contexto:
		Dado que o usuario esteja no carrinho com algum produto
		Dado que contenha algum produto no carrinho

		
	@RealizarCheckout	@SmokeTest
	Esquema do Cenario: Realizar Checkout
		Quando clicar no botao continue checkout
		Entao vai carregar a pagina de dados do usuario
		E informar o campo First Name como "<nome>"
		E informar o campo Last Name como "<sobrenome>"
		E informar o campo Zip/Postal Code como "<CEP>"
		E clicar no botao continue
		E clicar no botao finish
		Entao deve ser apresentada a mensagem de sucesso "<mensagemDeSucesso>" 

		Exemplos:
	|nome	 |sobrenome|CEP		  | mensagemDeSucesso 																																	   |
	|Jamili|Suassuna |73040100| Your order has been dispatched, and will arrive just as fast as the pony can get there!|

	