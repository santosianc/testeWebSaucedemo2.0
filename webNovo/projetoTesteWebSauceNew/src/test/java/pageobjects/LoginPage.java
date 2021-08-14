package pageobjects;

import static org.junit.Assert.assertTrue;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

import utils.MetodosUteis;

public class LoginPage extends MetodosUteis {
	
	protected WebDriver driver;
	
	public LoginPage(WebDriver driver) {  //implementação da inicialização
		PageFactory.initElements(driver, this);
		
	}
	
	@FindBy (how = How.ID, using = "user-name")
	private WebElement usuario; //objeto usuario 
	
	@FindBy (how = How.ID, using = "password")
	private WebElement senha; //objeto senha
	
	@FindBy (how = How.ID, using = "login-button")
	private WebElement btnLogin;  
	
	@FindBy (how = How.XPATH, using = "//*[@id=\"header_container\"]/div[2]/span") 
	private WebElement pgProducts;  
		
	
	public void preencherUsuario(String nomeUsuario) {
		esperarElemento(usuario);
		usuario.sendKeys(nomeUsuario);
	}
	
	public void preencherSenha(String senhaUsuario) {
		esperarElemento(senha);
		senha.sendKeys(senhaUsuario);
	}
	
	public void clicarBotaoLogin() {
		esperarElemento(btnLogin);
		btnLogin.click();
	}
	
	public void validarPgProduct() {
		esperarElemento(pgProducts);
		assertTrue(pgProducts.isEnabled());
	}
}
