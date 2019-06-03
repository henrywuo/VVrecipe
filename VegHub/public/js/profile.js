/* profile.js handles the client-side js for the profile page. It handles
button clicks such as when a user wants to see all of their uploaded recipes
or their favorite recipes. */

$(document).ready(() => {
    $('#mine').click(() => {
        $('#mine').addClass('active');
        $('#favorites').removeClass('active');
        $('.profile-recipe').show();
        $('.profile-saved').hide();
    });

    $('#favorites').click(() => {
        $('#favorites').addClass('active');
        $('#mine').removeClass('active');
        $('.profile-saved').show();
        $('.profile-recipe').hide();
    });

    $('.favorite-btn').hide();
    $('.unfavorite-btn').show();
}); 