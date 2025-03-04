function bubbleSort(arr) {
   let n = arr.length;
   for (let i = 0; i < n - 1; i++) {  // Parcurgem array-ul
       for (let j = 0; j < n - 1 - i; j++) {  // Comparăm elementele adiacente
           if (arr[j] > arr[j + 1]) {  // Dacă sunt în ordine greșită, le schimbăm
               [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];  // Swap
           }
       }
   }
   return arr;  // Returnăm array-ul sortat
}

// Test
console.log(bubbleSort([5, 2, 9, 1, 5, 6])); // Output: [1, 2, 5, 5, 6, 9]

