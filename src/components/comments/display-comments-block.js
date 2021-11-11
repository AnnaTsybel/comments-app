import fsf from '../../api/comments.js';
//navigation
import displayComments from '../comments/display-comments.js';
//navigation
import displayPagination from '../pagination/display-pagination.js';

export default function displayCommentsBlock(datas, paginations, commentss) {
    let comments = document.querySelector('.comments');

    comments.innerHTML = ''
    let commentsWrapper = document.createElement('div');
    commentsWrapper.classList.add('comments__wrapper');
    commentsWrapper.append(commentss)


    let pagination = document.createElement('div');
    pagination.classList.add('pagination__wrapper');

    pagination.append(paginations)

    let commentsShowMore = document.createElement('button');
    commentsShowMore.classList.add('comments__show-more');
    commentsShowMore.innerText = 'Показать еще';

    commentsShowMore.addEventListener('click', function(el) {
        const a = datas.next_page_url;
        fsf(a).then(response => {
            commentsWrapper.append(displayComments(response.data));
            pagination.innerHTML = '';
            pagination.append(displayPagination(response.links));
            datas = response;
        });

    });
    return comments.append(commentsWrapper, commentsShowMore, pagination);
}