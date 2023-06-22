# random-linear-srgb-color

Generate a random linear sRGB color.

## Installation

```bash
npm install --save random-linear-srgb-color
```

## Usage

The ```randomLinearSRGBColor``` function can be used to generate a random linear sRGB color. By default, it returns the color as a string in the ```color(linear-srgb R G B / A%)``` format. However, you can also opt to get an object representation of the color by setting the ```useObjectExport``` parameter to ```true```.

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

In the object representation, the returned object contains the following properties:

- **red**: The value of the red channel (range: 0 to 1 or 0 to 255).
- **green**: The value of the green channel (range: 0 to 1 or 0 to 255).
- **blue**: The value of the blue channel (range: 0 to 1 or 0 to 255).
- **alpha**: The value of the alpha channel (range: 0 to 1 or 0 to 100).

By adjusting the input parameters and using the useObjectExport parameter, you can control the range of each channel and obtain the color as an object with the respective channel values.

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
