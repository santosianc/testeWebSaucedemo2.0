$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Features/Checkout.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#language: pt"
    }
  ],
  "line": 3,
  "name": "Checkout",
  "description": "",
  "id": "checkout",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "line": 2,
      "name": "@Checkout"
    },
    {
      "line": 2,
      "name": "@End2End"
    }
  ]
});
formatter.scenarioOutline({
  "line": 11,
  "name": "Realizar Checkout",
  "description": "",
  "id": "checkout;realizar-checkout",
  "type": "scenario_outline",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 10,
      "name": "@RealizarCheckout"
    },
    {
      "line": 10,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "clicar no botao continue checkout",
  "keyword": "Quando "
});
formatter.step({
  "line": 13,
  "name": "vai carregar a pagina de dados do usuario",
  "keyword": "Entao "
});
formatter.step({
  "line": 14,
  "name": "informar o campo First Name como \"\u003cnome\u003e\"",
  "keyword": "E "
});
formatter.step({
  "line": 15,
  "name": "informar o campo Last Name como \"\u003csobrenome\u003e\"",
  "keyword": "E "
});
formatter.step({
  "line": 16,
  "name": "informar o campo Zip/Postal Code como \"\u003cCEP\u003e\"",
  "keyword": "E "
});
formatter.step({
  "line": 17,
  "name": "clicar no botao continue",
  "keyword": "E "
});
formatter.step({
  "line": 18,
  "name": "clicar no botao finish",
  "keyword": "E "
});
formatter.step({
  "line": 19,
  "name": "deve ser apresentada a mensagem de sucesso \"\u003cmensagemDeSucesso\u003e\"",
  "keyword": "Entao "
});
formatter.examples({
  "line": 21,
  "name": "",
  "description": "",
  "id": "checkout;realizar-checkout;",
  "rows": [
    {
      "cells": [
        "nome",
        "sobrenome",
        "CEP",
        "mensagemDeSucesso"
      ],
      "line": 22,
      "id": "checkout;realizar-checkout;;1"
    },
    {
      "cells": [
        "Jamili",
        "Suassuna",
        "73040100",
        "Your order has been dispatched, and will arrive just as fast as the pony can get there!"
      ],
      "line": 23,
      "id": "checkout;realizar-checkout;;2"
    }
  ],
  "keyword": "Exemplos"
});
formatter.before({
  "duration": 2316111700,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 6,
  "name": "que o usuario esteja no carrinho com algum produto",
  "keyword": "Dado "
});
formatter.step({
  "line": 7,
  "name": "que contenha algum produto no carrinho",
  "keyword": "Dado "
});
formatter.match({
  "location": "CheckoutSteps.que_o_usuario_esteja_no_carrinho_com_algum_produto()"
});
formatter.result({
  "duration": 1277330100,
  "status": "passed"
});
formatter.match({
  "location": "CheckoutSteps.que_contenha_algum_produto_no_carrinho()"
});
formatter.result({
  "duration": 647716300,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Realizar Checkout",
  "description": "",
  "id": "checkout;realizar-checkout;;2",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 2,
      "name": "@End2End"
    },
    {
      "line": 2,
      "name": "@Checkout"
    },
    {
      "line": 10,
      "name": "@RealizarCheckout"
    },
    {
      "line": 10,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "clicar no botao continue checkout",
  "keyword": "Quando "
});
formatter.step({
  "line": 13,
  "name": "vai carregar a pagina de dados do usuario",
  "keyword": "Entao "
});
formatter.step({
  "line": 14,
  "name": "informar o campo First Name como \"Jamili\"",
  "matchedColumns": [
    0
  ],
  "keyword": "E "
});
formatter.step({
  "line": 15,
  "name": "informar o campo Last Name como \"Suassuna\"",
  "matchedColumns": [
    1
  ],
  "keyword": "E "
});
formatter.step({
  "line": 16,
  "name": "informar o campo Zip/Postal Code como \"73040100\"",
  "matchedColumns": [
    2
  ],
  "keyword": "E "
});
formatter.step({
  "line": 17,
  "name": "clicar no botao continue",
  "keyword": "E "
});
formatter.step({
  "line": 18,
  "name": "clicar no botao finish",
  "keyword": "E "
});
formatter.step({
  "line": 19,
  "name": "deve ser apresentada a mensagem de sucesso \"Your order has been dispatched, and will arrive just as fast as the pony can get there!\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Entao "
});
formatter.match({
  "location": "CheckoutSteps.clicar_no_botao_continue_checkout()"
});
formatter.result({
  "duration": 79537000,
  "status": "passed"
});
formatter.match({
  "location": "CheckoutSteps.vai_carregar_a_pagina_de_dados_do_usuario()"
});
formatter.result({
  "duration": 22529100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jamili",
      "offset": 34
    }
  ],
  "location": "CheckoutSteps.informar_o_campo_First_Name_como(String)"
});
formatter.result({
  "duration": 107426100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Suassuna",
      "offset": 33
    }
  ],
  "location": "CheckoutSteps.informar_o_campo_Last_Name_como(String)"
});
formatter.result({
  "duration": 95577600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "73040100",
      "offset": 39
    }
  ],
  "location": "CheckoutSteps.informar_o_campo_Zip_Postal_Code_como(String)"
});
formatter.result({
  "duration": 86754600,
  "status": "passed"
});
formatter.match({
  "location": "CheckoutSteps.clicar_no_botao_continue()"
});
formatter.result({
  "duration": 93629100,
  "status": "passed"
});
formatter.match({
  "location": "CheckoutSteps.clicar_no_botao_finish()"
});
formatter.result({
  "duration": 78641000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Your order has been dispatched, and will arrive just as fast as the pony can get there!",
      "offset": 44
    }
  ],
  "location": "CheckoutSteps.deve_ser_apresentada_a_mensagem_de_sucesso(String)"
});
formatter.result({
  "duration": 74931900,
  "status": "passed"
});
formatter.after({
  "duration": 738184500,
  "status": "passed"
});
formatter.uri("Features/Login.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#language: pt"
    }
  ],
  "line": 3,
  "name": "Login",
  "description": "",
  "id": "login",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "line": 2,
      "name": "@Login"
    },
    {
      "line": 2,
      "name": "@End2End"
    }
  ]
});
formatter.scenarioOutline({
  "line": 9,
  "name": "Realizar login com sucesso",
  "description": "",
  "id": "login;realizar-login-com-sucesso",
  "type": "scenario_outline",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 8,
      "name": "@RealizarLogin"
    },
    {
      "line": 8,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "informar o campo Usarname como \"\u003cusuario\u003e\"",
  "keyword": "Quando "
});
formatter.step({
  "line": 11,
  "name": "informar o campo Passworld como \"\u003csenha\u003e\"",
  "keyword": "E "
});
formatter.step({
  "line": 12,
  "name": "clicar no botao Login",
  "keyword": "E "
});
formatter.step({
  "line": 13,
  "name": "o sistema devera autorizar o login, exibindo pagina Products.",
  "keyword": "Entao "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "login;realizar-login-com-sucesso;",
  "rows": [
    {
      "cells": [
        "usuario",
        "senha"
      ],
      "line": 16,
      "id": "login;realizar-login-com-sucesso;;1"
    },
    {
      "cells": [
        "standard_user",
        "secret_sauce"
      ],
      "line": 17,
      "id": "login;realizar-login-com-sucesso;;2"
    }
  ],
  "keyword": "Exemplos"
});
formatter.before({
  "duration": 1492692300,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 6,
  "name": "que o usuario esteja na pagina principal do sistema",
  "keyword": "Dado "
});
formatter.match({
  "location": "LoginSteps.que_o_usuario_esteja_na_pagina_principal_do_sistema()"
});
formatter.result({
  "duration": 464712800,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Realizar login com sucesso",
  "description": "",
  "id": "login;realizar-login-com-sucesso;;2",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 2,
      "name": "@Login"
    },
    {
      "line": 2,
      "name": "@End2End"
    },
    {
      "line": 8,
      "name": "@RealizarLogin"
    },
    {
      "line": 8,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "informar o campo Usarname como \"standard_user\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 11,
  "name": "informar o campo Passworld como \"secret_sauce\"",
  "matchedColumns": [
    1
  ],
  "keyword": "E "
});
formatter.step({
  "line": 12,
  "name": "clicar no botao Login",
  "keyword": "E "
});
formatter.step({
  "line": 13,
  "name": "o sistema devera autorizar o login, exibindo pagina Products.",
  "keyword": "Entao "
});
formatter.match({
  "arguments": [
    {
      "val": "standard_user",
      "offset": 32
    }
  ],
  "location": "LoginSteps.informar_o_campo_Usarname_como(String)"
});
formatter.result({
  "duration": 176294100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "secret_sauce",
      "offset": 33
    }
  ],
  "location": "LoginSteps.informar_o_campo_Passworld_como(String)"
});
formatter.result({
  "duration": 158322500,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.clicar_no_botao_Login()"
});
formatter.result({
  "duration": 212660100,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.o_sistema_devera_autorizar_o_login_exibindo_pagina_Products()"
});
formatter.result({
  "duration": 382878900,
  "status": "passed"
});
formatter.after({
  "duration": 697439400,
  "status": "passed"
});
formatter.uri("Features/Products.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#language: pt"
    }
  ],
  "line": 3,
  "name": "Products",
  "description": "",
  "id": "products",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "line": 2,
      "name": "@Products"
    },
    {
      "line": 2,
      "name": "@End2End"
    }
  ]
});
formatter.scenarioOutline({
  "line": 9,
  "name": "Selecionar Produtos",
  "description": "",
  "id": "products;selecionar-produtos",
  "type": "scenario_outline",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 8,
      "name": "@SelecionarProdutos"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "clicar no botao Add To Cart do produto Sauce Labs Backpack",
  "keyword": "Quando "
});
formatter.step({
  "line": 11,
  "name": "selecionar no campo de filtro \"\u003cfiltro\u003e\"",
  "keyword": "E "
});
formatter.step({
  "line": 12,
  "name": "clicar no produto com nome Sauce Labs Onesie",
  "keyword": "E "
});
formatter.step({
  "line": 13,
  "name": "o sistema ira abrir a pagina do produto",
  "keyword": "Entao "
});
formatter.step({
  "line": 14,
  "name": "clicar no botao add to cart",
  "keyword": "Quando "
});
formatter.step({
  "line": 15,
  "name": "apertar no botao back to products",
  "keyword": "E "
});
formatter.step({
  "line": 16,
  "name": "clicar no botao Remove do produto com nome Sauce Labs Backpack",
  "keyword": "Quando "
});
formatter.step({
  "line": 17,
  "name": "clicar no botao carrinho",
  "keyword": "E "
});
formatter.step({
  "line": 18,
  "name": "o site vai abri a pagina your cart",
  "keyword": "Entao "
});
formatter.examples({
  "line": 22,
  "name": "",
  "description": "",
  "id": "products;selecionar-produtos;",
  "rows": [
    {
      "cells": [
        "filtro"
      ],
      "line": 23,
      "id": "products;selecionar-produtos;;1"
    },
    {
      "cells": [
        "Price (low to high)"
      ],
      "line": 24,
      "id": "products;selecionar-produtos;;2"
    }
  ],
  "keyword": "Exemplos"
});
formatter.before({
  "duration": 1430813900,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 6,
  "name": "que o usuario esteja logado com sucesso",
  "keyword": "Dado "
});
formatter.match({
  "location": "ProductsSteps.que_o_usuario_esteja_logado_com_sucesso()"
});
formatter.result({
  "duration": 980246600,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Selecionar Produtos",
  "description": "",
  "id": "products;selecionar-produtos;;2",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 2,
      "name": "@End2End"
    },
    {
      "line": 2,
      "name": "@Products"
    },
    {
      "line": 8,
      "name": "@SelecionarProdutos"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "clicar no botao Add To Cart do produto Sauce Labs Backpack",
  "keyword": "Quando "
});
formatter.step({
  "line": 11,
  "name": "selecionar no campo de filtro \"Price (low to high)\"",
  "matchedColumns": [
    0
  ],
  "keyword": "E "
});
formatter.step({
  "line": 12,
  "name": "clicar no produto com nome Sauce Labs Onesie",
  "keyword": "E "
});
formatter.step({
  "line": 13,
  "name": "o sistema ira abrir a pagina do produto",
  "keyword": "Entao "
});
formatter.step({
  "line": 14,
  "name": "clicar no botao add to cart",
  "keyword": "Quando "
});
formatter.step({
  "line": 15,
  "name": "apertar no botao back to products",
  "keyword": "E "
});
formatter.step({
  "line": 16,
  "name": "clicar no botao Remove do produto com nome Sauce Labs Backpack",
  "keyword": "Quando "
});
formatter.step({
  "line": 17,
  "name": "clicar no botao carrinho",
  "keyword": "E "
});
formatter.step({
  "line": 18,
  "name": "o site vai abri a pagina your cart",
  "keyword": "Entao "
});
formatter.match({
  "location": "ProductsSteps.clicar_no_botao_Add_To_Cart_do_produto_Sauce_Labs_Backpack()"
});
formatter.result({
  "duration": 483219400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Price (low to high)",
      "offset": 31
    }
  ],
  "location": "ProductsSteps.selecionar_no_campo_de_filtro(String)"
});
formatter.result({
  "duration": 192741500,
  "status": "passed"
});
formatter.match({
  "location": "ProductsSteps.clicar_no_produto_com_nome_Sauce_Labs_Onesie()"
});
formatter.result({
  "duration": 128146400,
  "status": "passed"
});
formatter.match({
  "location": "ProductsSteps.o_sistema_ira_abrir_a_pagina_do_produto()"
});
formatter.result({
  "duration": 155437300,
  "status": "passed"
});
formatter.match({
  "location": "ProductsSteps.clicar_no_botao_add_to_cart()"
});
formatter.result({
  "duration": 107526600,
  "status": "passed"
});
formatter.match({
  "location": "ProductsSteps.apertar_no_botao_back_to_products()"
});
formatter.result({
  "duration": 118477300,
  "status": "passed"
});
formatter.match({
  "location": "ProductsSteps.clicar_no_botao_Remove_do_produto_com_nome_Sauce_Labs_Backpack()"
});
formatter.result({
  "duration": 306100700,
  "status": "passed"
});
formatter.match({
  "location": "ProductsSteps.clicar_no_bot_o_carrinho()"
});
formatter.result({
  "duration": 114689300,
  "status": "passed"
});
formatter.match({
  "location": "ProductsSteps.o_site_vai_abri_a_pagina_your_cart()"
});
formatter.result({
  "duration": 52682900,
  "status": "passed"
});
formatter.after({
  "duration": 781786000,
  "status": "passed"
});
});