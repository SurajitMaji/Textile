

const params = new URLSearchParams(window.location.search);
var objId=params.get("id");
obj=findObject(objId);

//main dress image fetching
const productImage=document.getElementById('mainImage');
productImage.src=obj.images[0];

// setting up the images tape


const tape=document.getElementById('tap_image_area');
size=obj.images.length; // when image field is array
// size=1;
for(let i=0;i<size;i++){
    tape.innerHTML+=`
        <div class="tap-image-container">
            <img src="${obj.images[i]}" alt="" class="tap-image" onclick='openImage(this)'>
        </div>
    `;
}

function openImage(element){    
    var productImg=document.getElementById('product_image');
    // productImage.src='./assets/46ee619c4e9a7ef84094381a5e83dbfe.jpg';
    productImg.innerHTML=`
    <img src='./assets/46ee619c4e9a7ef84094381a5e83dbfe.jpg'>
    `;
    console.log('openImage is working');
}
// tag setup

    var tag=document.getElementById('main_tag');
    
     if(obj.avilable==0){
    tag_value="./assets/delete.png";
    }
    else if(obj.new){
    tag_value="./assets/new.png";

    }
    else if(obj.sale){
    tag_value="./assets/sale.png";
    }
    else{
    tag_value="";
    }
    tag.innerHTML=`
        <img src="${tag_value}" class="update-tag" alt="" srcset="">
    `;

// product name
var pName=document.getElementById('product_name');
pName.innerHTML+=obj.name;

//
var pPrice=document.getElementById('price');
pPrice.innerHTML+=`Rs.
                    <span> ${obj.price} </span> /-  `;


 //  making text for user
           var textToUser=`
           Hello%20this%20is%20my%20product%20%F0%9F%91%87%0A
           Id: ${obj.id} 
            Name: ${obj.name} 
            Price: ${obj.price} 
            https%3A%2F%2Fsurajitmaji.github.io%2Ftextile%2F${obj.images[0]}`;
   
            var textToSelf=`
            I%20want%20to%20save%20as%20favorite%20product%20%F0%9F%91%87%0A
            Id: ${obj.id} 
            Name: ${obj.name} 
            Price: ${obj.price} 
            https%3A%2F%2Fsurajitmaji.github.io%2Ftextile%2F${obj.images[0]}`;
    
    
    var action_area=document.getElementById('main_action_button_area');
    action_area.innerHTML=`
        <a  class="order-btn" href="https://wa.me/919874323889?text=${textToUser}" target="_blank">Order Now</a> 
        <a  class="add-to-cart-btn" href="https://wa.me/919874323889?text=${textToSelf}" target="_blank">Add to Cart</a>   
                    
    `;

// set up the available color
var color=document.getElementById('avail_color_area');
// size=obj.image.length;  when multiple colors are available
size=1;
for(let i=0;i<size;i++){
    color.innerHTML+=`
        <span style="background-color:${obj.color}"></span>
    `;
}

//add description

var desc=document.getElementById('desctioption');
if(obj.description==null){    
    desc.innerText='';
}
else{
    desc.innerText=obj.description;
}
