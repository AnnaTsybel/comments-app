import fsf from '../../api/comments.js';
//navigation
import displayComments from '../comments/display-comments.js';
//navigation
import displayCommentsBlock from '../comments/display-comments-block.js';

export default function displayPagination(data) {
    //create list of future pagination
    let pagination = document.createElement('ul');
    pagination.classList.add('pagination');

    //go over recieved data to create all pagination's elements
    data.forEach(el => {

        let paginationElementBlock = document.createElement('li');
        paginationElementBlock.setAttribute('data-url', el.url)

        paginationElementBlock.addEventListener('click', function(el) {
            const a = el.target.getAttribute('data-url');
            fsf(a).then(response => {
                displayCommentsBlock(response, displayPagination(response.links), displayComments(response.data))
            });
        })
        paginationElementBlock.innerText = el.label;
        if (el.active) {
            paginationElementBlock.classList.add('active')
        }

        pagination.append(paginationElementBlock)
    })


    return pagination;
}