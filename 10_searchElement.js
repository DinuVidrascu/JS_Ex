function searchElement(arr, target) {
   for (let i = 0; i < arr.length; i++) {
      if (arr[i] === target) {
         return i
      }
   }
   return -1
}

// Test
console.log(searchElement([3, 5, 7, 9], 7)); // Output: 2
