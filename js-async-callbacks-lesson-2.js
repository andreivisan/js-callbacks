function fetchData(url, callback) {
    setTimeout(() => {
        console.log('fetching data from url ', url);

        // Simulate an error condition
        const error = Math.random() > 0.5 ? new Error("Failed to fetch data") : null;
        const data = error ? null : {
            size: "2Mb",
            type: "mov"
        };

        callback(error, data);
    }, 3000)
}

function handleData(error, data) {
    if (error) console.log("Error: ", error.message)
    if (data) console.log("fetched data ", data)
}

//fetchData('http://server.com', handleData);

// Call fetchData with a Lambda function
fetchData('http://server.com', (error, data) => {
    if (error) console.log("Error: ", error.message);
    if (data) console.log("fetched data ", data);
});