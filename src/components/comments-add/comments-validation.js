export default function commentsValidation(data) {
    //object with info of notification
    const notification = {
        text: '',
        status: ''
    };

    //check validation for name and text 
    if (data.name.length < 6 && data.text.length < 6) {
        notification.status = false;
        notification.text = 'enter name in valid form';
    } else if (data.name.length > 6 && data.text.length < 6) {
        notification.status = false;
        notification.text = 'enter text in valid form';
    } else if (data.name.length < 6 && data.text.length < 6) {
        notification.status = false;
        notification.text = 'enter name and text in valid form';
    } else {
        notification.status = true;
        notification.text = 'comment posted';
    }
    return notification;
}