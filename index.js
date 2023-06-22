'use strict';

module.exports = function randomLinearSRGBColor(minRed = 0, maxRed = 1, minGreen = 0, maxGreen = 1, minBlue = 0, maxBlue = 1, minAlpha = 0, maxAlpha = 1, useObjectExport = false) {
  const isPercentage = maxRed > 1 || maxGreen > 1 || maxBlue > 1 || maxAlpha > 1;

  const randomValue = (min, max) => {
    if (isPercentage) {
      return Math.floor((Math.random() * (max - min + 1) + min) * 100);
    } else {
      return Number((Math.random() * (max - min) + min).toFixed(2));
    }
  };

  const red = randomValue(minRed, maxRed);
  const green = randomValue(minGreen, maxGreen);
  const blue = randomValue(minBlue, maxBlue);
  const alpha = randomValue(minAlpha, maxAlpha);

  if (useObjectExport) {
    return { red, green, blue, alpha };
  }

  return `color(linear-srgb ${red} ${green} ${blue}${alpha ? ` / ${alpha}%` : ''})`;
};
