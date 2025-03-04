function sumMax(arr){
   let sum = arr[0]
   for(let i = 1; i < arr.length;i++){
      sum += arr[i]
   }
   return sum
}

console.log(sumMax([2,3,4]))