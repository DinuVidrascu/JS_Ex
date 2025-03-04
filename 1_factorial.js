function factorial(n) {
   // Funcție care calculează factorialul unui număr n
   if (n === 0) {
     // Dacă n este 0, factorialul este 1
     return 1;
   } else {
     // Altfel, calculăm factorialul iterativ
     let result = 1; // Inițializăm rezultatul cu 1
     for (let i = 1; i <= n; i++) {
       // Iterăm de la 1 la n
       result *= i; // Multiplicăm rezultatul cu i
     }
     return result; // Returnăm rezultatul final
   }
 }
 
 console.log(factorial(5)); // Afișăm factorialul lui 5 (120)