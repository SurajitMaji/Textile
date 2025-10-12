
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


// openBlouseStudio() -> open the studio for making a blouse 
function openBlouseStudio(){
    let imageFolder='./imagesR/';
    let previewIMG=blouse.dressPartList[0].dressElementList[0].image;    
    let main_image = document.getElementById('main_dress_image');
    main_image.src=imageFolder+previewIMG;
    main_image.alt='Blouse Image';

    document.getElementById('choose1heading').innerHTML=`Step 1: Choose a ${blouse.portion[0]}`;
    document.getElementById('choose2heading').innerHTML=`Step 2: Choose a ${blouse.portion[1]}`;
    document.getElementById('choose3heading').innerHTML=`Step 3: Choose a ${blouse.portion[2]}`;
    for(let i=0;i<blouse.dressPartList.length;i++){
        
    }
}