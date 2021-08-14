package stepdefinitions;

import org.openqa.selenium.WebDriver;

import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.Entao;
import cucumber.api.java.pt.Quando;
import pageobjects.LoginPage;
import pageobjects.ProductsPage;

public class ProductsSteps {
	
	public static WebDriver driver; 
	
	@Dado("^que o usuario esteja logado com sucesso$")
	public void que_o_usuario_esteja_logado_com_sucesso() throws Throwable {
		Hooks.abrirUrl("https://www.saucedemo.com/"); 
		driver = Hooks.getDriver(); 
		LoginPage lp = new LoginPage(driver);  
		lp.preencherUsuario("standard_user");  
		lp.preencherSenha("secret_sauce");		
		lp.clicarBotaoLogin();
	}
	


	@Quando("^clicar no botao Add To Cart do produto Sauce Labs Backpack$")
	public void clicar_no_botao_Add_To_Cart_do_produto_Sauce_Labs_Backpack() throws Throwable {
	    ProductsPage pg = new ProductsPage(driver);
	    pg.addToCartBackPack();
	    
	    
	}

	@Quando("^selecionar no campo de filtro \"([^\"]*)\"$")
	public void selecionar_no_campo_de_filtro(String arg1) throws Throwable {
		ProductsPage pg = new ProductsPage(driver);
		pg.filtrarProdutos(arg1);
		
	}

	@Quando("^clicar no produto com nome Sauce Labs Onesie$")
	public void clicar_no_produto_com_nome_Sauce_Labs_Onesie() throws Throwable {
		ProductsPage pg = new ProductsPage(driver);
		pg.clicarNoProdutoSauceLabsOnesie();
	}

	@Entao("^o sistema ira abrir a pagina do produto$")
	public void o_sistema_ira_abrir_a_pagina_do_produto() throws Throwable {
		ProductsPage pg = new ProductsPage(driver);
		pg.validarPgProdutoSauceLabsOnesie();
		
	}

	@Quando("^clicar no botao add to cart$")
	public void clicar_no_botao_add_to_cart() throws Throwable {
		ProductsPage pg = new ProductsPage(driver);
		pg.addToCartSauceLabsOnesie();
	}

	@Quando("^apertar no botao back to products$")
	public void apertar_no_botao_back_to_products() throws Throwable {
		ProductsPage pg = new ProductsPage(driver);
		pg.clicarBtnBackToProducts();
		
	}


	@Quando("^clicar no botao Remove do produto com nome Sauce Labs Backpack$")
	public void clicar_no_botao_Remove_do_produto_com_nome_Sauce_Labs_Backpack() throws Throwable {
		ProductsPage pg = new ProductsPage(driver);
		pg.removerSauceLabsBackpack();
		
	}

	@Quando("^clicar no botao carrinho$")
	public void clicar_no_bot_o_carrinho() throws Throwable {
		ProductsPage pg = new ProductsPage(driver);
		pg.clicarBotaoCarrinho();
		
		
		
	}

	@Entao("^o site vai abri a pagina your cart$")
	public void o_site_vai_abri_a_pagina_your_cart() throws Throwable {
		ProductsPage pg = new ProductsPage(driver);
		pg.validarPgCarrinho();
		
	}
	


}
