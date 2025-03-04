function reverseNumber(num) {
   let reversed = parseInt(num.toString().split('').reverse().join(''));
   return num < 0 ? -reversed : reversed;
}

// Test
console.log(reverseNumber(1234));   // 4321
console.log(reverseNumber(-567));   // -765
console.log(reverseNumber(100));    // 1
