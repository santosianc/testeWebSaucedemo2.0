package stepdefinitions;

import org.openqa.selenium.WebDriver;

import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.Entao;
import cucumber.api.java.pt.Quando;
import pageobjects.CheckoutPage;
import pageobjects.LoginPage;
import pageobjects.ProductsPage;

public class CheckoutSteps {
	
	public static WebDriver driver; 
	
	@Dado("^que o usuario esteja no carrinho com algum produto$")
	public void que_o_usuario_esteja_no_carrinho_com_algum_produto() throws Throwable {
		Hooks.abrirUrl("https://www.saucedemo.com/"); 
		driver = Hooks.getDriver(); 
		LoginPage lp = new LoginPage(driver);  
		lp.preencherUsuario("standard_user");  
		lp.preencherSenha("secret_sauce");	
		lp.clicarBotaoLogin();
	}
	
	@Dado("^que contenha algum produto no carrinho$")
	public void que_contenha_algum_produto_no_carrinho() throws Throwable {
		ProductsPage pg = new ProductsPage(driver);
		pg.addToCartBackPack();
		pg.clicarBotaoCarrinho();
		pg.validarPgCarrinho();
	}
	
	String firstName;
	String lastName;
	Double CEP;
	
	@Quando("^clicar no botao continue checkout$")
	public void clicar_no_botao_continue_checkout() throws Throwable {
		CheckoutPage cp = new CheckoutPage(driver);
		cp.clicarBotaoCheckout();

	}
	
	@Entao("^vai carregar a pagina de dados do usuario$")
	public void vai_carregar_a_pagina_de_dados_do_usuario() throws Throwable {
		CheckoutPage cp = new CheckoutPage(driver);
		cp.validarPgInformacoesUsuario();
		
	}

	@Quando("^informar o campo First Name como \"([^\"]*)\"$")
	public void informar_o_campo_First_Name_como(String firstName) throws Throwable {
		CheckoutPage cp = new CheckoutPage(driver);
		cp.preencherFirstName(firstName);

	}

	@Quando("^informar o campo Last Name como \"([^\"]*)\"$")
	public void informar_o_campo_Last_Name_como(String lastName) throws Throwable {
		CheckoutPage cp = new CheckoutPage(driver);
		cp.preencherLastName(lastName);

	}

	@Quando("^informar o campo Zip/Postal Code como \"([^\"]*)\"$")
	public void informar_o_campo_Zip_Postal_Code_como(String cep) throws Throwable {
		CheckoutPage cp = new CheckoutPage(driver);
		cp.preencherCep(cep);

	}

	@Quando("^clicar no botao continue$")
	public void clicar_no_botao_continue() throws Throwable {
		CheckoutPage cp = new CheckoutPage(driver);
		cp.clicarBotaoContinue();
	}

	
	@Quando("^clicar no botao finish$")
	public void clicar_no_botao_finish() throws Throwable {
		CheckoutPage cp = new CheckoutPage(driver);
		cp.clicarBotaoFinish();
	}
	
	@Entao("^deve ser apresentada a mensagem de sucesso \"([^\"]*)\"$")
	public void deve_ser_apresentada_a_mensagem_de_sucesso(String mensagem) throws Throwable {
		CheckoutPage cp = new CheckoutPage(driver);
		cp.validarMensagemdeSucesso(mensagem);
	}

	

}
