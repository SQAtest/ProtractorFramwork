exports.config = {
  
  seleniumAddress: 'http://localhost:4444/wd/hub',

  capabilities: {
    browserName: 'chrome'
  },

  specs: ['ngscript.js'],

  jasmineNodeOpts: {
	
	showColors: true,	
	//defaultTimeoutInterval: 30000  
    
  }
};