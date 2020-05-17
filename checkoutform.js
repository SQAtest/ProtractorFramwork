
var signInButton = element(by.css(`a.sign_in_btn`));
var userEmailInput = element(by.name('odc_user_name'));
var userPasswordInput = element(by.name('odc_password'));
var loginButton = element(by.name('btn_login'));
var addToCartClick = element(by.css('i.fa-shopping-cart'));
var checkOutButton = element(by.css('a.wc-forward'));
var downArrowClick = element(by.css(`[aria-labelledby='select2-_salutation-container'] span.select2-selection__arrow`));
var dropdownItemSelect = element(by.css(`span.select2-container--open span.select2-dropdown--below span.select2-results ul.select2-results__options li.select2-results__option--highlighted`));
var firstNameInput = element(by.name('billing_first_name'));
var lastNameInput = element(by.name('billing_last_name'));
var countryDropDownClick = element(by.css('span#select2-billing_country-container'));
var countryDropDownItemSelect = element(by.css(`span.select2-dropdown--below span.select2-results ul.select2-results__options li.select2-results__option--highlighted`));
var streetNameInput = element(by.name('billing_address_1'));
var houseNumberInput = element(by.name('billing_address_2'));
var zipCodeInput = element(by.name('billing_postcode'));
var townNameInput = element(by.name('billing_city'));
var telephoneNumberInput = element(by.name('billing_phone'));
var emailAddressInput = element(by.name('billing_email'));
var languageSelect = element(by.css(`span#select2-_language-container`));
var languageSelectDropDown = element(by.css(`span.select2-results ul#select2-_language-results li.select2-results__option--highlighted`));
var dathOfBirthSelect = element(by.name('_date_of_birth'));
//var checkOutButton = element(by.css(`button#argmc-next.show-button span`));


describe('Thermomix Checkout Details Form', function(){
    
    it('Checkout Form Input Data', function() {
        
        browser.manage().window().maximize();
        browser.waitForAngularEnabled(false);
        
        browser.sleep(4000); 
        browser.get('https://switzerland.thermomix.com/en');
        browser.sleep(4000);

        
        signInButton.click();

        browser.sleep(3000);
        
        expect(browser.getCurrentUrl()).toBe('https://switzerland.thermomix.com/en/sign-in/');
        
        browser.sleep(4000);

        userEmailInput.sendKeys('suyen.khan@selise.ch');

        userPasswordInput.sendKeys('Win4Win$');

        loginButton.click();

        browser.sleep(4000);

        expect(browser.getCurrentUrl()).toBe('https://switzerland.thermomix.com/fr/my-account/?try=1%2F');

        browser.sleep(3000);

        addToCartClick.click();

        browser.sleep(3000);

        checkOutButton.click();

        browser.sleep(5000);

        downArrowClick.click();

        browser.sleep(5000);
        
        dropdownItemSelect.click();
 
        browser.sleep(3000);

        firstNameInput.sendKeys('Test');

        lastNameInput.sendKeys('checkout');

        countryDropDownClick.click();

        browser.sleep(3000);

        countryDropDownItemSelect.click();

        browser.sleep(3000);

        streetNameInput.sendKeys('Sihlquai');

        houseNumberInput.sendKeys('253');

        zipCodeInput.sendKeys('2206');

        townNameInput.sendKeys('Wadenswil');

        telephoneNumberInput.sendKeys('123 123 12 31');

        emailAddressInput.sendKeys('suyen.khan@selise.ch');

        browser.sleep(3000);

        languageSelect.click();

        browser.sleep(3000);

        languageSelectDropDown.click(); 

        browser.sleep(3000);

        dathOfBirthSelect.sendKeys('23-11-2000');

        browser.sleep(3000);

        //checkOutButton.click();

        element(by.id('argmc-next')).click();

        browser.sleep(4000);

    });
});