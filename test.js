const test = require('ava');
const randomLinearSRGBColor = require('./');

test('should return a valid linear sRGB color', (t) => {
  t.plan(10);

  for (let i = 0; i < 10; i++) {
    const color = randomLinearSRGBColor();
    const regex = /^color\(linear-srgb (?:\d+(\.\d+)?%?|\.\d+)(?: (?:\d+(\.\d+)?%?|\.\d+)){2}(?: \/ (?:\d+(\.\d+)?%?|\.\d+))?\)$/;

    t.regex(color, regex);
  }
});

test('should return an object with valid linear sRGB color values', (t) => {
  const color = randomLinearSRGBColor(0, 1, 0, 1, 0, 1, 0, 1, true);

  t.true(typeof color === 'object');
  t.true('red' in color);
  t.true('green' in color);
  t.true('blue' in color);
  t.true('alpha' in color);
  t.true(color.red >= 0 && color.red <= 1);
  t.true(color.green >= 0 && color.green <= 1);
  t.true(color.blue >= 0 && color.blue <= 1);
  t.true(color.alpha >= 0 && color.alpha <= 1);
});
