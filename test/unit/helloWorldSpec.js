// Please see Jasmine [http://pivotal.github.io/jasmine/] for all the 
// Expectations/Matchers options
define(['app'], function(HelloWorld) {

    describe('HellowWorld Spec', function() {
        var person;

        beforeEach(function() {
            person = {
                first: 'Ian',
                last: 'Svenonius'
            };
        });

        it('should say Hello Ian Svenonius', function() {
            var app = new HelloWorld(person);
            expect(app.hello()).toEqual('Hello Ian Svenonius');
        });

        it('should say Bye Ian Svenonius', function() {
            var app = new HelloWorld(person);
            expect(app.bye()).toEqual('Bye Ian Svenonius');
        });

    });

});