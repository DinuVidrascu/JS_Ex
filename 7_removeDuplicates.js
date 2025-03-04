function removeDuplicates(arr) {
   return arr.filter((item, index) => arr.indexOf(item) === index);
}

// Test
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // [1, 2, 3, 4, 5]
console.log(removeDuplicates(["a", "b", "a", "c"])); // ["a", "b", "c"]


///////////////////////////////////////
function removeDuplicates(arr) {
   // Funcție care elimină duplicatele dintr-un array arr
   const uniqueArr = []; // Inițializăm un array gol pentru elementele unice
   for (let i = 0; i < arr.length; i++) {
     // Iterăm prin array
     if (uniqueArr.indexOf(arr[i]) === -1) {
       // Dacă elementul curent nu există în array-ul cu elemente unice
       uniqueArr.push(arr[i]); // Adăugăm elementul la array-ul cu elemente unice
     }
   }
   return uniqueArr; // Returnăm array-ul cu elemente unice
 }
 
 const duplicateArray = [1, 2, 2, 3, 4, 4, 5];
 console.log(removeDuplicates(duplicateArray)); // Output: [1, 2, 3, 4, 5]