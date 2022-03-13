function circleArea(radius) {
  const area = Math.PI * radius ** 2;
  console.log(`Yarıçapı ${radius} olan dairenin alanı: ${area}`);
}
function circleCircumference(radius) {
  const circumference = 2 * Math.PI * radius;
  console.log(`Yarıçapı ${radius} olan dairenin çevresi: ${circumference}`);
}

module.exports = { circleArea, circleCircumference };
