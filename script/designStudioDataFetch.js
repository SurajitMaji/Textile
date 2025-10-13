
// dress types fetch 
var dressTypeNav=document.getElementById('type_of_dress');
// womenDressType -> variable from Storage 
for(let i=0; i<womenDressType.length; i++){
    dressTypeNav.innerHTML+=`    
        <div class="each-dress" onclick="openBlouseStudio()">${womenDressType[i]}</div>
    `;
}

let silhouetteTagArea=document.getElementById('silhouette_tag_area');
// blouse2 -> this varible from storage which store diffrents elemenst of making a blouse2
for(let j=0;j<blouse2.silhouette.length;j++){
    if(j==0){        
        silhouetteTagArea.innerHTML+=`
        <div class="dress-type-tag active-dress-tag">${blouse2.silhouette[j]}</div>
        `;
    }
    else{
        silhouetteTagArea.innerHTML+=`
        <div class="dress-type-tag ">${blouse2.silhouette[j]}</div>
        `;
    }
}

let componentTagArea=document.getElementById('component_tag_area');
for(let j=0;j<blouse2.component.length;j++){
    if(j==0){        
        componentTagArea.innerHTML+=`
        <div class="dress-type-tag active-dress-tag">${blouse2.component[j]}</div>
        `;
    }
    else{
        componentTagArea.innerHTML+=`
        <div class="dress-type-tag ">${blouse2.component[j]}</div>
        `;
    }
}

let clothTagArea=document.getElementById('cloth_tag_area');
for(let j=0;j<blouse2.cloth.length;j++){
    if(j==0){        
        clothTagArea.innerHTML+=`
        <div class="dress-type-tag active-dress-tag">${blouse2.cloth[j]}</div>
        `;
    }
    else{
        clothTagArea.innerHTML+=`
        <div class="dress-type-tag ">${blouse2.cloth[j]}</div>
        `;
    }
}

function tagsName(list,tagName){
    let result=[];
    for(let i=0;i<list.length;i++){
        if(list[i].portion==tagName){
            result.push(list[i].dressPartName);
        }
    }
    return result;
}

function capitalizeFirstLetter(str) {
    if (!str) return ""; 
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}





// openBlouseStudio() -> open the studio for making a blouse 
function openBlouseSilhouette(list,name) 
    // this fuction return the silhouette area's content where the peramenters are
    // list -> dressPartList
    // name -> are the parts name of shilhouette like - front, back 
{
    let areaResult='';
    
    for(let i=0;i<list.length;i++){
        if(list[i].dressPartName==name){       
                areaResult=``;
                for(let j=0;j<list[i].dressElementList.length;j++){
                        let imageURL='./imagesR/'+list[i].dressElementList[j].image;
                        if(list[i].dressElementList[j].image==null){
                            imageURL="./assets/7415529.png";
                        }
                        areaResult+=`
                        <div class="each-shilhouetee">
                            <div class="silhouette-image-area">
                                <img src="${imageURL}" alt="dress" onclick="openDressPreview(this)">
                            </div>
                            <div class="silhouette-name">
                                ${list[i].dressElementList[j].name} 
                            </div>
                            <div class="shilhouette-price-area">
                                <span class="shilouette-price">
                                    ${list[i].dressElementList[j].price}
                                </span> Rs.
                            </div>
                        </div>
                    `;
                }
                break;
            }
    }
    return areaResult;
}
function openBlouseComponent(list,name) 
    // this fuction return the silhouette area's content where the peramenters are
    // list -> dressPartList
    // name -> are the parts name of shilhouette like - sleeve, button 
{
    let areaResult='';
    
    for(let i=0;i<list.length;i++){
        if(list[i].dressPartName==name){       
                areaResult=``;
                for(let j=0;j<list[i].dressElementList.length;j++){
                        let imageURL='./imagesR/'+list[i].dressElementList[j].image;
                        if(list[i].dressElementList[j].image==null){
                            imageURL="./assets/7415529.png";
                        }
                        areaResult+=`
                        <div class="each-shilhouetee">
                            <div class="silhouette-image-area">
                                <img src="${imageURL}" alt="dress" onclick="openDressPreview(this)">
                            </div>
                            <div class="silhouette-name">
                                ${list[i].dressElementList[j].name} 
                            </div>
                            <div class="shilhouette-price-area">
                                <span class="shilouette-price">
                                    ${list[i].dressElementList[j].price}
                                </span> Rs.
                            </div>
                        </div>
                    `;
                }
                break;
            }
    }
    return areaResult;
}

