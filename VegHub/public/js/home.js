/* home.js handles the clientside js for the home page. It will hide the
unfavorite button */

$(document).ready(() => {

    $('.unfavorite-btn').hide();

});

function isEmpty() {
    return !($('.post-comment').val().length) ? false : true;
}