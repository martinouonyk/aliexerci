function keys(objects) {
    const keySet = new Set();

    objects.forEach(obj => {
        Object.keys(obj).forEach(key => {
            keySet.add(key);
        });
    });

    return Array.from(keySet);
}

// Example usage:
const objectsArray = [
    { a: 1, b: 2 },
    { b: 3, c: 4 },
    { d: 5 }
];

console.log(keys(objectsArray)); // Output: ['a', 'b', 'c', 'd']
