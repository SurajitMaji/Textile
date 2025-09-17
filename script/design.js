

const params = new URLSearchParams(window.location.search);
var objId=params.get("id");
obj=findObject(objId);

//main dress image fetching
//imageFolder --> variable store the location of the design images
var ig=imageFolder+obj.images[0];
const productImage=document.getElementById('mainImage');
productImage.src=ig;

// setting up the images tape


const tape=document.getElementById('tap_image_area');
size=obj.images.length; // when image field is array
// size=1;
// 
// 
for(let i=0;i<size;i++){
                var ig=imageFolder+obj.images[i];
    tape.innerHTML+=`
        <div class="tap-image-container">
            
            <img src="${ig}" alt="" class="tap-image" onclick='openImage(this)'>
        </div>      
    `;
}

 function openImage(element){    
             let bigImage=document.getElementById('mainImage');
            bigImage.src=element.src;
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
                    <span> ${obj.price} </span> /-  Fittings`;


 //  making text for user
           var textToUser=`
           Hello%20this%20is%20my%20product%20%F0%9F%91%87%0A
           Id: ${obj.id} 
            Name: ${obj.name} 
            Price: ${obj.perMeterPrice} 
            https%3A%2F%2Fsurajitmaji.github.io%2Ftextile%2F${obj.images[0]}`;
   
            var textToSelf=`
            I%20want%20to%20save%20as%20favorite%20product%20%F0%9F%91%87%0A
            Id: ${obj.id} 
            Name: ${obj.name} 
            Price: ${obj.perMeterPrice} 
            https%3A%2F%2Fsurajitmaji.github.io%2Ftextile%2F${obj.images[0]}`;
    
    
    var action_area=document.getElementById('main_action_button_area');
    action_area.innerHTML=`
        <a  class="order-btn" href="https://wa.me/919874323889?text=${textToUser}" target="_blank">Order Now</a> 
        <a  class="add-to-cart-btn" href="https://wa.me/919874323889?text=${textToSelf}" target="_blank">Add to Cart</a>   
                    
    `;
// size set up
var dressSize=document.getElementById('size_setup');

for(var i=0;i<obj.sizeWisePrice.length;i++){    
    const idVar='sizeBox'+i
    if(obj.sizeWisePrice[i][1]!=null){
        dressSize.innerHTML+=`
            <span class="size" id="${idVar}" onclick="showPrice(this)">${obj.sizeWisePrice[i][0]}</span>
        `;
    }
    else{
         dressSize.innerHTML+=`
            <span class="size" id="${idVar}" >${obj.sizeWisePrice[i][0]}</span>
        `;
    }
}
if(obj.sizeWisePrice.length==0){
    dressSize.innerHTML+=`
        <span class="size" >Custom / General</span>
    `;
}


// aftering clicking on the available sizes the changes are applied through this function
function showPrice(element){
    let sizeBoxId=element.getAttribute("id");
            console.log(sizeBoxId);
    const size=element.innerText;
    const price2=getPriceFromSize(size,obj);
    var priceBox=document.getElementById('price');
    priceBox.innerHTML=`Rs. ${price2} /-  Fittings`;
    // update the variable sizeBox
    let sizeBox=document.getElementById(sizeBoxId);
    // update css properties of the sizeBox
    //  the clicked sizeBox made different style
    sizeBox.style.backgroundColor="red";
    sizeBox.style.color="white";
    sizeBox.style.border="2px solid black";

    // remaining box's got same and previous style
    for(let i=0;i<obj.sizeWisePrice.length;i++){
            
            const idVar='sizeBox'+i;    
        if(sizeBoxId!=idVar){
            let sizeBoxOthers=document.getElementById(idVar);
            sizeBoxOthers.style.backgroundColor="white";
            sizeBoxOthers.style.color="black";
            sizeBoxOthers.style.border="2px dashed black";

        }
    }


}


//add description

var desc=document.getElementById('desctioption');
if(obj.description==null){    
    desc.innerText='';
}
else{
    desc.innerText=obj.description;
}

