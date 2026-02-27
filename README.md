<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Sona Cafe Menu</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

<!-- TOP BAR -->
<div class="topbar">
  <div class="left">☰</div>
  <div class="center">Sona Cafe</div>
  <div class="right">
    🛒 <span id="cart-count">0</span>
  </div>
</div>

<!-- MENU ITEM -->
<div class="menu">
  <div class="item">
    <h3>Fried Rice</h3>
    <p>₹120</p>

    <div class="controls">
      <button onclick="changeQty(-1)">-</button>
      <span id="qty">1</span>
      <button onclick="changeQty(1)">+</button>
    </div>

    <button class="add-btn" onclick="addToCart()">
      Add to Cart
    </button>
  </div>
</div>

<script src="script.js"></script>
</body>
</html>
