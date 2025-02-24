async function fetchData(url, method = "GET", data = null) {
    const options = {
        method,
        headers: {
            "Content-Type": "application/json",
        },
    };

    if (data) {
        options.body = JSON.stringify(data); 
    }

    const response = await fetch(url, options);
    
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return await response.json(); 
}

// Example usage: Making a POST request
fetchData("https://jsonplaceholder.typicode.com/posts", "POST", {
    title: "New Post",
    body: "This is the content of the post",
    userId: 1
})
    .then(data => console.log("POST Response:", data))
    .catch(error => console.error("Error:", error));
