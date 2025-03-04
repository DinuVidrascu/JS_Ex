function bubbleSort(arr) {
   let n = arr.length;
   for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - 1 - i; j++) {
         if (arr[j] > arr[j + 1]) {
            [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
         }
      }
   }
   return arr;
}


// Test
console.log(bubbleSort([5, 2, 9, 1, 5, 6])); // Output: [1, 2, 5, 5, 6, 9]

