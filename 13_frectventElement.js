function frecventaElementelor(arr) {
   const frecventa = {};
   
   for (let i = 0; i < arr.length; i++) {
     if (frecventa[arr[i]]) {
       frecventa[arr[i]]++;
     } else {
       frecventa[arr[i]] = 1;
     }
   }
   
   return frecventa;
 }
 
 // Test
 const arr = [1, 2, 2, 3, 3, 3, 4];
 console.log(frecventaElementelor(arr)); // Output: { '1': 1, '2': 2, '3': 3, '4': 1 }
 