export default function apiComments(link) {
    return fetch(link, {
            method: "GET",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        })
        .then((successResponse) => successResponse.json())
        .then(result => {
            return result;
        })
        .catch(function(error) {
            console.error('could not get');
            console.error(error)
        });


}