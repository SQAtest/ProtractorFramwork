 
describe("This is may first protractor Test", function() 
	{
	
	it("This will add two numbers", function() 
	
		{
	
		browser.get("http://juliemr.github.io/protractor-demo/");
		
		element(by.model("first")).sendKeys("10");
		
		element(by.model("second")).sendKeys("20");
		
		element(by.id("gobutton")).click();
		
		expect(element(by.className("ng-binding")).getText()).toEqual("30");
		
	});
	
});