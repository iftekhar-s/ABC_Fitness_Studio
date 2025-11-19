// --------- SUBSCRIBE FEATURE ---------
const subscribeButtons = document.querySelectorAll("#subscribeBtn");
subscribeButtons.forEach(btn => {
    btn.addEventListener("click", function() {
        alert("Thank you for subscribing.");
    });
});

// --------- GALLERY PAGE FEATURES ---------
let cart = 0;

// Check if on Gallery page by seeing if gallery items exist
const addToCartButtons = document.querySelectorAll(".gallery-item .add-to-cart-btn");
if (addToCartButtons.length > 0) {

    addToCartButtons.forEach(btn => {
        btn.addEventListener("click", function() {
            cart++;
            alert("Item added to the cart");
        });
    });

    const clearCartBtn = document.getElementById("clearCartBtn");
    if (clearCartBtn) {
        clearCartBtn.addEventListener("click", function() {
            if (cart > 0) {
                cart = 0;
                alert("Cart cleared");
            } else {
                alert("No items to clear.");
            }
        });
    }

    const processOrderBtn = document.getElementById("processOrderBtn");
    if (processOrderBtn) {
        processOrderBtn.addEventListener("click", function() {
            if (cart > 0) {
                cart = 0;
                alert("Thank you for your order");
            } else {
                alert("Cart is empty.");
            }
        });
    }
}

// Add this at the bottom of your existing script.js (or anywhere after `let cart = 0;`)

function viewCart() {
    if (cart > 0) {
        alert("You have " + cart + " item(s) in your cart.");
    } else {
        alert("Your cart is empty.");
    }
}

// Optionally, attach event listener if you add a View Cart button by ID:
const viewCartBtn = document.getElementById("viewCartBtn");
if (viewCartBtn) {
    viewCartBtn.addEventListener("click", viewCart);
}


// --------- ABOUT / CONTACT PAGE FORM ---------
const contactForm = document.getElementById("contactForm");
if (contactForm) {
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent actual form submission for demo
        alert("Thank you for your message");
    });
}
