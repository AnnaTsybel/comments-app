export default function apiComments() {
    console.log(fetch('https://jordan.ashton.fashion/api/goods/30/comments'));
    fetch('https://jordan.ashton.fashion/api/goods/30/comments')
        .then(res => res.json)
        .then(result => console.log(result))
        .catch(function(error) {
            console.error('can not get');
            console.error(error)
        });
}