async function fetchData() {
    const url = 'https://jsonplaceholder.typicode.com/todos/1';
    try {
        const response = await fetch(url); // Fetch data from the URL
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
fetchData()
    .then((data) => {
        console.log(data); // Output: Parsed JSON data from the API
    })
    .catch((error) => {
        console.error("Fetch error:", error);
    });
