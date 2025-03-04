function hasDuplicate(arr) {
   for (let i = 1; i < arr.length; i++) {
      for (let j = 1 + i; j < arr.length; j++) {
         if (arr[i] === arr[j]) {
            return true
         }
      }
   }
   return false
}

console.log(hasDuplicate([1, 2, 3, 3, 4, 5]))
console.log(hasDuplicate([1, 2, , 3, 4, 5]))