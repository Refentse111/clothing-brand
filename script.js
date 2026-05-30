const buttons = document.querySelectorAll('.product button');

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        const productDiv = btn.closest('.product');
        const productName = productDiv.querySelector('h3').innerText;
        const productPrice = productDiv.querySelector('p').innerText;
        const message = `Hi STND, I want to buy ${productName} (${productPrice}). Please send payment and shipping details.`;
        window.open(`https://wa.me/27663463222?text=${encodeURIComponent(message)}`, '_blank');
    });
});
