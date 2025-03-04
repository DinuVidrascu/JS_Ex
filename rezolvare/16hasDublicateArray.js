

function findDuplicate(arr) {
    let seen = {}
    let duplicate = []
    for (let i = 0; i < arr.length; i++) {
        if (seen[arr[i]] !== undefined) {
            duplicate.push([arr[i]])
        } else {
            seen[arr[i]] = true
        }
    }
    return duplicate
}

console.log(findDuplicate([1, 2, 3, 4, 5, 2, 3, 6, 6])); // [2, 3,6]