const Ship = require('./src/ship');

test('Return Ship Hitted', () => {
  const ship_1 = new Ship();
  console.log(ship_1.hit(1));
  expect(ship_1.hit(1)).toBe(1);
  expect(ship_1.isShunk(3,3)).toBe("Ship is shunk.");
});
