let cartCount = 0;

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', (event) => {
        const cakeSection = event.target.parentElement;
        const cakeName = cakeSection.getAttribute('data-name');
        const cakePrice = cakeSection.getAttribute('data-price');

        alert(`${cakeName} added to cart for $${cakePrice}`);
        cartCount++;
        document.getElementById('cart-count').textContent = cartCount;
    });
});
