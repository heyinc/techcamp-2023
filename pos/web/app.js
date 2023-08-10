fetch('/api/ping')
    .then(async (response) => {
        console.log(await response.json());
    })
    .catch((error) => {
        console.error(error);
    });
