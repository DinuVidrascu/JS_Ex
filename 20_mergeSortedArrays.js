function mergeSortedArrays(arr1, arr2) {
   let result = [];
   let i = 0, j = 0;

   // Iterăm prin ambele array-uri până când unul dintre ele este gol
   while (i < arr1.length && j < arr2.length) {
       if (arr1[i] < arr2[j]) {
           result.push(arr1[i]);
           i++;
       } else {
           result.push(arr2[j]);
           j++;
       }
   }

   // Adăugăm elementele rămase din arr1
   while (i < arr1.length) {
       result.push(arr1[i]);
       i++;
   }

   // Adăugăm elementele rămase din arr2
   while (j < arr2.length) {
       result.push(arr2[j]);
       j++;
   }

   return result;
}

console.log(mergeSortedArrays([1, 4, 7], [2, 3, 5, 6])); // [1, 2, 3, 4, 5, 6, 7]
