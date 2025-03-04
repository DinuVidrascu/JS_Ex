function findMissingNumber(arr) {
   let n = arr.length + 1; // Numărul total de elemente (inclusiv cel lipsă)
   let expectedSum = (n * (n + 1)) / 2; // Suma totală corectă (formula lui Gauss)
   let actualSum = arr.reduce((sum, num) => sum + num, 0); // Suma actuală

   return expectedSum - actualSum;
}

// Test
console.log(findMissingNumber([1, 2, 3, 5])); // 4
console.log(findMissingNumber([1, 3, 4, 5, 6])); // 2


function findMissN(arr) {
   let n = arr.length + 1;
   let expectedSum = (n * (n + 1) / 2)
   let actualSum = 0
   for(let i = 0;i <arr.length;i++){
      actualSum += arr[i]
   }
   return expectedSum - actualSum
}

console.log(findMissN([1, 2, 3, 5])); // 4
console.log(findMissN([1, 3, 4, 5, 6])); // 2