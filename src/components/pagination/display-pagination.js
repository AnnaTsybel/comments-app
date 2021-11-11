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

        //create button for element of pagination
        let paginationElementButton = document.createElement('button');
        paginationElementButton.innerHTML = el.label;

        //set data-url to know page numbering 
        paginationElementButton.setAttribute('data-url', el.url);

        //check if button has not url, make it disabled
        if (paginationElementButton.getAttribute('data-url') === 'null') {
            paginationElementButton.setAttribute('disabled', true);
        }

        //append button into element
        paginationElement.append(paginationElementButton);

        //set event listener on click to add pages of comments navigation
        paginationElementButton.addEventListener('click', function(el) {

            //get current url of paagination element
            const urlOfPaginationElem = el.target.getAttribute('data-url');

            //display comments block anew
            api(urlOfPaginationElem).then(response => {
                window.scrollTo(0, 0);
                displayCommentsBlock(response, displayPagination(response.links), displayComments(response.data))
            });

        })

        //if element of pagination has active state add corresponding class
        if (el.active) {
            paginationElementButton.classList.add('active')
        }
        //append element into pagination 
        pagination.append(paginationElement)
    })

    return pagination;
}