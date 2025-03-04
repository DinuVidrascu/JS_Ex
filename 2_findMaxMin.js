
function findMaxMin(arr) {
   let min = arr[0];
   let max = arr[0];
   for (let i = 1; i < arr.length; i++) {
      if (arr[i] < min) min = arr[i]
      if (arr[i] > max) max = arr[i]
   }
   return `Max = ${max} & Min = ${min}`
}
// Test
console.log(findMaxMin([3, 7, 2, 9, 5])); // Output: 9

function findMax(arr) {
   let max = arr[0]
   for (let i = 1; i < arr.length; i++) {
      if (arr[i] > max) {
         max = arr[i]
      }
   }
   return max
}

console.log(findMax([3, 7, 2, 9, 5])); // Output: 9



function findMaxMin(arr) {
   return { 
      max: Math.max(...arr), 
      min: Math.min(...arr) 
   };
}

console.log(findMaxMin([2, 2, 4, 5, 21, 5])); // { max: 21, min: 2 }
