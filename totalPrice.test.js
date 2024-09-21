/**
@jest-environment jsdom
 */

test('use jsdom in this test file', () => {
    const element = document.createElement('div');
    expect(element).not.toBeNull();
  });

const getTotalPrice = require('./totalPrice');
test('gets the total price', () => {
    expect(getTotalPrice().toBe('hi'));
})