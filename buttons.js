// buttons.js

// 1. THE DATA DICTIONARY (Add your photos here)
const projectImages = {
    'caeli': [
        'assets/caeli_main.png',
        'assets/caeli_sales.png',
        'assets/caeli_salesD.png',
        'assets/caeli_Stockes.png',
        'assets/caeli_StocksD.png',
    ],
    'quran': [
        'assets/quran_app.png',
        // Add more photos if you have them, e.g., 'assets/quran_2.png'
    ],
    'edc': [
        'assets/image_2026-01-20_14-29-05 (2).png',
        'assets/image_2026-01-20_14-29-05 (3).png',
        'assets/image_2026-01-20_14-29-05 (4).png',
        'assets/image_2026-01-20_14-29-05 (5).png',
    ],
};

// Global variables to track state
let currentProjectKey = '';
let currentImageIndex = 0;

// Function to open the gallery
function openGallery(projectKey) {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");

    // Check if the key exists (Safety check)
    if (!projectImages[projectKey]) {
        console.error("Project key not found:", projectKey);
        return;
    }

    // Set state
    currentProjectKey = projectKey;
    currentImageIndex = 0;

    // Load the first image
    modalImg.src = projectImages[projectKey][0];

    // Show the modal
    modal.classList.remove("hidden");
    modal.classList.add("flex");
}

// Function for "Next" button
function nextImage(event) {
    event.stopPropagation(); // Don't close the modal when clicking the arrow
    
    const images = projectImages[currentProjectKey];
    currentImageIndex++; // Increment index

    // Loop back to start if we go past the end
    if (currentImageIndex >= images.length) {
        currentImageIndex = 0;
    }

    // Update image
    document.getElementById("modalImage").src = images[currentImageIndex];
}

// Function for "Previous" button
function prevImage(event) {
    event.stopPropagation();

    const images = projectImages[currentProjectKey];
    currentImageIndex--; // Decrement index

    // Loop to end if we go below zero
    if (currentImageIndex < 0) {
        currentImageIndex = images.length - 1;
    }

    // Update image
    document.getElementById("modalImage").src = images[currentImageIndex];
}

function closeModal() {
    const modal = document.getElementById("imageModal");
    modal.classList.add("hidden");
    modal.classList.remove("flex");
}

// Keyboard navigation (Left/Right arrows)
document.addEventListener('keydown', function(event) {
    if (event.key === "Escape") closeModal();
    if (event.key === "ArrowRight") nextImage(event);
    if (event.key === "ArrowLeft") prevImage(event);
});