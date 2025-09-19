
    

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
        // for future this variable can also containg how much cloth required for the respective sizes
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

// getPriceFromSize(size,object)  --> function returns the price of the size dress stiching charge 
function getPriceFromSize(size,obj) {
    for(var i=0;i<obj.sizeWisePrice.length;i++){
        if(obj.sizeWisePrice[i][0]==size){
            return obj.sizeWisePrice[i][1];
        }
    }
    return false;
}

    // id,name,image,price,category -> setIntialValues function
var p1=new Design();
p1.setInitialValues(1, 'Full Sleeve Shirt','fullSleevShirtFront.jpg','150','men');
p1.addImage('fullSleevShirtBack.jpg');
p1.addDescription('Get best stiching and comfotable wear');
p1.addSizeWisePrice('XS');
p1.addSizeWisePrice('S');
p1.addSizeWisePrice('M');
p1.addSizeWisePrice('L');
p1.addSizeWisePrice('XL');
p1.addSizeWisePrice('XXL');
designList.push(p1);

p1=new Design();
p1.setInitialValues(2, 'Full Sleeve Shirt','halfSleevOShirt.jpg','150','men');
p1.addImage('halfSleevOShirtBack.jpg');
p1.addDescription('Get best stiching and comfotable wear');
designList.push(p1);
  
p1=new Design();
p1.setInitialValues(3, 'Long Kurta','db93331e-518c-499c-bfc9-034073192da0~F.jpg','180','men');
p1.addImage('db93331e-518c-499c-bfc9-034073192da0~B.jpg');
p1.addDescription('Get best stiching and comfotable wear');
designList.push(p1);


var p1=new Design();
p1.setInitialValues(4, 'Full Sleeve Frock','e2995356-442f-4ad9-b88b-bcb58a8a62fd~F.jpg','60','women');
p1.addImage('e2995356-442f-4ad9-b88b-bcb58a8a62fd~B.jpg');
p1.addDescription('Get best stiching and comfotable wear');
p1.addSizeWisePrice('12',60);
p1.addSizeWisePrice('14',60);
p1.addSizeWisePrice('16',60);
p1.addSizeWisePrice('18',60);
p1.addSizeWisePrice('20',60);
p1.addSizeWisePrice('22',60);
p1.addSizeWisePrice('24',80);
p1.addSizeWisePrice('26',80);
p1.addSizeWisePrice('28',80);
p1.addSizeWisePrice('30',80);
p1.addSizeWisePrice('32',100);
p1.addSizeWisePrice('34',100);
p1.addSizeWisePrice('36',100);
p1.addSizeWisePrice('38',100);
designList.push(p1);



var p1=new Design();
p1.setInitialValues(5, 'Sleeveless Frock','a7cc7cff-8635-40ed-9e9f-26cfed8ea5d7~F.jpg','60','women');
p1.addImage('a7cc7cff-8635-40ed-9e9f-26cfed8ea5d7~B.jpg');
p1.addDescription('Get best stiching and comfotable wear');
p1.addSizeWisePrice('12',60);
p1.addSizeWisePrice('14',60);
p1.addSizeWisePrice('16',60);
p1.addSizeWisePrice('18',60);
p1.addSizeWisePrice('20',60);
p1.addSizeWisePrice('22',60);
p1.addSizeWisePrice('24',80);
p1.addSizeWisePrice('26',80);
p1.addSizeWisePrice('28',80);
p1.addSizeWisePrice('30',80);
p1.addSizeWisePrice('32',100);
p1.addSizeWisePrice('34',100);
p1.addSizeWisePrice('36',100);
p1.addSizeWisePrice('38',100);
designList.push(p1);
