package pageobjects;

import static org.junit.Assert.assertTrue;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

import utils.MetodosUteis;

public class ProductsPage extends MetodosUteis { 
	
	protected WebDriver driver;
	
	public ProductsPage(WebDriver driver) {  
		this.driver = driver;
		PageFactory.initElements(driver, this);
		
	}
	
	@FindBy (how = How.ID, using = "add-to-cart-sauce-labs-backpack")
	private WebElement btnAddSauceLabsBackpack;
	
	@FindBy (how = How.XPATH, using = "//*[@id=\"header_container\"]/div[2]/div[2]/span/select")  //conferir 
	private WebElement filtroProdutos;
		
	@FindBy (how = How.XPATH, using = "//*[@id=\"item_2_title_link\"]/div") 
	private WebElement clicarNoSauceLabsOnesie;
	
	@FindBy (how = How.XPATH, using = "//*[@id=\"inventory_item_container\"]/div/div/div[2]/div[1]") //validacao pagina produto onesie
	private WebElement validarPgSauceLabsOnesie;
	
	@FindBy (how = How.ID, using = "add-to-cart-sauce-labs-onesie") 
	private WebElement btnAddToCartSauceLabsOnesie;
	
	@FindBy (how = How.ID, using = "back-to-products") 
	private WebElement btnVoltarPaginaProduct;
	
	@FindBy (how = How.ID, using = "remove-sauce-labs-backpack")
	private WebElement btnRemoverSauceLabsBackpack;
	
	@FindBy (how = How.ID, using = "shopping_cart_container")
	private WebElement btnCart;
	
	@FindBy (how = How.XPATH, using = "/html/body/div/div/div/div[1]/div[2]/span") 
	private WebElement validarCart;
	
	
	
	
	public void addToCartBackPack() {
		esperarElemento(btnAddSauceLabsBackpack);
		btnAddSauceLabsBackpack.click();
	}
	public void filtrarProdutos(String filtro) { 
		esperarElemento(filtroProdutos);
		selecionar(filtroProdutos, filtro);
	}			
	public void clicarNoProdutoSauceLabsOnesie() {
		esperarElemento(clicarNoSauceLabsOnesie);
		clicarNoSauceLabsOnesie.click();
	}	
	public void validarPgProdutoSauceLabsOnesie() {
		esperarElemento(validarPgSauceLabsOnesie);
		assertTrue(validarPgSauceLabsOnesie.isEnabled());
	}	
	public void addToCartSauceLabsOnesie() {
		esperarElemento(btnAddToCartSauceLabsOnesie);
		btnAddToCartSauceLabsOnesie.click();
	}	
	public void clicarBtnBackToProducts() {
		esperarElemento(btnVoltarPaginaProduct);
		btnVoltarPaginaProduct.click();
	}
	
	public void removerSauceLabsBackpack() {
		esperarElemento(btnRemoverSauceLabsBackpack);
		btnRemoverSauceLabsBackpack.click();
	}
	
	public void clicarBotaoCarrinho() {
		esperarElemento(btnCart);
		btnCart.click();
	}
	public void validarPgCarrinho() {
		esperarElemento(validarCart);
		assertTrue(validarCart.isEnabled());
	}	
	
	
	
}
