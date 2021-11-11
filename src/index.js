//api
import api from './api/comments.js';

//navigation
import notifications from './components/notifications/notifications.js';

//navigation
import displayComments from './components/comments/display-comments.js';
//navigation
import displayPagination from './components/pagination/display-pagination.js';
//navigation
import displayCommentsBlock from './components/comments/display-comments-block.js';

//navigation
import commentsAdd from './components/comments-add/comments-add.js';

//themes
import themes from './components/theme/theme.js';
//scss
import "./main.scss";

themes();


commentsAdd();

api('https://jordan.ashton.fashion/api/goods/30/comments').then(response => {
    displayCommentsBlock(response, displayPagination(response.links), displayComments(response.data))
});