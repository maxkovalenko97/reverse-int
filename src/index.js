module.exports = function reverse(n) {
    if (n > 0) return +(n.toString().split('').reverse().join(''));
    if (n < 0) return (Math.abs(n)).toString().split('').reverse().join('');
}
