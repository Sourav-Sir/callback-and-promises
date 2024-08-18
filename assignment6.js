function fetchUserDataAndPosts(userId) {
    const userUrl = `https://jsonplaceholder.typicode.com/users/${userId}`;
    const postsUrl = `https://jsonplaceholder.typicode.com/posts?userId=${userId}`;

    return fetch(userUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json(); // Fetch user details
        })
        .then(userData => {
            return fetch(postsUrl)
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`HTTP error! status: ${response.status}`);
                    }
                    return response.json(); // Fetch user's posts
                })
                .then(postsData => {
                    return { user: userData, posts: postsData }; // Return an object with user details and posts
                });
        })
        .catch(error => {
            console.error("Error fetching data:", error);
            throw error; // Re-throw the error for further handling if needed
        });
}

// Example usage:
fetchUserDataAndPosts(1)
    .then(result => {
        console.log(result);
        /* 
        Output:
        {
            user: { ...user details... },
            posts: [ ...array of user's posts... ]
        }
        */
    })
    .catch(error => {
        console.error("Fetch error:", error);
    });
