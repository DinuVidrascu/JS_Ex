function findMax(arr) {
   let min = arr[0];
   let max = arr[0]
   for (let i = 1; i < arr.length; i++) {
      if (arr[i] > max) max = arr[i]
      if (arr[i] < min) min = arr[i]
   }
   return {max,min}
}

console.log(findMax([2, 4, 5, 1, 6]))
