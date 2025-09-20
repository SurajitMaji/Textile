
// taking the seraching value 

const url=new URLSearchParams(window.location.search);
var searchString=url.get('searchString');

// update the search result string/ words
 document.getElementById('search_string').innerHTML=`${searchString}`;



  
function findDresses(a){
    const dressSerachList=[];
    // console.log("findDresses Working");
    for(var i=0;i<product_list2.length;i++){
    // console.log("findDresses Working loop");
            if(product_list2[i].name==a
                // || 
                // product_list2[i].color.toLowerCase().includes(a) ||
                // product_list2[i].size.toLowerCase().includes(a) || 
                // product_list2[i].description.toLowerCase().includes(a)
            )
            {       
                
            // console.log("findDresses Working equal");  
                dressSerachList.push(product_list2[i]);
            }
        }
    return dressSerachList;
}



//fetching area
var main_area=document.getElementById('searching-result-container');
function fetchDresses(searchString){
    const dressList=findDresses(searchString); // this is a list where only 
    console.log(dressList.length);

    // adding product space in main area for dress from as it collection
   
    var temDressList=dressList;
    console.log(temDressList);

    fetchDresses(temDressList);


}

function openAll(elem){
    fetchDresses(searchString);
}
