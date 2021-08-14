package stepdefinitions;

import org.openqa.selenium.WebDriver;

import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.Entao;
import cucumber.api.java.pt.Quando;
import pageobjects.LoginPage;

public class LoginSteps {
	public static WebDriver driver;  
	
	@Dado("^que o usuario esteja na pagina principal do sistema$")
	public void que_o_usuario_esteja_na_pagina_principal_do_sistema() throws Throwable {
		Hooks.abrirUrl("https://www.saucedemo.com/"); 
		driver = Hooks.getDriver(); 

	}

	@Quando("^informar o campo Usarname como \"([^\"]*)\"$")
	public void informar_o_campo_Usarname_como(String arg1) throws Throwable {
		LoginPage lp = new LoginPage(driver);
		lp.preencherUsuario(arg1);
		
	}

	@Quando("^informar o campo Passworld como \"([^\"]*)\"$")
	public void informar_o_campo_Passworld_como(String arg1) throws Throwable {
		LoginPage lp = new LoginPage(driver);
		lp.preencherSenha(arg1);
	}

	@Quando("^clicar no botao Login$")
	public void clicar_no_botao_Login() throws Throwable {
		LoginPage lp = new LoginPage(driver);
		lp.clicarBotaoLogin();
	}

	@Entao("^o sistema devera autorizar o login, exibindo pagina Products\\.$")
	public void o_sistema_devera_autorizar_o_login_exibindo_pagina_Products() throws Throwable {
		LoginPage lp = new LoginPage(driver);
		lp.validarPgProduct();
	}


}
