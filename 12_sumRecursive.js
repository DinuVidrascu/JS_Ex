
function sumRecursive(n) {
   if (n === 1) return 1; // Caz de bază
   return n + sumRecursive(n - 1); // Apel recursiv
}

// Test
console.log(sumRecursive(5)); // Output: 15 (1+2+3+4+5)
