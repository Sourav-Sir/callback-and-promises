function fetchMultipleData(urls) {
    const fetchPromises = urls.map(url => fetch(url).then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status} for URL: ${url}`);
        }
        return response.json(); // Parse each response as JSON
    }));

    return Promise.all(fetchPromises);
}

// Example usage:
const urls = [
    'https://jsonplaceholder.typicode.com/todos/1',
    'https://jsonplaceholder.typicode.com/todos/2',
    'https://jsonplaceholder.typicode.com/todos/3'
];

fetchMultipleData(urls)
    .then(responses => {
        console.log(responses);
        /*
        Output:
        [
            { ...data from first URL... },
            { ...data from second URL... },
            { ...data from third URL... }
        ]
        */
    })
    .catch(error => {
        console.error("Fetch error:", error);
    });
