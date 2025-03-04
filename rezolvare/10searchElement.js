function searchElement(arr, target) {
   for(let i = 0; i<arr.length;i++){
      if(arr[i]=== target){
         return i
      }
   }
   return-1
}

console.log(searchElement([1, 3, 4, 2, 5, 3], 5))