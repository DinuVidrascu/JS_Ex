function findMissingNumber(arr) {
   let n = arr.length + 1
   let exNumber = (n * (n + 1) / 2)
   let lastSum = 0
   for (let i = 0; i < arr.length;i++){
      lastSum += arr[i]
   }
   return exNumber - lastSum
}

console.log(findMissingNumber([2,3,4]))