function printTringle(n) {
   for (let i = 1; i <= n; i++) {
      let row = ''
      for (let j = 0; j < i; j++) {
         row += '*'
      }
      console.log(row)
   }
}

printTringle(5)


