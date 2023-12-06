// script.js

document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('navbar');

    // Navigation Links
    const navigationLinks = [
        { text: 'Games', url: 'Games.html' },
        { text: 'Articles', url: 'Articles.html' },
        { text: 'News', url: 'News.html' },
        { text: 'Reviews', url: 'Review.html' },
    ];

    navigationLinks.forEach(link => {
        const navigationItems = document.createElement('li');
        const anchorTag = document.createElement('a');

        anchorTag.textContent = link.text;
        anchorTag.href = link.url;

        navigationItems.appendChild(anchorTag);
        navbar.appendChild(navigationItems);
    });

    // Create and append search bar
    const searchBar = document.createElement('div');
    searchBar.className = 'search-bar';

    const searchInput = document.createElement('input');
    searchInput.type = 'text';
    searchInput.placeholder = 'Search';

    const searchButton = document.createElement('button');
    searchButton.type = 'button';
    searchButton.textContent = 'Go';

    searchBar.appendChild(searchInput);
    searchBar.appendChild(searchButton);

    navbar.appendChild(searchBar);

    
 
});
