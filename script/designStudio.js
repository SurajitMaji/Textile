

// main dress image zoom control 

let main_image = document.getElementById('main_dress_image');
let currentZoom = 1;  // initial zoom level
let maxZoom = 3; // maximum Zoom level
console.log('erdafa');
function mainDressZoomIn() {

  if (currentZoom < maxZoom) {
    currentZoom += 0.2;
    main_image.style.transform = `scale(${currentZoom})`;
    main_image.style.cursor = 'zoom-in';
  }
}

function mainDressZoomOut(){

    if(currentZoom>1){      
        currentZoom -= 0.2;
        main_image.style.transform = `scale(${currentZoom})`;
        main_image.style.cursor = 'zoom-in';
    }
}


// silhouette image handling 
function openDressPreview(element){    
            main_image.src=element.src;
}

