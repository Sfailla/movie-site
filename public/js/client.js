window.onload = function() {

    function getUpdateForm() {
        console.log('hello');
        const updateForm = document.querySelector('.form-wrapper');
        if (updateForm.classList.contains('is-closed')){
            updateForm.classList.remove('is-closed');
        } else {
            updateForm.classList.add('is-closed');
        }
    }

    const updateMovieButton = document.querySelectorAll('.update');
    for (let i = 0; i < updateMovieButton.length; i++) {     
        updateMovieButton[i].addEventListener('click', getUpdateForm);
    }

}