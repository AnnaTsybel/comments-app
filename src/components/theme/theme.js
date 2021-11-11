export default function changeTheme() {
    //get themes button block
    let themes = document.getElementsByName('themes');

    //add event listener on click on each of themes button
    themes.forEach(element => {
        element.addEventListener('click', () => {
            //set dark theme
            if (element.getAttribute('value') === 'dark') {
                document.body.classList.add('dark');
                localStorage.setItem('darktheme', 'enabled');
            } else {
                //set light theme
                document.body.classList.remove('dark');
                localStorage.setItem('darktheme', 'null')
            }
        })
    })

    if (localStorage.getItem('darktheme') === 'enabled') {
        themes[1].setAttribute('checked', 'true');
        themes[0].removeAttribute('checked');
        document.body.classList.add('dark');
    } else {
        themes[0].setAttribute('checked', 'true');
        themes[1].removeAttribute('checked');
    }

}