//imports 

//import api function
import api from '../../api/comments.js';
//display comments function
import displayComments from '../comments/display-comments.js';
//display wrapper of comments function
import displayCommentsBlock from '../comments/display-comments-block.js';

export default function displayPagination(data) {
    //create list of future pagination
    let pagination = document.createElement('ul');
    pagination.classList.add('pagination');

    //go over recieved data to create all pagination's elements
    data.forEach(el => {

        //create element of pagination
        let paginationElement = document.createElement('li');
        paginationElement.innerHTML = el.label;

        //set data-url to know page numbering 
        paginationElement.setAttribute('data-url', el.url)

        //set event listener on click to add pages of comments navigation
        paginationElement.addEventListener('click', function(el) {
            //get current url of paagination element
            const urlOfPaginationElem = el.target.getAttribute('data-url');

            //display comments block anew
            api(urlOfPaginationElem).then(response => {
                displayCommentsBlock(response, displayPagination(response.links), displayComments(response.data))
            });

        })

        //if element of pagination has active state add corresponding class
        if (el.active) {
            paginationElement.classList.add('active')
        }
        //append element into pagination 
        pagination.append(paginationElement)
    })

    return pagination;
}