function printTringle(n) {
   for (let i = 0; i <= n; i++) {
      let rows = ''
      for (let j = 0; j < i; j++) {
         rows += '*'
      }
      console.log(rows)

   }
}

printTringle(5)
