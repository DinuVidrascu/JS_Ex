function sumMax(arr) {
   let max = arr[0]
   for (let i = 1; i < arr.length; i++) {
      if (arr[i] > max) max = arr[i]
   }
   return max
}

console.log(sumMax([1, 5, 1, 3, 6]))