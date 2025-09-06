const stars=document.getElementsByClassName('rattings');
    const product_details=document.getElementById('products');
    var products=[
        {
            name:'Shirt',
            image:'./collection/IMG_20250905_010724.jpg',
            price:499.00,
            rattings:3.9,
            sale:false,
            new:0,
            avilable:true
        },
        
        {
            name:'Blouse',
            image:'./collection/IMG_20250905_010508.jpg',
            price:249.00,
            rattings:3.9,
            sale:false,
            new:0,
            avilable:true
        },
        
        {
            name:'Shirt',
            image:'./collection/IMG_20250905_010853.jpg',
            price:549.00,
            rattings:3.9,
            sale:false,
            new:0,
            avilable:true
        },
        {
            name:'Firil Blouse',
            image:'./collection/20210615_084702.jpg',
            price:296.00,
            rattings:3.9,
            sale:false,
            new:true,
            avilable:true
        },
        {
            name:'Blouse',
            image:'./collection/IMG_20250905_010357.jpg',
            price:159.00,
            rattings:3.9,
            sale:false,
            new:true,
            avilable:true
        },
        {
            name:'Blouse',
            image:'./collection/IMG_20250905_010206.jpg',
            price:296.00,
            rattings:3.9,
            sale:false,
            new:true,
            avilable:true
        },
        {
            name:'Blouse',
            image:'./collection/20210721_182614.jpg',
            price:296.00,
            rattings:3.9,
            sale:false,
            new:true,
            avilable:true
        },

        {
            name:'Frock',
            image:'./collection/IMG_20210904_17.jpg',
            price:200.00,
            rattings:3.9,
            sale:true,
            new:false,
            avilable:true
        },
        {
            name:'Jhabela',
            image:'./collection/IMG_20210811_125859.jpg',
            price:80.00,
            rattings:3.9,
            sale:false,
            new:false,
            avilable:true
        },
        {
            name:'Jhabela',
            image:'./collection/IMG_20210912_115926.jpg',
            price:58.00,
            rattings:3.9,
            sale:false,
            new:false,
            avilable:false
        },
        {
            name:'Baby Jhabela',
            image:'./collection/IMG_20210912_115848.jpg',
            price:60.00,
            rattings:3.9,
            sale:false,
            new:false,
            avilable:false
        },
        {
            name:'Baby Dress',
            image:'./collection/IMG_20210811_125831.jpg',
            price:55.00,
            rattings:3.9,
            sale:false,
            new:false,
            avilable:false
        },
        {
            name:'Mask',
            image:'./collection/20210701_202029.jpg',
            price:30.00,
            rattings:3.9,
            sale:false,
            new:false,
            avilable:false
        },
    ];
   let tag_value="";
    for(let i=0;i<products.length;i++){
             if(products[i].avilable==false){
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
        product_details.innerHTML+=`
        <div class="each-product">
            <a class="image-area" href="product.html">
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
                <a target="_blank" href="https://wa.me/917679687016?text=Hello%20this%20is%20my%20product%20%F0%9F%91%87%0Ahttps%3A%2F%2Fsurajitmaji.github.io%2FPortfolio%2Fimages%2FIMG_20240328_090806.jpg" class="order-btn">Order Now</a> 
                <a target="_blank" href="https://wa.me/?text=I%20want%20to%20save%20as%20favorite%20product%20%F0%9F%91%87%0Ahttps%3A%2F%2Fsurajitmaji.github.io%2FPortfolio%2Fimages%2FIMG_20240328_090806.jpg" class="add-to-cart-btn">Add to Cart</a>   
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

