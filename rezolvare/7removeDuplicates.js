function removeDuplicates(arr) {
   const uniq = []
   for (let i = 0; i< arr.length; i++){
      if(uniq.indexOf(arr[i])=== -1){
         uniq.push(arr[i])
      }
   }
   return uniq
}

console.log(removeDuplicates([1,2,3,4,5,2]))