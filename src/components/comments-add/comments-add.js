//import notification of added comment
import notification from '../notifications/notifications.js';

//import for validate function
import validate from '../comments-add/comments-validation.js';

//import api function
import api from '../../api/comments.js';

//import  display comments function
import displayComments from '../comments/display-comments.js';
//import  display wrapper of comments function

import displayCommentsBlock from '../comments/display-comments-block.js';

//import  display wrapper of comments function
import displayPagination from '../pagination/display-pagination.js';

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

    function postData(el) {
        //prevent default behaviour of submitting 
        el.preventDefault();

        //get data from form
        const formData = {
            name: input.value,
            text: textarea.value,
        };

        //check validation, if it is not valid,show notification message
        if (validate(formData).status === false) {
            notification(validate(formData));
        } else {
            //function to post data to server
            fetch('https://jordan.ashton.fashion/api/goods/30/comments', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify(formData)
            }).then(result => {
                //return result
                return result.text();
            }).then(() => {
                //clear inputs
                clearInputs();
            }).then(() => {
                notification(validate(formData));

                //get the current page url
                const pagination = document.querySelector('.pagination');
                let paginationActive = pagination.querySelector('.active');

                //display the page anew
                api(paginationActive.getAttribute('data-url')).then(response => {
                    displayCommentsBlock(response, displayPagination(response.links), displayComments(response.data))
                });
            }).catch(error => {
                //if it is error,show it in console
                console.error(error);
            })

        }
    }

    //add event listener to form  to post data
    commentsAddForm.addEventListener('submit', function(el) { postData(el) });

    //add event listener to input if enter pressed  to post data
    input.addEventListener("keyup", function(event) {
        event.preventDefault();
        if (event.keyCode === 13) {
            commentsAddForm.addEventListener('submit', function(el) { postData(el) });
        }
    });

}