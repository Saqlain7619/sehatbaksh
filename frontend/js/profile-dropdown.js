// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get the profile picture and dropdown elements
    const profilePic = document.getElementById('profilePic');
    const dropdownContent = document.getElementById('dropdownContent');

    // Load saved avatar if exists
    const savedAvatar = localStorage.getItem('profileAvatar');
    if (savedAvatar) {
        profilePic.src = savedAvatar;
    }

    // Toggle dropdown on profile picture click
    profilePic.onclick = function(event) {
        event.stopPropagation(); // Prevent this click from being caught by the document click listener
        dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
    };

    // Close dropdown when clicking anywhere else on the page
    document.onclick = function(event) {
        if (!dropdownContent.contains(event.target)) {
            dropdownContent.style.display = 'none';
        }
    };
});
