function sumRecursive(n) {
   if (n === 1) return 1
   return n + sumRecursive(n - 1)
}

console.log(sumRecursive(5))