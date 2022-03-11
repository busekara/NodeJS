const arguments = process.argv.slice(2);

function circleArea(radius) {
  const area = Math.PI * radius ** 2;
  console.log(`Yarıçapı ${radius} olan dairenin alanı: ${area}`);
}

circleArea(arguments[0] * 1);
