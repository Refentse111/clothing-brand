const buttons = document.querySelectorAll('.product button');

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        const productDiv = btn.closest('.product');
        const productName = productDiv.querySelector('h3').innerText;
        const productPrice = productDiv.querySelector('p').innerText;
        alert(`🛍️ ${productName} (${productPrice}) added to cart — demo mode`);
    });
});
