// defining the data structure how to handle the studio page 

class DressElement{ 
    // this object is to store every smallest component of the dress with its name, price and image 
    constructor(name='',price=0.0,image=null){
        this.name=name;
        this.price=price,
        this.image=image;
    }
    setDressElement(name,price,image){
        this.name=name;
        this.price=price,
        this.image=image;
    }
    showDressElement(){        
        console.log(" Name : ",this.name);
        console.log(" Price : ",this.price);
        console.log(" image : ",this.image);
        
    }
}

class DressPart{
    // this object is to store like front, back, sleeve, collar, button, pocket etc.
    // part portion will be fix through constructor argument
    // DressPart(name,1) -> silhouette 
    // DressPart(name,2) -> component 
    // DressPart(name,3) -> fabric 
    constructor(name='',portion_number=''){
        this.dressPartName=name;
        this.dressElementList=[];
        if(portion_number==1){
            this.portion='silhouette';
        }
        else if(portion_number==2){
            this.portion='component';
        }
        // if(portion_number==3){
        //     this.portion='fabric';
        // }
    }
    setDressName(name){        
        this.dressSubPartName=name;
    }
    addDressElement(obj){
        this.dressElementList.push(obj);
    }
    showDressSubPart(){
        console.log(" Tag : ",this.dressPartName,"( ",this.portion," )");
        for(let i=0;i<this.dressElementList.length;i++){            
                      this.dressElementList[i].showDressElement();
                }
    }
}

class Dress{
    // store Dresss, specically for women - blouse, dress, skrit, pant 
    constructor(name=''){
        this.dressName=name;
        this.dressPartList=[];
        // this.portion=['silhouette','component','fabric'];
    } 
    
    setDressName(name){
        this.dressName=name;
    }
    
    addDressPart(obj){
        this.dressPartList.push(obj);
    }
    showDress(){
        console.log("Dress Name: ",this.dressName);
        for(let i=0;i<this.dressPartList.length;i++){            
                this.dressPartList[i].showDressSubPart();
        }
    }
}

class StudioCategory{
     // store Dresss - home, men , women, kids etc 
    constructor(name=''){
        this.studioCategoryName=name;
        this.dressList=[];
    } 
    
    setDressPartName(name){
        this.studioCategoryName=name;
    }
    
    addDress(obj){
        this.dressList.push(obj);
    }
    showStudioCategory(){
        console.log(" Dress Category Name: ",this.studioCategoryName);
        for(let i=0;i<this.dressList.length;i++){
               this.dressList[i].showDress();
        }
    }
}

// end defining the storage 





var homeGlobal=new StudioCategory('home');
let temp=new Dress('dress1');
homeGlobal.addDress(temp);
temp=new Dress('dress2');
homeGlobal.addDress(temp);
temp=new Dress('dress3');
homeGlobal.addDress(temp);
temp=new Dress('dress4');
homeGlobal.addDress(temp);


















var blouse2={
    silhouette:['Long','Short'],
    component:['Sleeve','Collar','Button','Pocket','Embellishment'],
    cloth:['Color','Fabric']
}
