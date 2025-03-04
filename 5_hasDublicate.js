function hasDuplicate(arr) {
   // Funcție care verifică dacă un array arr conține duplicate
   for (let i = 0; i < arr.length; i++) {
     // Iterăm prin array
     for (let j = i + 1; j < arr.length; j++) {
       // Iterăm prin restul array-ului, începând de la i+1
       if (arr[i] === arr[j]) {
         // Dacă găsim două elemente egale
         return true; // Returnăm true
       }
     }
   }
   return false; // Dacă nu găsim duplicate, returnăm false
 }
 
 const array1 = [1, 2, 3, 4, 5];
 const array2 = [1, 2, 3, 4, 1];
 
 console.log(hasDuplicate(array1)); // Output: false
 console.log(hasDuplicate(array2)); // Output: true

