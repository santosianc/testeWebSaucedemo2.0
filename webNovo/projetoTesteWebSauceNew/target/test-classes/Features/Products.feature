#language: pt
@Products @End2End
Funcionalidade: Products

	Contexto:
		Dado que o usuario esteja logado com sucesso
		
	@SelecionarProdutos	
	Esquema do Cenario: Selecionar Produtos
		Quando clicar no botao Add To Cart do produto Sauce Labs Backpack
		E selecionar no campo de filtro "<filtro>"
		E clicar no produto com nome Sauce Labs Onesie 
		Entao o sistema ira abrir a pagina do produto
		Quando clicar no botao add to cart 
		E apertar no botao back to products
		Quando clicar no botao Remove do produto com nome Sauce Labs Backpack
		E clicar no botao carrinho 
		Entao o site vai abri a pagina your cart


		
	  Exemplos: 
   | filtro    					 | 
   | Price (low to high) |
	
