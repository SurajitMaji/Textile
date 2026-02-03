   const cloth_area=document.getElementById('clothCollection');
   var cloths=clothList;
    for(let i=0;i<cloths.length;i++){

            // making image url with its containing folder
            let clothUrl=clothImageFodlder+cloths[i].images[0];
            console.log(clothUrl);
            //  making text for user
           var textToUser=`
           Hello%20this%20is%20my%20Cloth%20%F0%9F%91%87%0A
           Id: ${cloths[i].clothId} 
            Name: ${cloths[i].name} 
            Price: ${cloths[i].perMeterPrice} 
            https%3A%2F%2Fsurajitmaji.github.io%2Ftextile%2F${cloths[i].images[i]}`;

            var textToSelf=`
            I%20want%20to%20save%20as%20favorite%20product%20%F0%9F%91%87%0A
            Id: ${cloths[i].clothId} 
            Name: ${cloths[i].name} 
            Price: ${cloths[i].perMeterPrice} 
            https%3A%2F%2Fsurajitmaji.github.io%2Ftextile%2F${cloths[i].images[i]}
            `;

            var productPageURL=`cloth.html?id=${cloths[i].clothId}`;

            cloth_area.innerHTML+=`
            <div class="each-product">
                <a class="image-area" href="${productPageURL}">
                    <div class="wishlist">
                        <img src="./assets/wishlist.png" class="wish-tag" alt="" srcset="">
                    </div>
                    <div class="product-image-area">
                        <img src="${clothUrl}" alt="" srcset="" class="product-image">
                    </div>
                </a>
                <div class="details">
                    <!--<div class="product-name">
                        ${cloths[i].brandName}
                    </div> -->
                    <div class="product-name">
                        ${cloths[i].name}
                    </div>
                    <div class="product-price">
                        Rs.
                        <span> ${cloths[i].perMeterPrice} </span> /- Per Meter
                    </div>
                </div>
                <div class="action-button-area">
                    <a target="_blank" href="https://wa.me/919874323889?text=${textToUser}" class="order-btn">Pick Out</a> 
                    <a target="_blank" href="https://wa.me/919874323889?text=${textToSelf}" class="add-to-cart-btn">Add to Cart</a>   
                </div>
                <div class="rattings">
                    <!--<img src="./assets/1828884.png" class="ratting-star">
                    <img src="./assets/1828884.png" class="ratting-star">
                    <img src="./assets/1828884.png" class="ratting-star">
                    <img src="./assets/1828970.png" class="ratting-star">
                    <img src="./assets/1828970.png" class="ratting-star">  -->

                </div>
            </div>
            
            `;
        }
    