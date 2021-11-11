export default function displayComments(data) {

    //create block to display comments in it
    const commentWrapper = document.createElement('div');
    commentWrapper.classList.add('comments__block');

    //function to convert date
    function convertDate(date) {

        //write day,month and year in variable in Date format
        const day = date.getDay();
        const month = date.getMonth();
        const year = date.getFullYear();

        if (day < 10 && month > 9) {
            return `0${day}.${month}.${year}`;
        } else if (day < 10 && month < 10) {
            return `0${day}.0${month}.${year}`;
        } else if (day > 9 && month < 10) {
            return `${day}.0${month}.${year}`;
        }
        return `${day}.${month}.${year}`;

    }
    //go over recieved data to display all comments
    data.forEach(el => {
        // a date of creation
        const dateOfCreation = new Date(el.created_at);

        //block with comment
        let comment = document.createElement('div');
        comment.classList.add('comment');

        //wrapper for top side of element
        let commentTopSide = document.createElement('div');
        commentTopSide.classList.add('comment__top-side');

        //author of comment
        let commentAuthor = document.createElement('p');
        commentAuthor.classList.add('comment__author');
        commentAuthor.innerText = el.name;

        //date of comment
        let commentDate = document.createElement('p');
        commentDate.classList.add('comment__date');
        commentDate.innerText = convertDate(dateOfCreation);

        //append author and adate into top side block
        commentTopSide.append(commentAuthor, commentDate);

        //create content of comment
        let commentContent = document.createElement('p');
        commentContent.classList.add('comment__content');
        commentContent.innerText = el.text;
        //append all elements into block of comment
        comment.append(commentTopSide, commentContent);

        //append  block of comment in wrapper 
        commentWrapper.append(comment)
    });

    return commentWrapper;


}