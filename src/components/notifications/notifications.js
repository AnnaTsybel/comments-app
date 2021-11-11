export default function apiComments(data) {

    //create variable for current notification
    let currentNotification;

    //initialize variable for current notification 
    if (data.status) {
        currentNotification = document.querySelector('.notification-success')
    } else {
        currentNotification = document.querySelector('.notification-failed')
    }
    //add content text to current notification
    currentNotification.innerText = data.text;

    //make it visible
    currentNotification.style.display = "block";

    //after 2 seconds make it invisible
    setTimeout(function() {
        currentNotification.style.display = "none";
    }, 2000);


}