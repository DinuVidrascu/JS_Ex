function findDuplicates(arr) {
   let seen = new Set(); // Set pentru a stoca valorile deja întâlnite
   let duplicates = [];

   for (let i = 0; i < arr.length; i++) {
       if (seen.has(arr[i])) {
           duplicates.push(arr[i]); // Dacă valoarea este deja în Set, o adăugăm la duplicates
       } else {
           seen.add(arr[i]); // Dacă nu e, o adăugăm în Set
       }
   }

   return duplicates;
}

console.log(findDuplicates([1, 2, 3, 4, 5, 2, 3, 6])); // [2, 3]



function findDuplicates(arr) {
    let seen = {}; // Obiect pentru a ține evidența numerelor întâlnite
    let duplicates = [];

    for (let i = 0; i < arr.length; i++) {
        if (seen[arr[i]] !== undefined) {
            duplicates.push(arr[i]); // Dacă valoarea este deja întâlnită, o adăugăm la duplicates
        } else {
            seen[arr[i]] = true; // Dacă nu e, o adăugăm în obiect
        }
    }

    return duplicates;
}

console.log(findDuplicates([1, 2, 3, 4, 5, 2, 3, 6])); // [2, 3]
