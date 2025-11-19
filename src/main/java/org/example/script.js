// ==========================================
//  SUBSCRIBE FEATURE (all pages)
// ==========================================
const subscribeButtons = document.querySelectorAll("#subscribeBtn");
subscribeButtons.forEach(btn => {
    btn.addEventListener("click", function() {
        alert("Thank you for subscribing.");
    });
});


// ==========================================
//  GALLERY PAGE FEATURES (Task 3.1)
// ==========================================
let cart = 0; // original counter system

const addToCartButtons = document.querySelectorAll(".gallery-item .add-to-cart-btn");

if (addToCartButtons.length > 0) {
    // Task 3.1 Add to Cart (kept exactly as required)
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



// ==========================================
//  SESSION STORAGE SHOPPING CART (Task 3.2)
// ==========================================

// Create cart storage if not present
if (!sessionStorage.getItem("cartItems")) {
    sessionStorage.setItem("cartItems", JSON.stringify([]));
}

// Add items to sessionStorage cart
if (addToCartButtons.length > 0) {
    addToCartButtons.forEach(btn => {
        btn.addEventListener("click", function () {

            // item name in h3 tag
            let itemName = this.parentElement.querySelector("h3").textContent;

            // read array
            let cartItems = JSON.parse(sessionStorage.getItem("cartItems"));

            // add new item
            cartItems.push(itemName);

            // save updated list
            sessionStorage.setItem("cartItems", JSON.stringify(cartItems));
        });
    });
}


// VIEW CART FUNCTION (Required by Task 3.2)
function viewCart() {
    let cartItems = JSON.parse(sessionStorage.getItem("cartItems"));

    if (!cartItems || cartItems.length === 0) {
        alert("Your cart is empty.");
        return;
    }

    let message = "Items in your cart:\n\n";
    cartItems.forEach((item, index) => {
        message += `${index + 1}. ${item}\n`;
    });

    alert(message);
}


// Add listener to View Cart button (if exists)
const viewCartBtn = document.getElementById("viewCartBtn");
if (viewCartBtn) {
    viewCartBtn.addEventListener("click", viewCart);
}


// Extend Clear Cart to wipe sessionStorage too
if (document.getElementById("clearCartBtn")) {
    document.getElementById("clearCartBtn").addEventListener("click", function () {
        sessionStorage.setItem("cartItems", JSON.stringify([]));
    });
}

// Extend Process Order to wipe sessionStorage too
if (document.getElementById("processOrderBtn")) {
    document.getElementById("processOrderBtn").addEventListener("click", function () {
        sessionStorage.setItem("cartItems", JSON.stringify([]));
    });
}



// ==========================================
//  CONTACT FORM FEATURE (Task 3.1)
// ==========================================
const contactForm = document.getElementById("contactForm");
if (contactForm) {
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();
        alert("Thank you for your message");
    });
}

// ==========================================
//  LOCAL STORAGE FOR CUSTOM ORDER (Task 3.2)
// ==========================================

if (contactForm) {
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();

        // Grab all form values
        const customerData = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            phone: document.getElementById("phone").value,
            message: document.getElementById("message").value,
            customOrder: document.querySelector("input[name='customOrder']").checked
        };

        // Save to localStorage
        localStorage.setItem("customerOrder", JSON.stringify(customerData));

        // Confirmation message
        alert("Thank you for your message");
    });
}

