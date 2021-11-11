//import notification of added comment
import notification from '../notifications/notifications.js';

export default function commentsAdd() {
    //get form of adding comments
    const commentsAddForm = document.getElementById('comments-add');

    //get elements that should be posted
    const input = commentsAddForm.querySelector('input');
    const textarea = commentsAddForm.querySelector('textarea');

    //function to clear inputs value 
    const clearInputs = () => {
        input.value = '';
        textarea.value = '';
    }

    //add event listener to post data
    commentsAddForm.addEventListener('submit', function(el) {
        //prevent default behaviour of submitting for
        el.preventDefault();

        const formData = new FormData(commentsAddForm);
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
            notification();
        })
    })
}