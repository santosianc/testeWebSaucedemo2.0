package pageobjects;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;
import utils.MetodosUteis;

public class CheckoutPage extends MetodosUteis {
	
	protected WebDriver driver;
	
	public CheckoutPage(WebDriver driver) {  
		this.driver = driver;
		PageFactory.initElements(driver, this);
		
	}
	
	@FindBy (how = How.ID, using = "checkout")
	private WebElement btnCheckout;
	
	@FindBy (how = How.XPATH, using = "/html/body/div[1]/div/div/div[1]/div[2]/span")
	private WebElement pgInfoUsuario;
	
	@FindBy (how = How.ID, using = "first-name")
	private WebElement campoFirstName;
	
	@FindBy (how = How.ID, using = "last-name")
	private WebElement campoLastName;
	
	@FindBy (how = How.ID, using = "postal-code")
	private WebElement campoCEP;
	
	@FindBy (how = How.ID, using = "finish")
	private WebElement btnFinish;
	
	@FindBy (how = How.ID, using = "continue")
	private WebElement btnContinue;
	
	@FindBy (how = How.XPATH, using = "//*[@id='checkout_complete_container']/div")  
	private WebElement mensagemDeSucesso;
	
	public void clicarBotaoCheckout() {
		esperarElemento(btnCheckout);
		btnCheckout.click();
	}
	
	public void validarPgInformacoesUsuario() {
		assertTrue(pgInfoUsuario.isEnabled());
	}
	
	public void preencherFirstName(String firstName) {
		campoFirstName.sendKeys(firstName);

	}
	
	public void preencherLastName(String lastName) {
		campoLastName.sendKeys(lastName);
	}
	
	public void preencherCep(String CEP) {
		campoCEP.sendKeys(CEP);
	}
	
	public void clicarBotaoFinish() {
		esperarElemento(btnFinish);
		btnFinish.click();
	}
	
	public void clicarBotaoContinue() {
		esperarElemento(btnContinue);
		btnContinue.click();
	}
	
	public void validarMensagemdeSucesso(String mensagem) {
		esperarElemento(mensagemDeSucesso);
		System.out.println(mensagemDeSucesso.getText());
		assertEquals(mensagem, mensagemDeSucesso.getText());
	}

}