function openBlousefront(element){
    let parent =document.querySelector('#silhouette_tag_area');
    let children=parent.querySelectorAll('#dress_tag');
    children.forEach(child => {
    child.className='dress-type-tag';
    });

    element.className+=` active-dress-tag`;
     let silhouette_area=openBlouseSilhouette(blouse.dressPartList,'front');
     document.getElementById('silhouette_area').innerHTML=silhouette_area;
    
}
function openBlouseback(element){

    let parent =document.querySelector('#silhouette_tag_area');
    let children=parent.querySelectorAll('#dress_tag');
    children.forEach(child => {
    child.className='dress-type-tag';
    });

    element.className+=` active-dress-tag`;
     let silhouette_area=openBlouseSilhouette(blouse.dressPartList,'back');
     document.getElementById('silhouette_area').innerHTML=silhouette_area;
    
}
function openBlouseStudio(){
    let imageFolder='./imagesR/';
    let previewIMG=blouse.dressPartList[0].dressElementList[0].image;    
    let main_image = document.getElementById('main_dress_image');
    main_image.src=imageFolder+previewIMG;
    main_image.alt='Blouse Image';

    document.getElementById('choose1heading').innerHTML=`Step 1: Choose a ${blouse.portion[0]}`;
    document.getElementById('choose2heading').innerHTML=`Step 2: Choose a ${blouse.portion[1]}`;
    document.getElementById('choose3heading').innerHTML=`Step 3: Choose a ${blouse.portion[2]}`;
    
    
    //setting tag names 
    // blouse.showDress();
    let tag1=document.getElementById('silhouette_tag_area');
    let stags=tagsName(blouse.dressPartList,'silhouette');
    tag1.innerHTML=``;
    for(let i=0;i<stags.length;i++){
        if(i==0){
            let onclickFunction='openBlouse'+stags[i]+'(this)';
            tag1.innerHTML+=`
            <div class="dress-type-tag active-dress-tag"  id="dress_tag" onclick='${onclickFunction}'>${capitalizeFirstLetter(stags[i])}</div>
            `;
        }
        else{
            let onclickFunction='openBlouse'+stags[i]+'(this)';
            tag1.innerHTML+=`
            <div class="dress-type-tag" id="dress_tag"  onclick='${onclickFunction}'>${capitalizeFirstLetter(stags[i])}</div>
            `;
        }
    }
    
    let tag2=document.getElementById('component_tag_area');
    stags=tagsName(blouse.dressPartList,'component'); 
    tag2.innerHTML=``;   
    for(let i=0;i<stags.length;i++){
        if(i==0){
            tag2.innerHTML+=`
            <div class="dress-type-tag active-dress-tag"  id="dress_tag">${capitalizeFirstLetter(stags[i])}</div>
            `;
        }
        else{
            tag2.innerHTML+=`
            <div class="dress-type-tag"  id="dress_tag">${capitalizeFirstLetter(stags[i])}</div>
            `;
        }
    }
    
    let tag3=document.getElementById('cloth_tag_area');
    stags=tagsName(blouse.dressPartList,'fabric');

    // dress component fetching
     let silhouette_area=openBlouseSilhouette(blouse.dressPartList,'front');
     document.getElementById('silhouette_area').innerHTML=silhouette_area;

    


}