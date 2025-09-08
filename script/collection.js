
    // const stars=document.getElementsByClassName('rattings');
    const product_details=document.getElementById('products');
   let tag_value="";
   var products=product_list2;
    for(let i=0;i<products.length;i++){
        if(products[i].see==1){
             if(products[i].avilable==0){
             tag_value="./assets/delete.png";

             }
             else if(products[i].new){
             tag_value="./assets/new.png";

             }
             else if(products[i].sale){
             tag_value="./assets/sale.png";
             }
             else{
                tag_value="";
             }
            //  making text for user
           var textToUser=`
           Hello%20this%20is%20my%20product%20%F0%9F%91%87%0A
           Id: ${products[i].id} 
            Name: ${products[i].name} 
            Price: ${products[i].price} 
            https%3A%2F%2Fsurajitmaji.github.io%2Ftextile%2F${products[i].image}`;

            var textToSelf=`
            I%20want%20to%20save%20as%20favorite%20product%20%F0%9F%91%87%0A
            Id: ${products[i].id} 
            Name: ${products[i].name} 
            Price: ${products[i].price} 
            https%3A%2F%2Fsurajitmaji.github.io%2Ftextile%2F${products[i].image}
            `;

            var productPageURL=`product.html?id=${products[i].id}`;

            product_details.innerHTML+=`
            <div class="each-product">
                <a class="image-area" href="${productPageURL}">
                    <div class="wishlist">
                        <img src="./assets/wishlist.png" class="wish-tag" alt="" srcset="">
                    </div>
                    <div class="tag">
                        <img src="${tag_value}" class="update-tag" alt="" srcset="">
                    </div>
                    <div class="product-image-area">
                        <img src="${products[i].image}" alt="" srcset="" class="product-image">
                    </div>
                </a>
                <div class="details">
                    <div class="product-name">
                        ${products[i].name}
                    </div>
                    <div class="product-price">
                        Rs.
                        <span> ${products[i].price} </span> /-
                    </div>
                </div>
                <div class="action-button-area">
                    <a target="_blank" href="https://wa.me/919874323889?text=${textToUser}" class="order-btn">Order Now</a> 
                    <a target="_blank" href="https://wa.me/919874323889?text=${textToSelf}" class="add-to-cart-btn">Add to Cart</a>   
                </div>
                <div class="rattings">
                    <img src="./assets/1828884.png" class="ratting-star">
                    <img src="./assets/1828884.png" class="ratting-star">
                    <img src="./assets/1828884.png" class="ratting-star">
                    <img src="./assets/1828970.png" class="ratting-star">
                    <img src="./assets/1828970.png" class="ratting-star">

                </div>
            </div>
            
            `;
        }
    }

