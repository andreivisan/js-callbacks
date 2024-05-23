function fetchData(url, callback, data) {
    setTimeout(() => {
        console.log('fetching data from url ', url)
        callback(data);
    }, 3000)
}

const data = {
    size: "2Mb",
    type: "mov"
}

function handleData(data) {
    console.log("fetched data ", data)
}

fetchData('http://server.com', handleData, data);