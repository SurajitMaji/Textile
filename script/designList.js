
    

class Design{

    constructor(){        
            this.designId=0;
            this.name='Dress Name';
            this.images=[];
            this.price=0,
            this.sizeWisePrice=[];            
            this.category='';
            this.rattings='0.0';
            this.neW=0;
            this.see=1;
            this.description='';
    }
    setInitialValues(id,name,image,price,category){
            this.designId=id;
            this.name=name;
            this.images.push(image);
            this.price=price;
            this.category=category;
        }
    showProduct() {
        return ` `;             
    }
    addImage(image){
            this.images.push(image);
    }
    makeUnseen(){
        this.see=0;
    }
    addDescription(desc){
        this.description=desc;
    }
    addSizeWisePrice(size,price){
        this.sizeWisePrice.push([size,price]);
    }
    

}

var designList=[];
var imageFolder='./design/';
// finding the 'id' number is present in this list or not, if exist then return the object
function findObject(id){
        for(var i=0;i<designList.length;i++){
            if(designList[i].designId==id){         
                return designList[i];
            }
        }
        return false;
    }



    // id,name,image,price,category -> setIntialValues function
var p1=new Design();
p1.setInitialValues(1, 'Full Sleeve Shirt','fullSleevShirtFront.jpg','150','men');
p1.addImage('fullSleevShirtBack.jpg');
p1.addImage('fullSleevShirtSide.jpg');
p1.addDescription('Get best stiching and comfotable wear');
designList.push(p1);

p1=new Design();
p1.setInitialValues(2, 'Full Sleeve Shirt','halfSleevOShirt.jpg','150','men');
p1.addImage('halfSleevOShirtBack.jpg');
p1.addDescription('Get best stiching and comfotable wear');
designList.push(p1);
  

