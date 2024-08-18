function multiplyWithCallback(numbers, callback) {
    const multipliedNumbers = numbers.map(number => number * 2);
    callback(multipliedNumbers);
}

// Example usage:
multiplyWithCallback([1, 2, 3, 4], (result) => {
    console.log(result); // Output: [2, 4, 6, 8]
});
