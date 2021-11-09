export default function changeTheme() {

    let themes = document.getElementsByName('themes');

    themes.forEach(element => {
        element.addEventListener('click', () => {
            if (element.getAttribute('value') === 'dark') {
                document.body.classList.add('dark');
                localStorage.setItem('darktheme', 'enabled');
            } else {

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