const button = document.getElementById('share-btn');


function showShareOptions () {
    const options = document.querySelector('#share-links')
    options.classList.toggle('share-links')
    options.classList.toggle('active')
}

button.addEventListener('click', showShareOptions);