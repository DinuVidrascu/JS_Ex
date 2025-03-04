function reverseNumber(num){
   const reverse = num.toString().split('').reverse().join('')
   return parseInt(reverse)
}

console.log(reverseNumber(256))