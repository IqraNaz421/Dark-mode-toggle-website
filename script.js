const toggleButton = document.getElementById('toggleButton');
const body = document.body;
const toggleIcon = document.getElementById('toggleIcon');

// Check for saved user preference on page load
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        body.classList.add(savedTheme);
        updateIcon(savedTheme);
    }
});

// Function to update the icon based on the current theme
function updateIcon(theme) {
    if (theme === 'dark-mode') {
        toggleIcon.classList.remove('sun-icon');
        toggleIcon.classList.add('moon-icon');
        toggleIcon.textContent = '🌙';
    } else {
        toggleIcon.classList.remove('moon-icon');
        toggleIcon.classList.add('sun-icon');
        toggleIcon.textContent = '☀️';
    }
}

// Toggle between light and dark modes
toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    let theme = 'light-mode';
    if (body.classList.contains('dark-mode')) {
        theme = 'dark-mode';
    }
    localStorage.setItem('theme', theme); // Save the preference
    updateIcon(theme);
});

