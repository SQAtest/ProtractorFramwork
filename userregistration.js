

var signInButton = element(by.css(`a.sign_in_btn`));

//var registerButton = element(by.css('[href='/en/sign-up/']'));

var registerButton = element(by.partialLinkText('then register with your email'));
var firstNameInput = element(by.name('odc_reg_fname'));
var lastNameInput = element(by.name('odc_reg_lname'));
var emailNameInput = element(by.name('odc_reg_email'));
var passwordInput = element(by.name('odc_reg_password'));
var passwordConfInput = element(by.name('odc_reg_conf_password'));
var checkBoxInput = element(by.name('odc_reg_dataPlicy'));
var userRegButton = element(by.name('btn_odc_register'));
var userNameInput = element(by.name('hasin@yopmail.com'));
var userPassInput = element(by.name('Password1@'));
var loginButton = element(by.name('btn_login'));

describe('User Registration Non Angular application', function(){

	it('Register new user to application', function(){
		
		// browser.ignoreSynchronization = true;

		browser.manage().window().maximize();
		browser.waitForAngularEnabled(false);

		browser.get('https://switzerland.thermomix.com/en/');
		//browser.manage().window().maximize();
		
		
		
		browser.sleep(4000);

		signInButton.click();
		browser.sleep(4000);
		// element(by.buttonText('Anmelden / Registrieren')).click();


		//element(by.buttonText("Anmelden / Registrieren")).click();

		expect(browser.getCurrentUrl()).toBe('https://switzerland.thermomix.com/en/sign-in/');
		
		browser.sleep(4000);

		registerButton.click();

		browser.sleep(4000);

		expect(browser.getCurrentUrl()).toBe('https://switzerland.thermomix.com/en/sign-up/');

		browser.sleep(4000);

		firstNameInput.sendKeys('SeliseTes4');
		lastNameInput.sendKeys('SeliseTest4');
		emailNameInput.sendKeys('testhasin5@yopmail.com');
		passwordInput.sendKeys('Password1@');
		passwordConfInput.sendKeys('Password1@');
		checkBoxInput.click();
		userRegButton.click();
		
		
		browser.sleep(4000);

		expect(browser.getCurrentUrl()).toBe('https://switzerland.thermomix.com/en/sign-in/');

		browser.sleep(4000);

		userNameInput.sendKeys('testhasin5@yopmail.com');
		userPassInput.sendKeys('Password1@');
		loginButton.click();

		browser.sleep(6000);

		expect(browser.getCurrentUrl()).toBe('https://switzerland.thermomix.com/my-account/?try=1/');

		browser.sleep(4000);
	});

	it('Click in SignIn Button for Login', function(){
		
		
	});



});