/* recipe.js handles the client-side js for the recipe page. It handles things
such as the handlebars template for when users want to search for a recipe.
It also handles the recipe search box directly in the recipe page itself through
an ajax request. */

$(document).ready(() => {
    // $(document).on('mouseenter', '#recipe-pic', () => {
    //     $('.recipe-button').show();
    // }).on('mouseleave', '#recipe-pic', () => {
    //     $('.recipe-button').hide();
    // });

    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams) {
        $('#recipe-search-box').val(urlParams.get('search'));
        setTimeout(function(){ $('#recipe-search-button').click()}, 100);

    }
    $('#recipe-search-button').click(() => {
        if ($('#recipe-search-box').val().length !== 0) {
            $('#query-list').empty();
            // const search = '/recipe/search/' + $('#recipe-search-box').val();
            const search = '/allRecipes';
            const string = $('#recipe-search-box').val();
            $.ajax({
                url: search,
                type: 'GET',
                dataType: 'json',
                success: (data) => {
                    for (var i = 0; i < data.length; i++) {
                        if (!(data[i].name.toLowerCase().includes(string.toLowerCase()))) {
                            $('.recipe' + i).hide();
                        } else {
                            $('.recipe' + i).show();
                        }
                    }
                }
            });
        }   
    });

    $('#recipe-search-box').keyup(() => {
        if ($('#recipe-search-box').val().length === 0) {
            const search = '/allRecipes';
            $.ajax({
                url: search,
                type: 'GET',
                dataType: 'json',
                success: (data) => {
                    for (var i = 0; i < data.length; i++) {
                        $('.recipe' + i).show();
                    }
                }
            });
        }
    });

    $('.unfavorite-btn').hide();
});

function show(i) {
    $('.show-single-recipe' + i).removeClass('recipe-hidden');
}

function hide(i) {
    $('.show-single-recipe' + i).addClass('recipe-hidden');
}

function showQuery(i) {
    $('.show-single-query' + i).removeClass('recipe-hidden');
}

function hideQuery(i) {
    $('.show-single-query' + i).addClass('recipe-hidden');
}
