
function frecventElem(arr) {
   const freq = {}
   for (let i = 0; i < arr.length; i++) {
      if (freq[arr[i]]) {
         freq[arr[i]]++
      } else {
         freq[arr[i]] = 1
      }
   }
   return freq
}

console.log(frecventElem([1, 2, 2, 3, 3, 3, 4]))