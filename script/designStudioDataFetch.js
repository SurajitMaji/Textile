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

function openSilhouetteTag(list)
{ // list is a dress object
    console.log("list value",list.dressPartName);    
    let areaResult=document.getElementById('silhouette_area');
    console.log('Size:',list.dressElementList.length);
    areaResult.innerHTML=''
    for(let i=0; i<list.dressElementList.length;i++){

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
}

function openDress(dressObj){

    // fetching exixting tags
     console.log('Dress Object Name',dressObj.dressName);
            
            document.getElementById('silhouette_area').innerHTML=''; // -> make the shilhouette area empty
            let tag1=document.getElementById('silhouette_tag_area');  
            tag1.innerHTML=``;

            let tag2=document.getElementById('component_tag_area');
            tag2.innerHTML=``;  
        
        let j=0;
        let k=0;
    for(let i=0;i<dressObj.dressPartList.length;i++){
        document.getElementById('component_area').innerHTML='';

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
                    <div class="dress-type-tag active-dress-tag"  id="dress_tag" onclick=''>${capitalizeFirstLetter(dressObj.dressPartList[i].dressPartName)}</div>
                    `;
                }
                else{
                    tag2.innerHTML+=`
                    <div class="dress-type-tag"  id="dress_tag" onclick=''>${capitalizeFirstLetter(dressObj.dressPartList[i].dressPartName)}</div>
                    `;
                }
            
        }
    }
    
        //  tags fixing finish 


    
    
}

function openDressCatgorywise(parameterObj){
    // the parameter value will be home, men, women and others always 

    // fetting types of dress of every domain 
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

    //fetching 

}

studioNav();

// openDressCatgorywise(womenGlobal); // ->  make the women section default
// openDress(womenGlobal.dressList[1].dressName.dressPartList) // ->  make the blouse section default
function studioNav(parameter='home'){   
    
    var globalType=new StudioCategory();
    if(parameter=='home'){
        console.log('Home');
        globalType=homeGlobal;
    }
    else if(parameter=='men'){
        console.log('men');
        globalType=menGlobal;
    }
    else if(parameter=='women'){
        console.log('wommen');
        globalType=womenGlobal;
    }
    else if(parameter=='men'){
        console.log('others');
        globalType=othresGlobal;
    }
    openDressCatgorywise(globalType);
    // console.log("GLobe Type",globalType.dressList[0].dressName);
    // openSilhouetteTag(globalType.dressList[0]);
}