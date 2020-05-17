

//var signInButton = element(by.className('thermomix_light_green_btn.sign_in_btn'));
var signInButton = element(by.css(`a.sign_in_btn`));
var userEmailInput = element(by.name('odc_user_name'));
var userPasswordInput = element(by.name('odc_password'));
var loginButton = element(by.name('btn_login'));
var textLinkShop = element(by.css(`ul#primary-menu li a[href='https://switzerland.thermomix.com/fr/shop/']`)); 
var folderClickAccessoires = element(by.css(`a.see-deal`));

var accessoiresAddtoCart = element(by.css(`a.ajax_add_to_cart[data-product_sku='E288']`));
var addToCartClick = element(by.css('i.fa-shopping-cart'));
var checkOutButton = element(by.css('a.wc-forward'));
//var checkoutBillingDetailsForm = element(by.css('[title='Mr'] font[style='vertical-align: inherit;'] font[style='vertical-align: inherit;']'));



describe('E-Shop add to cart feature in logedIn stage', function(){

    it('E-Shop add to cart', function() {

        browser.manage().window().maximize();
        browser.waitForAngularEnabled(false);
        browser.sleep(4000); 
        browser.get('https://switzerland.thermomix.com/en');
        browser.sleep(4000);

        
        signInButton.click();

        browser.sleep(4000);
        
        expect(browser.getCurrentUrl()).toBe('https://switzerland.thermomix.com/en/sign-in/');
        
        browser.sleep(4000);

        userEmailInput.sendKeys('suyen.khan@selise.ch');

        userPasswordInput.sendKeys('Win4Win$');

        loginButton.click();

        browser.sleep(4000);

        expect(browser.getCurrentUrl()).toBe('https://switzerland.thermomix.com/fr/my-account/?try=1%2F');

        browser.sleep(3000);


        textLinkShop.click();

        
        browser.sleep(4000);

        folderClickAccessoires.click();

        browser.sleep(4000);

        //expect(browser.getCurrentUrl()).toBe('https://switzerland.thermomix.com/fr/e-shop/?category=accessoires-fr&device=&min_price=0&max_price=1722&language=&orderby=menu_order');

        browser.sleep(3000);

        accessoiresAddtoCart.click();

        browser.sleep(4000);

        addToCartClick.click();

        browser.sleep(3000);

        checkOutButton.click();

        browser.sleep(9000);

        // Checkout Billing Details Form 

        //checkoutBillingDetailsForm.sendKeys('Mr');
        

    });
    
});



