async function fetchData(url) {
    try {
        const response = await fetch(url); // Fetch data from the given URL
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json(); // Parse the response as JSON
        return data; // Return the parsed JSON data
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error; // Re-throw the error for further handling if needed
    }
}

// Example usage:
fetchData('https://jsonplaceholder.typicode.com/todos/1')
    .then((data) => {
        console.log(data); // Output: Parsed JSON data from the API
    })
    .catch((error) => {
        console.error("Fetch error:", error);
    });
