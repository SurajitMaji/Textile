function capitalizeFirstLetter(str) {
    //  this function takes a string and return 1st letter of the string as capitala and others and small letter 
    if (!str) return ""; 
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
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

let silhouetteTagArea=document.getElementById('silhouette_tag_area');
silhouetteTagArea.innerHTML='';

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
componentTagArea.innerHTML='';
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
clothTagArea.innerHTML='';
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




































// strat the Sudio Operation

function openMainImage(dressElement){
     // this fucntion to show main image area initially
        let imageArea=document.getElementById('main_dress_image');
        let imageURL='./imagesR/'+dressElement.image;
        if(dressElement.image==null){
            imageURL="./assets/7415529.png";
        }
        imageArea.src=imageURL;
}


function openSilhouetteTag(list)
{ // list is a dress object

    // console.log("list value",list);    
    let areaResult=document.getElementById('silhouette_area');
    // console.log('Size:',list.dressElementList.length);
    let size=list.dressElementList.length;
    areaResult.innerHTML='';
    for(let i=0; i<size;i++){

        let imageURL='./imagesR/'+list.dressElementList[i].image;
        if(list.dressElementList[i].image==null){
            imageURL="./assets/7415529.png";
        }
        areaResult.innerHTML+=`
            <div class="each-shilhouetee" onclick="openDressPreview(this)">
                <div class="silhouette-image-area">
                    <img src="${imageURL}" alt="${list.dressElementList[i].name}" >
                </div>
                <div class="silhouette-name">
                    ${list.dressElementList[i].name}
                </div>
                <div class="shilhouette-price-area">
                    <span class="shilouette-price">
                        ${list.dressElementList[i].price}
                    </span> Rs.
                </div>
            </div>
        `;      
            
                
    }
    openMainImage(list.dressElementList[0]) // -> show first element image of the first silhouette element
}

function openComponentTag(list) {
    // console.log('OpenComponent Function: Prameter->',list);
    let opearationArea=document.getElementById('component_area');
    opearationArea.innerHTML='';
    let size2=list.dressElementList.length;
    for(let i=0;i<size2;i++){
         let imageURL='./imagesR/'+list.dressElementList[i].image;
        if(list.dressElementList[i].image==null){
            imageURL="./assets/7415529.png";
        }
        opearationArea.innerHTML+=`
        <div class="each-button" id="each_component" onclick="clickedComponent(this)">
            <div class="button-image">
               <img src="${imageURL}" alt="${list.dressElementList[i].name}" >
            </div>
            <div class="button-name">
                ${list.dressElementList[i].name}
            </div>
        </div>
        `;
        
    }
   
            
}


function openDress(dressObj){

    // fetching exixting tags
    //  console.log('openDress Function Object Name',dressObj);
            
            document.getElementById('silhouette_area').innerHTML=''; // -> make the shilhouette area empty
            let tag1=document.getElementById('silhouette_tag_area');  
            tag1.innerHTML=``;
            document.getElementById('component_area').innerHTML='';
            let tag2=document.getElementById('component_tag_area');
            tag2.innerHTML=``;  
        
        let j=0;
        let k=0;
    for(let i=0;i<dressObj.dressPartList.length;i++){

        let tagCLickValue=dressObj.dressPartList[i].dressPartName;
        if(dressObj.dressPartList[i].portion=='silhouette'){
                if(j==0){
                    j++;
                    tag1.innerHTML+=`
                    <div class="dress-type-tag active-dress-tag"  id="dress_tag" onclick='openSilhouetteTag(${tagCLickValue})'>
                        ${capitalizeFirstLetter(dressObj.dressPartList[i].dressPartName)}
                    </div>
                    `;
                    openSilhouetteTag(dressObj.dressPartList[i]);
                }
                else{
                    tag1.innerHTML+=`
                    <div class="dress-type-tag" id="dress_tag"  onclick='openSilhouetteTag(${tagCLickValue})'>
                        ${capitalizeFirstLetter(dressObj.dressPartList[i].dressPartName)}
                    </div>
                    `;
                }

            
        }
        else if(dressObj.dressPartList[i].portion=='component'){ 
                if(k==0){
                    k++;
                    tag2.innerHTML+=`
                    <div class="dress-type-tag active-dress-tag"  id="dress_tag" onclick='openComponentTag(${tagCLickValue})'>${capitalizeFirstLetter(dressObj.dressPartList[i].dressPartName)}</div>
                    `;
                    openComponentTag(dressObj.dressPartList[i]); // -> initially sow the first component from first component tag
                }
                else{
                    tag2.innerHTML+=`
                    <div class="dress-type-tag"  id="dress_tag" onclick='openComponentTag(${tagCLickValue})'>${capitalizeFirstLetter(dressObj.dressPartList[i].dressPartName)}</div>
                    `;
                }
            
        }
        if(k==0){ // check if there is no component then make the area null
            document.getElementById('component_area').innerHTML='';
        }
    }
    
        //  tags fixing finish 


    
    
}

function openDressCatgorywise(parameterObj){
    // the parameter value will be home, men, women and others always 
    // console.log("openDressCategory working with the paramenter",parameterObj);
    // fetching types of dress of every domain 
    let type_of_dress=document.getElementById('type_of_dress');
    type_of_dress.innerHTML='';
    for(let i=0;i<parameterObj.dressList.length;i++){
            let onclickValue='openDress('+`${parameterObj.dressList[i].dressName}`+')';
           
            type_of_dress.innerHTML+=`            
                        <div class="each-dress" onclick="openDress(${parameterObj.dressList[i].dressName})">
                        ${capitalizeFirstLetter(parameterObj.dressList[i].dressName)}
                        </div>
            `;
    }
    // console.log("Dress of this types",parameterObj.dressList[0].dressPartList[0].dressPartName);
    openDress(parameterObj.dressList[0]);
    //fetching 

}

studioNav('women');

// openDressCatgorywise(womenGlobal); // ->  make the women section default
// openDress(womenGlobal.dressList[1].dressName.dressPartList) // ->  make the blouse section default
function studioNav(parameter='home'){   
    
    var globalType=new StudioCategory();
    if(parameter=='home'){
        // console.log('Home');
        globalType=homeGlobal;
    }
    else if(parameter=='men'){
        // console.log('men');
        globalType=menGlobal;
    }
    else if(parameter=='women'){
        // console.log('wommen');
        globalType=womenGlobal;
    }
    else if(parameter=='men'){
        // console.log('others');
        globalType=othresGlobal;
    }
    openDressCatgorywise(globalType);
    openSilhouetteTag(globalType.dressList[1]); //-> set men section as default
}