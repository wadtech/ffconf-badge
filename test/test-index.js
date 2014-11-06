var test = require('tape'),
    who = require('./../');

test('pointless test', function(t) {
  t.equals('you', who.ateAllThePies(), 'you ate all the pies')
  t.end();
});
