export default function apiComments() {
    //get notification block
    const notification = document.querySelector('.notification');
    //make it visible
    notification.style.display = "block";

    //after 2 seconds make it invisible
    setTimeout(function() {
        notification.style.display = "none";
    }, 2000);


}