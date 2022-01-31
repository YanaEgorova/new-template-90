export const item = (product) => {

  return `
    <li class="item">
      
  <div class="product__block js_product glass glass-m" id="${product.id}">

    <div class="product__img-box">
    
     <img src="${product.image}" alt="" class="img">

    </div>
  
    <div class="product__text-box product__text-box--first">
    <p class="product__name js_product-name">${product.name}</p>
    <a href="product-page.html?id=${product.id}" class="btn detail--btn">details</a>
    </div>
    <div class="product__text-box">
      <span class="product__price">
      $${(product.price).toFixed(2)}
      </span>
      <a href="product-page.html?id=${product.id}" class="btn btn--bottom">details</a>
      <button class="btn js_add-to-cart">buy</button>
    </div>

</div>
  </li>
    `
}


