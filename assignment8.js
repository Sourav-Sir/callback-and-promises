function racePromises(promises) {
    return Promise.race(promises);
}

// Example usage:
const promise1 = new Promise((resolve) => setTimeout(() => resolve("First Promise Resolved"), 500));
const promise2 = new Promise((resolve) => setTimeout(() => resolve("Second Promise Resolved"), 1000));
const promise3 = new Promise((resolve, reject) => setTimeout(() => reject("Third Promise Rejected"), 300));

racePromises([promise1, promise2, promise3])
    .then(result => {
        console.log("Resolved with:", result);
    })
    .catch(error => {
        console.log("Rejected with:", error);
    });
