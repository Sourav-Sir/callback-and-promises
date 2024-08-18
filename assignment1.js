function sumAsync(num1, num2, callback) {
    setTimeout(() => {
        const sum = num1 + num2;
        callback(sum);
    }, 1000);
}

// Example usage:
sumAsync(5, 10, (result) => {
    console.log('The sum is:', result); // The sum is: 15
});