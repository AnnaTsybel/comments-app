//navigation
import notifications from '../notifications/notifications.js';

export default function commentsAdd() {

    const b = document.getElementById('comments-add');
    const inputs = b.querySelectorAll('input');
    const textarea = b.querySelector('textarea');
    console.log(textarea)
    const clearInputs = () => {
        inputs.forEach(el => {
            console.log(el)
            el.value = '';
        })

        textarea.value = '';
    }
    b.addEventListener('submit', function(el) {
        el.preventDefault();
        console.log(b)
        const formData = new FormData(b);
        fetch('https://jordan.ashton.fashion/api/goods/30/comments', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: formData
        }).then(result => {
            return result.text();
        }).then(res => {
            console.log(res)
        }).catch(error => {
            console.error(error);
        }).finally(() => {
            clearInputs();
            notifications();
        })
    })
}