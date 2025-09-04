const menuButton = document.getElementById('menu-btn');

menuButton.addEventListener('click', () => {
    menuButton.classList.toggle('active');
});
function navOption(){
    var content=document.getElementById("navBarMenu");
    // var flag=content.style.display="flex";
    if(content.style.display!="flex"){        
    content.style.display="flex";
    }
    else{        
    content.style.display="none";
    }

}