function sumTwoNumbers(arr, target) {
   let map = new Map(); // Folosim un Map pentru a urmări numerele deja procesate

   for (let i = 0; i < arr.length; i++) {
       let complement = target - arr[i]; // Complementul căutat

       if (map.has(complement)) {
           return [map.get(complement), i]; // Dacă complementul există în map, am găsit cele două numere
       }

       map.set(arr[i], i); // Altfel, adăugăm elementul curent în map
   }

   return null; // Dacă nu am găsit o pereche
}

console.log(sumTwoNumbers([1, 2, 3, 4, 5], 9)); // [3, 4]
