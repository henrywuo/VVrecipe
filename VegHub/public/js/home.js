$(document).ready(() => {

    $('.unfavorite-btn').hide();

});

function isEmpty() {
    return !($('.post-comment').val().length) ? false : true;
}