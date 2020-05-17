
exports.config = {
  
  seleniumAddress: 'http://localhost:4444/wd/hub',

  capabilities: {
    browserName: 'chrome'
  },

  specs: [
      // 'secondspec.js',
      //'userregistration.js',
      //'userloginandaddtocart.js',
      'checkoutform.js'
      ],


  jasmineNodeOpts: {
	
	showColors: true,	
	defaultTimeoutInterval: 300000  
    
  }

};