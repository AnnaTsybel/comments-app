//import function  api
import api from '../../api/comments.js';

//import function of displaying comments
import displayComments from '../comments/display-comments.js';

//import function of displaying pagination
import displayPagination from '../pagination/display-pagination.js';

export default function displayCommentsBlock(data, paginationContent, commentsContent) {
    //get comments block
    let comments = document.querySelector('.comments');
    //clear content
    comments.innerHTML = '';

    //create comments wrapper 
    let commentsWrapper = document.createElement('div');
    commentsWrapper.classList.add('comments__wrapper');

    //append content into comments wrapper
    commentsWrapper.append(commentsContent);

    //create pagination wrapper
    let paginationWrapper = document.createElement('div');
    paginationWrapper.classList.add('pagination__wrapper');
    //append content into paginaton wrapper
    paginationWrapper.append(paginationContent);


    //create button of show more
    let commentsShowMore = document.createElement('button');
    commentsShowMore.classList.add('comments__show-more');
    commentsShowMore.innerText = 'Show more...';

    //check if current page is the last , don't show the button show more
    if (data.next_page_url === null) {
        commentsShowMore.style.display = 'none'
    } else {
        commentsShowMore.style.display = 'block'
    }

    //add event listener on click the button will be shown more comments
    commentsShowMore.addEventListener('click', function(el) {
        //get url of next page
        const dataOfNextPage = data.next_page_url;

        api(dataOfNextPage).then(response => {
            //check if it is no comments to display,hide button of show more
            if (response.next_page_url === null) {
                el.target.style.display = 'none'
            } else {
                el.target.style.display = 'block'
            }
            //clear previous pagination wrapper
            paginationWrapper.innerHTML = '';

            //append displaying pagination of the next page into wrapper
            paginationWrapper.append(displayPagination(response.links));

            //append comments of the next page into wrapper
            commentsWrapper.append(displayComments(response.data));

            //reasign previous url of comments page
            data = response;
        });

    });

    return comments.append(commentsWrapper, commentsShowMore, paginationWrapper);
}