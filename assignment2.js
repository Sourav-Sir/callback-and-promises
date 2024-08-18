function getData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data fetched successfully.");
        }, 2000);
    });
}

// Example usage:
getData().then((message) => {
    console.log(message); // Data fetched successfully.
});
