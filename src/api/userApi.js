const getUser = (format) => {
    return fetch(`https://randomuser.me/api?dataType=${format}`)
        .then(response => response.json())
        .then(response => response.results[0]);
}

export const userApi = { getUser };