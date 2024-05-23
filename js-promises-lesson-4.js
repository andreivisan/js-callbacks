function fetchData(url) {
    return new MyPromise((resolve, reject) => {
        setTimeout(() => {
            console.log('fetching data from url ', url);
    
            // Simulate an error condition
            const error = Math.random() > 0.5 ? new Error("Failed to fetch data") : null;
            const data = error ? null : {
                size: "2Mb",
                type: "mov"
            };
    
            if (error) reject(error);
            if (data) resolve(data);
        }, 3000);
    });
}

fetchData('http://server.com')
    .then(data => {
        console.log("fetched data ", data);
    })
    .catch(error => {
        console.log("error ", error.message);
    })