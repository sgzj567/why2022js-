function addProductsEmpty() {
  for (var i = 0; i < 3; i++) {
    var itemEl = document.createElement("li")
    itemEl.classList.add("item")
    itemEl.classList.add("empty")
    productEl.append(itemEl)
  }
}