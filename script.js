document.getElementById('search-icon').addEventListener('click', function() {
    var searchInput = document.getElementById('search');
    searchInput.focus(); // This will trigger the expand effect on focus
});

function showLoaderAndRedirect(url) {
    // Open loader page in a new tab
    window.open('loading.html', '_blank'); // Adjust the path if necessary

    // Redirect to the target page
    setTimeout(function () {
        window.location.href = "movies.html";
    }, 1000); // Delay to ensure the loader is visible
}
