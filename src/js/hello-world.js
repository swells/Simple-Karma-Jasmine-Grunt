define(function() {

  var HelloWorld = function(person) {
    this.first = person.first;
    this.last = person.last;
  };

  HelloWorld.prototype.hello = function() {
    return 'Hello ' + this.first + ' ' + this.last;
  };

  HelloWorld.prototype.bye = function() {
    return 'Bye ' + this.first + ' ' + this.last;
  };

  return HelloWorld;

});