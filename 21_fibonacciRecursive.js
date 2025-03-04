function fibonacciRecursive(n) {
   if (n <= 1) {
       return n; // Cazul de bază: F(0) = 0 și F(1) = 1
   }
   return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2); // Recursivitate
}

console.log(fibonacciRecursive(10)); // 55


function fibonacciIterative(n) {
   let a = 0, b = 1;

   for (let i = 2; i <= n; i++) {
       let temp = a + b;
       a = b;
       b = temp;
   }

   return n === 0 ? a : b; // Dacă n este 0, returnăm a (care este 0), altfel b (care este F(n))
}

console.log(fibonacciIterative(10)); // 55
