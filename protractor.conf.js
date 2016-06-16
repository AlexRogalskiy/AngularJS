exports.config = {
	allScriptsTimeout: 11000,
	
	specs: [
		'./test/*.spec.js'
	],
	
	capabilities: {
		'browserName': 'chrome'
	},
	
	baseUrl: 'http://localhost:3333'
};