function polindrome(str){
   let revers = str.split('').reverse().join('')
   return str === revers
}

console.log(polindrome('hello'))
console.log(polindrome('ollo'))