'use strict';

const should = require('chai').should();
const fizzBuzzer = require('../fizzBuzzer');


describe('fizzBuzzer', function(){

    it('should print words for numbers divisible by 3/5/15', function() {
    // range of normal inputs, including
    // notable cases like negative answers
    const normalCases = [
      {num: 3, expected: 'fizz'},
      {num: 5, expected: 'buzz'},
      {num: 15, expected: 'fizz-buzz'},
      {num: 7, expected: 7},
    ];
    // for each input num, `fizzBuzzer` should
    // produce the expected value
    normalCases.forEach(function(input) {
      const answer = fizzBuzzer(input.num);
      answer.should.equal(input.expected);
    });
  });

  it('should raise error if args not numbers', function() {
    // range of bad inputs where not both are numbers
    const badInputs = [
      ['a'],
      ['1'],
      [false],
      [{}]
    ];
    // prove that an error is raised for bad inputs
    badInputs.forEach(function(input) {
      (function() {
          fizzBuzzer(input[0])
      }).should.throw(Error);
    });
  });

});