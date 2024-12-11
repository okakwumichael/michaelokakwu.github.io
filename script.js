document.addEventListener("DOMContentLoaded", () => {
    const cartButton = document.getElementById("cart-button");
    const cartDropdown = document.getElementById("cart-dropdown");
    const cartItems = document.getElementById("cart-items");
    const cartCount = document.getElementById("cart-count");
    const cartTotal = document.getElementById("cart-total");
  
    // Sample cart data (replace this with dynamic data from your backend)
    const cart = [
      { name: "Bananas", price: 2.99, quantity: 2 },
      { name: "Milk", price: 3.49, quantity: 1 },
    ];
  
    // Update cart display
    function updateCart() {
      cartItems.innerHTML = "";
      let total = 0;
      let itemCount = 0;
  
      if (cart.length === 0) {
        cartItems.innerHTML = "<li>Your cart is empty.</li>";
      } else {
        cart.forEach(item => {
          const listItem = document.createElement("li");
          listItem.textContent = `${item.name} x${item.quantity} - $${(item.price * item.quantity).toFixed(2)}`;
          cartItems.appendChild(listItem);
          total += item.price * item.quantity;
          itemCount += item.quantity;
        });
      }
  
      cartTotal.textContent = total.toFixed(2);
      cartCount.textContent = itemCount;
    }
  
    // Toggle cart dropdown
    cartButton.addEventListener("click", () => {
      cartDropdown.style.display =
        cartDropdown.style.display === "block" ? "none" : "block";
    });
  
    // Close cart dropdown if clicking outside
    document.addEventListener("click", (event) => {
      if (!cartButton.contains(event.target) && !cartDropdown.contains(event.target)) {
        cartDropdown.style.display = "none";
      }
    });
  
    // Initialize cart
    updateCart();
  });
  