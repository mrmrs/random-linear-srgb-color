# random-linear-srgb-color

Generate a random linear sRGB color.

## Installation

```bash
npm install --save random-linear-srgb-color
```

## Usage

```javascript
var randomLinearSRGBColor = require('random-linear-srgb-color');

// Generate random linear sRGB color as a string
console.log(randomLinearSRGBColor()); // color(linear-srgb 0.74 0.21 0.45)
console.log(randomLinearSRGBColor(0, 1, 0, 1, 0, 1, 0, 1)); // color(linear-srgb 0.10 0.88 0.42 / 0.62)

// Generate random linear sRGB color as an object
console.log(randomLinearSRGBColor(0, 1, 0, 1, 0, 1, 0, 1, true));
// { red: 0.85, green: 0.37, blue: 0.63, alpha: 0.92 }
```

or

```javascript
import randomLinearSRGBColor from 'random-linear-srgb-color';

// Generate random linear sRGB color as a string
console.log(randomLinearSRGBColor()); // color(linear-srgb 0.74 0.21 0.45)
console.log(randomLinearSRGBColor(0, 1, 0, 1, 0, 1, 0, 1)); // color(linear-srgb 0.10 0.88 0.42 / 0.62)

// Generate random linear sRGB color as an object
console.log(randomLinearSRGBColor(0, 1, 0, 1, 0, 1, 0, 1, true));
// { red: 0.85, green: 0.37, blue: 0.63, alpha: 0.92 }
```

## Acknowledgements

Inspired by [random-hex-color by John Otander](http://github.com/johno/random-hex-color) which is repackaged from a [post by Paul Irish](http://www.paulirish.com/2009/random-hex-color-code-snippets/).

## License

MIT

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

Crafted for generative doings by Adam Morse ([@mrmrs_](https://twitter.com/mrmrs_)).

***
