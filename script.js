// Image Slider for Front/Back photos
document.querySelectorAll('.slider-container').forEach(container => {
    const images = JSON.parse(container.getAttribute('data-images'));
    let currentIndex = 0;
    const imgElement = container.querySelector('.slider-image');
    const prevBtn = container.querySelector('.slider-prev');
    const nextBtn = container.querySelector('.slider-next');
    
    function updateImage() {
        imgElement.src = images[currentIndex];
    }
    
    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateImage();
    });
    
    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % images.length;
        updateImage();
    });
    
    // Swipe for mobile
    let touchStartX = 0;
    container.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    });
    
    container.addEventListener('touchend', (e) => {
        let touchEndX = e.changedTouches[0].screenX;
        if (touchEndX < touchStartX - 50) {
            currentIndex = (currentIndex + 1) % images.length;
            updateImage();
        }
        if (touchEndX > touchStartX + 50) {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            updateImage();
        }
    });
});

// WhatsApp orders
document.querySelectorAll('.add-to-cart').forEach(btn => {
    btn.addEventListener('click', () => {
        const productDiv = btn.closest('.product');
        const productName = productDiv.querySelector('h3').innerText;
        const productPrice = productDiv.querySelector('p').innerText;
        const message = `Hi STND, I want to buy ${productName} (${productPrice}). Please send payment and shipping details.`;
        window.open(`https://wa.me/27663463222?text=${encodeURIComponent(message)}`, '_blank');
    });
});
