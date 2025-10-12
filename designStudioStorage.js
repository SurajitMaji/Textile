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
    // this object is to store like long, short, sleeve, collar, button, pocket etc.
    // part portion will be fix through constructor argument
    // DressPart(name,1) -> silhouette 
    // DressPart(name,2) -> component 
    // DressPart(name,3) -> fabric 
    constructor(name='',portion_number){
        this.dressPartName=name;
        this.dressElementList=[];
        if(portion_number==1){
            this.portion='silhouette';
        }
        else if(portion_number==2){
            this.portion='component';
        }
        if(portion_number==3){
            this.portion='fabric';
        }
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
        this.portion=['silhouette','component','fabric'];
    } 
    
    setDressName(name){
        this.dressName=name;
    }
    
    adDressPart(obj){
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


// stroring for women category
var women=new StudioCategory('women');

// blouse desing area
var blouse=new Dress('blouse');


let front=new DressPart('front',1);
let back=new DressPart('back',1);
let button=new DressPart('button',2);
let sleeve=new DressPart('sleeve',2);
let collar=new DressPart('collar',2);
// setting blouse front parts style 
    let f1=new DressElement('Wide U Neckline',99,'WHIET_BLOUSE_zoom.jpg');
    front.addDressElement(f1);
    let f2=new DressElement('Wide V Neckline',99);
    front.addDressElement(f2);
    let f3=new DressElement('Wide Shoulder V ',99);
    front.addDressElement(f3);
    let f4=new DressElement('Sweetheart Neck',99);
    front.addDressElement(f4);
    let f5=new DressElement('Square Shape',99);
    front.addDressElement(f5);

blouse.adDressPart(front);

// setting blouse backside 
    const b1=new DressElement('Round U');
    back.addDressElement(b1);
    const b2=new DressElement('V Shape');
    back.addDressElement(b2);
    const b3=new DressElement('Diamond Shape');
    back.addDressElement(b3);
    const b4=new DressElement('Square Shape');
    back.addDressElement(b4);
    const b5=new DressElement('Closed Cover');
    back.addDressElement(b5);
    const b6=new DressElement('Small Oval');
    back.addDressElement(b6);
    const b7=new DressElement('Large Oval');
    back.addDressElement(b7);
    const b8=new DressElement('Filled with Strip');
    back.addDressElement(b8);

blouse.adDressPart(back);

// setting blouse sleeve
    const s1=new DressElement('Set-In');
    sleeve.addDressElement(s1);
    const s2=new DressElement('Bell');
    sleeve.addDressElement(s2);
    const s3=new DressElement('Butterfly');
    sleeve.addDressElement(s3);
    const s4=new DressElement('Flutter');
    sleeve.addDressElement(s4);
    const s5=new DressElement('Raglan');
    sleeve.addDressElement(s5);
    const s6=new DressElement('Bishop');
    sleeve.addDressElement(s6);
    const s7=new DressElement('Kimano');
    sleeve.addDressElement(s7);
    const s8=new DressElement('Kap');
    sleeve.addDressElement(s8);

    blouse.adDressPart(sleeve);

// setting blouse collar
    const c1=new DressElement('None');
    collar.addDressElement(c1);
    const c2=new DressElement('Regular');
    collar.addDressElement(c2);
    const c3=new DressElement('Redondo');
    collar.addDressElement(c3);
    const c4=new DressElement('Eton');
    collar.addDressElement(c4);
    const c5=new DressElement('Plano');
    collar.addDressElement(c5);
    const c6=new DressElement('Neru');
    collar.addDressElement(c6);

    blouse.adDressPart(collar);

women.addDress(blouse);
// women.showStudioCategory();
















// women dress image 
var womenDressType=[
    'Blouse', 'Dress', 'Skirt', 'Pant'
];
var blouse2={
    silhouette:['Long','Short'],
    component:['Sleeve','Collar','Button','Pocket','Embellishment'],
    cloth:['Color','Fabric']
}
