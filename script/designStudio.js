

// main dress image zoom control 

let main_image = document.getElementById('main_dress_image');
let currentZoom = 1;  // initial zoom level
let maxZoom = 3; // maximum Zoom level
function mainDressZoomIn() {

  if (currentZoom < maxZoom) {
    currentZoom += 0.2;
    main_image.style.transform = `scale(${currentZoom})`;
  }
}

function mainDressZoomOut(){

    if(currentZoom>1){      
        currentZoom -= 0.2;
        main_image.style.transform = `scale(${currentZoom})`;
    }
}


// silhouette image handling 
function openDressPreview(element){    
        // fatching the shilouette image after clicking 
        let childImage = element.querySelector('img');  
        main_image.src=childImage.src;
        // make a border after selection and remove others border
        let allShilouetteBox=document.querySelectorAll('.each-shilhouetee');
        allShilouetteBox.forEach(child=>{
              child.style.border='2px solid rgb(221, 221, 221)';
        });
        element.style.border='2px solid black';

}

function clickedComponent(elemenst){
  // make other box border as previous which is previously clicked
  let parent=document.querySelector('.component-step-content');
  let children=parent.querySelectorAll('#each_component');
  children.forEach(child=>{
        child.style.border='1px solid rgb(221, 221, 221)';
  });
  elemenst.style.border='1px solid black';

}
