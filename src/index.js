//import api
import api from './api/comments.js';

// import function to display comments
import displayComments from './components/comments/display-comments.js';

// import function to display pagination
import displayPagination from './components/pagination/display-pagination.js';

// import function to display wrapper of comments components
import displayCommentsBlock from './components/comments/display-comments-block.js';

//import function with actions with comments add form
import commentsAdd from './components/comments-add/comments-add.js';

//import function to switch themes 
import themes from './components/theme/theme.js';

//import scss
import "./main.scss";

themes();

commentsAdd();

//display first page of comments 
api('https://jordan.ashton.fashion/api/goods/30/comments').then(response => {
    displayCommentsBlock(response, displayPagination(response.links), displayComments(response.data))
});