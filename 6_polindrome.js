function poplindrome(str){
   let rvers = str.split('').reverse().join('')
   return str === rvers
}

console.log(poplindrome('RAR'))
console.log(poplindrome('ciao'))