var firstNameInput = element(by.name("firstname"));
var lastNameInput = element(by.name("lastname"));
var emailInput = element(by.name("email"));
var passwordInput = element(by.name("password"));
var confirmPasswordInput = element(by.name("confirm_password"));
var termAndConditionCheckBox = element(by.className('.field.login-checkbox'));

describe('Register and Login End to End Scenario', function() {
	
  it('Register new user to application', function() {
	    
	browser.get('http://www.amasik.com/demo/angularjs/angular-app/');
	
	browser.driver.manage().window().maximize();
	
	element(by.partialLinkText("have an account?")).click();
	
	browser.driver.sleep(4000);
	
	firstNameInput.sendKeys("Ratul");
	lastNameInput.sendKeys("Khan");
	emailInput.sendKeys("khan@yopmail.com");
	passwordInput.sendKeys("123456");
	confirmPasswordInput.sendKeys("123456");
	
	confirmPasswordInput.click();
	
	
	
	
	//element(by.value('First Choice')).click();
	
	
	//var Field = element(by.id('Field')).expect(Field.isSelected()).toBe(true).click();
	
	//expect(Field.isSelected()).toBe(false);
	//Field.click();
	//expect(Field.isSelected()).toBe(true);
	
	
	
	element(by.buttonText("Register")).click();
	browser.driver.sleep(4000);
	element(by.partialLinkText("Login to your account")).click();
  });
  
  //it('Login with the new user', function(){
	  
	 // browser.findElement(by.model("login.email")).sendKeys("khan@yopmail.com");
	 // browser.findElement(by.model("login.password")).sendKeys("123456");
	  //browser.findElement(by.buttonText("Sign In")).click()
	  //browser.findElement(by.className('class="button btn btn-success btn-large"')).click();
	  
  //});
  
});
