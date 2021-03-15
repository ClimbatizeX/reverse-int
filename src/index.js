module.exports = function reverse (n) {
  return String(Math.abs(n)).toLowerCase().split('').reverse().join('');
}
