'use strict';


describe("hello-protractor", function() {
	
	var ptor = browser;
	
	ptor.ignoreSynchronization = true;
	
	describe("index", function() {
		it("should display the correct title", function() {
			ptor.get('/');
			expect(ptor.getTitle()).toBe('hello');
		});
	});
});