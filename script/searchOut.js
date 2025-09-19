// getSearchValue() -> this funtion give the result after serching 

const url=new URLSearchParams(window.location.search);
console.log("Search String :",url.get('searchString'));
    
