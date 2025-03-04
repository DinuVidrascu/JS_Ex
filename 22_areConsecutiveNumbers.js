function suntConsecutive(arr) {
    // Sortăm array-ul pentru a ne asigura că numerele sunt într-o ordine crescătoare
    arr.sort((a, b) => a - b);

    // Verificăm dacă fiecare element este consecutiv față de cel anterior
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] !== arr[i - 1] + 1) {
            return false; // Dacă găsim o diferență care nu este 1, returnăm false
        }
    }
    return true; // Dacă toate elementele sunt consecutive, returnăm true
}

// Exemple de utilizare
console.log(suntConsecutive([1, 2, 3, 4, 5])); // true
console.log(suntConsecutive([3, 1, 1, 4, 2, 5])); // true
console.log(suntConsecutive([1, 2, 4, 5])); // false


function suntConsecutive(arr) {
    // Verificăm dacă există duplicate
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                return false; // Dacă găsim duplicate, returnăm false
            }
        }
    }

    // Găsim valoarea minimă și maximă
    let min = arr[0];
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) min = arr[i];
        if (arr[i] > max) max = arr[i];
    }

    // Verificăm dacă diferența dintre max și min este corectă pentru un șir consecutiv
    if (max - min !== arr.length - 1) return false;

    // Verificăm dacă elementele sunt consecutive
    let found = Array(max - min + 1).fill(false); // Creăm un array pentru a marca numerele găsite
    for (let i = 0; i < arr.length; i++) {
        found[arr[i] - min] = true;
    }

    // Dacă există un fals în array-ul found, înseamnă că nu sunt consecutive
    for (let i = 0; i < found.length; i++) {
        if (!found[i]) return false;
    }

    return true;
}

console.log(suntConsecutive([1, 2, 3, 4, 5])); // true
console.log(suntConsecutive([3, 1, 1, 4, 2, 5])); // true
console.log(suntConsecutive([1, 2, 4, 5])); // false
