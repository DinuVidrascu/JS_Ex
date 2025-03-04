
console.log(sumTwoNumber([1, 2, 3, 4, 5], 9)); // [3, 4]

function sumTwoNum(arr, target) {
   let map = new Map()

   for (let i = 0; i < arr.length; i++) {
      let complet = target - arr[i]
      if (map.has(complet)) {
         return [map.get(complet), i]
      }
      map.set(arr[i], i)
   }
   return null
}

console.log(sumTwoNum([1, 2, 3, 4, 5], 9)); // [3, 4]
